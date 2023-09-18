import { Parallax } from 'react-scroll-parallax'
import ReactPlayer from 'react-player'

import Image from 'next/image'

import { SectionDivider } from '../section-divider/section-divider'

import CSS from './hero-unit-image.module.css'

export const HeroUnitImage = ({ children, hero, poster }) => {
    return (
        <section>
                
            <div className={CSS.hero}>
                <Parallax speed={-20}>
                    <div className={CSS.heroWrapper}>
                        <Image src={`/assets/img/global/award-winners/hero-award-winners.jpg`} layout={`responsive`} width={1920} height={1200} alt=''/>
                    </div>
                </Parallax>
            </div>


            <div className={`${CSS.overlay} block`}>
                <SectionDivider 
                    heading={`Award Winners`} 
                    description={`Aliquam vel quam ut tellus gravida faucibus. Vivamus justo est, elementum vitae, malesuada eu, fermentum in, sapien. Donec sit amet justo. In velit. Vivamus turpis pede, dignissim sed, scelerisque.`}
                />
            </div>

        </section>
    )
}
