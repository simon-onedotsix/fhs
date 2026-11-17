import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import Head from 'next/head'
import Script from "next/script"


import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header-living'
import { LIVING_FHS_EGYPT as header } from '../../../fixtures/nav'

import { Footer } from '../../../fuselage/theme/2025/brf/common/footer/footer'

// The body is the FHS Living design (17 Nov 2026, Ahmed: the day took place, so the page is now its recap); the events
// bar, menu and footer stay FHS Egypt's, as on /sa/living. Sessions, speakers and photos: ui-living/data/cairo.json.
import { LivingBody } from '../../../ui-living/site/body'
import { c } from '../../../ui-living/lib/c'
import { RecapHero, Collage, SessionRow, PeopleGrid, PartnerTiers, NextEditions } from '../../../ui-living/sections/recap'
import { cairoSessions } from '../../../ui-living/sections/cairo'
import cairo from '../../../ui-living/data/cairo.json'


const TIERS = [
    { tier: 'Partners', logos: [
        { src: '/assets/img/brf/accor-one-living.svg', name: 'Accor One Living', h: 22 },
        { src: '/assets/img/brf/sectorlight.svg', name: 'Sectorlight', h: 26 },
    ] },
]


export default function Page () {

    return (
        <>
            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/living/favicon-16x16.png" sizes="16x16" />
                <meta content="https://futurehospitality.com/assets/img/living/v3/cairo/hero.webp" property="og:image"></meta>
                <title>FHS Living at FHS Egypt | 11 November 2026, Cairo</title>
                <meta name="description" content="Five FHS Living sessions on branded residences on the Summit Stage at FHS Egypt, 11 November 2026: the speakers, the photos and a summary of every session."></meta>
            </Head>

            <EventsBar site={'/egypt/living'} />
            <Header
                site={`/egypt/living`}
                parentSite={`/egypt`}
                region={`At FHS Egypt`}
                parentHandle={`FHS Egypt`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />

            <LivingBody>
                <RecapHero
                    title="FHS Living at"
                    accent="FHS Egypt."
                    when={cairo.date}
                    venue={`${cairo.venue} · Day Two of FHS Egypt`}
                    lede={`Five sessions on the Summit Stage on branded residences in Egypt and beyond, with ${cairo.people.length} speakers from Accor One Living, Wyndham, Millennium, Somabay, Kerten Hospitality and Greenberg Traurig.`}
                    photo={cairo.hero.photo}
                    alt={cairo.hero.alt}
                    actions={[
                        { href: cairo.summaries_index, label: 'All talk summaries', ext: true },
                        { href: cairo.agenda, label: 'View the FHS Egypt agenda' },
                    ]}
                />

                <section className={c('section dark')} aria-labelledby="day-h">
                    <div className={c('wrap')}>
                        <div className={c('head')}>
                            <h2 className={c('ruled')} id="day-h">Five sessions on the Summit Stage.</h2>
                            <p>From 2:00pm on Day Two of FHS Egypt. Every session has a summary.</p>
                        </div>
                        <SessionRow sessions={cairoSessions} label="FHS Living sessions at FHS Egypt" />
                        <div style={{ marginTop: 'clamp(56px,6vw,96px)' }}>
                            <Collage photos={cairo.gallery.slice(0, 5)} />
                        </div>
                    </div>
                </section>

                <section className={c('section')} aria-labelledby="who-h">
                    <div className={c('wrap')}>
                        <div className={c('head')}><h2 className={c('ruled')} id="who-h">Who spoke.</h2><p>The speakers and moderators of FHS Living at FHS Egypt 2026.</p></div>
                        <PeopleGrid people={cairo.people} />
                    </div>
                </section>

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
