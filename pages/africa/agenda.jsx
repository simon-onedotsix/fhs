import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef, useEffect } from "react"

import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useInView } from 'react-intersection-observer'

import _ from 'lodash'
import { format } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import parse from 'html-react-parser'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { Reveal } from '../../fuselage/animation/reveal'
import { Pop, Fade, Slide } from '../../fuselage/animation/animation'

import { Header } from '../../fuselage/theme/2025/africa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/africa/common/footer/footer'
import { PageHeader } from '../../fuselage-africa/blocks/page-header/page-header'

import { TagIcon, CompassIcon, StopwatchIcon, LocationIcon } from "../../fuselage/components/icons/icons"

import { Modal } from "../../fuselage/theme/2024/world/components/modal/modal"
import { Sidebar } from "../../fuselage/layout/sidebar/sidebar"
import { Avatar } from '../../fuselage/components/avatar/avatar'
import { Button } from '../../fuselage/theme/2024/world/components/button/button'

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

import CSS from '../../css/app/agenda-africa-2025.module.css'



// custom stream order

let PRIORITISED_STREAMS = [
    {
        "id": "RmllbGRWYWx1ZV8xOTEwNTI2NA==",
        "name": "Summit Stage",
		"color": "#006f6cff"
    },
    {
        "id": "RmllbGRWYWx1ZV8xOTEwNTI2NQ==",
        "name": "Future Stage",
		"color": "#0064dfff"
    },
    {
        "id": "RmllbGRWYWx1ZV8yNTg4MzM4MA==",
        "name": "Centre Stage",
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



export default function Agenda ({ sessions, theme }) {

	const lenis = useLenis()
	const router = useRouter()

	// const lenis = useLenis(({ scroll }) => {
	// 	console.log(scroll)
	// })

	const [ filtersActive, setFiltersActive ] = useState (false)
	const [ selectedTopic, setSelectedTopic ] = useState (null)
    const [ selectedDay, setSelectedDay ] = useState (null)
    const [ selectedLocation, setSelectedLocation ] = useState(null)
	
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
		rootMargin: '-150px 0px 0px 0px'
	})
	const [toggles, togglesInView] = useInView({
		threshold: 1,
		rootMargin: '0px 0px 0px 0px'
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

			console.log('current session searchContent:', searchContent)

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
		return obj.name
	}



	// HANDLE SPEAKERS PER SESSION (pick out moderators)

	const renderSpeakerCard = ( speaker ) => {
		return (
			<span
				key={speaker.id} 
				onClick={() => {
					if ( speaker.biography ) {
						setModalContent({
							avatar: speaker.photoUrl,
							name: `${speaker.firstName} ${speaker.lastName}`,
							title: speaker.jobTitle,
							company: speaker.organization,
							bio: speaker.biography
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

	// FILTER HELPERS

	const getSessionLocationTheme = ( sessionData ) => {
		
		if ( !sessionData.fields ) return
		
		let locationObject = sessionData.fields.find( (field) => field.definition.name === 'Location' )

		if ( locationObject ) {
			let tagTheme = theme.find( obj => obj.agendaTag === locationObject.translations[0].value )			
			
			if ( theme.color) return tagTheme.color

			return
		}
		return
	}


	const TRACKS = _.orderBy(groupFieldGroupsByName( sessions, 'Topics'), ['id'], ['asc'])


	// TIMESLOT SESSIONS PRIORITISATION

	const prioritiseSessions = ( sessionsData ) => {

		if ( !sessionsData || sessionsData.length === 1 ) return sessionsData

		// knowledge station, pioneer camp, showcase den, net positive ...
		let preferredOrder = [ "RmllbGRWYWx1ZV8yNTkzNDU1Nw==", "RmllbGRWYWx1ZV8yNTkzNDU1OQ==", "RmllbGRWYWx1ZV8yNTkzNDU1OA==", 'RmllbGRWYWx1ZV8yNjg3NTk4MA==' ]

		let prioritisedSessions = sessionsData.map( session => {
			let location = session.fields.find( field => field.definition.name === "Location" )
			if ( location ) {
				let priority = _.indexOf( preferredOrder, location.id )
				session = { ...session, priority: priority }
			} else {
				session = { ...session, priority: -1 }
			}
			return session
		})

		return _.orderBy(prioritisedSessions, ['priority'])
	}


	// console.log('sessions:', sessions)
	// console.log('theme:', theme)	

	// console.log('locations [swc]:', locations)
	// console.log('locations:', groupFieldGroupsByName( sessions, 'Location'))
	// console.log('locations:', _.orderBy(groupFieldGroupsByName( sessions, 'Location'), ['id'], ['asc'])   )
	// console.log('position based on ID (for exhibition-stage):', locations.map( i => i.id ).indexOf('RmllbGRWYWx1ZV8yMDYxOTUyNA=='))
	// console.log('position based on ID (for yanbu-workshop-room):', locations.map( i => i.id ).indexOf('RmllbGRWYWx1ZV8yMjU3Nzc5NQ=='))	
	// console.log('topics:', _.orderBy(groupFieldGroupsByName( sessions, 'Topics'), ['id'], ['asc']) )
	// console.log('SEARCH:', search)





    return (
        <ReactLenis root>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
			</Head>

			<Header compact shim />
			
			<PageHeader theme={``}>
				<div className="formatted no-print o-hidden">
					<p className="fs-0 fw-600"><Reveal>2025 Agenda</Reveal></p>
					<Slide>
						<p className="mt-sm">For FHS Africa, our objective is to enhance networking opportunities by introducing innovative and engaging formats that foster meaningful connections among delegates. The program is carefully designed to encourage greater interaction between attendees and speakers, ensuring valuable discussions and insights in different rooms at the Westin.</p>
						<p>Additionally, the most critical topics will be presented in a traditional conference format on Day 2 (18/02) at Boma Talks, held at the CCITC, providing a dedicated platform for in-depth discussions and thought leadership.</p>
					</Slide>
				</div>
			</PageHeader>

			<section className={`${CSS.agendaWrapper} block o-hidden`}>
				
				<div className="container columns-4 gap-sm pt-md">
					<div className="formatted">
						<h5>Boma Talks</h5>
						<p className="fw-600">Taking place exclusively on 18th June at&nbsp;the CTICC</p>
						<p>The term &ldquo;boma&ldquo; originates from Swahili, meaning an enclosure or fortification, and has evolved to signify a communal gathering place. Serving as the conference&apos;s main stage, Boma Talks will host all keynote presentations and pivotal panel discussions, providing a central platform for sharing insights and fostering dialogue among attendees.</p>
					</div>
					<div className="formatted">
						<h5>Knowledge Station</h5>
						<p className="fw-600">Location: Ground Floor, The Westin</p>
						<p>A dedicated space for learning and inspiration, the Knowledge Station offers engaging workshops, in-depth case studies, and expert presentations. Designed to address key focus topics from the conference, this hub provides valuable insights and practical knowledge for attendees seeking deeper understanding and expertise.</p>
					</div>
					<div className="formatted">
						<h5>Showcase Den</h5>
						<p className="fw-600">Location: Ground Floor, The Westin</p>
						<p>A dynamic platform for exploring investment opportunities, the Showcase Den highlights key destinations, country spotlights, and new project pitches. Designed to connect delegates with potential investments, this space offers valuable insights into emerging markets and groundbreaking developments in the industry.</p>
					</div>
					<div className="formatted">
						<h5>Pioneer Camp</h5>
						<p className="fw-600">Location: Mezzanine Level, The Westin</p>
						<p>A collaborative space designed for in-depth discussions, the Pioneer Camp caters to the demand for smaller, longer conversations between delegates and experts. Through interactive roundtables, this hub fosters meaningful dialogue, tackles critical challenges, and develops practical solutions for the industry&apos;s future.</p>
					</div>
				</div>

				<div className="printButton mt-md button-grid">
					<Link href={'/africa/agenda-at-a-glance'}><a className={'button fs-6'}>Agenda at a glance</a></Link>
					<button 
						className={'button fs-6'}
						onClick={ ()=> window.print() }
					><PrinterIcon />&ensp;Print Agenda</button>
				</div>
                
				<span id="agenda"/>



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
							{/* <section className={CSS.filterLayoutButtons}>
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
							</section> */}

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

													<div className={CSS.sessions}>
														{
															prioritiseSessions(slot.sessions).map( session => (
																<Session key={session.id} session={session} theme={getSessionLocationTheme(session)} />
															))
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



            <Footer theme={{ footerBg: 'bg-white' }} />
            <LenisScroller />

        </ReactLenis>
    )
}
Agenda.theme = 'africa'



export const Session = ({ session }) => {

	if (!session) return

	const [ showModal, setShowModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState({ avatar: '', name: '', title: '', company: '', bio: '', speakingOn: null })
	
	const renderSpeakerCard = ( speaker ) => {
		return (
			<>
				<span
					key={speaker.id} 
					onClick={() => {
						if ( speaker.biography ) {
							setModalContent({
								avatar: speaker.photoUrl,
								name: `${speaker.firstName} ${speaker.lastName}`,
								title: speaker.jobTitle,
								company: speaker.organization,
								bio: speaker.biography
							})
							setShowModal(true)
						}
					}
				}><SpeakerCard key={speaker.id} speaker={speaker} /></span>
				
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
			</>
		)
	}

	const sortSpeakers = ( speakerData ) => {

		if ( !speakerData ) return

		// console.log('speakerData:', speakerData)

		let moderators = []
		let speakers = []


		// if the first speaker is a moderator, move to separate array
		speakerData.forEach( (speaker, index) => {
			if (speaker.withEvent?.eventProfile.type === 'Moderator' && index === 0) {
				moderators.push(speaker)
			} else {
				speakers.push(speaker)
			}
		})


		if ( moderators.length && speakers.length ) return (
			<section>
				{
					moderators.length ?
						<div>
							<p className="fw-500" style={{ padding: `0 0 15px 0`}}>Moderator{ moderators.length > 1 && 's'}</p>
							<div className={CSS.sessionSpeakerGrid}>
								{ moderators.map( moderator => renderSpeakerCard(moderator) ) }
							</div>
						</div>
					: null
				}
				<div>
					{
						moderators.length && speakers.length ?
							<p className="fw-500 mt-xxs" style={{ padding: `0 0 15px 0`}}>In conversation with</p>
						: null
					}
					<div className={CSS.sessionSpeakerGrid}>
						{ speakers.map( speaker => renderSpeakerCard(speaker) ) }
					</div>
				</div>

			</section>
		)

		return (
			<div className={CSS.sessionSpeakerGrid}>
				{ speakerData.map( speaker => renderSpeakerCard(speaker) ) }
			</div>
		)
	}

	const setSessionTheme = ( session ) => {

		if ( !session.fields ) return

		let fieldsData = session.fields.filter( (field) => field.definition.name === 'Location' )

		switch (fieldsData[0]?.id) {
			case "RmllbGRWYWx1ZV8yNTkzNDU1Nw==":
				//Knowledge HUB
				return "agenda-01"
				break
		
			case "RmllbGRWYWx1ZV8yNTkzNDU2MA==":
				//The Forum
				return "agenda-02"
				break
		
			case "RmllbGRWYWx1ZV8yNTkzNDU1OQ==":
				//Pioneer HUB
				return "agenda-03"
				break
		
			case "RmllbGRWYWx1ZV8yNTkzNDU1NQ==":
				//Future HUB
				return "agenda-04"
				break
		
			case "RmllbGRWYWx1ZV8yNTkzNDU1OA==":
				//Showcase HUB
				return "agenda-05"
				break
		
			default:
				return "agenda-default"
				break
		}

		return

	}

	return (
	
		<div className={CSS.sessionsWrapper}>

			<div className={CSS.sessionHeader}>
				<Duration startTime={session.beginsAt} endTime={session.endsAt} />
				<Location session={session} />
			</div>

			<div className={`${setSessionTheme(session)} ${CSS.sessionContent} | columns-1 gap-xs`} >
				<p className={`${CSS.sessionTitle} | fs-4 fw-600 lh-1`}>
					{ parse(session.titleTranslations[0].value) }
				</p>

				{
					session.descriptionTranslations.length ?
					<div className="maxw-45 c-dark">
						{parse( session.descriptionTranslations[0].value )}
					</div>
					: null
				}
				
				{ sortSpeakers(session.speakers) }
			</div>
		</div>

	)
}

export const Duration = ({ startTime, endTime }) => {

	const convertSeconds = (seconds) => {
		const hours = Math.floor(seconds / 3600)
		const minutes = Math.floor((seconds % 3600) / 60)
	
		const hourString = hours > 0 ? `${hours} hour${hours > 1 ? `s` : `` }` : ''
		const minuteString = minutes > 0 ? `${minutes} minutes` : ''
	
		if ( hours > 0 ) {
			return `${hourString} ${ minutes > 0 ? minuteString : ''}`

		} else if ( !hours && minutes > 0 ) {
			return `${minuteString}`

		}
	
		return
	}


	return (
		<p className="fw-500 c-white">
			{ format( new Date(startTime), "HH:mm" ) } - { endTime && format( new Date(endTime), "HH:mm" ) }
			{
				endTime &&
				<span>&ensp;<StopwatchIcon fill={'var(--primary)'}/> { convertSeconds(parseInt(new Date(endTime).getTime() - new Date(startTime).getTime())/1000) }</span>
			}
		</p>
	)
}

export const Location = ({ session }) => {

	if ( !session.fields.length ) return

	let fieldsData = session.fields.filter( (field) => field.definition.name === 'Location' )
	let location = fieldsData[0]?.translations[0].value

	if (location) return (
		<p className={CSS.tag}><CompassIcon fill={'var(--primary'} />{ location }</p>
	)
	return
}

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

			<p className="fw-600 c-secondary">{ speaker.firstName } { speaker.lastName }</p>
			<p className="fs-sm lh-1 c-secondary">{ speaker.jobTitle }<br />{ speaker.organization }</p>
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

						plannings(eventId: "${process.env.SWAPCARD_EVENT_ID_AFRICA_2025}", page: 1, pageSize: 500) {
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
								withEvent(eventId: "${process.env.SWAPCARD_EVENT_ID_AFRICA_2025}") {
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
					"eventId": process.env.SWAPCARD_EVENT_ID_AFRICA_2025,
					"page": 1
				}
			})
		}
	)

	const result = await eventQuery.json()


	// cms (theme etc)
	const cmsAgendaData = await craftApolloClient().query({
		query: gql`
			query SEO {
				entry(site: "${process.env.SITE_HANDLE_AFRICA}", id: "16596") {
					title
					... on ${process.env.SITE_HANDLE_AFRICA}Agenda_${process.env.SITE_HANDLE_AFRICA}Agenda_Entry {
						id
						agendaTheme {
							... on agendaTheme_BlockType {
								id
								color
								agendaTag
							}
						}
					}
					seomatic (asArray: true) {
						metaTitleContainer
						metaTagContainer
					}
				}
			}
		`
	})
	

	// console.log('RESULT', result)
	// console.log('TEST plannings', result.data.event.planningsPlaces)
	// console.log('TEST sessions', result.data.plannings)
  

    if ( result.data ) return { 
        props: { 
            sessions: result.data.plannings,
			locations: result.data.event.planningsPlaces,
			theme: cmsAgendaData.data.entry.agendaTheme
        } 
    }

	return { props: {} }
}