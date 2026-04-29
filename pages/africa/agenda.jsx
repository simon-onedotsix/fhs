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
import parse from 'html-react-parser'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { Reveal } from '../../fuselage/animation/reveal'
import { Pop, Fade, Slide } from '../../fuselage/animation/animation'

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_AFRICA as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2025/africa/common/footer/footer'
import { PageHeader } from '../../fuselage-africa/blocks/page-header/page-header'

import { TagIcon, CompassIcon, StopwatchIcon, LocationIcon } from "../../fuselage/components/icons/icons"

import { Modal } from "../../fuselage/theme/2024/world/components/modal/modal"
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


export default function Agenda({ sessions, theme }) {
	
	const lenis = useLenis()
	const router = useRouter()

	const [ selectedTopic, setSelectedTopic ] = useState (null)
	const [ selectedDay, setSelectedDay ] = useState (null)
	const [ selectedLocation, setSelectedLocation ] = useState(null)

	const [ searchActive, setSearchActive ] = useState (false)
	const [ search, setSearch ] = useState ('')
	
	const [ filtersVisible, setFiltersVisible ] = useState(false)

	const locationSelect = useRef()


	useEffect(() => {
		// if session param is provided, scroll to session
		if (lenis && router.isReady && router.query.session) {
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
	}, [lenis, router])
	

	// FILTERS

	const resetFilters = () => {
		setSelectedDay(null)
		setSelectedLocation(null)
		setSelectedTopic(null)
		locationSelect.current.value = 'All locations'
	}
	

	// BUILD AGENDA
		
	const buildAgenda = ( sessionsData ) => {

		if (!sessionsData) return 
		

		// customise layout of targeted sessions –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– [see below]
		
		// extract sessions [UGxhbm5pbmdfNDM2NzA1OQ==] followed by [UGxhbm5pbmdfNDM0MTYwOQ==]
		// add inside session [UGxhbm5pbmdfNDMwNTczOA==] in unique timeslot => 16:30 - 18:00 • 1 hour 30 minutes • Summit Stage
		// console.log('INPUT:', sessionsData.length)

		// creat new timeslot
		const customTimeslot = {
			beginsAt: "",
			endsAt: "",
			title: "",
			sessions: []
		}

		sessionsData.map(session => {
			// get the parent session timings and create title fot new timeslot
			if (session.id === "UGxhbm5pbmdfNDMwNTczOA==") {
				customTimeslot.beginsAt = session.beginsAt
				customTimeslot.endsAt = session.endsAt
				customTimeslot.title = session.titleTranslations[0].value
			}
			// add the child sessions to the new timeslot
			if (session.id === "UGxhbm5pbmdfNDM2NzA1OQ==" || session.id === "UGxhbm5pbmdfNDM0MTYwOQ==") {
				customTimeslot.sessions.push(session)
			}
		})
		// console.log('customTimeslot:', customTimeslot)


		
		// remove sessions from original agenda
		const sessionsToRemove = ["UGxhbm5pbmdfNDMwNTczOA==", "UGxhbm5pbmdfNDM2NzA1OQ==", "UGxhbm5pbmdfNDM0MTYwOQ=="]
		const customSessionsData = sessionsData.filter(session => !sessionsToRemove.includes(session.id))
		// console.log('customSessionsData:', customSessionsData.length)
		// console.log('customSessionsData:', _.orderBy(customSessionsData, 'beginsAt'))
		

		sessionsData = customSessionsData
				
		// END customise layout of targeted sessions ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––




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


		// apply filters to sessions

		const filteredTimeslots = _.groupBy(filterSessions(sessionsData), 'beginsAt')
		
		// group by identical start and end times
		// const filteredTimeslots = _.groupBy(filterSessions(sessionsData), (item) => `${item.beginsAt}_${item.endsAt}`)
		
	
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

		
		
		// insert custom timeslot -------------------------------------------------------------------- [see above]

		// find the day on which the session falls
		const targetDay = agenda.find(day => day.time === customTimeslot.beginsAt.slice(0, 10))
		// console.log('targetDay:', targetDay)
		
		// find the index of the session occurring directly after
		let targetSlotIndex = undefined
		targetDay
			? targetSlotIndex = targetDay.timeslots.findIndex(slot => slot.beginsAt >= customTimeslot.beginsAt)
			: targetSlotIndex = 0
		// console.log('targetSlotIndex:', targetSlotIndex)
		
		// insert the custom timeslot
		if (targetDay) {
			targetDay.timeslots.splice(  targetSlotIndex + 1, 0, customTimeslot)
		}

		// END insert custom timeslot ----------------------------------------------------------------
		
		
		console.log('agenda:', agenda)
		return agenda



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

	const getFieldGroupNameById = ( sessionData, fieldId ) => {
		if ( !fieldId ) return
		let array = groupFieldGroupsByName( sessionData, 'Topics' )
		let obj = array.find( topic => topic.id === fieldId)
		return obj.name
	}



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

			// START custom prioritisation for specific session/s
			if (session.id === "UGxhbm5pbmdfNDI1NTEyMA==") {
				session = { ...session, priority: 10 }
			}
			// END custom prioritisation for specific session/s

			return session
		})

		return _.orderBy(prioritisedSessions, ['priority'])
	}


	// console.log('sessions:', sessions)
	// console.log('theme:', theme)	
	// console.log(groupFieldGroupsByName( sessions, 'Location'))
	

	return (
		<ReactLenis root>
			<Head>
                <link rel="icon" type="image/png" href="/assets/favicons/africa/favicon-16x16.png" sizes="16x16" />
			</Head>
			
			<div style={{ width: `100%`, overflow: `hidden` }}>

            <EventsBar site={'/africa'} />
            <Header
                site={`/africa`}
                handle={`Africa`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />

				<PageHeader theme={``}>
					<div className="formatted no-print">
						<div className="fs-0 fw-600"><Reveal>2026 Agenda</Reveal></div>
						<Slide>
							<p className="mt-sm">For FHS Africa, our objective is to enhance networking opportunities by introducing innovative and engaging formats that foster meaningful connections among delegates. The program is carefully designed to encourage greater interaction between attendees and speakers, ensuring valuable discussions and insights.</p>
						</Slide>
					</div>

				</PageHeader>


				
				<section className="block pt-0">

					<div className="container pt-xl pb-xl print-only">
						<p className="fs-0 fw-600 c-black">FHS Africa 2026 Agenda</p>
					</div>

					<div className="container columns-4 gap-md formatted">
						<section>
							<h4>Summit Stage</h4>
							<p>The <strong className="fw-600">Summit Stage</strong> serves as the conference&apos;s central hub, hosting all <strong className="fw-600">keynote presentations and pivotal panel discussions</strong>. It is designed to bring together industry leaders, investors, policymakers, and innovators in one space, fostering meaningful dialogue and knowledge exchange. Attendees can expect high-level insights into global and regional hospitality trends, strategic investment opportunities, and emerging market dynamics.</p>
						</section>

						<section>
							<h4>Knowledge Station</h4>
							<p>A dedicated space for learning and inspiration, the Knowledge Station offers engaging workshops, in-depth case studies, and expert presentations. Designed to address key focus topics from the conference, this hub provides valuable insights and practical knowledge for attendees seeking deeper understanding and expertise.</p>
						</section>

						<section>
							<h4>Showcase Den</h4>
							<p>A dynamic platform for exploring investment opportunities, the Showcase Den highlights key destinations, country spotlights, and new project pitches. Designed to connect delegates with potential investments, this space offers valuable insights into emerging markets and groundbreaking developments in the industry.</p>
						</section>

						<section>
							<h4>Pioneer Camp</h4>
							<p>A collaborative space designed for in-depth discussions, the Pioneer Camp caters to the demand for smaller, longer conversations between delegates and experts. Through interactive roundtables, this hub fosters meaningful dialogue, tackles critical challenges, and develops practical solutions for the industry&apos;s future.</p>
						</section>
					</div>


					<div className="printButton button-grid mt-sm no-print">
						{/* <Link href={'/africa/agenda-at-a-glance'}><a className={'button fs-6'}>Agenda at a glance</a></Link> */}
						<button 
							className={'button fs-6'}
							onClick={ ()=> window.print() }
						><PrinterIcon />&ensp;Print Agenda</button>
					</div>

					
					
					{/* FILTERS */}
					<div className="container agendaFilters">
						<div className={`${CSS.filterLayout} ${filtersVisible ? CSS.active : ''}`}>

							{/* toggle */}
							<div className={CSS.filterActionsContainer}>							
								<div className={CSS.agendaActionsToggleWrapper}>
									<span>FILTER AGENDA</span>
									
									<button className={CSS.agendaActionsToggle} onClick={ () => setFiltersVisible(!filtersVisible) }><FilterIcon color={`var(--secondary)`} /></button>
								</div>
							</div>

							{/* filters */}
							<section>
								{/* topics */}
								{
									groupFieldGroupsByName( sessions, 'Topics').length ?
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
									: null
								}

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
													<option key={filter.id} value={filter.id} id={filter.name}>
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
											<button className={CSS.agendaFilterReset} onClick={resetFilters}><span>&times;</span> Reset all filters</button>
										</section>
									: null
								}
							</section>

							{/* search */}
							<section>
								<div className={`${CSS.searchLayout} ${CSS.search} ${searchActive && CSS.active}`}>
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
											}}
										>&times;</button>
									</div>
								</div>
							</section>

						</div>
					</div>


					{/* AGENDA */}
					<div className="agenda | section columns-1 gap-sm mt-md pb-xl">				
						{
							buildAgenda( sessions ).map( (day, index) => {
								
								if ( selectedDay && selectedDay !== day.time ) return

								return (
									<section key={index} className={CSS.day}>
										<p key={index} className={CSS.dayDivider}> { day.day }</p>

										{
											day.timeslots.length 
											?
												day.timeslots.map((slot, index) => {

													// check for timeslot containing session id – if found, reverse the order
													let reverseOrder = (slot.sessions.find(session => session.id === "UGxhbm5pbmdfNDMyMjYyNw=="))

													// console.log('filter:', selectedLocation)

													// only include custom timeslot if there no location selected or just one is selected
													if ( slot.title && selectedLocation && selectedLocation !== "RmllbGRWYWx1ZV8xOTEwNTI2NA==" ) return

													// do custom layout for timeslot with title key
													return slot.title
														? (
															// custom session layout
															<div
																key={index}
																className="bg-accent"
																style={{
																	padding: `1.5rem`,
																	borderRadius: `calc(var(--default-radius) * 0.5)`,
																	backgroundColor: `hsl(from var(--accent) h s l / .75)`
																}}
															>
																<p className="sessionTitle | fs-4 fw-600 lh-1 c-secondary mb-xs">{slot.title}</p>
																<div key={index} style={{ display: `grid`, gridTemplateColumns: `1fr`, gap: `.5rem`}}>
																	{
																		prioritiseSessions(slot.sessions).map(session => {
																			return <Session key={session.id} session={session} theme={getSessionLocationTheme(session)} />
																		})
																	}														
																</div>
															</div>
														
														) : (
															// normal session handeling
															<div key={index} className={`${CSS.sessions} ${reverseOrder ? CSS.reversed : ''}`}>
																{
																	prioritiseSessions(slot.sessions).map(session => {
																		return <Session key={session.id} session={session} theme={getSessionLocationTheme(session)} />
																	})
																}														
															</div>

														)
													
												}) 
											: 
												<p className="fs-5 fw-400 py-xs">
													No { getFieldGroupNameById( sessions, selectedTopic ) } sessions available { selectedLocation  ? 'at this location' : null } on this day.
												</p>
										}

									</section>
								)
							})
						}
					</div>

					<div className="print-only" style={{ height: '4rem'}}/>
				</section>


			<LenisScroller />
			</div>
		</ReactLenis>
	)
}
Agenda.theme = 'africa'



export const Session = ({ session }) => {

	if ( !session ) return

	const sortSpeakers = ( speakerData ) => {

		if ( !speakerData ) return

		// console.log('session ID:', session.id)
		// console.log('speakerData:', speakerData)

		let moderators = []
		let speakers = []


		// if the first speaker is a moderator, move to separate array
		speakerData.forEach( (speaker, index) => {
			if (speaker.withEvent?.eventProfile.type === 'Moderator') {
				moderators.push(speaker)
			} else {
				speakers.push(speaker)
			}
		})
		

		// function to handle speaker who is moderator in one session and speaker in another
		// if (session.id === 'UGxhbm5pbmdfMjk3MzgwMA==') {
		// 	speakerData.forEach(speaker => {
		// 		if (speaker.id === 'U3BlYWtlcihFdmVudF8yOTEzMTk5LEV2ZW50UGVvcGxlXzQ0ODY2NTY0LFVzZXJfMTEzNzgzNTAp') moderators.push(speaker)
		// 	})
		// }
		// function removeObjectWithId(arr, id) {
		// 	return arr.filter((obj) => obj.id !== id);
		// }
		// speakers = removeObjectWithId(speakers, 'U3BlYWtlcihFdmVudF8yOTEzMTk5LEV2ZW50UGVvcGxlXzQ0ODY2NTY0LFVzZXJfMTEzNzgzNTAp')
		// END function to handle speaker who is moderator in one session and speaker in another



		if ( moderators.length && speakers.length ) return (
			<section>
				{
					moderators.length ?
						<div>
							<p className="fw-500 c-primary" style={{ padding: `0 0 15px 0`}}>Moderator{ moderators.length > 1 && 's'}</p>
							<div className={CSS.sessionSpeakerGrid}>
								{ moderators.map( moderator => <SpeakerCard key={moderator.id} speaker={moderator} /> ) }
							</div>
						</div>
					: null
				}
				<div>
					{
						moderators.length && speakers.length ?
							<p className="fw-500 c-primary mt-xxs" style={{ padding: `0 0 15px 0`}}>In conversation with</p>
						: null
					}
					<div className={CSS.sessionSpeakerGrid}>
						{ _.orderBy(speakers, 'lastName').map( speaker => <SpeakerCard key={speaker.id} speaker={speaker} /> ) }
					</div>
				</div>

			</section>
		)

		return (
			<div className={CSS.sessionSpeakerGrid}>
				{ _.orderBy(speakerData, 'lastName').map( speaker => <SpeakerCard key={speaker.id} speaker={speaker} /> ) }
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
	
		<div className={CSS.sessionsWrapper} id={session.id.slice(0, -2)}>
			<div className={CSS.sessionHeader}>
				<Duration startTime={session.beginsAt} endTime={session.endsAt} />
				<Location session={session} />
			</div>

			<div className={`${setSessionTheme(session)} ${CSS.sessionContent} | columns-1 gap-xs`} >
				
				{/* <small style={{color: 'lime', backgroundColor: 'blue'}}>{session.id}</small> */}
				
				<p className="sessionTitle | fs-4 fw-600 lh-1 c-secondary">
					{ parse(session.titleTranslations[0].value) }
				</p>

				{
					session.descriptionTranslations.length ?
					<div className="maxw-45 c-secondary">
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
		<p className={CSS.tag}><CompassIcon fill={'var(--primary)'} />{ location }</p>
	)
	return
}

const SpeakerCard = ({ speaker, type }) => {

	const [ showModal, setShowModal ] = useState(false)
	const [ modalContent, setModalContent ] = useState({ avatar: '', name: '', title: '', company: '', bio: ''})

	return (
		<>

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
							{speaker.biography && <span><ProfileIcon color={'white'} /></span>}
							<img src={speaker.photoUrl} alt="" />
						</div>
					:	<div className={CSS.speakerPhoto}><img src={`/assets/ui/avatar-fallback.png`} alt="" /></div>

				}
				<p className="fw-600 c-secondary">{ speaker.firstName } { speaker.lastName }</p>
				<p className="fs-sm lh-1 c-secondary">{ speaker.jobTitle }<br />{ speaker.organization }</p>
			</div>

			<Modal onClose={() => setShowModal(false)} show={showModal}>
				<div style={{ maxHeight: '80vh', overflowY: 'scroll', paddingRight: 10 }}>
					<p className="fs-5 fw-600">{ modalContent.name }</p>
					<p className="fs-sm">{ modalContent.title }<br />{ modalContent.company }</p>
					<p className="mt-xs">{modalContent.bio}</p>
				</div>
			</Modal>
		</>
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

const FilterIcon = ({ color }) => {
	return (
		<svg width="100%" height="100%" viewBox="0 0 30 25" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinejoin:`round`, strokeMiterlimit: 1.5 }}>
			<g transform="matrix(1,0,0,1,-2319,-177)">
				<g id="icon-filter" transform="matrix(1,0,0,1,240.914,76.6167)">
					<g>
						<g transform="matrix(0.738468,0,0,1,543.84,0)">
							<path d="M2079.44,104.826L2100.8,104.826" style={{ fill:`none`, stroke: color ? color : 'black', strokeWidth: 2.28 }}/>
						</g>
						<g transform="matrix(0.265026,0,0,1,1549.7,0)">
							<path d="M2079.44,104.826L2100.8,104.826" style={{ fill:`none`, stroke: color ? color : 'black', strokeWidth: 2.73 }}/>
						</g>
						<g transform="matrix(0.637431,0,0,0.637431,743.862,40.9144)">
							<circle cx="2124.38" cy="100.264" r="4.384" style={{ fill:`none`, stroke: color ? color : 'black', strokeWidth: 3.14 }}/>
						</g>
					</g>
					<g transform="matrix(1,0,0,1,0,16.742)">
						<g transform="matrix(0.738468,0,0,1,543.84,0)">
							<path d="M2079.44,104.826L2100.8,104.826" style={{ fill:`none`, stroke: color ? color : 'black', strokeWidth: 2.28 }}/>
						</g>
						<g transform="matrix(0.265026,0,0,1,1549.7,0)">
							<path d="M2079.44,104.826L2100.8,104.826" style={{ fill:`none`, stroke: color ? color : 'black', strokeWidth: 2.73 }}/>
						</g>
						<g transform="matrix(0.637431,0,0,0.637431,743.862,40.9144)">
							<circle cx="2124.38" cy="100.264" r="4.384" style={{ fill:`none`, stroke: color ? color : 'black', strokeWidth: 3.14 }}/>
						</g>
					</g>
					<g transform="matrix(1,0,0,1,0,-0.169219)">
						<g transform="matrix(-0.738468,0,0,1,3642.06,8.54021)">
							<path d="M2079.44,104.826L2100.8,104.826" style={{ fill:`none`, stroke: color ? color : 'black', strokeWidth: 2.28 }}/>
						</g>
						<g transform="matrix(-0.265026,0,0,1,2636.21,8.54021)">
							<path d="M2079.44,104.826L2100.8,104.826" style={{ fill:`none`, stroke: color ? color : 'black', strokeWidth: 2.73 }}/>
						</g>
						<g transform="matrix(-0.637431,0,0,0.637431,3442.04,49.4546)">
							<circle cx="2124.38" cy="100.264" r="4.384" style={{ fill:`none`, stroke: color ? color : 'black', strokeWidth: 3.14 }}/>
						</g>
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

						plannings(eventId: "${process.env.SWAPCARD_EVENT_ID_AFRICA_2026}", page: 1, pageSize: 500) {
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
								withEvent(eventId: "${process.env.SWAPCARD_EVENT_ID_AFRICA_2026}") {
									eventProfile {
										type
										withEvent(eventId: "${process.env.SWAPCARD_EVENT_ID_AFRICA_2026}") {
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
					"eventId": process.env.SWAPCARD_EVENT_ID_AFRICA_2026,
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