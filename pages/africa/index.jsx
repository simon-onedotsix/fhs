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
        avatarUrl: 'https://static.swapcard.com/public/images/6c33755bfc764a0baae794953986c15f.png',
        quote: "FHS Africa delivered a broad, well-balanced agenda that brought together meaningful discussions across investment, development, operations, ESG, and destination growth, making it a genuinely useful forum for the industry.",
        fullName: "Suhail Ashok Bhatia ",
        title: "Director - Asset management, Compagnie Hoteliere Et Immobiliere Du Congo (CHIC) – Headline Partner FHS Africa 2026"
    },
    {
        avatarUrl: '/assets/img/africa/homepage/altaaf-kazi.jpeg',
        quote: "FHS Africa was hugely successful for the Millat Group. We look forward to building on the key meetings and conversations that took place - strengthening our portfolio on the continent and continuing to play our part in amplifying Africa's voice and tourism offering.",
        fullName: "Altaaf Kazi",
        title: "VP: Corporate Communications and Business Development, Millat Group – Education Partner FHS Africa 2026",
    },
    {
        avatarUrl: '/assets/img/africa/homepage/sherif-ahmed.jpeg',
        quote: "FHS Africa was a great experience that strengthened our industry partnerships, opened new possible opportunities with hotel owners and operators, and showcased our leadership in hospitality digital transformation.",
        fullName: "Sherif Ahmed",
        title: "Business Development Director, ACT Hospitality Group – Headline Partner FHS Africa 2026",
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

    // filter partners for assigned categories
    const HOST_PARTNERS = { group: 'Host Partners', partners: partners.filter(partner => partner.fields.find(field => field.id === "RmllbGRWYWx1ZV8xNTAzNDczOQ==")) }
    const STRATEGIC_PARTNERS = { group: 'Strategic Partners', partners: partners.filter(partner => partner.fields.find(field => field.id === "RmllbGRWYWx1ZV8yMjM5NDE1NA==")) }
    const HEADLINE_PARTNERS = { group: 'Headline Partners', partners: partners.filter(partner => partner.fields.find(field => field.id === "RmllbGRWYWx1ZV8yNzM1MDgyNw==")) }


    // console.log('partners:', partners)
    // console.log('host partners:', HOST_PARTNERS)
    // console.log('strategic partners:', STRATEGIC_PARTNERS)
    // console.log('headline partners:', HEADLINE_PARTNERS)



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
                
                <div className={CSS.heroLayout}>
                    {/* tagline */}
                    <section style={{ alignSelf: 'flex-end' }}>
                        <div className={CSS.headline}>
                            <Reveal>CONNECTION.</Reveal>
                            <Reveal><span className="c-secondary">INVESTMENT.</span></Reveal>
                            <Reveal>GROWTH</Reveal>
                                
                        </div>

                        <p className="fs-3 mt-xs"><span className="fw-600">2-3 February, 2027</span></p>
                        <p className="fs-4 balance lh-1">Speke Resort Convention Centre, Munyonyo, Kampala</p>

                        <div className='mt-md'>
                            <ButtonGrid>
                                <Pop inline delay={.2}>
                                    <Button href={'/africa/purchase-pass'}>Register Here</Button>
                                </Pop>
                                <Pop inline delay={.2}>
                                    <Button href={'/africa/download-event-brochure'}>View Event Brochure</Button>
                                </Pop>
                                <Pop inline delay={.2}>
                                    <Button href={'/africa/post-event-resources'}>Post Event Resources 2026</Button>
                                </Pop>
                            </ButtonGrid>
                        </div>
                    </section>

                    {/* boxout */}
                    <section style={{ alignSelf: 'flex-end' }}>
                        <Pop>
                            <div className={CSS.boxout}>
                                <div className={CSS.image}>
                                    <Image src={"/assets/img/africa/homepage/uganda-boxout.webp"} layout='fill' alt="" unoptimized />
                                </div>
      
                                <div className={CSS.boxoutContent}>
                                    <Pop delay={.1}>
                                        <p className="fs-5 fw-600 lh-1">2027 Host Country:</p>
                                        <p className="fs-2 fw-600 lh-1">Uganda</p>
                                    </Pop>
                                    <Pop inline delay={.2}>
                                        <Button inverse href={'/africa/explore-uganda'}>Explore Uganda</Button>
                                    </Pop>
                                </div>
                            </div>
                        </Pop>
                    </section>                   
                </div>

            </HeroUnitVideo>



            {/* IMPACT FIGURES */}
            <section className="block bg-dark">
              
                <div className="maxw-65">
                    <Fade>
                        <p className="fs-1 fw-600 c-white lh-1 balance">Be in the room where Africa&apos;s biggest hotel deals begin</p>
                        <p className="fs-5 mt-xs">Meet hotel owners, investors, operators, developers and government leaders driving the next wave of hospitality investment across Africa. Join the conversations, partnerships and deals that won&apos;t happen anywhere else.</p>
                    </Fade>
                </div>
              

                <ImpactFigures>      
                    <ImpactFigure value={600} suffix="+" label="C-Level Audience" />
                    <ImpactFigure value={594} prefix="$" suffix="M" label="In Business Opportunties" />
                    <ImpactFigure value={5.9} prefix="$" suffix="M" label="Average Deal Size" />
                    <ImpactFigure value={100} suffix="+" label="Investors" />
                    <ImpactFigure value={59.8} prefix="$" suffix="Bn" label="Assets Under Management" />
                    <ImpactFigure value={37} label="Countries Represented" />
                </ImpactFigures>

                <div className="container pt-sm button-grid">
                    <Pop inline><ArrowButton href={`https://youtu.be/kGIETQ-Cunw?si=AD5UBvJiAWmGuNqx`} target={`_blank`} theme={{ arrow: `var(--primary)`, border: `var(--primary)`, label: `white`}}>Watch 2026 Highlights</ArrowButton></Pop>
                    <Pop inline><ArrowButton href={`/africa/sample-attendee-list-download`} theme={{ arrow: `var(--primary)`, border: `var(--primary)`, label: `white`}}>Access Attendee List</ArrowButton></Pop>
                </div>
            </section>



            {/* TICKER */}
            <div className="bg-secondary py-xs" dir={`ltr`}>
                <Ticker duration={30}>
                    <p className="fs-4">&ensp;<strong className="fw-600">WHO YOU&apos;LL MEET:</strong> ▪ Hotel Owners ▪ Developers ▪ Investors ▪ Private Equity ▪ Sovereign Wealth Funds ▪ Banks/Lenders ▪ Government Leaders ▪ Tourism Boards ▪ Consultants & Lawyers ▪ Asset Managers</p>
                    <p className="fs-4">&ensp;<strong className="fw-600">WHO YOU&apos;LL MEET:</strong> ▪ Hotel Owners ▪ Developers ▪ Investors ▪ Private Equity ▪ Sovereign Wealth Funds ▪ Banks/Lenders ▪ Government Leaders ▪ Tourism Boards ▪ Consultants & Lawyers ▪ Asset Managers</p>
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



            {/* THEMES */}
            <section className="block bg-secondary no-print" style={{ position: 'relative', zIndex: 2}}>
                <ThemesSlider
                    heading={`2027 Event Themes`}
                    data={THEMES_DATA}
                    link={'/africa/agenda'}
                    linkLabel={'View Agenda'}
                />
            </section>


            {/* WHY ATTEND */}
            <section className="block bg-secondary">
                <div className="container center">
                    <p className="fs-1 fw-600">Why Attend FHS Africa</p>
                </div>

                <div className="container columns-3 gap-sm formatted center balance">
                    <Card>
                        <h4>Access</h4>
                        <p className="fs-5 lh-2">Meet the industrys most influential decision-makers.</p>
                    </Card>
                    <Card>
                        <h4>Investment</h4>
                        <p className="fs-5 lh-2">Discover projects seeking capital.</p>
                    </Card>
                    <Card>
                        <h4>Industry Intelligence</h4>
                        <p className="fs-5 lh-2">Hear what is shaping hospitality over the next five years.</p>
                    </Card>
                    <Card>
                        <h4>Partnerships</h4>
                        <p className="fs-5 lh-2">Build relationships that lead to deals.</p>
                    </Card>
                    <Card>
                        <h4>Inspiration</h4>
                        <p className="fs-5 lh-2">Learn directly from CEOs and investors.</p>
                    </Card>
                    <Card>
                        <h4>Opportunity</h4>
                        <p className="fs-5 lh-2">Identify your next market before everyone else.</p>
                    </Card>
                </div>

                <div className="container center">
                    <Pop inline><ArrowButton href={`/africa/networking`} theme={{ arrow: `var(--primary)`, border: `var(--primary)`, label: `white`}}>Networking at FHS Africa</ArrowButton></Pop>
                </div>
            </section>
            
            
            {/* PARTNERS */}
            <section className={`block bg-default`}>
                <div className='container flex jc-center gap-md center'>
            
                    <section>
                        <p className='fs-3 fw-500 lh-1 c-white mb-sm'>2027 Host Partner</p>
                        <LogoGrid>
                            {
                                HOST_PARTNERS.partners.length &&
                                HOST_PARTNERS.partners.map(partner => {
                                    if ( !partner.logoUrl ) return
                                    return (
                                        <Pop key={partner.id}>
                                            <a className={CSS.logoContainer} href={`/africa/partners/${partner.id}`} rel="noreferrer" aria-label="Partner logo">
                                                <div className={CSS.logo}>
                                                    <Image 
                                                        src={partner.logoUrl} 
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
                    </section>
                    
                    <section>
                        <p className='fs-3 fw-500 lh-1 c-white mb-sm'>2027 Strategic Partners</p>
                        <LogoGrid>
                            {
                                STRATEGIC_PARTNERS.partners.length &&
                                STRATEGIC_PARTNERS.partners.map( partner => {
                                    if ( !partner.logoUrl ) return
                                    return (
                                        <Pop key={partner.id}>
                                            <a className={CSS.logoContainer} href={`/africa/partners/${partner.id}`} rel="noreferrer" aria-label="Partner logo">
                                                <div className={CSS.logo}>
                                                    <Image 
                                                        src={partner.logoUrl} 
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
                    </section>

                    
                </div>
                    
                <div className="container center">
                    <Pop inline><ArrowButton href={`/africa/partners`} theme={{ arrow: `var(--secondary)`, border: `var(--secondary)`, label: `var(--secondary)`}}>See all Partners</ArrowButton></Pop>
                </div>
            </section>

            

            {/* QUOTES */}
            <section className="block bg-primary pt-0">
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




const Card = ({ children }) => {
    return (
        <Pop>
            <div className="bg-primary p-sm" style={{ borderRadius: `1rem`, height: `100%`, display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center` }}>
                { children }
            </div>
        </Pop>
    )
}






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
					query($eventId: ID!, $cursor: CursorPaginationInput, $filters: [EventPersonFilter!] ) {
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
                                exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_AFRICA_2027}", page:1, pageSize: 200) {
							id
							name
							logoUrl
							fields {
								... on SelectField {
									id
									value
									definition {
										id
										name
									}
									translations {
										value
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
            // partners: pageData.data.partners,
            announcements: pageData.data.announcements,
            speakers: speakerData.data.eventPerson.nodes,
            partners: speakerData.data.exhibitors
		}
	}
}
