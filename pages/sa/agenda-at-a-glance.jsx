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
									<p className={CSS.dayDivider}>20 April - Monday</p>
								</Pop>
							</aside>

							<main>
								<div className={CSS.sessions}>

									{/* SESSIONS */}

									<SessionGroup>
										<Session
											startTime={"2026-04-20 12:30:00"}
											endTime={"2026-04-20 14:00:00"}
											title={"Welcome"}
										/>
									</SessionGroup>
									
									<SessionGroup location={{ title: "Summit Stage" }}>
										<Timeslot>
											<Session
												startTime={"2026-04-20 14:00:00"}
												endTime={"2026-04-20 14:20:00"}
												title={"Welcome to FHS Saudi Arabia 2025"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-20 14:20:00"}
												endTime={"2026-04-20 14:45:00"}
												title={"Scaling Peaks, Building Resilience: Lessons for Hospitality Leaders"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-20 14:45:00"}
												endTime={"2026-04-20 15:15:00"}
												title={"Betting Big: The Rise, Risk, and Reward of Giga Projects under Vision 2030"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-20 14:45:00"}
												endTime={"2026-04-20 15:15:00"}
												title={"The Age of Global Transformation: Connecting Saudi Arabia to the World"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-20 15:45:00"}
												endTime={"2026-04-20 16:00:00"}
												title={"Announcements & Signings"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-20 16:00:00"}
												endTime={"2026-04-20 16:30:00"}
												title={"Networking Coffee"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-20 16:30:00"}
												endTime={"2026-04-20 16:45:00"}
												title={"FHS Intelligence Talk: Travel & Tourism Economic Impact & Global Trends"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-20 16:45:00"}
												endTime={"2026-04-20 17:30:00"}
												title={"Building Beyond Boundaries: Creating World-Class Tourism Destinations"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-20 17:30:00"}
												endTime={"2026-04-20 18:00:00"}
												title={"Programming the Kingdom: Mega Events as a Pillar of Saudi Arabia’s Vision 2030"}
											/>
										</Timeslot>
									</SessionGroup> 

									<SessionGroup location={{ title: "Future Stage" }}>
										<Timeslot>
											<Session
												startTime={"2026-04-20 11:00:00"}
												endTime={"2026-04-20 11:30:00"}
												title={"FHS Saudi Arabia 101: A First-Timer’s Guide to Making the Most of the Summit"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-20 11:30:00"}
												endTime={"2026-04-20 12:30:00"}
												title={"The Hospitality Shuffle: Speed Networking"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-20 12:30:00"}
												endTime={"2026-04-20 14:00:00"}
												title={"Luncheon"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-20 15:00:00"}
												endTime={"2026-04-20 15:30:00"}
												title={"Empowering Connections: Networking Session"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-20 15:30:00"}
												endTime={"2026-04-20 17:00:00"}
												title={"Start-Up Den"}
											/>
										</Timeslot>
									</SessionGroup>

									<SessionGroup>
										<Session
											startTime={"2026-04-20 15:00:00"}
											endTime={"2026-04-20 17:00:00"}
											title={"Exclusive, small-group discussions for deeper dives into pressing industry topics"}
											trackID={"1"}
										/>
									</SessionGroup>

									<SessionGroup>
										<Session
											startTime={"2026-04-20 18:00:00"}
											title={"Welcome Reception"}
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
									<p className={CSS.dayDivider}>21 April - Tuesday</p>
								</Pop>
							</aside>

							<main>
								<div className={CSS.sessions}>

									{/* SESSIONS */}

									<SessionGroup>
										<Session
											startTime={"2026-04-21 09:30:00"}
											endTime={"2026-04-21 10:30:00"}
											title={"Executive Investor Breakfast & Project Showcase – A Closed-Door Gathering"}
										/>
									</SessionGroup>
									
									<SessionGroup location={{ title: "Summit Stage" }}>
										<Timeslot>
											<Session
												startTime={"2026-04-21 10:35:00"}
												endTime={"2026-04-21 10:55:00"}
												title={"Setting the Scene for Hotel Performance and Development in Saudi Arabia"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-21 10:30:00"}
												endTime={"2026-04-21 11:10:00"}
												title={"New Rules of Ownership: Catalysing Investment Through Real Estate Reform in KSA"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-21 11:10:00"}
												endTime={"2026-04-21 11:50:00"}
												title={"Financing Hospitality Ventures: Maximizing Capital for Growth and Success"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-21 11:50:00"}
												endTime={"2026-04-21 12:15:00"}
												title={"Building Legacy: Family Business in Saudi Arabia"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-21 12:15:00"}
												endTime={"2026-04-21 12:45:00"}
												title={"Capital Meets Opportunity: Saudi Arabia’s Hospitality Sector Through the Investor Lens"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-21 12:45:00"}
												endTime={"2026-04-21 13:00:00"}
												title={"Announcements & Signings"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-21 13:00:00"}
												endTime={"2026-04-21 14:00:00"}
												title={"Luncheon"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-21 14:00:00"}
												endTime={"2026-04-21 14:15:00"}
												title={"Redefining the Guest Journey: Hospitality Through the Eyes of Saudi Influencers"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-21 14:15:00"}
												endTime={"2026-04-21 14:45:00"}
												title={"Longevity is the New Luxury: Redefining Hospitality Through Health, Heritage, and Experience"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-21 14:45:00"}
												endTime={"2026-04-21 15:15:00"}
												title={"Embracing Nature: Gateway to Next-Gen Hospitality Investments"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-21 15:15:00"}
												endTime={"2026-04-21 15:30:00"}
												title={"Announcements & Signings"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-21 15:30:00"}
												endTime={"2026-04-21 16:00:00"}
												title={"Lifestyle Hospitality in Saudi Arabia: Designing Spaces for a New Generation"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-21 16:00:00"}
												endTime={"2026-04-21 16:30:00"}
												title={"Synergy in Hospitality: The Role of Private Clubs in Enhancing Hotel and Mixed-Use Developments"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-21 16:30:00"}
												endTime={"2026-04-21 17:00:00"}
												title={"From Recognition to Experience: Iconic Brands Entering Hospitality"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-21 17:00:00"}
												endTime={"2026-04-21 17:30:00"}
												title={"Charting a Sustainable Course: Developing Saudi Arabia's Cruise Industry While Preventing Overtourism"}
											/>
										</Timeslot>
									</SessionGroup> 

									<SessionGroup location={{ title: "Future Stage" }}>
										<Timeslot>
											<Session
												startTime={"2026-04-21 11:30:00"}
												endTime={"2026-04-21 13:00:00"}
												title={"Battle of the Brands: Conscious Capital Meets Commercial Brands"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-21 14:00:00"}
												endTime={"2026-04-21 15:00:00"}
												title={"From Pipeline to Portfolio: Real-Time Investment Opportunities in Saudi Hospitality"}
											/>
										</Timeslot>
										
										<Timeslot>
											<Session
												startTime={"2026-04-21 15:00:00"}
												endTime={"2026-04-21 17:30:00"}
												title={"NextGen: Investing in Saudi Arabia’s Hospitality Education"}
											/>
											<Feature><p>The Human Advantage – Leading Hospitality Through Change (Keynote)</p></Feature>
											<Feature><p>How Can We Rebrand Hospitality Careers to Attract Saudi Youth?</p></Feature>
											<Feature><p>Rethinking Hospitality Schools: Education, Experience & Environment</p></Feature>
											<Feature><p>Building Your Saudi Team: Talent Solutions for New Market Entrants (Workshop)</p></Feature>
										</Timeslot>

									</SessionGroup>

									<SessionGroup>
										<Session
											startTime={"2026-04-21 12:00:00"}
											endTime={"2026-04-21 13:00:00"}
											title={"The Future of Hotel Asset Management - HAMA Asset Management Workshop - Invitation Only"}
											trackID={"1"}
										/>
									</SessionGroup>

									<SessionGroup>
										<Session
											startTime={"2026-04-21 14:00:00"}
											endTime={"2026-04-21 18:00:00"}
											title={"Exclusive, small-group discussions for deeper dives into pressing industry topics"}
											trackID={"1"}
										/>
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
									<p className={CSS.dayDivider}>22 April - Wednesday</p>
								</Pop>
							</aside>

							<main>
								<div className={CSS.sessions}>

									{/* SESSIONS */}
									
									<SessionGroup location={{ title: "Summit Stage" }}>
										<Timeslot>
											<Session
												startTime={"2026-04-22 10:00:00"}
												endTime={"2026-04-22 13:00:00"}
												title={"Branded Residences Forum"}
											/>
											<Feature><p>Keynote: Industry Insights from a Saudi Perspective</p></Feature>
											<Feature><p>Stakeholder perspectives – How do branded residences create value for investors, homeowners and brands</p></Feature>
											<Feature><p>The Perfect Fit: Selecting the Right Brand for Residential Success</p></Feature>
											<Feature><p>The Real Deal: Unpacking the Financial Realities</p></Feature>
										</Timeslot>
										
									</SessionGroup> 

									<SessionGroup location={{ title: "Future Stage" }}>
										<Timeslot>
											<Session
												startTime={"2026-04-22 10:30:00"}
												title={"Welcome Back"}
											/>
										</Timeslot>

										<Timeslot>
											<Session
												startTime={"2026-04-22 10:30:00"}
												endTime={"2026-04-22 10:45:00"}
												title={"Keynote: Leading with Empathy in the Age of AI"}
											/>
										</Timeslot>

										<Timeslot>
											<Session
												startTime={"2026-04-22 10:45:00"}
												endTime={"2026-04-22 11:45:00"}
												title={"AI in Hospitality"}
											/>
										</Timeslot>

										<Timeslot>
											<Session
												startTime={"2026-04-22 11:45:00"}
												endTime={"2026-04-22 12:00:00"}
												title={"Awards, Future Leader, Start-Up Den"}
											/>
										</Timeslot>

										<Timeslot>
											<Session
												startTime={"2026-04-22 12:00:00"}
												endTime={"2026-04-22 12:15:00"}
												title={"Restaurant Invest Intelligence: How is F&B Performing within Hotels in Saudi?"}
											/>
										</Timeslot>

										<Timeslot>
											<Session
												startTime={"2026-04-22 12:15:00"}
												endTime={"2026-04-22 12:40:00"}
												title={"The rise of F&B experiences in Saudi Arabia"}
											/>
										</Timeslot>

										<Timeslot>
											<Session
												startTime={"2026-04-22 12:40:00"}
												endTime={"2026-04-22 12:55:00"}
												title={"The Future of Fun: Investing in Theme Parks"}
											/>
										</Timeslot>

										<Timeslot>
											<Session
												startTime={"2026-04-22 12:55:00"}
												endTime={"2026-04-22 13:00:00"}
												title={"Closing Plenary: The Road Ahead for Global Hospitality"}
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