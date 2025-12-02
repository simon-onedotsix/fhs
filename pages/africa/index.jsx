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
        "url": "/assets/img/africa/homepage/gallery-2025/ahif-2025-01.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2025/ahif-2025-02.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2025/ahif-2025-04.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2025/ahif-2025-05.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2025/ahif-2025-06.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2025/ahif-2025-07.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2025/ahif-2025-13.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2025/ahif-2025-03.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2025/ahif-2025-09.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2025/ahif-2025-23.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2025/ahif-2025-11.jpg",
        "width": 799,
        "height": 533
    },
    {
        "url": "/assets/img/africa/homepage/gallery-2025/ahif-2025-12.jpg",
        "width": 799,
        "height": 533
    },
    
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

    
    // console.log('seomatic:', seomatic)
    // console.log('SEO — title:', JSON.parse(entry.seomatic.metaTitleContainer))
    // console.log('SEO — tags:', JSON.parse(entry.seomatic.metaTagContainer))
    // console.log('speakerData:', speakerData)

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
        
            <Header overlaid inverse />



            <HeroUnitVideo video={'https://cms.thebench.com/assets/video/ahif-2024-opt.mp4'} poster={'https://cms.thebench.com/assets/video/ahif-2024-opt-poster.jpg'}>
                
                <p className={CSS.headline}>
                    <span className="c-secondary"><Reveal>Together</Reveal></span> <Reveal><span className="c-secondary">we</span>&nbsp;invest</Reveal>
                </p>

                <p className="fs-4 mt-xs"><span className="fw-600">31 March - 1 April 2026</span> <br /> Radisson Blu Hotel, Nairobi Upper Hill, Kenya</p>

                <div className='mt-sm'>
                    <ButtonGrid>
                        <Pop inline delay={.2}>
                            <Button href={'/africa/download-prospectus'}>Download Prospectus</Button>
                        </Pop>
                        <Pop inline delay={.2}>
                            <Button href={'/africa/get-involved-in-2026'}>Get Involved in 2026</Button>
                        </Pop>
                    </ButtonGrid>
                </div>

            </HeroUnitVideo>


            
            {/* <Intro>
                <div className="formatted columns-2 gap-md ai-center" style={{ overflow: 'hidden' }}>
                    <Pop>
                        <div style={{ position: `relative`, aspectRatio: 16 / 9, backgroundColor: `black`, borderRadius: `var(--default-radius)`, overflow: `hidden` }}>
                            <img src="/assets/img/africa/homepage/inset-2025.jpg" alt="" style={{ objectFit: `cover`, width: `100%` }} />
                        </div>
                    </Pop>
                    <Slide>
                        <p className="fs-2 fw-600 c-primary caps maxw-20 lh-1">driving growth and innovation</p>
                        <p className="fs-5 maxw-45 mt-sm">FHS Africa is the continent&apos;s leading hospitality investment forum, uniting industry leaders, investors, and operators to drive growth and innovation. With a legacy of impactful connections and over <strong className="fw-600">$459&nbsp;million</strong> in business opportunities, this is where Africa&apos;s hospitality sector meets the world. Join us in <strong className="fw-600">Nairobi</strong> for FHS Africa 2026, where the future of African hospitality unfolds.</p>
                    </Slide>
                </div>
            </Intro> */}



            {/* IMPACT FIGURES */}
            <ImpactFiguresGrid>
                <div className="fs-0 fw-600 c-white lh-1"><Reveal delay={0.1}>In Numbers</Reveal></div>

                <ImpactFigures>      
                    <ImpactFigure value={500} suffix="+" label="delegates" />
                    <ImpactFigure value={100} suffix="+" label="Investors" />
                    <ImpactFigure value={134.6} prefix="$" suffix="bn" label="AUM" />
                    <ImpactFigure value={100} suffix="+" label="speakers" />
                    <ImpactFigure value={35} suffix="%" label="International Attendees" />
                </ImpactFigures>

                <div className="container pt-sm">
                    <Pop inline><ArrowButton href={`https://www.youtube.com/watch?v=6b4NyxwG7ic`} target={`_blank`} theme={{ arrow: `var(--primary)`, border: `var(--primary)`, label: `white`}}>Watch 2025 Highlights</ArrowButton></Pop>
                </div>
            </ImpactFiguresGrid>



            {/* TICKER */}
            <div className="bg-secondary py-xs" dir={`ltr`}>
                <Ticker>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong>$459 million</strong> in business opportunities and deal volume gained in 2025 edition</p>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong>$459 million</strong> in business opportunities and deal volume gained in 2025 edition</p>
                </Ticker>
            </div>

            

            {/* CONFIRMED SPEAKERS */}
            <SpeakerCarousel heading={'2026 Confirmed Speakers'} ctaLink={'/africa/speakers'} ctaLabel={'See all speakers'}>
                {
                    speakers.map( speaker => (
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
                        <Pop inline><ArrowButton href={`/africa/partners`} theme={{ arrow: `var(--secondary)`, border: `var(--secondary)`, label: `var(--secondary)`}}>See all sponsors and partners</ArrowButton></Pop>
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



            {/* ADVISORY BOARD */}
            {/* <FixedBackgroundImage
                backgroundImageUrl={`/assets/img/africa/homepage/ab-07.jpg`}
                overlay={`hsl(from var(--secondary) h s l / .9)`}
            >

                <div className="container center pt-sm">
                    <Fade>
                        <Pop><p className="fs-1 fw-600 c-white maxw-40 mx-auto">2026 Advisory Board Meeting and Local Reception</p></Pop>
                    </Fade>
                </div>

                <div className="container columns-3 gap-sm">
                    <Pop><img src="/assets/img/africa/homepage/ab-01.jpg" alt="" width={`100%`} style={{ borderRadius: `var(--default-radius)`}}/></Pop>
                    <Pop><img src="/assets/img/africa/homepage/ab-02.jpg" alt="" width={`100%`} style={{ borderRadius: `var(--default-radius)`}}/></Pop>
                    <Pop><img src="/assets/img/africa/homepage/ab-03.jpg" alt="" width={`100%`} style={{ borderRadius: `var(--default-radius)`}}/></Pop>
                    <Pop><img src="/assets/img/africa/homepage/ab-04.jpg" alt="" width={`100%`} style={{ borderRadius: `var(--default-radius)`}}/></Pop>
                    <Pop><img src="/assets/img/africa/homepage/ab-05.jpg" alt="" width={`100%`} style={{ borderRadius: `var(--default-radius)`}}/></Pop>
                    <Pop><img src="/assets/img/africa/homepage/ab-06.jpg" alt="" width={`100%`} style={{ borderRadius: `var(--default-radius)`}}/></Pop>
                </div>

                <div className="container center">
                    <div className="button-grid">
                        <Pop>
                            <ArrowButton 
                                href={ '/africa/advisory-board' } 
                                theme={{ arrow: `white`, border: `white`, label: `white`}}
                            >
                                See Advisory Board Members
                            </ArrowButton>
                        </Pop>
                    </div>
                </div>

            </FixedBackgroundImage> */}

            

            {/* KENYA 2025 */}
            {/* <BrandBlock>
                
                <div className="container">
                    <p className="fs-1 fw-600 balance mb-md center">Last Time We Were In Kenya</p>
                    <Pop><img src="/assets/img/africa/homepage/kenya/kenya-02.jpg" alt="" style={{ width: `100%`, borderRadius: `var(--default-radius)`}} /></Pop>
                </div>
              
                <div className="container columns-3 gap-sm">      
                    <ImpactFigure value={293} prefix="$" suffix="M" label="in business opportunities and deal volume gained at AHIF" />
                    <ImpactFigure value={4.5} prefix="$" suffix="M" label="million average value of business opportunities gained" />
                    <ImpactFigure value={3.1} suffix="%" label="of attendees surveyed left with business opportunities between 10-50 million USD from AHIF" />
                </div>

                <div className="container columns-2 gap-sm">
                    <Pop><img src="/assets/img/africa/homepage/kenya/kenya-07.jpg" alt="" style={{ width: `100%`, borderRadius: `var(--default-radius)` }} /></Pop>
                    <Pop><img src="/assets/img/africa/homepage/kenya/kenya-09.jpg" alt="" style={{ width: `100%`, borderRadius: `var(--default-radius)` }} /></Pop>
                    <Pop><img src="/assets/img/africa/homepage/kenya/kenya-04.jpg" alt="" style={{ width: `100%`, borderRadius: `var(--default-radius)` }} /></Pop>
                    <Pop><img src="/assets/img/africa/homepage/kenya/kenya-05.jpg" alt="" style={{ width: `100%`, borderRadius: `var(--default-radius)`}} /></Pop>
                </div>

            </BrandBlock> */}
            

            
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
                        <p className='fs-1 fw-500 lh-1 mt-lg'>2025 in <span className='c-primary'>Photos</span></p> 
                    </Slide>
                    
                    <div className="columns-3 gap-xs mt-md">
                        {
                            PHOTOS_DATA.map( (photo, index) => (
                                <Pop key={index}>
                                    <div style={{ position: `relative`}}>
                                        <Image src={photo.url} width={photo.width} height={photo.height} layout={`responsive`} alt="" style={{ borderRadius: `var(--default-radius)`}} />
                                    </div>
                                </Pop>
                            ))
                        }
                        <p className="mt-xs">
                            <ArrowButton
                                href={`https://www.flickr.com/photos/benchevents/albums/`}
                                target='_blank'
                                theme={{ arrow: `var(--primary)`, border: `var(--primary)`, label: `white` }}
                            >View Full Gallery</ArrowButton>
                        </p>
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
						"first": 10
					},
					"filters": {
                        "shouldBeInGroups": "RXZlbnRHcm91cF82NDI4ODI=",
                        "eventPeopleIds": [
                            "RXZlbnRQZW9wbGVfNDM2MTE0NjA=",
                            "RXZlbnRQZW9wbGVfNDI3NzA2ODM=",
                            "RXZlbnRQZW9wbGVfNDM2MDI0MjY=",
                            "RXZlbnRQZW9wbGVfNDM1NTg2NzM=",
                            "RXZlbnRQZW9wbGVfNDM2MTEzNjA="
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
