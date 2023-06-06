import { motion } from 'framer-motion'

import CSS from './section-divider.module.css'

export const SectionDivider = ({ heading, description, theme }) => {
    return (
        <div className={CSS.overlay}>
            <div className={`${CSS.content} container pb-sm bb-1 bc-accent`} style={{ borderColor: theme ? theme.keyline : `var(--accent)`}}>
            
                <motion.p 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    // viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25 }}

                    className={`${CSS.headline} ff-space c-accent caps`} 
                    style={{ color: theme ? theme.heading : `var(--accent)` }}
                >{ heading }</motion.p>

                <motion.p 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    // viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25 }}

                    className={`${CSS.body} fs-5 fw-400`} 
                    style={{ color: theme ? theme.body : `white` }}
                >{ description }</motion.p>
            </div>
        </div>
    )
}