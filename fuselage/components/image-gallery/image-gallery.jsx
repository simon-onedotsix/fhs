import { AnimatePresence, motion } from "framer-motion"
import { Fragment, useEffect, useState } from "react"


import CSS from './image-gallery.module.css'

const variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}

export const ImageGallery = ({ images }) => {
    const [current, setCurrent] = useState(0)

    let timerID = 0

    useEffect(() => {
        
        clearTimeout(timerID)
        timerID = setTimeout(() => setCurrent((current + 1) % images.length), 2500)
        
        return () => clearTimeout(timerID)
    }, [current])

    return (
        <div className={CSS.layout}>
            <AnimatePresence initial={false}>
                <motion.img
                    variants={variants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={{
                        type: "tween",
                        duration: 1,
                    }}
                    src={images[current].src}
                    key={images[current].src}
                    alt=''
                    className='rounded-lg w-full aspect-[3/4] left-0 object-cover absolute'
                />
            </AnimatePresence>
        </div>
    )
}