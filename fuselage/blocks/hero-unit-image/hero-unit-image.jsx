import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'

import { SectionDivider } from '../../theme/2024/world/blocks/section-divider/section-divider'

import CSS from './hero-unit-image.module.css'

export const HeroUnitImage = ({ children, hero, heading, description }) => {

    let  scroll  = useScroll()
    let y = useTransform( scroll.scrollY, [0, 1000], ["0%", "30vh"])


    return (
        <section>
                
            <motion.div className={CSS.hero} style={{ y }}>
                <div className={CSS.heroWrapper}>
                    <Image src={`/assets/img/global/award-winners/hero-award-winners.jpg`} layout={`responsive`} width={1920} height={1200} alt=''/>
                </div>
            </motion.div>


            <div className={`${CSS.overlay} block`}>
                <SectionDivider 
                    heading={heading} 
                    description={description}
                />
            </div>

        </section>
    )
}
