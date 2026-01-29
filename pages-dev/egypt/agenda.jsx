import Head from "next/head"
import Image from "next/image"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import _ from 'lodash'
import { format } from 'date-fns'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { Pop, Fade } from '../../fuselage/animation/animation'

import { Header } from '../../fuselage/theme/egypt/common/header/header'
import { Footer } from '../../fuselage/theme/egypt/common/footer/footer'

import { StickySidebar } from '../../fuselage/theme/2024/global/components/sticky-sidebar/sticky-sidebar'
import { TagIcon, CompassIcon, StopwatchIcon, LocationIcon } from "../../fuselage/components/icons/icons"

import { SessionGroup, Session, SessionLite, Timeslot, Feature, Duration, Track, Theme } from "../sa/agenda-at-a-glance"

import CSS from '../../fuselage/theme/2025/sa/css/agenda-compact.module.css'



export default function Page () {

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>
        
            <Header compact />


            <section className={CSS.header}>
                <Image src={'/assets/img/sa/why-attend/why-attend-hero.jpg'} layout="responsive" width={1920} height={910} />
            </section>


            <section className="block bg-default">
                <div className="container">

                    {/* INTRO */}
                    <div className="section mb-sm" style={{ zIndex: 2, position: 'relative' }}>
                        <p className="fs-1 fw-500">Agenda at a Glance</p>
                        
                            <p className="fs-5 mt-xs maxw-40">FHS Egypt is a two-day programme combining leadership content with structured networking and deal-led discussions</p>
                        
                    </div>

                </div>
            </section>

                

            <section className="block bg-default">
				<span id="agenda"/>
				
				{/* AGENDA */}
				<main className={CSS.agendaSidebarLayout}>				
                    <section className={CSS.sidebarDay}>
                        
						<StickySidebar>
							<aside>
								<p className="fs-2">Day 1</p>
								<Pop>
									<p className={CSS.dayDivider}>10 November 2026</p>
								</Pop>
							</aside>

							<main>
								<div className={CSS.sessions}>

									{/* SESSIONS */}

									<SessionGroup>
										<SessionLite
                                            title={"Opening Plenary"}
                                            description={`Unlocking Egypt's Potential: Hospitality, Heritage & Vision 2030`}
										/>
                                    </SessionGroup>
                                    
                                    <SessionGroup>
                                        <SessionLite
                                            title={`Focus on Egypt’s Investment Outlook`}
                                            description={`Mega Projects, Private Capital & Government Incentives`}
										/>
                                    </SessionGroup>
                                    
                                    <SessionGroup>
                                        <SessionLite
                                            title={`Developer Roundtable`}
                                            description={`Building the Future: Real Estate, Resorts & Urban Hospitality`}
										/>
                                    </SessionGroup>
                                    
                                    <SessionGroup>
                                        <SessionLite
                                            title={`Financing the Future`}
                                            description={`Capital Flows, Risk, and Unlocking Deal Structures`}
										/>
                                    </SessionGroup>
                                    
                                    <SessionGroup>
                                        <SessionLite
                                            title={`Country Showcase`}
                                            description={`North Africa Rising: Regional Opportunities in Morocco, Tunisia & Algeria`}
										/>
                                    </SessionGroup>
                                    
                                    <SessionGroup>
                                        <SessionLite
                                            title={`Sustainability in Focus`}
                                            description={`Green Lodging, Red Sea Projects & the Rise of Eco-Tourism`}
										/>
                                    </SessionGroup>
                                    
                                    <SessionGroup>
                                        <SessionLite
                                            title={`Welcome Reception & Networking`}
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
									<p className={CSS.dayDivider}>11 November 2026</p>
								</Pop>
							</aside>

							<main>
								<div className={CSS.sessions}>

									{/* SESSIONS */}
                                    
                                    <SessionGroup>
                                        <SessionLite
                                            title={`Focus on Operational Excellence`}
                                            description={`Talent, Tech & Transforming the Bottom Line`}
										/>
                                    </SessionGroup>
                                    
                                    <SessionGroup>
                                        <SessionLite
                                            title={`Lifestyle & Leisure`}
                                            description={`Wellness, Branded Residences & Experiential Travel`}
										/>
                                    </SessionGroup>
                                    
                                    <SessionGroup>
                                        <SessionLite
                                            title={`Technology & Smart Tourism`}
                                            description={`Digital Tools Transforming the Egyptian Guest Experience`}
										/>
                                    </SessionGroup>
                                    
                                    <SessionGroup>
                                        <SessionLite
                                            title={`Start-Up Den Egypt`}
                                            description={`Spotlight on Hospitality Innovators`}
										/>
                                    </SessionGroup>
                                    
                                    <SessionGroup>
                                        <SessionLite
                                            title={`Restaurant & F&B Investment`}
                                            description={`The Culinary Economy: Restaurants Driving Hotel Revenue`}
										/>
                                    </SessionGroup>
                                    
                                    <SessionGroup>
                                        <SessionLite
                                            title={`Roundtable Discussions`}
                                            description={`Ownership, Franchising, & Regional Market Trends`}
										/>
                                    </SessionGroup>
                                    
                                    <SessionGroup>
                                        <SessionLite
                                            title={`Closing Plenary`}
                                            description={`Egypt on the Global Stage: What’s Next for Travel & Hospitality?`}
										/>
                                    </SessionGroup>
                                    
                                    <SessionGroup>
                                        <SessionLite
                                            title={`Site Visit & Reception`}
                                            description={``}
										/>
                                    </SessionGroup>

								</div>
							</main>
						</StickySidebar>
                    </section>
							
				</main>

				
            </section>


       

            <Footer />
            <LenisScroller />

        </>
    )
}
Page.theme = 'egypt'


