import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { c } from '../lib/c'
import { img } from '../lib/format'
import { R } from '../lib/routes'
import facts from '../data/facts.json'

const NAV = [
	['paris', 'Paris 2027'],
	['programme', 'Programme'],
	['who-is-in-the-room', "Who's in the room"],
	['case-studies', 'Case studies'],
	['investors', 'Investors'],
	['partners', 'Partners'],
	['content-library', 'Content library'],
	['about', 'About'],
]

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
	const register = <Link href={R.passes} prefetch={false}><a className={c('btn')}>Register to attend</a></Link>

	return (
		<header ref={ref} className={c('site-header')} id="top">
			<div className={c('wrap')}>
				<Link href={R.index} prefetch={false}>
					<a className={c('brand')} aria-label="FHS Living home">
						<img src={img('assets/brand/logo-rev-warm-cream.svg')} alt="FHS Living" width="91" height="46" />
						<span className={c('brand__line')}><b>{ev.edition}</b>{ev.dates}<br />{ev.venue}</span>
					</a>
				</Link>
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
				<Link href={R.passes} prefetch={false}><a className={c('btn mcta')}>Register to attend</a></Link>
				{/* keyed by route so the phone menu closes after following one of its links */}
				<details className={c('menu')} key={router.asPath}>
					<summary>Menu</summary>
					<div className={c('menu__panel')}>
						{NAV.map(([slug, label]) => <Link key={slug} href={R[slug]} prefetch={false}><a>{label}</a></Link>)}
						<Link href={R.contact} prefetch={false}><a>Contact</a></Link>
						{register}
					</div>
				</details>
			</div>
		</header>
	)
}
