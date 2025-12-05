import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ReactPlayer from 'react-player'

import useCustomMediaQuery from '../../../../../hooks/useCustomMediaQuery'


import CSS from './section.module.css'

export const VideoSection = ({ video, poster, themeGraphics, children, backgroundClass, minHeight }) => {

    const isDesktop = useCustomMediaQuery('(min-width: 600px)');  

    const containerRef = useRef(null)

    let { scrollYProgress } = useScroll({ 
        target: containerRef,
        offset: ["start end", "end start"]
    })

    let videoY

    isDesktop
        ? videoY = useTransform(scrollYProgress, [0, 1], ["-30vh", "30vh"])
        : videoY = useTransform(scrollYProgress, [0, 1], ["0vh", "0vh"])
    
    let graphicY = useTransform(scrollYProgress, [0, 1], ["-15vh", "15vh"])
    
    return (
        <section
            ref={containerRef}
            className={`${CSS.container}  ${backgroundClass}`}
            style={{ minHeight }}
        >

            {/* video */}
            <motion.div className={CSS.video} style={{ y: videoY }}>
                <div className={CSS.videoWrapper} style={{ marginTop: isDesktop ? 0 : 100 }}>
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
      
            {/* theme */}
            <motion.div className={CSS.theme} style={{ y: graphicY }}>
                {themeGraphics}
            </motion.div>

            {/* content */}
            <div className={`${CSS.content} block`}>
                {children}
            </div>
        </section>
    )
}


export const Section = ({ themeGraphics, children, backgroundClass, minHeight, flush = false }) => {

    const containerRef = useRef(null)

    let { scrollYProgress } = useScroll({ 
        target: containerRef,
        offset: ["start end", "end start"]
    })

    let graphicY = useTransform(scrollYProgress, [0, 1], ["-15vh", "15vh"])

    return (

        <section
            ref={containerRef}
            className={`${CSS.container}  ${backgroundClass}`}
            style={{ minHeight }}
        >

            {/* theme */}
            <motion.div className={CSS.theme} style={{ y: graphicY }}>
                {themeGraphics}
            </motion.div>

            {/* content */}
            <div className={`${CSS.content} ${flush ? '' : 'block'}`}>
                {children}
            </div>
        </section>

    )
}