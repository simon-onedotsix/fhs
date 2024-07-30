import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'

import CSS from './hero-unit.module.css'

export const HeroUnit = ({ children, hero }) => {


    let  scroll  = useScroll()
    let y = useTransform( scroll.scrollY, [0, 1000], ["0%", "30vh"])

    return (
        <section className={CSS.container}>
                
            <motion.div className={CSS.hero} style={{ y }}>

                <div className={CSS.heroWrapper} >
                    <Image src={hero.url} width={hero.width} height={hero.height} alt='' />
                </div>

            </motion.div>


            <div className={`${CSS.overlay} block`}>
                { children }
            </div>

        </section>
    )
}
