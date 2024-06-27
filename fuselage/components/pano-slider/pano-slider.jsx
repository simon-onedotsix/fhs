import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'

import { Pop, Slide, Fade } from "../../animation/animation"

import CSS from './pano-slider.module.css'



export const PanoSlider = ({ images, direction, opacity }) => {

    const SLIDER_DATA = [
        { url: '/assets/img/brf/brf-2024-pano-01.jpg' }
    ]

    const [ currentPage, setCurrentPage ] = useState(1)
    const totalPages = SLIDER_DATA.length

    const nextPage = () => {
        if ( currentPage < totalPages ) setCurrentPage( currentPage + 1 )
    }
    const prevPage = () => {
        if ( currentPage > 1 ) setCurrentPage( currentPage - 1 )
    }

    return (
        <section className={CSS.panoSlider}>
            <div className={CSS.container}>
                {
                    images.map( (image, index) => <PanoSliderSlide key={index} src={image.url} active={ index+1 === currentPage ? true : false } opacity={opacity} /> )	
                }
            </div>
            {
                images.length > 1 &&
                <nav className={CSS.nav}>
                    <Pop><p style={{ userSelect: `none` }}>{ currentPage }<span style={{ padding: `0 5px` }}>/</span>{ totalPages }</p></Pop>
                    <Pop delay={.1}><button className={CSS.navButton} onClick={prevPage} disabled={currentPage === 1 && true}><NavChevron flipped /></button></Pop>
                    <Pop delay={.2}><button className={CSS.navButton} onClick={nextPage} disabled={currentPage === totalPages && true}><NavChevron /></button></Pop>
                </nav>
            }
        </section>
    )
}




export const PanoSliderSlide = ({ src, active, opacity }) => {

    let ref = useRef(null)

    let { scrollYProgress } = useScroll({ 
        target: ref,
        offset: ["start end", "end start"]
    })

    let x = useTransform( scrollYProgress, [0, 1], ['20vw', '-20vw'])

    return (
        <div ref={ref} className={CSS.slide}>
            <motion.div className={CSS.imageWrapper} style={{ x, opacity: active ? 1 : 0, transform: active ? `scale(1)` : `scale(1.25)` }}>
                <Image 
                    src={src} 
                    width={3050}
                    height={1080} 
                    alt='' 
                    style={{ opacity: opacity }}
                />
            </motion.div>
        </div>
    )
}


export const PanoSliderOverlay = ({ images, direction, opacity, children }) => {
    return (
        <section className={CSS.overlayWrapper}>
            <div className={CSS.overlayContent}>
                { children }
            </div>

            <PanoSlider 
                images={images} 
                direction={direction}
                opacity={opacity}
            />
        </section>
    )
}


const NavChevron = ({ flipped }) => {
    return (
        <div style={{ width: `100%`, height: `100%`, transform: flipped && `rotateY(180deg)` }}>
            <svg width="100%" height="100%" viewBox="0 0 18 28" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinecap:`square`, strokeMiterlimit:3 }}>
                <path id="nav-chevron" d="M5,23.885L15,13.885L5,3.885" style={{ fill:`none`, strokeWidth:`2px` }}/>
            </svg>
        </div>
    )
}