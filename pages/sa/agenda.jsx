import { useState, useRef, useEffect } from "react"

import Head from "next/head"
import Script from "next/script"
import { useRouter } from "next/router"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useInView } from 'react-intersection-observer'

import _ from 'lodash'
import { format } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import parse from 'html-react-parser'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_SA as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'

import { TagIcon, CompassIcon, StopwatchIcon, LocationIcon } from "../../fuselage/components/icons/icons"

import { Modal } from "../../fuselage/theme/2024/sa/components/modal/modal"
import { AgendaModal } from "../../fuselage/theme/2024/sa/components/agenda-modal/agenda-modal"
import { Sidebar } from "../../fuselage/layout/sidebar/sidebar"
import { Avatar } from '../../fuselage/components/avatar/avatar'
import { Button } from '../../fuselage/theme/2024/sa/components/button/button'
import { ThemesSlider } from "../../fuselage/theme/2024/world/components/themes-slider/themes-slider"
import { PopOverlay } from "../../fuselage/components/popoverlay/popoverlay"

import SimpleBar from "simplebar-react"
import 'simplebar-react/dist/simplebar.min.css'

import { 
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem as MenuItemInner,
	SubMenu as SubMenuInner 
} from '@szhsin/react-menu'
import DROPDOWN from '../../css/app/dropdown.module.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

import CSS from '../../css/app/agenda-sa-2025.module.css'






import { THEMES_DATA } from "./themes"

const speakerTags = [
			{
				id: 'U3BlYWtlcihFdmVudF8yNzA0MTA1LEV2ZW50UGVvcGxlXzQ2MjkzMDk4LFVzZXJfMjI3OTQwODIp',
				firstName: 'Rema',
				lastName: 'Alyahya',
				tag: 'Judge'
			},
			{
				id: 'U3BlYWtlcihFdmVudF8yNzA0MTA1LEV2ZW50UGVvcGxlXzQ2NTUzNzUyLFVzZXJfMjQwNzI2MTQp',
				firstName: 'Yasser',
				lastName: 'AlSharif',
				tag: 'Judge'
			},
			{
				id: 'U3BlYWtlcihFdmVudF8yNzA0MTA1LEV2ZW50UGVvcGxlXzQ2NjU1NTA0LFVzZXJfMjU1MjI0MTUp',
				firstName: 'Saad',
				lastName: 'Shabbir',
				tag: 'Judge'
			},
			{
				id: 'U3BlYWtlcihFdmVudF8yNzA0MTA1LEV2ZW50UGVvcGxlXzQ2NzYwMzI0LFVzZXJfMjg1MjgxODAp',
				firstName: 'Sarah',
				lastName: 'Al-Shawwaf',
				tag: 'Member of Women In Business'
			},
			{
				id: 'U3BlYWtlcihFdmVudF8yNzA0MTA1LEV2ZW50UGVvcGxlXzQ2ODM4NzUwLFVzZXJfMTAzNDU5MDYp',
				firstName: 'Yvonne',
				lastName: 'Winter',
				tag: 'Member of Women In Business'
			},
			{
				id: 'U3BlYWtlcihFdmVudF8yNzA0MTA1LEV2ZW50UGVvcGxlXzQ1ODc5MjA0LFVzZXJfMjgwMDc3Mjkp',
				firstName: 'Ragad',
				lastName: 'Al-Nasser',
				tag: 'Member of Women In Business'
			},
			{
				id: 'U3BlYWtlcihFdmVudF8yNzA0MTA1LEV2ZW50UGVvcGxlXzQ2MjkzMDk4LFVzZXJfMjI3OTQwODIp',
				firstName: 'Rema',
				lastName: 'Alyahya',
				tag: 'Judge & Member of Women In Business'
			},
			{
				id: '',
				firstName: 'Amani',
				lastName: 'Alonaizi',
				tag: 'Judge & Member of Women In Business'
			},
		]


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
					searchContent = searchContent + ` ${field.value.toLowerCase()} `
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

		let fieldsData = sessionData.fields.filter( (field) => field.definition.name === 'Location' )

		return fieldsData.map ( (topic, index) => (
			<span key={index} className='sessionLocationTag fw-500'>{ topic.translations[0].value }</span> 
		))
	}

	const getSessionFields = ( sessionData, fieldHandle ) => {
		if ( !sessionData.fields || !fieldHandle ) return

		let fieldsData = sessionData.fields.filter( (field) => field.definition.name === fieldHandle )

		return fieldsData.map ( (topic, index) => (
			<span key={index} className='sessionTag fw-500'>{ topic.translations[0].value }</span> 
		))
	}

	const groupFieldGroupsByName = ( sessionsData, fieldHandle ) => {
		if ( !sessionsData || !fieldHandle ) return []

		const fieldIds = []
		const fieldObjects = []
		const distilledFieldObjects = []

		// build arrays
		sessionsData.forEach( (session) => {
			let topics = session.fields.filter( (field) => field.definition.name === fieldHandle )
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
		if ( obj ) return obj.name
		return
	}
	

	// HANDLE SPEAKERS PER SESSION (pick out moderators)

	const sortSpeakers = ( speakerData ) => {

		if ( !speakerData ) return

		let moderators = []
        let speakers = []

		_.orderBy(speakerData, 'lastName').forEach(speaker => {
			// console.log(speaker)
			speaker.withEvent.eventProfile.type === 'Moderator' ? moderators.push( speaker ) : speakers.push( speaker )
		})


		if ( moderators.length && speakers.length ) return (
			<>
				{
					moderators.length ?
						<div>
							<p className="c-accent fw-600 pb-xs">{moderators.length > 1 ? 'Moderators' : 'Moderator' }</p>
							<div className={CSS.sessionSpeakerGrid}>
								{ moderators.map( moderator => renderSpeakerCard(moderator) ) }
							</div>
							{
								speakers.length ?
									<p style={{ color: `var(--accent)`, fontWeight: 600, padding: `10px 0 0 0`}}>In conversation with</p>
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

		return (
			<div className={CSS.sessionSpeakerGrid}>
				{ speakerData.map( speaker => renderSpeakerCard(speaker) ) }
			</div>
		)
	}

	const displaySpeakers = ( speakerData ) => {

		if ( !speakerData ) return

		return (
			<div className={CSS.sessionSpeakerGrid}>
				{ _.reverse(speakerData).map( speaker => renderSpeakerCard(speaker) ) }
			</div>
		)

	}

	const changeSpeakerStatus = ( speakerData, speakerID, newType ) => {
		const updatedSpeakerData = speakerData.map( speaker => {
			if ( speaker.id === speakerID ) {

				return { ...speaker, withEvent: { eventProfile: { type : newType }} }
			}
			return speaker
		})
		return updatedSpeakerData
	}

	const renderSpeakerCard = ( speaker ) => {
		return (
			<span
				key={speaker.id} 
				className={CSS.speakerCardWrapper}
				onClick={() => {
					if ( speaker.biography ) {
						setModalContent({
							avatar: speaker.photoUrl,
							name: `${speaker.firstName} ${speaker.lastName}`,
							title: speaker.jobTitle,
							company: speaker.organization,
							bio: speaker.biography,
							speakingOn: speaker.withEvent?.eventProfile.withEvent?.speakerOnPlannings
						})
						setShowModal(true)
					}
				}
			}><SpeakerCard key={speaker.id} speaker={speaker}/></span>
		)
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

	// Summit Stage
	// Najd Breakout Room
	// Centre Stage

	// {id: 'RmllbGRWYWx1ZV8xOTEwNTI2NA==', name: 'Summit Stage'}
	// {id: 'RmllbGRWYWx1ZV8yNTg4MzM4MA==', name: 'Centre Stage'}
	// {id: 'RmllbGRWYWx1ZV8yNTk5MTYyMQ==', name: 'Najd Breakout Room'}
	// {id: 'RmllbGRWYWx1ZV8zMDc0ODU1Mw==', name: 'The Globe'}

	const prioriseStreams = ( sessionsData ) => {
	
			if ( !sessionsData || sessionsData.length === 1 ) return sessionsData
	
			// knowledge station, pioneer camp, showcase den, net positive ...
			let preferredOrder = [ "RmllbGRWYWx1ZV8xOTEwNTI2NA==", "RmllbGRWYWx1ZV8yNTk5MTYyMQ==", "RmllbGRWYWx1ZV8yNTg4MzM4MA==", 'RmllbGRWYWx1ZV8zMDc0ODU1Mw==' ]
	
			let prioritisedSessions = sessionsData.map( session => {
				let location = session.fields.find( field => field.definition.name === "Location" )
				if ( location ) {
					let priority = _.indexOf( preferredOrder, location.id )
					session = { ...session, priority: priority }
				} else {
					session = { ...session, priority: -1 }
				}
	
				// START custom prioritisation for specific session/s
				if (session.id === "UGxhbm5pbmdfNDI1NTEyMA==") {
					session = { ...session, priority: 10 }
				}
				// END custom prioritisation for specific session/s
	
				return session
			})
	
			return _.orderBy(prioritisedSessions, ['priority'])
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



	console.log('sessions:', sessions)
	// console.log('locations [swc]:', locations)
	// console.log('locations:', groupFieldGroupsByName( sessions, 'Location'))
	// console.log('locations:', _.orderBy(groupFieldGroupsByName( sessions, 'Location'), ['id'], ['asc'])   )
	// console.log('position based on ID (for exhibition-stage):', locations.map( i => i.id ).indexOf('RmllbGRWYWx1ZV8yMDYxOTUyNA=='))
	// console.log('position based on ID (for yanbu-workshop-room):', locations.map( i => i.id ).indexOf('RmllbGRWYWx1ZV8yMjU3Nzc5NQ=='))	
	// console.log('topics:', _.orderBy(groupFieldGroupsByName( sessions, 'Topics'), ['id'], ['asc']) )
	// console.log('SEARCH:', search)




	// TRACKS =====================================

	
	const FILTER_TRACKS = _.orderBy(groupFieldGroupsByName( sessions, 'Topics'), ['id'], ['asc'])

	// custom topic selection and ordering
	// to revert to API-driven replace the mapped variable with:
	// groupFieldGroupsByName( sessions, 'Topics')
	
	const FILTER_TRACKS_ORDERED = [
		{ "id": "RmllbGRWYWx1ZV8yNjYzMzYxMQ==", "name": "NextGen Talent & Hospitality Education" },
		{ "id": "RmllbGRWYWx1ZV8yMzI1MzEzMQ==", "name": "ESG & Human Capital" },
		{ "id": "RmllbGRWYWx1ZV8yMzI1MzEzNQ==", "name": "Investment & Development" },
		{ "id": "RmllbGRWYWx1ZV8yMzI1MzEzOQ==", "name": "Technology and Innovation" },
		{ "id": "RmllbGRWYWx1ZV8yNDM0OTA0Mw==", "name": "Hotelisation of Traditional Assets" },
		{ "id": "RmllbGRWYWx1ZV8yNDM0OTA1OQ==", "name": "Branding & Culture" },
		{ "id": "RmllbGRWYWx1ZV8yNDU2NzA5MQ==", "name": "Branded Residences" },
		{ "id": "RmllbGRWYWx1ZV8yNDU2NzE4OQ==", "name": "Focus on Saudi Arabia" },
		{ "id": "RmllbGRWYWx1ZV8yNDU3Mjg5MQ==", "name": "Sustainability & Innovation" },
		{ "id": "RmllbGRWYWx1ZV8yNDU4Nzc2OQ==", "name": "Wellness & Medical Tourism" },
		{ "id": "RmllbGRWYWx1ZV8yNjYzMzY0NQ==", "name": "Sustainability & ESG" },
		{ "id": "RmllbGRWYWx1ZV8yNjYzMzY3Mw==", "name": "Investment, Finance & Real Estate " },
		{ "id": "RmllbGRWYWx1ZV8yNjYzMzYxNQ==", "name": "Religious Tourism" },
		{ "id": 'RmllbGRWYWx1ZV8yNzA3NTM4MQ==', "name": 'Luxury, F&B, and Experiential Hospitality'}
	]
	
	// end custom topic selection and ordering


	const tagSpeakers = (speakers, tags) => {

		// tags = array of objects: { id: speakerId, tag: 'judge' }

		const tagMap = new Map(tags.map(tag => [tag.id, tag]))
		
		const taggedSpeakers = speakers.map(speaker => {
			const tagObj = tagMap.get(speaker.id)
			return { ...speaker, ...tagObj }
		})

		return taggedSpeakers

	}


	const breakTitle = ( trigger, titleString, splitPoint ) => {
		if ( !titleString.includes(trigger) ) return titleString
		let lines = titleString.split(splitPoint)
		return `${lines[0]}:<br/>${lines[1]}`		
	}


    return (
		<ReactLenis root>
			
			<Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
			</Head>

			<EventsBar site={'/sa'} />
			<Header
				site={`/sa`}
				handle={`Saudi Arabia`}
				event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
			/>


			{/* THEMES */}
			<section className="block bg-primary no-print" style={{ position: 'relative', zIndex: 2}}>
				<ThemesSlider data={THEMES_DATA} link={'/sa/themes'} linkLabel={'Learn more'} />
			</section>



            <section className="block">
                
				<span id="agenda"/>

				{/* INTRO */}
                <div className={`${CSS.titlebar} container`}>
					<div className="formatted pb-sm">
						<p className="fs-0 fw-500 c-secondary">2026 Agenda</p>
						<p>Programme is subject to change.</p>
					</div>

					<div className="printButton no-print">
						<button 
							className={'button fs-5'}
							onClick={ ()=> window.print() }
						><PrinterIcon />&ensp;Print Agenda</button>
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
								style={{ zIndex: filtersActive ? 210 : 6 }}
								onClick={() => {
									setFiltersActive(!filtersActive)
									lenis.scrollTo('#agendaMob', { duration: 1 })
								}}
							>{ filtersActive ? <span style={{ fontSize: 30 }}>&times;</span> : <FilterIcon color={'white'} /> }</button>
						</div>

						<div className={`${CSS.filterLayout} ${CSS.filterGroup} ${ !utiltiesInView && CSS.fixed } ${filtersActive && CSS.active}`}>
							{/* tracks (topics) */}
							{
								FILTER_TRACKS.length ?
									<section className={CSS.filterLayoutButtons}>
										<Menu 
											menuButton={
												<MenuButton className={DROPDOWN.button}>
													<strong className="left">{ selectedTopic ?  getFieldGroupNameById(sessions, selectedTopic, 'Topics') : `Tracks` }</strong> <Chevron />
												</MenuButton>
											} 
											transition 
											menuClassName={menuClassName}
										>
											<div className="columns-2">
												{
													sessions &&
													FILTER_TRACKS.map( 
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
								: null
							}

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
										<button className={CSS.agendaFilterReset} onClick={resetFilters}><span>&times;</span> Reset all filters</button>
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
								style={{ zIndex: searchActive ? 205 : 6 }}
								onClick={() => {
									setSearchActive(!searchActive)
									lenis.scrollTo('#agendaMob', { duration: 1 })
								}}
							>{ searchActive ? <span style={{ fontSize: 30 }}>&times;</span> : <SearchIcon color={'white'} /> }</button>
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
				<main className={`${CSS.agenda} | section columns-1 gap-sm mt-sm"`}>				
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
												<div key={index} className='timeSlot-disabled'>

													{/* SESSIONS */}

													<div className={CSS.sessions}>
														{
															prioriseStreams( slot.sessions, locations ).map( (session, index) => {
																return (
																	<div key={index} className={CSS.sessionsWrapper}>
																		<span className={CSS.sessionAnchor} id={session.id.slice(0, -2)}/>
																		<div className={CSS.session}>

																			<div className={`${CSS.sessionHeader} fw-500`}>
																				{
																					session.beginsAt && session.endsAt ?
																						<div>
																							{format( new Date(session.beginsAt), "HH:mm" )} - { format( new Date(session.endsAt), "HH:mm" )}
																							&ensp;<StopwatchIcon fill={'var(--accent)'}/> { convertSeconds(parseInt(new Date(session.endsAt).getTime() - new Date(session.beginsAt).getTime())/1000) }
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

																			<div className={`${CSS.sessionContent} columns-1 gap-xs`}>

																				{/* <small style={{ color: 'orange'}}>{session.id}</small> */}
																				
																				<p className={`${CSS.sessionTitle} fs-4 fw-600 lh-1 c-primary`}>
																					{ parse(breakTitle(":", session.titleTranslations[0].value, ": ")) }
																				</p>

																				{
																					getSessionFields( session, 'Topics').length ?
																						<div className={CSS.sessionTagGrid}>
																							<TagIcon fill={`var(--accent)`} />
																							{ getSessionFields( session, 'Topics') }
																						</div>
																					: null
																				}																			

																				{
																					session.descriptionTranslations.length 
																					? parse( session.descriptionTranslations[0].value )
																					: null
																				}
																				
																				{
																					sortSpeakers(tagSpeakers(session.speakers, speakerTags))	
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
                        <p className="fs-5 fw-600 mt-xs lh-1">{ modalContent.name }</p>
                        <p className="fs-sm fw-400 c-accent mt-xs">{modalContent.title} <br/>{modalContent.company}</p>
                    </aside>
                    
					<section>
						<SimpleBar style={{ maxHeight: `50vh` }}>
							<div className="formatted pr-xs" dangerouslySetInnerHTML={{ __html: modalContent.bio }}></div>
						</SimpleBar> 
					</section>

                    
                </Sidebar>

            </Modal>


			<PopOverlay id={"sa2026prospectus"}>
				<div className="formatted p-xs center">
					<img src="/assets/img/sa/2026-prospectus-cover.png" alt="" width={300} />
					<p className="fs-2 fw-600 c-primary lh-1 mt-sm">FHS Saudia Arabia 2026 Prospectus</p>
					<p className="mt-sm"><Button href={`/sa/prospectus-download`}>Download</Button></p>
				</div>
			</PopOverlay>
			

            <Footer theme={{ footerBg: 'bg-white' }} />
            <LenisScroller />

        </ReactLenis>
    )
}
Agenda.theme = 'sa-2025'





const SpeakerCard = ({ speaker, type }) => {

	return (
		<div key={speaker.id} className='sessionSpeaker'>

			<span style={{ cursor: speaker.biography ? 'pointer' : 'default' }}>
				{
					speaker.photoUrl ?
						<img src={speaker.photoUrl} alt="" style={{ maxWidth: 100, maxHeight: 100, borderRadius: 100, marginBottom: 10 }} />
					: 
						<img src={`/assets/ui/avatar-fallback.png`} alt="" style={{ maxWidth: 100, maxHeight: 100, borderRadius: 100, marginBottom: 10 }} />

				}
			</span>

			{speaker.tag && <p className="fs-sm fw-600 caps c-accent">{speaker.tag}</p>}
			
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
					<path d="M2381.63,259.726L2375.8,259.726L2375.8,244.224L2400.43,244.224L2400.43,259.726L2394.6,259.726L2394.6,253.717L2381.63,253.717L2381.63,259.726Z" style={{ fill:`none`, stroke: color ? color : 'white', strokeWidth:1.79 }}/>
					<g transform="matrix(0.526495,0,0,0.745724,1130.79,71.5936)">
						<rect x="2375.8" y="244.224" width="24.631" height="15.502" style={{ fill:`none`, stroke: color ? color : 'white', strokeWidth:2.78 }}/>
					</g>
					<g transform="matrix(0.526495,0,0,0.327579,1130.79,159.143)">
						<rect x="2375.8" y="244.224" width="24.631" height="15.502" style={{ fill:`none`, stroke: color ? color : 'white', strokeWidth:4.09 }}/>
					</g>
					<circle cx="2381.62" cy="248.903" r="0.906" style={{ fill: color ? color : 'white' }}/>
					<g transform="matrix(1,0,0,1,2.95813,0)">
						<circle cx="2381.62" cy="248.903" r="0.906" style={{ fill: color ? color : 'white' }}/>
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

						plannings(eventId: "${process.env.SWAPCARD_EVENT_ID_SA_2026}", page: 1, pageSize: 500) {
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
							}
							speakers {
								firstName
								id
								jobTitle
								lastName
								photoUrl
								organization
								biography
								withEvent(eventId: "${process.env.SWAPCARD_EVENT_ID_SA_2026}") {
									eventProfile {
										type
										withEvent(eventId: "RXZlbnRfMTczOTgzMg==") {
											speakerOnPlannings {
												id
												title
												beginsAt
												endsAt
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
					"eventId": process.env.SWAPCARD_EVENT_ID_SA_2026,
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