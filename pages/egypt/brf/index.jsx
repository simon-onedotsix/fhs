import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import _ from 'lodash'

import Head from 'next/head'
import Script from 'next/script'


// BEGIN new static nav
import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header-living'
import { BRF_FHS_EGYPT as header } from '../../../fixtures/nav'

// END new static nav


import { Footer } from '../../../fuselage/theme/2025/brf/common/footer/footer'
import { HeroUnitVideo } from "../../../fuselage/theme/2024/world/blocks/hero-unit-video/hero-unit-video"
import { Button } from "../../../ui/buttons/button"

import { Pop, Fade } from "../../../fuselage/theme/2023/ae/layout/animation/animation"
import { EventCard } from "../../../ui/components/event-card"


import { EVENT_DATA } from '../..'
const livingEventIds = new Set(['246252', '259029', '314682', '246252333'])
const FHS_EVENTS = EVENT_DATA.filter(event => !livingEventIds.has(event.id))
const LIVING_EVENTS = EVENT_DATA.filter(event => livingEventIds.has(event.id))


export default function Page () {
    

    return (
        <>
            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>
            
            <EventsBar site={'/world/brf'} />
            <Header
                site={`/egypt/brf`}
                parentSite={`/egypt`}
                handle={`At FHS Egypt`}
                parentHandle={`FHS Egypt`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                // ctas={header.data.event.headerCtas}
            />



            <HeroUnitVideo video={'https://cms.thebench.com/assets/video/brf-2025-asia.mp4'} poster={'/assets/video/brf-2025-asia.jpg'}>

                <p className='fs-0 fw-600 caps lh-1 center maxw-50 mx-auto'>Where brands shape the future of living</p>

                <p className="fs-4 c-white center maxw-70 b-1 rad-sm p-sm" style={{ margin: '2rem auto 0' }}><strong className="c-white">Branded Residences Forum</strong> has been rebranded to <strong className="c-white">FHS Living</strong>. <br />Please head on over to <a className="c-white" href="/sa/egypt">FHS Living</a>.</p>


                <div className="mt-sm center">
                    <Pop>
                        <Button
                            href={'/egypt/living'}
                            label={`FHS Living at FHS Egypt`}
                            inverse
                        />
                    </Pop>
                </div>

            </HeroUnitVideo>


            {/* FHS EVENTS */}
            <section className="block bg-burgundy" style={{ position: `relative`, zIndex: 2 }}>

                {/* LIVING */}
                <div className="container center">
                    <p className="fs-2 fw-500 caps">Upcoming FHS Living Events</p>
                </div>

                <div className="container columns-1 maxw-35 gap-xs">
                    {
                        _.orderBy(LIVING_EVENTS, 'startDate').map(event => {
                            // console.log(event)
                            return (
                                <div key={event.id} className={`columns-1 gap-xs`}>                                
                                    {
                                        event.streams &&
                                        event.streams.map( stream => (
                                            <EventCard
                                                key={stream.id}
                                                heading={event.heading}
                                                title={stream.heading}
                                                dates={{ startDate: event.startDate, endDate: event.endDate}}
                                                venue={event.venue}
                                                logo={stream.logo[0]}
                                                passLink={stream.purchasePassLink} 
                                                websiteLink={stream.websiteLink} 
                                                theme={event.theme} 
                                                dateOverride={event.dateOverride}
                                                landscape={true}
                                            />
                                        ))
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <Footer />
            <LenisScroller />
        </>
    )
}

Page.theme = 'living'


