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
import { LogoBox } from '../../fuselage/components/logo-box/logo-box'


export default function Page () {

    const lenis = useLenis()

    return (
        <>
            <Header overlaid inverse />

            <HeroUnitVideo video={'/assets/img/world/pages/sustainable-cook-off/food-challenge-hero.mp4'} poster={'/assets/img/world/pages/sustainable-cook-off/food-challenge-hero.jpg'}>
                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-0 fw-700 c-white lh-1 center`} 
                >
                    Sustainable Cook&#8209;off
                </motion.p>

                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    className={`fs-4 c-white center mt-md maxw-45 mx-auto`} 
                >
                    Join us at The Sustainable Cook-off at FHS World 2024, where top chefs transform locally sourced ingredients into gastronomic masterpieces - celebrating the unique flavours of the Emirates and championing sustainability.
                </motion.p>

                {/* <Fade>
                    <div className="mt-md center">
                        <Pop inline>
                            <Button 
                                href={`/world/branded-residences-forum#form`} 
                                theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} 
                                decal={`fs-5 fw-600`}
                            >Register Now</Button>
                        </Pop>
                    </div>
                </Fade> */}
            </HeroUnitVideo>


            <PanoSliderOverlay
                images={ [{ url: '/assets/img/world/pages/sustainable-cook-off/cook-off-pano.jpg' }] } 
                direction={'rtl'}
                opacity={1}
            >
            
            </PanoSliderOverlay>

            <section className="block">
                <div className="container center">
               
                    <Fade><p className='center pb-sm caps ls-2'>Powered by</p></Fade>
                    <div className='columns-4 gap-xs'>
                        <Pop>
                            <LogoBox logo={{ 
                                url:"/assets/img/world/pages/sustainable-cook-off/logos/freshontable.png",
                                width: 426,
                                height: 85
                            }} />
                        </Pop>
                        <Pop>
                            <LogoBox logo={{ 
                                url:"/assets/img/world/pages/sustainable-cook-off/logos/hama.png",
                                width: 1114,
                                height: 463
                            }} />
                        </Pop>
                        <Pop>
                            <LogoBox logo={{ 
                                url:"/assets/img/world/pages/sustainable-cook-off/logos/ECG.jpg",
                                width: 1200,
                                height: 1148
                            }} />
                        </Pop>
                        <Pop>
                            <LogoBox logo={{ 
                                url:"/assets/img/world/pages/sustainable-cook-off/logos/UAERG.jpg",
                                width: 1114,
                                height: 463
                            }} />
                        </Pop>
                    </div>
                
                </div>
            </section>

            <section className="block">
                <div className="container formatted maxw-90">
                    <Callout flipped image={{ url:'/assets/img/world/pages/sustainable-cook-off/cook-off-inset-01.jpg', width:3000, height:1996 }}>
                        <Fade>
                            <h2><strong className='c-secondary'>About The Competition</strong></h2>
                            <p className='fs-6'>The Sustainable Cook-off at FHS World is an exciting culinary competition that brings together top chefs from across the Emirates to create innovative dishes using locally sourced ingredients.</p>
                            <p className='fs-6'>The competition will take place during FHS World from 30 September - 02 October at Madinat Jumeirah, Dubai.</p>
                        </Fade>
                    </Callout>
                </div>

                <div className="container formatted maxw-90">
                    <Callout image={{ url:'/assets/img/world/pages/sustainable-cook-off/cook-off-inset-02.jpg', width:3000, height:1996 }}>
                        <Fade>
                            <h2><strong className='c-secondary'>Theme </strong></h2>
                            <p className='fs-6'>The theme for the Taste of the Emirates competition is &apos;The Sustainable 7 Emirates&apos; with ingredients from the 7 emirates being the highlight. Celebrating sustainability and culinary excellence, the finalists will be presenting their creations to a panel of esteemed judges.</p>
                        </Fade>
                    </Callout>
                </div>
                
                <div className="container formatted maxw-90">
                    <Callout flipped image={{ url:'/assets/img/world/pages/sustainable-cook-off/cook-off-inset-03.jpg', width:3000, height:1996 }}>
                        <Fade>
                            <h2><strong className='c-secondary'>Showcasing Culinary Excellence </strong></h2>
                            <p className='fs-6'>The Sustainable Cook-off will be an opportunity for aspiring chefs to showcase their culinary excellence to FHS delegates. During the event, the top 15 teams&apos; dishes will be replicated by the Madinat Culinary Team and served to FHS delegates. Each dish will highlights the unique flavors of the seven Emirates while promoting environmentally responsible cooking practices.</p>
                        </Fade>
                    </Callout>
                </div>
            </section>
            

            {/* <section id="form" className="block">
                <div className="container center">
                    <p className="fs-1 fw-600">Register Your Interest</p>
                </div>
                <div className="container maxw-70">
                    <HubspotForm portalId='14527187' formId='b27737f1-fdbb-438d-a39a-27ff6c12d24c' />
                </div>
            </section> */}


            <Footer />
            <LenisScroller />
        </>
    )
}

Page.theme = 'world-2024'