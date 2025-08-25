import { useState } from 'react'

import { motion } from "framer-motion"



import CSS from './hover-pop.module.css'

export const HoverPop = ({ year, children}) => {

    const [ active, setActive ] = useState( false )

    return (
        <motion.div
            initial={{ scale: .25, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", bounce: 0.4 }}
            
            className={CSS.layout}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >

            <div className={CSS.base}>
                <p className={CSS.bigNumber}>{ year }</p>
            </div>

            <div className={`${CSS.overlay} ${active ? CSS.active : ''}`} >
                { children }
            </div>

        </motion.div>
    )
}



export const HoverPopContainer = ({ children }) => <div className={CSS.container}> { children }</div>