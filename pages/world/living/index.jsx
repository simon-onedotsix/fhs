import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import _ from 'lodash'
import useCustomMediaQuery from '../../../hooks/useCustomMediaQuery'

import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'

import { motion } from "framer-motion"


// BEGIN new static nav
import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header-living'
import { LIVING_FHS_WORLD as header } from '../../../fixtures/nav'

// END new static nav


import { Footer } from '../../../fuselage/theme/2025/brf/common/footer/footer'
import { HeroUnitVideo } from "../../../fuselage/theme/2024/world/blocks/hero-unit-video/hero-unit-video"
import { Button } from "../../../ui/buttons/button"

import { Pop, Fade } from "../../../fuselage/theme/2023/ae/layout/animation/animation"
import { Callout } from '../../../fuselage/theme/2024/world/blocks/callout/callout'
import HubspotForm from '../../../fuselage/components/hubspot-form/hubspot-form'

import { Quotation } from "../../../fuselage/theme/2025/sa/components/quotation/quotation"
import { QuoteSlider } from '../../../fuselage/theme/2024/world/components/quote-slider/quote-slider'
import { SpeakerCarousel } from '../../../fuselage/theme/2024/world/blocks/speaker-carousel/speaker-carousel'
import { SpeakerCard } from '../../../fuselage/components/speaker-card/speaker-card'
import { AgendaSpeakerCard } from '../../../fuselage/components/agenda-speaker-card/agenda-speaker-card'

import { ThemesSlider } from "../../../ui/modules/themes-slider"
import { EventCard } from "../../../ui/components/event-card"
import { Slider } from '../../../ui/components/slider'

import Ticker from 'framer-motion-ticker'


import CSS from '../../../css/app/agenda-world-2024.module.css'



const CONFIRMED_SPEAKER_DATA = [
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDY1MDgzNTg=`,
        photoUrl: "https://static.swapcard.com/public/images/03a47481a1344b03a90e04c057017377.jpeg",
        fullName: "Ho Kwon Ping",
        jobTitle: "Founder and Executive Chairman",
        company: "Banyan Group",
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDA3OTg1MTY=`,
        photoUrl: 'https://static.swapcard.com/public/images/0a8fedf8c19444388ccf07bf5208b2c7.jpeg',
        fullName: 'Riyan Itani',
        jobTitle: 'Director and Founder',
        company: 'Global Branded Residences Ltd.',
    },
    {
        url: "/world/speakers/RXZlbnRQZW9wbGVfNDY4MTM0MDA=",
        photoUrl: "https://static.swapcard.com/public/images/22a5723e4e294c73987b5bee25753722.jpeg",
        fullName: "Jaidev Menezes",
        jobTitle: "RVP Mixed-Use Development EMEA",
        company: "Marriott International",
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDY0NDczMzk=`,
        fullName: "Rahul Salgia",
        jobTitle: "Founder & CEO",
        company: "DigiValet",
        photoUrl: "https://static.swapcard.com/public/images/e2225a6fcb174f869dec0029e844b5b7.jpeg",
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
import { THEMES_DATA } from '../../living'
import { TESTIMONIALS_DATA } from '../../living'
import { ASSET_CLASS_DATA } from '../../living/why-now'
import { EVENT_DATA } from '../..'
const livingEventIds = new Set(['246252', '259029', '314682', '246252333'])
const FHS_EVENTS = EVENT_DATA.filter(event => !livingEventIds.has(event.id))
const LIVING_EVENTS = EVENT_DATA.filter(event => livingEventIds.has(event.id))


export default function Page ({ speakers }) {

    const lenis = useLenis()
    const isDesktop = useCustomMediaQuery('(min-width: 600px)')

    
    // filter for fhs living speakers
	const fhsLivingSpeakers = []
	speakers.filter(speaker => {
		if (speaker.withEvent.fields.some(field => field.definition?.id === "RmllbGREZWZpbml0aW9uXzg3NjU0Nw==")) {
			fhsLivingSpeakers.push(speaker)
		}
	})
	// console.log('fhsLivingSpeakers:', fhsLivingSpeakers)

    
    // console.log('sessions:', sessions)
    // console.log('speakers:', speakers)
    // console.log('ordered:', orderedSpeakers)
    

    return (
        <>
            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
            
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/living/favicon-16x16.png" sizes="16x16" />
                <meta content="https://cms.thebench.com/assets/content-library/img/FHS-Living/FHS-Living-Launch-PR.jpg" property="og:image"></meta>
                <title>FHS Living Dubai</title>
                <meta name="description" content="Held adjacently with FHS World, this exclusive one-day forum explores the thriving sector of Branded Residences."></meta>
            </Head>
            
            <EventsBar site={'/world/living'} />
            <Header
                site={`/world/living`}
                parentSite={`/world`}
                region={`At FHS World`}
                parentHandle={`FHS World`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />



            <HeroUnitVideo video={'https://cms.thebench.com/assets/video/brf-2025-asia.mp4'} poster={'/assets/video/brf-2025-asia.jpg'}>
                
                {/* transition boxout */}
                <section style={
                    isDesktop
                        ? { position: `absolute`, top: `var(--space-sm)`, left: `var(--space-sm)` }
                        : { paddingBottom: `2rem` }
                }>
                    <Pop>
                        <div style={{ width: isDesktop ? `16rem` : `100%`, padding: `1.5rem 2rem`, backgroundColor: `var(--burgundy)`, borderRadius: `1rem`, textAlign: `center` }}>    
                        
                            <Pop delay={.1}>
                                <p className='fs-5 lh-2'><strong>Branded Residences Forum</strong> has been rebranded to <strong>FHS&nbsp;Living</strong></p>
                            </Pop>
                            
                        </div>
                    </Pop>
                </section>

                <p className='fs-0 fw-600 caps lh-1 center maxw-50 mx-auto'>FHS Living</p>
                <p className='fs-4 fw-600 c-white caps center mt-sm'>1st October 2026</p>

                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-5 c-white center mt-xs maxw-45 mx-auto`} 
                >
                    Held adjacently with <strong>FHS World</strong>, this exclusive one-day forum explores the alternative asset classes in the living sector.
                </motion.p>
                
                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-5 c-white center mt-xs maxw-45 mx-auto`} 
                >
                    <i>FHS Living will take place on the Summit Stage entirely on Day 3. Access to FHS Living is limited to Premium and FHS Living Pass holders.</i>
                </motion.p>

                <div className="mt-sm center">
                    <Pop>
                        <Button href={'/world/living/agenda'} label={`View Agenda`} inverse/>
                    </Pop>
                </div>


            </HeroUnitVideo>

            
            {/* SPONSORS */}
            <section className="block" style={{ position: `relative`, zIndex: 2 }}>
                <div className="container center">
                    <p className='fs-1 fw-600'>2026 Partners</p>
                </div>
                <Pop>
                    <div className="container pt-lg">
                        <section>
                            <p className='c-peach center pb-sm caps ls-2'>Founder Partner</p>
                            <div style={{ width: `100%`, maxWidth: '22rem', margin: '0 auto' }}>
                                <img src="/assets/img/brf/accor-one-living.svg" alt="logo" width={`100%`} />
                            </div>
                        </section>
                    </div>
                    <div className="container pt-sm columns-4 gap-md maxw-70">
                        <section>
                            <p className='c-peach center pb-sm caps ls-2'>Strategic Partner</p>
                            <div style={{ width: 150, maxWidth: '30vw', margin: '0 auto' }}>
                                <img src="/assets/img/brf/global-branded-residences.svg" alt="logo" />
                            </div>
                        </section>
                        <section>
                            <p className='c-peach center pb-sm caps ls-2'>Partner</p>
                            <div style={{ width: `100%`, maxWidth: '15rem', margin: '0 auto' }}>
                                <img src="/assets/img/brf/digivalet.png" alt="logo" width={`100%`} />
                            </div>
                        </section>
                        <section>
                            <p className='c-peach center pb-sm caps ls-2'>Partner</p>
                            <div style={{ width: `100%`, maxWidth: '15rem', margin: '0 auto' }}>
                                <img src="/assets/img/brf/sectorlight.svg" alt="logo" />
                            </div>
                        </section>
                        <section>
                            <p className='c-peach center pb-sm caps ls-2'>Partner</p>
                            <div style={{ width: `100%`, maxWidth: '15rem', margin: '0 auto' }}>
                                <img src="/assets/img/brf/the-ascott-inverse.svg" alt="logo" />
                            </div>
                        </section>
                    </div>
                    <div className="container">
                        <section>
                            <p className='c-peach center pb-sm caps ls-2'>Media Partner</p>
                            <div style={{ width: `100%`, maxWidth: '15rem', margin: '0 auto' }}>
                                <img src="/assets/img/brf/bresi.png" alt="logo" width={`100%`} />
                            </div>
                        </section>
                    </div>
                </Pop>
            </section>
               

            {/* SPEAKERS */}
            <section className="block bg-secondary">
                <div className="container center">
                    <p className="fs-1 fw-600">2026 Speakers</p>
                </div>

                <div className="container columns-5 gap-sm">
                    {
                        fhsLivingSpeakers.map( speaker => {

                            return (
                                <div key={speaker.id}>
                                    <Link href={`/world/speakers/${speaker.id}`}>
                                        <Pop>
                                            <a className={CSS.avatar} >
                                                {
                                                    speaker.photoUrl ? 
                                                    <Image 
                                                        src={speaker.photoUrl} 
                                                        width={370} 
                                                        height={370} 
                                                        alt=""
                                                        style={{ borderRadius: `1rem`, overflow: `hidden` }}
                                                    />
                                                    : 
                                                    <Image 
                                                        src='/assets/ui/avatar-fallback.png' 
                                                        width={370} 
                                                        height={370} 
                                                        alt=""
                                                        style={{ borderRadius: `1rem`, overflow: `hidden` }}
                                                    />
                                                }
                                            </a>
                                        </Pop>
                                    </Link>
                                    <div>
                                        <p className='mt-xs' >
                                            {/* <p style={{ color: `lime`, fontSize: 10 }}>{speaker.id}</p> */}
                                            <span className='fw-600'>{speaker.firstName} {speaker.lastName}</span> 
                                            <br/>{speaker.jobTitle} 
                                            <br/>{speaker.organization}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            
            {/* WHY LIVING? */}
            <section className="block pt-md">
                <div className="container center">
                    <p className="fs-1 fw-600">Why Living?</p>
                </div>

                <div className="container columns-3 gap-md">
                    {
                        ASSET_CLASS_DATA.map((card, index) => (
                            <article key={index} className="formatted">
                                <Pop>
                                    <img src={card.imageUrl} alt="" width={`100%`} style={{ borderRadius: `1rem`}} />
                                </Pop>
                                <p className="fs-4 fw-600 mt-xxs">{card.heading}</p>
                                <p>{card.body}</p>
                            </article>
                        ))
                    }
                </div>
            </section>
            

            {/*ASSET CLASSES */}
            <section className={`block bg-secondary`}>
                <div className="container center pb-sm">
                    <p className="fs-1 fw-600">Asset Classes</p>
                </div>

                <ThemesSlider
                    heading={`Asset Classes` }
                    data={THEMES_DATA}
                    link={''}
                    linkLabel={''}
                />
            </section>


            {/* TESTIMONIALS */}
            <section className="block bg-default">
                <div className="container maxw-70">

                    <QuoteSlider 
                        color={'white'}
                        heading={"Testimonials"}
                        testimonials={TESTIMONIALS_DATA} />

                </div>
            </section>


           {/* FHS EVENTS */}
            <section className="block bg-primary">

                {/* LIVING */}
                <div className="container center">
                    <p className="fs-2 fw-500 caps lh-1">Upcoming FHS Living Events</p>
                </div>

                <div className="container columns-4 gap-xs">
                    {
                        _.orderBy(LIVING_EVENTS, 'startDate').map(event => {
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

            <Footer />
            <LenisScroller />
        </>
    )
}

Page.theme = 'living'





export async function getStaticProps() {

	const swapcardData = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query eventPerson(
						$eventId: ID!
						$cursor: CursorPaginationInput
						$filters: [EventPersonFilter!]
					){
						eventPerson(eventId: $eventId, cursor: $cursor, filters: $filters) {
							nodes {
								id
								type
								firstName
								lastName
								jobTitle
								organization
								photoUrl

								speakerOnPlannings {
									id
									title
									categories
									fields {
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
								}

								withEvent(eventId: $eventId) {
									fields {
										... on SelectField {
											translations {
												value
												language
											}
											definition {
												id
												translations {
													name
													language
												}
											}
										}
										... on TextField {
											definition {
												name
												translations {
													name
												}
												id
											}
											locale
											value
											id
										}
									}
								}
								}
							}
						}
				`,
				variables: {
						"eventId": process.env.SWAPCARD_EVENT_ID_AE_2026,
						"cursor": {
							"first": 300
						},
						"filters": {
							"shouldBeInGroups": "RXZlbnRHcm91cF82NTQ4MTQ="
						}
					}
			})
		}
	)
	const speakerData =  await swapcardData.json()
  

    if ( speakerData ) return { 
        props: { 
            speakers: speakerData.data.eventPerson.nodes,
        } 
    }

	return { props: {} }
}