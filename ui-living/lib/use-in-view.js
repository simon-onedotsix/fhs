import { useEffect, useRef, useState } from 'react'

// One-shot "in view" flag: charts and diagrams draw themselves once, as in the prototype.
// Reduced motion or no IntersectionObserver: in view at once.
export function useInView() {
	const ref = useRef(null)
	const [inView, setInView] = useState(false)

	useEffect(() => {
		const el = ref.current
		if (!el) return
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
			setInView(true)
			return
		}
		const io = new IntersectionObserver(([e]) => {
			if (e.isIntersecting) {
				setInView(true)
				io.disconnect()
			}
		}, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 })
		io.observe(el)
		return () => io.disconnect()
	}, [])

	return [ref, inView]
}
