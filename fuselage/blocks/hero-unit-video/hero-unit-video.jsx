import { Parallax } from 'react-scroll-parallax'
import ReactPlayer from 'react-player'

import Image from 'next/image'

import { SectionDivider } from '../section-divider/section-divider'

import CSS from './hero-unit-video.module.css'

export const HeroUnitVideo = ({ children, hero }) => {
    return (
        <section>
                
            <div className={CSS.video}>
                <Parallax speed={-20}>
                    <div className={CSS.videoWrapper}>
                        {/* <Image src={`/assets/temp/video-placeholder.jpg`} layout={`responsive`} width={1680} height={1050} /> */}

                        <ReactPlayer
                            url={`/assets/video/fhs-2022-opt.mp4`}
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
                    heading={`Reimagining our industry`} 
                    description={`Future Hospitality is an international platform where the world's most influential hospitality investment decision makers connect, exchange knowledge and explore new partnerships.`}
                />
            </div>

        </section>
    )
}
