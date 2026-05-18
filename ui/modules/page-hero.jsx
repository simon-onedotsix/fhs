import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import Image from "next/image"

import useCustomMediaQuery from '../../hooks/useCustomMediaQuery'
import CSS from './page-hero.module.css'

export const PageHero = ({ hero, children }) => {

    let  scroll  = useScroll()
    let y = useTransform( scroll.scrollY, [0, 2000], ["-3vh", "30vh"])


    return (
        <section className={CSS.layout}>
                
            <motion.div className={CSS.hero} style={{ y }}>
                
                    {
                        hero &&
                        <Image src={ hero.url } layout={`fill`} alt=''/>
                    }
                
            </motion.div>


            <div className={`${CSS.overlay} block`}>
                { children }
            </div>

        </section>
    )
}
