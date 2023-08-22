import { motion } from 'framer-motion'

import Image from 'next/image'

import { Parallax } from 'react-scroll-parallax'
import ReactPlayer from 'react-player'

import { Button } from '../../../../../components/button/button'

import CSS from './hero-unit.module.css'

export const HeroUnit = ({ children, hero, poster }) => {
    return (
        <section>
                
            <div className={CSS.hero}>
                <Parallax speed={-20}>
                    <div className={CSS.heroWrapper}>
                        
                        {/* still image */}
                        <Image src={`/assets/theme/eu-2024/homepage/hero-unit.jpg`} layout='responsive' width={1680} height={1050} />
                        
                        {/* video */}
                        {/* <ReactPlayer
                            url={`/assets/video/fhs-2022-opt.mp4`}
                            config={{ attributes: { poster: '/assets/video/fhs-2022-opt-poster.jpg' } }}
                            width='100%'
                            height='100%'
                            controls={false}
                            muted={true}
                            playing={true}
                            loop={true}
                        /> */}

                    </div>
                </Parallax>
            </div>


            <div className={`${CSS.overlay} block`}>
                <div className={`${CSS.content} container pb-sm bb-1 bc-accent`} style={{ borderColor: `var(--accent)`}}>                
                    <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.25 }}
                    >
                        <p className={`${CSS.headline} barlow c-white caps`} >Owners &amp; Investors Forum</p>
                        <p className={`${CSS.body} fs-4 fw-300 c-white maxw-35 mt-sm`}>Bringing our global network of owners and investors to Monaco with a special edition of Future Hospitality Summit (FHS)</p>
                    </motion.div>

                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "spring", bounce: 0.25 }}
                        className={CSS.actions}
                    >
                        <Button href={`/`} accent decal={`c-white fw-600 fs-5`}>Investor Registration</Button>
                        <Button href={`/`} accent decal={`c-white fw-600 fs-5`}>Become a Sponsor</Button>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}
