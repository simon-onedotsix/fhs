import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

import { motion, useScroll, useTransform } from "framer-motion"

import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'
import { HeroUnitVideo } from "../../fuselage/theme/2024/world/blocks/hero-unit-video/hero-unit-video"
import { Button } from "../../fuselage/theme/2024/world/components/button/button"
import { ArrowButton } from '../../fuselage/components/arrow-button/arrow-button'


import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"
import { PanoSlider, PanoSliderOverlay } from "../../fuselage/components/pano-slider/pano-slider"
import { Callout } from '../../fuselage/theme/2024/world/blocks/callout/callout'
import HubspotForm from '../../fuselage/components/hubspot-form/hubspot-form'


export default function Page () {

    const lenis = useLenis()

    return (
        <>
            <Header overlaid inverse />

            <HeroUnitVideo video={'/assets/video/fhs-2024-world-beanded-residences-opt.mp4'} poster={'/assets/video/fhs-2024-world-beanded-residences-opt.jpg'}>
                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-0 fw-700 c-white lh-1 center`} 
                >
                    Branded Residences Forum
                </motion.p>

                <Pop>
                    <div className='mt-sm mb-md'>
                        <p className='c-secondary center pb-sm caps ls-2'>Brought to you by</p>
                        <div style={{ width: 400, maxWidth: '40vw', margin: '0 auto' }}>
                            <img src="/assets/img/brf/accor-one-living.svg" alt="logo" />
                        </div>
                    </div>
                </Pop>

                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-4 c-secondary center mt-xs maxw-45 mx-auto caps ls-2`} 
                >
                    2 October 2024<br/>
                    Madinat Jumeirah, Dubai
                </motion.p>

                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-4 c-white center mt-sm maxw-45 mx-auto`} 
                >
                    Held adjacently with <strong>FHS World</strong>, this exclusive one-day forum will explore the thriving sector of Branded Residences.
                </motion.p>

                <Fade>
                    <div className="mt-sm center">
                        <Pop inline>
                            {/* <Button href={`/ae/purchase-pass`} theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} decal={`fs-5 fw-600`}>Purchase Your Pass</Button> */}
                            <Button 
                                href={`/world/purchase-pass`} 
                                theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} 
                                decal={`fs-5 fw-600`}
                            >Purchase Pass</Button>
                        </Pop>
                    </div>
                </Fade>
            </HeroUnitVideo>


            {/* <PanoSliderOverlay
                images={ [{ url: '/assets/img/brf/brf-2024-pano-02.jpg' }] } 
                direction={'rtl'}
                opacity={0.2}
            >
                <Pop>
                    <p className='c-secondary center pb-md caps ls-2'>Brought to you by</p>
                    <div style={{ width: 300, maxWidth: '45vw' }}>
                        <img src="/assets/img/brf/accor-one-living-stack.svg" alt="logo" />
                    </div>
                </Pop>
            </PanoSliderOverlay> */}


            {/* <PanoSlider images={ [
                { url: '/assets/img/brf/brf-2024-pano-01.jpg' }
            ] } /> */}

            <section className="block pt-md">
                <div className="container formatted maxw-90">
                    <Callout flipped image={{ url:'/assets/img/brf/brf-2024-image-06.jpg', width:2000, height:1333 }}>
                        <Fade>
                            <p className='fs-2 fw-600 c-secondary'>Key Topics</p>
                            <p className="fs-5">The forum will feature workshops and conference sessions around key topics including:</p> 
                            <ul className='mt-xs'>
                                <li>Dynamic Co-working Concepts</li>
                                <li>How Shared Living is Evolving</li>
                                <li>Serviced Apartments / Extended Stay  - Demand Continues to Exceed Supply</li>
                                <li>How Private Clubs are Becoming The Fastest Growing Workplace </li>
                                <li>How Investors Can Leverage Unprecedented ROIs</li>
                                <li>Operator&apos;s Perspective - Diversifying Revenue Streams with Security</li>
                                <li>Demystifying Legal Structures and Concepts in Branded Residences</li>
                                <li>Lifestyle Branded Residences - Design, Innovation & Wellness</li>
                                <li>Strategies to Align Interests and Navigate Complexities in Rental Programs</li>
                                <li>Future Opportunities and Potential in Branded Residences</li>
                            </ul>
                        </Fade>
                    </Callout>
                </div>
            </section>

            <section className="block">
                <div className="container formatted maxw-90">
                    <Callout image={{ url:'/assets/img/brf/brf-2024-image-04.jpg', width:2000, height:1331 }}>
                        <Fade>
                            <p className='fs-2 fw-600 lh-2 c-secondary'>Unprecedented Growth Trends</p>
                            <p className="fs-4">The branded residences sector is experiencing a period of unprecedented growth, globally.</p> 
                            <p className="fs-4">The sector has grown more than 160% over the last decade with approximately 1,300 branded residential projects globally as of&nbsp;2023.</p>
                        </Fade>
                    </Callout>
                </div>
            </section>

            <section className="block">
                <div className="container formatted maxw-90">
                    <Callout flipped image={{ url:'/assets/img/brf/brf-2024-image-05.jpg', width:2000, height:1428 }}>
                        <Fade>
                            <p className='fs-2 fw-600 lh-2 c-secondary'>Accor One Living and FHS World Partnership</p>
                            <p>To host this forum, FHS World has partnered with Accor One Living, a dedicated mixed-use platform from Accor that has been at the forefront of driving the branded residences sector, showcasing an impressive portfolio that spans a diverse collection of brands throughout ultra-prime urban locations and the most sought-after resort destinations.</p> 
                            <p>Each residential community supported by Accor One Living is meticulously designed and serviced to meet the demanding standards of the Accor brand it represents. The Branded Residences Forum by Accor One Living is an opportunity to engage with industry leaders, learn more about the branded residential sector, and explore the Accor One Living platform, its participating brands and communities as well as its promising pipeline.</p>
                            <p className='mt-sm'>
                                <a className='button center' href={ 'https://accor-residences.com/' } target={ '_blank' } rel="noreferrer">
                                    Learn more about Accor&nbsp;One&nbsp;Living
                                </a>
                            </p>
                        </Fade>
                    </Callout>
                </div>
            </section>
            
            
            
            {/* <section className="block">
                <div className="container center">
                    <Pop inline>
                        <Button href={`/ae/purchase-pass`} theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} decal={`fs-5 fw-600`}>Purchase Your Pass</Button>
                    </Pop>
                </div>
            </section> */}


            <section id="form" className="block">
                <div className="container center">
                    <p className="fs-1 fw-600">Register Your Interest</p>
                </div>
                <div className="container maxw-70">
                    <HubspotForm portalId='14527187' formId='b27737f1-fdbb-438d-a39a-27ff6c12d24c' />
                </div>
            </section>


            <Footer />
            <LenisScroller />
        </>
    )
}

Page.theme = 'world-2024'