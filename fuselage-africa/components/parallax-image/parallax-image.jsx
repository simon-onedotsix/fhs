import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'

import Image from "next/image"



export const ParallaxImage = ({ amount = 50, src, width, height }) => {

    let ref = useRef(null)

    let { scrollYProgress } = useScroll({ 
        target: ref,
        offset: ["start end", "end start"]
    })

    let y = useTransform( scrollYProgress, [0, 1], [`-${amount/10}vw`, `${amount/10}vw`])

    return (
        <div ref={ref} style={{ overflow: `hidden`, height: `100%`, display: `grid` }}>
            <motion.div style={{ 
                y, 
                width: `100%`, 
                marginTop: `-${amount/10}vw`, 
                marginBottom: `-${amount/10}vw`, 
                position: `relative`
            }}>
                <Image 
                    src={src} 
                    layout={`fill`} 
                    alt='' 
                />
            </motion.div>
        </div>
    )
}