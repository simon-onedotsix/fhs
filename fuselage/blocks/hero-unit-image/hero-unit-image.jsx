import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'

import { SectionDivider } from '../../theme/2024/world/blocks/section-divider/section-divider'

import CSS from './hero-unit-image.module.css'

export const HeroUnitImage = ({ hero, heading, description }) => {

    let  scroll  = useScroll()
    let y = useTransform( scroll.scrollY, [0, 1000], ["0%", "30vh"])


    return (
        <section>
                
            <motion.div className={CSS.hero} style={{ y }}>
                <div className={CSS.heroWrapper}>
                    {
                        hero &&
                        <Image src={ hero.url } layout={`responsive`} width={hero.width} height={hero.height} alt=''/>
                    }
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
