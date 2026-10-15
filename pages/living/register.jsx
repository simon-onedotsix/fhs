import Link from 'next/link'

import { LivingPage } from '../../ui-living/site/page'
import { HubspotForm } from '../../ui-living/site/hubspot-form'
import { c } from '../../ui-living/lib/c'
import { img } from '../../ui-living/lib/format'
import { R } from '../../ui-living/lib/routes'

import facts from '../../ui-living/data/facts.json'
import { HIGH } from '../../ui-living/lib/attrs'

export default function Register({ f }) {
	return (
		<LivingPage page="register" title="FHS Living | Register your interest" description="Register your interest in FHS Living and receive the Paris programme, speakers and investor news as they are confirmed.">
			<section className={c('page-hero')} aria-labelledby="hero-h">
				<div className={c('wrap')}>
					<div>
						<h1 id="hero-h">Stay close to <span className={c('accent')}>the room.</span></h1>
						<p className={c('lede')}>Tell us what you invest in, build or run. We will send the programme, the names and the investor news as they are confirmed.</p>
						<div className={c('actions')}><a className={c('btn')} href="#form">Register your interest</a><Link href={R.passes} prefetch={false}><a className={c('btn btn--ghost')}>Ready to book?</a></Link></div>
					</div>
					<figure className={c('page-hero__fig')}><div className={c('diamond')}><img src={img('dubai/audience-room.jpg')} width="1600" height="900" alt="The FHS Living session room at FHS World, Dubai" {...HIGH} /></div></figure>
				</div>
			</section>

			<section className={c('section')} id="form" aria-labelledby="next-h">
				<div className={c('wrap split split--top')}>
					<div>
						<h2 className={c('ruled')} id="next-h">What happens next.</h2>
						<ol className={c('points')} style={{ marginTop: 32 }}>
							<li><h3>You hear first</h3><p>Programme updates and speaker announcements as they are confirmed.</p></li>
							<li><h3>The right person replies</h3><p>Investors hear from investor relations, partners from Matthew Weihs, speakers from the programme team.</p></li>
							<li><h3>No obligation</h3><p>Registering interest is not a booking. Passes are on sale now if you are ready.</p></li>
						</ol>
					</div>
					<div className={c('formbox')}>
						<h2>Your details</h2>
						<HubspotForm id="hs-register" formId={f.hubspot.register_interest_form} />
						<noscript><p>This form needs JavaScript. Email <a href={`mailto:${f.contact.email}`}>{f.contact.email}</a> instead.</p></noscript>
					</div>
				</div>
			</section>
		</LivingPage>
	)
}
Register.theme = 'living'

export async function getStaticProps() {
	return { props: { f: facts } }
}
