import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'

import { ThemeBackground } from '../../../fuselage/theme/2025/africa/blocks/theme-background/theme-background'

import CSS from './page-header.module.css'

export function PageHeader({ children, theme }) {
    
    let ref = useRef(null)

    let { scrollYProgress } = useScroll({ 
        target: ref,
        offset: ["start end", "end start"]
    })

    let y = useTransform(scrollYProgress, [0, 1], [`0%`, `500%`])


    return (
        
        <section ref={ref} className={`${CSS.layout} ${ theme ? theme : `bg-primary`} no-print`} >

            <motion.div className={CSS.brandPattern}
                style={{
                    position: `relative`,
  
                    backgroundImage: `url(/assets/theme/africa/fhs-africa-battik-orange.png)`,
                    backgroundPositionX: `center`,
                    backgroundPositionY: y
                }}
            >
                {/* <Image src={`/assets/brand/motif-page-header.jpg`} layout={`fill`} width={1800} height={600} alt="" priority /> */}
            </motion.div>

            <section className={`${CSS.content} block formatted ${ theme ? theme : `bg-primary`}`}>
                {children}
            </section>

        </section>

    )
}