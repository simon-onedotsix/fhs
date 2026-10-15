import Link from 'next/link'

import { LivingPage } from '../../../ui-living/site/page'
import { c } from '../../../ui-living/lib/c'
import { ampm, img, trange } from '../../../ui-living/lib/format'
import { R } from '../../../ui-living/lib/routes'
import { Glance } from '../../../ui-living/sections/glance'
import { Passes, passOffer, bookBefore } from '../../../ui-living/sections/passes'

import facts from '../../../ui-living/data/facts.json'
import programme from '../../../ui-living/data/programme.json'
import passes from '../../../ui-living/data/passes.json'
import { HIGH } from '../../../ui-living/lib/attrs'

const byStart = (a, b) => (a.start > b.start) - (a.start < b.start)

export default function Programme({ f, programme, delegate, investor }) {
	const z = programme.day_zero
	return (
		<LivingPage page="programme" title="FHS Living | Programme, 23–24 February 2027" description="The FHS Living Paris running order: keynotes and panels in the mornings, then roundtables, masterclasses and hosted investor meetings.">
			<section className={c('page-hero')} aria-labelledby="hero-h">
				<div className={c('wrap')}>
					<div>
						<h1 id="hero-h">Built around capital <span className={c('accent')}>deployment.</span></h1>
						<p className={c('lede')}>Every session answers a question capital allocators, developers and operators are working on now. The stage opens each day. Roundtables and matched meetings follow.</p>
						<div className={c('actions')}><Link href={R.passes} prefetch={false}><a className={c('btn')}>Register to attend</a></Link><a className={c('btn btn--ghost')} href="#running-order">The running order</a></div>
					</div>
					<figure className={c('page-hero__fig')}><div className={c('diamond')}><img src={img('dubai/stage-panel.jpg')} width="1600" height="792" alt="A panel on the FHS Living stage at FHS World, Dubai" {...HIGH} /></div></figure>
				</div>
			</section>

			<Glance programme={programme} link="#running-order" linkLabel="The running order" />

			<section className={c('section')} id="running-order" aria-labelledby="ro-h">
				<div className={c('wrap')}>
					<div className={c('head')}><h2 className={c('ruled')} id="ro-h">The running order.</h2><p>Deal Room sessions are marked. Hosted investor meetings run alongside the roundtables on both days.</p></div>
					<p className={c('dayzero')}><b>{z.date}, {ampm(z.time)}</b><span>{z.title} at {f.event.venue}</span></p>
					<div className={c('prog')}>
						{programme.days.map(d => (
							<div key={d.n}>
								<div className={c('prog__head')}><span className={c('prog__n')} aria-hidden="true">{d.n}</span><div><h3>{d.date}</h3><p>{d.theme}</p></div></div>
								<ul className={c('slots')}>
									{[...d.items].sort(byStart).map(it => (
										<li key={it.start + it.title} className={c('slot', it.format === 'Break' ? 'slot--break' : it.format === 'Meetings' && 'slot--meet')}>
											<time>{trange(it.start, it.end)}</time>
											<div>
												<h4>{it.title}</h4>
												{it.parallel && <ul>{it.parallel.map(x => <li key={x}>{x}</li>)}</ul>}
												{it.note && <p>{it.note}</p>}
												{it.format !== 'Break' && <span className={c('fmt', it.format === 'Deal Room' && 'fmt--hot')}>{it.format}</span>}
											</div>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<p className={c('note-line')}>{programme.status} Speakers are announced as they are confirmed. Session titles may change as the programme develops.</p>
				</div>
			</section>

			<section className={c('section tint')} aria-labelledby="talk-h">
				<div className={c('wrap split')}>
					<div>
						<h2 className={c('ruled')} id="talk-h">Talk to the programme team.</h2>
						<p className={c('lede')} style={{ marginTop: 20 }}>Tanja Millner leads the FHS Living programme and its speakers. Send her a session idea or a speaker you think the room should hear.</p>
					</div>
					<div className={c('contact-card contact-card--lg')}><img src={img('team/tanja.jpg')} width="600" height="600" alt="" loading="lazy" /><span><b>Tanja Millner</b>Programme and speakers, The Bench<a className={c('link')} href="mailto:tanja.millner@thebench.com">tanja.millner@thebench.com</a></span></div>
				</div>
			</section>

			<section className={c('section band')} aria-labelledby="pass-h">
				<div className={c('wrap')}>
					<div className={c('head')}><h2 className={c('ruled')} id="pass-h">Every session, every meeting, one pass.</h2><p>{bookBefore(delegate)}</p></div>
					<Passes delegate={delegate} investor={investor} />
				</div>
			</section>
		</LivingPage>
	)
}
Programme.theme = 'living'

const pass = title => passes.passes.find(x => x.title.startsWith(title))

export async function getStaticProps() {
	return { props: { f: facts, programme, delegate: passOffer(pass('Delegate')), investor: passOffer(pass('Investor')) } }
}
