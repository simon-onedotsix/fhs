import { motion, useScroll, useTransform } from 'framer-motion'

import ReactPlayer from 'react-player'

import CSS from './hero-unit-video.module.css'

export const HeroUnitVideo = ({ children, video, poster }) => {

    if ( !video || !poster ) return

    let  scroll  = useScroll()
    let y = useTransform( scroll.scrollY, [0, 1000], ["0%", "30vh"])

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
                        />
                    </div>

            </motion.div>


            <div className={CSS.overlay}>
                { children }
            </div>

        </section>
    )
}
