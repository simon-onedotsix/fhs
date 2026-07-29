import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import useCustomMediaQuery from '../../hooks/useCustomMediaQuery'
import { Pop, Fade } from "../../fuselage/animation/animation"

import Head from "next/head"


import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header-living'
import { FHS_LIVING as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/living/common/footer/footer'

import { PageHero } from "../../ui/modules/page-hero"
import { Button, ButtonGrid } from "../../ui/buttons/button"
import { AgendaSessionLite } from "../../ui/components/agenda-session"



export default function Page ({ sessions, locations }) {

    const isDesktop = useCustomMediaQuery('(min-width: 600px)')

    // console.log('sessions:', sessions)
	// console.log('locations [swc]:', locations)

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/living/favicon-16x16.png" sizes="16x16" />
                <meta content="https://cms.thebench.com/assets/content-library/img/FHS-Living/FHS-Living-Launch-PR.jpg" property="og:image"></meta>
                <title>FHS Living | Feb 2027, Paris | Founding Edition</title>
                <meta name="description" content="Addressing the growing 'lanyard fatigue' of the European hospitality conferencing market"></meta>
            </Head>
        
            
            <EventsBar site={'/living'} />
            <Header
                site={`/living`}
                handle={`Living`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />


            {/* ABOVE THE FOLD */}
            <PageHero hero={{url: `/assets/img/living/agenda/page-hero.jpg`, width: 595, height: 335}}>
                <section style={{
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`
                }}>
                    <div className="container center">
                        <p className="fs-1 fw-400 lh-1 maxw-50">A two-day programme designed around capital deployment.</p>
                    </div>

                    <div className="container formatted center">
                        <p className="fs-6 maxw-55 balance">Every session at FHS Living is built to support investment decisions. The agenda is investor-first - structured around the questions that capital allocators, developers and operators are genuinely trying to answer. On-stage 1:1 interviews with senior industry leaders. Investor roundtables on underwriting and risk. A live Deal Room running throughout Day Two. Pre-scheduled 1:1 meetings throughout both days.</p>
                    </div>
                </section>
            </PageHero>


            {/* PROGRAMME */}
            <section className="block bg-primary">
                <div className="container center">
                    <p className="fs-2 fw-600">Conference Programme</p>
                </div>
                <div className="container columns-1 gap-sm maxw-45">
                    
                    {/* <Day title={`Day 1`}>
                        <h5>Social Meet</h5>
                        <AgendaSessionLite beginsAt={'18:00'}>
                            <h5>Welcome Reception</h5>
                        </AgendaSessionLite>
                    </Day> */}
                    
                    <Day title={`Tuesday, 23rd February`}>
                        <AgendaSessionLite beginsAt={'09:00'} endsAt={'09:10'}>
                            <h5>Welcome to FHS Living Europe 2027</h5>
                        </AgendaSessionLite>

                        <AgendaSessionLite beginsAt={'09:10'} endsAt={'09:40'}>
                            <h5>Europe as a Safe Haven: The New Geography of Global Capital</h5>
                            <p>Keynote Presentation by a political economist</p>
                        </AgendaSessionLite>

                        <AgendaSessionLite beginsAt={'09:40'} endsAt={'10:15'}>
                            <h5>State of Capital: Where Investors Are Placing Their Bets Across Europe&apos;s Living Sectors</h5>
                            <p>Panel Discussion</p>
                        </AgendaSessionLite>

                        <AgendaSessionLite beginsAt={'10:15'} endsAt={'10:30'}>
                            <h5>Navigating Europe: The New Rules for Cross-Border Living Investment</h5>
                            <p>Keynote Speech by a senior regulatory counsel</p>
                        </AgendaSessionLite>
                        
                        <AgendaSessionLite beginsAt={'10:30'} endsAt={'11:30'}>
                            <h5>Networking Coffee</h5>
                        </AgendaSessionLite>

                        <AgendaSessionLite beginsAt={'11:00'} endsAt={'11:20'}>
                            <h5>The Future of Capital: Insights from a Global Investment Leader</h5>
                            <p>Fireside Chat with a high profile investor across multiple living asset classes</p>
                        </AgendaSessionLite>

                        <AgendaSessionLite beginsAt={'11:20'} endsAt={'12:00'}>
                            <h5>One Asset, Multiple Income Streams: The New Living Investment Model</h5>
                            <p>Panel Discussion</p>
                        </AgendaSessionLite>
                        
                        <AgendaSessionLite beginsAt={'12:00'} endsAt={'12:30'}>
                            <h5>Investment Exchange: From the Gulf to Europe</h5>
                            {/* <h6 className="c-magenta">Session Format</h6>
                            <h6>3 mins | Market Snapshot</h6>
                            <h6>12 mins | Europe Meets the Gulf</h6>
                            <p>Two industry leaders—one representing Europe and one the GCC—share their perspectives on:</p>
                            <ul>
                                <li>The biggest opportunities for collaboration </li>
                                <li>The operational expertise each region brings </li>
                                <li>The barriers that still need to be overcome </li>
                            </ul>
                            <h6>15 mins | The Investment Exchange</h6>
                            <p>The moderator presents three real-world investment scenarios </p> */}
                        </AgendaSessionLite>
                        
                        <AgendaSessionLite beginsAt={'12:30'} endsAt={'13:30'}>
                            <h5>Lunch</h5>
                        </AgendaSessionLite>
                        
                        <SessionGroup beginsAt={'13:30'} endsAt={'15:00'} heading={'Master Classes & Group Discussions'} flag={'Curated Meetings'}>
                            <AgendaSessionLite beginsAt={'13:30'} endsAt={'14:15'}>
                                <p><span className="c-magenta">Interactive Roundtable A:</span><br/>
                                <span className="fs-6 fw-600">The Institutionalisation of PBSA: What&apos;s Next for Student Accommodation?</span></p>
                                
                                <p><span className="c-magenta">Interactive Roundtable B:</span><br />
                                <span className="fs-6 fw-600">Rethinking Senior Living: From Care to Lifestyle</span></p>
                                
                                <p><span className="c-magenta">Interactive Roundtable C:</span><br />
                                <span className="fs-6 fw-600">Planning for Branded Residences: Navigating Europe&apos;s Regulatory Landscape</span></p>
                            </AgendaSessionLite>
                            
                            <AgendaSessionLite beginsAt={'14:15'} endsAt={'15:00'}>
                                <p><span className="c-magenta">Interactive Roundtable A:</span><br/>
                                <span className="fs-6 fw-600">Underwriting Living Assets: Pricing Risk in the Operational Real Estate Era</span></p>
                                
                                <p><span className="c-magenta">Interactive Roundtable B:</span><br />
                                <span className="fs-6 fw-600">Planning the Future: Policy as a Catalyst for Alternative Living</span></p>
                                
                                <p><span className="c-magenta">Interactive Masterclass:</span><br />
                                <span className="fs-6 fw-600">Living Assets 101: A Hotel Investor&apos;s Guide to the Living Economy </span></p>
                            </AgendaSessionLite>
                        </SessionGroup>
                        
                    </Day>

                    <Day title={`Wednesday, 24th February`}>
                        <SessionGroup beginsAt={'9:00'} endsAt={'11:00'} heading={'Plenary Session'}>
                            <AgendaSessionLite beginsAt={'09:00'} endsAt={'09:30'}>
                                <h5>Work, Live, Belong: Designing the Next Generation of Mixed-Use Communities</h5>
                            </AgendaSessionLite>
                            
                            <AgendaSessionLite beginsAt={'09:30'} endsAt={'09:50'}>
                                <h5>The Art of Living: Where Hospitality Meets Home</h5>
                                <p>Fireside Chat with an industry leader</p>
                            </AgendaSessionLite>
                            
                            <AgendaSessionLite beginsAt={'09:50'} endsAt={'10:15'}>
                                <h5>Who Pays for Sustainability? Investors, Lenders and Owners Debate the Business Case</h5>
                            </AgendaSessionLite>
                            
                            <AgendaSessionLite beginsAt={'10:15'} endsAt={'11:00'}>
                                <h5>The Living Deal Room: Buyers, Sellers & the Art of Getting Deals Done</h5>
                                <h6 className="c-magenta">Interactive Deal Room</h6>
                                {/* <p>The moderator presents <strong>three live investment opportunities</strong>.</p>
                                <p className="c-magenta">For each opportunity:</p>
                                <p>The <strong>seller</strong> has <strong>90 seconds</strong> to pitch the investment.<br />The <strong>buyer</strong> then has <strong>90 seconds</strong> to respond.</p>
                                <p className="c-magenta">Questions include:</p>
                                <ul>
                                    <li>Would you buy it? </li>
                                    <li>What&apos;s your valuation? </li>
                                    <li>What&apos;s your biggest concern? </li>
                                    <li>What would change your mind? </li>
                                    <li>Where would negotiations begin?</li>
                                </ul>
                                <p>After both perspectives, the moderator opens a brief discussion on where the valuation gap lies and what it would take to close the transaction.</p> */}
                            </AgendaSessionLite>
                        </SessionGroup>
                        
                        
                        <AgendaSessionLite beginsAt={'11:00'} endsAt={'11:30'}>
                            <h5>Coffee Break</h5>
                        </AgendaSessionLite>
                        
                        <SessionGroup beginsAt={'11:30'} endsAt={'13:00'} heading={'Master Classes & Group Discussions'} flag={'Curated Meetings'}>
                            <AgendaSessionLite beginsAt={'11:30'} endsAt={'12:15'}>
                                <p><span className="c-magenta">Interactive Roundtable A:</span><br/>
                                <span className="fs-6 fw-600">The Unbundled Asset: Monetising Building Amenities for Higher Returns</span></p>
                                
                                <p><span className="c-magenta">Interactive Roundtable B:</span><br />
                                <span className="fs-6 fw-600">Co-Living Comes of Age: Building Communities, Not Just Buildings</span></p>
                                
                                <p><span className="c-magenta">Interactive Roundtable C:</span><br />
                                <span className="fs-6 fw-600">Where Life Happens: The Rise of Work - Play Communities</span></p>
                            </AgendaSessionLite>
                            
                            <AgendaSessionLite beginsAt={'12:15'} endsAt={'13:00'}>
                                <p><span className="c-magenta">Interactive Roundtable A:</span><br/>
                                <span className="fs-6 fw-600">Going Solo: The Rise of Standalone Branded Residences</span></p>
                                
                                <p><span className="c-magenta">Interactive Roundtable B:</span><br />
                                <span className="fs-6 fw-600">The Brand Advantage: Driving Operational Excellence Across Living Assets</span></p>
                                
                                <p><span className="c-magenta">Interactive Roundtable C:</span><br />
                                <span className="fs-6 fw-600">Living Longer, Living Better: The Rise of Longevity Residences</span></p>
                            </AgendaSessionLite>
                        </SessionGroup>
                        
                    </Day>

                </div>
            </section>
            

            <Footer/>
            <LenisScroller />
        </>
    )
}
Page.theme = 'living'



const Day = ({ title, children }) => {
    return (
        <div
            className="bg-primary formatted"
            style={{
                backgroundColor: `var(--primary)`,
                padding: `var(--space-sm)`,
                borderRadius: `1rem`,
            }}
        >
            <h4 style={{ color: `white` }}>{title}</h4>
            <div
                style={{
                    display: `grid`,
                    gridTemplateColumns: `1fr`,
                    gap: `.5rem`,
                    color: `white`
                }}
            >
                {children}
            </div>
        </div>
    )
}

const SessionGroup = ({ beginsAt, endsAt, heading, flag, children }) => {
    return (
        <div
            style={{
                display: `grid`,
                gridTemplateColumns: `1fr`,
                gap: `.5rem`,
                color: `white`,

                padding: `var(--space-xs)`,
                border: `1px solid var(--fg)`,
                borderRadius: `1rem`,
            }}
        >
            <header style={{ display: `grid`, gridTemplateColumns: `9rem 4fr`}}>
                <aside>
                    <p>{beginsAt} {endsAt && `– ${endsAt}`}</p>
                </aside>

                <main>
                    {
                        flag &&
                        <p style={{ display: `inline-block`, margin: 0, backgroundColor: `var(--magenta)`, padding: `5px 15px`, borderRadius: `2rem` }}>{flag}</p>

                    }
                    <h5>{heading}</h5>
                </main>
            </header>
            { children }
        </div>
    )
}

const Session = ({ children }) => {
    return (
        <Pop>
            <div
                className="bg-secondary"
                style={{
                    backgroundColor: `var(--burgundy)`,
                    padding: `var(--space-xs)`,
                    borderRadius: `.5rem`,
                    color: `white`
                }}
            >
                { children }
            </div>
        </Pop>
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

						plannings(eventId: "${process.env.SWAPCARD_EVENT_ID_LIVING_2026}", page: 1, pageSize: 500) {
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
									... on TextField {
									id
									definition {
										id
										name
									}
									value
								}
							}
							speakers {
								communityProfile {
									id
								}
								firstName
								id
								jobTitle
								lastName
								photoUrl
								organization
								biography
								withEvent(eventId: "${process.env.SWAPCARD_EVENT_ID_LIVING_2026}") {
									eventProfile {
										type
										withEvent(eventId: "RXZlbnRfMjQwNDQ3Nw==") {
											speakerOnPlannings {
												id
												title
												beginsAt
												endsAt
											}
										}
										fields {
											... on SelectField {
												id
												definition {
													name
												}
												value
												translations {
													value
												}
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
					"eventId": process.env.SWAPCARD_EVENT_ID_LIVING_2026,
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