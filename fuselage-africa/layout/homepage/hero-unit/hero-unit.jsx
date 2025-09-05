import Image from 'next/image'

import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'

import { Pulse } from '../../../theme/pulse/pulse'
import { Leaf } from '../../../theme/leaf/leaf'
import { Button } from '../../../components/button/button'

import { Countdown } from '../../../components/countdown/countdown'

import CSS from './hero-unit.module.css'

export const HeroUnit = () => {

    // main container

    let containerRef = useRef(null)
    
    let  scroll  = useScroll({ 
        target: containerRef,
        offset: ["start end", "end start"]
    })
    let heroY = useTransform( scroll.scrollY, [0, 1000], ["0%", "15%"])
    let introY = useTransform( scroll.scrollY, [0, 1000], ["-5%", "15%"])


    // elements

    let { scrollYProgress } = useScroll({ 
        target: containerRef,
        offset: ["start end", "end start"]
    })
    let wavesY = useTransform( scrollYProgress, [0, 1], ['-10%', '30%'])

    let cornerLeafY = useTransform( scrollYProgress, [0, 1], ['-20vw', '10vw'])

    let leafX = useTransform( scrollYProgress, [0, 1], ['2vw', '6vw'])
    let leafY = useTransform( scrollYProgress, [0, 1], ['5vw', '20vw'])
    let leafR = useTransform( scrollYProgress, [0, 1], ['5deg', '-30deg'])
    
    let pulseY = useTransform( scrollYProgress, [0, 1], ['0vh', '30vh'])



    return (

        <div ref={containerRef} className={CSS.container}>

            <div className={CSS.heroUnderlay} />
            <div className={CSS.introUnderlay} />
            
            <motion.section  className={`${CSS.heroContainer} block`} style={{ y: heroY }}>


                <motion.div className={CSS.waves} style={{ position: `absolute`, top: 0, left: 0, aspectRatio: 1680/595, width: `100%`, y: wavesY }}>
                    <Image src={`/assets/theme/waves.png`} layout={`fill`} alt='' />
                </motion.div>

                <div className={`${CSS.heroGrid} container`}>
                    <section className={CSS.strapline} >
                        <p className={CSS.heading}><span>Stay Tuned for Updates on AHIF 2025</span></p>
                        <p className='fs-5 fw-600 mt-sm'><Button href={'/post-event-resources'}>Post Event Resources</Button></p>
                        <p className='fs-5 fw-600 mt-sm'><Button href={'/agenda'}>AHIF 2024 Programme</Button></p>
                    </section>

                    <section className={CSS.graphics} style={{ position: `relative` }}>
                        
                        <motion.div style={{ x: `80%`, y: cornerLeafY, rotate: `30deg`, scale: 1.25 }}>
                            <Leaf />
                        </motion.div>

                        <motion.div style={{ x: leafX, y: leafY, rotate: leafR }}>
                            <Leaf />
                        </motion.div>

                        <motion.div style={{ y: pulseY, x: `50%` }}>
                            <Pulse />
                        </motion.div>
                    </section>
                </div>
            </motion.section>

            <section className={`${CSS.introContainer} block`}>

                <div className={CSS.introBg}>
                    <div className={CSS.duneTop} style={{ aspectRatio: 1680/450, width: `100%`, marginTop: `-12vw` }}>
                        <Image src={`/assets/theme/dune-top-01.png`} layout={`responsive`} width={1680} height={450} alt='' />
                    </div>

                    <div style={{ backgroundColor: `#FE7C02` }} />                    
                    
                    <div className={CSS.duneTop} style={{ aspectRatio: 1680/330, width: `100%`, marginTop: `-12vw`, marginBottom: -1 }}>
                        <Image src={`/assets/theme/cream-top-01.png`} layout={`responsive`} width={1680} height={330} alt='' />
                    </div>
                </div>

                <motion.div className={`${CSS.introContentGrid} container`} style={{ y: introY }}>
                    <div style={{ position: `relative`, width: `100%`, aspectRatio: 2048/1157, backgroundColor: `black`, borderRadius: `var(--default-radius)`, overflow: `hidden` }}>
                        <Image src={`/assets/img/homepage/hero-2023.jpg`} layout={`responsive`} width={2048} height={1157} alt='' />
                    </div>

                    <section>
                        <p className='fs-2 fw-600'>Connecting Africa</p>
                        <p className='fs-5 mt-sm'>Attended by the highest calibre international hotel investors of any conference in Africa, AHIF is the leading hospitality investment conference that connects business leaders from the international and local markets, driving investment into tourism projects, infrastructure and hotel development across Africa.</p>
                    </section>
                </motion.div>

                <div style={{ height: `20vh`}}/>
            </section>


            <div className={CSS.boxout}>
                <Countdown expiryDate={'06/01/2024'}>
                    <p className='fs-5 fw-600 lh-1 px-xs'>Standard Rate Expiring soon! <br/><a href='https://www.eventbooking.uk.com/AHIF-2024/?_gl=1*1oezg75*_gcl_au*OTkxMTcwMDkyLjE3MTEzNTE0MzM.&_ga=2.17144944.855991689.1711365151-1660313267.1711351432'>Register now</a> to Save $250</p>
                </Countdown>
            </div>
        </div>

    )
}
