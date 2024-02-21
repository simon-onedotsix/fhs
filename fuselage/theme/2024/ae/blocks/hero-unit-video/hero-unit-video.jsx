import { motion, useScroll, useTransform } from 'framer-motion'

import ReactPlayer from 'react-player'

import CSS from './hero-unit-video.module.css'

export const HeroUnitVideo = ({ children }) => {

    let  scroll  = useScroll()
    let y = useTransform( scroll.scrollY, [0, 1000], ["0%", "30vh"])

    return (
        <section>
                
            <motion.div className={CSS.video} style={{ y }}>

                    <div className={CSS.videoWrapper}>
                        <ReactPlayer
                            url={`/assets/video/fhs-2023-opt.mp4`}
                            config={{ attributes: { poster: '/assets/video/fhs-2023-opt-poster.jpg' } }}
                            width='100%'
                            height='100%'
                            controls={false}
                            muted={true}
                            playing={true}
                            loop={true}
                        />
                    </div>

            </motion.div>


            <div className={`${CSS.overlay} block`}>
                { children }
            </div>

        </section>
    )
}
