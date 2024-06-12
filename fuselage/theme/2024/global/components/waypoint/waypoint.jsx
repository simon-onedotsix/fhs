import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'

import { Pop, Slide, Fade } from '../../../../../animation/animation'

import CSS from './waypoint.module.css'

export const Waypoint = ({ year, value }) => {

    let ref = useRef(null)

    let { scrollYProgress } = useScroll({ 
        target: ref,
        offset: ["start 65%", "end 25%"]
    })

    let visible = useTransform( scrollYProgress, [0, 0.5, 1], ['.15', '1', '.15'])

    return (
        <motion.div ref={ref} className={`${CSS.layout}`} style={{ opacity: visible }}>
            <Fade><p className={CSS.year}>{ year }</p></Fade>
            <div className={`${CSS.value} maxw-30`}><Slide delay={.25}><span className='fs-4 fw-500'>{ value }</span></Slide></div>
        </motion.div>
    )
}