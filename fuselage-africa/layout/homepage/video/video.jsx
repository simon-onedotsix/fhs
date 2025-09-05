import Image from 'next/image'

import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'
import { Leaf } from '../../../theme/leaf/leaf'

import { VideoPlayer } from '../../../components/video-player/video-player'

import CSS from './video.module.css'

export const Video = () => {

    let containerRef = useRef(null)

    let { scrollYProgress } = useScroll({ 
        target: containerRef,
        offset: ["start end", "end start"]
    })

    let wavesY = useTransform( scrollYProgress, [0, 1], ['8vw', '32vw'])

    let leafX = useTransform( scrollYProgress, [0, 1], ['60%', '70%'])
    let leafY = useTransform( scrollYProgress, [0, 1], ['20%', '20%'])
    let leafR = useTransform( scrollYProgress, [0, 1], ['5deg', '-30deg'])

    let y = useTransform( scrollYProgress, [0, 1], ['-4vw', '4vw'])


    return (
        <section ref={containerRef} className={CSS.layout}>

            <div className={CSS.topGraphic}>
                <Image src={`/assets/theme/cream-bottom-01.png`} layout={`fill`} alt='' />
            </div>
            
            <div className={CSS.underlay}>
                <motion.div className={CSS.waves} style={{ position: `absolute`, top: 0, left: 0, aspectRatio: 1680/595, width: `100%`, y: wavesY }}>
                    <Image src={`/assets/theme/waves.png`} layout={`fill`} alt='' />
                </motion.div>

                <motion.div style={{ x: leafX, y: leafY, rotate: leafR }}>
                    <Leaf />
                </motion.div>
            </div>

            <div className={`${CSS.content} block`}>
                <motion.div className={CSS.grid} style={{ y }}>
                    <section className='pl-sm bl-1 bc-white'>
                        <p className='fs-1 fw-700'>AHIF 2024 video highlights</p>
                    </section>

                    <section>
                        <div className={CSS.videoWrapper}>
                        <VideoPlayer videoUrl={`https://www.youtube.com/watch?v=s5pKoHX83Nk`} />
                        </div>
                    </section>
                </motion.div>
            </div>

        </section>
    )
}