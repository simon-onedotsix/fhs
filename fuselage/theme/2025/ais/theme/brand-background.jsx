import { motion, useScroll, useTransform } from 'framer-motion'


import CSS from './brand-background.module.css'

export const BrandBackground = () => {

    let { scrollYProgress } = useScroll({ 
        offset: ["start end", "end start"]
    })

    let y = useTransform( scrollYProgress, [0, 1], [`0`, `-300vh`])


    return (
        <div className={CSS.bg}>
            <motion.img className={CSS.svg} src="/assets/img/ais/theme/ais-grid.svg" alt="" style={{ y }}/>
        </div>
    )
}



