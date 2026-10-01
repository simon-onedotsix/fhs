import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import useCustomMediaQuery from "../../hooks/useCustomMediaQuery"
import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"
import { Reveal } from "../../fuselage/animation/reveal"

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_WORLD as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'

import { Button } from "../../fuselage/theme/2024/world/components/button/button"
import { BarChart, Field } from '../../fuselage/theme/2025/world/components/bar-chart/bar-chart'
import { GlobalMap } from '../../fuselage/theme/2025/world/components/global-map/global-map'
import { SpeakerCard } from "../../fuselage/components/speaker-card/speaker-card"
import { VideoPlayer } from '../../fuselage/components/video-player/video-player'
import { ArrowButton } from "../../fuselage/components/arrow-button/arrow-button"
import { PopupOverlay } from "../../fuselage/components/popup-overlay/popup-overlay"


import HubspotForm from "../../fuselage/components/hubspot-form/hubspot-form"

import { 
    QueryText, 
    QueryFlipFlops, 
    QueryFloaters, 
    QueryBillboards, 
    QueryBillboardSliders, 
    QueryImpactFigures, 
    QueryVideos,
    QueryForm,
    QueryProfileCarousel,
    QuerySEO,
    QueryImages
} from "../../graphql/queries"

import handleSeomaticMeta from '../../lib/seomatic'



import { HeroUnitVideo } from "../../fuselage/theme/2025/world/pages/home/hero-unit-video"

import Ticker from "framer-motion-ticker"

import { ImpactCard } from "../../ui/components/impact-card"

import { VideoSection, Section } from '../../fuselage/theme/2026/sa/blocks/section'
import { ContentCard } from '../../fuselage/components/content-card/content-card'
import { Quotation } from "../../fuselage/theme/2026/world/components/quotation/quotation"

import CSS from '../../fuselage/theme/2026/world/css/homepage.module.css'




const photos = [
    {
        "id": "13864",
        "hero": [
            {
                "id": "50183",
                "url": "/assets/img/world/pages/home/fhs-world-2026-05.jpg",
                "width": 1000,
                "height": 600
            }
        ]
    },
    {
        "id": "13865",
        "hero": [
            {
                "id": "50184",
                "url": "/assets/img/world/pages/home/fhs-world-2026-03.jpg",
                "width": 1000,
                "height": 600
            }
        ]
    },
    {
        "id": "13867",
        "hero": [
            {
                "id": "50186",
                "url": "/assets/img/world/pages/home/fhs-world-2026-02.jpg",
                "width": 1000,
                "height": 600
            }
        ]
    },
    {
        "id": "13868",
        "hero": [
            {
                "id": "50187",
                "url": "/assets/img/world/pages/home/fhs-world-2026-04.jpg",
                "width": 1000,
                "height": 600
            }
        ]
    },
    {
        "id": "50207",
        "hero": [
            {
                "id": "50193",
                "url": "/assets/img/world/pages/home/fhs-world-2026-09.jpg",
                "width": 1000,
                "height": 600
            }
        ]
    },
    {
        "id": "50206",
        "hero": [
            {
                "id": "50189",
                "url": "/assets/img/world/pages/home/fhs-world-2026-01.jpg",
                "width": 1000,
                "height": 600
            }
        ]
    },
    {
        "id": "50207",
        "hero": [
            {
                "id": "50193",
                "url": "/assets/img/world/pages/home/fhs-world-2026-10.jpg",
                "width": 1000,
                "height": 600
            }
        ]
    },
    {
        "id": "13868",
        "hero": [
            {
                "id": "50187",
                "url": "/assets/img/world/pages/home/fhs-world-2026-07.jpg",
                "width": 1000,
                "height": 600
            }
        ]
    },
    {
        "id": "50206",
        "hero": [
            {
                "id": "50189",
                "url": "/assets/img/world/pages/home/fhs-world-2026-08.jpg",
                "width": 1000,
                "height": 600
            }
        ]
    },
    
]
const QUOTES_DATA = [
    {
        avatarUrl: 'https://static.swapcard.com/public/images/84e0a74e61c14ef6b28ba60093774c1b.png',
        quote: "When the storm hits, the world thought that The UAE would stumble. We stood our grounds. We weathered the storm standing.",
        fullName: "H.E. Abdulla bin Touq Al Marri",
        title: "Minister of Economy & Tourism, United Arab Emirates"
    },
    {
        avatarUrl: 'https://static.swapcard.com/public/images/802ca11f989a409daf7c798105d5d72e.jpeg',
        quote: "The definition of luxury has changed. Before, it was status. Now, it's very different. Now it's time, privacy, experience, innovation and longevity.",
        fullName: "Philippe Zuber",
        title: "Chief Executive Officer, Kerzner International Management",
    },
    {
        avatarUrl: 'https://static.swapcard.com/public/images/b4063bd5c6ca4d73a854e17f4fc78bbd.jpeg',
        quote: "... the big difference will not be the technology. Technology is a commodity. It will be in the people, the culture that you are creating around your asset or your brand.",
        fullName: "Carlos Diez de la Lastra",
        title: "Chief Executive Officer, Les Roches Global Hospitality Education",
    },
    {
        avatarUrl: 'https://static.swapcard.com/public/images/f7a9ac0103334727a51732bce1127546.png',
        quote: "This country and this part of the world isn't run on a four year term. Their vision is forty years and beyond.",
        fullName: "Raki Phillips",
        title: "Regional President - Middle East, Africa & Türkiye, ACCOR",
    }
]

export const ARTICLE_DATA = [
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-World/Mo%CC%88venpick-Grand-Al-Bustan-Dubai.jpeg',
        title: 'Aleph Hospitality accelerates Dubai expansion with the management of the landmark Mövenpick Grand Al Bustan',
        url: '/world/content-library/aleph-hospitality-accelerates-dubai-expansion-with-the-management-of-the-landmark-mövenpick-grand-al-bustan',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-World/Khalil_Landscape.jpg',
        title: 'Oman to deliver 700 new hotel rooms by year end with winter season expected to boost tourism recovery – Cavendish Maxwell',
        url: '/world/content-library/oman-to-deliver-700-new-hotel-rooms-by-year-end-with-winter-season-expected-to-boost-tourism-recovery-cavendish-maxwell',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-World/Pullman-Residences-Offices-Dubai-Meydan.jpg',
        title: 'Accor and CITYVIEW Developments expand their partnership with Pullman Residences & Offices Dubai Meydan',
        url: '/world/content-library/accor-and-cityview-developments-expand-their-partnership-with-pullman-residences-offices-dubai-meydan',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-World/Mo%CC%88venpick-Erbil-Gomaspan-Resort.jpg',
        title: 'Accor and KRD Holding sign Mövenpick Erbil Gomaspan Resort, a Landmark Lakefront Destination in Iraq',
        url: '/world/content-library/accor-and-krd-holding-sign-mövenpick-erbil-gomaspan-resort-a-landmark-lakefront-destination-in-iraq',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-World/Garner-Launch-ME.png',
        title: 'IHG Hotels & Resorts to bring its midscale brand, Garner Hotels to the Middle East with a dual signing in the UAE',
        url: '/world/content-library/ihg-hotels-resorts-to-bring-its-midscale-brand-garner-hotels-to-the-middle-east-with-a-dual-signing-in-the-uae',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-World/Radisson-Residences-Al-Reem-Island-Abu-Dhabi-_-lobby-render.jpeg',
        title: 'Radisson Hotel Group strengthens Middle East and Northeast Africa growth with landmark signings, openings, and branded residences',
        url: '/world/content-library/radisson-hotel-group-strengthens-middle-east-and-northeast-africa-growth-with-landmark-signings-openings-and-branded-residences',
    },
    // {
    //     heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-World/FHS-Lifetime-Achievement-Award.jpeg',
    //     title: 'FHS WORLD 2026 OFFICIALLY OPENS IN DUBAI',
    //     url: '/world/content-library/fhs-world-2026-officially-opens-in-dubai',
    // },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-World/AMSA-VUE-a-member-of-Radisson-Individuals-_-render.jpg',
        title: 'Radisson Hotel Group strengthens Middle East and Northeast Africa growth with landmark signings, openings, and branded residences',
        url: '/world/content-library/radisson-hotel-group-strengthens-middle-east-and-northeast-africa-growth-with-landmark-signings-openings-and-branded-residences-2',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-World/Vidhi_Landscape.jpg',
        title: 'GCC set to deliver nearly 126,000 new hotel rooms by 2030, taking total supply to 616,000 keys – Cavendish Maxwell',
        url: '/world/content-library/gcc-set-to-deliver-nearly-126-000-new-hotel-rooms-by-2030-taking-total-supply-to-616-000-keys-cavendish-maxwell',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-World/Aleph-Hospitality-signs-nine-hotels-with-over-1300-keys-year-to-date.jpg',
        title: 'Aleph Hospitality signs nine hotels with over 1,300 keys year to date',
        url: '/world/content-library/aleph-hospitality-signs-nine-hotels-with-over-1-300-keys-year-to-date',
    },
    {
        heroUrl: 'https://cms.thebench.com/assets/content-library/img/FHS-World/Zacky_Landscape.jpg',
        title: 'Student accommodation and senior living among key assets shaping GCC’s future real estate market – Cavendish Maxwell',
        url: '/world/content-library/student-accommodation-and-senior-living-among-key-assets-shaping-gccs-future-real-estate-market-cavendish-maxwell',
    },
    

]

export default function Home({ globals, entry, seomatic, partners }) {
    
    const isDesktop = useCustomMediaQuery('(min-width: 600px)')

    const [ showModal, setShowModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState()

    // console.log('entry:', entry)
    // console.log('SEO — title:', JSON.parse(entry.seomatic.metaTitleContainer))
    // console.log('SEO — tags:', JSON.parse(entry.seomatic.metaTagContainer))
    // console.log('partners:', partners)
    
    

    // scroll animation
    let introRef = useRef(null)
    let { scrollYProgress } = useScroll({ 
        target: introRef,
        offset: ["start 75%", "end 0%"]
    })

    let y = useTransform( scrollYProgress, [0, 1], ["-15%", "5%"])

    return (
        <>
            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
            
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
                {handleSeomaticMeta(seomatic)}
            </Head>
        
            
            <EventsBar site={'/world'} />
            <Header
				site={`/world`}
                handle={`World`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />
            

            


            
            {/* INTRO */}
            <HeroUnitVideo
                video={'https://cms.thebench.com/assets/video/fhs-world-2026-1ay-1-highlights-opt.mp4'}
                poster={'https://cms.thebench.com/assets/video/fhs-world-2026-1ay-1-highlights-opt.jpg'}
            >
              
                {/* <div className={CSS.themeWrapperGraphics}>
                    <InfiniteRotatingTriangles
                        fill={`var(--accent)`}
                        size={`60vw`}
                        top={`-10rem`}
                        left={`-20rem`}
                        blendMode={`hard-light`}
                    />
                    
                    <InfiniteRotatingTriangles
                        size={`65vw`}
                        right={`-20rem`}
                        bottom={`-20rem`}
                        blendMode={`hard-light`}
                    />
                </div> */}


                <div style={{ position: `relative`, zIndex: 5, display: `flex`, flexDirection: `column`, alignItems: `center` }}>
                    <Fade>
                        <p className="fs-0 fw-600 lh-1 center balance">THANK YOU FOR JOINING FHS WORLD</p>
                        <p className="fs-2 center mt-xs">See you in 2027!</p>
                    </Fade>

                    <Fade delay={.25}>
                        <p className={`fs-5 fw-500 c-white mt-md balance center`} >November 2027 | Wynn Al Marjan Island, Ras Al Khaimah</p>
                    </Fade>

                   
                    <div className={ isDesktop ? `mt-sm button-grid` : `py-md button-grid`}>
                        <Pop inline delay={.5}>
                            <Button href={`https://www.eventbooking.uk.com/FHS-2027`} theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} decal={`fs-5 fw-600`}>Register for 2027</Button>
                        </Pop>
                        <Pop inline delay={.5}>
                            <Button href={`/world/download-attendee-list`} theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} decal={`fs-5 fw-600`}>Download Attendee List</Button>
                        </Pop>
                        <Pop inline delay={.5}>
                            <Button href={`/world/post-event-resources`} theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} decal={`fs-5 fw-600`}>Access Post Event Resources</Button>
                        </Pop>
                    </div>
                   
            
                </div>
                
              
            </HeroUnitVideo>


            
            {/* 2026 IN NUMBERS */}
            <section className="block bg-primary-2-dark">
                <div className="container center">
                    <p className="fs-1 fw-400 c-white">FHS World 2026 in Numbers</p>
                </div>

                <div className="container columns-4 gap-sm mt-md">
                    <ImpactCard figure={1000} unit={`+`} label={"Delegates"} />
                    <ImpactCard figure={50} unit={"+"} label={"Countries"} />
                    <ImpactCard figure={200} label={"Investors"} />
                    <ImpactCard figure={8.7} prefix={"$"} unit={"tn"} label={"in AUM"} />
                </div>

            </section>

            


            {/* SIGNINGS & ANNOUNCEMENTS */}
            <Section backgroundClass={`bg-primary`}>

                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-400 c-white">2026 Signings & Announcements</p>
                    </Fade>
                </div>

                <div className={`container columns-5 gap-xs`}>
                    {
                        ARTICLE_DATA.map((article, index) => (
                            <ContentCard
                                key={index}
                                heroUrl={article.heroUrl}
                                heading={article.title}
                                excerpt={article.excerpt}
                                url={article.url}
                            />
                        ))
                    }
                </div>

                <div className="container center">
                    <Pop>
                        <ArrowButton 
                            href={ '/sa/content-library/category/press-room' } 
                            theme={{ arrow: `white`, border: `white`, label: `white` }}
                            target={`_blank`}
                        >
                            Latest News &amp; Updates
                        </ArrowButton>
                    </Pop>
                </div>
            </Section>




            {/* 2026 PHOTO HIGHLIGHTS */}
            <section className="block bg-primary-2-dark o-hidden" style={{ position: `relative`, overflow: 'hidden' }}>
                <div className={`${CSS.photoGrid} container`}>
                    <Fade><p className='fs-1 fw-400 lh-1 center'>2026 in <span className='c-secondary'>Photos</span></p></Fade>
                    
                    <div className="columns-3 gap-xs mt-md">
                        {
                            photos.map( (photo, index) => (
                                <Pop key={index}>
                                    <div  key={index} style={{ position: `relative`}}>
                                        <Image src={photo.hero[0].url} width={photo.hero[0].width} height={photo.hero[0].height} layout={`responsive`} alt="" style={{ borderRadius: '.5rem'}} />
                                    </div>
                                </Pop>
                            ))
                        }
                        {/* <p className="mt-xs">
                            <ArrowButton href={`https://www.flickr.com/photos/benchevents/albums/`} target='_blank' theme={{ arrow: `var(--secondary)`, border: `var(--secondary)`, label: `var(--secondary)`}}>View all photos</ArrowButton>
                        </p> */}
                    </div>

                </div>

            </section>

           
            
            {/* 2026 QUOTES */}
            <section className="block bg-primary">
                <div className="container">
                    <Fade><p className='fs-1 fw-400 lh-1 center'>2026 in <span className='c-secondary'>Quotes</span></p></Fade>
                </div>
                    
                <div className={`container columns-4 gap-sm`}>
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


            <Footer />
            <LenisScroller />


            <PopupOverlay onClose={() => setShowModal(false)} show={showModal}>
                { modalContent } 
            </PopupOverlay>

        </>
    )
}
Home.theme = 'world-2024'





const Triangle = ({ fill = `var(--accent)` }) => {
    return (
        <motion.div
            animate={{ transform: "rotate(-360deg)" }}
            transition={{
                duration: 90,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 719 804"
                style={{ fillRule: `evenodd`, clipRule: `evenodd`, strokeLinejoin: `round`, strokeMiterlimit: 2 }}
            >
                <g transform="matrix(1,0,0,1,-307,-138)">
                    <g id="fhs-tri" transform="matrix(-717.399292,0,0,717.399292,1025.134974,539.999939)">
                        <path
                            d="M0.837,-0.56L1,-0.466L1,0.466L0.837,0.56L0,0.076L0,-0.076L0.837,-0.56Z"
                            style={{ fill: fill, fillRule: `nonzero` }}
                        />
                    </g>
                </g>
            </svg>
        </motion.div>
    )
}

const InfiniteRotatingTriangles = ({ size = 500, amount = 10, fill = `#4BD4ED`, top, right, bottom, left, blendMode = `` }) => {
    return (
        <div style={{
            aspectRatio: 1,
            width: size,
            position: `absolute`,
            top: top,
            right: right,
            bottom: bottom,
            left: left,
        }}>
            {[...Array(amount)].map((_, index) => (
                <motion.div
                    key={index}
                    style={{
                        width: size,
                        aspectRatio: 1,
                        scale: 1 - (index / 14) / 1.125,
                        opacity: (0 + index / 14) / 4,
                        position: 'absolute',
                        mixBlendMode: blendMode
                    }}
                    animate={{
                        rotate: [0 + (index * -5), -360 + (index * -5)],
                    }}
                    transition={{
                        duration: 90,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 719 804"
                        style={{ fillRule: `evenodd`, clipRule: `evenodd`, strokeLinejoin: `round`, strokeMiterlimit: 2 }}
                    >
                        <g transform="matrix(1,0,0,1,-1078.497,-149.908243)">
                            <g id="stubby" transform="matrix(-717.399292,0,0,717.399292,1795.89176,516.827408)">
                                <path d="M1,0.369L1,-0.369L0.754,-0.511L0.12,-0.145L0.12,0.145L0.754,0.512L1,0.369Z" style={{ fill: fill, fillRule: `nonzero` }}/>
                            </g>
                        </g>
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}









export async function getStaticProps({ params, preview, previewData }) {

    const data = await craftApolloClient( preview, previewData ).query({
        query: gql`
            query Homepage {
                globalSet(site: "${process.env.SITE_HANDLE_AE}") {
                    ... on footer_GlobalSet {
                        id
                        name
                        socialConnections {
                            ... on socialConnections_BlockType {
                                id
                                hyperlink
                                icon
                                label
                            }
                        }
                        contactDetails {
                            ... on contactDetails_BlockType {
                                id
                                body
                            }
                        }
                        hubspotForm {
                            ... on hubspotForm_BlockType {
                                id
                                formId
                                portalId
                            }
                        }
                    }
                }
                entry(site: "${process.env.SITE_HANDLE_AE}", id: "7949") {
                    id
                    title
                    ... on ${process.env.SITE_HANDLE_AE}Homepage_${process.env.SITE_HANDLE_AE}Homepage_Entry {
                        ${process.env.CONTENT_BLOCKS_HANDLE}ContentBlocks {
                            ${QueryText}
                            ${QueryFlipFlops}
                            ${QueryFloaters}
                            ${QueryBillboards}
                            ${QueryBillboardSliders}
                            ${QueryImpactFigures}
                            ${QueryVideos}
                            ${QueryProfileCarousel}
                            ${QueryForm}
                            ${QueryImages}
                        }
                        ${QuerySEO}
                    }
                }
            }
        `
    })
    const pageData = data


    const swapcardData2026 = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query {
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_AE_2026}", page:1, pageSize: 200) {
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
					"eventId": process.env.SWAPCARD_EVENT_ID_AE_2026,
					"page": 1
				}
			})
		}
	)
    const partnerData2026 = await swapcardData2026.json()
    


    return { 
        props: { 
            globals: pageData.data.globalSet,
            entry: pageData.data.entry,
            seomatic: pageData.data.entry.seomatic,
            partners: partnerData2026.data.exhibitors,
        }
    }
}

