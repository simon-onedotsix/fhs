import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import Ticker from 'framer-motion-ticker'

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_EGYPT as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/egypt/common/footer/footer'

import { Button } from "../../fuselage/theme/2024/world/components/button/button"
import { ButtonKeyline } from "../../fuselage/theme/egypt/components/button-keyline/button-keyline"
import { ArrowButton } from "../../fuselage/components/arrow-button/arrow-button"

import { SpeakerCard } from "../../fuselage/components/speaker-card/speaker-card"
import { PopupOverlay } from "../../fuselage/components/popup-overlay/popup-overlay"

import { HeroUnitVideo } from "../../fuselage/theme/2025/world/pages/home/hero-unit-video"
import { ThemeBillboard, Tri } from "../../fuselage/theme/2025/world/pages/home/theme-billboard"

import CSS from '../../fuselage/theme/2024/world/css/homepage.module.css'



export default function Page () {

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
            
            <section className="block bg-default">
                <div className="container">
                    <h1 className="fs-0 caps">Contact Us</h1>
                    <p className="balance maxw-55">For any general event or registration queries, you can email us at <a href="mailto:hello@thebench.com">hello@thebench.com</a>. For specific queries, please contact the following members of our team for any assistance.</p>
                </div>

                <div className="container formatted columns-3 gap-md">
                    <section>
                        <h6>SPONSORSHIP ENQUIRIES</h6>
                       <Pop inline><Photo src={"https://cms.thebench.com/assets/img/site/The-Bench/adult_2025-02-24-114332_lxdz.jpg"}/></Pop>
                        <p><strong>Matthew Weihs</strong><br/>
                        Growth Director, The Bench<br/>
                        E: matthew.weihs@thebench.com</p>
                        
                        <h6>OPERATIONAL ENQUIRIES</h6>
                       <Pop inline><Photo src={"https://cms.thebench.com/assets/img/avatars/Mala-BW-use-this.png"}/></Pop>
                        <p><strong>Mala Patel</strong><br/>
                        Event Director – Africa | COO, AviaDev, The Bench<br/>
                        E: mala.patel@thebench.com</p>
                    </section>

                    <section>
                        <h6>PROGRAMME ENQUIRIES</h6>
                        <Pop inline><Photo src={"https://cms.thebench.com/assets/img/site/The-Bench/adult_2025-02-24-130915_gvpl.jpg"}/></Pop>
                        <p><strong>Tanja Millner</strong><br/>
                        Programme Director<br/>
                            E: tanja.millner@thebench.com</p>
                        
                        <h6>INVESTOR RELATIONS ENQUIRIES</h6>
                        <Pop inline><Photo src={"https://cms.thebench.com/assets/img/site/The-Bench/marina-adult.webp"}/></Pop>
                        <p><strong>Marina Franolic</strong><br/>
                        Head of Investor Relations<br/>
                        E: marina.franolic@thebench.com</p>
                    </section>

                    <section>
                        <h6>MARKETING OR MEDIA ENQUIRIES</h6>
                        <Pop inline><Photo src={"https://cms.thebench.com/assets/img/site/The-Bench/ahmed-adult.webp"}/></Pop>
                        <p><strong>Muhammad Ahmed</strong><br/>
                        Head of Marketing, The Bench<br/>
                        E: muhammad.ahmed@thebench.com</p><br />

                        <Pop inline><Photo src={"https://cms.thebench.com/assets/img/site/The-Bench/ibrahim-adult.webp"}/></Pop>
                        <p><strong>Muhammad Ibrahim Mohsin</strong><br/>
                        Marketing Lead, The Bench<br/>
                        E: ibrahim.mohsin@thebench.com</p>
                    </section>
                    
                </div>
            </section>


       

            <Footer />
            <LenisScroller />

        </>
    )
}
Page.theme = 'egypt'


const Photo = ({ src }) => {
    return (
        <div style={{ position: `relative`, width: `10rem`, aspectRatio: 1, borderRadius: `1rem`, overflow: `hidden`, marginBottom: `1rem` }}>
            <img src={ src } alt="" style={{ objectFit: `cover`, width: `100%`, filter: `grayscale(100%)`}} />
        </div> 
    )
}
