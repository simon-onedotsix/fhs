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


import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_AFRICA as header } from '../../fixtures/nav'
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
import { FixedBackgroundImage } from "../../fuselage/theme/2025/africa/blocks/fixed-background-image/fixed-background-image"
import { Quotation } from "../../fuselage-africa/components/quotation/quotation"
import { VideoPlayer } from '../../fuselage-africa/components/video-player/video-player'
import { Logo } from "../../fuselage/theme/2025/africa/components/logo-ticker/logo-ticker"
import { ArticleScroller, Article } from "../../fuselage/theme/2025/africa/blocks/article-scroller/article-scroller"
import { ThemesSlider } from "../../fuselage-africa/blocks/themes-slider/themes-slider"

import Ticker from 'framer-motion-ticker'


import CSS from '../../fuselage/theme/2025/africa/css/homepage.module.css'


const QUOTES_DATA = [
    {
        avatarUrl: 'https://cdn-api.swapcard.com/public/images/8129ab6d05aa43a8817705e047b58f47.jpeg',
        quote: "It's an incredible event, it's great to have all these people brought together. For me to get this recognition in front of so many peers of mine makes me very proud.",
        fullName: "William Heinecke",
        title: "Founder and Chairman, Minor International"
    },
    {
        avatarUrl: 'https://static.swapcard.com/public/images/b67ba28418764310b01256ac98de3c59.jpeg',
        quote: "The event has been great. I met a lot of people that I haven't seen in quite some time. It's a great networking event.",
        fullName: "Marcel Von Aulock",
        title: "CEO, Southern Sun",
    },
    {
        avatarUrl: 'https://static.swapcard.com/public/images/fbfab4a15cf74a07b9742e0c0b601c64.jpeg',
        quote: "FHS Africa was a great platform for us to share our news with the largest hotel management portfolio deal of the continent.",
        fullName: "Bani Haddad",
        title: "Founder and Managing Director, Aleph Hospitality",
    }
]
const PHOTOS_DATA = [
    {
        "url": "/assets/img/africa/homepage/gallery-2026/africa-2026-01.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2026/africa-2026-02.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2026/africa-2026-03.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2026/africa-2026-04.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2026/africa-2026-05.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2026/africa-2026-06.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2026/africa-2026-07.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2026/africa-2026-08.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2026/africa-2026-09.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2026/africa-2026-10.jpg",
        "width": 799,
        "height": 533
    }
    
]
const THEMES_DATA = [
    {
        id: '1',
        iconUrl: '/assets/img/africa/event-themes/investment.svg',
        title: 'Investment financing and capital flows'
    },
    {
        id: '2',
        iconUrl: '/assets/img/africa/event-themes/operational-economics.svg',
        title: 'Operational economics and profitability'
    },
    {
        id: '3',
        iconUrl: '/assets/img/africa/event-themes/brands.svg',
        title: 'Homegrown Brands in Africa'
    },
    {
        id: '4',
        iconUrl: '/assets/img/africa/event-themes/branded-residences.svg',
        title: 'Branded Residences'
    },
    {
        id: '5',
        iconUrl: '/assets/img/africa/event-themes/global-economy.svg',
        title: 'Global economic shifts and geopolitical impacts'
    },
    {
        id: '6',
        iconUrl: '/assets/img/africa/event-themes/conservation.svg',
        title: 'Conservation-led and sustainable hospitality'
    },
    {
        id: '7',
        iconUrl: '/assets/img/africa/event-themes/technology.svg',
        title: 'Technology and AI'
    },
    
    
]

export default function Home ({ seomatic, partners, announcements, speakers }) {

    const [ showModal, setShowModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState()

    const HOST_PARTNERS = partners.find(group => group.id === "274375")
    const STRATEGIC_PARTNERS = partners.find(group => group.id === "138675")


    let customOrderedSpeakers = _.sortBy(speakers, [
		(speaker => speaker.firstName === "Augusto" && speaker.lastName === 'Kalikemala' ? 0 : 1),
		(speaker => speaker.firstName === "Ashish" && speaker.lastName === 'Sharma' ? 0 : 1),
		(speaker => speaker.firstName === "Juliana" && speaker.lastName === 'Kagwa' ? 0 : 1),
		(speaker => speaker.firstName === "Vimbai" && speaker.lastName === 'Masiyiwa' ? 0 : 1),

		(speaker => speaker.firstName === "Jameel" && speaker.lastName === 'Verjee' ? 0 : 1),
		(speaker => speaker.firstName === "Rosco" && speaker.lastName === 'Wendover' ? 0 : 1),
		(speaker => speaker.firstName === "Artur" && speaker.lastName === 'Gerber' ? 0 : 1),
		(speaker => speaker.firstName === "Buhle" && speaker.lastName === 'Ndlovu' ? 0 : 1),
		(speaker => speaker.firstName === "Mutheu" && speaker.lastName === 'Muna-Mwaniki' ? 0 : 1),
    ] )

    
    // console.log('seomatic:', seomatic)
    // console.log('SEO — title:', JSON.parse(entry.seomatic.metaTitleContainer))
    // console.log('SEO — tags:', JSON.parse(entry.seomatic.metaTagContainer))
    // console.log('speakerData:', speakers)

    // console.log('selectedCmsSpeakers:', selectedCmsSpeakers)
    // console.log('partners:', partners)
    // console.log('announcements:', announcements)



    // scroll animation
    let introRef = useRef(null)
    let { scrollYProgress } = useScroll({ 
        target: introRef,
        offset: ["start 75%", "end 0%"]
    })

    let y = useTransform(scrollYProgress, [0, 1], ["-15%", "5%"])




    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/africa/favicon-16x16.png" sizes="16x16" />
                { handleSeomaticMeta( seomatic ) }
            </Head>
        
            <EventsBar site={'/africa'} />
            <Header
                site={`/africa`}
                handle={`Africa`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />



            <HeroUnitVideo
                video={'https://cms.thebench.com/assets/video/ahif-2024-opt.mp4'}
                poster={'https://cms.thebench.com/assets/video/ahif-2024-opt-poster.jpg'}
            >
                
                <p className={CSS.headline}>
                    <span className="c-secondary"><Reveal>Together</Reveal></span> <Reveal><span className="c-secondary">we</span>&nbsp;invest</Reveal>
                </p>

                <p className="fs-3 mt-xs"><span className="fw-600">2-3 February, 2027</span></p>
                <p className="fs-4 balance lh-1">Speke Resort Munyonyo, Kampala, Uganda</p>

                <div className='mt-md'>
                    <ButtonGrid>
                        <Pop inline delay={.2}>
                            <Button href={'/africa/register-interest-for-2027'}>Register Interest for 2027</Button>
                        </Pop>
                        <Pop inline delay={.2}>
                            <Button href={'/africa/post-event-resources'}>Post Event Resources 2026</Button>
                        </Pop>
                    </ButtonGrid>
                </div>

            </HeroUnitVideo>



            {/* IMPACT FIGURES */}
            <ImpactFiguresGrid>
                <div className="fs-0 fw-600 c-white lh-1"><Reveal delay={0.1}>In Numbers</Reveal></div>

                <ImpactFigures>      
                    <ImpactFigure value={450} suffix="+" label="Attendees" />
                    <ImpactFigure value={80} suffix="+" label="Investors" />
                    <ImpactFigure value={83} label="speakers" />
                    <ImpactFigure value={70} suffix="%" label="Africans" />
                    <ImpactFigure value={37} label="Countries Represented" />
                    <ImpactFigure value={59.8} prefix="$" suffix="Bn" label="Assets Under Management" />
                    <ImpactFigure value={57} label="Partners" />
                    <ImpactFigure value={30} suffix="%" label="Internationals" />
                </ImpactFigures>

                <div className="container pt-sm">
                    <Pop inline><ArrowButton href={`https://youtu.be/S7pgVStmtlU`} target={`_blank`} theme={{ arrow: `var(--primary)`, border: `var(--primary)`, label: `white`}}>Watch 2026 Highlights</ArrowButton></Pop>
                </div>
            </ImpactFiguresGrid>



            {/* TICKER */}
            <div className="bg-secondary py-xs" dir={`ltr`}>
                <Ticker>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong>$459 million</strong> in business opportunities and deal volume gained in 2025 edition</p>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong>$459 million</strong> in business opportunities and deal volume gained in 2025 edition</p>
                </Ticker>
            </div>

            

            {/* SPEAKERS */}
            <SpeakerCarousel heading={'2026 Speakers'} ctaLink={'/africa/speakers'} ctaLabel={'See all speakers'}>
                {
                    customOrderedSpeakers.map( (speaker, index) => (
                        <Pop key={index}>
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



            {/* <section className="block bg-primary pt-0">
                <Pop>
                    <div className="container center formatted bg-white p-sm rad-sm">
                        <p className="fs-1 fw-600  c-primary">Look who&apos;s attending FHS Africa 2026</p>
                        <p className="fs-4 pb-xs">Is your company represented?</p>

                        <Pop inline delay={.2}>
                            <Button href={'/africa/attendee-list-2026'}>View Company List</Button>
                        </Pop>
                    </div>
                </Pop>
            </section> */}



            {/* THEMES */}
            <section className="block bg-secondary no-print" style={{ position: 'relative', zIndex: 2}}>
                <ThemesSlider
                    heading={`2026 Event Themes`}
                    data={THEMES_DATA}
                    link={'/africa/agenda'}
                    linkLabel={'View Agenda'}
                />
            </section>


            
            {/* PARTNERS */}
            <section className={`block bg-default`}>
                <div className='container center'>
            
                    <p className='fs-3 fw-500 lh-1 c-white mb-sm'>2026 Host Partner</p>
                    <LogoGrid>
                        {
                            HOST_PARTNERS.partners.length &&
                            HOST_PARTNERS.partners.map( partner => {
                                if ( !partner.partnerLogo.length ) return
                                return (
                                    <Pop key={partner.id}>
                                        <a className={CSS.logoContainer} href={`/africa/partners/${partner.slug}`} rel="noreferrer" aria-label="Partner logo">
                                            <div className={CSS.logo}>
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
                    
                    <p className='fs-3 fw-500 lh-1 c-white mb-sm mt-md'>2026 Strategic Partners</p>
                    <LogoGrid>
                        {
                            STRATEGIC_PARTNERS.partners.length &&
                            STRATEGIC_PARTNERS.partners.map( partner => {
                                if ( !partner.partnerLogo.length ) return
                                return (
                                    <Pop key={partner.id}>
                                        <a className={CSS.logoContainer} href={`/africa/partners/${partner.slug}`} rel="noreferrer" aria-label="Partner logo">
                                            <div className={CSS.logo}>
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
                        <Pop inline><ArrowButton href={`/africa/partners`} theme={{ arrow: `var(--secondary)`, border: `var(--secondary)`, label: `var(--secondary)`}}>See all Partners</ArrowButton></Pop>
                    </div>
                    
                    
                </div>
            </section>

            

            {/* QUOTES */}
            <section className="block bg-primary">
                <div className={`container columns-3 gap-sm`}>
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

            
            {/* EVENT FEATURES */}
            <section className="block bg-secondary">

                {/* announcements */}
                <ArticleScroller>
                    {
                        announcements.length &&
                        announcements.map((article, index) => (
                            <Article
                                key={index}
                                heroUrl={article.contentLibraryHero[0].url}
                                title={article.title}
                                excerpt={article.excerpt}
                                url={`/africa/content-library/${article.slug}`}
                            />
                        ))
                    }
                </ArticleScroller>

                {/* partners */}
                {/* <div className="container pt-lg">
                    <div className="bg-white py-sm" style={{ borderRadius: `var(--default-radius)`}}>
                        <Pop><p className="fs-1 fw-600 c-primary center balance">Partners Joining Us</p></Pop>

                        <div className="py-xs mt-sm mb-sm">
                            <Ticker duration={35}>
                                {
                                    partners.map(group => (
                                        group.partners.map(partner => (
                                            <div key={partner.id} style={{ marginRight: 20 }}>
                                                <Logo logoUrl={partner.partnerLogo[0].url} />
                                            </div>
                                        ))
                                    ))
                                }
                            </Ticker>
                        </div>
                    </div>
                </div> */}

                {/* video */}
                {/* <div className={`${CSS.highlightVideoGrid} container pt-md`}>
                    <Slide>
                        <p className='fs-1 fw-500 lh-1'>Highlights from <span className='c-primary'>FHS Africa 2025</span></p>   
                    </Slide>
                    <Pop>
                        <VideoPlayer theme={`dark`} maxWidth={`100`} videoUrl={`https://www.youtube.com/watch?v=6b4NyxwG7ic&list=PLvsWBxg_AZS5rmKLRXpnzwTny2AEADUHd&index=2`} controls={true} />
                    </Pop>
                </div> */}

                {/* photos */}
                <div className={`${CSS.photoGrid} container o-hidden`}>
                    <Slide>
                        <p className='fs-1 fw-500 lh-1 mt-lg'>2026 in <span className='c-primary'>Photos</span></p> 
                    </Slide>
                    
                    <div className="columns-2 gap-xs mt-md">
                        {
                            PHOTOS_DATA.map( (photo, index) => (
                                <Pop key={index}>
                                    <div style={{ position: `relative`}}>
                                        <Image src={photo.url} width={photo.width} height={photo.height} layout={`responsive`} alt="" style={{ borderRadius: `var(--default-radius)`}} />
                                    </div>
                                </Pop>
                            ))
                        }
                        {/* <p className="mt-xs">
                            <ArrowButton
                                href={`https://www.flickr.com/photos/benchevents/albums/`}
                                target='_blank'
                                theme={{ arrow: `var(--primary)`, border: `var(--primary)`, label: `white` }}
                            >View Full Gallery</ArrowButton>
                        </p> */}
                    </div>

                </div>

            </section>
            

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
                announcements: entries(site: "${process.env.SITE_HANDLE_AFRICA}", section: "contentLibrary", limit: 4, relatedTo: "7702") {
                    ... on contentLibrary_article_Entry {
                        id
                        slug
                        title
                        postDate
                        excerpt
                        contentLibraryHero {
                            id
                            url
                            width
                            height
                        }
                        contentTypes {
                            ... on contentLibrary_Category {
                                id
                                title
                                slug
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
					"eventId": process.env.SWAPCARD_EVENT_ID_AFRICA_2026,
					"cursor": {
						"first": 20
					},
					"filters": {
                        "shouldBeInGroups": "RXZlbnRHcm91cF82NDI4ODI=",
                        "eventPeopleIds": [
                            "RXZlbnRQZW9wbGVfNDQzMzI2ODA=",
                            "RXZlbnRQZW9wbGVfNDM4OTUyMDI=",
                            "RXZlbnRQZW9wbGVfNDQ5MTQ4NDY=",
                            "RXZlbnRQZW9wbGVfNDQ3NDI3MDM=",
                            "RXZlbnRQZW9wbGVfNDQ3NDI2NzE=",
                            "RXZlbnRQZW9wbGVfNDM2MTE4NjM=",
                            "RXZlbnRQZW9wbGVfNDQxNDEyOTM=",
                            "RXZlbnRQZW9wbGVfNDQ0OTI2OTE=",
                            "RXZlbnRQZW9wbGVfNDM5NjkzNDk=",
                            "RXZlbnRQZW9wbGVfNDQzMzQ0OTg=",
                            "RXZlbnRQZW9wbGVfNDU0NDc0NTk="
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
            announcements: pageData.data.announcements,
            speakers: speakerData.data.eventPerson.nodes
		}
	}
}
