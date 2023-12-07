import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'


import CSS from './theme-bg.module.css'

export const ThemeBg = () => {

    let { scrollYProgress } = useScroll({ 
        offset: ["start end", "end start"]
    })

    let y = useTransform( scrollYProgress, [0, 1], [`0vw`, `-20vh`])
    let yd = useTransform( scrollYProgress, [0, 1], [`0vw`, `-40vh`])

    return (
        <section className={CSS.layout}>
            
            <motion.div className={CSS.bg} style={{ y }}>
                <Image src='/assets/theme/sa-2024/theme-bg.jpg' layout='fill' width={1680} height={1680} alt=''/>
            </motion.div>
            
            <motion.div className={CSS.overlay} style={{ y: yd }}>
                <Image src='/assets/theme/sa-2024/theme-bg-overlay.png' layout='fill' width={1680} height={1680} alt=''/>
            </motion.div>

        </section>
    )
}