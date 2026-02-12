import { motion } from "framer-motion"

import CSS from './page-hero-themed.module.css'

export const PageHeroThemed = ({ children }) => {
    return (
        <section className={CSS.layout}>

            <div className={CSS.theme}>
                <Dune color={`var(--primary)`} offset={-30} aspect={16/12}/>
                <Dune color={`var(--accent)`} offset={-20} aspect={16/10} delay={.1} />
                <Dune color={`var(--accent)`} offset={-10} aspect={16/8} delay={.2}/>
            </div>

            <div className={CSS.content}>
                {children}
            </div>

        </section>
    )
}


const Dune = ({ color = 'red', aspect = 16/9, offset = 0, delay = 0, amount = 20 }) => {
    return (
        <motion.div
            initial={{ y: amount, opacity: 0 }}
            whileInView={{ y: `${offset}vw`, opacity: 1 }}
            // viewport={{ once }}
            transition={{ type: "spring", bounce: 0.25, delay }}

            className={CSS.dune}
            style={{
                background: `
                    linear-gradient(
                        180deg,
                        hsl(from ${color} h s l / 1) 25%,
                        hsl(from ${color} h s l / 0) 80%
                    )
                `,
                aspectRatio: aspect
            }}
        />
    )
}