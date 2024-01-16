import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"

import _ from 'lodash'
import { format } from 'date-fns'

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

import CSS from '../../css/app/agenda-sa-2024.module.css'


export default function Agenda ({ sessions }) {

	// const [ agendaSessions, setAgendaSessions ] = useState (null)
	// const [ agendaTimeSlots, setAgendaTimeSlots ] = useState (null)

	const [ selectedTopic, setSelectedTopic ] = useState (null)
    const [ selectedDay, setSelectedDay ] = useState (null)
    const [ selectedLocation, setSelectedLocation ] = useState(null)
    const [ showModal, setShowModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState({ avatar: '', name: '', title: '', company: '', bio: ''})

	const locationSelect = useRef()

    // console.log('agenda:', agenda)



	
    const getDayFromDateTimeString = (timestring) => format( new Date(timestring), "eeee" )
	
	const groups = _.groupBy(sessions, 'beginsAt')
	const slots = Object.keys(groups)
	const days = _.groupBy(slots, getDayFromDateTimeString)
	const dayKeys = Object.keys(days)




	// FILTERS
	

	const resetFilters = () => {
		setSelectedDay(null)
		setSelectedLocation(null)
		setSelectedTopic(null)
		locationSelect.current.value = 'All locations'
	}

	const getUniqueDays = ( sessionData ) => {

		const groupedStartTimes = _.groupBy(sessionData, 'beginsAt')
		const timeCodes = Object.keys(groupedStartTimes)
		const eventDays = _.uniqBy( timeCodes, string => string.slice(0, 10) )

		return eventDays
	}

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




	// BUILD AGENDA

	const buildAgenda = ( sessionData ) => {

		if ( !sessionData ) return

		// if day is selected isolate the appropriate sessions
		
		if ( selectedDay ) {
			const dayTimstamps = getUniqueDays( sessionData )
			const sessionsIsolatedByDay = []
			if ( dayTimstamps[selectedDay - 1] ) {
				sessionData.map( session => {
					if ( getDayFromDateTimeString(session.beginsAt) === getDayFromDateTimeString(dayTimstamps[selectedDay - 1]) ) {
						sessionsIsolatedByDay.push(session)
					}
				})
			}
			sessionData = sessionsIsolatedByDay
		}

		// console.log('sessions:', sessionData.length)


		// check for sessions

		if ( !sessionData.length ) {
			// console.log('NO SESSIONS FOUND')
			return null

		} else {

			// group sessions into timeslots and group by day
	
			const groupedSessions = _.groupBy(sessionData, 'beginsAt')
			const timeSlots = Object.keys(groupedSessions)
			const daySlots = _.groupBy(timeSlots, getDayFromDateTimeString)
	
			// console.log('groupedSessions:', (groupedSessions))
			// console.log('dayslots:', daySlots)

			const builtAgenda = []
	
			for ( const key in daySlots ) {

				const slot = daySlots[key].map ( slot => {
					return (
						{ beginsAt: String(slot), sessions: groupedSessions[slot] }
					)
					
				})

				builtAgenda.push( { day: key, timeSlots: slot } )

			}

			console.log('builtAgenda', builtAgenda)

			return builtAgenda
		
		}
		
	}

	


	// HANDLE SESSION TAGS

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




    return (
        <>

            <Header compact shim />

            <ThemeBg />
            <ThemeFg />


            <section className="block">
                
                <div className="section">
                    <p className="fs-0 fw-500">2024 Agenda</p>
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
                                dayKeys.map( (day, index) => {
                                    return (
                                        <button 
                                            className={`
                                                ${CSS.filterButton} 
                                                ${ selectedDay === index + 1 ? CSS.active : null }
                                            `}
                                            key={index} 
                                            onClick={ () => {
                                                setSelectedDay(index + 1)
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
                            <select
								ref={locationSelect}
                                className={CSS.filterSelect} 
                                onChange={ (e) => {
                                    setSelectedLocation( e.target.value )
                                }}
                            >
                                <option value={null}>All locations</option>
                                {
                                    groupFieldGroupsByName( sessions, 'Location').map( filter => {
                                        return (
                                            <option key={filter.id} value={filter.id}>
                                                {filter.name}
                                            </option>
                                        )
                                    })
                                }

                            </select>
                        </section> 

						{/* reset filters */}
						{
							selectedDay || selectedLocation || selectedTopic ?
								<section className={CSS.agendaFilterResetWrapper}>
									<button className={CSS.agendaFilterReset} onClick={resetFilters}>Reset <span>&times;</span></button>
								</section>
							: null
						}
  
                    </div>
                </div>


				{/* <p>selectedDay: { selectedDay ? selectedDay : 'no day selected' }</p> */}


				<div className="agenda | section columns-1 gap-sm mt-md">

					{ 
						buildAgenda( filterSessions(sessions) ) ?
						buildAgenda( filterSessions(sessions) ).map( day => {

							console.log('day:', day.day)
							console.log('selected:', selectedDay)
							
							return (
								<section className='day'>
									<div className='dayDivider'>{ day.day }</div>
									{
										day.timeSlots &&
										day.timeSlots.map( (slot, index) => {
											return (
												<div key={index} className='timeSlot'>
													<div className='timingsAndTags'>
														{format( new Date(slot.beginsAt), "HH:mm" )} - { format( new Date(slot.sessions[0].endsAt), "HH:mm" ) }
													</div>
													<div className="sessions">
														{
															slot.sessions.map( session => { 
																return (
																	<div key={session.id} className='session | bg-glass columns-1 gap-xs'>
																		<p className="sessionTitle | fs-4 fw-600 lh-1 c-accent">{ session.titleTranslations[0].value }</p>
																		
																		<div className='sessionTagGrid'>
																			{getSessionFields( session, 'Topics').length ? <TagIcon fill={`var(--primary)`} /> : null}
																			{getSessionFields( session, 'Topics')}
																		
																			{getSessionFields( session, 'Location').length ? <CompassIcon fill={`var(--primary)`} /> : null}
																			{getSessionFields( session, 'Location')}
																		</div>

																		{
																			session.descriptionTranslations.length ?
																				<p>{ session.descriptionTranslations[0].value }</p>
																			: null
																		}
																		
																		{ sortSpeakers(session.speakers) }
																	</div>
																)
															})
														}
													</div>
												</div>
											)
										})
									}
								</section>
							)
							
						}) : 
						<section>
							<p className="fs-4 fw-500">No sessions found for the currently selected filters!</p>
							<p>Please try a different combination or <span onClick={resetFilters}>reset</span> all filters.</p>
						</section>

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
								withEvent(eventId: "${process.env.SWAPCARD_EVENT_ID}") {
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
					"eventId": process.env.SWAPCARD_EVENT_ID,
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
