import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import CSS from './intro.module.css'

export const Intro = ({ children }) => {

    let ref = useRef(null)

    let { scrollYProgress } = useScroll({ 
        target: ref,
        offset: ["start end", "end start"]
    })

    let y = useTransform( scrollYProgress, [0, 1], [`-20vh`, `20vh`])
    
    return (
        <motion.div
            ref={ref}
            className={`${CSS.layout} block bg-secondary`}
            style={{
                position: `relative`,
            }}
        >
            <div className={`${CSS.content} container`}>
                {children}
            </div>

            <motion.div className={CSS.brandPattern}
                style={{
                    backgroundImage: `url(/assets/theme/africa/fhs-africa-battik-orange.png)`,
                    backgroundPositionY: y
                }}
            />
        </motion.div>
    )
}