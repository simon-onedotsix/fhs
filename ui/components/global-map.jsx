import { motion } from "framer-motion"
import { AnimatedCounter } from '../../fuselage/animation/animated-counter'
import { Pop } from '../../fuselage/animation/animation'

import CSS from './global-map.module.css'

export const GlobalMap = ({ children }) => {
    return (
        <div className={CSS.layout}>
            <Pop>
                <img className={CSS.map} src="/assets/ui/world-map.svg" alt="world map" />
            </Pop>

            <div className={CSS.overlay}>
                {children}
            </div>
        </div>
    )
}

export const Region = ({ label, value, unit, position, delay }) => {
    return (
        <div className={CSS.regionContainer} style={{ top: position.y, left: position.x }}>
            <Pop delay={delay}>
                <p className={CSS.value}><AnimatedCounter from={0} to={value} /><span className={CSS.unit}>{unit}</span></p>
                <p className={CSS.label}>{ label }</p>
            </Pop>
        </div>
    )
}

export const Disclaimer = ({ children }) => {
    return(
        <div className={CSS.disclaimer}>
            { children }
        </div>
    )
}

export const Bubble = ({ children, size, position }) => {
    return(
        <motion.div
            className={CSS.bubble}
            style={{ top: position.y, left: position.x, width: size }}
            initial={{ scale: .25, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", bounce: 0.25, delay: .25 }}
        >
            { children }
        </motion.div>
    )
}