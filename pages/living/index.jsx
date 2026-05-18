import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import useCustomMediaQuery from '../../hooks/useCustomMediaQuery'
import { Pop, Fade } from "../../fuselage/animation/animation"

import Head from "next/head"



import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_LIVING as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/living/common/footer/footer'

import { PageHero } from "../../ui/modules/page-hero"

import { Button, ButtonGrid } from "../../ui/buttons/button"
import { ButtonKeyline } from "../../fuselage/theme/egypt/components/button-keyline/button-keyline"
import { SpeakerCard } from "../../ui/components/speaker-card"
import { FhsIconKeyline } from "../../fuselage/theme/2024/global/components/logos/fhs-brand"
import HubspotForm from "../../fuselage/components/hubspot-form/hubspot-form"

import { Quotation } from "../../fuselage/theme/2025/sa/components/quotation/quotation"
import { SlideoutCard } from "../../fuselage/components/slideout-card/slideout-card"
import { EventCardLite } from '../../fuselage/theme/2024/world/blocks/upcoming-events/upcoming-events'





const SPEAKER_DATA = [
    {
        url: ``,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Alabbar_Mohamed_sq.jpg',
        fullName: 'H.E. Mohamed Ali Rashed Alabbar',
         jobTitle: 'Founder & Managing Director of Emaar Properties; Founder & Director of Noon.com; Chairman of Eagle Hills; Chairman of Americana Group',
        company: '',
    },
    {
        url: ``,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Dirk-Bakker.jpg',
        fullName: 'Dirk Bakker',
        jobTitle: 'CEO',
        company: 'Necron Hospitality',
    },
    {
        url: ``,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Jeff-Tisdall.jpeg',
        fullName: 'JEFF TISDALL',
        jobTitle: 'Chief Business Officer',
        company: 'Accor One Living',
    },
    {
        url: ``,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/robert-dobrzycki.webp',
        fullName: 'ROBERT DOBRZYCKI',
        jobTitle: 'CEO and Co-Owner',
        company: 'Panattoni Europe',
    },
    {
        url: ``,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/lolita-prysiazhniuk.jpeg',
        fullName: 'LOLITA PRYSIAZHNIUK',
        jobTitle: 'VP Hotel Development & Transactions',
        company: 'Aroundtown SA',
    },
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


export default function Home ({ data, advisors }) {

    // console.log(content)
    // console.log("advisors:", advisors.profiles)

    const isDesktop = useCustomMediaQuery('(min-width: 600px)');

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/living/favicon-16x16.png" sizes="16x16" />
            </Head>
        
            
            <EventsBar site={'/living'} />
            <Header
                site={`/living`}
                handle={`Living`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />

            {/* INTRO */}
            <PageHero hero={{url: `/assets/img/living/homepage/page-hero.jpg`, width: 595, height: 335}}>    
                <section className="">
                    <div className="container">
                        <p className="fs-1 fw-600 caps lh-1 maxw-45">Connecting Global Capital with Europe&apos;s Living, Lifestyle &amp; Hospitality</p>
                        <p className="fs-5 fw-500 caps mt-sm mb-sm">Founding Edition | February 2027 | <span className="c-accent">Paris</span>, France</p>
                    </div>

                    <div className="container formatted">
                        <p className="fs-6 fw-600 c-accent">Asset Classes:</p>
                        <p className="fs-5 balance">Branded Residences <span className="c-accent">&bull;</span> Student Accommodation <span className="c-accent">&bull;</span> Senior Living <span className="c-accent">&bull;</span> Serviced Living <span className="c-accent">&bull;</span> Co-Living <span className="c-accent">&bull;</span> Shared Ownership <span className="c-accent">&bull;</span> Club Concepts <span className="c-accent">&bull;</span> Mixed Use <span className="c-accent">&bull;</span> Hotels &amp; Resorts</p>
                    </div>
                </section>
            </PageHero>


            {/* IMPACT */}
            <section className="block bg-secondary">
                <div className="container columns-3 gap-sm">
                    <Card>
                        <div className="formatted center">
                            <p className="fs-1">€46.9B</p>
                            <p className="fs-5 lh-1 balance">Invested in European living in 2025</p>
                        </div>
                    </Card>

                    <Card>
                        <div className="formatted center">
                            <p className="fs-1">€50B</p>
                            <p className="fs-5 lh-1 balance">Of fresh capital planned for European living over the next three years</p>
                        </div>
                    </Card>

                    <Card>
                        <div className="formatted center">
                            <p className="fs-1">9.6M</p>
                            <p className="fs-5 lh-1 balance">Home shortfall across Europe - structural, enduring demand</p>
                        </div>
                    </Card>
                </div>
            </section>


            {/* PILLARS */}
            <section className="block bg-secondary">
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
            </section>


            {/* ADVISORS */}
            <section className="block bg-primary">
                <div className="container center">
                    <p className="fs-2 fw-500 caps">Founding Advisors</p>
                </div>

                <div className="container columns-5 gap-sm center">
                    {
                        advisors.profiles.map( (profile, index) => (
                            <Pop key={index}>
                                <SpeakerCard
                                    url={``}
                                    photoUrl={profile.avatar[0].url}
                                    fullName={profile.title}
                                    positions={profile.positions}
                                    color={'white'}
                                />
                            </Pop>
                        ))
                    }
                </div>

                <div className="container center">
                    <div className="button-grid">
                        {/* <p><Pop><Button href={`/living/speakers`} label={`View All Speakers`}/></Pop></p> */}
                        <p><Pop><Button href={`/living/programme`} label={`Full Agenda`}/></Pop></p>
                    </div>
                </div>
            </section>


            {/* QUOTES */}
            <section className="block bg-secondary">
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

                <div className="container columns-3 gap-sm">
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

            
            {/* FHS EVENTS */}
            <section className="block bg-secondary">
                <div className="container center">
                    <p className="fs-1 fw-500 caps">FHS Around the World</p>
                </div>

                <div className="container columns-3 maxw-55 gap-xs">
                    {
                        data.events.map(event => {
                            console.log(event)
                            return (
                                <div key={event.id} className={`columns-1 gap-xs`}>                                
                                    {
                                        event.streams &&
                                        event.streams.map( stream => (
                                            <EventCardLite
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
                                            />
                                        ))
                                    }
                                </div>
                            )
                        })
                    }
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
            <p className="fs-4 caps center mb-sm">{title}</p>
            <div
                style={{
                    position: `relative`,
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                    justifyContent: `center`,

                    aspectRatio: 1,
                    border: `1px solid var(--accent)`,
                    borderRadius: `50rem`,
                    padding: `2rem`,
                    
                    textAlign: `center`,
                }}
            >
                <p
                    className="fw-600"
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
                advisors: entry(site: "${process.env.SITE_HANDLE_LIVING}", section: "profileGroups", id: "310153") {
                    ... on profileGroups_default_Entry {
						id
						title
						profiles {
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