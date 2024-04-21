import { motion, useScroll, useTransform } from 'framer-motion'

import Image from "next/image"

import { Pop,Fade } from '../../../../../animation/animation'
import { Button } from '../../../../2024/sa/components/button/button'

import CSS from './homepage-hero.module.css'

export const HomepageHero = () => {

    let { scrollYProgress } = useScroll()
    
    let y = useTransform( scrollYProgress, [0, 1], [`0vw`, `90vh`])

    return (
        <div className={CSS.layout}> 
            <motion.div className={CSS.content} style={{ y }}>
                <Pop><Image src='/assets/theme/sa-2024/theme-headline.svg' layout='responsive' width={1113} height={464} alt='' /></Pop>
                <div className='mt-md'>
                    <Fade>
                        <Button href={'/sa/agenda'} decal={'fs-5 fw-600'} accent>2024 Prgoramme</Button>
                        {/* <Button href={'/sa/download-event-brochure'} decal={'fs-5 fw-600'} accent>Download Event Brochure</Button> */}
                    </Fade>
                </div>
            </motion.div>
        </div>
    )
}