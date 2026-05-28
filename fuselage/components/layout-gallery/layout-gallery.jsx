import { AnimatePresence, motion } from "framer-motion"
import { Children, useEffect, useRef, useState } from "react"

import CSS from './layout-gallery.module.css'

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

export const LayoutGallery = ({ children, interval = 2500 }) => {
    const childrenArray = Children.toArray(children)
    const [current, setCurrent] = useState(0)
    const timeoutRef = useRef()

    // console.log(childrenArray)

    useEffect(() => {
        if (!childrenArray.length) return

        timeoutRef.current = setTimeout(
            () => setCurrent((prev) => (prev + 1) % childrenArray.length),
            interval,
        )

        return () => clearTimeout(timeoutRef.current)
    }, [childrenArray.length, current, interval])

    return (
        <div className={CSS.layout}>
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={current}
                    className={CSS.slide}
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    {childrenArray[current]}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
