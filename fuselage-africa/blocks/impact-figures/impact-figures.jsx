import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'

import { AnimatedCounter } from '../../../fuselage/animation/animated-counter'
import { Pop, Fade, Slide } from '../../animation/animation'

import CSS from './impact-figures.module.css'


export const ImpactFiguresGrid = ({ children }) => {

    let ref = useRef(null)

    let { scrollYProgress } = useScroll({ 
        target: ref,
        offset: ["start end", "end start"]
    })

    let y = useTransform(scrollYProgress, [0, 1], [`-60rem`, `60rem`])
    

    return (
        <section className={`${CSS.layout} block bg-secondary`}>
            {/* <motion.div className={CSS.brandPattern}
                style={{
                    backgroundImage: `url(/assets/theme/africa/fhs-africa-battik-orange.png)`,
                    backgroundPositionY: y
                }}
            /> */}

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
                <p className={`impactFigureValue fs-1 fw-200 c-primary`}>{prefix}<AnimatedCounter from={0} to={value} />{suffix}</p>
                <div className={`caps c-secondary fw-600 fs-6`}><Pop inline delay={.35}>{label}</Pop></div>
            </div>
        </Pop>
    )
}

export const ImpactFigureSpacer = () => <div className={CSS.spacer}></div>