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

import { THEMES_DATA } from "./themes"
import { ThemesSlider } from "../../fuselage/theme/2024/world/components/themes-slider/themes-slider"
import { InvestorImpact } from "../../fuselage/components/impact-figure/impact-figure"
import { ButtonKeyline } from "../../fuselage/theme/2024/world/components/button-keyline/button-keyline"

import { HeroUnitVideo } from "../../fuselage/theme/2025/world/pages/home/hero-unit-video"
import { ThemeBillboard, Tri } from "../../fuselage/theme/2025/world/pages/home/theme-billboard"
import { AisLockup } from '../../fuselage/theme/2025/ais/ais-brand/ais-brand' 
import Ticker from "framer-motion-ticker"

import { LayoutGallery } from "../../fuselage/components/layout-gallery/layout-gallery"
import { PartnerGroup } from "../sa"

import CSS from '../../fuselage/theme/2026/world/css/homepage.module.css'




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
    firstName: "H․H. Sheikh Ahmed",
    id: "RXZlbnRQZW9wbGVfNDg3ODE1MjA=",
    jobTitle: "Chairman Dubai Holding, Dubai Airports,",
    lastName: "bin Saeed Al Maktoum",
    organization: "Emirates Group; President, DCAA",
    photoUrl:
      "https://static.swapcard.com/public/images/cef9710540734f0e8132b8e5155685cd.jpeg",
  },
  {
    firstName: "H․E. Abdulla",
    id: "RXZlbnRQZW9wbGVfNDc3NzQwMTE=",
    jobTitle: "Minister of Economy & Tourism",
    lastName: "bin Touq Al Marri",
    organization: "United Arab Emirates",
    photoUrl:
      "https://static.swapcard.com/public/images/8dae029be8ee4babbadde92e1d27201b.png",
  },
  {
    firstName: "William",
    id: "RXZlbnRQZW9wbGVfNDg3ODExNDM=",
    jobTitle: "Founder and Chairman",
    lastName: "Heinecke",
    organization: "Minor International PCL",
    photoUrl:
      "https://static.swapcard.com/public/images/e18c34f709d341dabb14fe98a457b65b.jpeg",
  },
  {
    
firstName
: 
"Alison",
id
: 
"RXZlbnRQZW9wbGVfNDg1NDI0Njg=",
jobTitle
: 
"Group COO & CEO, Marjan Hospitality",
lastName
: 
"Grinnell",
organization
: 
"Marjan",
photoUrl
: 
"https://static.swapcard.com/public/images/cac669535261409fa510b666809927b6.jpeg"
  },
  {
    
firstName
: 
"René",
id
: 
"RXZlbnRQZW9wbGVfNDg4MDc0NjA=",
jobTitle
: 
"Chairman of the Board of Directrors",
lastName
: 
"Nijhof",
organization
: 
"Kempinski Hotels SA",
photoUrl
: 
"https://static.swapcard.com/public/images/a8ac2237a28e494ca6abdded3bb2dc9e.jpeg"
  },
  {
    
firstName
: 
"Rahul",
id
: 
"RXZlbnRQZW9wbGVfNDg3ODEzOTk=",
jobTitle
: 
"Managing Director & CEO",
lastName
: 
"Chaudhary",
organization
: 
"CG Corp Global & CG Hospitality",
photoUrl
: 
"https://static.swapcard.com/public/images/c4f1b80ff5d740319df7cdb547dd3b8e.png"
  },
  {
    
firstName
: 
"Philippe",
id
: 
"RXZlbnRQZW9wbGVfNDczODcyODg=",
jobTitle
: 
"Chief Executive Officer",
lastName
: 
"Zuber",
organization
: 
"Kerzner International Management",
photoUrl
: 
"https://static.swapcard.com/public/images/802ca11f989a409daf7c798105d5d72e.jpeg"
  },
  {
    
firstName
: 
"Sonu",
id
: 
"RXZlbnRQZW9wbGVfNDY0NDczNTM=",
jobTitle
: 
"CEO and Founder",
lastName
: 
"Shivdasani",
organization
: 
"Sosei",
photoUrl
: 
"https://static.swapcard.com/public/images/0c846e869b3e423abadf316bec97fc13.jpeg"
  },
  {
    
firstName
: 
"Marc",
id
: 
"RXZlbnRQZW9wbGVfNDc3NTEwMDg=",
jobTitle
: 
"Chief Executive Officer",
lastName
: 
"Dardenne",
organization
: 
"Modon Hospitality",
photoUrl
: 
"https://static.swapcard.com/public/images/4ba04289ac88482b8eea156243b38993.jpeg"
  },
  {
    
firstName
: 
"Phillipa",
id
: 
"RXZlbnRQZW9wbGVfNDg2NDE2NDk=",
jobTitle
: 
"Chief Executive Officer",
lastName
: 
"Harrison",
organization
: 
"Ras Al Khaimah Tourism Development Authority",
photoUrl
: 
"https://static.swapcard.com/public/images/fc397ac30e224ac88067eebd8dedd9d1.jpeg"
  },
  {
    firstName
: 
"Abdulla",
id
: 
"RXZlbnRQZW9wbGVfNDg1NDI0Njk=",
jobTitle
: 
"Group CEO",
lastName
: 
"Al Abdouli",
organization
: 
"Marjan",
photoUrl
: 
"https://static.swapcard.com/public/images/22a04421bd994291aea73d3e313a832f.jpeg"
  },
  {
    
firstName
: 
"Miltos",
id
: 
"RXZlbnRQZW9wbGVfNDg1MTgxNzM=",
jobTitle
: 
"Chief Executive Officer",
lastName
: 
"Bosinis",
organization
: 
"H&H",
photoUrl
: 
"https://static.swapcard.com/public/images/8916ab17c1ca4bdab4ec5e9194df9834.jpeg",
  },
  {
    
firstName
: 
"Raki",
id
: 
"RXZlbnRQZW9wbGVfNDgxMTYzNjY=",
jobTitle
: 
"Regional President - Middle East, Africa & Türkiye",
lastName
: 
"Phillips",
organization
: 
"ACCOR",
photoUrl
: 
"https://static.swapcard.com/public/images/a81cfad726f04c4890deb52f5b1b581d.jpeg"
  },
  {
    
firstName
: 
"Dr. Moath",
id
: 
"RXZlbnRQZW9wbGVfNDg2ODc0OTU=",
jobTitle
: 
"Chief Executive Officer",
lastName
: 
"Alyahya",
organization
: 
"Knowledge Economic City",
photoUrl
: 
"https://static.swapcard.com/public/images/9b956b3026a34a23be710625678dbe19.jpeg"
  },
  {
    
firstName
: 
"Dean",
id
: 
"RXZlbnRQZW9wbGVfNDg2NDIyNTE=",
jobTitle
: 
"Senior Vice President of Hospitality",
lastName
: 
"Rossilli",
organization
: 
"DAMAC Properties",
photoUrl
: 
"https://static.swapcard.com/public/images/640f073a69774d899c075069cb339841.jpeg"
  },
];

const INDUSTRY_DATA = [
    {
        label: 'Hotel Operator/Management',
        value: 22
    },
    {
        label: 'Investor (Equity)/Owner',
        value: 21
    },
    {
        label: 'Consultant/Advisor',
        value: 13
    },
    {
        label: 'Architecture/Design',
        value: 10
    },
    {
        label: 'Hotel Developer/Builder',
        value: 9
    },
    {
        label: 'Government/Tourism Official',
        value: 7
    },
    {
        label: 'Technology/Innovation',
        value: 6
    },
    {
        label: 'Real Estate Broker/Surveyor',
        value: 3
    },
    {
        label: 'Other',
        value: 10
    },
    
]

const INVESTORS = [
    { title: "Al Futtaim Real Estate" },
    { title: "Al-Raya Real Estate Company" },
    { title: "Arada Hospitality and Entertainment" },
    { title: "Arbireo Capital" },
    { title: "Arzan Investment Management" },
    { title: "Cain" },
    { title: "Cipta Graha Group" },
    { title: "Core Investment Co." },
    { title: "Corvus Capital" },
    { title: "Deyaar Development PJSC" },
    { title: "EQT – MONE Investment" },
    { title: "Family business office grandbuild" },
    { title: "Fields of Gold (F.O.G.) Capital & Asset Mgt Corp." },
    { title: "First Abu Dhabi Bank" },
    { title: "HAMA MEA - BEAUFORT" },
    { title: "Hospitality Asset Managers Association Middle East and Africa" },
    { title: "Jabal Omar Development Company" },
    { title: "Kapur & Partners" },
    { title: "Katara Hospitality" },
    { title: "Limestone Capital" },
    { title: "Mashreq Bank" },
    { title: "ME & West Investments" },
    { title: "Millat Group" },
    { title: "Modon Holding Hospitality" },
    { title: "Mohamed Saeed Almulla & Sons" },
    { title: "Musstir" },
    { title: "Pulse Hotels and Resorts" },
    { title: "Qatar Islamic Bank UK plc" },
    { title: "Radisson Collection, A Fridays Boracay Resort" },
    { title: "RAK Properties" },
    { title: "Rockshieldburg" },
    { title: "SAMHI Hotels" },
    { title: "Sharjah Investment and Development Authority - Shurooq" },
    { title: "Uganda Hotel Owners Association" },
    { title: "Uganda Investment Authority" },
    { title: "Wasl" },
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
                video={'https://cms.thebench.com/assets/video/fhs-2025-world-opt.mp4'}
                poster={'https://cms.thebench.com/assets/video/fhs-2025-world-opt-poster.jpg'}
            >
              
                <div className={CSS.themeWrapperGraphics}>
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
                </div>

                <div className={CSS.heroLayout}>

                    {/* tagline */}
                    <section style={{ alignSelf: 'flex-end' }}>
                        <div className={CSS.headline}>
                            <Reveal delay={.5}>
                                <p className={CSS.tagline}>Reinvest</p>
                            </Reveal>
                            <Reveal delay={.75}>
                                <p className={CSS.tagline}>In Our Future</p>
                            </Reveal>
                        </div>

                        <Fade delay={1.2}>
                            <p className={`fs-5 fw-500 c-white mt-md balance`} >29 September - 1 October 2026, Madinat Jumeirah, Dubai</p>
                        </Fade>

                        <Fade>
                            <div className={ isDesktop ? `mt-sm button-grid` : `columns-1 gap-xs mt-sm mb-md`}>
                                <Pop inline delay={1.3}>
                                    {
                                        isDesktop 
                                            ? <Button href={`/world/download-fhs-event-brochure`} theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white` }} decal={`fs-5 fw-600`}>View Event Brochure</Button>
                                            : <Button href={`/world/purchase-pass`} theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} decal={`fs-5 fw-600`}>Register Here</Button>
                                    }
                                </Pop>
                                <Pop inline delay={1.3}>
                                    <Button href={`/world/download-attendee-list`} theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} decal={`fs-5 fw-600`}>Download Attendee List</Button>
                                </Pop>
                            </div>
                        </Fade>
                    </section>

                    {/* patronage boxout */}
                    <section style={{ alignSelf: 'flex-end' }}>
                        <Pop>
                            <div className={CSS.patronBox}>
                                <div className={CSS.patronBoxAvatar}>
                                    <Pop inline>
                                        <div className={CSS.avatar}>
                                            <Image src={"https://cms.thebench.com/assets/img/avatars/H.H.-Sheikh-Ahmed-bin-Saeed-Al-Maktoum.jpeg"} layout='fill' alt="" unoptimized />
                                        </div>
                                    </Pop>
                                </div>

                                <div className={CSS.patronBoxContent}>
                                    <Pop delay={.1}>
                                        <p className="fs-sm fw-500 c-secondary caps">Under the Patronage of</p>
                                        <p className="fw-600 balance mt-xxs">HH Sheikh Ahmed bin Saeed Al Maktoum</p>
                                        <p className="mt-xxs balance"> Chairman Dubai Holding, Dubai Airports, Emirates Group; President, DCAA</p>
                                    </Pop>
                                </div>
                            </div>
                        </Pop>
                    </section>
                </div>
                
              
            </HeroUnitVideo>

            
            <section className="block bg-primary-2-dark" style={{ paddingBottom: `var(--space-md)` }}>
                <div className="container center columns-2 gap-md maxw-40">
                    <section style={{ display: `inline-block`, backgroundColor: `white`, borderRadius: `1rem`, padding: `1rem 2rem` }}>
                        <p className='c-secondary center pb-xxs caps ls-2'>Strategic Enabler</p>
                        <div style={{ width: `100%`, maxWidth: '18rem', margin: '0 auto' }}>
                            <img src="https://static.swapcard.com/public/images/efee38fce437485fa6261d5124cc0bd6.png" alt="logo" width={`100%`} />
                        </div>
                    </section>
                   
                    <section style={{ display: `inline-block`, backgroundColor: `white`, borderRadius: `1rem`, padding: `1rem 2rem` }}>
                        <p className='c-secondary center pb-xxs caps ls-2'>Host Partner</p>
                        <div style={{ width: `100%`, maxWidth: '18rem', margin: '0 auto' }}>
                            <img src="https://static.swapcard.com/public/images/3c4a24e94d43465f80d3051983b112a6.png" alt="logo" width={`100%`} />
                        </div>
                    </section>
                </div>
            </section>


            {/* INVESTORS */}
            <section className="block bg-primary-2-dark" style={{ paddingBottom: `var(--space-md)`}}>
                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 lh-1 caps">Investors Attending FHS World 2026</p>
                    </Fade>
                    
                    {/* <div className="columns-4 gap-sm mt-md">
                        <InvestorImpact figure={5.4} prefix={"$"} unit={"tn"} label={"ASSETS UNDER MANAGEMENT"} />
                        <InvestorImpact figure={300} unit={'+'} label={"INVESTORS"} />
                        <InvestorImpact figure={65} unit={"%"} label={"INVESTORS ATTENDING FIRST TIME"} />
                        <InvestorImpact figure={35} unit={"%"} label={"INVESTORS FROM NON-GCC COUNTRIES"} />
                    </div> */}
                </div>

            </section>
            
            <section className="bg-primary-2-dark">
                <Ticker duration={40}>
                    {
                        INVESTORS.map((investor, index) => (
                            <div key={index} style={{ marginRight: 10 }}>
                                <p className="fs-5 fw-500"><span className="c-accent">&bull;</span> {investor.title}</p>
                            </div>
                        ))
                    }
                </Ticker>
            </section>
            
            <section className="block bg-primary-2-dark pt-md">
                <div className="container center">
                    <Pop>
                        <ButtonKeyline 
                            href={'/world/sample-list-of-attending-investors'} 
                            decal={'fs-5 fw-600'} 
                            color={'var(--primary)'}
                        >
                            View Sample List of Attending Investors
                        </ButtonKeyline>
                    </Pop>
                </div>
            </section>

            

            {/* SPEAKER HIGHLIGHTS */}
            {
                SPEAKERS &&
                <section className="block bg-secondary">

                    <div className="container center">
                        <p className="fs-1 fw-600 c-primary caps">2026 Speakers</p>
                    </div>
                        
                    <div className="container columns-5 gap-sm">
                        {
                            SPEAKERS.map((profile, index) => (
                                <Pop key={index}>
                                    <SpeakerCard
                                        url={`world/speakers/${profile.id}`}
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


            <section className="block bg-dark">
                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 lh-1 caps">FHS Living at FHS World</p>
                    </Fade>
                </div>

                <div className="container center columns-1 gap-xs maxw-65">
                    <p className="fs-4">Held adjacently with FHS World, this exclusive one-day forum will explore the hotelisation of real-estate assets, focusing on nine asset classes.</p>
                    <p className="fs-5 balance">Branded Residences <span className="c-accent">&bull;</span> Student Accommodation <span className="c-accent">&bull;</span> Senior Living <span className="c-accent">&bull;</span> Serviced Living <span className="c-accent">&bull;</span> Co-Living <span className="c-accent balance">&bull;</span> Shared Ownership <span className="c-accent">&bull;</span> Club Concepts <span className="c-accent">&bull;</span> Mixed Use <span className="c-accent">&bull;</span> Hotels &amp; Resorts</p>
                    <p className="balance c-accent"><i>FHS Living will take place on the Summit Stage entirely on Day 3. Access to FHS Living is limited to Premium and FHS Living Pass holders.</i></p>
                </div>

                <div className="container center">
                    <Pop><ButtonKeyline href={`/world/living`} decal={`fs-5 fw-600`} >Learn more</ButtonKeyline></Pop>
                </div>
            </section>

            

            {/* WHO ATTENDS */}
            <section className="block bg-primary">
                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 lh-1 caps">Who Attends FHS World</p>
                    </Fade>
                </div>

                <div className="container columns-2 gap-md">
                    <section>
                        <p className="fs-4 fw-500 pb-sm">By Industry:</p>
                        <BarChart>
                            {
                                INDUSTRY_DATA &&
                                INDUSTRY_DATA.map(( field, index) => <Field key={index} label={field.label} value={field.value} unit={'%'} normalise={{ min: 3, max: 22 }} />)
                            }
                        </BarChart>
                    </section>
                   
                    <section>
                        <p className="fs-4 fw-500 pb-sm">By Geography:</p>
                        <GlobalMap />
                    </section>
                </div>
            </section>

            

            {/* THEMES */}
            <section className={`block bg-primary-2-dark`}>
                <ThemesSlider data={THEMES_DATA} />
            </section>


            
            {/* PARTNERS */}
            <section className="block bg-white">
                <div className="container center">
                    <Pop><p className="fs-2 fw-600 c-primary balance">Thank You to Our 2026 Partners</p></Pop>
                </div>

                <div className="container mt-lg">
                    <LayoutGallery>
                        <PartnerGroup partnerData={partners} start={0} end={17} />
                        <PartnerGroup partnerData={partners} start={18} end={35} />
                        <PartnerGroup partnerData={partners} start={36} end={53} />
                        <PartnerGroup partnerData={partners} start={54} end={69} />
                    </LayoutGallery>
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
                                        <Image src={photo.hero[0].url} width={photo.hero[0].width} height={photo.hero[0].height} layout={`responsive`} alt="" style={{ borderRadius: '.5rem'}} />
                                    </div>
                                </Pop>
                            ))
                        }
                        <p className="mt-xs">
                            <ArrowButton href={`https://www.flickr.com/photos/benchevents/albums/`} target='_blank' theme={{ arrow: `var(--secondary)`, border: `var(--secondary)`, label: `var(--secondary)`}}>View all photos</ArrowButton>
                        </p>
                    </div>

                </div>

                {/* <motion.div className={CSS.highlightsGraphicWapper} style={{ y }}>
                    
                    <InfiniteRotatingTriangles
                        fill={`var(--accent)`}
                        size={`120vw`}
                        right={`-20rem`}
                        top={`-40rem`}
                    />
                </motion.div> */}
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

