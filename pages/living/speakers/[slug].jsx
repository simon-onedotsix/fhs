import Link from 'next/link'

import { LivingPage } from '../../../ui-living/site/page'
import { c } from '../../../ui-living/lib/c'
import { trange } from '../../../ui-living/lib/format'
import { R } from '../../../ui-living/lib/routes'
import { HIGH } from '../../../ui-living/lib/attrs'

import facts from '../../../ui-living/data/facts.json'
import { loadSpeakers, REVALIDATE } from '../../../ui-living/lib/cms'

const day = d => new Date(d + 'T12:00:00Z').toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' })

// One speaker from Swapcard on a URL of their name: photo, role, biography and their Paris sessions once assigned.
export default function Speaker({ f, p }) {
	const role = [p.title, p.company].filter(Boolean).join(', ')
	const tail = ` Speaking at FHS Living, Paris, ${f.event.dates}.`
	const desc = `${p.name}${role ? `, ${role}` : ''}.${tail}` // a meta description stays within 160 characters
	return (
		<LivingPage page="speakers" path={`${R.speakers}/${p.slug}`} image={p.photo} title={`${p.name} | FHS Living`}
			description={desc.length > 160 ? `${p.name}.${tail}` : desc}>
			<section className={c('page-hero cs-hero')} aria-labelledby="hero-h">
				<div className={c('wrap')}>
					<div>
						<p className={c('label accent')}>Speaker</p>
						<h1 id="hero-h">{p.name}</h1>
						{role && <p className={c('lede')}>{role}</p>}
						<div className={c('actions')}><Link href={R.passes} prefetch={false}><a className={c('btn')}>Register to attend</a></Link><Link href={R.speakers} prefetch={false}><a className={c('link')}>All speakers</a></Link></div>
					</div>
					{p.photo && <figure className={c('cs-hero__fig pr-portrait')}><img src={p.photo} width="720" height="900" alt={p.name} {...HIGH} /></figure>}
				</div>
			</section>

			{(p.bio || p.sessions.length > 0) && (
				<section className={c('section')} aria-label={`About ${p.name}`}>
					<div className={c('wrap cs-body')}>
						<div className={c('pr-about')}>{p.bio ? p.bio.split(/\n\s*\n|\n/).filter(Boolean).map((x, i) => <p key={i}>{x}</p>) : null}</div>
						{p.sessions.length > 0 && (
							<div className={c('cs-body__side')}>
								<h2 className={c('label accent')}>In Paris</h2>
								<ul className={c('pr-sessions')}>
									{p.sessions.map(s => <li key={s.date + s.start}><span>{day(s.date)}, {trange(s.start, s.end)}</span><Link href={R.programme} prefetch={false}><a>{s.title}</a></Link></li>)}
								</ul>
							</div>
						)}
					</div>
				</section>
			)}
		</LivingPage>
	)
}
Speaker.theme = 'living'

export async function getStaticPaths() {
	const { people } = await loadSpeakers()
	// a speaker added in Swapcard gets a page on the first visit; one removed goes on the next refresh
	return { paths: people.map(p => ({ params: { slug: p.slug } })), fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
	const p = (await loadSpeakers()).people.find(x => x.slug === params.slug)
	if (!p) return { notFound: true, revalidate: REVALIDATE }
	return { props: { f: facts, p }, revalidate: REVALIDATE }
}
