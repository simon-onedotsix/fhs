import Head from "next/head"

import { ReactLenis } from '@studio-freight/react-lenis'

import _ from 'lodash'
import { format } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import parse from 'html-react-parser'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { Pop, Fade } from '../../fuselage/animation/animation'

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'

import { TagIcon, CompassIcon, StopwatchIcon, LocationIcon } from "../../fuselage/components/icons/icons"

import 'simplebar-react/dist/simplebar.min.css'



import CSS from '../../fuselage/theme/2025/sa/css/agenda-compact.module.css'



// end custom topic selection and ordering



export default function Agenda () {

	// SESSION UTILITIES

	

    return (
        <ReactLenis root>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
			</Head>

            <Header compact shim />

            <section className="block bg-primary">
                
				<span id="agenda"/>

				{/* INTRO */}
                <div className="section mb-sm">
                    <p className="fs-1 fw-500">2025 Agenda at a Glance</p>
					<div className="formatted mt-xs">
						<p>Programme is subject to change.</p>
					</div>
                </div>


				

				{/* AGENDA */}
				<main className={CSS.agenda}>	

					<section className={CSS.day}>
						<p className="fs-2">Day 1</p>
						<Pop>
							<p className={CSS.dayDivider}>11 May - Sunday</p>
						</Pop>
						
						<div className={CSS.sessions}>

							{/* SESSIONS */}

							<SessionGroup>
								<Session 
									startTime={"2025-05-11 15:00:00"} 
									endTime={"2025-05-11 18:30:00"}
									title={"NextGen: Investing in Saudi Arabia's Hospitality Education"}
								/>
								<Session 
									startTime={"2025-05-11 15:00:00"} 
									endTime={"2025-05-11 15:10:00"}
									title={"Welcome Remarks"}
								/>
							</SessionGroup> 
							
							<SessionGroup location={{ title: "Summit Stage", color: "red" }}>
								<p className={CSS.heading}>Main Stage</p>
								<Session 
									startTime={"2025-05-11 15:10:00"} 
									endTime={"2025-05-11 15:20:00"}
									title={"Keynote - Hospitality Talent in Saudi Arabia: A Data-Driven Overview"}
								/>
								<Session 
									startTime={"2025-05-11 15:20:00"} 
									endTime={"2025-05-11 15:40:00"}
									title={"Education Meets Industry - Key Skills for the Future of Saudi Workforce"}
								/>
								<Session 
									startTime={"2025-05-11 15:40:00"} 
									endTime={"2025-05-11 16:00:00"}
									title={"Hospitality Workforce of the Future: Anticipating Trends and Building Resilience"}
								/>
							</SessionGroup> 

							<SessionGroup location={{ title: "Future Stage", color: "#239873" }}>
								<p className={CSS.heading}>Workshops</p>
								<p className={CSS.heading}>THEME: Hospitality Education and Real Estate Investment</p>
								<Session 
									startTime={"2025-05-11 16:00:00"} 
									endTime={"2025-05-11 16:45:00"}
									title={"How Can We Rebrand Hospitality Careers to Attract Saudi Youth?"}
								/>
								<Session 
									startTime={"2025-05-11 17:00:00"} 
									endTime={"2025-05-11 17:45:00"}
									title={"How Can Public-Private Partnerships in Hospitality Training Help Build Saudi Arabia's Workforce of the Future?"}
								/>
							</SessionGroup> 

							<SessionGroup location={{ title: "Meeting Room 1", color: "#875645" }}>
								<p className={CSS.heading}>Workshops</p>
								<p className={CSS.heading}>THEME: Hospitality Education and Real Estate Investment</p>
								<Session 
									startTime={"2025-05-12 16:00:00"} 
									endTime={"2025-05-12 16:45:00"}
									title={"Where Are the Investment Opportunities in Hospitality Education Real Estate?"}
								/>
								<Session 
									startTime={"2025-05-12 17:00:00"} 
									endTime={"2025-05-12 17:45:00"}
									title={"How Can Student Housing Be Designed to Meet the Needs of Future Hospitality Professionals?"}
								/>
							</SessionGroup>

							<SessionGroup location={{ title: "Meeting Room 2", color: "#736452" }}>
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
					</section>

					<section className={CSS.day}>
						<p className="fs-2">Day 2</p>
						<Pop>
							<p className={CSS.dayDivider}>12 May - Monday</p>
						</Pop>
						
						<div className={CSS.sessions}>

							{/* SESSIONS */}

							<SessionGroup location={{ title: "Summit Stage", color: "red" }}>
								<Session 
									startTime={"2025-05-12 10:00:00"} 
									endTime={"2025-05-12 10:15:00"}
									title={"Welcome to FHS Saudi Arabia 2025"}
								/>
								<Session 
									startTime={"2025-05-12 10:15:00"} 
									endTime={"2025-05-12 10:30:00"}
									title={"The Visionary Outlook: Empowering Saudi Tourism Destinations through the Hospitality Sector"}
								/>
								<Session 
									startTime={"2025-05-12 10:30:00"} 
									endTime={"2025-05-12 11:15:00"}
									title={"Safeguarding Hospitality Investments Amid Market Shifts: Is Saudi Arabia Still the Land of Opportunity?"}
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
								/>
								<Session 
									startTime={"2025-05-12 12:30:00"} 
									endTime={"2025-05-12 13:00:00"}
									title={"TenX Leadership Talk: Insights on the Economic Impact of Travel & Tourism and Global Trends"}
								/>
							</SessionGroup>

							<SessionGroup location={{ title: "Future Stage", color: "#239873" }}>
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
								/>
							</SessionGroup>

							<SessionGroup location={{ title: "Centre Stage", color: "#669428" }}>
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

							<SessionGroup location={{ title: "Summit Stage", color: "red" }}>
								<Session 
									startTime={"2025-05-12 14:00:00"} 
									endTime={"2025-05-12 14:20:00"}
									title={"Setting the Scene for Hotel Performance and Development in Saudi Arabia"}
								/>
								<Session 
									startTime={"2025-05-12 14:20:00"} 
									endTime={"2025-05-12 14:50:00"}
									title={"Financing Hospitality Ventures: Maximizing Capital for Growth and Success"}
								/>
								<Session 
									startTime={"2025-05-12 14:50:00"} 
									endTime={"2025-05-12 15:15:00"}
									title={"Is the pursuit of luxury compatible with sustainability in Saudi Arabian Hospitality?"}
								/>
								<Session 
									startTime={"2025-05-12 15:15:00"} 
									endTime={"2025-05-12 15:30:00"}
									title={"Hospitality: Differentiation Through Service Excellence"}
								/>
								<Session 
									startTime={"2025-05-12 15:30:00"} 
									endTime={"2025-05-12 16:00:00"}
									title={"A Bleak and Empty Hotel Shop …. or a Chance to activate Retail Brand Experiences blended with cool, branded Cafes and Bars?"}
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
								/>
								<Session 
									startTime={"2025-05-12 16:45:00"} 
									endTime={"2025-05-12 17:20:00"}
									title={"Balancing Growth: Unlocking the Potential of Mid-Market Hospitality in Saudi Arabia's Luxury Landscape"}
								/>
								<Session 
									startTime={"2025-05-12 17:20:00"} 
									endTime={"2025-05-12 17:45:00"}
									title={"Could Hotel F&B set a World first by dominating the Mid Sector Dining Market in the kingdom?"}
								/>
							</SessionGroup>

							<SessionGroup location={{ title: "Future Stage", color: "#239873" }}>
								<p className={CSS.heading}>Workshops</p>
								<Session 
									startTime={"2025-05-12 14:00:00"} 
									endTime={"2025-05-12 15:15:00"}
									title={"Insights on Branded Residences"}
								/>
								<Session 
									startTime={"2025-05-12 15:15:00"} 
									endTime={"2025-05-12 16:15:00"}
									title={"Key Trends in Hotel Management Contracts"}
								/>
								<Session 
									startTime={"2025-05-12 16:15:00"} 
									endTime={"2025-05-12 17:00:00"}
									title={"Your Path to Red Sea Global: Exploring Projects and Partnership Opportunities"}
								/>
							</SessionGroup>

							<SessionGroup location={{ title: "Centre Stage", color: "#669428" }}>
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
					</section>

					<section className={CSS.day}>
						<p className="fs-2">Day 3</p>
						<Pop>
							<p className={CSS.dayDivider}>13 May - Tuesday</p>
						</Pop>
						
						<div className={CSS.sessions}>

							{/* SESSIONS */}

							<SessionGroup>
								<Session 
									startTime={"2025-05-12 09:00:00"} 
									endTime={"2025-05-12 10:00:00"}
									title={"Investor Breakfast - By invitation only"}
								/>
							</SessionGroup> 
							
							<SessionGroup location={{ title: "Summit Stage", color: "red" }}>
								<Session 
									startTime={"2025-05-12 10:00:00"} 
									endTime={"2025-05-12 10:15:00"}
									title={"Saudi Arabia Tourism Outlook: Shaping the Future from 2025 to 2040"}
								/>
								<Session 
									startTime={"2025-05-12 10:15:00"} 
									endTime={"2025-05-12 10:40:00"}
									title={"How Is Saudi Arabia Preparing for a Tourism Transformation to Connect Travelers Locally and Globally?"}
								/>
								<Session 
									startTime={"2025-05-12 10:40:00"} 
									endTime={"2025-05-12 11:00:00"}
									title={"Beyond Pilgrimage: Future Trends and Developments in Mecca and Medina"}
								/>
								<Session 
									startTime={"2025-05-12 11:00:00"} 
									endTime={"2025-05-12 11:15:00"}
									title={"How Can Technology Overcome the Logistical Challenges of Managing Pilgrim Crowds, and How Can These Insights Be Applied to Broader Hospitality Sectors?"}
								/>
								<Session 
									startTime={"2025-05-12 11:15:00"} 
									endTime={"2025-05-12 11:45:00"}
									title={"Transforming Sacred Journeys: How Can Religious Tourism Serve as a Springboard for Expanding Tourism in the Kingdom?"}
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
								/>
								<Session 
									startTime={"2025-05-12 12:15:00"} 
									endTime={"2025-05-12 12:45:00"}
									title={"Planning with Purpose: Integrating Tourism Strategy and Conservation in Destination Development"}
								/>
								<Session 
									startTime={"2025-05-12 12:45:00"} 
									endTime={"2025-05-12 13:15:00"}
									title={"All-Inclusive Reimagined: How Gen Z and Luxury are Redefining the Upscale Travel Experience"}
								/>
								<Feature>
									<Session 
										startTime={"2025-05-12 13:50:00"} 
										endTime={"2025-05-12 14:30:00"}
										title={"FHS Awards"}
									/>
								</Feature>
							</SessionGroup> 

							<SessionGroup location={{ title: "Future Stage", color: "#239873" }}>
								<p className={CSS.heading}>Workshops</p>
								<Session 
									startTime={"2025-05-12 10:00:00"} 
									endTime={"2025-05-12 10:30:00"}
									title={"Government Insights on Investment Incentives in Saudi Arabia"}
								/>
								<Session 
									startTime={"2025-05-12 10:30:00"} 
									endTime={"2025-05-12 11:15:00"}
									title={"ESG in Hospitality: Balancing Sustainability with Profit - Cost-Effective Solutions for a Competitive Edge"}
								/>
								<Session 
									startTime={"2025-05-12 11:15:00"} 
									endTime={"2025-05-12 12:30:00"}
									title={"Building the Future: A Workshop on Modular Architecture and Technology-Driven Regulations"}
								/>
								<Session 
									startTime={"2025-05-12 12:00:00"} 
									endTime={"2025-05-12 13:00:00"}
									title={"Key Feeder Markets for Saudi Arabia: Who are our new customers and what are they looking for?"}
								/>
							</SessionGroup>

							<SessionGroup location={{ title: "Centre Stage", color: "#669428" }}>
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

							<SessionGroup location={{ title: "Summit Stage", color: "red" }}>
								<Session 
									startTime={"2025-05-12 14:30:00"} 
									endTime={"2025-05-12 15:00:00"}
									title={"The Future Workforce: Empowering Talent, Leadership, and Inclusion"}
								/>
								<Session 
									startTime={"2025-05-12 15:00:00"} 
									endTime={"2025-05-12 15:30:00"}
									title={"Unveiling Market Trends: Insights into Branded Residences in the Kingdom"}
								/>
								<Session 
									startTime={"2025-05-12 15:30:00"} 
									endTime={"2025-05-12 16:10:00"}
									title={"Capitalizing on the Alternative Accommodation Boom: The Rising Tide of Investment"}
								/>
								<Session 
									startTime={"2025-05-12 16:10:00"} 
									endTime={"2025-05-12 16:45:00"}
									title={"Pathways to Holistic Wellness: Mapping Saudi Arabia's Role in Global Wellness Tourism"}
								/>
								<Session 
									startTime={"2025-05-12 16:45:00"} 
									endTime={"2025-05-12 17:00:00"}
									title={"Closing Plenary: The Road Ahead for Global Hospitality"}
								/>
							</SessionGroup>

							<SessionGroup location={{ title: "Future Stage", color: "#239873" }}>
								<p className={CSS.heading}>Workshops</p>
								<Session 
									startTime={"2025-05-12 14:15:00"} 
									endTime={"2025-05-12 15:15:00"}
									title={"The Future of Hotel Asset Management - HAMA Asset Management Workshop - Invitation Only"}
								/>
								<Session 
									startTime={"2025-05-12 15:15:00"} 
									endTime={"2025-05-12 16:15:00"}
									title={"Shifting Gears: Navigating the Transition from CapEx to OpEx in the Hospitality Market"}
								/>
							</SessionGroup>
						</div>
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

export const Session = ({ startTime, endTime, title }) => {
	return (
		<Pop>
		<div className={CSS.sessionsWrapper}>
			<div className={CSS.session}>
				<div className={CSS.sessionHeader}>
					<Duration startTime={startTime} endTime={endTime} />
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
	
		const hourString = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''}` : ''
		const minuteString = minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''}` : ''
	
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