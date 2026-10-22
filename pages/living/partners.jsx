import Link from 'next/link'

import { LivingPage } from '../../ui-living/site/page'
import { c } from '../../ui-living/lib/c'
import { img } from '../../ui-living/lib/format'
import { R } from '../../ui-living/lib/routes'
import { Quote } from '../../ui-living/sections/quote'

import facts from '../../ui-living/data/facts.json'
import { loadPartners, REVALIDATE } from '../../ui-living/lib/cms'
import { HIGH } from '../../ui-living/lib/attrs'

const MAIL = 'mailto:matthew.weihs@thebench.com?subject=FHS%20Living%20partnership'

export default function Partners({ f, partners }) {
	const q = f.quote_partner
	return (
		<LivingPage page="partners" title="FHS Living | Partners" description="The partners behind the FHS Living Founding Edition, led by Founding Partner Accor One Living, and how to join them in Paris.">
			<section className={c('page-hero')} aria-labelledby="hero-h">
				<div className={c('wrap')}>
					<div>
						<h1 id="hero-h">The companies <span className={c('accent')}>behind the room.</span></h1>
						<p className={c('lede')}>Partners of the Founding Edition keep Founding Partner status for future editions while they stay with us, and appear at FHS Living inside FHS events too.</p>
						<div className={c('actions')}><a className={c('btn')} href={MAIL}>Talk to Matthew Weihs</a><a className={c('btn btn--ghost')} href="#deliver-h">What partners get</a></div>
					</div>
					<figure className={c('page-hero__fig')}><div className={c('diamond')}><img src={img('dubai/roundtable.jpg')} width="1600" height="900" alt="A roundtable at FHS World, Dubai" {...HIGH} /></div></figure>
				</div>
			</section>

			<section className={c('section')} aria-labelledby="tiers-h">
				<div className={c('wrap')}>
					<h2 className={c('sr')} id="tiers-h">Partners by tier</h2>
					<div className={c('tiers')}>
						{partners.tiers.map(t => (
							<div key={t.tier} className={c('tier')}>
								<p className={c('label accent')}>{t.tier}</p>
								<ul className={c('tier__logos')}>
									{t.items.map(it => <li key={it.logo}><img src={img(/^https?:/.test(it.logo) ? it.logo : `partners/${it.logo}`)} alt={it.name} width={it.w} height={it.h} loading="lazy" /></li>)}
								</ul>
							</div>
						))}
					</div>
					<Quote text={q.text} photo="advisors/jeff-tisdall.jpg" name={q.name} role={`${q.role}, ${q.note}`} style={{ marginTop: 'clamp(64px,7vw,112px)' }} />
				</div>
			</section>

			<section className={c('section tint')} aria-labelledby="deliver-h">
				<div className={c('wrap')}>
					<div className={c('head')}><h2 className={c('ruled')} id="deliver-h">A seat at the table, not a logo on a wall.</h2><p>Packages run from a working session to the Investors Lounge.</p></div>
					<ul className={c('steps steps--4')}>
						<li className={c('step')}><figure><img src={img('photo/meeting-gulf.jpg')} width="1600" height="1066" alt="An investor meeting at a Future Hospitality Summit event" loading="lazy" /></figure><h3>Meetings with capital</h3><p>Hosted investor meetings matched to your criteria, and guest passes for the investors you bring.</p></li>
						<li className={c('step')}><figure><img src={img('dubai/800/stage-fireside.jpg')} width="1600" height="900" alt="Accor One Living on the FHS Living stage at FHS World, Dubai" loading="lazy" /></figure><h3>A voice in the programme</h3><p>Lead a roundtable or host a private workshop on the questions your business cares about.</p></li>
						<li className={c('step')}><figure><img src={img('photo/exhibition.jpg')} width="1600" height="958" alt="Partner stands on the exhibition floor at a Future Hospitality Summit event" loading="lazy" /></figure><h3>Presence across the platform</h3><p>Branding in Paris and at FHS Living at FHS World, with a seat on the Advisory Board for lead partners.</p></li>
						<li className={c('step')}><figure><img src={img('photo/ab-reception.jpg')} width="800" height="533" alt="The reception after the FHS Living Advisory Board, Maslow's Kensington, London" loading="lazy" /></figure><h3>Hospitality on your terms</h3><p>Host a private dinner, a reception or a networking lounge for the people you want in the room.</p></li>
					</ul>
				</div>
			</section>

			<section className={c('section band')} aria-labelledby="join-h">
				<div className={c('wrap split split--top')}>
					<div>
						<h2 className={c('ruled')} id="join-h">Talk to Matthew Weihs.</h2>
						<p style={{ marginTop: 20 }}>Matthew leads partnerships for FHS Living. Tell him what you want from the room and he will build the package around it.</p>
						<div className={c('actions')} style={{ marginTop: 28 }}><a className={c('btn btn--light')} href={MAIL}>Email Matthew</a><Link href={R.register} prefetch={false}><a className={c('btn btn--line-light')}>Register partner interest</a></Link></div>
					</div>
					<figure className={c('person')} style={{ maxWidth: 320, margin: 0 }}>
						<div className={c('window')} style={{ aspectRatio: '4/5' }}><img src={img('team/matthew.jpg')} width="600" height="750" alt="Matthew Weihs" loading="lazy" /></div>
						<figcaption style={{ paddingTop: 12 }}><b>Matthew Weihs</b><span style={{ color: 'var(--on-dark-soft)' }}>Chief Development Officer, The Bench</span></figcaption>
					</figure>
				</div>
			</section>
		</LivingPage>
	)
}
Partners.theme = 'living'

export async function getStaticProps() {
	return { props: { f: facts, partners: await loadPartners() }, revalidate: REVALIDATE }
}
