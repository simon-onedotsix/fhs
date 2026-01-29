import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import Ticker from 'framer-motion-ticker'

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"

import { Header } from '../../fuselage/theme/egypt/common/header/header'
import { Footer } from '../../fuselage/theme/egypt/common/footer/footer'

import { Button } from "../../fuselage/theme/2024/world/components/button/button"
import { ButtonKeyline } from "../../fuselage/theme/2024/world/components/button-keyline/button-keyline"
import { ArrowButton } from "../../fuselage/components/arrow-button/arrow-button"

import { SpeakerCard } from "../../fuselage/components/speaker-card/speaker-card"
import { PopupOverlay } from "../../fuselage/components/popup-overlay/popup-overlay"

import { HeroUnitVideo } from "../../fuselage/theme/2025/world/pages/home/hero-unit-video"
import { ThemeBillboard, Tri } from "../../fuselage/theme/2025/world/pages/home/theme-billboard"

import CSS from '../../fuselage/theme/2025/sa/css/investors.module.css'



export default function Page () {

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>
        
            <Header compact />


            {/* SECTION 1 */}
            
            <section className="block">
                <div className="container center">
                    <h1 className="fs-0 caps">ABOUT FHS EGYPT</h1>
                </div>

                <div className="container center formatted">
                    <p>For over a decade, the Future Hospitality Summit has been a trusted platform for shaping hospitality investment across emerging and established markets. FHS Egypt builds on this legacy, bringing the FHS model to one of the region&apos;s most dynamic and historically significant hospitality markets. Designed as a focused investment forum, FHS Egypt connects global investors, developers, operators, and public-sector leaders to unlock new opportunities across Egypt&apos;s evolving tourism and real estate landscape.</p>
                    <p>Hosted in Cairo, FHS Egypt sits at the crossroads of Africa, the Middle East, and Europe, reflecting Egypt&apos;s strategic role as a regional gateway for capital and tourism. Backed by Egypt Vision 2030, the country is experiencing renewed momentum driven by infrastructure investment, tourism reform, and large-scale development across coastal, cultural, and urban destinations.</p>
                </div>

                <div className="container center">
                    <p><ButtonKeyline href={`/egypt/forms/become-a-partner`}>Partner with Us</ButtonKeyline></p>
                </div>
            </section>



            {/* SECTION 2 */}

            <section className="block bg-dark">
                <div className="container center">
                    <h1 className="fs-1">Audience Breakdown (Expected)</h1>
                </div>
            
                <div className="container center">
                    <p>[ Can we copy &apos;By Industry&apos; & &apos;By Seniority&apos; from here: https://www.futurehospitality.com/sa/about-fhs-saudi ]</p>
                </div>
            </section>



            {/* SECTION 3 */}

            <section className="block">
                <div className="container center">
                    <h1 className="fs-1">Event Format</h1>
                </div>
            
                <div className={`container ${CSS.cardFlexContainer}`}>
                    <Pop><Card heroUrl={'/assets/img/egypt/about/networking.jpg'}>
                        <p className='fs-4 c-primary fw-600 lh-1'>Tailored Networking</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'/assets/img/egypt/about/receptions.jpg'}>
                        <p className='fs-4 c-primary fw-600 lh-1'>Exclusive Receptions</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'/assets/img/egypt/about/leadership-stage.png'}>
                        <p className='fs-4 c-primary fw-600 lh-1'>Leadership Stage</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'/assets/img/egypt/about/tours.png'}>
                        <p className='fs-4 c-primary fw-600 lh-1'>Investor Site Tours</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'/assets/img/egypt/about/meetings.jpg'}>
                        <p className='fs-4 c-primary fw-600 lh-1'>Curated Meetings</p>
                    </Card></Pop>
                </div>
            </section>



       

            <Footer />
            <LenisScroller />
        </>
    )
}
Page.theme = 'egypt'



const Card = ({ children, heroUrl }) => {
    return (
        <div className={CSS.card}>
            <div className={CSS.cardHero}>
                <Image src={heroUrl} layout='fill' />
            </div>
            
            <div className={CSS.cardContent}>
                { children }
            </div>
        </div>
    )
}