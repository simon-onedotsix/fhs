import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'

import { AnimatedCounter } from '../../animation/animated-counter'
import { Pop, Fade, Slide } from '../../animation/animation'

import CSS from './impact-figures.module.css'


export const ImpactFiguresGrid = ({ children }) => {

    let ref = useRef(null)

    let { scrollYProgress } = useScroll({ 
        target: ref,
        offset: ["start end", "end start"]
    })

    let y = useTransform(scrollYProgress, [0, 1], [`-20vh`, `20vh`])
    

    return (
        <section className={`${CSS.layout} block bg-primary pt-0`}>
            <motion.div className={CSS.brandPattern}
                style={{
                    backgroundImage: `url(/assets/theme/africa/fhs-africa-battik-purple.png)`,
                    backgroundPositionY: y
                }}
            />

            { children }
        </section>
    )
}

export const ImpactFigures = ({ children, theme }) => {
    return (
        <section className={CSS.container}>
            <div className={`${CSS.impactFigures} container`}>
                {children}
            </div>
        </section>
    )
}


export const ImpactFigure = ({value, prefix, suffix, label}) => {
    return (
        <Pop>
            <div className={CSS.impactFigure}>
                <p className={`impactFigureValue fs-0 fw-200 c-primary`}>{prefix}<AnimatedCounter from={0} to={parseInt(value)} />{suffix}</p>
                <div className={`caps c-secondary fw-600 fs-6`}><Pop inline delay={.35}>{label}</Pop></div>
            </div>
        </Pop>
    )
}

export const ImpactFigureSpacer = () => <div className={CSS.spacer}></div>