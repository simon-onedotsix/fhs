import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'


import CSS from './page-hero-image.module.css'

export const PageHeroImage = ({ hero, children }) => {

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
                { children }
            </div>

        </section>
    )
}
