import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export const ThemeBackground = ({ children, backgroundImageUrl }) => {

    let ref = useRef(null)

    let { scrollYProgress } = useScroll({ 
        target: ref,
        offset: ["start end", "end start"]
    })

    let y = useTransform(scrollYProgress, [0, 1], [`0%`, `-200%`])
    
    return (
        <motion.div
            ref={ref}
            className='block'
            style={{
                position: `relative`,
                zIndex: 20,
                // minHeight: `100vh`,
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: `20rem`,
                backgroundPositionX: `center`,
                backgroundPositionY: y,
                backgroundColor: `hsl(from var(--secondary) h s calc(l + 2) / 1)`
            }}
        >
            <div className="container">
                {children}
                {/* <motion.div style={{ width: y, height: 10, backgroundColor: `white` }}></motion.div> */}
            </div>
        </motion.div>
    )
}