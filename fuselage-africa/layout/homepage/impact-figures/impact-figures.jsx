import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'

import { Pulse } from '../../../theme/pulse/pulse'

import { Quote } from '../../../components/quote/quote'

import CSS from './impact-figures.module.css'

export const ImpactFigures = ({ children, theme }) => {

    let containerRef = useRef(null)

    let { scrollYProgress } = useScroll({ 
        target: containerRef,
        offset: ["start end", "end start"]
    })
    let y = useTransform( scrollYProgress, [0, 1], ['-4vw', '4vw'])

    return (
        <section ref={containerRef} className={`${CSS.container} block`}>

            <div className={CSS.graphic}><Pulse /></div>

            <motion.div className={`${CSS.impactFigures} container`} style={{ y }}>
                {children}
            </motion.div>

            <motion.div className="pt-lg" style={{ y }}>
                <Quote 
                    avatar={{ url: `/assets/img/homepage/nangula-uaandja.jpeg`}}
                    quote={`We are looking forward to hosting a world-class event that will help us to promote and showcase Namibia's potential and value proposition as an investment destination, while at the same time serving as a nexus where investors, industry leaders and governments connect, network and forge mutually beneficial partnerships to unlock tangible opportunities that will catalyse further growth and development in  our tourism industry.`} 
                    name={'Nangula Nelulu Uaandja'}
                    title={'Chairperson and CEO: Namibia Investment Promotion and Development Board'}
                    decal={`fs-3 lh-1 maxw-50 lh-2 c-secondary`}
                />
            </motion.div>
        </section>
    )

}





export const ImpactFigure = ({value, label}) => {
    return (
        <div className={CSS.impactFigure}>
            <p className={`impactFigureValue fs-0 fw-200 c-primary`}>{value}</p>
            <p className={`caps`}>{label}</p>
        </div>
    )
}

export const ImpactFigureSpacer = () => <div className={CSS.spacer}></div>