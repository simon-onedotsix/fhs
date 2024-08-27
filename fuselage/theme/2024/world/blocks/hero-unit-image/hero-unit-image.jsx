import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'

import CSS from './hero-unit-image.module.css'

export const HeroUnitImage = ({ children, imageUrl }) => {

    if ( !imageUrl ) return

    let  scroll  = useScroll()
    let y = useTransform( scroll.scrollY, [0, 1000], ["0%", "30vh"])

    return (
        <section style={{ position: 'relative', zIndex: 1 }}>
                
            <motion.div className={CSS.image} style={{ y }}>

                    <div className={CSS.imageWrapper}>
                       <Image src={imageUrl} layout='fill' />
                    </div>

            </motion.div>


            <div className={`${CSS.overlay} block`}>
                { children }
            </div>

        </section>
    )
}
