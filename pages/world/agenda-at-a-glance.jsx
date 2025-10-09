import Head from "next/head"
import Image from "next/image"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import _ from 'lodash'
import { format } from 'date-fns'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { Pop, Fade } from '../../fuselage/animation/animation'

import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from "../../fuselage/theme/2024/world/common/footer/footer"

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
		title: "Session",
		color: "#7DB4F2"
	},
	{
		id: "4",
		title: "Luxury, F&B, and Experiential Hospitality",
		color: "#E381CB"
	},
	{
		id: "5",
		title: "Networking",
		color: "#EF3742"
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
		color: "#6B6DEF"
	},
]



export default function Agenda () {

	return (
		<ReactLenis root>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
			</Head>

			<Header compact shim />

			<section className={CSS.header}>
				<Image src={'/assets/img/world/pages/home/fhs-world-2024-05.jpg'} layout="responsive" width={1000} height={588} />
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
									<p className={CSS.dayDivider}>27 October - Monday</p>
								</Pop>
							</aside>

							<main>
								<div className={CSS.sessions}>

									{/* SESSIONS */}

									<SessionGroup>
										<Session
											startTime={"2025-10-27 08:00:00"}
											endTime={"2025-10-27 13:00:00"}
											title={"UAE Africa Tourism Investment Summit"}
										><p>(Invite-Only)</p></Session>
									</SessionGroup>
									
									<SessionGroup>
										<Session
											startTime={"2025-10-27 08:00:00"}
											endTime={""}
											title={"Registration & Welcome Coffee for FHS World delegates"}
											trackID={"5"}
										/>
									</SessionGroup>
									
									<SessionGroup>
										<Session
											startTime={"2025-10-27 11:00:00"}
											endTime={"2025-10-27 11:30:00"}
											title={"From First Timer to Power Player: Making the Most of FHS World"}
											trackID={"3"}
										/>
									</SessionGroup>
									
									<SessionGroup>
										<Session
											startTime={"2025-10-27 11:30:00"}
											endTime={"2025-10-27 12:30:00"}
											title={"Speed Networking"}
											trackID={"5"}
										/>
									</SessionGroup>
									
									<SessionGroup>
										<Session
											startTime={"2025-10-27 12:00:00"}
											endTime={"2025-10-27 14:00:00"}
											title={"Networking Lunch"}
											trackID={"5"}
										/>
									</SessionGroup>
									
									<SessionGroup>
										<Session
											startTime={"2025-10-27 13:30:00"}
											endTime={"2025-10-27 13:40:00"}
											title={"Welcome to FHS World 2025"}
											trackID={"5"}
										/>
									</SessionGroup>
									
									<SessionGroup>
										<Session
											startTime={"2025-10-27 13:40:00"}
											endTime={"2025-10-27 14:00:00"}
											title={"KeyNote: The UAE's Blueprint for Tourism, Innovation, and Economic Resilience"}
											trackID={"3"}
										/>
									</SessionGroup>
									
									<SessionGroup>
										<Session
											startTime={"2025-10-27 16:30:00"}
											endTime={"2025-10-27 17:00:00"}
											title={"Curated Connections - AI's Role in Hospitality Investment"}
											trackID={"3"}
										/>
									</SessionGroup>
									
									<SessionGroup>
										<Session
											startTime={"2025-10-27 17:00:00"}
											endTime={"2025-10-27 18:00:00"}
											title={"Happy Hour in the Arena - Sponsored by Danube Hospitality Solutions"}
											trackID={"3"}
										/>
									</SessionGroup>
									
									<SessionGroup>
										<Session
											startTime={"2025-10-27 18:30:00"}
											endTime={"2025-10-27 20:30:00"}
											title={"FHS Welcome Reception"}
											trackID={"5"}
										><p>Shimmers, Jumeirah Mina Al &apos;Salam – Hosted by Jumeirah</p></Session>
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
									<p className={CSS.dayDivider}>28 October - Tuesday</p>
								</Pop>
							</aside>

							<main>
								<div className={CSS.sessions}>

									{/* SESSIONS */}

									<SessionGroup>
										<Session
											startTime={"2025-10-28 08:00:00"}
											endTime={""}
											title={"Registration & Welcome Coffee for FHS World delegates"}
											trackID={"5"}
										/>
									</SessionGroup>

									<SessionGroup>
										<Session
											startTime={"2025-10-28 08:00:00"}
											endTime={"2025-10-28 09:45:00"}
											title={"Executive Investor Breakfast & Project Showcase – A Closed-Door Gathering"}
										/>
									</SessionGroup>

									<SessionGroup>
										<Session
											startTime={"2025-10-28 09:30:00"}
											endTime={""}
											title={"Welcome Back"}
										/>
									</SessionGroup>

									<SessionGroup>
										<Session
											startTime={"2025-10-28 12:40:00"}
											endTime={"2025-10-28 13:00:00"}
											title={"FHS Awards"}
										/>
									</SessionGroup>

									<SessionGroup>
										<Session
											startTime={"2025-10-28 13:00:00"}
											endTime={"2025-10-28 14:00:00"}
											title={"Networking Lunch"}
											trackID={"5"}
										/>
									</SessionGroup>

									<SessionGroup>
										<Session
											startTime={"2025-10-28 15:30:00"}
											endTime={"2025-10-28 16:00:00"}
											title={" Curated Connections - Future of Branded Residences"}
											trackID={"3"}
										/>
									</SessionGroup>

									<SessionGroup>
										<Session
											startTime={"2025-10-28 18:30:00"}
											endTime={"2025-10-28 20:30:00"}
											title={"FHS Evening Reception"}
											trackID={"5"}
										><p>Taj Exotica, The Palm – Hosted by IHCL</p></Session>
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
									<p className={CSS.dayDivider}>29 October - Wednesday</p>
								</Pop>
							</aside>

							<main>
								<div className={CSS.sessions}>

									{/* SESSIONS */}
									
									<SessionGroup>
										<Session
											startTime={"2025-10-29 08:00:00"}
											endTime={""}
											title={"Registration & Welcome Coffee for FHS World delegates"}
											trackID={"5"}
										/>
									</SessionGroup>
									
									<SessionGroup>
										<Session
											startTime={"2025-10-29 09:30:00"}
											endTime={""}
											title={"Sessions begin on Summit Stage"}
											trackID={"3"}
										/>
									</SessionGroup>
									
									<SessionGroup>
										<Session
											startTime={"2025-10-29 12:00:00"}
											endTime={"2025-10-29 12:30:00"}
											title={"Curated Connections - Wellness & Wellbeing Trends in Hospitality"}
											trackID={"3"}
										/>
									</SessionGroup>

									<SessionGroup>
										<Session
											startTime={"2025-10-29 13:00:00"}
											endTime={"2025-10-29 14:00:00"}
											title={"Networking Lunch"}
											trackID={"5"}
										/>
									</SessionGroup>

									<SessionGroup>
										<Session
											startTime={"2025-10-29 14:00:00"}
											endTime={"2025-10-29 14:05:00"}
											title={"Welcome to the Branded Residences Forum at FHS World 2025"}
											trackID={"8"}
										/>
									</SessionGroup>

									<SessionGroup>
										<Session
											startTime={"2025-10-29 17:45:00"}
											endTime={"2025-10-29 18:00:00"}
											title={"Closing Remarks"}
										/>
									</SessionGroup>

									<SessionGroup>
										<Session
											startTime={"2025-10-29 18:30:00"}
											endTime={""}
											title={"Branded Residences Forum Cocktail Reception "}
											trackID={"5"}
										><p>Mama Shelter (Invitation Only For BRF Delegates & Premium Pass Holders)</p></Session>
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
Agenda.theme = 'world-2024'





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

export const Session = ({ startTime, endTime, title, trackID, children }) => {

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
						{
							children &&
							<div className="formatted">{ children }</div>
						}
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