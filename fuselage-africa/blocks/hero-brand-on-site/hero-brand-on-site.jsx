import { useRef } from 'react'

import Image from 'next/image'

import ReactPlayer from 'react-player'

import { motion, useScroll, useTransform } from "framer-motion"

import { Reveal } from '../../animation/reveal'
import { Pop, Fade, Slide } from '../../animation/animation'

import { Button } from '../../components/button/button'
import { ButtonSocial } from "../../components/button-social/button-social"

import CSS from './hero-brand-on-site.module.css'

export function HeroBrandOnSite ({ children, theme }) {


    // scroll animation
    let  scroll  = useScroll()
    let y = useTransform( scroll.scrollY, [0, 1000], ["0%", "30vh"])


    return (
        
        <section className={`${CSS.layout} ${ theme ? theme : `bg-primary`}`} >

            {/* static image [mobile only] */}
            <div className={CSS.heroImage}>
                <Image src={`/assets/img/homepage/hero-2025-b.jpg`} layout={`fill`} width={1920} height={1000} alt="" priority />
            </div>

            {/* video [desktop only] */}
            <div className={CSS.heroVideo}>
                <motion.div className={CSS.videoWrapper} style={{ y }}>
                    <ReactPlayer
                        url={'https://cms.thebench.com/assets/video/fhs-2025-africa-opt.mp4'}
                        config={{ attributes: { poster: 'https://cms.thebench.com/assets/video/fhs-2025-africa-opt.jpg' } }}
                        width='100%'
                        height='100%'
                        controls={false}
                        muted={true}
                        playing={true}
                        loop={true}
                    />
                </motion.div>
            </div>

            <div className={`${CSS.panel} block`}>
                <p className={CSS.brand}>
                    <span>Together</span> we invest
                </p>

                <div className='mt-sm button-grid'>
                    <Pop inline>
                        <Button href={'https://www.eventbooking.uk.com/AHIF-2026?_ga=2.7860276.723499015.1756208208-747783354.1720527023'} decal={'fs-6 fw-600'}>Purchase Pass</Button>
                    </Pop>
                    <Pop inline>
                        <Button href={'/get-involved-in-2026'} decal={'fs-6 fw-600'}>Get Involved in 2026</Button>
                    </Pop>
                </div>

                <Pop>
                    <div className="formatted my-md" style={{ borderTop: `1px solid var(--primary)`}}>
                        <p className="fs-3 fw-500 caps lh-1 c-primary pt-sm">New for 2025!</p>
                        <p className="fw-600 fs-2 lh-1">UAE Africa Tourism Investment Summit</p>
                        <p className='mt-xs'><Button href={`https://www.futurehospitality.com/world/ais`} decal={`fw-600`}>Learn more &rarr;</Button></p>
                    </div>
                </Pop>
            </div>

            <section className={CSS.content}>
                <p className={CSS.theme}>
                    Join the conversation on social media
                </p>
                <div className="mt-sm button-grid">
                    <Pop inline>
                        <ButtonSocial href={'https://www.linkedin.com/showcase/ahif/'} icon={'linkedin'} decal={'bg-black'}/>
                    </Pop>
                    <Pop inline>
                        <ButtonSocial href={'https://www.facebook.com/AHIFsocial'} icon={'facebook'} decal={'bg-black'}/>
                    </Pop>
                    <Pop inline>
                        <ButtonSocial href={'https://www.instagram.com/ahifsocial/'} icon={'instagram'} decal={'bg-black'}/>
                    </Pop>
                    <Pop inline>
                        <ButtonSocial href={'https://x.com/AHIF_News'} icon={'twitter'} decal={'bg-black'}/>
                    </Pop>
                </div>
            </section>

            {/* <section className={CSS.graphic}>
                <Image src={`/assets/img/homepage/brand-pattern-horizontal.jpg`} layout={`fill`} width={1920} height={1000} alt="" priority />
            </section> */}

        </section>

    )
}