import { useRouter } from 'next/router'

import { LivingPage } from '../../ui-living/site/page'
import { c } from '../../ui-living/lib/c'
import { MeetWidget, MEET_PATH } from '../../ui-living/sections/meet'

// The concierge on its own page (Ahmed, 17 Nov 2026), so the team can send the link directly.
//   /living/who-to-meet                 describe who you want to meet (a homepage search arrives as ?q=...)
//   /living/who-to-meet?flow=profile    start from your job title and company; we research it and you correct it
export default function WhoToMeet() {
	const profile = useRouter().query.flow === 'profile'
	return (
		<LivingPage page="who-to-meet" path={MEET_PATH} title="FHS Living | Who to meet"
			description="Tell us who you would like to network with. Get a shortlist of companies and your plan for both days at FHS Living."
			head={<meta name="robots" content="noindex" />}>
			<section className={c('page-hero')} aria-labelledby="hero-h">
				<div className={c('wrap')}>
					<h1 id="hero-h">Who should you <span className={c('accent')}>meet?</span></h1>
					<p className={c('lede')}>{profile
						? 'Tell us your role and company. We suggest who to meet, you check it, and we send your plan for both days.'
						: 'Two minutes. Tell us who you would like to network with. You get a shortlist, then your plan for both days.'}</p>
				</div>
			</section>
			<section className={c('section')} aria-label="Find who to meet">
				<div className={c('wrap')}>
					<MeetWidget />
				</div>
			</section>
		</LivingPage>
	)
}
WhoToMeet.theme = 'living'

export async function getStaticProps() {
	return { props: {} }
}
