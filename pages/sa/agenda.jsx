import { useState, useRef, useEffect } from "react"

import { useRouter } from "next/router"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useInView } from 'react-intersection-observer'

import _ from 'lodash'
import { format } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import parse from 'html-react-parser'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { Header } from '../../fuselage/theme/2024/sa/globals/header/header'
import { Footer } from "../../fuselage/theme/2024/sa/globals/footer/footer"
import { ThemeBg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

import { TagIcon, CompassIcon, StopwatchIcon, LocationIcon } from "../../fuselage/components/icons/icons"

import { Modal } from "../../fuselage/theme/2024/sa/components/modal/modal"
import { AgendaModal } from "../../fuselage/theme/2024/sa/components/agenda-modal/agenda-modal"
import { Sidebar } from "../../fuselage/layout/sidebar/sidebar"
import { Avatar } from '../../fuselage/components/avatar/avatar'

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

import CSS from '../../css/app/agenda-sa-2024.module.css'




// custom topic selection and ordering
// to revert to API-driven replace the mapped variable with:
// groupFieldGroupsByName( sessions, 'Topics')

const FILTER_TRACKS = [
	{
		"id": "RmllbGRWYWx1ZV8yMzI1MzEyNg==",
		"name": "Opening, Awards & Signings"
	},
    {
        "id": "RmllbGRWYWx1ZV8xOTE1MDcwOQ==",
        "name": "FHS Sessions"
    },
	{
		"id": "RmllbGRWYWx1ZV8yMzI1MzEzNw==",
		"name": "Restaurant Invest (GRIF)"
	},
	{
		"id": "RmllbGRWYWx1ZV8yMzI1MzEyNw==",
		"name": "Brand & Destination"
	},
	{
		"id": "RmllbGRWYWx1ZV8yMzI1MzEzMQ==",
		"name": "ESG & Human Capital"
	},
	{
		"id": "RmllbGRWYWx1ZV8yMzI1MzEzMg==",
		"name": "Culture & Heritage"
	},
	{
		"id": "RmllbGRWYWx1ZV8yMzI1MzEzNQ==",
		"name": "Investment & Development"
	},
	{
		"id": "RmllbGRWYWx1ZV8yMzI1MzEzNg==",
		"name": "Networking"
	},
	{
		"id": "RmllbGRWYWx1ZV8yMzI1MzEzOA==",
		"name": "Startup Den"
	},
	{
		"id": "RmllbGRWYWx1ZV8yMzI1MzEyOA==",
		"name": "Talks"
	},
    {
		"id": "RmllbGRWYWx1ZV8yMzI1MzEzOQ==",
        "name": "Tech & Innovation"
    },
	{
		"id": "RmllbGRWYWx1ZV8yMzI1MzE0MQ==",
		"name": "Wellness"
	}
]

// end custom topic selection and ordering





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


	// filter menu pinning
	const [filterTrigger, inView] = useInView({
		threshold: 1,
		rootMargin: '-150px 0px 0px 0px'
	})
	const [filterToggle, toggleInView] = useInView({
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

		// console.log('agenda:', agenda)
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
		return obj.name
	}



	// HANDLE SPEAKERS PER SESSION (pick out moderators)

	const sortSpeakers = ( speakerData ) => {

		if ( !speakerData ) return

		let moderators = []
        let speakers = []

		_.orderBy(speakerData, 'lastName').forEach( speaker => {
			speaker.withEvent.eventProfile.type === 'Moderator' ? moderators.push( speaker ) : speakers.push( speaker )
		})


		if ( moderators.length && speakers.length ) return (
			<>
				{
					moderators.length ?
						<div>
							<p className="c-accent pb-xs">{moderators.length > 1 ? 'Moderators' : 'Moderator' }</p>
							<div className='sessionSpeakerGrid'>
								{ moderators.map( moderator => renderSpeakerCard(moderator) ) }
							</div>
							{
								speakers.length ?
									<p style={{ color: `aqua`, padding: `10px 0 0 0`}}>In conversation with</p>
								: null
							}
						</div>
					: null
				}
				<div className='sessionSpeakerGrid'>
					{ speakers.map( speaker => renderSpeakerCard(speaker) ) }
				</div>
			</>
		)

		return (
			<div className='sessionSpeakerGrid'>
				{ speakerData.map( speaker => renderSpeakerCard(speaker) ) }
			</div>
		)
	}

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
							bio: speaker.biography,
							speakingOn: speaker.withEvent?.eventProfile.withEvent.speakerOnPlannings
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



	console.log('sessions:', sessions)
	// console.log('locations [swc]:', locations)
	// console.log('locations:', groupFieldGroupsByName( sessions, 'Location'))
	// console.log('locations:', _.orderBy(groupFieldGroupsByName( sessions, 'Location'), ['id'], ['asc'])   )
	// console.log('position based on ID (for exhibition-stage):', locations.map( i => i.id ).indexOf('RmllbGRWYWx1ZV8yMDYxOTUyNA=='))
	// console.log('position based on ID (for yanbu-workshop-room):', locations.map( i => i.id ).indexOf('RmllbGRWYWx1ZV8yMjU3Nzc5NQ=='))	
	// console.log('topics:', _.orderBy(groupFieldGroupsByName( sessions, 'Topics'), ['id'], ['asc']) )









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

            <Header compact shim />

            <ThemeBg />
            <ThemeFg />


            <section className="block">
                
				<span id="agenda"/>

				{/* INTRO */}
                <div className="section mb-sm">
                    <p className="fs-0 fw-500">2024 Agenda</p>
					<div className="formatted mt-md">
						<ul>
							<li>FHS - tracks covering hospitality investment, industry entrepreneurship, sustainable development and human capital</li>
							<li>Restaurant Invest (GRIF) - tracks covering F&amp;B investment &amp; workshops</li>
							<li><a href="https://fhsksa24.expofp.com/" target="_blank" rel="noreferrer">Floor Plan</a></li>
							<li>All times listed are in Saudi Arabia&apos;s GMT+3 timezone</li>
						</ul>
						<p>Programme is subject to change.</p>
					</div>
                </div>

				
				{/* FILTERS */}
				<div ref={filterTrigger} className={CSS.filters}>


					{/* mobile-only toggle */}
					<div id="agendaMob" ref={filterToggle} className={CSS.filterToggleContainer}>
						<button 
							className={`${CSS.filterToggle} ${ !toggleInView && CSS.fixed } ${filtersActive && CSS.fixed}`} 
							style={{ zIndex: filtersActive ? 110 : 6 }}
							onClick={() => {
								setFiltersActive(!filtersActive)
								lenis.scrollTo('#agendaMob', { duration: 1 })
							}}
						>{ filtersActive ? <span style={{ fontSize: 30 }}>&times;</span> : <FilterIcon color={'white'} /> }</button>
					</div>


					<div className={`${CSS.filterLayout} ${ !inView && CSS.fixed } ${filtersActive && CSS.active}`}>

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

					</div>
				</div>


				{/* AGENDA */}
				<main className="agenda | section columns-1 gap-sm mt-sm">				
					{
						sessions &&
						buildAgenda( sessions ).map( (day, index) => {
							
							if ( selectedDay && selectedDay !== day.day ) return

							return (
								<section key={index} className='day'>
									<p key={index} className='dayDivider'> { day.day }</p>
									{
										day.timeslots.length ?
										day.timeslots.map( (slot, index) => {
											return (
												<div key={index} className='timeSlot-disabled'>

													{/* <div className='timingsAndTags'>
														{format( new Date(slot.beginsAt), "HH:mm" )} - { format( new Date(slot.sessions[0].endsAt), "HH:mm" ) }
													</div> */}
													
													{/* SESSIONS */}

													<div className="sessions">
														{
															prioriseStreams( slot.sessions, locations ).map( (session, index) => {
																return (
																	<div key={index} className="sessionsWrapper">
																		<span className="sessionAnchor" id={session.id.slice(0, -2)}/>
																		<div className='session | bg-glass'>


																			<div className='sessionHeader fw-500 c-white'>
																				{
																					session.beginsAt && session.endsAt ?
																						<div>
																							{format( new Date(session.beginsAt), "HH:mm" )} - { format( new Date(session.endsAt), "HH:mm" )}
																							&ensp;<StopwatchIcon/> { convertSeconds(parseInt(new Date(session.endsAt).getTime() - new Date(session.beginsAt).getTime())/1000) }
																						</div>
																					: null
																				}

																				{
																					getSessionFields( session, 'Location').length ?
																						<div className="sessionTagGrid">
																							{session.fields.length ? <LocationIcon /> : null }
																							{getSessionLocation( session )}
																						</div>
																					: null
																				}
																			</div>

																			<div className="sessionContent | columns-1 gap-xs">
																				<p className="sessionTitle | fs-5 fw-600 lh-1 c-accent caps">
																					{ parse(breakTitle(":", session.titleTranslations[0].value, ": ")) }
																				</p>
																																									
																				<div className='sessionTagGrid'>
																					{session.fields.length ? <TagIcon fill={`var(--primary)`} /> : null}
																					{getSessionFields( session, 'Topics')}
																				</div>

																				{
																					session.descriptionTranslations.length ?
																						parse( session.descriptionTranslations[0].value )
																					: null
																				}
																				
																				{ sortSpeakers(session.speakers) }
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
					}

				</main>

				
            </section>

			<div className={CSS.actions}>
				<button className={CSS.scrollButton} onClick={() => { lenis.scrollTo('#agenda', { duration: 1 }) }}>
					<ChevronUp/>
				</button>
			</div>








            {/* <AgendaModal onClose={() => setShowModal(false)} show={showModal} modalContent={modalContent}>
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

						<div className="mt-sm">
							<p className="fs-6 fw-400 c-accent mb-xs">See { modalContent.name } speak in the following sessions:</p>                         
							{
								modalContent.speakingOn?.map( (day, index) => (
									<div key={index} className='mb-xs'>
										<p className="c-accent fs-sm">
											{formatInTimeZone(new Date( day.beginsAt ), 'Asia/Dubai', 'EEEE dd MMMM: HH:mm')} - {formatInTimeZone(new Date( day.endsAt ), 'Asia/Dubai', 'HH:mm')}
										</p>
										<p className="fs-6 fw-600 c-white">{ day.title }</p>
									</div>
								))
							}
						</div>
					</section>

                    
                </Sidebar>
            </AgendaModal> */}


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

						{/* <div className="mt-sm">
							<p className="fs-6 fw-400 c-accent mb-xs">See { modalContent.name } speak in the following sessions:</p>                         
							{
								modalContent.speakingOn &&
								_.orderBy(modalContent.speakingOn, 'beginsAt').map( (day, index) => (
									<div key={index} className='mb-xs'>
										<p className="c-accent fs-sm">
											{formatInTimeZone(new Date( day.beginsAt ), 'Asia/Dubai', 'EEEE dd MMMM: HH:mm')} - {formatInTimeZone(new Date( day.endsAt ), 'Asia/Dubai', 'HH:mm')}
										</p>
										<p className="fs-6 fw-600 c-white" 
											onClick={() => {
												lenis.scrollTo(`#${day.id.slice(0, -2)}`, { duration: 1 })
												setShowModal(false)
											}}
										><span className="uLink">{ day.title }</span></p>
									</div>
								))
							}
						</div> */}
					</section>

                    
                </Sidebar>

            </Modal>


            <Footer theme={{ footerBg: 'bg-white' }} />
            <LenisScroller />

        </ReactLenis>
    )
}
Agenda.theme = 'sa-2024'



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

						plannings(eventId: "${process.env.SWAPCARD_EVENT_ID_SA}", page: 1, pageSize: 500) {
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
								withEvent(eventId: "${process.env.SWAPCARD_EVENT_ID_SA}") {
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
					"eventId": process.env.SWAPCARD_EVENT_ID_SA,
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