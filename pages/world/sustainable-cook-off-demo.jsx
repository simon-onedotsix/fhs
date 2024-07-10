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
                    Join us at The Sustainable Cook-off at FHS World 2024: Where top chefs transform locally sourced ingredients into gastronomic masterpieces - celebrating the unique flavours of the Emirates and championing sustainability.
                </motion.p>

                <Fade>
                    <div className="mt-md center">
                        <Pop inline>
                            {/* <Button href={`/ae/purchase-pass`} theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} decal={`fs-5 fw-600`}>Purchase Your Pass</Button> */}
                            <Button 
                                href={`/world/branded-residences-forum#form`} 
                                theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} 
                                decal={`fs-5 fw-600`}
                            >Register Now</Button>
                        </Pop>
                    </div>
                </Fade>
            </HeroUnitVideo>


            <PanoSliderOverlay
                images={ [{ url: '/assets/img/world/pages/sustainable-cook-off/cook-off-pano.jpg' }] } 
                direction={'rtl'}
                opacity={0.2}
            >
                <Pop>
                    <p className='center pb-sm caps ls-2'>Powered by</p>
                    <div className='columns-3 gap-xs' style={{ width: '45vw' }}>
                        <LogoBox logo={{ 
                            url:"/assets/img/world/pages/sustainable-cook-off/logos/ECG.jpg",
                            width: 1200,
                            height: 1148
                        }} />
                        <LogoBox logo={{ 
                            url:"/assets/img/world/pages/sustainable-cook-off/logos/freshontable.png",
                            width: 426,
                            height: 85
                        }} />
                        <LogoBox logo={{ 
                            url:"/assets/img/world/pages/sustainable-cook-off/logos/UAERG.jpg",
                            width: 1114,
                            height: 463
                        }} />
                    </div>
                </Pop>
            </PanoSliderOverlay>


            <section className="block">
                <div className="container formatted maxw-90">
                    <Callout flipped image={{ url:'/assets/img/world/pages/sustainable-cook-off/cook-off-inset-01.jpg', width:3000, height:1996 }}>
                        <Fade>
                            <h2><strong className='c-secondary'>Competition Theme</strong></h2>
                            <p>The theme for the Taste of the Emirates competition is &apos;The Sustainable 7 Emirates&apos; with ingredients from the 7 emirates being the highlight. </p>
                            <p>The finals will take place at FHS World featuring the top 15 teams chosen from the pre-selection round. Finalists will cook their dishes for a panel of industry experts and Worldchefs judges at one of the lunches during FHS World.</p>
                        </Fade>
                    </Callout>
                </div>

                <div className="container formatted maxw-90">
                    <Callout image={{ url:'/assets/img/world/pages/sustainable-cook-off/cook-off-inset-02.jpg', width:3000, height:1996 }}>
                        <Fade>
                            <h2><strong className='c-secondary'>Judging Criteria </strong></h2>
                            <ul><li>Brought Material/Mise-en-Place 5 points: Clear arrangement of materials. Clean working place, proper working position, clean work clothes.</li>
                            <li>Professional Preparation 30 points: proper working technique. Correct utilisation of working time and punctual completion</li>
                            <li>Hygiene 10 points: Standard of attention paid to hygiene during the preparation of food.</li>
                            <li>Presentation/Innovation 10 points: Ingredients and side dishes must be in harmony. Points are granted for excellent combination, simplicity and originally in composition. A pleasing table decoration themed so as to best set off the food displayed.</li>
                            <li>Taste & Texture 50 points: Each dish must have appropriate taste and seasoning. In quality, flavour and colour, the dish should conform to today&apos;s standards of nutritional values.</li>
                            </ul>
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