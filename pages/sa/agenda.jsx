import { useState, useRef } from "react"

import _ from 'lodash'
import { format } from 'date-fns'
import parse from 'html-react-parser'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { Header } from '../../fuselage/theme/2024/sa/globals/header/header'
import { Footer } from "../../fuselage/theme/2024/sa/globals/footer/footer"

import { ThemeBg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

import { TagIcon, CompassIcon } from "../../fuselage/components/icons/icons"

import { Modal } from "../../fuselage/components/modal/modal"
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


export default function Agenda ({ sessions }) {

	const [ selectedTopic, setSelectedTopic ] = useState (null)
    const [ selectedDay, setSelectedDay ] = useState (null)
    const [ selectedLocation, setSelectedLocation ] = useState(null)
    const [ showModal, setShowModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState({ avatar: '', name: '', title: '', company: '', bio: ''})

	const locationSelect = useRef()



	// FILTERS

	const resetFilters = () => {
		setSelectedDay(null)
		setSelectedLocation(null)
		setSelectedTopic(null)
		// locationSelect.current.value = 'All locations'
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

	const getSessionFields = ( sessionData, fieldHandle ) => {
		if ( !sessionData.fields || !fieldHandle ) return

		let fieldsData = sessionData.fields.filter( (field) => field.definition.name === fieldHandle )

		return fieldsData.map ( (topic, index) => (
			<span key={index} className='sessionTag fw-500'>{ topic.translations[0].value }</span> 
		))
	}

	const groupFieldGroupsByName = ( sessionsData, fieldHandle ) => {
		if ( !sessionsData || !fieldHandle ) return

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

		speakerData.forEach( speaker => {
			speaker.withEvent.eventProfile.type !== 'Speaker' ? moderators.push( speaker ) : speakers.push( speaker )
		})


		if ( moderators.length && speakers.length ) return (
			<>
				{
					moderators.length ?
						<div>
							<div className='sessionSpeakerGrid'>
								{ moderators.map( moderator => <SpeakerCard key={moderator.id} speaker={moderator} type={moderator.withEvent.eventProfile.type} /> ) }
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
					{ speakers.map( speaker => <SpeakerCard key={speaker.id} speaker={speaker} /> ) }
				</div>
			</>
		)

		return (
			<div className='sessionSpeakerGrid'>
				{ speakerData.map( speaker => <SpeakerCard key={speaker.id} speaker={speaker} /> ) }
			</div>
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


    return (
        <>

            <Header compact shim />

            <ThemeBg />
            <ThemeFg />


            <section className="block">
                
                <div className="section">
                    <p className="fs-0 fw-500">2024 Agenda</p>
					<p className="mt-md">Programme is subject to change.</p>
                </div>

				{/* FILTERS */}
				<div className="container">
                    <div className={CSS.filterLayout}>

                        {/* topics */}
                        <section className={CSS.filterLayoutButtons}>
							{
								groupFieldGroupsByName( sessions, 'Topics').map( (loc, index) => (
									<button
										key={index}
										className={`${CSS.filterButton} ${ selectedTopic === loc.id ? CSS.active : null }`} 
										onClick={ () => {
											setSelectedTopic(loc.id)
										}
									}
									>{loc.name}</button>
								 ))
							}
                            <button 
                                className={`${CSS.filterButton} ${ selectedTopic === null ? CSS.active : null }`} 
                                onClick={ () => {
                                    setSelectedTopic(null)
                                }}
                            >All</button>
                        </section>

                        {/* days */}
                        <section className={CSS.filterLayoutButtons}>
                            {
                                buildAgenda( sessions ).map( (day, index) => {
                                    return (
                                        <button 
                                            className={`
                                                ${CSS.filterButton} 
                                                ${ selectedDay === day.time.slice(0, 10) ? CSS.active : null }
                                            `}
                                            key={index} 
                                            onClick={ () => {
                                                setSelectedDay(day.time.slice(0, 10))
                                            }}
                                        >Day { index + 1 }</button>
                                    )
                                })
                            }
                            <button 
                                className={`${CSS.filterButton} ${ selectedDay === null ? CSS.active : null }`} 
                                onClick={ () => {
                                    setSelectedDay(null)
                                }}
                            >All</button>
                        </section>

                        {/* locations */}
                        <section className={CSS.filterLayoutButtons}>
							<Menu 
								menuButton={
									<MenuButton className={DROPDOWN.button}>{ selectedLocation ?  getFieldGroupNameById(sessions, selectedLocation, 'Location') : `All locations` } <Chevron /></MenuButton>
								} 
								transition 
								menuClassName={menuClassName}
							>
								<MenuItem key={0} onClick={() => setSelectedLocation('')}>All locations</MenuItem>
								{
									sessions &&
									groupFieldGroupsByName( sessions, 'Location').map( filter => <MenuItem key={filter.id} onClick={() => setSelectedLocation(filter.id)}>{ filter.name }</MenuItem> )
								}
							</Menu>
                        </section> 

						{/* reset filters */}
						{
							selectedDay || selectedLocation || selectedTopic ?
								<section className={CSS.agendaFilterResetWrapper}>
									<button className={CSS.agendaFilterReset} onClick={resetFilters}>Reset all filters <span>&times;</span></button>
								</section>
							: null
						}
  
                    </div>
                </div>


				{/* <p className="my-sm">selectedTopic: { selectedTopic ? selectedTopic : 'x' } | selectedDay: { selectedDay ? selectedDay : 'x' } |  selectedLocation: { getFieldGroupNameFromId(sessions, selectedLocation, 'Location') }</p> */}


				{/* AGENDA */}
				<div className="agenda | section columns-1 gap-sm mt-md">				
					{
						buildAgenda( sessions ).map( (day, index) => {
							
							if ( selectedDay && selectedDay !== day.time ) return

							return (
								<section key={index} className='day'>
									<p key={index} className='dayDivider'> { day.day }</p>
									{
										day.timeslots.length ?
										day.timeslots.map( (slot, index) => {
											return (
												<div key={index} className='timeSlot'>

													<div className='timingsAndTags'>
														{format( new Date(slot.beginsAt), "HH:mm" )} - { format( new Date(slot.sessions[0].endsAt), "HH:mm" ) }
													</div>
													
													<div className="sessions">
														{
															slot.sessions.map( (session, index) => {
																return (
																	<div key={index} className="sessionsWrapper">
																		{
																			slot.sessions.length > 1 &&
																			<div className="sessionStream | fw-600">Stream {index + 1}</div>
																		}

																		<div className='session | bg-glass columns-1 gap-xs'>
																			<p className="sessionTitle | fs-4 fw-600 lh-1 c-accent">{ session.titleTranslations[0].value }</p>
																			<div className='sessionTagGrid'>
																				{getSessionFields( session, 'Topics').length ? <TagIcon fill={`var(--primary)`} /> : null}
																				{getSessionFields( session, 'Topics')}
																			
																				{getSessionFields( session, 'Location').length ? <CompassIcon fill={`var(--primary)`} /> : null}
																				{getSessionFields( session, 'Location')}
																			</div>

																			{
																				session.descriptionTranslations.length ?
																					parse( session.descriptionTranslations[0].value )
																				: null
																			}
																			
																			{/* { sortSpeakers(session.speakers) } */}
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

				</div>


            </section>


            <Modal onClose={() => setShowModal(false)} show={showModal}>

                <Sidebar size={`medium`}>
                    <aside className="center">
                        {
                            modalContent.avatar ?
                                <Avatar src={modalContent.avatar}/>
                                :
                                <Avatar src={`/assets/ui/avatar-fallback.png`}/>
                        }
                        <p className="fs-5 fw-600 c-primary mt-sm lh-1">{ modalContent.name }</p>
                        <p className="fs-sm fw-400 mt-xs">{modalContent.title} <br/>{modalContent.company}</p>
                    </aside>
                    
                    <SimpleBar style={{ maxHeight: 300 }}>
                        <div className="formatted pr-xs" dangerouslySetInnerHTML={{ __html: modalContent.bio }}></div>
                    </SimpleBar>                            
                    
                </Sidebar>

            </Modal>

            <Footer theme={{ footerBg: 'bg-white' }} />
            <LenisScroller />

        </>
    )
}
Agenda.theme = 'sa-2024'



const SpeakerCard = ({ speaker, type }) => {

	return (
		<div key={speaker.id} className='sessionSpeaker'>
			{ type ? <p className="c-accent pb-xs">{ type }</p> : null }
			{
				speaker.photoUrl ?
					<img src={speaker.photoUrl} alt="" style={{ maxWidth: 100, maxHeight: 100, borderRadius: 100, marginBottom: 10 }} />
				: <img src={`/assets/ui/avatar-fallback.png`} alt="" style={{ maxWidth: 100, maxHeight: 100, borderRadius: 100, marginBottom: 10 }} />

			}
			<p className="fw-600">{ speaker.firstName } { speaker.lastName }</p>
			<p className="fs-sm lh-1">{ speaker.jobTitle }<br />{ speaker.organization }</p>
		</div>
	)
}

const Chevron = () => {
	return (
		<span style={{ display: `inline-block`, height: 12, marginLeft: 6 }}>
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






export async function getStaticProps() {

    const result = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query plannings($eventId: String!, $page: Int!) {
						plannings(eventId: $eventId, page: $page, pageSize: 100) {
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
								withEvent(eventId: "${process.env.SWAPCARD_EVENT_ID_SA}") {
									eventProfile {
										type
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

	// console.log(result)

	const agenda = await result.json()
  

    return { 
        props: { 
            sessions: agenda.data.plannings
        } 
    }
}