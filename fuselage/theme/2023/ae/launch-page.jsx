import { motion } from "framer-motion"

import Image from 'next/image'

import CSS from './launch-page.module.css'
import bubbleCSS from './launch-page-bubble.module.css'



export const LogoBubble = ({ children, delay }) => {
    return (
        <motion.div 
            className={bubbleCSS.wrapper}

            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.25, delay }}
        >
            { children }
        </motion.div>
    )
}

export const LogoBubbleGrid = ({ children }) => {
    return (
        <div className={bubbleCSS.grid}>
            { children }
        </div>
    )
}



export const HostSponsorLogo = ({ hero, alt }) => {

    if ( !hero ) return
    
    return ( 
        <div className={CSS.hostSponsorLogo}> 
            <Image
                src={hero.url}
                alt={alt}
                layout={`responsive`}
                width={120}
                height={80}
            />
        </div>
    )
}

export const HostSponsorGrid = ({ children }) => {
    return (
        <div className={CSS.hostSponsorGrid}>{ children }</div>
    )
}