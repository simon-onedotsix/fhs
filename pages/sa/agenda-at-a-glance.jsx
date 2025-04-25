import Head from "next/head"
import Image from "next/image"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import _ from 'lodash'
import { format } from 'date-fns'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { Pop, Fade } from '../../fuselage/animation/animation'

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'

import { StickySidebar } from '../../fuselage/theme/2024/global/components/sticky-sidebar/sticky-sidebar'
import { TagIcon, CompassIcon, StopwatchIcon, LocationIcon } from "../../fuselage/components/icons/icons"

import CSS from '../../fuselage/theme/2025/sa/css/agenda-compact.module.css'



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



	console.log('sessions:', sessions)
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
                    <p className="fs-1 fw-500">2025 Agenda at a Glance</p>
					<div className="formatted mt-xs">
						<p>Programme is subject to change.</p>
					</div>
                </div>


				

				{/* AGENDA */}
				<main className={CSS.agendaSidebarLayout}>				
					<section className={CSS.sidebarDay}>
						<StickySidebar>
							<aside>
								<p className="fs-2">Day 1</p>
								<Pop>
									<p className={CSS.dayDivider}>11 May - Sunday</p>
								</Pop>
							</aside>

							<main>
								<div className={CSS.sessions}>

									{/* SESSIONS */}

									<SessionGroup location={{ title: "NextGen Focus" }}>
										<Timeslot
											startTime={"2025-05-11 15:00:00"} 
											endTime={"2025-05-11 18:30:00"}
										>
											<Session 
												title={"Keynote: Hospitality Talent in Saudi Arabia - A Data-Driven Overview"}
												trackID={"1"}
											/>
											<Session title={"Panel: Bridging Education and Industry"} />
											<Session title={"Workshop: Rebranding Hospitality Careers"} />
											<Session title={"Workshop: Strengthening Public-Private Partnerships"} />
											<Session title={"Speed Networking"} />
										</Timeslot>
										
										<Timeslot
											startTime={"2025-05-11 18:30:00"} 
											endTime={""}
										>
											<Session 
												
												title={"Welcome Reception hosted by Al Khozama"}
												trackID={"1"}
											/>
										</Timeslot>
									</SessionGroup> 
								</div>
							</main>
						</StickySidebar>
					</section>
							
					<section className={CSS.sidebarDay}>
						<StickySidebar>
							<aside>
								<p className="fs-2">Day 2</p>
								<Pop>
									<p className={CSS.dayDivider}>12 May - Monday</p>
								</Pop>
							</aside>

							<main>
								<div className={CSS.sessions}>

									{/* SESSIONS */}

									<SessionGroup location={{ title: "Main Summit Day" }}>
										<Timeslot>
											<Session 
												startTime={"2025-05-12 10:00:00"} 
												endTime={"2025-05-12 10:15:00"}
												title={"Welcome to FHS Saudi Arabia"}
											/>
										</Timeslot>

										<Timeslot 
											startTime={"2025-05-12 10:15:00"} 
											endTime={"2025-05-12 11:15:00"}
										>
											<Session 
												title={"Keynotes: Visionary Leadership in Saudi Tourism"}
												trackID={"5"}
											/>
											<Session 
												title={"Panel: Unlocking Destination Potential"}
												trackID={"3"}
											/>
										</Timeslot>
										
										<Timeslot 
											startTime={"2025-05-12 11:30:00"} 
											endTime={"2025-05-12 13:00:00"}
										>
											<Session 
												title={"Riyadh's Transformation: A Hospitality Perspective"}
												trackID={"5"}
											/>
											<Session 
												title={"Economic Impact of Travel & Tourism"}
												trackID={"2"}
											/>
										</Timeslot>

										<Timeslot>
											<Session 
												startTime={"2025-05-12 13:00:00"} 
												endTime={"2025-05-12 14:00:00"}
												title={"Lunch"}
											/>
										</Timeslot>
										
										<Timeslot 
											startTime={"2025-05-12 14:00:00"} 
											endTime={"2025-05-12 16:00:00"}
										>
											<Session 
												title={"Hotel Performance Outlook"}
												trackID={"2"}
											/>
											<Session 
												title={"Financing the Future: Hospitality Ventures"}
												trackID={"2"}
											/>
											<Session 
												title={"Sustainability in Practice: Green Hospitality"}
												trackID={"7"}
											/>
										</Timeslot>

										<Timeslot>
											<Session 
												startTime={"2025-05-12 16:00:00"} 
												endTime={"2025-05-12 16:30:00"}
												title={"Coffee Break"}
											/>
										</Timeslot>

										<Timeslot 
											startTime={"2025-05-12 16:30:00"} 
											endTime={"2025-05-12 17:45:00"}
										>
											<Session 
												title={"Future of Tourism: Global Trends & Local Strategies"}
												trackID={"2"}
											/>
											<Session 
												title={"Panel: Mid-Market Opportunity in KSA"}
												trackID={"11"}
											/>
											<Session 
												title={"Hotel F&B Innovation & Luxury"}
												trackID={"4"}
											/>
										</Timeslot>

										<Timeslot>
											<Session 
												startTime={"2025-05-12 18:00:00"} 
												endTime={""}
												title={"FHS Evening Reception"}
											/>
										</Timeslot>
									</SessionGroup>

								</div>
							</main>
						</StickySidebar>
					</section>
							
					<section className={CSS.sidebarDay}>
						<StickySidebar>
							<aside>
								<p className="fs-2">Day 3</p>
								<Pop>
									<p className={CSS.dayDivider}>13 May - Tuesday</p>
								</Pop>
							</aside>

							<main>
								<div className={CSS.sessions}>

									{/* SESSIONS */}
									
									<SessionGroup location={{ title: "Future Hospitality Themes" }}>
										<Timeslot
											startTime={"2025-05-12 10:00:00"} 
											endTime={"2025-05-12 11:45:00"}
										>
											<Session 
												title={"Insights into Branded Residences"}
												trackID={"8"}
											/>
											<Session 
												title={"Pilgrimage and Cultural Travel Trends"}
												trackID={"6"}
											/>
											<Session 
												title={"Tech Transformations in Hospitality"}
												trackID={"10"}
											/>
										</Timeslot>
										
										<Timeslot
											startTime={"2025-05-12 12:00:00"} 
											endTime={"2025-05-12 13:15:00"}
										>
											<Session 
												title={"Transformational Travel"}
												trackID={"4"}
											/>
											<Session 
												title={"Conservation and Destination Development"}
												trackID={"3"}
											/>
										</Timeslot>

										<Timeslot>
											<Session 
												startTime={"2025-05-12 13:15:00"} 
												endTime={"2025-05-12 13:30:00"}
												title={"FHS Awards"}
											/>
										</Timeslot>

										<Timeslot>
											<Session 
												startTime={"2025-05-12 13:30:00"} 
												endTime={"2025-05-12 14:30:00"}
												title={"Lunch Break"}
											/>
										</Timeslot>

										<Timeslot
											startTime={"2025-05-12 14:30:00"} 
											endTime={"2025-05-12 16:45:00"}
										>
											<Session 
												title={"Future of Work in Hospitality"}
												trackID={"7"}
											/>
											<Session 
												title={"Branded Residences in Saudi Arabia"}
												trackID={"8"}
											/>
											<Session 
												title={"Branded Residences in Saudi Arabia"}
												trackID={"9"}
											/>
										</Timeslot>

									</SessionGroup>
								</div>
							</main>
						</StickySidebar>
					</section>

				</main>

				
            </section>


            <Footer theme={{ footerBg: 'bg-white' }} />
            <LenisScroller />

        </ReactLenis>
    )
}
Agenda.theme = 'sa-2025'





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

export const Session = ({ startTime, endTime, title, trackID }) => {

	const t = tracks.find( track => track.id === trackID )

	return (
		<Pop>
			<div className={CSS.sessionsWrapper}>
				<div className={CSS.session}>
					<div className={CSS.sessionHeader}>
						<Duration startTime={startTime} endTime={endTime} />
						{ trackID && <Track trackID={trackID} />}
					</div>
					
					<div className={CSS.sessionContent}>
						<p className={`${CSS.sessionTitle} | fs-5 fw-500 lh-1-1 c-white`}>
							{ title }
						</p>
					</div>
				</div>
			</div>
		</Pop>
	)
}

export const Timeslot = ({ startTime, endTime, trackID, children }) => {

	const t = tracks.find( track => track.id === trackID )

	return (
		<Pop>
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
		</Pop>
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

export const Theme = ({ children }) => {
	return (
		<p className={CSS.theme}>THEME: { children }</p>
	)
}