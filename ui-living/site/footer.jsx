import Link from 'next/link'

import { c } from '../lib/c'
import { img } from '../lib/format'
import { R } from '../lib/routes'
import facts from '../data/facts.json'
import editions from '../data/editions.json'

const PAGES = [
	['paris', 'Paris 2027'],
	['programme', 'Programme'],
	['who-is-in-the-room', "Who's in the room"],
	['investors', 'Investors'],
	['partners', 'Partners'],
	['content-library', 'Content library'],
	['about', 'About'],
]

const go = (slug, label) => <li key={slug}><Link href={R[slug]} prefetch={false}><a>{label}</a></Link></li>

export function Footer() {
	return (
		<footer className={c('site-footer')}>
			<div className={c('wrap')}>
				<div className={c('footer__top')}>
					<div>
						<img src={img('assets/brand/logo-rev-principal-purple.svg')} alt="FHS Living" width="103" height="52" />
						<p className={c('footer__line')}>{`${facts.tagline.text} Future Hospitality Summit's platform for the hotelisation of real estate, with editions in Dubai, Cairo, Paris and Riyadh.`}</p>
					</div>
					<div>
						<h2>FHS Living</h2>
						<ul>{PAGES.map(([slug, label]) => go(slug, label))}</ul>
					</div>
					<div>
						<h2>Editions</h2>
						<ul>{editions.map(e => <li key={e.city}><a href={e.url}>{e.city}, {e.dates}</a></li>)}</ul>
					</div>
					<div>
						<h2>Get in touch</h2>
						<ul>
							{go('passes', 'Register to attend')}
							{go('register', 'Register your interest')}
							{go('venue', 'Venue and travel')}
							{go('contact', 'Contact the team')}
							<li><a href={`mailto:${facts.contact.email}`}>{facts.contact.email}</a></li>
							<li><a href={facts.social.linkedin}>LinkedIn</a></li>
							<li><a href={facts.social.instagram}>Instagram</a></li>
						</ul>
					</div>
				</div>
				<div className={c('footer__bottom')}>
					<p>Future Hospitality Summit is organised by The Bench. © {new Date().getFullYear()} The Bench.</p>
					<ul>
						<li><a href="https://www.thebench.com/privacy">Privacy policy</a></li>
						<li><Link href="/code-of-conduct" prefetch={false}><a>Code of conduct</a></Link></li>
						<li><Link href="/terms-and-conditions" prefetch={false}><a>Terms and conditions</a></Link></li>
					</ul>
				</div>
			</div>
		</footer>
	)
}
