import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import _ from 'lodash'

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import useCustomMediaQuery from '../../hooks/useCustomMediaQuery'
import { Pop, Fade } from "../../fuselage/animation/animation"

import Head from "next/head"


import { QuerySEO } from "../../graphql/queries"
import handleSeomaticMeta from '../../lib/seomatic'


import { Meta } from "../../ui/site/meta"
import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header-living'
import { FHS_LIVING as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/living/common/footer/footer'

import { PageHero } from "../../ui/modules/page-hero"

import { Button, ButtonGrid } from "../../ui/buttons/button"
import { ButtonKeyline } from "../../fuselage/theme/egypt/components/button-keyline/button-keyline"
import { SpeakerCard } from "../../ui/components/speaker-card"
import { FhsIconKeyline } from "../../fuselage/theme/2024/global/components/logos/fhs-brand"
import HubspotForm from "../../fuselage/components/hubspot-form/hubspot-form"

import { ThemesSlider } from "../../ui/modules/themes-slider"
import { ThemeGraphic } from '../../fuselage/theme/2026/sa/theme/theme-graphic'

import { QuoteSlider } from '../../fuselage/theme/2024/world/components/quote-slider/quote-slider'
import { Quotation } from "../../fuselage/theme/2025/sa/components/quotation/quotation"
import { SlideoutCard } from "../../fuselage/components/slideout-card/slideout-card"
import { EventCardLite } from '../../fuselage/theme/2024/world/blocks/upcoming-events/upcoming-events'
import { EventCard } from "../../ui/components/event-card"

import { CapitalFlow } from "../../ui-living/graphics/capital-flow"




export const THEMES_DATA = [
    {
        iconUrl: '/assets/img/living/homepage/asset-classes/branded-residences.svg',
        title: 'Branded Residences',
    },
    {
        iconUrl: '/assets/img/living/homepage/asset-classes/student-accommodation.svg',
        title: 'Student Accommodation',
    },
    {
        iconUrl: '/assets/img/living/homepage/asset-classes/senior-living.svg',
        title: 'Senior Living',
    },
    {
        iconUrl: '/assets/img/living/homepage/asset-classes/serviced-living.svg',
        title: 'Serviced Living',
    },
    {
        iconUrl: '/assets/img/living/homepage/asset-classes/co-living.svg',
        title: 'Co-living',
    },
    {
        iconUrl: '/assets/img/living/homepage/asset-classes/shared-ownership.svg',
        title: 'Shared Ownership',
    },
    {
        iconUrl: '/assets/img/living/homepage/asset-classes/club-concepts.svg',
        title: 'Club Concepts',
    },
    {
        iconUrl: '/assets/img/living/homepage/asset-classes/mixed-use.svg',
        title: 'Mixed Use',
    },
    {
        iconUrl: '/assets/img/living/homepage/asset-classes/hotels-and-resorts.svg',
        title: 'Hotels & Resorts',
    },
    
    
]

export const TESTIMONIALS_DATA = [
    {
        quote: "Success in branded residences requires specialised expertise across multiple disciplines - which is why we see The Branded Residence Forum [now FHS Living] by Accor One Living as such an essential platform for discussion. At this trailblazing event, we will pull together key-decision makers from across the sector - including residential developers who have executed enormously successful projects, expert lawyers, branding and communication firms, architects, interior designer and other key consultants - the key players who are propelling the success of branded residences globally.",
        avatar: [
            {
                url: "/assets/img/brf/quotes/jeff.jpg",
                width: "800",
                height: "800"
            }
        ],
        fullName: "Jeff Tisdall",
        jobTitle: "CBO",
        organisation: "Accor One Living"
    },
    {
        quote: "We see The Branded Residences Forum [now FHS Living] by Accor One Living as an important opportunity for the industry to gather and discuss this ever-expanding sector. Interest is now truly global and standalone branded development activity is accelerating. At the same time, exciting new brands and partnership are emerging - simply put, investors have a lot to consider and share when it comes to branded residences.",
        avatar: [
            {
                url: "/assets/img/brf/quotes/Itani.jpg",
                width: "800",
                height: "800"
            }
        ],
        fullName: "Riyan Itani",
        jobTitle: "Founder",
        organisation: "Global Branded Residences"
    },
    {
        quote: "FHS World in Dubai is a key gathering for hospitality investors and it is only natural that its scope has been expanded to include a 'must-attend' day-long event for those developing, operating or exploring branded residences. We see this forum as a key opportunity for investors to delve into the key issues and trends, such as rental programs, legal structure, sales and marketing and design.",
        avatar: [
            {
                url: "/assets/img/brf/quotes/rico.jpg",
                width: "800",
                height: "800"
            }
        ],
        fullName: "Rico Picenoni",
        jobTitle: "Head of Savills Global Residential Development Consultancy",
        organisation: ""
    }
]

const QUOTES_DATA = [
    {
        avatarUrl: 'https://cms.thebench.com/assets/img/avatars/Jeff-Tisdall.jpeg',
        quote: "The market is still fragmented. Large events are too broad, and niche ones don't have the right scale.",
        fullName: "Jeff Tisdall",
        title: "Chief Business Officer, Accor One Living"
    },
    {
        avatarUrl: 'https://cms.thebench.com/assets/img/avatars/Dirk-Bakker.jpg',
        quote: "A conference that brings all of this together would be a huge success.",
        fullName: "Dirk Bakker",
        title: "Chief Executive Officer, Necron Hospitality",
    },
    {
        avatarUrl: 'https://cms.thebench.com/assets/img/avatars/kasper-ravn-wigen.webp',
        quote: "I wish there was a business event that brings together key living categories across European real estate in a single place.",
        fullName: "Kasper Ravn Wigen",
        title: "Global Marketing Director, Yugo",
    }
]

// temporary hard-coded data -----------------------------------------------
import { EVENT_DATA } from ".."
const livingEventIds = new Set(['246252', '259029', '314682', '246252333'])
const FHS_EVENTS = EVENT_DATA.filter(event => !livingEventIds.has(event.id))
const LIVING_EVENTS = EVENT_DATA.filter(event => livingEventIds.has(event.id))


export default function Home ({ data, advisors }) {

    // console.log(content)
    // console.log(seomatic)
    // console.log("events:", data.events)
    // console.log("advisors:", advisors.profiles)
    
    // console.log('FHS:', FHS_EVENTS)
    // console.log('LIVING:', LIVING_EVENTS)
    

    const isDesktop = useCustomMediaQuery('(min-width: 600px)')

    return (
        <>
            <Head>
                <Meta
                    faviconUrl={"/assets/favicons/living/favicon-16x16.png"}
                    imageUrl={"https://cms.thebench.com/assets/content-library/img/FHS-Living/FHS-Living-Launch-PR.jpg"}
                    title={"FHS Living | Feb 2027, Paris | Founding Edition"}
                    description={"Addressing the growing 'lanyard fatigue' of the European hospitality conferencing market"}
                />
            </Head>
        
            
            <EventsBar site={'/living'} />
            <Header
                site={`/living`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />

            {/* INTRO */}
            <PageHero hero={{url: `/assets/img/living/homepage/page-hero.jpg`, width: 595, height: 335}}>    
                <section className="">
                    <div className="container">
                        <p className="fs-1 fw-600 caps lh-1 maxw-60">EUROPE&apos;S ALTERNATIVE HOSPITALITY OPPORTUNITIES MEET GLOBAL CAPITAL</p>
                        <p className="fs-5 fw-500 mt-sm mb-sm">Founding Edition | 23–24 February 2027, <span className="c-magenta">Pullman Paris Montparnasse</span></p>
                    </div>

                    <div className="container formatted">
                        <p className="fs-6 fw-600 c-magenta">For those who are involved or interested in below asset classes:</p>
                        <p className="fs-5 balance">Branded Residences <span className="c-magenta">&bull;</span> Student Accommodation <span className="c-magenta">&bull;</span> Senior Living <span className="c-magenta">&bull;</span> Serviced Living <span className="c-magenta">&bull;</span> Co-Living <span className="c-magenta">&bull;</span> Shared Ownership <span className="c-magenta">&bull;</span> Club Concepts <span className="c-magenta">&bull;</span> Mixed Use <span className="c-magenta">&bull;</span> Hotels &amp; Resorts</p>
                    </div>
                </section>
            </PageHero>


            {/* FHS EVENTS */}
            <section className="block bg-primary pt-md">

                {/* LIVING */}
                <div className="container center">
                    <p className="fs-2 fw-500 caps lh-1">Upcoming FHS Living Sub-Events</p>
                </div>

                <div className="container columns-3 gap-xs maxw-55">
                    {
                        _.orderBy(LIVING_EVENTS, 'startDate').map(event => {
                            if (event.id === '314682') return
                            return (
                                <div key={event.id} className={`columns-1 gap-xs`}>                                
                                    {
                                        event.streams &&
                                        event.streams.map( stream => (
                                            <EventCard
                                                key={stream.id}
                                                heading={event.heading}
                                                title={stream.heading}
                                                dates={{ startDate: event.startDate, endDate: event.endDate}}
                                                venue={event.venue}
                                                logo={stream.logo[0]}
                                                passLink={stream.purchasePassLink} 
                                                websiteLink={stream.websiteLink} 
                                                theme={event.theme} 
                                                dateOverride={event.dateOverride}
                                                landscape={false}
                                            />
                                        ))
                                    }
                                </div>
                            )
                        })
                    }
                </div>

            </section>


            {/* IMPACT */}
            <section className="block bg-secondary">
                <div className="container columns-3 gap-sm">
                    <Card>
                        <div className="formatted center">
                            <p className="fs-1">€46.9B</p>
                            <p className="fs-5 lh-1 balance c-magenta">Invested in European living in 2025</p>
                        </div>
                    </Card>

                    <Card>
                        <div className="formatted center">
                            <p className="fs-1">€50B</p>
                            <p className="fs-5 lh-1 balance c-magenta">Of fresh capital planned for European living over the next three years</p>
                        </div>
                    </Card>

                    <Card>
                        <div className="formatted center">
                            <p className="fs-1">9.6M</p>
                            <p className="fs-5 lh-1 balance c-magenta">Home shortfall across Europe - structural, enduring demand</p>
                        </div>
                    </Card>
                </div>
            </section>  

            
            {/* OPPORTUNITY */}
            <section className="block bg-secondary">
                <div className="container center maxw-60">
                    <p className="fs-2 fw-500 lh-1 caps balance">THE MEETING POINT FOR GLOBAL CAPITAL &amp; EUROPEAN OPPORTUNITY</p>
                </div>
                <div className="container columns-2 ai-center gap-md">
                    <CapitalFlow />

                    <div className="formatted">
                        <p>We bring vetted global capital to Europe with rigour and intent.</p>
                        <p><strong>20 years of relationships.</strong> Investors and developers cultivated across the Middle East, Africa through the Future Hospitality Summit franchise.</p>
                        <p><strong>Named, vetted delegates.</strong> Key global capital sources paired with European hosts - travel confirmed and introductions arranged in advance.</p>
                        <p><strong>A clean entry point.</strong> Sharia-compliant living assets - student, senior and branded residences - offer global capital an increasingly attractive route in.</p>
                        <p>Gulf family offices from Qatar, the UAE & the broader GCC are among the most active. FHS Living is where those conversations begin.</p>
                    </div>
                </div>
            </section>


            {/* PILLARS */}
            <section className="block bg-primary">
                <div className="container center formatted">
                    <p className="fs-2 fw-500 caps">What defines FHS Living</p>
                    <p className="fs-6 balance">FHS Living is a high-impact initiative designed to funnel capital, especially from the Middle East, towards a carefully selected mix of living assets - addressing the growing &quot;lanyard fatigue&quot; of the European hospitality conferencing market.</p>
                </div>

                <div className="container columns-3 gap-md">
                    <div className="formatted">
                        <Pop>
                            <img src="/assets/img/living/homepage/convergence.jpg" alt="" width="100%" style={{ borderRadius: `1rem`, marginBottom: 20 }} />
                        </Pop>
                        <h5>Convergence</h5>
                        <p>One platform for the full living asset class. Branded residences, PBSA, senior living, serviced living, co-living, shared ownership, club concepts, mixed-use and hotels - brought together because that is how capital is increasingly being deployed across Europe.</p>
                    </div>
         
                    <div className="formatted">
                        <Pop>
                            <img src="/assets/img/living/homepage/curation.jpg" alt="" width="100%" style={{ borderRadius: `1rem`, marginBottom: 20 }} />
                        </Pop>
                        <h5>Curation</h5>
                        <p>Pre-scheduled 1:1 introductions between capital allocators, developers and operators, matched on investment criteria and development priorities. Complemented by an Investor Lounge, a live Deal Room, site tours of active Paris projects, and den-style social sessions designed to move conversations into transactions.</p>
                    </div>
             
                    <div className="formatted">
                        <Pop>
                            <img src="/assets/img/living/homepage/capital.jpg" alt="" width="100%" style={{ borderRadius: `1rem`, marginBottom: 20 }} />
                        </Pop>
                        <h5>Capital</h5>
                        <p>An agenda built around investment decisions. Every session from Underwriting Living Assets to Europe Meets Middle East is structured to support capital deployment, informed by the C-Level decision-makers who will be in the room.</p>
                    </div>
                </div>

                <div className="container center">
                    <div className="button-grid">
                        <Pop><p><Button href={`/living/programme`} label={`Full Agenda`} inverse/></p></Pop>
                    </div>
                </div>
            </section>


            {/* ASSET CLASSES */}
            <section className={`block bg-secondary`}>
                <div className="container center pb-sm">
                    <p className="fs-2 fw-500 caps">Asset Classes</p>
                </div>

                <ThemesSlider
                    heading={`Asset Classes` }
                    data={THEMES_DATA}
                    link={''}
                    linkLabel={''}
                />
            </section>


            {/* ADVISORS */}
            <section className="block bg-primary">
                <div className="container center formatted">
                    <p className="fs-2 fw-500 caps">Founding Advisors</p>
                    <p className="fs-6 balance">Senior leaders representing above 9 asset classes from living investment landscape</p>
                </div>

                <div className="container columns-5 gap-sm center">
                    {
                        advisors.profiles.map( (profile, index) => (
                            <Pop key={index}>
                                <SpeakerCard
                                    key={index}
                                    url={``}
                                    photoUrl={profile.avatar[0].url}
                                    fullName={profile.title}
                                    positions={profile.positions}
                                    color={'white'}
                                    focus={profile.focus}
                                    geographies={profile.geographies}
                                />
                            </Pop>
                        ))
                    }
                </div>

                <div className="container center">
                    <div className="button-grid">
                        <Pop><p><Button href={`/living/founding-advisors`} label={`View All`} inverse/></p></Pop>
                    </div>
                </div>
            </section>

            
            {/* TESTIMONIALS */}
            {/* <section className="block bg-secondary">
                <div className="container maxw-70">

                    <QuoteSlider 
                        color={'white'}
                        heading={"Testimonials"}
                        testimonials={TESTIMONIALS_DATA} />

                </div>
            </section> */}


            {/* QUOTES */}
            <section className="block bg-secondary o-hidden">
                <div className="container">
                    <p className="fs-2 fw-600 caps center">What the industry is saying</p>
                </div>

                <div className={`container columns-3 gap-md`}>
                    {
                        QUOTES_DATA.map((quote, index) => (
                            <Quotation
                                key={index}
                                avatarUrl={quote.avatarUrl}
                                quote={quote.quote}
                                fullName={quote.fullName}
                                title={quote.title}
                            />
                        ))
                    }
                </div>
            </section>

            
            {/* WHO ATTENDS */}
            <section className="block bg-secondary">
                <div className="container">
                    <p className="fs-2 fw-600 caps center">Who gathers in Paris</p>
                </div>

                <div className="container">
                    <ImpactWrapper>
                        <div className="bg-primary columns-4 gap-sm">
                            <Impact title={`Capital`} percent={25}>
                                <p>Sovereign wealth funds</p>
                                <p>Private equity</p>
                                <p>Family offices</p>
                                <p>Asset managers</p>
                                <p>Middle eastern investors</p>
                            </Impact>

                            <Impact title={`Developers`} percent={35}>
                                <p>European developers</p>
                                <p>Mixed-use and residential developers</p>
                                <p>Asset Owners</p>
                            </Impact>

                            <Impact title={`Operators`} percent={20}>
                                <p>Student houseing</p>
                                <p>Branded residences</p>
                                <p>Senior living</p>
                                <p>Hospitality groups</p>
                            </Impact>

                            <Impact title={`Enablers`} percent={20}>
                                <p>Advisors</p>
                                <p>Brokers</p>
                                <p>Selected enablers</p>
                            </Impact>
                        </div>
                    </ImpactWrapper>
                </div>
            </section>
 

            {/* THE EXPERIENCE  */}
            <section className="block bg-secondary">
                <div className="container">
                    <p className="fs-2 fw-600 caps center">The FHS Living experience</p>
                </div>

                <div className="container flex flex-wrap gap-sm jc-center">
                    <SlideoutCard title={`Curated 1:1 meetings`} imageSrc={`/assets/img/living/homepage/attendees-01.jpg`}>
                        <div className="formatted balance">
                            <p className="fs-6">Pre-qualified, pre-scheduled introductions across capital, development and operations</p>
                        </div>
                    </SlideoutCard>

                    <SlideoutCard title={`Leadership stage`} imageSrc={`/assets/img/living/homepage/attendees-02.jpg`}>
                        <div className="formatted balance">
                            <p className="fs-6">On-stage 1:1 interviews with senior industry leaders</p>
                        </div>
                    </SlideoutCard>
                    
                    <SlideoutCard title={`Investor site tours`} imageSrc={`/assets/img/living/homepage/attendees-03.jpg`}>
                        <div className="formatted balance">
                            <p className="fs-6">Live project walkthroughs across Paris</p>
                        </div>
                    </SlideoutCard>
                    
                    <SlideoutCard title={`Deal Room`} imageSrc={`/assets/img/living/homepage/attendees-04.jpg`}>
                        <div className="formatted balance">
                            <p className="fs-6">Active development opportunities presented to pre-qualified capital</p>
                        </div>
                    </SlideoutCard>
                    
                    <SlideoutCard title={`Exclusive receptions`} imageSrc={`/assets/img/living/homepage/attendees-05.jpg`}>
                        <div className="formatted balance">
                            <p className="fs-6">Hosted dinners and curated social sessions</p>
                        </div>
                    </SlideoutCard>
                    
                    <SlideoutCard title={`Exhibition & showcase`} imageSrc={`/assets/img/living/homepage/attendees-06.jpg`}>
                        <div className="formatted balance">
                            <p className="fs-6">Partner platforms and project announcements</p>
                        </div>
                    </SlideoutCard>
                    
                </div>

            </section>

            
            
            
            

            <Footer/>
            <LenisScroller />
        </>
    )
}
Home.theme = 'living'





export const Card = ({ children }) => {
    return (
        <Pop>
            <div className="bg-primary p-sm c-white" style={{ borderRadius: `1rem`, height: `100%` }}>
                { children }
            </div>
        </Pop>
    )
}

const ImpactWrapper = ({ children }) => {

    const isDesktop = useCustomMediaQuery('(min-width: 600px)')

    return (
        <Fade>
            <div
                className="bg-primary c-white"
                style={{
                    borderRadius: `1rem`,
                    height: `100%`,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    padding: isDesktop ? `2rem` : `3rem`
                }}
            >
                { children }
            </div>
        </Fade>
    )
}

const Impact = ({ title, percent, children }) => {

    const isDesktop = useCustomMediaQuery('(min-width: 600px)')

    return (
        <Pop delay={.1}>
            <p className="fs-4 caps center mb-sm c-magenta">{title}</p>
            <div
                style={{
                    position: `relative`,
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                    justifyContent: `center`,

                    aspectRatio: 1,
                    border: `1px solid var(--magenta)`,
                    borderRadius: `50rem`,
                    padding: `2rem`,
                    
                    textAlign: `center`,
                }}
            >
                <p
                    className="fw-600 c-ma"
                    style={{
                        position: `absolute`,
                        top: `-1.5rem`,
                        backgroundColor: `var(--primary)`,
                        fontSize: isDesktop ? `4vw` : `15vw`
                    }}
                >
                    {percent}%
                </p>

                {children}
            </div>
        </Pop>
    )
}

const PartnerCard = ({ photoUrl, children }) => {
    return (
        <Pop>
            <div className="bg-primary p-sm c-white" style={{ borderRadius: `1rem`, height: `100%`, display: `flex`, alignItems: `flex-start`, justifyContent: `center` }}>
                <div
                    style={{
                        display: `grid`,
                        gridTemplateColumns: `1fr 3fr`,
                        gap: `2rem`,
                        alignItems: `flex-start`
                    }}
                >
                    <Pop delay={.1}>
                        <img src={photoUrl} alt="" width={`100%`} style={{ borderRadius: 6 }} />
                    </Pop>
                    <div>
                        { children }
                    </div>
                </div>
            </div>
        </Pop>
    )
}







export async function getStaticProps() {

    const { data } = await craftApolloClient().query({
        query: gql`
            query Data {
                entry(site: "${process.env.SITE_HANDLE}", id: "77020") {
                    ... on ${process.env.SITE_HANDLE}Homepage_${process.env.SITE_HANDLE}Homepage_Entry {
                        id
                        title
                        theme
                        events {
                            ... on events_BlockType {
                                id
                                heading
                                startDate
                                endDate
                                dateOverride
                                venue
                                theme
                                streams {
                                    ... on streams_stream_BlockType {
                                        id
                                        logo {
                                            id
                                            url
                                            width
                                            height
                                        }
                                        heading
                                        purchasePassLink
                                        websiteLink
                                    }
                                }
                            }
                        }
                    }
                }
                advisors: entry(site: "${process.env.SITE_HANDLE_LIVING}", section: "profileGroups", id: "312271") {
                    ... on profileGroups_default_Entry {
						id
						title
						profiles(limit: 10) {
							... on profiles_profile_Entry {
								id
								slug
								title
								avatar {
									... on avatars_Asset {
										id
										url
										width
										height
									}
								}
								positions {
									... on positions_BlockType {
										id
										jobTitle
										organisation
									}
								}
								profile
                                focus
                                geographies
							}
						}
					}
                } 

            }
          
        `
        })

        return {
        props: {
            data: data.entry,
            advisors: data.advisors
        },
    }
}