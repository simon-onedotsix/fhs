import { motion } from 'framer-motion'

import Image from 'next/image'

import CSS from './numbered-floater.module.css'


export const NumberedFloaters = ({ children, theme, flipped }) => {
    return (
        <section className={`${CSS.floaters} ${flipped ? CSS.flipped : ''}`}>
            <div className="container columns-1 gap-xl">
                {children}
            </div>
        </section>
    )
}

export const NumberedFloater = ({ children, number, heading, hero }) => {
    return (
        <section className={CSS.floater} >
            <div className={CSS.container}>
                <div className={`${CSS.heading} fs-0 ff-space caps lh-1 c-accent-light`}>
                    <span className={CSS.number}><Pop>{ number }</Pop></span>
                    <Fade>{ heading }</Fade>
                </div>

                <motion.div 
                    initial={{ scale: 0.5, rotate: 30, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    
                    className={CSS.hero}
                >
                    <Image className={CSS.image} src={hero.url} width={hero.width} height={hero.height} alt={hero.title}/>               
                </motion.div>

                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.25 }}

                    className={`${CSS.body} formatted`}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    )
}

const Pop = ({ children, delay, once, inline }) => {
    return (
        <motion.div 
            initial={{ scale: .25, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once }}
            transition={{ type: "spring", bounce: 0.25, delay }}
            style={{ display: inline ? `inline-block` : `block` }}
        >
            { children }
        </motion.div>
    )
}

const Fade = ({ children, delay, once, duration = 2.5 }) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once }}
            transition={{ type: "spring", delay, duration }}
        >
            { children }
        </motion.div>
    )
}