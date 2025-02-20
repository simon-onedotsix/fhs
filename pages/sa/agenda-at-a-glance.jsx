
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useInView } from 'react-intersection-observer'

import _ from 'lodash'
import { format } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import parse from 'html-react-parser'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { Pop, Fade } from '../../fuselage/animation/animation'

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'

import { StickySidebar } from '../../fuselage/theme/2024/global/components/sticky-sidebar/sticky-sidebar'
import { TagIcon, CompassIcon, StopwatchIcon, LocationIcon } from "../../fuselage/components/icons/icons"
// import { SessionGroup, Session, Feature, Duration } from "./agenda-at-a-glance"

import CSS from '../../fuselage/theme/2025/sa/css/agenda-compact.module.css'




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



	console.log('sessions:', sessions)
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

			<section className={CSS.header}>
                <Image src={'/assets/img/sa/why-attend/why-attend-hero.jpg'} layout="responsive" width={1920} height={910} />
            </section>

            <section className="block bg-primary">
                
				<span id="agenda"/>

				{/* INTRO */}
                <div className="section mb-sm" style={{ zIndex: 2, position: 'relative' }}>
                    <p className="fs-1 fw-500">2024 Agenda at a Glance</p>
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

								<SessionGroup>
									<Session 
										startTime={"2025-05-11 15:00:00"} 
										endTime={"2025-05-11 18:30:00"}
										title={"NextGen: Investing in Saudi Arabia's Hospitality Education"}
										trackID={"1"}
									/>
									<Session 
										startTime={"2025-05-11 15:00:00"} 
										endTime={"2025-05-11 15:10:00"}
										title={"Welcome Remarks"}
										trackID={"1"}
									/>
								</SessionGroup> 

								<SessionGroup location={{ title: "Summit Stage" }}>
									<p className={CSS.heading}>Main Stage</p>
									<Session 
										startTime={"2025-05-11 15:10:00"} 
										endTime={"2025-05-11 15:20:00"}
										title={"Keynote - Hospitality Talent in Saudi Arabia: A Data-Driven Overview"}
										trackID={"1"}
									/>
									<Session 
										startTime={"2025-05-11 15:20:00"} 
										endTime={"2025-05-11 15:40:00"}
										title={"Education Meets Industry - Key Skills for the Future of Saudi Workforce"}
										trackID={"1"}
									/>
									<Session 
										startTime={"2025-05-11 15:40:00"} 
										endTime={"2025-05-11 16:00:00"}
										title={"Hospitality Workforce of the Future: Anticipating Trends and Building Resilience"}
										trackID={"1"}
									/>
								</SessionGroup> 

								<SessionGroup location={{ title: "Future Stage" }}>
									<p className={CSS.heading}>Workshops</p>
									<Theme>Hospitality Education and Real Estate Investment</Theme>
									<Session 
										startTime={"2025-05-11 16:00:00"} 
										endTime={"2025-05-11 16:45:00"}
										title={"How Can We Rebrand Hospitality Careers to Attract Saudi Youth?"}
										trackID={"5"}
									/>
									<Session 
										startTime={"2025-05-11 17:00:00"} 
										endTime={"2025-05-11 17:45:00"}
										title={"How Can Public-Private Partnerships in Hospitality Training Help Build Saudi Arabia's Workforce of the Future?"}
										trackID={"5"}
									/>
								</SessionGroup> 

								<SessionGroup location={{ title: "Meeting Room 1" }}>
									<p className={CSS.heading}>Workshops</p>
									<Theme>Hospitality Education and Real Estate Investment</Theme>
									<Session 
										startTime={"2025-05-12 16:00:00"} 
										endTime={"2025-05-12 16:45:00"}
										title={"Where Are the Investment Opportunities in Hospitality Education Real Estate?"}
										trackID={"1"}
									/>
									<Session 
										startTime={"2025-05-12 17:00:00"} 
										endTime={"2025-05-12 17:45:00"}
										title={"How Can Student Housing Be Designed to Meet the Needs of Future Hospitality Professionals?"}
										trackID={"1"}
									/>
								</SessionGroup>

								<SessionGroup location={{ title: "Meeting Room 2" }}>
									<p className={CSS.heading}>Workshops</p>
									<p className={CSS.heading}>THEME: Deep dive into training</p>
									<Session 
										startTime={"2025-05-12 16:00:00"} 
										endTime={"2025-05-12 16:40:00"}
										title={"How Can Hospitality Schools Adapt Their Curriculum to Meet Industry Trends and Standards?"}
									/>
									<Session 
										startTime={"2025-05-12 16:40:00"} 
										endTime={"2025-05-12 17:00:00"}
										title={"How Can Technology Enhance Hospitality Training and Skill Development?"}
									/>
									<Session 
										startTime={"2025-05-12 17:10:00"} 
										endTime={"2025-05-12 18:00:00"}
										title={"What Are the Best Models for Ongoing Professional Development in Hospitality?"}
									/>
								</SessionGroup>

								<SessionGroup>
									<Feature>
										<Session 
											startTime={"2025-05-12 17:45:00"} 
											endTime={"2025-05-12 18:30:00"}
											title={"Speed Networking (Future Stage)"}
										/>
									</Feature>
									<Feature>
										<Session 
											startTime={"2025-05-12 18:30:00"} 
											endTime={""}
											title={"Welcome Reception - Hosted by Al Khozama"}
										/>
									</Feature>
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

									<SessionGroup location={{ title: "Summit Stage" }}>
										<Session 
											startTime={"2025-05-12 10:00:00"} 
											endTime={"2025-05-12 10:15:00"}
											title={"Welcome to FHS Saudi Arabia 2025"}
										/>
										<Session 
											startTime={"2025-05-12 10:15:00"} 
											endTime={"2025-05-12 10:30:00"}
											title={"The Visionary Outlook: Empowering Saudi Tourism Destinations through the Hospitality Sector"}
											trackID={"5"}
										/>
										<Session 
											startTime={"2025-05-12 10:30:00"} 
											endTime={"2025-05-12 11:15:00"}
											title={"Safeguarding Hospitality Investments Amid Market Shifts: Is Saudi Arabia Still the Land of Opportunity?"}
											trackID={"2"}
										/>

										<Feature>
											<Session 
												startTime={"2025-05-12 11:30:00"} 
												endTime={"2025-05-12 11:50:00"}
												title={"Coffee Break"}
											/>
										</Feature>
										
										<Session 
											startTime={"2025-05-12 11:30:00"} 
											endTime={"2025-05-12 11:50:00"}
											title={"Keynote Speech"}
										/>
										<Session 
											startTime={"2025-05-12 11:50:00"} 
											endTime={"2025-05-12 12:30:00"}
											title={"The Changing Face of Riyadh: The Role of Mega Events in Driving Modernization, Infrastructure Growth, and Tourism Excellence"}
											trackID={"3"}
										/>
										<Session 
											startTime={"2025-05-12 12:30:00"} 
											endTime={"2025-05-12 13:00:00"}
											title={"TenX Leadership Talk: Insights on the Economic Impact of Travel & Tourism and Global Trends"}
											trackID={"8"}
										/>
									</SessionGroup>

									<SessionGroup location={{ title: "Future Stage" }}>
										<p className={CSS.heading}>Workshops</p>
										<Session 
											startTime={"2025-05-12 11:00:00"} 
											endTime={"2025-05-12 12:00:00"}
											title={"Empowering Connections: Networking Session"}
										/>
										<Session 
											startTime={"2025-05-12 12:00:00"} 
											endTime={"2025-05-12 13:00:00"}
											title={"Navigating the Hospitality Investment Industry in Saudi Arabia: A Beginner's Guide for New Attendees"}
											trackID={"2"}
										/>
									</SessionGroup>

									<SessionGroup location={{ title: "Centre Stage" }}>
										<Session 
											startTime={"2025-05-12 11:45:00"} 
											endTime={"2025-05-12 13:00:00"}
											title={"Announcements & Signings"}
										/>
										<Feature>
											<Session 
												startTime={"2025-05-12 13:00:00"} 
												endTime={""}
												title={"Lunch"}
											/>
										</Feature>
									</SessionGroup>

									<SessionGroup location={{ title: "Summit Stage" }}>
										<Session 
											startTime={"2025-05-12 14:00:00"} 
											endTime={"2025-05-12 14:20:00"}
											title={"Setting the Scene for Hotel Performance and Development in Saudi Arabia"}
											trackID={"5"}
										/>
										<Session 
											startTime={"2025-05-12 14:20:00"} 
											endTime={"2025-05-12 14:50:00"}
											title={"Financing Hospitality Ventures: Maximizing Capital for Growth and Success"}
											trackID={"2"}
										/>
										<Session 
											startTime={"2025-05-12 14:50:00"} 
											endTime={"2025-05-12 15:15:00"}
											title={"Is the pursuit of luxury compatible with sustainability in Saudi Arabian Hospitality?"}
											trackID={"7"}
										/>
										<Session 
											startTime={"2025-05-12 15:15:00"} 
											endTime={"2025-05-12 15:30:00"}
											title={"Hospitality: Differentiation Through Service Excellence"}
											trackID={"7"}
										/>
										<Session 
											startTime={"2025-05-12 15:30:00"} 
											endTime={"2025-05-12 16:00:00"}
											title={"A Bleak and Empty Hotel Shop …. or a Chance to activate Retail Brand Experiences blended with cool, branded Cafes and Bars?"}
											trackID={"4"}
										/>

										<Feature>
											<Session 
												startTime={"2025-05-12 16:00:00"} 
												endTime={"2025-05-12 16:30:00"}
												title={"Coffee Break"}
											/>
										</Feature>

										<Session 
											startTime={"2025-05-12 16:30:00"} 
											endTime={"2025-05-12 16:45:00"}
											title={"What's Next? Tourism of the Future"}
											trackID={"3"}
										/>
										<Session 
											startTime={"2025-05-12 16:45:00"} 
											endTime={"2025-05-12 17:20:00"}
											title={"Balancing Growth: Unlocking the Potential of Mid-Market Hospitality in Saudi Arabia's Luxury Landscape"}
											trackID={"2"}
										/>
										<Session 
											startTime={"2025-05-12 17:20:00"} 
											endTime={"2025-05-12 17:45:00"}
											title={"Could Hotel F&B set a World first by dominating the Mid Sector Dining Market in the kingdom?"}
											trackID={"4"}
										/>
									</SessionGroup>

									<SessionGroup location={{ title: "Future Stage" }}>
										<p className={CSS.heading}>Workshops</p>
										<Session 
											startTime={"2025-05-12 14:00:00"} 
											endTime={"2025-05-12 15:15:00"}
											title={"Insights on Branded Residences"}
											trackID={"8"}
										/>
										<Session 
											startTime={"2025-05-12 15:15:00"} 
											endTime={"2025-05-12 16:15:00"}
											title={"Key Trends in Hotel Management Contracts"}
											trackID={"2"}
										/>
										<Session 
											startTime={"2025-05-12 16:15:00"} 
											endTime={"2025-05-12 17:00:00"}
											title={"Your Path to Red Sea Global: Exploring Projects and Partnership Opportunities"}
											trackID={"5"}
										/>
									</SessionGroup>

									<SessionGroup location={{ title: "Centre Stage" }}>
										<Session 
											startTime={"2025-05-12 14:00:00"} 
											endTime={"2025-05-12 14:30:00"}
											title={"Announcements & Signings"}
										/>
										<Session 
											startTime={"2025-05-12 14:30:00"} 
											endTime={"2025-05-12 16:00:00"}
											title={"Start-up Den"}
										/>
										<Session 
											startTime={"2025-05-12 16:00:00"} 
											endTime={"2025-05-12 17:00:00"}
											title={"Announcements & Signings"}
										/>
									</SessionGroup>

									<SessionGroup>
										<Session 
											startTime={"2025-05-12 14:30:00"} 
											endTime={"2025-05-12 16:00:00"}
											title={"Roundtable Discussions"}
										/>
									</SessionGroup> 

									<SessionGroup>
										<Feature>
											<Session 
												startTime={"2025-05-12 18:30:00"} 
												endTime={""}
												title={"FHS Evening Reception"}
											/>
										</Feature>
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

									<SessionGroup>
										<Session 
											startTime={"2025-05-12 09:00:00"} 
											endTime={"2025-05-12 10:00:00"}
											title={"Investor Breakfast - By invitation only"}
										/>
									</SessionGroup> 
									
									<SessionGroup location={{ title: "Summit Stage" }}>
										<Session 
											startTime={"2025-05-12 10:00:00"} 
											endTime={"2025-05-12 10:15:00"}
											title={"Saudi Arabia Tourism Outlook: Shaping the Future from 2025 to 2040"}
											trackID={"5"}
										/>
										<Session 
											startTime={"2025-05-12 10:15:00"} 
											endTime={"2025-05-12 10:40:00"}
											title={"How Is Saudi Arabia Preparing for a Tourism Transformation to Connect Travelers Locally and Globally?"}
											trackID={"5"}
										/>
										<Session 
											startTime={"2025-05-12 10:40:00"} 
											endTime={"2025-05-12 11:00:00"}
											title={"Beyond Pilgrimage: Future Trends and Developments in Mecca and Medina"}
											trackID={"6"}
										/>
										<Session 
											startTime={"2025-05-12 11:00:00"} 
											endTime={"2025-05-12 11:15:00"}
											title={"How Can Technology Overcome the Logistical Challenges of Managing Pilgrim Crowds, and How Can These Insights Be Applied to Broader Hospitality Sectors?"}
											trackID={"10"}
										/>
										<Session 
											startTime={"2025-05-12 11:15:00"} 
											endTime={"2025-05-12 11:45:00"}
											title={"Transforming Sacred Journeys: How Can Religious Tourism Serve as a Springboard for Expanding Tourism in the Kingdom?"}
											trackID={"6"}
										/>

										<Feature>
											<Session 
												startTime={"2025-05-12 11:45:00"} 
												endTime={"2025-05-12 12:00:00"}
												title={"Coffee Break"}
											/>
										</Feature>

										<Session 
											startTime={"2025-05-12 12:00:00"} 
											endTime={"2025-05-12 12:15:00"}
											title={"Designing for Transformational Travel: Crafting Next-Gen Experiences That Inspire Change"}
											trackID={"7"}
										/>
										<Session 
											startTime={"2025-05-12 12:15:00"} 
											endTime={"2025-05-12 12:45:00"}
											title={"Planning with Purpose: Integrating Tourism Strategy and Conservation in Destination Development"}
											trackID={"7"}
										/>
										<Session 
											startTime={"2025-05-12 12:45:00"} 
											endTime={"2025-05-12 13:15:00"}
											title={"All-Inclusive Reimagined: How Gen Z and Luxury are Redefining the Upscale Travel Experience"}
											trackID={"3"}
										/>
										<Feature>
											<Session 
												startTime={"2025-05-12 13:50:00"} 
												endTime={"2025-05-12 14:30:00"}
												title={"FHS Awards"}
											/>
										</Feature>
									</SessionGroup> 

									<SessionGroup location={{ title: "Future Stage" }}>
										<p className={CSS.heading}>Workshops</p>
										<Session 
											startTime={"2025-05-12 10:00:00"} 
											endTime={"2025-05-12 10:30:00"}
											title={"Government Insights on Investment Incentives in Saudi Arabia"}
											trackID={"5"}
										/>
										<Session 
											startTime={"2025-05-12 10:30:00"} 
											endTime={"2025-05-12 11:15:00"}
											title={"ESG in Hospitality: Balancing Sustainability with Profit - Cost-Effective Solutions for a Competitive Edge"}
											trackID={"7"}
										/>
										<Session 
											startTime={"2025-05-12 11:15:00"} 
											endTime={"2025-05-12 12:30:00"}
											title={"Building the Future: A Workshop on Modular Architecture and Technology-Driven Regulations"}
											trackID={"10"}
										/>
										<Session 
											startTime={"2025-05-12 12:00:00"} 
											endTime={"2025-05-12 13:00:00"}
											title={"Key Feeder Markets for Saudi Arabia: Who are our new customers and what are they looking for?"}
											trackID={"5"}
										/>
									</SessionGroup>

									<SessionGroup location={{ title: "Centre Stage" }}>
										<Session 
											startTime={"2025-05-12 11:00:00"} 
											endTime={"2025-05-12 13:00:00"}
											title={"Announcements & Signings"}
										/>
									</SessionGroup>

									<SessionGroup>
										<Session 
											startTime={"2025-05-12 11:00:00"} 
											endTime={"2025-05-12 13:00:00"}
											title={"Roundtable Discussions"}
										/>
										<Feature>
											<Session 
												startTime={"2025-05-12 13:00:00"} 
												endTime={""}
												title={"Lunch"}
											/>
										</Feature>
									</SessionGroup>

									<SessionGroup location={{ title: "Summit Stage" }}>
										<Session 
											startTime={"2025-05-12 14:30:00"} 
											endTime={"2025-05-12 15:00:00"}
											title={"The Future Workforce: Empowering Talent, Leadership, and Inclusion"}
											trackID={"7"}
										/>
										<Session 
											startTime={"2025-05-12 15:00:00"} 
											endTime={"2025-05-12 15:30:00"}
											title={"Unveiling Market Trends: Insights into Branded Residences in the Kingdom"}
											trackID={"8"}
										/>
										<Session 
											startTime={"2025-05-12 15:30:00"} 
											endTime={"2025-05-12 16:10:00"}
											title={"Capitalizing on the Alternative Accommodation Boom: The Rising Tide of Investment"}
											trackID={"2"}
										/>
										<Session 
											startTime={"2025-05-12 16:10:00"} 
											endTime={"2025-05-12 16:45:00"}
											title={"Pathways to Holistic Wellness: Mapping Saudi Arabia's Role in Global Wellness Tourism"}
											trackID={"9"}
										/>
										<Session 
											startTime={"2025-05-12 16:45:00"} 
											endTime={"2025-05-12 17:00:00"}
											title={"Closing Plenary: The Road Ahead for Global Hospitality"}
										/>
									</SessionGroup>

									<SessionGroup location={{ title: "Future Stage" }}>
										<p className={CSS.heading}>Workshops</p>
										<Session 
											startTime={"2025-05-12 14:15:00"} 
											endTime={"2025-05-12 15:15:00"}
											title={"The Future of Hotel Asset Management - HAMA Asset Management Workshop - Invitation Only"}
											trackID={"2"}
										/>
										<Session 
											startTime={"2025-05-12 15:15:00"} 
											endTime={"2025-05-12 16:15:00"}
											title={"Shifting Gears: Navigating the Transition from CapEx to OpEx in the Hospitality Market"}
											trackID={"2"}
										/>
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
		title: "Brand & Destination",
		color: "#7DB4F2"
	},
	{
		id: "4",
		title: "Luxury, F&B, and Experiential",
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
		title: "Wellness",
		color: "#B8B084"
	},
	{
		id: "10",
		title: "Technology & Innovation",
		color: "#6B6DEF"
	}
]


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
				{/* style={{ backgroundColor: t?.color }} */}
				<div className={CSS.session}>
					<div className={CSS.sessionHeader}>
						<Duration startTime={startTime} endTime={endTime} />
						{ trackID &&  <Track trackID={trackID} />}
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
		<p>
			{ format( new Date(startTime), "HH:mm" ) } - { endTime && format( new Date(endTime), "HH:mm" ) }
			{
				endTime &&
				<span>&ensp;<StopwatchIcon fill={'var(--primary-3)'}/> { convertSeconds(parseInt(new Date(endTime).getTime() - new Date(startTime).getTime())/1000) }</span>
			}
		</p>
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