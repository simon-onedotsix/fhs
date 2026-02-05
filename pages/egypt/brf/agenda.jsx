import { useState } from "react"

import Head from "next/head"
import Image from "next/image"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import _ from 'lodash'
import { format } from 'date-fns'
import HTMLReactParser from 'html-react-parser'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'
import { Pop, Fade, Slide } from '../../../fuselage/animation/animation'

import { Header } from '../../../fuselage/theme/egypt/common/header-bfr/header'
import { Footer } from '../../../fuselage/theme/2025/brf/common/footer/footer'

import { StickySidebar } from '../../../fuselage/theme/2024/global/components/sticky-sidebar/sticky-sidebar'
import { TagIcon, CompassIcon, StopwatchIcon, LocationIcon } from "../../../fuselage/components/icons/icons"
import { Modal } from "../../../fuselage/theme/2024/sa/components/modal/modal"

import CSS from '../../../fuselage/theme/2025/sa/css/agenda-compact.module.css'



const tracks = [
	{
		id: "1",
		title: "NextGen - Education Investment",
		color: "#FFCFCF"
	},
	{
		id: "2",
		title: "Investment, Financing & Real Estate",
		color: "#E4DFEC"
	},
	{
		id: "3",
		title: "Destination Development",
		color: "#7DB4F2"
	},
	{
		id: "4",
		title: "Luxury, F&B, and Experiential Hospitality",
		color: "#E381CB"
	},
	{
		id: "5",
		title: "Focus on Saudi Arabia",
		color: "#82EDD1"
	},
	{
		id: "6",
		title: "Religious Tourisim",
		color: "#AB57EA"
	},
	{
		id: "7",
		title: "Sustainability & ESG",
		color: "#B3C981"
	},
	{
		id: "8",
		title: "Branded Residences",
		color: "#FF2B2B"
	},
	{
		id: "9",
		title: "Wellness & Medical Tourism",
		color: "#B8B084"
	},
	{
		id: "10",
		title: "Technology & AI",
		color: "#6B6DEF"
	},
	{
		id: "11",
		title: "Investment & Development",
		color: "#6B6DEF"
	}
]



export default function Agenda ({ sessions, locations }) {


	// console.log('sessions:', sessions)
	// console.log('locations [swc]:', locations)
	// console.log('locations:', groupFieldGroupsByName( sessions, 'Location'))
	// console.log('locations:', _.orderBy(groupFieldGroupsByName( sessions, 'Location'), ['id'], ['asc'])   )
	// console.log('position based on ID (for exhibition-stage):', locations.map( i => i.id ).indexOf('RmllbGRWYWx1ZV8yMDYxOTUyNA=='))
	// console.log('position based on ID (for yanbu-workshop-room):', locations.map( i => i.id ).indexOf('RmllbGRWYWx1ZV8yMjU3Nzc5NQ=='))	
	// console.log('topics:', _.orderBy(groupFieldGroupsByName( sessions, 'Topics'), ['id'], ['asc']) )
	// console.log('SEARCH:', search)

	let BRF_SESSIONS = []

	sessions.map(session => {
		if (session.fields.find( field => field.id === 'RmllbGRWYWx1ZV8yNDU2NzA5MQ==')) {
			BRF_SESSIONS.push(session)
		}
	})

	// console.log('BRF_SESSIONS:', BRF_SESSIONS)


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

	const getLocationTitleById = ( session ) => {
		const location = session.fields.find( field => field.definition.name === 'Location' )
		if ( !location ) return
		return location.translations[0].value
	}


    return (
        <ReactLenis root>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
			</Head>

            <Header compact shim />

			<section className={CSS.header}>
                <Image src={'/assets/img/sa/why-attend/why-attend-hero.jpg'} layout="responsive" width={1920} height={910} />
            </section>

            <section className="block bg-primary">
                
				<span id="agenda"/>

				{/* INTRO */}
                <div className="section mb-sm" style={{ zIndex: 2, position: 'relative' }}>
                    <p className="fs-1 fw-500 maxw-40">Branded Residences at FHS&nbsp;Saudi Arabia 2025</p>
                </div>



				{/* AGENDA */}
				<main className={CSS.agendaSidebarLayout}>
					{
						buildAgenda(BRF_SESSIONS).map( (day, index) => (
							<section key={index} className={CSS.sidebarDay}>
								<StickySidebar>
									<aside>
										{/* <p className="fs-2">Day {index + 1}</p> */}
										<Pop>
											<p className={CSS.dayDivider}>{ day.day } 2025</p>
										</Pop>
									</aside>

									<main>
										<div className={CSS.sessions}>
											<SessionGroup>
												{
													day.timeslots.map( timeslot => (
														<Timeslot
															key={timeslot.time}
															startTime={timeslot.beginsAt} 
															endTime={timeslot.endsAt}
														>
															{
																timeslot.sessions.map( session => (
																	<Session 
																		key={session.id}
																		id={session.id}
																		title={session.titleTranslations[0].value}
																		location={getLocationTitleById(session)}
																		description={session.descriptionTranslations.length && session.descriptionTranslations[0].value}
																		speakers={session.speakers}
																	/>
																))
															}
														</Timeslot>
													))
												}
											</SessionGroup> 
										</div>
									</main>
								</StickySidebar>
							</section>
						))
					}			
					
				</main>

				
            </section>


            <Footer theme={{ footerBg: 'bg-white' }} />
            <LenisScroller />

        </ReactLenis>
    )
}
Agenda.theme = 'brf'





export const SessionGroup = ({ location, children }) => {

	if ( !children ) return

	return (
		<div className={CSS.sessionGroupContainer} style={{ borderColor: location?.color, backgroundColor: location?.color }}>
			{
				location?.title &&
				<p className={`${CSS.sessionGroupHeader} | fs-5`}>{ location.title }</p>
			}

			<div className={CSS.sessionGroup}>
				{ children }
			</div>
		</div> 
	)
}

export const Session = ({ id, startTime, endTime, title, trackID, location, description, speakers }) => {

	const t = tracks.find( track => track.id === trackID )

	return (
		<div className={CSS.sessionsWrapper}>
			<div className={CSS.session}>
				<div className={CSS.sessionHeader}>
					<Duration startTime={startTime} endTime={endTime} />
					{ trackID && <Track trackID={trackID} />}
					{ location && <Location locationTitle={location}/>}
				</div>
				
				<div className={CSS.sessionContent}>
					<Fade>
						<p className={`${CSS.sessionTitle} | fs-5 fw-500 lh-1-1 c-white`}>
							{ title }
						</p>
					</Fade>
					{ description && description !== "<br />" ? HTMLReactParser(description) : null }
					{/* { speakers.length ? sortSpeakers(speakers) : null } */}
					{
						speakers.length && id === "UGxhbm5pbmdfMjU4NDUwMQ==" 
						? sortSpeakers(_.orderBy(changeSpeakerStatus(speakers, "U3BlYWtlcihFdmVudF8xOTkyMjcyLEV2ZW50UGVvcGxlXzM5MTMzMDAzLFVzZXJfMTQ2Njc2OCk=", 'Speaker'), 'lastName')) 
						: sortSpeakers(_.orderBy(speakers, 'lastName'))
					}
				</div>
			</div>
		</div>
	)
}

export const Timeslot = ({ startTime, endTime, trackID, children }) => {

	const t = tracks.find( track => track.id === trackID )

	return (
		<div className={CSS.timeslotWrapper}>
			{
				startTime ?
					<div className={CSS.timeslotHeader}>
						<Duration startTime={startTime} endTime={endTime} />
						{ trackID && <Track trackID={trackID} />}
					</div>
				: null
			}
			{ children }
		</div>
	)
}

export const Feature = ({ children }) => {
	return (
		<div className={CSS.featureWrapper}>
			{ children }
		</div>
	)
}

export const Duration = ({ startTime, endTime }) => {

	const convertSeconds = (seconds) => {
		const hours = Math.floor(seconds / 3600)
		const minutes = Math.floor((seconds % 3600) / 60)
	
		const hourString = hours > 0 ? `${hours}h` : ''
		const minuteString = minutes > 0 ? `${minutes}m` : ''
	
		if ( hours > 0 ) {
			return `${hourString} ${ minutes > 0 ? minuteString : ''}`

		} else if ( !hours && minutes > 0 ) {
			return `${minuteString}`

		}
	
		return
	}


	return (
		<>
			{ startTime && format( new Date(startTime), "HH:mm" ) } { startTime && endTime && "-"} { endTime && format( new Date(endTime), "HH:mm" ) }
			{
				startTime &&  endTime ?
				<span>&ensp;<StopwatchIcon fill={'var(--primary-3)'}/> { convertSeconds(parseInt(new Date(endTime).getTime() - new Date(startTime).getTime())/1000) }</span>
				: null
			}
		</>
	)
}

export const Track = ({ trackID }) => {

	const t = tracks.find( track => track.id === trackID )

	if ( !t ) return
	
	return (
		<p className={CSS.tag} style={{ backgroundColor: t.color }}><TagIcon fill={'var(--primary'} />{ t.title }</p>
	)
}

export const Location = ({ locationTitle }) => {

	if ( !locationTitle ) return
	
	return (
		<Pop><p className={CSS.tag} style={{ backgroundColor: 'white' }}><CompassIcon fill={'var(--primary'} />{ locationTitle }</p></Pop>
	)
}

export const Theme = ({ children }) => {
	return (
		<p className={CSS.theme}>THEME: { children }</p>
	)
}




const SpeakerCard = ({ speaker, type }) => {

	const [ showModal, setShowModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState({ avatar: '', name: '', title: '', company: '', bio: ''})

	return (
		<Pop>

			<div key={speaker.id} className={CSS.sessionSpeaker}>
				{ type ? <p className="c-secondary fw-500 pb-xs">{ type }</p> : null }
				{
					speaker.photoUrl 
					?	<div className={`${CSS.speakerPhoto} ${speaker.biography && CSS.bio}`}
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
							}}>
							{speaker.biography && <span><ProfileIcon /></span>}
							<img src={speaker.photoUrl} alt="" />
						</div>
					:	<div className={CSS.speakerPhoto}><img src={`/assets/ui/avatar-fallback.png`} alt="" /></div>

				}
				<p className="fw-600">{ speaker.firstName } { speaker.lastName }</p>
				<p className="fs-sm lh-1">{ speaker.jobTitle }<br />{ speaker.organization }</p>
			</div>

			<Modal onClose={() => setShowModal(false)} show={showModal}>
				<div style={{ maxHeight: '80vh', overflowY: 'scroll', paddingRight: 10 }}>
					<p className="fs-5 fw-600">{ modalContent.name }</p>
					<p className="fs-sm">{ modalContent.title }<br />{ modalContent.company }</p>
					<p className="mt-xs">{modalContent.bio}</p>
				</div>
			</Modal>
		</Pop>
	)
}

const ProfileIcon = ({ color = 'var(--primary)' }) => {

	return (
		<svg width="100%" height="100%" viewBox="0 0 24 15" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeMiterlimit: 1.5 }}>
			<g id="icon-profile">
				<g id="icon-author">
					<circle cx="7.517" cy="5.135" r="3.763" style={{ fill:`none`, stroke: color, strokeWidth:1.5 }}/>
					<path d="M1.351,12.932C2.39,10.558 4.761,8.897 7.517,8.897C10.273,8.897 12.644,10.558 13.684,12.932" style={{ fill:`none`, stroke: color, strokeWidth:1.5 }}/>
				</g>
				<path d="M13.739,2.244L21.996,2.244" style={{ fill:`none`, stroke: color, strokeWidth:1.5 }}/>
				<path d="M13.739,6.649L21.996,6.649" style={{ fill:`none`, stroke: color, strokeWidth:1.5 }}/>
				<path d="M15.918,11.054L21.996,11.054" style={{ fill:`none`, stroke: color, strokeWidth:1.5 }}/>
			</g>
		</svg>
	)
}

const sortSpeakers = ( speakerData ) => {

	if ( !speakerData ) return

	// console.log('speakerData:', speakerData)

	let moderators = []
	let speakers = []

	speakerData.forEach( speaker => {
		speaker.withEvent?.eventProfile.type !== 'Speaker' ? moderators.push( speaker ) : speakers.push( speaker )
	})


	if ( moderators.length && speakers.length ) return (
		<section>
			{
				moderators.length ?
					<div>
						<p className="fw-500" style={{ padding: `0 0 15px 0`}}>Moderator{ moderators.length > 1 && 's'}</p>
						<div className={CSS.sessionSpeakerGrid}>
							{ moderators.map( moderator => <SpeakerCard key={moderator.id} speaker={moderator} /> ) }
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
					{ speakers.map( speaker => <SpeakerCard key={speaker.id} speaker={speaker} /> ) }
				</div>
			</div>

		</section>
	)

	return (
		<div className={CSS.sessionSpeakerGrid}>
			{ speakerData.map( speaker => <SpeakerCard key={speaker.id} speaker={speaker} /> ) }
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

						plannings(eventId: "${process.env.SWAPCARD_EVENT_ID_SA_2025}", page: 1, pageSize: 500) {
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
								withEvent(eventId: "${process.env.SWAPCARD_EVENT_ID_SA_2025}") {
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
					"eventId": process.env.SWAPCARD_EVENT_ID_SA_2025,
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