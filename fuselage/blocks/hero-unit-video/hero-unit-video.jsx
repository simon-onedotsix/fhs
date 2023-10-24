import { Parallax } from 'react-scroll-parallax'
import ReactPlayer from 'react-player'

import Image from 'next/image'

import { SectionDivider } from '../section-divider/section-divider'

import CSS from './hero-unit-video.module.css'

export const HeroUnitVideo = ({ children, hero, poster }) => {
    return (
        <section>
                
            <div className={CSS.video}>
                <Parallax speed={-20}>
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
                </Parallax>
            </div>


            <div className={`${CSS.overlay} block`}>
                <SectionDivider 
                    heading={`Reimagining Investment`} 
                    description={`Future Hospitality is an international platform where the world's most influential hospitality investment decision makers connect, exchange knowledge and explore new partnerships.`}
                />
            </div>

        </section>
    )
}
