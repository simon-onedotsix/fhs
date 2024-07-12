import { useState, useRef, useEffect } from "react"

import Head from "next/head"
import { useRouter } from "next/router"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useInView } from 'react-intersection-observer'

import _ from 'lodash'
import { format } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import parse from 'html-react-parser'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from "../../fuselage/theme/2024/world/common/footer/footer"

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
import DROPDOWN from '../../css/app/dropdown.module.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

import CSS from '../../css/app/agenda-world-2024-compact.module.css'




// custom topic selection and ordering
// to revert to API-driven replace the mapped variable with:
// groupFieldGroupsByName( sessions, 'Topics')


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





export default function Agenda ({ sessions, locations }) {

	const lenis = useLenis()
	const router = useRouter()

	// const lenis = useLenis(({ scroll }) => {
	// 	console.log(scroll)
	// })



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


		// group sessions (and apply filters)

		const filteredTimeslots = _.groupBy(sessionsData, 'beginsAt')
		
	
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



	// console.log('sessions:', sessions)
	// console.log('locations [swc]:', locations)
	// console.log('locations:', groupFieldGroupsByName( sessions, 'Location'))
	// console.log('locations:', _.orderBy(groupFieldGroupsByName( sessions, 'Location'), ['id'], ['asc'])   )
	// console.log('position based on ID (for exhibition-stage):', locations.map( i => i.id ).indexOf('RmllbGRWYWx1ZV8yMDYxOTUyNA=='))
	// console.log('position based on ID (for yanbu-workshop-room):', locations.map( i => i.id ).indexOf('RmllbGRWYWx1ZV8yMjU3Nzc5NQ=='))	
	// console.log('topics:', _.orderBy(groupFieldGroupsByName( sessions, 'Topics'), ['id'], ['asc']) )
	// console.log('SEARCH:', search)









	const breakTitle = ( trigger, titleString, splitPoint ) => {
		if ( !titleString.includes(trigger) ) return titleString
		let lines = titleString.split(splitPoint)
		return `${lines[0]}:<br/>${lines[1]}`		
	}


    return (
        <ReactLenis root>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
			</Head>

            <Header compact shim />

            <section className="block">
                
				<span id="agenda"/>

				{/* INTRO */}
                <div className="section mb-sm">
                    <p className="fs-0 fw-500">2024 Agenda at a Glance</p>
					<div className="formatted mt-md">
						<p>Programme is subject to change.</p>
					</div>
                </div>


				

				{/* AGENDA */}
				<main className={CSS.agenda}>				
					{
						buildAgenda( sessions ).length 
						? buildAgenda( sessions ).map( (day, index) => {

							return (
								<section key={index} className={CSS.day}>

									<p className="fs-2">Day {index +1}</p>
									<p key={index} className={CSS.dayDivider}> { day.day }</p>
									
									{
										day.timeslots.length ?
										day.timeslots.map( (slot, index) => {
											return (
												<div key={index}>

													{/* SESSIONS */}

													<div className={CSS.sessions}>
														{
															prioriseStreams( slot.sessions, locations ).map( (session, index) => {
																return (
																	<div key={index} className={CSS.sessionsWrapper}>
																		<div className={CSS.session}>

																			<div className={CSS.sessionHeader}>
																				{
																					session.beginsAt && session.endsAt ?
																						<div>
																							{format( new Date(session.beginsAt), "HH:mm" )} - { format( new Date(session.endsAt), "HH:mm" )}
																							&ensp;<StopwatchIcon fill={'var(--accent)'}/> { convertSeconds(parseInt(new Date(session.endsAt).getTime() - new Date(session.beginsAt).getTime())/1000) }
																						</div>
																					: null
																				}
																			</div>

																			<div className={CSS.sessionContent}>

																				{/* <small style={{ color: 'orange'}}>{session.id}</small> */}
																				
																				<p className={`${CSS.sessionTitle} | fs-5 fw-600 lh-1 c-white caps`}>
																					{ parse(breakTitle(":", session.titleTranslations[0].value, ": ")) }
																				</p>
																																									
																				{/* <div className={CSS.sessionTagGrid}>
																					{session.fields.length ? <TagIcon fill={`var(--accent)`} /> : null}
																					{getSessionFields( session, 'Topics')}
																				</div> */}

																				{
																					session.descriptionTranslations.length ?
																						parse( session.descriptionTranslations[0].value )
																					: null
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
										}) : <p className="fs-5 fw-400 py-xs">No sessions available on this day.</p>
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
Agenda.theme = 'world-2024'





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

						plannings(eventId: "${process.env.SWAPCARD_EVENT_ID_AE}", page: 1, pageSize: 500) {
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


    if ( result.data ) return { 
        props: { 
            sessions: result.data.plannings,
			locations: result.data.event.planningsPlaces
        } 
    }

	return { props: {} }
}