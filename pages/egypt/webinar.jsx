import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import useCustomMediaQuery from '../../hooks/useCustomMediaQuery'

import Head from "next/head"

import Ticker from 'framer-motion-ticker'

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"
import { Reveal } from "../../fuselage/animation/reveal"


import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_EGYPT as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/egypt/common/footer/footer'

import { Countdown } from "../../fuselage/theme/egypt/components/countdown/countdown"

import { Button } from "../../ui/buttons/button"
import { ButtonKeyline } from "../../fuselage/theme/egypt/components/button-keyline/button-keyline"
import { PageHeroThemed } from "../../fuselage/theme/egypt/page-hero-themed/page-hero-themed"
import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'
import { ThemeBillboard } from "../../fuselage/theme/2025/world/pages/home/theme-billboard"
import { SpeakerCard } from "../../fuselage/components/speaker-card/speaker-card"
import { PopupOverlay } from "../../fuselage/components/popup-overlay/popup-overlay"
import { Billboard } from '../../fuselage/blocks/billboard/billboard'
import { EventCardLite } from '../../fuselage/theme/2024/world/blocks/upcoming-events/upcoming-events'
import { ContentCard } from "../../fuselage/theme/2024/world/components/content-card/content-card"
import { Carousel } from "../../fuselage/blocks/carousel/carousel"



import CSS from '../../fuselage/theme/egypt/css/homepage.module.css'



export const WEBINAR_SPEAKER_DATA = [
    {
        url: ``,
        photoUrl: '/assets/img/egypt/webinar/hala.png',
        fullName: 'HALA MATAR CHOUFANY',
        jobTitle: 'President',
        company: 'HVS Middle East, Africa and South Asia',
    },
    {
        url: ``,
        photoUrl: '/assets/img/egypt/webinar/alain.jpg',
        fullName: 'ALAIN DEBARE',
        jobTitle: 'Partner – Head of Investments and Asset Management',
        company: 'HVS Middle East and Africa',
    },
    {
        url: ``,
        photoUrl: '/assets/img/egypt/webinar/maged.jpg',
        fullName: 'MAGED SALAH',
         jobTitle: 'Managing Director',
        company: 'Misr Abu Dhabi for Real Estate Investments',
    },
    {
        url: ``,
        photoUrl: '/assets/img/egypt/webinar/ghada-shalaby.jpg',
        fullName: 'HE DR. GHADA SHALABY',
        jobTitle: 'Former Vice Minister',
        company: 'Ministry of Tourism and Antiquities of Egypt',
    }
]



export default function Home () {


    const isDesktop = useCustomMediaQuery('(min-width: 600px)');

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/egypt/favicon-16x16.png" sizes="16x16" />
            </Head>
        
            
            <EventsBar site={'/egypt'} />
            <Header
                site={`/egypt`}
                handle={`Egypt`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />




            
            <section className="block bg-primary">
                <div className="container center">
                    <p className="fs-1 fw-500 lh-1 balance">WEBINAR: Egypt&apos;s Hospitality Market: Between Global Ambition and Local Reality</p>
                </div>

                <div className="container center">
                    <p className="fs-5"><strong>Thursday, 21 May 2026</strong> | <strong>15:00 – 16:00</strong> (Egypt Standard Time)</p>
                </div>

                <div className="container center">
                    <Pop inline><Button decal={`fs-5`} href={`https://youtu.be/l1e0wJV3T90`} target={`_blank`} rel={`noreferrer`} label={`Watch the Webinar`}></Button></Pop>
                </div>
            </section>


            <section className="block bg-primary">
                <div className="container center">
                    <p className="fs-2 fw-600">Confirmed Speakers</p>
                </div>

                <div className="container columns-4 gap-sm maxw-60 center">
                    {
                        WEBINAR_SPEAKER_DATA.map( (profile, index) => (
                            <Pop key={index}>
                                <SpeakerCard
                                    photoUrl={profile.photoUrl}
                                    fullName={profile.fullName}
                                    jobTitle={profile.jobTitle}
                                    company={profile.company}
                                    color={'white'}
                                />
                            </Pop>
                        ))
                    }
                </div>
            </section>


            <section className="block bg-primary">
                <div className="container center maxw-50 formatted">
                    <p>Egypt remains Africa&apos;s leading hospitality investment market, with a record pipeline of 185 hotels and nearly 46,000 rooms, more than four times that of Morocco. Greater Cairo alone represents 18% of the continent&apos;s total hotel pipeline, underscoring the scale of opportunity.</p>
                    <p>On 21 May, this FHS Egypt Webinar will convene leading voices from across the Industry to discuss hospitality transactions and development pipelines, investment appetite and financing realities, government priorities driving tourism growth, and where the market is heading next.</p>
                </div>
            </section>





            <Footer />
            <LenisScroller />

        </>
    )
}
Home.theme = 'egypt'


const Card = ({ children }) => {
    return (
        <Pop>
            <div className="bg-primary p-sm" style={{ borderRadius: `1rem`, height: `100%`, display: `flex`, alignItems: `center`, justifyContent: `center` }}>
                { children }
            </div>
        </Pop>
    )
}

const LayerSection = ({ layers = [] }) => {
    return (
        <section
            style={{
                width: `100%`,
                // overflow: `hidden`,
                position: `relative`,
                display: `grid`,
                gridTemplateRows: 1
            }}
        >
            {
                layers.map((layer, index) => (
                    <div
                        key={index}
                        style={{
                            width: `100vw`,
                            gridArea: `1 1 2 2`,
                            zIndex: layer.zIndex,
                        }}
                    >
                        {layer.content}
                    </div>
                ))
            }
        </section>
    )
}

const SplitSection = ({ children, bottom }) => {
    return (
        <div
            className={CSS.splitSection}
            style={{
                display: `grid`,
                gridTemplateRows: `1fr 1fr`,
                gap: `var(--space-lg)`,
            }}
        >
            <div
                style={{
                    gridArea: bottom ? `2/1 / 3/2` : `1/1 / 2/2`,
                    alignSelf: bottom ? `center` : ``,
                }}
            >
                { children }
            </div>
        </div>
    )
}


