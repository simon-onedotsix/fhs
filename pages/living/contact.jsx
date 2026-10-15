import { LivingPage } from '../../ui-living/site/page'
import { c } from '../../ui-living/lib/c'
import { img } from '../../ui-living/lib/format'
import facts from '../../ui-living/data/facts.json'

const TEAM = [
	['matthew', 'Matthew Weihs', 'Partnerships', 'Chief Development Officer', 'matthew.weihs@thebench.com'],
	['tanja', 'Tanja Millner', 'Programme and speakers', '', 'tanja.millner@thebench.com'],
	['marina', 'Marina Franolic', 'Investor relations', '', 'marina.franolic@thebench.com'],
	['ahmed', 'Muhammad Ahmed', 'Marketing and media', 'Head of Marketing', 'muhammad.ahmed@thebench.com'],
]

export default function Contact() {
	return (
		<LivingPage page="contact" title="FHS Living | Contact" description="Contact the FHS Living team for partnerships, the programme, investor relations and media.">
			<section className={c('page-hero')} aria-labelledby="hero-h">
				<div className={c('wrap')}>
					<h1 id="hero-h">Talk to <span className={c('accent')}>the team.</span></h1>
					<p className={c('lede')}>One inbox for everything, or go straight to the person who handles it.</p>
				</div>
			</section>
			<section className={c('section')} aria-label="The team">
				<div className={c('wrap')}>
					<a className={c('mailto')} href={`mailto:${facts.contact.email}`}>{facts.contact.email}</a>
					<ul className={c('team')} style={{ marginTop: 64 }}>
						{TEAM.map(([slug, name, topic, role, mail]) => {
							const [user, domain] = mail.split('@')
							return (
								<li key={slug} className={c('person')}>
									<div className={c('window')}><img src={img(`team/${slug}.jpg`)} width="600" height="750" alt={name} loading="lazy" /></div>
									<b>{name}</b><span className={c('team__topic')}>{topic}</span><span>{role && `${role}, `}The Bench</span>
									<a className={c('link')} href={`mailto:${mail}`}>{user}<wbr />@{domain}</a>
								</li>
							)
						})}
					</ul>
				</div>
			</section>
		</LivingPage>
	)
}
Contact.theme = 'living'

// Static at build time: without getStaticProps the app renders the page (and its CMS menu queries) on every visit.
export async function getStaticProps() {
	return { props: {} }
}
