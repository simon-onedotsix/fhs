import { useState, useRef, useEffect } from "react"

import Head from "next/head"
import Script from "next/script"
import { useRouter } from "next/router"
import Link from "next/link"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useInView } from 'react-intersection-observer'

import _ from 'lodash'
import { format } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import parse from 'html-react-parser'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_WORLD as header } from '../../fixtures/nav'

import { Footer } from "../../fuselage/theme/2024/world/common/footer/footer"

import { TagIcon, StopwatchIcon, LocationIcon, WarningIcon } from "../../fuselage/components/icons/icons"

import { Modal } from "../../fuselage/theme/2024/world/components/modal/modal"
import { Sidebar } from "../../fuselage/layout/sidebar/sidebar"
import { Avatar } from '../../fuselage/components/avatar/avatar'
import { Button } from '../../fuselage/theme/2024/world/components/button/button'

import { AisLockup } from "../../fuselage/theme/2025/ais/ais-brand/ais-brand"
import { FhsLockup } from "../../fuselage/theme/2024/world/components/logos/fhs-brand"

import SimpleBar from "simplebar-react"
import 'simplebar-react/dist/simplebar.min.css'

import { 
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem as MenuItemInner,
	SubMenu as SubMenuInner 
} from '@szhsin/react-menu'
import DROPDOWN from '../../css/app/dropdown-world-2024.module.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

import { sortSpeakersAndModerators, renderSpeakerCard } from '../../lib/agenda-utils'

import CSS from '../../css/app/agenda-world-2024.module.css'




// custom topic selection and ordering
// to revert to API-driven replace the mapped variable with:
// groupFieldGroupsByName( sessions, 'Topics') or use TRACKS variable (set blow)


const FILTER_TRACKS = [
    { "id": "RmllbGRWYWx1ZV8yMzI1MzEyNg==", "name": "FHS Opening, Awards & Signings" },
    { "id": "RmllbGRWYWx1ZV8yMzI1MzEzNw==", "name": "Restaurant Invest (GRIF)" },
    { "id": "RmllbGRWYWx1ZV8yMzI1MzEyNw==", "name": "Brand & Destination" },
    { "id": "RmllbGRWYWx1ZV8yMzI1MzEzMQ==", "name": "ESG & Human Capital" },
    { "id": "RmllbGRWYWx1ZV8yMzI1MzEzMg==", "name": "Culture & Heritage" },
    { "id": "RmllbGRWYWx1ZV8yMzI1MzEzNQ==", "name": "Investment & Development" },
    { "id": "RmllbGRWYWx1ZV8yMzI1MzEzNg==", "name": "Networking" },
    { "id": "RmllbGRWYWx1ZV8yMzI1MzEzOA==", "name": "Startup Den" },
    { "id": "RmllbGRWYWx1ZV8yMzI1MzEyOA==", "name": "Talks" },
    { "id": "RmllbGRWYWx1ZV8yMzI1MzEzOQ==", "name": "Tech & Innovation" },
    { "id": "RmllbGRWYWx1ZV8yMzI1MzE0MQ==", "name": "Wellness" },
]

// end custom topic selection and ordering



// custom stream order

let PRIORITISED_STREAMS = [
    {
        "id": "RmllbGRWYWx1ZV8xOTEwNTI2NA==",
        "name": "Summit Stage",
		"color": "#006f6cff"
    },
    {
        "id": "RmllbGRWYWx1ZV8zMDI0NjUzNA==",
        "name": "Workshop Room 1",
		"color": "#0064dfff"
    },
    {
        "id": "RmllbGRWYWx1ZV8zMDI0NjUzNQ==",
        "name": "Workshop Room 2",
		"color": "#5c00c5ff"
    },
	{
		"id": "RmllbGRWYWx1ZV8yMjQ1NzUyOA==",
		"name": "Innovation Stage",
		"color": "#835c09"
	},
    {
		"id": "RmllbGRWYWx1ZV8yMDYxOTUyNA==",
        "name": "Exhibition Stage",
		"color": "#093c83"
    },
	{
		"id": "RmllbGRWYWx1ZV8xOTgzMTg2Nw==",
		"name": "Workshops (Marjan)",
		"color": "#800091ff"
	},
	{
		"id": "RmllbGRWYWx1ZV8yNjk4NTkzMg==",
		"name": "Workshops (Arena)",
		"color": "#910041ff"
	},
]

// end stream order



export default function Agenda ({ sessions, locations }) {

	const lenis = useLenis()
	const router = useRouter()

	// const lenis = useLenis(({ scroll }) => {
	// 	console.log(scroll)
	// })

	const [ filtersActive, setFiltersActive ] = useState (false)
	const [ selectedTopic, setSelectedTopic ] = useState (null)
    const [ selectedDay, setSelectedDay ] = useState (null)
    const [ selectedLocation, setSelectedLocation ] = useState(null)
    const [ showModal, setShowModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState({ avatar: '', name: '', title: '', company: '', bio: '', speakingOn: null })
	
	const [ searchActive, setSearchActive ] = useState (false)
	const [ search, setSearch ] = useState ('')


	


	useEffect(() => {
		// if session param is provided, scroll to session
		if ( lenis && router.isReady && router.query.session ) {
			lenis.scrollTo(`#${router.query.session}`, { duration: 1 })
			router.replace({
				pathname: router.pathname,
				search: new URLSearchParams(router.search).delete('session'),
			})
		}
		
		// if track param is provided, set topic
		if ( router.isReady && router.query.track ) {
			setSelectedTopic(router.query.track)
			router.replace({
				pathname: router.pathname,
				search: new URLSearchParams(router.search).delete('track'),
			})
		}
	})


	// utilties menu pinning
	const [utilties, utiltiesInView] = useInView({
		threshold: 1,
		rootMargin: '-30px 0px 0px 0px'
	})
	const [toggles, togglesInView] = useInView({
		threshold: 1,
		rootMargin: '-70px 0px 0px 0px'
	})



	// FILTER UTILS

	const resetFilters = () => {
		setSelectedDay(null)
		setSelectedLocation(null)
		setSelectedTopic(null)
	}



	// BUILD AGENDA
		
	const buildAgenda = ( sessionsData ) => {

		if ( !sessionsData ) return 



		// text search filtering

		sessionsData = sessionsData.filter( session => {

			if ( search.toLowerCase() === '' ) return session

			let searchContent = session.titleTranslations[0].value.toLowerCase()

			if ( session.speakers.length ) {
				session.speakers.forEach( speaker => {
					searchContent = searchContent + ` ${speaker.firstName.toLowerCase()}`
					searchContent = searchContent + ` ${speaker.lastName.toLowerCase()}`
					searchContent = searchContent + ` ${speaker.jobTitle?.toLowerCase()}`
					searchContent = searchContent + ` ${speaker.organization?.toLowerCase()}`
				})
			}

			if ( session.fields.length ) {
				session.fields.forEach( field => {
					searchContent = searchContent + ` ${field.value?.toLowerCase()} `
				})
			}

			// console.log('current session searchContent:', searchContent)

			if ( searchContent.includes(search.toLowerCase()) ) return session

		})


		
		const timeslots = _.groupBy(sessionsData, 'beginsAt')
		

		// calculate event days

		const getUniqueDays = ( sessionData ) => {

			const groupedStartTimes = _.groupBy(sessionData, 'beginsAt')
			const timeCodes = Object.keys(groupedStartTimes)
			const eventDays = _.uniqBy( timeCodes, string => string.slice(0, 10) )
	
			return eventDays
		}
		
		const agendaDays = []
		getUniqueDays( sessionsData ).map((timestring, index) => {
			agendaDays.push({ 
				day: format( new Date(timestring), "eeee dd MMMM" ), 
				time: timestring.slice(0, 10), 
				timeslots: [] 
			})
		})



		// filters

		const filterTopics = ( sessionData ) => {
		
			const filteredSessions = []
			
			if ( selectedTopic ) {
				// console.log('selectedTopic', selectedTopic)
				sessionData.forEach( session => {
					if ( session.fields.some( field => field.id == selectedTopic )) filteredSessions.push(session)
				})
			}
	
			// console.log('filters (topic)', filteredSessions.length ? filteredSessions.length : sessionData.length )
			return filteredSessions.length ? filteredSessions : sessionData
			
			
		}	
		
		const filterLocations = ( sessionData ) => {
			
			const filteredSessions = []
			
			if ( selectedLocation ) {
				// console.log('selectedLocation', selectedLocation)
				sessionData.forEach( session => {
					if ( session.fields.some( field => field.id == selectedLocation )) filteredSessions.push(session)
				})
			}
	
			// console.log('locations:', filteredSessions.length ? filteredSessions.length : sessionData.length )
			return filteredSessions.length ? filteredSessions : sessionData
			
			
		}
	
		const filterSessions = ( sessionData ) => {
			// console.log('filter intersection:', _.intersection( filterLocations(sessionData), filterTopics(sessionData) ))
			return _.intersection( filterLocations(sessionData), filterTopics(sessionData) )
		}


		// ++++++++++++++++++++
		
		// inject generic sessions here
		
		// ++++++++++++++++++++
		


		// group sessions (and apply filters)

		const filteredTimeslots = _.groupBy(filterSessions(sessionsData), 'beginsAt')
		
	
		// build agenda
	
		const agenda = []
		agendaDays.map( day => {
			let slots = []
			for ( const key in filteredTimeslots ) {
				if ( key.slice(0, 10) === day.time.slice(0, 10) ) {
					slots.push({ 
						beginsAt: filteredTimeslots[key][0].beginsAt, 
						endsAt: filteredTimeslots[key][0].endsAt, 
						sessions: filteredTimeslots[key]
					})
				}
			}
	
			agenda.push( { ...day , timeslots: slots } )
		})

		return agenda
	}


	
	// HANDLE SESSION FIELDS (TAGS)

	const getSessionLocation = ( sessionData ) => {
		if ( !sessionData.fields ) return

		let fieldsData = sessionData.fields.filter( (field) => field.definition?.name === 'Location' )

		return fieldsData.map ( (topic, index) => (
			<span key={index} className='sessionLocationTag fw-500'>{ topic.translations[0].value }</span> 
		))
	}

	const getSessionFields = ( sessionData, fieldHandle ) => {
		if ( !sessionData.fields || !fieldHandle ) return

		let fieldsData = sessionData.fields.filter( (field) => field.definition?.name === fieldHandle )

		return fieldsData.map ( (topic, index) => (
			<span key={index} className={`${CSS.sessionTag} fw-500`}>{ topic.translations[0].value }</span> 
		))
	}

	const groupFieldGroupsByName = ( sessionsData, fieldHandle ) => {
		if ( !sessionsData || !fieldHandle ) return []

		const fieldIds = []
		const fieldObjects = []
		const distilledFieldObjects = []

		// build arrays
		sessionsData.forEach( (session) => {
			let topics = session.fields.filter( (field) => field.definition?.name === fieldHandle )
			topics.forEach( (field) => {
				fieldIds.push(field.id)
				fieldObjects.push({ id: field.id, name: field.translations[0].value })
			})
		})

		// for unique IDs, search the field object array to find the related name
		_.uniq(fieldIds).forEach( (id) => {
			distilledFieldObjects.push(fieldObjects.find( (obj) => obj.id === id ))
		})

		return distilledFieldObjects
	}
	
	const getFieldGroupNameById = ( sessionData, fieldId, handle ) => {
		if ( !fieldId ) return
		let array = groupFieldGroupsByName( sessionData, handle )
		let obj = array.find( topic => topic.id === fieldId)
		return obj.name
	}




	// dropdown ui classes

	const menuClassName = ({ state }) => (
		state === "opening"
		? DROPDOWN.menuOpening
		: state === "closing"
		? DROPDOWN.menuClosing
		: DROPDOWN.menu
	)
	const menuItemClassName = ({ hover, disabled }) => ( 
		disabled
		? DROPDOWN.menuItemDisabled
		: hover
		? DROPDOWN.menuItemHover
		: DROPDOWN.menuItem
	)
	const submenuItemClassName = (modifiers) => ( 
		`${DROPDOWN.submenuItem} ${menuItemClassName(modifiers)}`
	)
	const MenuItem = (props) => (
		<MenuItemInner {...props} className={menuItemClassName} />
	)
	const SubMenu = (props) => (
		<SubMenuInner
			{...props}
			menuClassName={menuClassName}
			itemProps={{ className: submenuItemClassName }}
			offsetY={-7}
		/>
	)




	// STREAM PRIORITISING

	const prioriseStreams = ( sessionsData, locationsData ) => {

		if ( !sessionsData || !locationsData ) return

		const sortedStreams = []

		if ( sessionsData.length > 1 ) {

			// console.log('sorting')
			
			sessionsData.forEach( session => {
				if ( session.fields.find( (field) => field.definition.name === 'Location' ) ) {

					let location = session.fields.find( (field) => field.definition.name === 'Location' )
					session.priority = locationsData.map( i => i.id ).indexOf(location?.id)	
					
					let theme = PRIORITISED_STREAMS.find( i => i.id === location.id )
					if ( theme ) { session.color = theme.color }

					sortedStreams.push(session)

				} else {
					session.priority = 100
					sortedStreams.push(session)
				}
				
				
			})
			
			// console.log('–––––––––––––––––––-')
			// console.log( _.orderBy(sortedStreams, ['priority'], ['asc']) )
			
			return _.orderBy(sortedStreams, ['priority'], ['asc'])
		}

		// console.log('passing session back unchanged')

		return sessionsData

	}


	// SESSION UTILITIES

	const convertSeconds = (seconds) => {
		const hours = Math.floor(seconds / 3600)
		const minutes = Math.floor((seconds % 3600) / 60)
	
		const hourString = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''}` : ''
		const minuteString = minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''}` : ''
	
		if ( hours > 0 ) {
			return `${hourString} ${ minutes > 0 ? minuteString : ''}`

		} else if ( !hours && minutes > 0 ) {
			return `${minuteString}`

		}
	
		return
	}


	const TRACKS = _.orderBy(groupFieldGroupsByName( sessions, 'Topics'), ['id'], ['asc'])


	const sortSpeakersAndModeratorAndInvestors = ( sessionData ) => {

		const moderatorIDs = []
		const moderators = []
		const investorIDs = []
		const investors = []
		const speakers = []

		// find moderatorIDs by targeting custom swapcard field at session-level
		sessionData.fields.map(field => {
			if (field.definition?.id === "RmllbGREZWZpbml0aW9uXzg0NDQ3Nw==") {
				if (field.value.includes(", ")) {
					const mods = field.value.split(", ")
					mods.map(id => {
						// target ali
						id === "Q29tbXVuaXR5UHJvZmlsZV8zMTE2OTU2Mg=="
							? moderatorIDs.push(id)
							: investorIDs.push(id)
					})
				} else {
					moderatorIDs.push(_.replace(field.value, ',', ''))
				}
			}
		})

		// map through all the speakers (sorted into alpha order) and pull out the moderator (if one exists)
		_.orderBy(sessionData.speakers, 'lastName').map(speaker => {
			if (moderatorIDs.includes(speaker.communityProfile.id)) {
				moderators.push(speaker)
			} else if (investorIDs.includes(speaker.communityProfile.id)) {
				investors.push(speaker)
			} else {
				speakers.push(speaker)
			 }
		})
		
		 console.log('moderators:', moderators)
		 console.log('investors:', investors)
		 console.log('speakers:', speakers)

		// output the speakers
		if ( moderators.length && speakers.length ) { 
			return (
				<>
					{
						moderators.length ?
							<div>
								<div style={{ display: `flex`, flexWrap: `wrap`, gap: `var(--space-sm)` }}>
									<section>
										<p className="c-accent pb-xs">{moderators.length > 1 ? 'Moderators' : 'Moderator' }</p>
										<div className={CSS.sessionSpeakerGrid}>
											{ moderators.map( moderator => renderSpeakerCard(moderator) ) }
										</div>
									</section>

									<section>
										<p className="c-accent pb-xs">Investors</p>
										<div className={CSS.sessionSpeakerGrid}>
											{ investors.map( investor => renderSpeakerCard(investor) ) }
										</div>
									</section>
								</div>

								{
									speakers.length ?
										<p style={{ color: `var(--accent)`, padding: `10px 0 0 0`}}>In conversation with</p>
									: null
								}
							</div>
						: null
					}
					<div className={CSS.sessionSpeakerGrid}>
						{ speakers.map( speaker => renderSpeakerCard(speaker) ) }
					</div>
				</>
			)
		}

		return (
			<div className={CSS.sessionSpeakerGrid}>
				{ sessionData.speakers.map( speaker => renderSpeakerCard(speaker) ) }
			</div>
		)
	}



	console.log('sessions:', sessions)
	// console.log('locations [swc]:', locations)
	// console.log('locations:', groupFieldGroupsByName( sessions, 'Location'))
	// console.log('locations:', _.orderBy(groupFieldGroupsByName( sessions, 'Location'), ['id'], ['asc'])   )
	// console.log('position based on ID (for exhibition-stage):', locations.map( i => i.id ).indexOf('RmllbGRWYWx1ZV8yMDYxOTUyNA=='))
	// console.log('position based on ID (for yanbu-workshop-room):', locations.map( i => i.id ).indexOf('RmllbGRWYWx1ZV8yMjU3Nzc5NQ=='))	
	// console.log('topics:', _.orderBy(groupFieldGroupsByName( sessions, 'Topics'), ['id'], ['asc']) )
	// console.log('SEARCH:', search)





	// const getSessionsWithType = ( sessionData ) => {
	// 	let array = []

	// 	sessionData.forEach( session => {
	// 		session.fields.forEach( field => { if (field.definition.name === 'Type') { array.push(session) } })
	// 	})
		
	// 	console.log('generic sessions:', array )
	// }

	// getSessionsWithType( sessions )



	




	const breakTitle = ( trigger, titleString, splitPoint ) => {
		if ( !titleString.includes(trigger) ) return titleString
		let lines = titleString.split(splitPoint)
		return `${lines[0]}:<br/>${lines[1]}`		
	}


    return (
        <ReactLenis root>

				<Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
			</Head>

			<EventsBar site={'/world'} />
            <Header
				site={`/world`}
                handle={`World`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />

            <section className={`${CSS.agendaWrapper} block`}>
                
				<span id="agenda"/>

				{/* INTRO */}
                <div className="section mb-sm">
					<div className={CSS.titleBlock}>
						<p className="fs-0 fw-500">2026 Agenda</p>
						<button 
							className={CSS.printButton}
							onClick={ ()=> window.print() }
						><PrinterIcon />Print Agenda</button>
					</div>
					<div className="formatted mt-md">
						<p>Programme is subject to change.</p>
					</div>
                </div>



				<span ref={toggles}/>
				<div ref={utilties} className={CSS.utilities}>

					{/* FILTERS */}
					<section className={CSS.filters}>

						{/* mobile-only toggle */}
						<div id="agendaMob" className={CSS.filterToggleContainer}>
							<button 
								className={`${CSS.filterToggle} ${ !togglesInView && CSS.fixed } ${filtersActive && CSS.active}`} 
								style={{ zIndex: filtersActive ? 110 : 6 }}
								onClick={() => {
									setFiltersActive(!filtersActive)
									lenis.scrollTo('#agendaMob', { duration: 1 })
								}}
							>{ filtersActive ? <Close /> : <FilterIcon color={'white'} /> }</button>
						</div>

						<div className={`${CSS.filterLayout} ${CSS.filterGroup} ${ !utiltiesInView && CSS.fixed } ${filtersActive && CSS.active}`}>
							{/* tracks (topics) */}
							<section className={CSS.filterLayoutButtons}>
								<Menu 
									menuButton={
										<MenuButton className={DROPDOWN.button}>
											<strong className="left">{ selectedTopic ?  getFieldGroupNameById(sessions, selectedTopic, 'Topics') : `Tracks` }</strong> <Chevron />
										</MenuButton>
									} 
									transition 
									menuClassName={menuClassName}
									position={'initial'}
								>
									<div className="columns-2">
										{
											sessions &&
											TRACKS.map( 
												filter => <MenuItem key={filter.id} onClick={() => {
													setSelectedTopic(filter.id)
													lenis.scrollTo('#agenda', { duration: 1 })
												}}>{ filter.name }</MenuItem> 
											)
										}
										<MenuItem key={0} onClick={() => {
											setSelectedTopic('')
											lenis.scrollTo('#agenda', { duration: 1 })
										}}>All tracks</MenuItem>

									</div>
								</Menu>
							</section>

							{/* days */}
							<section className={CSS.filterLayoutButtons}>
								<Menu 
									menuButton={
										<MenuButton className={DROPDOWN.button}><strong className="left">{ selectedDay ?  selectedDay : `Days` }</strong> <Chevron /></MenuButton>
									} 
									transition 
									menuClassName={menuClassName}
								>
									{
										sessions &&
										buildAgenda( sessions ).map( 
											(day, index) => <MenuItem key={index} onClick={() => {
												setSelectedDay(day.day)
												lenis.scrollTo('#agenda', { duration: 1 })
											}}>{ day.day }</MenuItem>
										)
									}
									<MenuItem key={0} onClick={() => {
										setSelectedDay(null)
										lenis.scrollTo('#agenda', { duration: 1 })
									}}>All days</MenuItem>
								</Menu>
							</section>

							{/* locations */}
							<section className={CSS.filterLayoutButtons}>
								<Menu 
									menuButton={
										<MenuButton className={DROPDOWN.button}>
											<strong className="left">{ selectedLocation ?  getFieldGroupNameById(sessions, selectedLocation, 'Location') : `Stages` }</strong> <Chevron />
										</MenuButton>
									} 
									transition 
									menuClassName={menuClassName}
								>
									{
										sessions &&
										_.orderBy(groupFieldGroupsByName( sessions, 'Location'), ['id'], ['asc']).map( 
											filter => <MenuItem key={filter.id} onClick={() => {
												setSelectedLocation(filter.id)
												lenis.scrollTo('#agenda', { duration: 1 })
											}}>{ filter.name }</MenuItem> 
										)
									}
									<MenuItem key={0} onClick={() => {
										setSelectedLocation('')
										lenis.scrollTo('#agenda', { duration: 1 })
									}}>All stages</MenuItem>
								</Menu>
							</section> 

							{/* reset filters */}
							{
								selectedDay || selectedLocation || selectedTopic ?
									<section className={CSS.agendaFilterResetWrapper}>
										<button className={CSS.agendaFilterReset} onClick={resetFilters}><span><Close /></span> Reset all filters</button>
									</section>
								: null
							}

							<div className={CSS.filterActions}>
								<button className={CSS.filterActionButton} onClick={ () => setFiltersActive(!filtersActive) }>Apply</button>
							</div>
						</div>

					</section>


					{/* SEARCH */}
					<section className={`${CSS.search}`}>

						{/* mobile-only toggle */}
						<div id="searchMob" className={CSS.searchToggleContainer}>
							<button 
								className={`${CSS.searchToggle} ${ !togglesInView && CSS.fixed } ${searchActive && CSS.active} `} 
								style={{ zIndex: searchActive ? 105 : 6 }}
								onClick={() => {
									setSearchActive(!searchActive)
									lenis.scrollTo('#agendaMob', { duration: 1 })
								}}
							>{ searchActive ? <Close /> : <SearchIcon color={'white'} /> }</button>
						</div>

						{/* search form */}
						<div className={`${CSS.searchLayout} ${ !utiltiesInView && CSS.fixed } ${searchActive && CSS.active}`}>
							<div className={CSS.searchFormContainer}>
								
								<input 
									type="text" 
									placeholder="Search" 
									onChange={ e => {
										e.preventDefault()
										setSearch(e.target.value) 
									}}
									value={search}
									
								/>
								
								<button
									className={`${CSS.searchReset} ${ search !== '' ? CSS.active : ''}`}
									onClick={ () => {
										setSearch('')
										lenis.scrollTo('#agendaMob', { duration: 1 })
									}}
								>&times;</button>
							</div>
						</div>
					</section>
				
				</div>

				

				{/* AGENDA */}
				<main className={`${CSS.agenda} section columns-1 gap-sm mt-sm`}>	
					
					{
						buildAgenda( sessions ).length 
						? buildAgenda( sessions ).map( (day, index) => {

							if ( selectedDay && selectedDay !== day.day ) return

							return (
								<section key={index} className={CSS.day}>
									<p key={index} className={CSS.dayDivider}> { day.day }</p>
									{
										day.timeslots.length ?
										day.timeslots.map( (slot, index) => {

											return (
												<div key={index}>


													{/* INJECTED BANNERS */}

													{
														slot.sessions[0].id === 'UGxhbm5pbmdfMzExNDgxMg==' &&
														<div className={CSS.banner}><div style={{ width: 320 }}><img src="/assets/img/ais/ais-logo.svg" alt="" /></div></div>
													}
													
													{
														slot.sessions[0].id === 'UGxhbm5pbmdfMzIwMDkyNg==' &&
														<div className={CSS.banner}><FhsLockup inverse /></div>
													}


													{/* SESSIONS */}

													<div className={CSS.sessions}>
														{
															prioriseStreams(slot.sessions, PRIORITISED_STREAMS).map((session, index) => {
																// console.dir(session)

																return (
																	<div key={index} className={CSS.sessionsWrapper}>
																		<span className="sessionAnchor" id={session.id.slice(0, -2)}/>

																		<div
																			className={CSS.session}
																			style={{ display: session.categories.includes('UAE – Africa Tourism Investment Summit') ? 'none' : 'block' }}
																		>

																			{/* add to div below to colour-code headers => style={{ backgroundColor: session.color ? session.color : null }} */}
																			<div className={`${CSS.sessionHeader} fw-500 c-white bg-medium`}>
																				
																				{
																					session.beginsAt && session.endsAt ?
																						<div className={CSS.sessionTimings}>
																							<span>
																								{format( new Date(session.beginsAt), "HH:mm" )} - { format( new Date(session.endsAt), "HH:mm" )}&ensp;
																							</span>

																							<span>
																								<StopwatchIcon fill={'var(--accent)'}/> { convertSeconds(parseInt(new Date(session.endsAt).getTime() - new Date(session.beginsAt).getTime())/1000) }
																							</span>
																						</div>
																					: null
																				}

																				{
																					getSessionFields( session, 'Location').length ?
																						<div className={CSS.sessionTagGrid}>
																							{session.fields.length ? <LocationIcon fill={'var(--accent)'}/> : null }
																							{getSessionLocation( session )}
																						</div>
																					: null
																				}
																			</div>

																			<div className={`${CSS.sessionContent} | columns-1 gap-xs`}>

																				{/* <small style={{ color: 'lime'}}>{session.id}</small> */}
																				{/* <small style={{ color: 'lime'}}>{session.priority}</small> */}
																				
																				<p className={`${CSS.sessionTitle} | fs-4 fw-500 lh-1 c-white`}>
																					{ parse(breakTitle(":", session.titleTranslations[0].value, ": ")) }
																				</p>

																				{
																					getSessionFields( session, 'Topics').length ?
																						<div className={CSS.sessionTagGrid}>
																							<TagIcon fill={`var(--accent)`} />
																							{getSessionFields(session, 'Topics')}
																							{
																								session.categories.includes('UAE – Africa Tourism Investment Summit')
																									? <p className="flex ai-center fs-sm"><WarningIcon fill={`yellow`} />&ensp;Restricted Access</p>
																									: null
																							}

																							{
																								session.id === "UGxhbm5pbmdfMjkwMTU4Mw==" ||
																								session.id === "UGxhbm5pbmdfMjYyODkwMQ==" ||
																								session.id === "UGxhbm5pbmdfMjYyODkxMQ==" ||
																								session.id === "UGxhbm5pbmdfMjYyODkwOA=="
																									? <span className={`${CSS.sessionTag} fw-500`}>Free for BRF pass holders</span>
																									: null
																							}
																						</div>
																					: null
																				}
																				
																				{/* add speed networking sponsor logo */}
																				{
																					session.id === "UGxhbm5pbmdfNDQ0NTg3Mg==" ||
																					session.id === "UGxhbm5pbmdfNDQ0NTkwMQ==" ||
																					session.id === "UGxhbm5pbmdfNDUzMDc3Nw=="
																						? <div>
																							<p className="fs-sm caps mb-xxs">Sponsored by</p>
																							<Link href={`/world/partners/RXhoaWJpdG9yXzIzODA4MjY=`}>
																								<a style={{ display: `inline-block`, backgroundColor: `white`, padding: 10, borderRadius: 5 }}>
																									<img src="/assets/img/world/pages/partners/FSK-Logo-Horizontal.png" alt="" width={100} />
																								</a>
																							</Link>
																						  </div>
																						: null
																				}
																				{/* add images to networking reception */}
																				{
																					session.id === "UGxhbm5pbmdfNDQ2MzI4Mw=="
																						? <div className="columns-3 gap-xs">
																							<img src="/assets/img/world/pages/agenda/networking-01.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
																							<img src="/assets/img/world/pages/agenda/networking-02.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
																							<img src="/assets/img/world/pages/agenda/networking-03.jpg" alt="" width={`100%`} style={{ borderRadius: 5 }} />
																						  </div>
																						: null
																				}

																				{
																					session.descriptionTranslations.length ?
																						parse( session.descriptionTranslations[0].value )
																					: null
																				}
																				
																				{/* { sortSpeakers(session.speakers) } */}
																				
																				{/* custom speaker sorting for pitchpoint sessions */}
																				{
																					session.id === "UGxhbm5pbmdfMjc0MTYzNQ==" || session.id === "UGxhbm5pbmdfMjc0MTYzOA=="
																					? sortSpeakersAndModeratorAndInvestors(session)
																					: sortSpeakersAndModerators(session)
																				}
																			</div>
																			
																		</div>
																	</div>
																)
															})
														}
													</div>

												</div>
											)
										}) : <p className="fs-5 fw-400 py-xs">No { getFieldGroupNameById( sessions, selectedTopic, 'Topics' ) } sessions available { selectedLocation  ? 'at this location' : null } on this day.</p>
									}
								</section>
							)
						})
						: <p className="fs-4 fw-600">No sessions found!</p>
					}

				</main>

				
            </section>

			<div className={CSS.actions}>
				<button className={CSS.scrollButton} onClick={() => { lenis.scrollTo('#agenda', { duration: 1 }) }}>
					<ChevronUp/>
				</button>
			</div>






            <Modal onClose={() => setShowModal(false)} show={showModal}>

                <Sidebar size={`medium`}>
                    <aside className="center">
                        {
                            modalContent.avatar ?
                                <Avatar src={modalContent.avatar}/>
                                :
                                <Avatar src={`/assets/ui/avatar-fallback.png`}/>
                        }
                        <p className="fs-5 fw-600 c-white mt-xs lh-1">{ modalContent.name }</p>
                        <p className="fs-sm fw-400 c-accent mt-xs">{modalContent.title} <br/>{modalContent.company}</p>
                    </aside>
                    
					<section>
						<SimpleBar style={{ maxHeight: `50vh` }}>
							<div className="formatted pr-xs" dangerouslySetInnerHTML={{ __html: modalContent.bio }}></div>
						</SimpleBar> 
					</section>

                    
                </Sidebar>

            </Modal>


            <Footer theme={{ footerBg: 'bg-white' }} />
            <LenisScroller />

        </ReactLenis>
    )
}
Agenda.theme = 'world-2024'





const SpeakerCard = ({ speaker, type }) => {

	return (
		<div key={speaker.id} className={CSS.sessionSpeaker}>

			<span className={CSS.speakerAvatar} style={{ cursor: speaker.biography ? 'pointer' : 'default' }}>
				{
					speaker.photoUrl ?
						<img src={speaker.photoUrl} alt="" style={{ maxWidth: 100, maxHeight: 100, borderRadius: 100, marginBottom: 10 }} />
					: 
						<img src={`/assets/ui/avatar-fallback.png`} alt="" style={{ maxWidth: 100, maxHeight: 100, borderRadius: 100, marginBottom: 10 }} />

				}
			</span>

			<p className="fw-600">{ speaker.firstName } { speaker.lastName }</p>
			<p className="fs-sm lh-1">{ speaker.jobTitle }<br />{ speaker.organization }</p>
		</div>
	)
}

const ChevronUp = () => {
	return (
			<svg width="100%" height="100%" viewBox="0 0 32 20" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinecap:`square`, strokeMiterlimit:1.5 }}>
				<g transform="matrix(1,0,0,1,-2137,-269)">
					<g id="chevron-up" transform="matrix(-1.3,-1.3,-1.3,1.3,3687.02,662.598)">
						<path d="M730,440L740,440L740,450" style={{ fill:`none`, strokeWidth:`2px` }}/>
					</g>
				</g>
			</svg>
	)
}

const Chevron = () => {
	return (
		<span style={{ display: `inline-block`, height: 12, width: 20, marginLeft: 6 }}>
			<svg width="100%" height="100%" viewBox="0 0 28 20" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinecap:`square`, strokeMiterlimit:3 }}>
				<g transform="matrix(1,0,0,1,-4176,-535)">
					<g transform="matrix(0.5,0,0,0.5,2065,250)">
						<path id="dropdown-chevron" d="M4230,580L4250,600L4270,580" style={{ fill:`none`, strokeWidth:`8px` }}/>
					</g>
				</g>
			</svg>
		</span>
	)
}

const FilterIcon = ({ color }) => {
	return (
		<svg width="100%" height="100%" viewBox="0 0 18 19" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeMiterlimit:1.5 }}>
			<path id="icon-filter" d="M16,2L16,5L11,11L11,17L7,15L7,11L2,5L2,2L16,2Z" style={{ fill:`none`, stroke: color ? color : 'var(--accent)', strokeWidth:1.5 }}/>
		</svg>
	)
}

const SearchIcon = ({ color }) => {
	return (
		<svg width="100%" height="100%" viewBox="0 0 20 20" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeMiterlimit:2 }}>
			<g transform="matrix(1,0,0,1,-2511,-135)">
				<g id="icon-search" transform="matrix(0.515035,0,0,0.515035,2511.24,135.556)">
					<path d="M15.697,31.349C17.503,31.349 19.216,31.058 20.838,30.477C22.46,29.895 23.944,29.084 25.29,28.044L33.873,36.673L36.627,33.873L28.044,25.29C29.084,23.944 29.895,22.46 30.477,20.838C31.058,19.216 31.349,17.503 31.349,15.697C31.349,13.525 30.936,11.49 30.109,9.593C29.283,7.696 28.166,6.036 26.759,4.613C25.351,3.19 23.684,2.065 21.756,1.239C19.859,0.413 17.839,0 15.697,0C13.525,0 11.49,0.413 9.593,1.239C7.696,2.065 6.036,3.19 4.613,4.613C3.19,6.036 2.065,7.696 1.239,9.593C0.413,11.49 0,13.525 0,15.697C0,17.839 0.413,19.859 1.239,21.756C2.065,23.684 3.19,25.351 4.613,26.759C6.036,28.166 7.696,29.283 9.593,30.109C11.49,30.936 13.525,31.349 15.697,31.349ZM15.697,3.947C17.319,3.947 18.834,4.253 20.241,4.865C21.679,5.477 22.926,6.311 23.982,7.367C25.038,8.422 25.887,9.669 26.529,11.107C27.141,12.546 27.447,14.076 27.447,15.697C27.447,17.319 27.141,18.834 26.529,20.241C25.887,21.679 25.038,22.926 23.982,23.982C22.926,25.038 21.679,25.887 20.241,26.529C18.834,27.141 17.319,27.447 15.697,27.447C14.076,27.447 12.546,27.141 11.107,26.529C9.669,25.887 8.422,25.038 7.367,23.982C6.311,22.926 5.477,21.679 4.865,20.241C4.253,18.834 3.947,17.319 3.947,15.697C3.947,14.076 4.253,12.546 4.865,11.107C5.477,9.669 6.311,8.422 7.367,7.367C8.422,6.311 9.669,5.477 11.107,4.865C12.546,4.253 14.076,3.947 15.697,3.947Z" style={{ fill: color ? color : 'var(--accent)', fillRule:'nonzero' }}/>
				</g>
			</g>
		</svg>
	)
}

const PrinterIcon = ({ color }) => {
	return (
		<svg width="16" height="16" viewBox="0 0 16 18" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeMiterlimit:1.5 }}>
			<g transform="matrix(1,0,0,1,-2615,-138)">
				<g id="printer" transform="matrix(0.557918,0,0,0.557918,1290.56,6.44085)">
					<path d="M2381.63,259.726L2375.8,259.726L2375.8,244.224L2400.43,244.224L2400.43,259.726L2394.6,259.726L2394.6,253.717L2381.63,253.717L2381.63,259.726Z" style={{ fill:`none`, stroke: color ? color : 'var(--accent)', strokeWidth:1.79 }}/>
					<g transform="matrix(0.526495,0,0,0.745724,1130.79,71.5936)">
						<rect x="2375.8" y="244.224" width="24.631" height="15.502" style={{ fill:`none`, stroke: color ? color : 'var(--accent)', strokeWidth:2.78 }}/>
					</g>
					<g transform="matrix(0.526495,0,0,0.327579,1130.79,159.143)">
						<rect x="2375.8" y="244.224" width="24.631" height="15.502" style={{ fill:`none`, stroke: color ? color : 'var(--accent)', strokeWidth:4.09 }}/>
					</g>
					<circle cx="2381.62" cy="248.903" r="0.906" style={{ fill: color ? color : 'var(--accent)' }}/>
					<g transform="matrix(1,0,0,1,2.95813,0)">
						<circle cx="2381.62" cy="248.903" r="0.906" style={{ fill: color ? color : 'var(--accent)' }}/>
					</g>
				</g>
			</g>
		</svg>
	)
}

const Close = () => {
	return (
		<svg width="100%" height="100%" viewBox="0 0 24 24" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinejoin:`round`, strokeMiterlimit:1.5 }}>
			<g transform="matrix(0.760499,0,0,0.760499,-1524.21,-102.075)">
				<g id="icon-close">
					<path d="M2010,140L2030,160" style={{ fill:`none`, stroke:`white`, strokeWidth: 3.5 }}/>
					<g transform="matrix(-1,0,0,1,4040,0)">
						<path d="M2010,140L2030,160" style={{ fill:`none`, stroke:`white`, strokeWidth: 3.5 }}/>
					</g>
				</g>
			</g>
		</svg>
	)
}





export async function getStaticProps() {

	const eventQuery = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query EventById($eventId: ID!) {

						event(id: $eventId) {
							planningsPlaces {
								id
								name
								value
							}
						}

						plannings(eventId: "${process.env.SWAPCARD_EVENT_ID_AE_2026}", page: 1, pageSize: 500) {
							id
							titleTranslations {
								value
								language
							}
							beginsAt
							endsAt
							descriptionTranslations {
								value
								language
							}
							format
							fields {
								... on SelectField {
									id
									definition {
										isDefault
										name
									}
									value
									translations {
										value
									}
								}
								... on MultipleSelectField {
									id
									definition {
										isDefault
										name
									}
									value
									translations {
										value
									}
								}
									... on TextField {
									id
									definition {
										id
										name
									}
									value
								}
							}
							speakers {
								communityProfile {
									id
								}
								firstName
								id
								jobTitle
								lastName
								photoUrl
								organization
								biography
								withEvent(eventId: "${process.env.SWAPCARD_EVENT_ID_AE_2026}") {
									eventProfile {
										type
										withEvent(eventId: "RXZlbnRfMjQwNDQ3Nw==") {
											speakerOnPlannings {
												id
												title
												beginsAt
												endsAt
											}
										}
										fields {
											... on SelectField {
												id
												definition {
													name
												}
												value
												translations {
													value
												}
											}
										}
									}
								}
							}
							categories
						}
					}
				`,
				variables: {
					"eventId": process.env.SWAPCARD_EVENT_ID_AE_2026,
					"page": 1
				}
			})
		}
	)

	const result = await eventQuery.json()
	

	// console.log('RESULT', result)
	// console.log('TEST plannings', result.data.event.planningsPlaces)
	// console.log('TEST sessions', result.data.plannings)
  

    if ( result.data ) return { 
        props: { 
            sessions: result.data.plannings,
			locations: result.data.event.planningsPlaces
        } 
    }

	return { props: {} }
}