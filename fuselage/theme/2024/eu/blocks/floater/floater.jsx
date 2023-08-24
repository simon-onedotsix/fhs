import { motion } from 'framer-motion'

import Image from 'next/image'

import CSS from './floater.module.css'


export const Floaters = ({ children, theme, flipped }) => {
    return (
        <section className={`${CSS.floaters} ${flipped ? CSS.flipped : ''}`}>
            <div className="container columns-1 gap-lg">
                {children}
            </div>
        </section>
    )
}

export const Floater = ({ children, hero }) => {
    return (
        <section className={CSS.floater} >
            <div className={CSS.container}>
                <motion.div 
                    initial={{ scale: 0.5, rotate: 30, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                    // viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25 }}
                    
                    className={CSS.hero}
                >
                    <Image className={CSS.image} src={hero.url} width={hero.width} height={hero.height} alt={hero.title}/>               
                </motion.div>

                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    // viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25 }}

                    className={`${CSS.body} formatted`}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    )
}

