import { motion, useScroll, useTransform } from 'framer-motion'

import Image from "next/image"

import { Pop } from '../../../../../animation/animation'

import CSS from './homepage-hero.module.css'

export const HomepageHero = () => {

    let { scrollYProgress } = useScroll()
    
    let y = useTransform( scrollYProgress, [0, 1], [`0vw`, `90vh`])

    return (
        <div className={CSS.layout}> 
            <motion.div className={CSS.content} style={{ y }}>
                <Pop><Image src='/assets/theme/sa-2024/theme-headline.svg' layout='responsive' width={1113} height={464} alt='' /></Pop>
            </motion.div>
        </div>
    )
}