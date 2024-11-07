import { useRef, useEffect } from 'react'
import { animate, KeyFrameOptions, useInView } from 'framer-motion'

import { Fade, Pop, Slide } from '../../../../../animation/animation'

import Image from 'next/image'

import CSS from  './impact-grid.module.css'

export const ImpactGrid = ({ children }) => {
    return (
        <section className={CSS.layout}>
            { children }
        </section>
    )
}

export const TitleBlock = ({ children }) => {
    return (
        <div className={`${CSS.titleBlock} bg-theme`}>
            { children }
        </div>
    )
}

export const ImpactFigure = ({ figure, unit, impact, decal }) => {
    return (
        <Fade>
            <div className={`${CSS.impactFigure} ${decal}`}>
                {
                    figure &&
                    <p className={CSS.figure}><AnimatedCounter from={0} to={figure} />{ unit }</p>
                }

                <Slide><p className={CSS.impact}>{ impact }</p></Slide>
            </div>

        </Fade>
    )
}

export const ImageBlock = () => {
    return (
        <div className={CSS.imageBlock}>
            <Fade>
                <Image src={'/assets/img/sa/impact-hero.jpg'} layout={'fill'} />
            </Fade>
        </div>
    )
}





const AnimatedCounter = ({ from, to, animationOptions }) => {
    const ref = useRef(null)
    const inView = useInView(ref, {once: false})

    useEffect(() => {
        const element = ref.current

        if (!element) return
        if (!inView) return

        element.textContent = String(from)

        const controls = animate(from, to, {
            duration: 1,
            ease: 'easeOut',
            ...animationOptions,
            onUpdate(value) {
                element.textContent = value.toFixed(0)
            } 
        })

        return () => {
            if (element) {
                controls.stop()
            }
        }

    }, [ref, inView, from , to])

    return <span ref={ref} />
}