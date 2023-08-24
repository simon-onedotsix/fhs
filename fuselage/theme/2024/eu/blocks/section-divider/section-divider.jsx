import { motion } from 'framer-motion'

import CSS from './section-divider.module.css'

export const SectionDivider = ({ contentLeft, contentRight, theme }) => {
    return (
        <div className={CSS.overlay}>
            <div className={`${CSS.content} container pb-sm bb-1 bc-accent`} style={{ borderColor: theme ? theme.keyline : `var(--accent)`}}>
            
                <motion.p 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    // viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25 }}

                    className={CSS.contentLeft} 
                    style={{ color: theme ? theme.heading : `var(--accent)` }}
                >{ contentLeft }</motion.p>

                <motion.p 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    // viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25 }}

                    className={CSS.contentRight} 
                    style={{ color: theme ? theme.body : `white` }}
                >{ contentRight }</motion.p>
            </div>
        </div>
    )
}