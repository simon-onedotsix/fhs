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
import { ButtonKeyline } from "../../fuselage/theme/egypt/components/button-keyline/button-keyline"
import { ArrowButton } from "../../fuselage/components/arrow-button/arrow-button"

import { Quotation } from "../../fuselage/theme/2025/sa/components/quotation/quotation"



import CSS from '../../fuselage/theme/2025/sa/css/investors.module.css'



export default function Page () {

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>
        
            <Header compact />


            <section className="block bg-default">
                <div className="container center maxw-40">
                    <h1 className="fs-0 lh-1 caps">Why Partner with FHS Egypt 2026?</h1>
                </div>

                <div className="container center formatted">
                    <p className="fs-4 fw-600 maxw-45 mx-auto">Partnering with FHS Egypt places your brand at the heart of North Africa&apos;s hospitality investment boom.</p>
                    <p>Connect directly with senior investors, developers, and decision-makers shaping Egypt&apos;s tourism and infrastructure future. With high-impact visibility, curated networking, and access to active deal flow, FHS Egypt is where partnerships are built, influence is strengthened, and business gets done.</p>
                </div>

                <div className="container center">
                    <Pop><p><ButtonKeyline href={`/egypt/forms/download-prospectus`}>Download Prospectus</ButtonKeyline></p></Pop>
                </div>
            </section>



            {/* SECTION 2 */}

            <section className="block bg-default">
                <div className={`container ${CSS.cardFlexContainer}`}>
                    <Pop><Card heroUrl={'/assets/img/egypt/why-sponsor/global-exposure.jpg'}>
                        <p className='fs-4 c-primary fw-600 lh-1'>Global Exposure</p>
                        <p className="pt-xs">Position your brand in front of senior hospitality leaders worldwide</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'https://cms.thebench.com/assets/img/site/FHS-World/FHS-WORLD-2024-D1-GENERAL_022.jpg'}>
                        <p className='fs-4 c-primary fw-600 lh-1'>High-Level Networking </p>
                        <p className="pt-xs">Engage directly with C-suite executives and influential stakeholders </p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'https://cms.thebench.com/assets/content-library/img/FHS-World/_1200x630_crop_center-center_82_none/WhatsApp-Image-2025-09-18-at-11.04.03-2.jpeg?mtime=1759136853'}>
                        <p className='fs-4 c-primary fw-600 lh-1'>Direct Investor Access</p>
                        <p className="pt-xs">Secure curated introductions to leading global investors</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'https://cms.thebench.com/assets/img/site/FHS-World/RAY16482.jpg'}>
                        <p className='fs-4 c-primary fw-600 lh-1'>Thought Leadership Platforms</p>
                        <p className="pt-xs balance">Take the spotlight alongside industry pioneers</p>
                    </Card></Pop>
                    <Pop><Card heroUrl={'/assets/img/egypt/why-sponsor/brand-reach.webp'}>
                        <p className='fs-4 c-primary fw-600 lh-1'>Enhanced Brand Reach</p>
                        <p className="pt-xs">Amplify your presence through targeted digital campaigns</p>
                    </Card></Pop>
                </div>
            </section>


            
            {/* SECTION 3 */}


            <section className="block bg-dark">
                <div className="container center">
                    <h1 className="fs-1">What Industry Leaders Say About FHS</h1>
                </div>

                <div className="container columns-2 gap-md">
                    <Quotation
                        avatarUrl={`/assets/img/egypt/why-sponsor/aseem-kapoor.jpg`}
                        quote={`As a first time sponsor it has been a great experience. FHS provided a great platform for us to position, enhance visibility and interact with leaders, industry peers and potential clients.`}
                        fullName={`Aseem Kapoor`}
                        title={`Founder & CEO, ARK People Solutions`}
                    />
                    
                    <Quotation
                        avatarUrl={`https://cms.thebench.com/assets/img/avatars/profile_picture-26.jpeg`}
                        quote={`As in every Future Hospitality Summit, we get quality conversations rather than the big quantities that we find in other exhibitions.`}
                        fullName={`Eddy Tannous`}
                        title={`Chief Operating Officer, Rotana`}
                    />
                    
                    <Quotation
                        avatarUrl={`/assets/img/egypt/why-sponsor/al-khoori.jpg`}
                        quote={`Future Hospitality Summit is an international platform where decision makers connect, exchange knowledge and explore new partnerships.`}
                        fullName={`Abdulaziz Al Khoori `}
                        title={`Executive Director of Strategy & Transformation, Miral`}
                    />
                    
                    <Quotation
                        avatarUrl={`/assets/img/egypt/why-sponsor/jerry-mabena.jpg`}
                        quote={`The quality of the people that you interact with, the knowledge that they have, the experience, world view, regional view are extremely enriching. I'm looking forward to the next edition. For me, the quality of the panels is absolutely incredible.`}
                        fullName={`Jerry Mabena`}
                        title={`Chief Executive Officer, Motsamayi Tourism Group`}
                    />
                </div>
            </section>

            


            {/* SECTION 4 */}

            <section className="block">
                <div className="container columns-2 gap-md formatted">
                    <p className="fs-2">FHS Egypt offers a powerful platform for hospitality investment leaders to strengthen their market presence, showcase expertise, and position themselves at the forefront of Egypt&apos;s rapidly growing hospitality sector.</p>
                    
                    <section>
                        <h5>Want to find out more about sponsoring FHS Egypt?</h5>
                        <p>Please contact:</p>
                        
                        <img src="https://cms.thebench.com/assets/img/avatars/matt-weihs.png" alt="" style={{ width:`100%`, maxWidth: `12rem`, borderRadius: `.5rem`, marginBottom: `1rem`}} />

                        <p><strong>Matthew Weihs</strong><br/>Managing Director, the bench<br/>
                        Mobile / WhatsApp: + 44 (0)7858 511012<br />
                        Email: <a href="matthew.weihs@thebench.com">matthew.weihs@thebench.com</a></p>
                        
                        <p className="mt-sm"><Pop inline><ButtonKeyline href={`/egypt/contact-us`}>Contact Us</ButtonKeyline></Pop></p>
                    </section>
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


