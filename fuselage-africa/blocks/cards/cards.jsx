import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Pop } from '../../animation/animation'

import Image from 'next/image'

import CSS from './cards.module.css'

export const Cards = ({ children, theme, columns, gap, maxWidth, center }) => {

    let ref = useRef(null)

    let { scrollYProgress } = useScroll({ 
        target: ref,
        offset: ["start end", "end start"]
    })

    let y = useTransform(scrollYProgress, [0, 1], [`-20vh`, `20vh`])
    

    return (
        <section ref={ref} className={`block bg-default`} style={{ position: `relative` }}>

            {
                theme === 'theme' &&
                <motion.div className={CSS.brandPattern1}
                    style={{
                        backgroundImage: `url(/assets/theme/africa/fhs-africa-battik-yellow.png)`,
                        backgroundPositionY: y
                    }}
                />
            }

            {
                theme === 'theme' &&
                <motion.div className={CSS.brandPattern2}
                    style={{
                        backgroundImage: `url(/assets/theme/africa/fhs-africa-battik-purple.png)`,
                        backgroundPositionY: y
                    }}
                />
            }
            

            <div className={`
                container 
                columns-${columns} 
                gap-${gap} 
                formatted 
                maxw-${maxWidth}
                ${ center ? 'center' : null }
            `}>

                {children}

            </div>
        </section>
    )
}

export const Card = ({ hero, heroRatio = 4/3, heroLayout, heroWidth, body }) => {

    if ( !hero || !hero[0] ) return

    return (
        <Pop>
            <div className={`${CSS.layout} bg-white`}>
                <div 
                    className={CSS.hero} 
                    style={{ aspectRatio: heroRatio, width: heroWidth ? `${heroWidth}%` : `100%` }}
                >
                    <Image src={hero[0].url} layout={`fill`} />
                </div>
                <div className={`${CSS.content} formatted`} dangerouslySetInnerHTML={{__html: body }} />
            </div>
        </Pop>
    )
}