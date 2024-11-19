import { useRef, useEffect } from 'react'
import { motion, animate, KeyFrameOptions, useInView } from 'framer-motion'

import CSS from './bar-chart.module.css'

export const BarChart = ({ children }) => {

    return (
        <div className={CSS.layout}>
            { children }
        </div>
    )
}

export const Field = ({ label, value, unit, normalise }) => {
    
    return (
        <motion.p 
            className={CSS.field}

            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", delay: 0.05, duration: 1 }}
        >
            { label } <Bar value={value} normalise={normalise} /> <span className={CSS.value}><AnimatedCounter from={0} to={value} />{ unit }</span>
        </motion.p>
    )
}

const Bar = ({ value, normalise }) => {

    let initialWidth = 0
    let nx = ( value - normalise.min ) / ( normalise.max - normalise.min ) * 100

    return (
        <span className={CSS.barContainer}>
            <motion.span 
                className={CSS.bar} style={{ width: value }} 

                initial={{ width: `${initialWidth}%` }}
                whileInView={{ width: `${nx < 1 ? 1 : nx }%` }}
                viewport={{ once: false }}
                transition={{ type: "spring", bounce: 0.25, delay: 0 }}
            />
        </span>
    )
}




const AnimatedCounter = ({ from, to, animationOptions }) => {
    const ref = useRef(null)
    const inView = useInView(ref, {once: false})

    useEffect(() => {
        const element = ref.current

        if (!element) return
        if (!inView) return

        element.textContent = String(from)

        const controls = animate(from, to, {
            duration: 1,
            ease: 'easeOut',
            ...animationOptions,
            onUpdate(value) {
                element.textContent = value.toFixed(1)
            } 
        })

        return () => {
            if (element) {
                controls.stop()
            }
        }

    }, [ref, inView, from , to])

    return <span ref={ref} />
}