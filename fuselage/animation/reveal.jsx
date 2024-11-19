'use client'

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"


export const Reveal = ({ children, width = 'fit-content', delay = 0 }) => {

    const ref = useRef(null)
    const isInview = useInView(ref, { once: false, margin: '200px 0px -200px 0px' })

    const mainControls = useAnimation()

    useEffect(() => {
        if ( isInview ) {
            mainControls.start('visible')
        }
    }, [isInview])

    return (
        <div ref={ref} style={{ position: `relative`, width, overflow: `hidden` }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={mainControls}
                whileInView='visible'
                transition={{ type: 'spring', velocity: 10, damping: 12, delay: delay }}
            >
                { children }
            </motion.div>
        </div>
    )
}