import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'
import { useLenis } from '@studio-freight/react-lenis'

import _ from 'lodash'
import { format } from 'date-fns'
import HTMLReactParser from 'html-react-parser'

import { motion } from "framer-motion"

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Header } from '../../../fuselage/theme/2025/ais/common/header/header'
import { Footer } from '../../../fuselage/theme/2025/ais/common/footer/footer'

import { AisMotifBackground, AisLockup } from '../../../fuselage/theme/2025/ais/ais-brand/ais-brand'
import { HeroUnitVideo } from "../../../fuselage/theme/2025/ais/blocks/hero-unit-video/hero-unit-video"
import { Button } from "../../../fuselage/theme/2025/ais/components/button/button"

import { Pop, Fade, Slide } from "../../../fuselage/theme/2023/ae/layout/animation/animation"
import { Reveal } from "../../../fuselage/animation/reveal"
import { Callout } from '../../../fuselage/theme/2024/world/blocks/callout/callout'
import HubspotForm from '../../../fuselage/components/hubspot-form/hubspot-form'

import { QuoteSlider } from '../../../fuselage/theme/2024/world/components/quote-slider/quote-slider'
import { StopwatchIcon } from "../../../fuselage/components/icons/icons"

import { convertSeconds, sortSpeakers } from '../../../lib/agenda-utils'

import { filterSessionsByTopic } from '../../../lib/swapcard/agenda-utils'

import { BrandBackground } from '../../../fuselage/theme/2025/ais/theme/brand-background'
import { FixedBackgroundImage } from '../../../fuselage/theme/2025/ais/blocks/fixed-background-image/fixed-background-image'


import CSS from '../../../fuselage/theme/2025/ais/css/homepage.module.css'

import CSSagenda from '../../../css/app/agenda-world-2024.module.css'
import CSSlite from '../../../css/app/agenda-world-2024-aag.module.css'


const DELEGATIONS_DATA = [
    {
        country: "Arab Republic of Egypt",
        head: "Deputy Minister of Tourism and Antiquities",
        names: [
            "Ambassador of the Arab Republic of Egypt to the UAE",
            "Director General of International Relations and Agreements",
            "Deputy Ministers of Housing, Utilities and Urban Communities"
        ]
    },
    {
        country: "Republic of Cabo Verde",
        head: "Minister of Tourism & Transport",
        names: [
            "President of the Board of the Cabo Verde Tourism Institute",
            "CEO of Cabo Verde Trade Invest",
            "Advisor to the Minister"
        ]
    },
    {
        country: "Federal Republic of Nigeria",
        head: "Minister of Arts, Culture, Tourism and the Creative Economy",
        names: [
            "Permanent Secretary",
            "Director of International Tourism Relations & Cooperation",
            "Special Assistant to the Minister"
        ]
    },
    {
        country: "Republic of Botswana",
        head: "Minister of Tourism and Environment",
        names: [
            "The Permanent Secretary",
            "Chief Tourism Officer, Botswana Investment & Trade Center",
            "CEO of Botswana Tourism Organisation"
        ]
    },
    {
        country: "Republic of Rwanda",
        head: "Ambassador of the Republic of Rwanda to the UAE",
        names: [
            "Second Counsellor",
            "Communications and Trade Officer"
        ]
    },
    {
        country: "Republic of Liberia",
        head: "Minister of Information, Cultural Affairs & Tourism",
        names: [
            "Presidential Special Envoy on Toursim",
            "Deputy Minister for Cultural Affairs and Toursim",
            "Director, Bureau of Tourism",
            "Ambassador of the Republic of Liberia to the UAE",
            "First Secretary, Embassy of Republic of Liberia"
        ]
    },
    {
        country: "Republic of Senegal",
        head: "Minister of Culture, Handicrafts and Tourism",
        names: [
            "Director of Tourism Promotion",
            "Direction of Investments and Tourism Developments",
            "Director of General Administration and Equipment",
            "Director General of SAPCO",
            "Ambassador of the Republic of Senegal to the UAE"
        ]
    },
    {
        country: "Republic of The Gambia",
        head: "Minister of the Ministry of Tourism, Arts and Culture",
        names: [
            "Permanent Secretary",
            "Director General Gambia Toursim Board",
            "Director General Gambia Toursim and Hospitality Institute",
            "Director General National Center for Arts & culure"
        ]
    },
    {
        country: "Republic of Kenya",
        head: "Principal secretary, State Department for Tourism",
        names: [
            "Head of Tourism Investment and Finance Directorate",
            "Chief Executive Officer (CEO), Tourism Fund",
            "CEO, Kenya Safari Lodges and Hotels",
            "Technical Assistant to the Principal Secretary"
        ]
    },
    {
        country: "Kingdom of Morocco",
        head: "General Manager of the Tourism Engineering Company",
        names: [
            "Ambassador of the Kingdom of Morocco to the UAE"
        ]
    },
    {
        country: "Republic of Angola",
        head: "Minister of Tourism",
        names: [
            "Ambassador of Republic of Angola to the UAE",
            "First Secretary, Embassy of Republic of Angola"
        ]
    },
    {
        country: "Kingdom of Lesotho",
        head: "Minister of Tourism, Sports, Arts and Culture",
        names: []
    },
    {
        country: "Republic of Chad",
        head: "Minister of Tourism Development, Culture and Crafts",
        names: []
    },
    {
        country: "Republic of Côte d'Ivoire",
        head: "Minister of Tourism and Leisure",
        names: [
            "Ambassador of the Republic of Côte d'Ivoire to the UAE"
        ]
    },
    {
        country: "State of Libya",
        head: "Ambassador of the State of Libya to the UAE",
        names: []
    },
    {
        country: "Democratic Republic of the Congo",
        head: "Ambassador of the Democratic Republic of Congo to the UAE",
        names: [
            "Minister of Tourism"
        ]
    },
    {
        country: "Republic of South Africa",
        head: "Charge de Affairs of the Republic of South Africa to the UAE",
        names: [
            "Minister of Tourism",
            "Chairperson - Tourism Business Council of South Africa",
            "Regional General Manager",
            "Special Projects in the South African Department of Tourism",
            "Community Outreach Officer for the Minister of Tourism",
        ]
    },
        {
        country: "Republic of Mauritius",
        head: "Minister of Tourism",
        names: [
            "Principal Tourism Planning Executive of the Ministry of Tourism",
            "Advisor on Information Matters of the Hon. Minister",
            "Permanent Secretary of the Ministry of Tourism",
        ]
    },
    {
        country: "Republic of South Sudan",
        head: "Diplomat, Embassy of the Republic of South Sudan - Abu Dhabi",
        names: []
    },
    {
        country: "Republic of Zimbabwe",
        head: "Minister of Tourism and Hospitality Industry",
        names: []
    },
    {
        country: "Mozambique",
        head: "Secretary of State for Tourism",
        names: []
    },

    {
        country: "Republic of Madagascar",
        head: "",
        names: []
    },
    
]


export default function Page ({ sessions, locations }) {

    const lenis = useLenis()


    console.log('sessions:', sessions)
	// console.log('locations [swc]:', locations)
    // console.log('AIS sessions:', filterSessionsByTopic( sessions, 'RmllbGRWYWx1ZV8yODE3NDU1NA==' ))
    

    return (
        <>
            <Head>
                <title>UAE Africa Tourism Investment Summit</title>
                <meta name="UAE Africa Tourism Investment Summit" content="page-title"></meta>
            </Head>

            <BrandBackground/>

         

            <Header overlaid inverse />

            <HeroUnitVideo video={'https://cms.thebench.com/assets/video/fhs-2024-world-opt.mp4 '} poster={'/assets/video/fhs-2024-world-opt-poster.jpg'}>

                <div className={`${CSS.aisLogo} mx-auto mt-lg mb-sm`}>
                    <AisLockup />
                </div>

                <Pop delay={.5}>
                    <p className='fs-4 fw-600 c-accent caps center mt-sm'>27 October 2025 <br/>08:30–13:00</p>
                </Pop>


                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-5 c-white center mt-xs maxw-45 mx-auto`} 
                >
                    Held as part of <strong className='fw-600'>FHS World</strong>, this summit aims to enhance economic and tourism partnerships between the UAE and African nations.
                </motion.p>
                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-5 c-accent center mt-sm maxw-45 mx-auto`} 
                >
                   This Summit is by invitation only. FHS Pass Delegate holders do not have access, as attendance is being managed directly by the Ministry of Economy and Tourism.
                </motion.p>


                {/* PATRONAGE */}
            
                <div className="container center pt-lg">
                    <p className="fs-3 fw-600 c-secondary caps pb-sm">Under the Patronage of</p>

                    <div className={CSS.patronBox}>

                        <div className={CSS.patronBoxAvatar}>
                            <Pop>
                                <div className={CSS.avatar}>
                                    <Image src={"/assets/img/ais/mohammed-bin-rashid-al-maktoum.jpg"} layout='fill' alt="" unoptimized />
                                </div>
                            </Pop>
                        </div>

                        <div className={CSS.patronBoxContent}>
                            <Pop>
                                <p className="fs-4 fw-600">His Highness Sheikh Mohammed bin Rashid Al Maktoum</p>
                                <p className="fs-5 mt-xxs">UAE Vice President, Prime Minister and Ruler of Dubai</p>

                            </Pop>
                        </div>
                    </div>
                </div>
    


                <Pop>
                    <div className="container maxw-60 pt-lg">
                            <p className='c-peach center pb-sm caps ls-2'>Brought to you by:</p>
                        <section className='flex ai-center gap-md jc-center'>
                            <div style={{ width: 400, maxWidth: '70vw', display: 'inline-block' }}>
                                <img src="/assets/img/ais/uae-moet-inverse.png" alt="logo" width="100%" />
                            </div>
                            <div style={{ width: 150, maxWidth: '70vw', display: 'inline-block' }}>
                                <img src="/assets/site/the-bench-inverse@2x.png" alt="logo" width="100%" />
                            </div>
                        </section>
                    </div>
                </Pop>

                <div className="container pt-lg">
                    <Pop>
                        <Button href={`#agenda`} decal={`fs-5`}>View Agenda</Button>
                    </Pop>
                </div>

            </HeroUnitVideo>


            <FixedBackgroundImage backgroundImageUrl={`/assets/img/ais/africa-generic.jpg`}>
                <div className="container center">
                    <p className='fs-1 fw-600 c-accent lh-1'>Confirmed Ministers and Government Authorities</p>
                </div>

                <div className="container columns-3 gap-md">

                    {
                        DELEGATIONS_DATA.map((delegation, index) => <Delegation key={index} delegation={delegation} />)
                    }

                </div>
            </FixedBackgroundImage>

            

            {/* CALLOUTS */}
            <FixedBackgroundImage backgroundImageUrl={`/assets/img/ais/ais-01.jpg`} flex>
                <Pop inline>
                    <div className='maxw-40 bg-primary p-sm rad-sm center formatted' style={{ backgroundColor: `rgba(60, 26, 82, 0.85)`}}>
                        <Pop inline delay={.1}>
                            <p className='fs-2 fw-600 lh-2'>Why Africa</p>
                        </Pop>
                        <Pop inline delay={.2}>
                            <p className="fs-5 c-white mt-sm">Africa&apos;s tourism and hospitality sector is expanding rapidly, with <strong className='fw-600'>577</strong> hotels and resorts in development, totaling <strong className='fw-600'>104,444</strong> rooms, a 13.3% year-on-year increase, outpacing global growth. International tourist arrivals reached <strong className='fw-600'>74</strong> million in 2024, up 12% from 2023 and 7% above 2019 levels.</p>
                        </Pop>
                    </div>
                </Pop>
            </FixedBackgroundImage>
            
            <FixedBackgroundImage backgroundImageUrl={`/assets/img/ais/ais-02.jpg`} flex>
                <Pop inline>
                    <div className='maxw-40 bg-primary p-sm rad-sm center formatted' style={{ backgroundColor: `rgba(60, 26, 82, 0.85)`}}>
                        <Pop inline delay={.1}>
                            <p className='fs-2 fw-600 lh-2'>Ministry of Economy & Tourism partners with The Bench to host &apos;UAE Africa Tourism Investment Summit&apos; at FHS World 2025</p>
                        </Pop>
                        <Pop inline delay={.2}>
                            <p className="fs-5 c-white mt-sm">The event will gather <strong className='fw-600'>250+</strong> senior officials, investors, and tourism leaders from <strong className='fw-600'>53</strong> African nations to drive partnerships and boost investment in hospitality, tourism, and related sectors.</p>
                        </Pop>
                    </div>
                </Pop>
            </FixedBackgroundImage>



            {/* AGENDA */}
            <section id="agenda" className="block">
                <div className="container center">
                    <p className='fs-2 fw-600 caps c-secondary'>Agenda</p>
                </div>

                <div className="container maxw-50 columns-1 gap-xs">
                    {
                        sessions.length &&
                        filterSessionsByTopic( sessions, 'RmllbGRWYWx1ZV8yODE3NDU1NA==' ).map( session => (

                            <Pop key={session.id}>

                                <div className={CSSagenda.sessionsWrapper} >
                                    <div className={CSSlite.session} style={{ backgroundColor: `var(--primary)` }}>

                                        <div className={`${CSSlite.sessionHeader} fw-300 c-white`}>
                                            {
                                                session.beginsAt && session.endsAt ?
                                                    <>
                                                        {format( new Date(session.beginsAt), "HH:mm" )} - { format( new Date(session.endsAt), "HH:mm" )}
                                                        <p className='mt-xxs'>
                                                            <StopwatchIcon fill={'var(--secondary)'}/>
                                                            <span className='fs-sm fw-500 c-secondary'> { convertSeconds(parseInt(new Date(session.endsAt).getTime() - new Date(session.beginsAt).getTime())/1000) }</span>
                                                        </p>                                                    
                                                    </>
                                                : null
                                            }

                                        </div>

                                        <div className={`${CSSlite.sessionContent} | columns-1 gap-xs`}>
                                            
                                            <p className={`fs-5 fw-4500 c-white`}>
                                                { session.titleTranslations[0].value }
                                            </p>
                                        
                                            {
                                                session.descriptionTranslations.length ?
                                                    HTMLReactParser( session.descriptionTranslations[0].value )
                                                : null
                                            }
                                            
                                            { sortSpeakers(session.speakers) }
                                        </div>

                                    </div>
                                </div>
                            </Pop>
                        
                        ))
                    }
                </div>

                <div className="container center">
                    <Pop>
                        <Button href={`/world/agenda`}>View Full FHS World Agenda</Button>
                    </Pop>
                </div>
            </section>




            {/* TESTIMONIALS */}
            <section className="block bg-default">
                <div className="container maxw-70">

                    <QuoteSlider 
                        color={'white'}
                        testimonials={[
                            {
                                quote: "The UAE Africa Tourism Investment Summit will serve as a strategic platform for exchanging insights and expertise between the UAE and African nations, supporting sustainable development efforts through the establishment of projects and partnerships that serve mutual interests. This aligns with the objectives of 'We the UAE 2031' vision, which aims to position the country as a leading global hub for the new economy, driven by international partnerships and future-focused sectors.",
                                avatar: [
                                    {
                                        url: "/assets/img/ais/quotes/badreya-al-maidoor.jpg",
                                        width: "800",
                                        height: "800"
                                    }
                                ],
                                fullName: "H.E. Badreya Al Maidoor",
                                jobTitle: "Assistant Undersecretary of Support Services Sector at Ministry Of Economy, UAE"
                            },
                            {
                                quote: "We are honoured to partner with the UAE Ministry of Economy & Tourism to launch the UAE Africa Tourism Investment Summit as part of FHS World 2025. This collaboration reflects our shared ambition to accelerate investment and development across Africa's hospitality sector. The UAE has long served as a bridge between global capital and emerging markets, and this new platform will strengthen the connections between African nations and the international investment community. Together, we are creating an ecosystem that fosters meaningful dialogue, unlocks deal flow, and drives long-term economic growth across the continent.",
                                avatar: [
                                    {
                                        url: "/assets/img/ais/quotes/jonathan-worsley.jpg",
                                        width: "800",
                                        height: "800"
                                    }
                                ],
                                fullName: "Jonathan Worsley",
                                jobTitle: "Chairman & CEO of The Bench"
                            }
                        ]} />

                </div>
            </section>




            {/* FORM */}
            <section id="form" className="block bg-primary-2">
                <div className="container formatted center maxw-50">
                    <p className="fs-1 fw-600">Register Interest for UAE Africa Tourism Investment Summit</p>
                    <p className='fs-6 c-accent'>Please note that this is an <strong className='caps'>invitation-only event</strong> for select C-level operators and investors, and registration does not guarantee attendance for all applicants.</p>
                </div>
                <div className="container maxw-70">
                    <HubspotForm portalId='14527187' formId='2bea127b-7387-446e-8d0e-7404e01b2933' />
                </div>
            </section>


            <Footer />
         
            
            <LenisScroller />
        </>
    )
}

Page.theme = 'global-2024'



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

						plannings(eventId: "${process.env.SWAPCARD_EVENT_ID_AE_2025}", page: 1, pageSize: 500) {
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
							}
							speakers {
								firstName
								id
								jobTitle
								lastName
								photoUrl
								organization
								biography
								withEvent(eventId: "${process.env.SWAPCARD_EVENT_ID_AE_2025}") {
									eventProfile {
										type
										withEvent(eventId: "RXZlbnRfMTczOTgzMg==") {
											speakerOnPlannings {
												id
												title
												beginsAt
												endsAt
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
					"eventId": process.env.SWAPCARD_EVENT_ID_AE_2025,
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



const Delegation = ({ delegation }) => {
    return (
        <Pop>
            <div
                className='formatted'
                style={{
                    height: `100%`,
                    backgroundColor: `rgba(60, 26, 82, 0.85)`,
                    padding: `var(--space-sm)`,
                    borderRadius: `1rem`
                }}
            >
                <Pop delay={.1}><p style={{ textWrap: 'balance' }} className='fs-5 fw-600 c-accent mb-xxs'>{delegation.country}</p></Pop>
                
                <ul>
                    {
                        delegation.head &&
                        <li style={{ textWrap: 'balance'}}>{delegation.head}</li>
                    }

                    {
                        delegation.names.length
                            ? delegation.names.map((name, index) => <li key={index}>{ name }</li>)
                            : null
                    }
                </ul>

            </div>
        </Pop>
    )
}