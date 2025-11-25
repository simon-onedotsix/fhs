import { useRef, useEffect } from 'react'
import { animate, useInView } from 'framer-motion'

export const AnimatedCounter = ({ from, to, animationOptions }) => {
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
                element.textContent = value.toFixed( Number.isInteger(to) ? 0 : 1 )
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