import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { useLenis } from '@studio-freight/react-lenis'

import _ from 'lodash'

import { motion } from "framer-motion"

import { Header } from '../../fuselage/theme/2025/ais/common/header/header'
import { Footer } from '../../fuselage/theme/2025/ais/common/footer/footer'

import { HeroUnitVideo } from "../../fuselage/theme/2024/world/blocks/hero-unit-video/hero-unit-video"
import { Button } from "../../fuselage/theme/2025/ais/components/button/button"

import { Pop, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"
import { Callout } from '../../fuselage/theme/2024/world/blocks/callout/callout'
import HubspotForm from '../../fuselage/components/hubspot-form/hubspot-form'

import { QuoteSlider } from '../../fuselage/theme/2024/world/components/quote-slider/quote-slider'



import CSS from '../../css/app/agenda-world-2024.module.css'





export default function Page () {

    const lenis = useLenis()



    return (
        <>
            <Header overlaid inverse />

            <HeroUnitVideo video={'https://cms.thebench.com/assets/video/fhs-2024-world-opt.mp4'} poster={'/assets/video/fhs-2024-world-opt-poster.jpg'}>

                <div style={{ width: 500, maxWidth: '70vw', margin: '0 auto' }}>
                    <img src="/assets/img/ais/ais-logo.svg" alt="logo" width="100%" />
                </div>

                <p className='fs-4 fw-600 c-white caps center mt-sm'>27 October 2025 <br/>08:30–13:00</p>


                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-5 c-white center mt-xs maxw-45 mx-auto`} 
                >
                    Held as part of <strong className='fw-600'>FHS World</strong>, this summit aims to enhance economic and tourism partnerships between the UAE and African nations.
                </motion.p>

                <Pop>
                    <div className="container maxw-60 pt-lg">
                            <p className='c-peach center pb-sm caps ls-2'>Brought to you by:</p>
                        <section className='flex ai-center gap-md jc-center'>
                            <div style={{ width: 400, maxWidth: '70vw', display: 'inline-block' }}>
                                <img src="/assets/img/ais/uae-ministry.png" alt="logo" width="100%" />
                            </div>
                            <div style={{ width: 150, maxWidth: '70vw', display: 'inline-block' }}>
                                <img src="/assets/site/the-bench-inverse@2x.png" alt="logo" width="100%" />
                            </div>
                        </section>
                    </div>
                </Pop>

            </HeroUnitVideo>



            {/* CALLOUTS */}
            <section className="block bg-default pt-md">
                <div className="container formatted maxw-90">
                    <Callout
                        image={{ url:'/assets/img/ais/ais-01.jpg', width:2000, height:1335 }}
                    >
                        <Fade>
                            <p className='fs-2 fw-600 lh-2'>Why Africa</p>
                            <p className="fs-5 c-white">Africa&apos;s tourism and hospitality sector is expanding rapidly, with <strong className='fw-600'>577</strong> hotels and resorts in development, totaling <strong className='fw-600'>104,444</strong> rooms, a 13.3% year-on-year increase, outpacing global growth. International tourist arrivals reached <strong className='fw-600'>74</strong> million in 2024, up 12% from 2023 and 7% above 2019 levels.</p>
                        </Fade>
                    </Callout>
                </div>

                <div className="container formatted maxw-90">
                    <Callout flipped
                        image={{ url:'/assets/img/ais/ais-02.jpg', width:2000, height:1403 }}
                    >
                        <Fade>
                            <p className='fs-2 fw-600 lh-2'>Ministry of Economy & Tourism partners with The Bench to host &apos;Africa Investment Summit&apos; at FHS World 2025</p>
                            <p className="fs-5 c-white">The event will gather <strong className='fw-600'>250+</strong> senior officials, investors, and tourism leaders from <strong className='fw-600'>53</strong> African nations to drive partnerships and boost investment in hospitality, tourism, and related sectors.</p>
                        </Fade>
                    </Callout>
                </div>
            </section>





            {/* TESTIMONIALS */}
            <section className="block bg-default">
                <div className="container maxw-70">

                    <QuoteSlider 
                        color={'white'}
                        testimonials={[
                            {
                                quote: "The UAE Africa Tourism Investment Summit will serve as a strategic platform for exchanging insights and expertise between the UAE and African nations, supporting sustainable development efforts through the establishment of projects and partnerships that serve mutual interests. This aligns with the objectives of 'We the UAE 2031' vision, which aims to position the country as a leading global hub for the new economy, driven by international partnerships and future-focused sectors.",
                                avatar: [
                                    {
                                        url: "/assets/img/ais/quotes/badreya-al-maidoor.jpg",
                                        width: "800",
                                        height: "800"
                                    }
                                ],
                                fullName: "H.E. Badreya Al Maidoor",
                                jobTitle: "Assistant Undersecretary of Support Services Sector at Ministry Of Economy, UAE"
                            },
                            {
                                quote: "We are honoured to partner with the UAE Ministry of Economy & Tourism to launch the UAE Africa Tourism Investment Summit as part of FHS World 2025. This collaboration reflects our shared ambition to accelerate investment and development across Africa's hospitality sector. The UAE has long served as a bridge between global capital and emerging markets, and this new platform will strengthen the connections between African nations and the international investment community. Together, we are creating an ecosystem that fosters meaningful dialogue, unlocks deal flow, and drives long-term economic growth across the continent.",
                                avatar: [
                                    {
                                        url: "/assets/img/ais/quotes/jonathan-worsley.jpg",
                                        width: "800",
                                        height: "800"
                                    }
                                ],
                                fullName: "Jonathan Worsley",
                                jobTitle: "Chairman & CEO of The Bench"
                            }
                        ]} />

                </div>
            </section>



            {/* FORM */}
            <section id="form" className="block bg-primary-2">
                <div className="container formatted center maxw-50">
                    <p className="fs-1 fw-600">Register Interest for UAE Africa Tourism Investment Summit</p>
                    <p className='fs-6'>Please note that this is an invitation-only event for select C-level operators and investors, and registration does not guarantee attendance for all applicants.</p>
                </div>
                <div className="container maxw-70">
                    <HubspotForm portalId='14527187' formId='2bea127b-7387-446e-8d0e-7404e01b2933' />
                </div>
            </section>


            <Footer />
            <LenisScroller />
        </>
    )
}

Page.theme = 'global-2024'


