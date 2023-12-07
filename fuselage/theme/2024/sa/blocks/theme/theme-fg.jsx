import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'


import CSS from './theme-fg.module.css'

export const ThemeFg = () => {

    let { scrollYProgress } = useScroll()

    let flowerY = useTransform( scrollYProgress, [0, 1], [`0vw`, `-60vh`])
    let flowerScale = useTransform( scrollYProgress, [0, 1], [1, 0.5])
    let squareY = useTransform( scrollYProgress, [0, 1], [`0vw`, `-90vh`])
    let squareScale = useTransform( scrollYProgress, [0, 1], [1, 0.6])


    return (
        <section className={CSS.layout}>
            
            <motion.div className={CSS.flower} style={{ y: flowerY, scale: flowerScale }}>
                <Image src='/assets/theme/sa-2024/flower.svg' layout='fill' width={1412} height={1596} alt=''/>
            </motion.div>
            
            <motion.div className={CSS.square} style={{ y: squareY, scale: squareScale }}>
                <Image src='/assets/theme/sa-2024/square.svg' layout='fill' width={1412} height={1596} alt=''/>
            </motion.div>

        </section>
    )
}