import Link from 'next/link'

import { LivingPage } from '../../../ui-living/site/page'
import { c } from '../../../ui-living/lib/c'
import { ampm, img } from '../../../ui-living/lib/format'
import { R } from '../../../ui-living/lib/routes'

import facts from '../../../ui-living/data/facts.json'
import programme from '../../../ui-living/data/programme.json'
import { HIGH } from '../../../ui-living/lib/attrs'

export default function Venue({ f, programme }) {
	const reception = ampm(programme.day_zero.time)
	return (
		<LivingPage page="venue" title="FHS Living | Venue and travel" description="FHS Living Paris takes place at Pullman Paris Montparnasse, 23–24 February 2027, with a welcome reception on 22 February.">
			<section className={c('fullbleed fullbleed--hero')} aria-labelledby="hero-h">
				<img src={img('photo/paris.jpg')} width="1600" height="1116" alt="Paris from above, the Eiffel Tower and the Seine" {...HIGH} />
				<div className={c('fullbleed__card')}>
					<h1 id="hero-h">{f.event.venue}.</h1>
					<p>{f.event.address}. An Accor property, hosting the Founding Edition with Accor One Living as Founding Partner.</p>
					<div className={c('actions')}><Link href={R.passes} prefetch={false}><a className={c('btn')}>Register to attend</a></Link><a className={c('link')} href="https://www.google.com/maps/search/?api=1&query=Pullman+Paris+Montparnasse">Open in Google Maps</a></div>
				</div>
			</section>
			<section className={c('section')} aria-labelledby="plan-h">
				<div className={c('wrap')}>
					<div className={c('head')}><h2 className={c('ruled')} id="plan-h">Plan your three days.</h2><p>Arrive on Monday evening for the welcome reception. The programme runs Tuesday and Wednesday.</p></div>
					<ul className={c('facts')}>
						<li><b>22 Feb</b><span>Welcome reception at {reception}, at the venue</span></li>
						<li><b>23 Feb</b><span>Day one: {programme.days[0].theme.toLowerCase()}</span></li>
						<li><b>24 Feb</b><span>Day two: {programme.days[1].theme.toLowerCase()}</span></li>
						<li><b>75014</b><span>Montparnasse, beside the station</span></li>
					</ul>
				</div>
			</section>
			<section className={c('section tint')} aria-labelledby="travel-h">
				<div className={c('wrap split split--top')}>
					<h2 className={c('ruled')} id="travel-h">Getting there and staying.</h2>
					<div className={c('faq')}>
						<details open><summary>Getting there</summary><p>The hotel sits beside Gare Montparnasse. The Eurostar from London arrives at Gare du Nord. Paris Charles de Gaulle and Orly airports both connect to central Paris by train and taxi.</p></details>
						<details><summary>Where to stay</summary><p>A room block is reserved at {f.event.venue} for the event. Ask the team for the booking link at {f.contact.email}.</p></details>
						<details><summary>When to arrive</summary><p>The welcome reception is on Monday 22 February at {reception} at the venue. The programme runs on Tuesday 23 and Wednesday 24 February.</p></details>
					</div>
				</div>
			</section>
			<section className={c('section band section--tight')} aria-labelledby="see-h">
				<div className={c('wrap split')}>
					<h2 id="see-h">See you in Paris.</h2>
					<div className={c('actions')}><Link href={R.passes} prefetch={false}><a className={c('btn btn--light')}>Register to attend</a></Link><Link href={R.programme} prefetch={false}><a className={c('btn btn--line-light')}>The programme</a></Link></div>
				</div>
			</section>
		</LivingPage>
	)
}
Venue.theme = 'living'

export async function getStaticProps() {
	return { props: { f: facts, programme } }
}
