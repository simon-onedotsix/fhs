import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import ReactPlayer from 'react-player'

import CSS from './hero-unit-video.module.css'

export const HeroUnitVideo = ({ children, video, poster }) => {

    if ( !video || !poster ) return

    let ref = useRef(null)

    let { scrollYProgress } = useScroll({ 
        target: ref,
        offset: ["start end", "end start"]
    })

    let y = useTransform( scrollYProgress, [0, 1], [`-20vh`, `20vh`])

    return (
        <section ref={ref} className={CSS.layout}>
                
            <motion.div className={CSS.video} style={{ y }}>

                <div className={CSS.videoWrapper}>
                    <ReactPlayer
                        url={video}
                        config={{ attributes: { poster: poster } }}
                        width='100%'
                        height='100%'
                        controls={false}
                        muted={true}
                        playing={true}
                        loop={true}
                        playsinline={true}
                    />
                </div>

            </motion.div>

            <motion.div className={CSS.brandPattern}
                style={{
                    backgroundImage: `url(/assets/theme/africa/fhs-africa-battik-yellow.png)`,
                    backgroundPositionY: y
                }}
            />


            <div className={CSS.overlay}>
                { children }
            </div>

        </section>
    )
}
