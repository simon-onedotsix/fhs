import { gql } from "@apollo/client"
import craftApolloClient from "../../pages/api/apollo"
import _ from 'lodash'

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import handleSeomaticMeta from '../../lib/seomatic'

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"
import { Reveal } from "../../fuselage-africa/animation/reveal"

import { Header } from '../../fuselage/theme/2025/africa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/africa/common/footer/footer'

import { HeroUnitVideo } from "../../fuselage-africa/blocks/hero-unit-video/hero-unit-video"
import { SpeakerCarousel } from "../../fuselage-africa/blocks/speaker-carousel/speaker-carousel"
import { SpeakerCard } from "../../fuselage-africa/components/speaker-card/speaker-card"
import { ImpactFiguresGrid, ImpactFigures, ImpactFigure, ImpactFigureSpacer } from "../../fuselage-africa/blocks/impact-figures/impact-figures"
import { LogoGrid } from '../../fuselage-africa/layout/logo-grid/logo-grid'

import { Button, ButtonGrid } from "../../fuselage/theme/2025/africa/components/button/button"
import { PopupOverlay } from "../../fuselage/components/popup-overlay/popup-overlay"
import { ArrowButton } from "../../fuselage-africa/components/arrow-button/arrow-button"

import { Intro } from "../../fuselage/theme/2025/africa/blocks/intro/intro"



import CSS from '../../fuselage/theme/2025/africa/css/homepage.module.css'
import partnerCSS from '../../fuselage/theme/2025/africa/css/partners.module.css'



export default function Home ({ seomatic, partners, speakers }) {

    const [ showModal, setShowModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState()

    const STRATEGIC_PARTNERS = partners.find(group => group.id === "274375")

    
    // console.log('seomatic:', seomatic)
    // console.log('SEO — title:', JSON.parse(entry.seomatic.metaTitleContainer))
    // console.log('SEO — tags:', JSON.parse(entry.seomatic.metaTagContainer))
    // console.log('speakerData:', speakerData)

    // console.log('selectedCmsSpeakers:', selectedCmsSpeakers)
    // console.log('partners:', partners)



    // scroll animation
    let introRef = useRef(null)
    let { scrollYProgress } = useScroll({ 
        target: introRef,
        offset: ["start 75%", "end 0%"]
    })

    let y = useTransform(scrollYProgress, [0, 1], ["-15%", "5%"])
    


    let orderedSpeakers = _.orderBy( speakers, [ speaker => speaker.lastName.toLowerCase()], ['asc'])
        
    let customOrderedSpeakers = _.sortBy(orderedSpeakers, [
        (speaker => speaker.lastName === 'Heinecke' && speaker.firstName === "William" ? 0 : 1),
        (speaker => speaker.lastName === 'Meyer' && speaker.firstName === "Dr. Ivan" ? 0 : 1),
        (speaker => speaker.lastName === 'Green' && speaker.firstName === "David" ? 0 : 1),
        (speaker => speaker.lastName === 'Nubi' && speaker.firstName === "Pelumi" ? 0 : 1),
        (speaker => speaker.lastName === 'Granet' && speaker.firstName === "Olivier" ? 0 : 1),
        
        (speaker => speaker.lastName === 'Hutchinson' && speaker.firstName === "Guy" ? 0 : 1),
        (speaker => speaker.lastName === 'Osei Baffour' && speaker.firstName === "Magdaline" ? 0 : 1),
        (speaker => speaker.lastName === 'du Plessis' && speaker.firstName === "Dr Morné" ? 0 : 1),
        (speaker => speaker.lastName === 'Getachew Belete' && speaker.firstName === "Tadiwos" ? 0 : 1),
        (speaker => speaker.lastName === 'Tshivhengwa' && speaker.firstName === "Tshifhiwa" ? 0 : 1),
    ])




    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
                { handleSeomaticMeta( seomatic ) }
            </Head>
        
            <Header overlaid inverse />

            <HeroUnitVideo video={'https://cms.thebench.com/assets/video/ahif-2024-opt.mp4'} poster={'https://cms.thebench.com/assets/video/ahif-2024-opt-poster.jpg'}>
                
                <p className={CSS.headline}>
                    <span className="c-secondary"><Reveal>Together</Reveal></span> <Reveal><span className="c-secondary">we</span>&nbsp;invest</Reveal>
                </p>

                <p className="fs-4 mt-xs"><span className="fw-600">31 March - 1 April 2026</span> <br /> Radisson Blu Hotel, Nairobi Upper Hill, Kenya</p>

                <div className='mt-sm'>
                    <ButtonGrid>
                        <Pop inline delay={.1}>
                            <Button href={'https://www.eventbooking.uk.com/AHIF-2026?_ga=2.7860276.723499015.1756208208-747783354.1720527023'}>Purchase Pass</Button>
                        </Pop>
                        <Pop inline delay={.2}>
                            <Button href={'/africa/download-prospectus'}>Download Prospectus</Button>
                        </Pop>
                        <Pop inline delay={.2}>
                            <Button href={'/africa/get-involved-in-2026'}>Get Involved in 2026</Button>
                        </Pop>
                    </ButtonGrid>
                </div>

                <div className={CSS.flashContainer}>
                    <Pop>

                        <div className={CSS.flash}>
                            <p className="fs-3 fw-500 caps lh-1 c-primary">New for 2025!</p>
                            <p className="fw-600 fs-2 lh-1 mt-xxs c-secondary">UAE Africa Tourism Investment Summit</p>
                            <Pop inline delay={.2}>
                                <p className='mt-xs'><ArrowButton href={`https://www.futurehospitality.com/world/ais`} theme={{ arrow: `var(--secondary)`, border: `var(--secondary)`, label: `var(--secondary)`}}>Learn more</ArrowButton></p>
                            </Pop>
                        </div>
                    </Pop>
                </div>

            </HeroUnitVideo>


            
            <Intro>
                <div className="formatted" style={{ overflow: 'hidden' }}>
                    <Slide>
                        <p className="fs-5 maxw-45">FHS Africa is the continent&apos;s leading hospitality investment forum, uniting industry leaders, investors, and operators to drive growth and innovation. With a legacy of impactful connections and over <strong className="fw-600">$459&nbsp;million</strong> in business opportunities, this is where Africa&apos;s hospitality sector meets the world. Join us in <strong className="fw-600">Nairobi</strong> for FHS Africa 2026, where the future of African hospitality unfolds.</p>
                    </Slide>
                </div>
            </Intro>




            <section className={`block bg-default`}>
                <div className='container center'>
            
                    <p className='fs-1 fw-700 lh-1 c-white mb-md'>2025 Strategic Partners</p>
                    
                    <LogoGrid>
                        {
                            STRATEGIC_PARTNERS.partners.length &&
                            STRATEGIC_PARTNERS.partners.map( partner => {

                                const handleLogoSize = ( size ) => {

                                    if ( !size ) return

                                    switch (size) {
                                        case 'lg':
                                            return partnerCSS.lg
                                            break
                                        
                                        case 'md':
                                            return partnerCSS.md
                                            break
                                        
                                        case 'sm':
                                            return partnerCSS.sm
                                            break
                                    
                                        default:
                                            break
                                    }
                                }

                                if ( !partner.partnerLogo.length ) return
                                return (
                                    <Pop key={partner.id}>
                                        <a className={partnerCSS.logoContainer} href={`/africa/partners/${partner.slug}`} rel="noreferrer" aria-label="Partner logo">
                                            <div className={`${partnerCSS.logo} ${ handleLogoSize('md') } `}>
                                                <Image 
                                                    src={partner.partnerLogo[0].url} 
                                                    layout='fill'
                                                    alt=""
                                                />
                                            </div>
                                        </a>
                                    </Pop>
                                )
                            })
                        }
                    </LogoGrid>

                    <div className="mt-sm center">
                        <Pop inline><ArrowButton href={`/africa/partners`} theme={{ arrow: `var(--secondary)`, border: `var(--secondary)`, label: `var(--secondary)`}}>See all sponsors and partners</ArrowButton></Pop>
                    </div>
                    
                    
                </div>
            </section>




            <SpeakerCarousel heading={'2025 Featured Speakers'} ctaLink={'/africa/speakers'} ctaLabel={'See all speakers'}>
                {
                    customOrderedSpeakers.map( speaker => (
                        <Pop key={speaker.id}>
                            <SpeakerCard 
                                key={speaker.id}
                                url={`/africa/speakers/${speaker.id}`}
                                photoUrl={speaker.photoUrl}
                                fullName={`${speaker.firstName} ${speaker.lastName}`}
                                jobTitle={speaker.jobTitle}
                                company={speaker.organization}
                            />
                        </Pop>
                    ))
                }
            </SpeakerCarousel>



            <ImpactFiguresGrid>
                <div className="fs-0 fw-600 c-white lh-1"><Reveal>FHS&nbsp;Africa 2025</Reveal> <Reveal delay={0.1}>in numbers</Reveal></div>

                <ImpactFigures>      
                    <ImpactFigure value="500" suffix="+" label="delegates" />
                    <ImpactFigure value="100" suffix="+" label="Investors" />
                    <ImpactFigure value="248" prefix="$" suffix="M" label="AUM" />
                    <ImpactFigure value="100" suffix="+" label="speakers" />
                    <ImpactFigure value="35" suffix="%" label="International Attendees" />
                </ImpactFigures>
            </ImpactFiguresGrid>




            <Footer />
            <LenisScroller />


            <PopupOverlay onClose={() => setShowModal(false)} show={showModal}>
                { modalContent } 
            </PopupOverlay>

        </>
    )
}
Home.theme = 'africa'







export async function getStaticProps({ preview, previewData }) {

    const data = await craftApolloClient( preview, previewData ).query({
        query: gql`
			query Homepage {
				entry(site: "ahif", id: "15757") {
                    ... on ahifHomepage_ahifHomepage_Entry {
                        seomatic(asArray: true) {
                            metaTitleContainer
                            metaTagContainer
                            metaLinkContainer
                            metaScriptContainer
                            metaJsonLdContainer
                            metaSiteVarsContainer
                            frontendTemplateContainer
                        }
                    }
                }
                partners: entries(site: "ahif", section: "partnerGroups") {
                    ... on partnerGroups_default_Entry {
                        id
                        title
                        partners {
                            ... on partners_partner_Entry {
                                id
                                title
                                partnerLogo {
                                    id
                                    url
                                    width
                                    height
                                }
                            }
                        }
                    }
                }
			}
        `
    })
    const pageData = data


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
					query eventPerson($eventId: ID!, $cursor: CursorPaginationInput, $filters: [EventPersonFilter!] ) {
						eventPerson(eventId: $eventId, cursor: $cursor, filters:$filters ) {
						nodes {
							id
							type
							firstName
							lastName
							jobTitle
							organization
							photoUrl
							groups {
								id
								name
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
									}
									badges {
										... on BadgeBarcode {
											__typename
											barcode
											createdAt
										}
									}
								}
							}
						}
					}
				`,
				variables: {
					"eventId": process.env.SWAPCARD_EVENT_ID_AFRICA_2025,
					"cursor": {
						"first": 200
					},
					"filters": {
                        "eventPeopleIds": [
                            "RXZlbnRQZW9wbGVfMzkxMzc1MTc=",
                            "RXZlbnRQZW9wbGVfMzc3MDU1NzU=",
                            "RXZlbnRQZW9wbGVfMzg2NzYzOTY=",
                            "RXZlbnRQZW9wbGVfMzg5NDMwNjM=",
                            "RXZlbnRQZW9wbGVfMzgwNDA5MDA=",
                            "RXZlbnRQZW9wbGVfMzgyNDYxODk=",
                            "RXZlbnRQZW9wbGVfMzg1MzY2Mzc=",
                            "RXZlbnRQZW9wbGVfMzgyMjM2Nzc=",
                            "RXZlbnRQZW9wbGVfMzk5NTE5ODU=",
                            "RXZlbnRQZW9wbGVfMzk3NjY4ODk="
                        ]
                    }
				}
			})
		}
	)
	const speakerData =  await swapcardData.json()
    


    return { 
		props: { 
            seomatic: pageData.data.entry.seomatic,
            partners: pageData.data.partners,
            speakers: speakerData.data.eventPerson.nodes
		}
	}
}
