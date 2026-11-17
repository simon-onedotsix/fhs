import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import _ from 'lodash'

import Head from 'next/head'
import Script from 'next/script'


// BEGIN new static nav
import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header-living'
import { LIVING_FHS_WORLD as header } from '../../../fixtures/nav'

// END new static nav


import { Footer } from '../../../fuselage/theme/2025/brf/common/footer/footer'

// The body is the FHS Living design (17 Nov 2026, Ahmed: the day took place, so the page is now its recap); the events
// bar, menu and footer stay FHS World's, as on /sa/living.
import { LivingBody } from '../../../ui-living/site/body'
import { c } from '../../../ui-living/lib/c'
import { RecapHero, Collage, DayChart, Verdicts, PeopleGrid, PartnerTiers, NextEditions } from '../../../ui-living/sections/recap'
import { Quote } from '../../../ui-living/sections/quote'
import dubai from '../../../ui-living/data/dubai.json'
import concl from '../../../ui-living/data/conclusions.json'


const PHOTOS = [
    { photo: 'dubai/stage-oneone.jpg', alt: 'A conversation on the FHS Living stage', caption: 'FHS Living at FHS World, Dubai, 1 October 2026' },
    { photo: 'dubai/800/stage-podium.jpg', alt: 'A speaker at the FHS Living podium' },
    { photo: 'dubai/800/audience-gulf.jpg', alt: 'Delegates in the FHS Living session room' },
    { photo: 'dubai/800/stage-panel.jpg', alt: 'A panel on the FHS Living stage' },
    { photo: 'dubai/800/lounge-meeting.jpg', alt: 'A meeting in a lounge at FHS World' },
]

const TIERS = [
    { tier: 'Founder Partner', logos: [{ src: '/assets/img/brf/accor-one-living.svg', name: 'Accor One Living', h: 22 }] },
    { tier: 'Strategic Partner', logos: [{ src: '/assets/img/brf/global-branded-residences.svg', name: 'Global Branded Residences', h: 80, w: 78 }] },
    { tier: 'Partners', logos: [
        { src: '/assets/img/brf/digivalet.png', name: 'DigiValet', h: 30 },
        { src: '/assets/img/brf/sectorlight.svg', name: 'Sectorlight', h: 26 },
        { src: '/assets/img/brf/the-ascott-inverse.svg', name: 'The Ascott Limited', h: 70, w: 84 },
    ] },
    { tier: 'Media Partner', logos: [{ src: '/assets/img/brf/bresi.png', name: 'BRESI', h: 30 }] },
]


export default function Page ({ speakers }) {

    // FHS Living speakers in Swapcard's FHS World 2026 event, by surname
    const people = _.orderBy(
        (speakers || []).filter(speaker => speaker.withEvent.fields.some(field => field.definition?.id === "RmllbGREZWZpbml0aW9uXzg3NjU0Nw==")),
        [speaker => speaker.lastName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")]
    ).map(speaker => ({
        name: `${speaker.firstName} ${speaker.lastName}`,
        title: speaker.jobTitle,
        company: speaker.organization,
        photo: speaker.photoUrl,
        url: `/world/speakers/${speaker.id}`,
    }))

    return (
        <>
            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/living/favicon-16x16.png" sizes="16x16" />
                <meta content="https://futurehospitality.com/assets/img/living/v3/dubai/audience-room.webp" property="og:image"></meta>
                <title>FHS Living at FHS World | 1 October 2026, Dubai</title>
                <link rel="canonical" href="https://futurehospitality.com/world/living" />
                <meta name="description" content="FHS Living took over the Summit Stage at FHS World on 1 October 2026: 15 sessions, 38 speakers and what the room concluded, with every session summary."></meta>
            </Head>

            <EventsBar site={'/world/living'} />
            <Header
                site={`/world/living`}
                parentSite={`/world`}
                region={`At FHS World`}
                parentHandle={`FHS World`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />

            <LivingBody>
                <RecapHero
                    title="FHS Living at"
                    accent="FHS World."
                    when="1 October 2026"
                    venue="Madinat Jumeirah, Dubai · Day Three of FHS World"
                    lede={`The first FHS Living took over the Summit Stage for a full day: ${dubai.sessions.length} sessions and ${dubai.people.length} speakers on how real estate is built, sold and run as hospitality.`}
                    photo="dubai/audience-room.jpg"
                    alt="Delegates filling the FHS Living session room at FHS World, Madinat Jumeirah"
                    actions={[
                        { href: dubai.report, label: 'Read the day report', ext: true },
                        { href: '/world/living/agenda', label: 'View the 2026 agenda' },
                    ]}
                />

                <section className={c('section dark')} aria-labelledby="day-h">
                    <div className={c('wrap')}>
                        <div className={c('head')}>
                            <h2 className={c('ruled')} id="day-h">A full day on the Summit Stage.</h2>
                            <p>{dubai.people.length} speakers from {dubai.n_orgs} organisations, including {dubai.orgs_short}. Every session has a summary.</p>
                        </div>
                        <Collage photos={PHOTOS} />
                        <DayChart dubai={dubai} concl={concl} />
                        <Verdicts concl={concl} />
                        <Quote text={concl.quote.text} photo="speakers/abdulla-binhabtoor.jpg" name={concl.quote.name} role={concl.quote.role} style={{ marginTop: 'clamp(64px,7vw,112px)' }} />
                    </div>
                </section>

                {people.length > 0 && (
                    <section className={c('section')} aria-labelledby="who-h">
                        <div className={c('wrap')}>
                            <div className={c('head')}><h2 className={c('ruled')} id="who-h">Who spoke.</h2><p>The speakers of FHS Living at FHS World 2026.</p></div>
                            <PeopleGrid people={people} />
                        </div>
                    </section>
                )}

                <section className={c('section dark')} aria-labelledby="partners-h">
                    <div className={c('wrap')}>
                        <div className={c('head')}><h2 className={c('ruled')} id="partners-h">The 2026 partners.</h2></div>
                        <PartnerTiers tiers={TIERS} />
                    </div>
                </section>

                <NextEditions />
            </LivingBody>

            <Footer />
            <LenisScroller />
        </>
    )
}

Page.theme = 'living'



export async function getStaticProps() {

	const swapcardData = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query eventPerson(
						$eventId: ID!
						$cursor: CursorPaginationInput
						$filters: [EventPersonFilter!]
					){
						eventPerson(eventId: $eventId, cursor: $cursor, filters: $filters) {
							nodes {
								id
								type
								firstName
								lastName
								jobTitle
								organization
								photoUrl

								speakerOnPlannings {
									id
									title
									categories
									fields {
									... on MultipleSelectField {
										id
										definition {
											isDefault
											name
										}
										value
										translations {
											value
										}
									}
									}
								}

								withEvent(eventId: $eventId) {
									fields {
										... on SelectField {
											translations {
												value
												language
											}
											definition {
												id
												translations {
													name
													language
												}
											}
										}
										... on TextField {
											definition {
												name
												translations {
													name
												}
												id
											}
											locale
											value
											id
										}
									}
								}
								}
							}
						}
				`,
				variables: {
						"eventId": process.env.SWAPCARD_EVENT_ID_AE_2026,
						"cursor": {
							"first": 300
						},
						"filters": {
							"shouldBeInGroups": "RXZlbnRHcm91cF82NTQ4MTQ="
						}
					}
			})
		}
	)
	const speakerData =  await swapcardData.json()
  

    if ( speakerData ) return { 
        props: { 
            speakers: speakerData.data?.eventPerson?.nodes || [],  // no Swapcard reply: the page builds without the speakers
        } 
    }

	return { props: {} }
}