import { useEffect, useRef } from 'react'
import Link from 'next/link'

import { c } from '../lib/c'
import { img } from '../lib/format'
import { R } from '../lib/routes'

const LAYERS = [
	['branded-residences', 'Branded Residences'],
	['co-living', 'Co-Living'],
	['senior-living', 'Senior Living'],
	['student-accommodation', 'Student Accommodation'],
	['club-concepts', 'Club Concepts'],
	['hotels-resorts', 'Hotels & Resorts'],
]
const HEIGHTS = [373, 373, 327, 249, 200, 188]

export const FILM_POSTER = img('film/poster.jpg')

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// The /living hero: the FHS Living film behind a flat purple veil, and six asset classes in the layered building.
export function LayersHero() {
	const scope = useRef(null)
	const stack = useRef(null)
	const film = useRef(null)

	useEffect(() => {  // the stack separates as the hero scrolls away (linear scrub, brand motion law)
		const el = stack.current
		if (reduced()) {
			el.style.setProperty('--sep', '1')
			return
		}
		let ticking = false
		const update = () => {
			ticking = false
			const r = scope.current.getBoundingClientRect()
			const vh = window.innerHeight
			const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top - vh * 0.25) / (vh * 0.75)))
			el.style.setProperty('--sep', p.toFixed(3))
		}
		const onScroll = () => {
			if (!ticking) {
				ticking = true
				requestAnimationFrame(update)
			}
		}
		window.addEventListener('scroll', onScroll, { passive: true })
		update()
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	useEffect(() => {  // the film plays only when motion is welcome, data saving is off and the hero is on screen
		const v = film.current
		if (reduced() || navigator.connection?.saveData) return
		let io
		const start = () => {  // after the poster has painted: the film never competes with the first view
			v.muted = true
			v.preload = 'auto'
			io = new IntersectionObserver(([e]) => {
				if (e.isIntersecting) v.play()?.catch(() => {})
				else v.pause()
			})
			io.observe(v)
		}
		if (document.readyState === 'complete') start()
		else window.addEventListener('load', start, { once: true })
		return () => {
			window.removeEventListener('load', start)
			io?.disconnect()
		}
	}, [])

	return (
		<section ref={scope} className={c('layershero')} aria-labelledby="hero-h" data-stack-scope>
			<div className={c('layershero__media')} aria-hidden="true">
				{/* MP4 first: with WebM first, Safari never fires the page load event */}
				<video ref={film} muted loop playsInline preload="none" poster={FILM_POSTER} data-hero-video>
					<source src="/assets/video/living/fhs-living-film.mp4" type="video/mp4" />
					<source src="/assets/video/living/fhs-living-film.webm" type="video/webm" />
				</video>
			</div>
			<div className={c('wrap')}>
				<div>
					<h1 id="hero-h">Where hospitality <span className={c('accent')}>reimagines real&nbsp;estate.</span></h1>
					<p className={c('lede')}>FHS Living is Future Hospitality Summit&apos;s platform for the hotelisation of real estate, across nine asset classes from branded residences and student housing to mixed use, hotels and resorts.</p>
					<div className={c('actions')}><Link href={R.paris}><a className={c('btn btn--light')}>The Paris edition</a></Link><a className={c('btn btn--line-light')} href="#concept">What is FHS Living?</a><a className={c('btn btn--line-light')} href={R.experience}>Explore in 3D</a></div>
				</div>
				<div ref={stack} className={c('stack')} aria-label="Six of the nine asset classes, stacked in the FHS Living diamond">
					{LAYERS.map(([slug, name], i) => (
						<figure key={slug} className={c('stack__layer')}><img src={img(`stack/${slug}.jpg`)} width="880" height={HEIGHTS[i]} alt={name} /></figure>
					))}
					<ul className={c('stack__tags')} aria-hidden="true">
						{LAYERS.map(([slug, name]) => <li key={slug} className={c('stack__tag')}>{name}</li>)}
					</ul>
				</div>
			</div>
		</section>
	)
}
