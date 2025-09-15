import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import ReactPlayer from 'react-player'

import CSS from './hero-unit-video.module.css'

export const HeroUnitVideo = ({ children, video, poster }) => {

    if ( !video || !poster ) return

    let  scroll  = useScroll()
    let y = useTransform(scroll.scrollY, [0, 1000], ["0%", "30vh"])
    
    let patternY = useTransform(scroll.scrollY, [0, 1000], ["0%", "50vh"])

    return (
        <section className={CSS.layout}>
                
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
                    backgroundPositionY: patternY
                }}
            />


            <div className={CSS.overlay}>
                { children }
            </div>

        </section>
    )
}
