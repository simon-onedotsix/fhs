import { LenisScroller } from '../fuselage/animation/lenis-scroller'

import { EventsBar } from "../ui/site/eventsbar"
import { Header } from '../ui/site/header'
import { FHS as header } from '../fixtures/nav'
import { Footer } from '../fuselage/theme/2024/global/common/footer/footer'


export default function Page() {

    return (
		<>
			
			<style>{`
				.fhs-tor {
					--tor-bg: #3c1a52;
					--tor-deep: #270b3a;
					--tor-purple: #6e439a;
					--tor-lilac: #9972ab;
					--tor-text: #ffffff;
					--tor-soft: rgba(255,255,255,.78);
					--tor-rule: rgba(255,255,255,.14);
					font-family: Roboto, sans-serif;
					color: var(--tor-text);
					background: var(--tor-bg);
					line-height: 1.65;
					font-size: 17px;
				}
				.fhs-tor *, .fhs-tor *::before, .fhs-tor *::after { box-sizing: border-box; }
				.fhs-tor a { color: var(--tor-text); }

				/* Hero, echoing the diagonal shape used across the FHS site */
				.fhs-tor .tor-hero {
					position: relative; overflow: hidden;
					padding: 96px 20px 72px;
					background: var(--tor-bg);
				}
				.fhs-tor .tor-hero::after {
					content: ""; position: absolute; right: 0; bottom: 0;
					width: 55%; height: 100%;
					background: var(--tor-purple); opacity: .45;
					clip-path: polygon(100% 0, 100% 100%, 0 100%);
					pointer-events: none;
				}
				.fhs-tor .tor-wrap { max-width: 880px; margin: 0 auto; position: relative; z-index: 1; }
				.fhs-tor .tor-eyebrow {
					color: var(--tor-lilac); font-size: 14px; font-weight: 600;
					letter-spacing: .12em; text-transform: uppercase; margin: 0 0 14px;
				}
				.fhs-tor h1 {
					font-size: clamp(34px, 6vw, 56px); line-height: 1.1; font-weight: 700;
					color: var(--tor-lilac); margin: 0 0 20px;
				}
				.fhs-tor .tor-lead { font-size: 20px; color: var(--tor-soft); max-width: 640px; margin: 0 0 32px; font-weight: 300; }
				.fhs-tor .tor-meta { display: flex; flex-wrap: wrap; gap: 10px; }
				.fhs-tor .tor-pill {
					font-size: 14px; font-weight: 500; padding: 7px 14px; border-radius: 999px;
					background: rgba(255,255,255,.08); border: 1px solid var(--tor-rule);
				}

				.fhs-tor .tor-body { padding: 56px 20px 80px; background: var(--tor-deep); }

				.fhs-tor nav.tor-toc {
					background: var(--tor-bg); border-left: 4px solid var(--tor-purple);
					padding: 22px 26px; margin-bottom: 52px;
				}
				.fhs-tor nav.tor-toc p { margin: 0 0 10px; font-weight: 600; font-size: 15px; color: var(--tor-lilac); text-transform: uppercase; letter-spacing: .08em; }
				.fhs-tor nav.tor-toc ol { margin: 0; padding-left: 20px; columns: 2; column-gap: 36px; font-size: 16px; }
				.fhs-tor nav.tor-toc li { margin-bottom: 6px; break-inside: avoid; }
				.fhs-tor nav.tor-toc a { text-decoration: none; font-weight: 500; }
				.fhs-tor nav.tor-toc a:hover { color: var(--tor-lilac); }

				.fhs-tor .tor-intro { color: var(--tor-soft); margin: 0 0 40px; }

				.fhs-tor section { margin-bottom: 52px; scroll-margin-top: 100px; }
				.fhs-tor h2 { font-size: 28px; line-height: 1.25; font-weight: 600; margin: 0 0 18px; }
				.fhs-tor h2 span { color: var(--tor-purple); font-weight: 400; margin-right: 10px; }
				.fhs-tor h3 { font-size: 18px; font-weight: 600; margin: 24px 0 6px; color: var(--tor-lilac); }
				.fhs-tor p { margin: 0 0 14px; color: var(--tor-soft); }
				.fhs-tor ul { margin: 0 0 16px; padding-left: 0; list-style: none; }
				.fhs-tor ul li { position: relative; padding-left: 22px; margin-bottom: 10px; color: var(--tor-soft); }
				.fhs-tor ul li::before {
					content: ""; position: absolute; left: 0; top: .62em;
					width: 8px; height: 8px; background: var(--tor-purple);
					clip-path: polygon(0 0, 100% 50%, 0 100%);
				}

				.fhs-tor .tor-two { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 10px 0 20px; }
				.fhs-tor .tor-card { background: var(--tor-bg); padding: 20px 22px; border-top: 3px solid var(--tor-purple); }
				.fhs-tor .tor-card h3 { margin-top: 0; }
				.fhs-tor .tor-card p { margin: 0; font-size: 16px; }

				.fhs-tor .tor-foot {
					margin-top: 16px; padding: 26px 28px; background: var(--tor-bg);
					display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px;
				}
				.fhs-tor .tor-foot p { margin: 0; color: var(--tor-text); font-weight: 500; }
				.fhs-tor .tor-btn {
					display: inline-block; background: var(--tor-purple); color: #fff; text-decoration: none;
					font-weight: 600; padding: 12px 22px; border-radius: 999px;
				}
				.fhs-tor .tor-btn:hover { background: var(--tor-lilac); }

				@media (max-width: 640px) {
					.fhs-tor { font-size: 16px; }
					.fhs-tor .tor-hero { padding: 64px 16px 48px; }
					.fhs-tor .tor-hero::after { width: 80%; height: 60%; }
					.fhs-tor .tor-body { padding: 40px 16px 56px; }
					.fhs-tor nav.tor-toc ol { columns: 1; }
					.fhs-tor .tor-two { grid-template-columns: 1fr; }
					.fhs-tor h2 { font-size: 24px; }
				}
			`}</style>
            
            
            <EventsBar site={'/'} />
            <Header
                site={``}
                handle={``}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
            />





					<article className="fhs-tor">
						<header className="tor-hero">
							<div className="tor-wrap">
							<p className="tor-eyebrow">Future Hospitality Summit</p>
							<h1>Advisory Board Terms of Reference</h1>
							<p className="tor-lead">How the Advisory Boards of every FHS edition work: what they do, who sits on them, and how we treat our members&apos; names, time and interests.</p>
							<div className="tor-meta">
								<span className="tor-pill">Organiser: The Bench Conference LLC</span>
								<span className="tor-pill">Applies to all FHS editions</span>
								<span className="tor-pill">Updated October 2026</span>
							</div>
							</div>
						</header>

						<div className="tor-body">
							<div className="tor-wrap">

							<nav className="tor-toc" aria-label="Contents">
								<p>Contents</p>
								<ol>
								<li><a href="#tor-purpose">Purpose and status</a></li>
								<li><a href="#tor-organiser">Organiser</a></li>
								<li><a href="#tor-membership">Membership</a></li>
								<li><a href="#tor-role">Role and contribution</a></li>
								<li><a href="#tor-names">Use of names, logos and images</a></li>
								<li><a href="#tor-conflicts">Conflicts of interest and confidentiality</a></li>
								<li><a href="#tor-costs">Costs, ending membership and review</a></li>
								</ol>
							</nav>

							<p className="tor-intro">These terms apply to the Advisory Boards of every Future Hospitality Summit (FHS) edition. Each edition publishes its own list of members.</p>

							<section id="tor-purpose">
								<h2><span>01</span>Purpose and status</h2>
								<p>The Advisory Board gives expert advice on the programme, themes and priorities of the relevant FHS edition. It helps keep the content relevant to investors, operators, governments and the wider hospitality community.</p>
								<ul>
								<li>The Board is purely advisory. Its recommendations are not binding on The Bench or on any member.</li>
								<li>The Board has no decision-making, financial, management or fiduciary authority.</li>
								<li>The Board is entirely separate from the corporate governance of The Bench. Members are not directors, officers, employees, agents or shareholders of The Bench, and they take on no legal liability for its activities.</li>
								<li>Membership creates no partnership, joint venture, sponsorship or commercial obligation for either side, unless both agree separately in writing.</li>
								<li>Final decisions on the programme, speakers and partners rest with The Bench.</li>
								</ul>
							</section>

							<section id="tor-organiser">
								<h2><span>02</span>Organiser</h2>
								<p>Each Advisory Board is convened by The Bench Conference LLC, trading as The Bench, which organises FHS and issues invitations to join the Board.</p>
								<p>Where an edition is co-organised with a host partner, that partner has no authority over the Board.</p>
							</section>

							<section id="tor-membership">
								<h2><span>03</span>Membership</h2>
								<h3>Composition</h3>
								<p>Typically 8 to 15 members drawn from hotel owners and investors, operators, government and public bodies, international organisations, lenders and advisers. The Bench aims for a balance of sectors, regions and gender.</p>

								<h3>Individual or institutional members</h3>
								<div className="tor-two">
								<div className="tor-card">
									<h3>Individual members</h3>
									<p>Serve in a personal capacity. Their professional title is used for identification only.</p>
								</div>
								<div className="tor-card">
									<h3>Institutional members</h3>
									<p>Organisations such as a UN agency, ministry or tourism authority, represented by a person they nominate and may replace at any time by written notice.</p>
								</div>
								</div>

								<h3>Appointment</h3>
								<p>By written invitation from The Bench, accepted in writing. Email is enough.</p>
								<h3>Term</h3>
								<p>One edition cycle, normally around 12 months, ending after the event. Membership can be renewed by mutual agreement.</p>
								<h3>Secretariat</h3>
								<p>The Bench production team for each edition handles scheduling, papers, notes and member communication.</p>
							</section>

							<section id="tor-role">
								<h2><span>04</span>Role and expected contribution</h2>
								<p>Members are asked to:</p>
								<ul>
								<li>Share views on market trends, priority topics and gaps in the programme</li>
								<li>Suggest session themes, formats and potential speakers. All speaker invitations are made and approved by The Bench.</li>
								<li>Complete a short pre-event questionnaire</li>
								<li>Attend the edition where possible</li>
								</ul>
								<p>Members are not expected to raise sponsorship, endorse sponsors or commercial products, or promote the event.</p>
								<h3>Meetings</h3>
								<p>Two to three virtual meetings per cycle, about 60 minutes each. Input can also be given by email or questionnaire. There is no quorum and no voting, as the Board makes no decisions.</p>
								<h3>Time commitment</h3>
								<p>Roughly 4 to 6 hours across the cycle, plus event attendance if the member chooses.</p>
							</section>

							<section id="tor-names">
								<h2><span>05</span>Use of names, logos and images</h2>
								<p>The Bench uses a member&apos;s name, title, photo and short biography only to identify them as an Advisory Board member, on:</p>
								<ul>
								<li>The edition website&apos;s Advisory Board page</li>
								<li>The event programme, app and on-site Advisory Board signage</li>
								<li>Press releases and social media posts announcing the Board</li>
								</ul>
								<h3>Institutional names and emblems</h3>
								<p>An organisation&apos;s name, logo or emblem is used only with its prior written approval of each format, and in line with its own brand rules. It will never be presented in a way that implies sponsorship, endorsement, partnership or co-organisation.</p>
								<h3>Separation from sponsorship</h3>
								<p>Advisory Board listings are kept separate from sponsor and partner listings.</p>
								<h3>Withdrawal</h3>
								<p>A member can ask to be removed from materials at any time. Digital materials will be updated within 10 working days.</p>
							</section>

							<section id="tor-conflicts">
								<h2><span>06</span>Conflicts of interest and confidentiality</h2>
								<h3>Declaring interests</h3>
								<p>Members tell the Secretariat about any commercial interest connected to their advice. The Secretariat keeps a register of declared interests.</p>
								<h3>Managing them</h3>
								<p>Where a conflict exists, the member may still give general views, but The Bench makes any related decision independently. Membership gives no preferential access to speaking slots, sponsorship terms or commercial opportunities.</p>
								<h3>Institutional members</h3>
								<p>Nothing in these terms requires an institutional member to act against its own rules, mandate, privileges or immunities.</p>
								<h3>Confidentiality</h3>
								<p>Draft programmes and unannounced speaker or partner names shared with the Board stay confidential until The Bench publishes them. Individual comments are not attributed publicly without consent.</p>
								<h3>Data</h3>
								<p>Personal data is handled under The Bench&apos;s <a href="https://www.thebench.com/privacy">privacy policy</a> and UK GDPR.</p>
							</section>

							<section id="tor-costs">
								<h2><span>07</span>Costs, ending membership and review</h2>
								<h3>Costs</h3>
								<p>Membership is unpaid. Members receive a complimentary pass to the relevant edition. Travel and accommodation are not covered.</p>
								<h3>Ending membership</h3>
								<p>Either side can end membership at any time by written notice.</p>
								<h3>Review</h3>
								<p>The Bench reviews these terms every year.</p>
								<h3>Status of these terms</h3>
								<p>These terms set out how the Board works and do not create legally binding obligations, except sections 5 and 6, which both sides agree to honour.</p>
							</section>

							<div className="tor-foot">
								<p>Questions about the FHS Advisory Boards?</p>
								<a className="tor-btn" href="mailto:hello@thebench.com">hello@thebench.com</a>
							</div>

							</div>
						</div>
						</article>







            <Footer />
            <LenisScroller />
        </>
    )
}

Page.theme = 'global-2024'

