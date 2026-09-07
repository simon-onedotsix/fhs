import { useState, useRef } from "react"

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import _ from 'lodash'
import { format } from 'date-fns'
import parse from 'html-react-parser'

import Head from "next/head"

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'
import { Reveal } from '../../../fuselage/animation/reveal'
import { Pop, Fade, Slide } from '../../../fuselage/animation/animation'


import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header'
import { FHS_AFRICA as header } from '../../../fixtures/nav'
import { Footer } from '../../../fuselage/theme/2025/africa/common/footer/footer'
import { PageHeader } from '../../../fuselage-africa/blocks/page-header/page-header'

import { StickySidebar } from '../../../fuselage/layout/sticky-sidebar/sticky-sidebar'

import { TagIcon, CompassIcon, StopwatchIcon, LocationIcon } from '../../../fuselage/components/icons/icons'

import CSS from '../../fuselage/theme/2025/africa/css/agenda-compact.module.css'



export default function Agenda ({ sessions, theme }) {
	

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


	// console.log('sessions:', sessions)
	// console.log('theme:', theme)	
	// console.log(groupFieldGroupsByName( sessions, 'Location'))


    return (
		<>
			<Head>
                <link rel="icon" type="image/png" href="/assets/favicons/africa/favicon-16x16.png" sizes="16x16" />
            </Head>

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
                    <p className="fs-0 fw-600"><Reveal>2025 Agenda at a glance</Reveal></p>
                </div>

            </PageHeader>

            <section className="block">

					
				<StickySidebar size={'large'}>
					<aside>
						<p className={CSS.dayDivider}>Tuesday 17 June</p>
					</aside>

					<main>
						<div className={CSS.sessions}>
							<Session 
								duration={{ startTime: "2025-06-17 11:00:00", endTime: "2025-06-17 14:00:00" }}
								location={"The Westin Cape Town"}
								title={"Registration & Welcome Coffee (Lunch) "}
							/>

							<SessionGroup 
								duration={{ startTime: "2025-06-17 14:00:00", endTime: "2025-06-17 17:00:00" }}
							>
								<Session 
									// duration={{ startTime: "2025-06-17 14:00:00", endTime: "2025-06-17 17:00:00" }}
									location={"Kowledge Station"}
									theme={"1"}
									title={"Welcome & ESG SOLUTION LAB powered by the World Sustainable Hospitality Alliance"}
								/>
								<Session 
									// duration={{ startTime: "2025-06-17 14:00:00", endTime: "2025-06-17 17:00:00" }}
									location={"Showcase Den"}
									theme={"2"}
									title={"Hospitality 101, all you need to know about Hospitality in one place "}
								/>
								<Session 
									// duration={{ startTime: "2025-06-17 14:00:00", endTime: "2025-06-17 17:00:00" }}
									location={"Pioneer Camp"}
									theme={"3"}
									title={"Networking"}
								/>
							</SessionGroup>

							<Session 
								duration={{ startTime: "2025-06-17 14:00:00", endTime: "2025-06-17 16:00:00" }}
								location={"Innovation Lodge"}
								title={"Investor's Council "}
							/>

							<Session 
								duration={{ startTime: "2025-06-17 17:00:00", endTime: "2025-06-17 18:00:00" }}
								title={"Speed Networking"}
							/>

							<Session 
								duration={{ startTime: "2025-06-17 18:00:00", endTime: "2025-06-17 21:00:00" }}
								title={"Reception"}
							/>
						</div>
					</main>
				</StickySidebar>

				<StickySidebar size={'large'}>
					<aside>
						<p className={CSS.dayDivider}>Wednesday 18 June</p>
					</aside>

					<main>
						<div className={CSS.sessions}>
							<SessionGroup 
								duration={{ startTime: "2025-06-18 09:00:00", endTime: "2025-06-18 11:00:00" }}
								location={"BOMA Talks (CTICC)"}
							>
								<Session 
									theme={"1"}
									title={"Africa&#39;s Vision: How Government Strategies Are Shaping the Future of Hospitality"}
								/>
								<Session 
									theme={"2"}
									title={"Setting the Scene for Destination &amp; Hotel Development in Africa"}
								/>
							</SessionGroup>

							<Session 
								duration={{ startTime: "2025-06-17 11:00:00", endTime: "2025-06-17 11:15:00" }}
								title={"Coffee Break"}
							/>

							<SessionGroup 
								duration={{ startTime: "2025-06-18 11:15:00", endTime: "2025-06-18 13:30:00" }}
								location={"BOMA Talks (CTICC)"}
							>
								<Session 
									theme={"1"}
									title={"Pipeline Watch: Investment Hotspots & the Future of Hospitality Expansion in Africa"}
								/>
								<Session 
									theme={"2"}
									title={"Preserving Africa's Biodiversity: Hospitality's Role in Conservation Tourism"}
								/>
							</SessionGroup>

							<Session 
								duration={{ startTime: "2025-06-17 13:30:00", endTime: "2025-06-17 15:00:00" }}
								title={"Lunch"}
							/>

							<SessionGroup 
								duration={{ startTime: "2025-06-17 15:00:00", endTime: "2025-06-17 18:00:00" }}
							>
								<Session 
									location={"Kowledge Station"}
									theme={"1"}
									title={"Focus: Financing Models in Africa "}
								/>
								<Session 
									location={"Showcase Den"}
									theme={"2"}
									title={"Country Showcases "}
								/>
								<Session 
									location={"Pioneer Camp"}
									theme={"3"}
									title={"Roundtable Discussions: International Lense on Africa"}
								/>
							</SessionGroup>

							<Session 
								duration={{ startTime: "2025-06-17 17:15:00", endTime: "2025-06-17 18:00:00" }}
								title={"Speed Networking 2"}
							/>

							<Session 
								duration={{ startTime: "2025-06-17 18:00:00", endTime: "2025-06-17 21:00:00" }}
								title={"Reception"}
							/>

						</div>
					</main>
				</StickySidebar>

				<StickySidebar size={'large'}>
					<aside>
						<p className={CSS.dayDivider}>Thursday 19 June</p>
					</aside>

					<main>
						<div className={CSS.sessions}>
							<Session 
								duration={{ startTime: "2025-06-18 07:30:00", endTime: "2025-06-18 08:30:00" }}
								title={"Charity Run"}
							/>

							<SessionGroup 
								duration={{ startTime: "2025-06-17 09:00:00", endTime: "2025-06-17 13:00:00" }}
							>
								<Session 
									location={"Kowledge Station"}
									theme={"1"}
									title={"Focus on Technology & Our People "}
								/>
								<Session 
									location={"Showcase Den"}
									theme={"2"}
									title={"Investing in F&B and Wellness"}
								/>
								<Session 
									location={"Pioneer Camp"}
									theme={"3"}
									title={"Roundtable Discussions: Exploring Diverse Uses for Your Properties"}
								/>
							</SessionGroup>

							<Session 
								duration={{ startTime: "2025-06-18 13:00:00", endTime: "2025-06-18 14:00:00" }}
								location={"The Westin Cape Town"}
								title={"Lunch"}
							/>

							<SessionGroup duration={{ startTime: "2025-06-18 14:00:00", endTime: "2025-06-18 16:00:00" }}>
								<Session 
									title={"Student Session"}
								/>

								<Session 
									title={"Tour of Cape Grace - Sustainability Visit "}
								/>

								<Session 
									title={"Walking tour - Sustainbility"}
								/>

								<Session 
									title={"Cultural Tour "}
								/>
							</SessionGroup>


						</div>
					</main>
				</StickySidebar>

            </section>

		<Footer />
		<LenisScroller />
        </>
    )
}
Agenda.theme = 'africa'




const Duration = ({ startTime, endTime }) => {

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
		<p className={CSS.sessionTagGrid}>
			{ format( new Date(startTime), "HH:mm" ) } - { endTime && format( new Date(endTime), "HH:mm" ) }
			{
				endTime &&
				<span>&ensp;<StopwatchIcon fill={'var(--primary)'}/> { convertSeconds(parseInt(new Date(endTime).getTime() - new Date(startTime).getTime())/1000) }</span>
			}
		</p>
	)
}

const Location = ({ location }) => {
	return (
		<p className={CSS.sessionTagGrid}><LocationIcon fill={'var(--primary)'} /> {location}</p>
	)
}

const SessionGroup = ({ location, duration, children }) => {

	if ( !children ) return

	return (
		<div className={CSS.sessionGroupContainer} style={{ borderColor: location?.color, backgroundColor: location?.color }}>
			{
				location || duration ?
					<div className={CSS.sessionHeader}>
						{
							duration &&
							<Duration startTime={duration.startTime} endTime={duration.endTime} />
						}
						{
							location &&
							<div className={`${CSS.sessionTagGrid} fs-sm`}>
								<LocationIcon fill={'var(--primary)'} /> { location }
							</div>
						}
					</div>
				: null
			} 

			<div className={CSS.sessionsGroupSessions}>
				{ children }
			</div>
		</div> 
	)
}

const Session = ({ duration, location, title, theme }) => {
	
	const breakTitle = ( trigger, titleString, splitPoint ) => {
		if ( !titleString.includes(trigger) ) return titleString
		let lines = titleString.split(splitPoint)
		return `${lines[0]}:<br/>${lines[1]}${lines.length > 2 ? `: ${lines[2]}` : ''}`		
	}

	const setSessionTheme = ( themeID ) => {

		switch (themeID) {
			case "1":
				//Knowledge HUB
				return "agenda-01"
				break
		
			case "2":
				//The Forum
				return "agenda-02"
				break
		
			case "3":
				//Pioneer HUB
				return "agenda-03"
				break
		
			case "4":
				//Future HUB
				return "agenda-04"
				break
		
			case "5":
				//Showcase HUB
				return "agenda-05"
				break
		
			default:
				return "agenda-default"
				break
		}
	}

	return (
		<div className={CSS.sessionsWrapper}>
			{
				duration || location ?
					<div className={CSS.sessionHeader}>
						{ duration && <Duration startTime={duration.startTime} endTime={duration.endTime} /> }
						{ location && <Location location={location} /> }
					</div>
				: null
			}

			<div className={`${setSessionTheme(theme)} ${CSS.sessionContent}`}>
				<p className="fs-6 fw-600 lh-1 c-secondary">
					{ parse(breakTitle(":", title, ": ")) }
				</p>				
			</div>
		</div>
	)
}





export async function getStaticProps() {


	// cms (theme etc)
    const cmsAgendaData = await craftApolloClient().query({
        query: gql`
			query SEO {
				entry(site: "${process.env.SITE_HANDLE_AFRICA}", id: "	16596") {
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


    return { 
        props: { 
			theme: cmsAgendaData.data.entry.agendaTheme
        } 
    }
}

