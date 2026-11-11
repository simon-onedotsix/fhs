import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { c } from '../lib/c'
import { img } from '../lib/format'
import { R } from '../lib/routes'
import facts from '../data/facts.json'

// Two menus (Ahmed, 23 Oct 2026): FHS Living as a whole, and the Paris edition's own pages. A Paris page has no
// "Paris 2027" tab: the edition line beside the logo goes there. Case studies and the content library are in both.
// Speakers took Venue's tab (3 Nov 2026); the venue page stays, linked from the Paris page and the footer.
// FHS Living pages (11 Nov 2026, Ali: /living read as the Paris page): the line beside the logo names the four cities,
// the tab says Europe 2027 and the button is Register Interest; the Paris pages keep dates, venue and the pass.
const LIVING_NAV = [
	['paris', 'Europe 2027'],
	['case-studies', 'Case studies'],
	['content-library', 'Content library'],
	['about', 'About'],
]
const PARIS_NAV = [
	['programme', 'Programme'],
	['speakers', 'Speakers'],
	['who-is-in-the-room', 'Founding Advisors'],
	['investors', 'Investors'],
	['partners', 'Partners'],
	['case-studies', 'Case studies'],
	['content-library', 'Content library'],
]
const PARIS = ['paris', 'programme', 'speakers', 'passes', 'venue', 'investors', 'who-is-in-the-room', 'partners', 'register']

export function Header({ page }) {
	const ref = useRef(null)
	const router = useRouter()

	useEffect(() => {  // the header compacts after the first scroll
		const el = ref.current
		const compact = c('is-compact')
		const onScroll = () => el.classList.toggle(compact, window.scrollY > 80)
		window.addEventListener('scroll', onScroll, { passive: true })
		onScroll()
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const ev = facts.event
	const paris = PARIS.includes(page)
	const NAV = paris ? PARIS_NAV : LIVING_NAV
	// phones hide the edition line, so a Paris page's menu starts with the edition's home
	const PANEL = paris ? [['paris', 'Europe 2027'], ...PARIS_NAV] : LIVING_NAV
	const [cta, ctaLabel] = paris ? [R.passes, 'Register to attend'] : [R.register, 'Register Interest']
	const register = <Link href={cta} prefetch={false}><a className={c('btn')}>{ctaLabel}</a></Link>

	return (
		<header ref={ref} className={c('site-header', paris && 'site-header--paris')} id="top">
			<div className={c('wrap')}>
				<div className={c('brand')}>
					<Link href={paris ? R.paris : R.index} prefetch={false}>
						<a aria-label={paris ? 'FHS Living Paris home' : 'FHS Living home'}><img src={img('assets/brand/logo-rev-warm-cream.svg')} alt="FHS Living" width="91" height="46" /></a>
					</Link>
					{paris
						? <Link href={R.paris} prefetch={false}><a className={c('brand__line')} aria-current={page === 'paris' ? 'page' : undefined}>{ev.dates}<br />{ev.venue}</a></Link>
						: <Link href={`${R.index}#editions`} prefetch={false}><a className={c('brand__line')}>Four editions<br />Dubai · Cairo · Paris · Riyadh</a></Link>}
				</div>
				<nav className={c('nav')} aria-label="Main">
					<ul className={c('nav__list')}>
						{NAV.map(([slug, label]) => (
							<li key={slug}>
								<Link href={R[slug]} prefetch={false}><a aria-current={page === slug ? 'page' : undefined}>{label}</a></Link>
							</li>
						))}
					</ul>
					{register}
				</nav>
				<Link href={cta} prefetch={false}><a className={c('btn mcta')}>{ctaLabel}</a></Link>
				{/* keyed by route so the phone menu closes after following one of its links */}
				<details className={c('menu')} key={router.asPath}>
					<summary>Menu</summary>
					<div className={c('menu__panel')}>
						{PANEL.map(([slug, label]) => <Link key={slug} href={R[slug]} prefetch={false}><a>{label}</a></Link>)}
						<Link href={R.contact} prefetch={false}><a>Contact</a></Link>
						{register}
					</div>
				</details>
			</div>
		</header>
	)
}
