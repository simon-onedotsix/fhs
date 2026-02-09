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
		title: "Workshop",
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



export default function Agenda () {

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
                    <p className="fs-1 fw-500">Schedule at a Glance</p>
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
									<p className={CSS.dayDivider}>Monday, 20 April 2026</p>
								</Pop>
							</aside>

							<main>
								<div className={CSS.sessions}>

									{/* SESSIONS */}

									<SessionGroup>
										<Session
											startTime={"2026-04-20 16:30:00"}
											endTime={""}
											title={"Networking Event"}
										/>
										<Session
											startTime={"2026-04-20 18:30:00"}
											endTime={""}
											title={"Reception"}
										/>
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
									<p className={CSS.dayDivider}>Tuesday, 21 April 2026</p>
								</Pop>
							</aside>

							<main>
								<div className={CSS.sessions}>

									{/* SESSIONS */}
									
									<SessionGroup location={{ title: "Summit Stage" }}>
										<Timeslot>
											<Session
												startTime={"2026-04-21 10:00:00"}
												endTime={"2026-04-21 18:00:00"}
												title={"Programme Official Opening"}
											/>
											<Feature><p className="fs-6">Focus on Investment and Real State</p></Feature>
										</Timeslot>
									</SessionGroup> 

									<SessionGroup location={{ title: "Future Stage" }}>
										<Timeslot>
											<Session
												startTime={"2026-04-21 15:00:00"}
												endTime={"2026-04-21 17:00:00"}
												title={"FHS Pitch Point "}
											/>
										</Timeslot>
									</SessionGroup>

									<SessionGroup location={{ title: "Workshop (Yanbu)" }}>
										<Timeslot>
											<Session
												startTime={"2026-04-21 11:00:00"}
												endTime={"2026-04-21 18:00:00"}
												title={"Exclusive, small-group discussions "}
											/>
											<Feature><p className="fs-6">Focus on Saudi Female Investors (Closed Door Discussion)</p></Feature>
											<Feature><p className="fs-6">Focus on Alternative Funding and Fund Structures</p></Feature>
											<Feature><p className="fs-6">Focus  on Partnerships – Next Gen</p></Feature>
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
									<p className={CSS.dayDivider}>Wednesday, 22 April 2026</p>
								</Pop>
							</aside>

							<main>
								<div className={CSS.sessions}>

									{/* SESSIONS */}
									
									<SessionGroup>
										<Session
											startTime={"2026-04-22 09:00:00"}
											endTime={"2026-04-22 10:00:00"}
											title={"Executive Investor Breakfast & Project Showcase – A Closed-Door Gathering"}
										/>
									</SessionGroup>

									<SessionGroup location={{ title: "Summit Stage" }}>
										<Timeslot>
											<Session
												startTime={"2026-04-22 10:00:00"}
												endTime={"2026-04-22 13:00:00"}
												title={"Focus on Investment & Development"}
											/>
	
											<Session
												startTime={"2026-04-22 12:30:00"}
												endTime={"2026-04-22 13:00:00"}
												title={"FHS Awards"}
											/>
	
											<Session
												startTime={"2026-04-22 14:00:00"}
												endTime={"2026-04-22 17:00:00"}
												title={"Focus on F&B, Wellness, and New Cities destinations"}
											/>
										</Timeslot>
										
									</SessionGroup> 

									<SessionGroup location={{ title: "Future Stage" }}>
										<Timeslot>
											<Session
												startTime={"2026-04-22 11:00:00"}
												endTime={"2026-04-22 13:00:00"}
												title={"Branded Residences Forum"}
											/>
										</Timeslot>
									</SessionGroup>

									<SessionGroup location={{ title: "Workshop (Yanbu)" }}>
										<Timeslot>
											<Session
												startTime={"2026-04-22 10:30:00"}
												endTime={"2026-04-22 17:20:00"}
												title={"Exclusive, small-group discussions"}
											/>
											<Feature><p className="fs-6">Focus on Investment – Regulation </p></Feature>
											<Feature><p className="fs-6">Focus on Branded Residences Forum</p></Feature>
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
						<p className={`${CSS.sessionTitle} | fs-5 fw-500 lh-1-1 c-white balance`}>
							{ title }
						</p>
					</div>
				</div>
			</div>
		</Pop>
	)
}

export const SessionLite = ({ startTime, endTime, title, description }) => {

	return (
		<Pop>
			<div className={CSS.sessionsWrapper}>
				<div className={CSS.session}>

					{
						startTime &&
						<div className={CSS.sessionHeader}>
							<Duration startTime={startTime} endTime={endTime} />
						</div>
					}
					
					<div className={CSS.sessionContent}>
						<p className={`${CSS.sessionTitle} | fs-5 fw-500 lh-1-1 c-white`}>
							{ title }
						</p>
						<p>{ description }</p>
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