import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"


import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_WORLD as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'

import { FhsIcon, FhsIconKeyline } from "../../fuselage/theme/2024/world/components/logos/fhs-brand"
import { SpeakerCarousel } from "../../fuselage/theme/2024/world/blocks/speaker-carousel/speaker-carousel"
import { ImpactFigure } from "../../fuselage/theme/2024/world/components/impact-figure/impact-figure"
import { Button } from "../../fuselage/theme/2024/world/components/button/button"
import { Callout } from '../../fuselage/theme/2024/world/blocks/callout/callout'

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

import { THEMES_DATA } from "./themes"
import { ThemesSlider } from "../../fuselage/theme/2024/world/components/themes-slider/themes-slider"
import { InvestorImpact } from "../../fuselage/components/impact-figure/impact-figure"
import { ButtonKeyline } from "../../fuselage/theme/2024/world/components/button-keyline/button-keyline"

import { HeroUnitVideo } from "../../fuselage/theme/2025/world/pages/home/hero-unit-video"
import { ThemeBillboard, Tri } from "../../fuselage/theme/2025/world/pages/home/theme-billboard"
import { AisLockup } from '../../fuselage/theme/2025/ais/ais-brand/ais-brand' 
import Ticker from "framer-motion-ticker"

import { getAllSpecialFields } from "../../lib/swapcard/get-all-special-fields"

import CSS from '../../fuselage/theme/2024/world/css/homepage.module.css'


const photos = [
    {
        "id": "13864",
        "hero": [
            {
                "id": "50183",
                "url": "/assets/img/world/pages/home/fhs-world-2025-05.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "13865",
        "hero": [
            {
                "id": "50184",
                "url": "/assets/img/world/pages/home/fhs-world-2025-03.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "13867",
        "hero": [
            {
                "id": "50186",
                "url": "/assets/img/world/pages/home/fhs-world-2025-02.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "13868",
        "hero": [
            {
                "id": "50187",
                "url": "/assets/img/world/pages/home/fhs-world-2025-04.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "50206",
        "hero": [
            {
                "id": "50189",
                "url": "/assets/img/world/pages/home/fhs-world-2025-01.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "50207",
        "hero": [
            {
                "id": "50193",
                "url": "/assets/img/world/pages/home/fhs-world-2025-10.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "13868",
        "hero": [
            {
                "id": "50187",
                "url": "/assets/img/world/pages/home/fhs-world-2025-07.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "50206",
        "hero": [
            {
                "id": "50189",
                "url": "/assets/img/world/pages/home/fhs-world-2025-08.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "50207",
        "hero": [
            {
                "id": "50193",
                "url": "/assets/img/world/pages/home/fhs-world-2025-09.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    }
]

const SPEAKERS = [
    {
        "id": "RXZlbnRQZW9wbGVfNDY1MDgzNTg=",
        "type": "Speaker",
        "firstName": "Ho",
        "lastName": "Kwon Ping",
        "jobTitle": "Founder and Executive Chairman",
        "organization": "Banyan Group",
        "photoUrl": "https://static.swapcard.com/public/images/03a47481a1344b03a90e04c057017377.jpeg",
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDY1MDg0OTk=",
        "type": "Speaker",
        "firstName": "Artur",
        "lastName": "Gerber",
        "jobTitle": "Chief Executive Officer",
        "organization": "TUI BLUE Hotels & Resorts",
        "photoUrl": "https://cdn-api.swapcard.com/public/images/0f23ecf59ba442a396d3bcf6966bbcfe.png",
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDY1MDg1MTA=",
        "type": null,
        "firstName": "Selim",
        "lastName": "El Zein",
        "jobTitle": "Vice President - Head of Asset Management & Investments",
        "organization": "Deyaar Development PJSC",
        "photoUrl": "https://static.swapcard.com/public/images/210f46e7564649758cb2d6105c085e2c.jpeg",
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDY4MTM0MDA=",
        "type": null,
        "firstName": "Jaidev",
        "lastName": "Menezes",
        "jobTitle": "Regional Vice President, Mixed-Use Development EMEA",
        "organization": "Marriott International",
        "photoUrl": "https://static.swapcard.com/public/images/22a5723e4e294c73987b5bee25753722.jpeg",
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDY4MTM4NjM=",
        "type": null,
        "firstName": "Ina",
        "lastName": "Plunien",
        "jobTitle": "Senior Vice President - Hospitality",
        "organization": "Cain",
        "photoUrl": "https://static.swapcard.com/public/images/f3904a243c764ec494f2fe2976dbf82c.jpeg",
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDY0NDczNDg=",
        "type": null,
        "firstName": "Amit",
        "lastName": "Arora",
        "jobTitle": "Chief Operating Officer",
        "organization": "Arada Hospitality and Entertainment",
        "photoUrl": "https://static.swapcard.com/public/images/cb22de0ff76c48e080aa1ad8b770b936.jpeg",
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDY1MDgyMDA=",
        "type": "Speaker",
        "firstName": "Hala Matar",
        "lastName": "Choufany",
        "jobTitle": "President Middle East & Africa",
        "organization": "HVS MEA",
        "photoUrl": "https://static.swapcard.com/public/images/3089081b17034fe2a54e72640f0a6a87.jpeg",
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDY0NDczNTI=",
        "type": "Speaker",
        "firstName": "Eddy",
        "lastName": "Tannous",
        "jobTitle": "Chief Operating Officer",
        "organization": "Rotana Hotels",
        "photoUrl": "https://static.swapcard.com/public/images/b883ce7dcd704266b4d35a1add04a681.jpeg",
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDY0NDczNTM=",
        "type": null,
        "firstName": "Sonu",
        "lastName": "Shivdasani",
        "jobTitle": "CEO and Founder",
        "organization": "Sosei",
        "photoUrl": "https://static.swapcard.com/public/images/0c846e869b3e423abadf316bec97fc13.jpeg",
    },
    {
        "id": "RXZlbnRQZW9wbGVfNDY0NDczNDI=",
        "type": "Moderator",
        "firstName": "Georgette",
        "lastName": "Davey",
        "jobTitle": "Managing Director",
        "organization": "Abu Dhabi Hospitality Academy - Les Roches",
        "photoUrl": "https://static.swapcard.com/public/images/1cbee61643fe41a0bb825740f1d57e57.jpeg",
    },
]



export default function Home ({ globals, entry, seomatic, partnerData }) {

    const [ showModal, setShowModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState()

    // console.log('entry:', entry)
    // console.log('SEO — title:', JSON.parse(entry.seomatic.metaTitleContainer))
    // console.log('SEO — tags:', JSON.parse(entry.seomatic.metaTagContainer))	


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
            
            {/* <Header compact shim /> */}

            <HeroUnitVideo video={'https://cms.thebench.com/assets/video/fhs-2025-world-opt.mp4'} poster={'https://cms.thebench.com/assets/video/fhs-2025-world-opt-poster.jpg'}>
                <ThemeBillboard />
            </HeroUnitVideo>

            

            {/* <section className="block o-hidden pt-xs">
                <Pop>
                    <div className={`${CSS.aisPromo}`}>
                        <header className={CSS.aisPromoHeader}>
                            <Ticker duration={6}>
                                <p className="fs-3 fw-600">Thank you for joining us&thinsp;<span className="c-white fw-100">–</span>&thinsp;</p>
                                <p className="fs-3 fw-600">Thank you for joining us&thinsp;<span className="c-white fw-100">–</span>&thinsp;</p>
                                <p className="fs-3 fw-600">Thank you for joining us&thinsp;<span className="c-white fw-100">–</span>&thinsp;</p>
                                <p className="fs-3 fw-600">Thank you for joining us&thinsp;<span className="c-white fw-100">–</span>&thinsp;</p>
                                <p className="fs-3 fw-600">Thank you for joining us&thinsp;<span className="c-white fw-100">–</span>&thinsp;</p>
                                <p className="fs-3 fw-600">Thank you for joining us&thinsp;<span className="c-white fw-100">–</span>&thinsp;</p>
                            </Ticker>
                        </header>

                        <section className="center">
                            <Pop delay={.1}>
                                <div className={CSS.aisLogo}>
                                    <img src="/assets/img/ais/ais-logo.svg" alt="" />
                                </div>
                            </Pop>
                            <Pop delay={.1}><p className="fs-5 fw-600 mt-xxs mb-xxs">27 October 2025</p></Pop>
                            <Pop delay={.2}><p className={CSS.aisSlug}>Invitation Only</p></Pop>
                            
                        </section>

                        <section>
                            <div className={CSS.aisPatronBox}>
                                <div className={CSS.aisPatronBoxAvatar}>
                                    <Pop delay={.1}>
                                        <div className={CSS.aisAvatar}>
                                            <Image src={"/assets/img/ais/mohammed-bin-rashid-al-maktoum.jpg"} layout='fill' alt="" unoptimized />
                                        </div>
                                    </Pop>
                                </div>

                                <div className={CSS.aisPatronBoxContent}>
                                    <Pop delay={.2}>
                                        <p className="fs-4 fw-600 c-secondary caps pb-xs">Under the Patronage of</p>
                                        <p className="fs-5 fw-600">His Highness Sheikh Mohammed bin Rashid Al Maktoum</p>
                                        <p className="mt-xxs">UAE Vice President, Prime Minister and Ruler of Dubai</p>
                                    </Pop>
                                </div>
                            </div>
                        </section>

                        <section className="center">
                            <Pop delay={.3}>
                                <ButtonKeyline 
                                    href={'/world/ais'} 
                                    decal={'fs-5 fw-600'} 
                                    color={'var(--primary)'}
                                    target={'_blank'}
                                >
                                    Learn More
                                </ButtonKeyline>
                            </Pop>
                        </section>

                    </div>
                </Pop>
            </section> */}



            {/* INVESTORS */}

            <section className="block bg-primary-2-dark">
                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 lh-1 caps">Investors at FHS World</p>
                    </Fade>
                    <div className="columns-4 gap-sm mt-md">
                        <InvestorImpact figure={5.4} prefix={"$"} unit={"tn"} label={"ASSETS UNDER MANAGEMENT"} />
                        <InvestorImpact figure={300} unit={'+'} label={"INVESTORS"} />
                        <InvestorImpact figure={65} unit={"%"} label={"INVESTORS ATTENDING FIRST TIME"} />
                        <InvestorImpact figure={35} unit={"%"} label={"INVESTORS FROM NON-GCC COUNTRIES"} />
                    </div>
                    <p className="mt-md">
                        <Pop>
                            <ButtonKeyline 
                                href={'https://14527187.fs1.hubspotusercontent-na1.net/hubfs/14527187/FHS%20World%202025/Sample%20Investors.pdf?utm_campaign=FHS%20World%202025&utm_source=hs_email&utm_medium=email&_hsenc=p2ANqtz-_ZjXU77wgbeP6Mk-gH3B2dnRljrMZNbQWuOUGEywiuegyGkftu7Da86ewwLfPW8t19fs4W'} 
                                decal={'fs-5 fw-600'} 
                                color={'var(--primary)'}
                                target={'_blank'}
                            >
                                View Sample List of Attending Investors
                            </ButtonKeyline>
                        </Pop>
                    </p>
                </div>
            </section>


            {/* SPEAKER HIGHLIGHTS */}

            {
                SPEAKERS &&
                <section className="block bg-secondary">

                    <div className="container center">
                        <p className="fs-0 fw-600 c-primary">2026 Speakers</p>
                    </div>
                        
                    <div className="container columns-5 gap-sm">
                        {
                            SPEAKERS.map((profile, index) => (
                                <Pop key={index}>
                                    <SpeakerCard
                                        url={`world/speakers/profile/${profile.slug}`}
                                        photoUrl={profile.photoUrl ? profile.photoUrl : null }
                                        fullName={`${profile.firstName} ${profile.lastName}`}
                                        jobTitle={profile.jobTitle}
                                        company={profile.organization}
                                        specialField={profile.id === "247717" && "Award Winner – Lifetime Achievement Award"}
                                    />
                                </Pop>
                            ))
                        }
                    </div>
                    

                    <div className="block bg-secondary">
                        <div className='container center'>
                            <div className="button-grid">
                                <ArrowButton href={`/world/speakers`} theme={{ arrow: "c-primary", border: "c-primary", label: "c-primary"}} >View All Speakers</ArrowButton>
                                <ArrowButton href={`/world/agenda`} theme={{ arrow: "c-primary", border: "c-primary", label: "c-primary"}} >View Agenda</ArrowButton>
                            </div>
                        </div>
                    </div>
                </section>
                
            }


            {/* THEMES */}

            <div className={CSS.themeWrapper}>
                <div className={CSS.themeWrapperGraphics}>
                    <div className={CSS.graphic01}>
                        <Pop>
                            <Tri fill={''} />
                        </Pop>
                    </div>
                </div>

                <section className={`${CSS.themeWrapperContent} block`}>
                    <ThemesSlider data={THEMES_DATA} link={'/world/themes'} linkLabel={'Learn More'} />
                </section>
            </div>

            


            {/* PATRONAGE */}
            
            <section className="block bg-primary-2">
                <div className="container center">
                    <p className="fs-3 fw-600 c-secondary caps pb-sm">Under the Patronage of</p>

                    <div className={CSS.patronBox}>

                        <div className={CSS.patronBoxAvatar}>
                            <Pop>
                                <div className={CSS.avatar}>
                                    <Image src={"https://cms.thebench.com/assets/img/avatars/H.H.-Sheikh-Ahmed-bin-Saeed-Al-Maktoum.jpeg"} layout='fill' alt="" unoptimized />
                                </div>
                            </Pop>
                        </div>

                        <div className={CSS.patronBoxContent}>
                            <Pop>
                                <p className="fs-4 fw-600">His Highness Sheikh Ahmed bin Saeed Al Maktoum</p>
                                <p className="fs-5 mt-xxs">
                                    Founding Patron, AHIC/FHS
                                </p>
                                <p className="fs-5 mt-xxs">
                                    President, Dubai Civil Aviation Authority
                                </p>
                                <p className="fs-5 mt-xxs">
                                    Chairman, Dubai Airports
                                </p>
                                <p className="fs-5 mt-xxs">
                                    Chairman and Chief Executive, Emirates Airline & Group
                                </p>
                                <p className="fs-5 mt-xxs">
                                    Chairman, Dubai Holding
                                </p>

                            </Pop>
                        </div>
                    </div>
                    
                    <p className="mt-xs caps fs-sm c-secondary"><Link href={'/world/speakers/profile/h-h-sheikh-ahmed-bin-saeed-al-maktoum'}><a className="uLink">View biography</a></Link></p>
                </div>
            </section>



            {/* VIDEO + PHOTO HIGHLIGHTS */}

            <section className="block o-hidden" style={{ position: `relative`, overflow: 'hidden' }}>
                <div className={`${CSS.highlightVideoGrid} container`}>
                    <Slide><p className='fs-0 fw-700 lh-1'>Highlights from <span className='c-secondary'>FHS World 2025</span></p></Slide>
                    <VideoPlayer theme={`dark`} maxWidth={`100`} videoUrl={`https://youtu.be/fj2Q68dkw4c`} />
                </div>

                <div className={`${CSS.photoGrid} container`}>
                    <Slide><p className='fs-0 fw-700 lh-1 mt-lg'>2025 in <span className='c-secondary'>Photos</span></p></Slide>
                    
                    <div className="columns-3 gap-xs mt-md">
                        {
                            photos.map( (photo, index) => (
                                <Pop key={index}>
                                    <div key={photo.id} style={{ position: `relative`}}>
                                        <Image src={photo.hero[0].url} width={photo.hero[0].width} height={photo.hero[0].height} layout={`responsive`} alt="" />
                                    </div>
                                </Pop>
                            ))
                        }
                        <p className="mt-xs">
                            <ArrowButton href={`https://www.flickr.com/photos/benchevents/albums/`} target='_blank' theme={{ arrow: `var(--secondary)`, border: `var(--secondary)`, label: `var(--secondary)`}}>View all photos</ArrowButton>
                        </p>
                    </div>

                </div>

                <motion.div className={CSS.highlightsGraphicWapper} style={{ y }}>
                    {/* <FhsIconKeyline inverse /> */}
                    <Tri/>
                </motion.div>
            </section>


            {/* SPONSORSHIP FORM */}

            <section id="sponsor-form" className="block bg-white o-hidden">
                <div className="container columns-2 gap-lg">
                    <div className="formatted">
                        <Slide><h1>Become a <span className='c-secondary'>Partner</span></h1></Slide>
                        <Fade><p>For over two decades - government leaders, tourism ministries, global travel &amp; tourism associations, the world&apos;s most influential hospitality brands, hotel owners &amp; investors, renowned restaurant groups, airlines &amp; aviation authorities, destination developers, asset managers, financial groups and consultants - have been participating in The Bench&apos;s events for their respective objectives. These include AHIF, GRIF, FHS, AHF, IDEEA, AviaDev and RENEW - where industry players showcase their brands, position themselves as thought leaders or innovators, and connect with the right opportunities and knowledge. Speak with one of our sales team members to understand how you can make the most of this unique opportunity!<br /></p></Fade>
                    </div>

                    <div>
                        <HubspotForm portalId={`14527187`} formId={`65f4705e-45dc-4e1f-8d89-858947d3ac40`} />
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
Home.theme = 'world-2024'




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


    return { 
        props: { 
            globals: pageData.data.globalSet,
            entry: pageData.data.entry,
            seomatic: pageData.data.entry.seomatic,
        }
    }
}