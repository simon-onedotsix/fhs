import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'
import { useLenis } from '@studio-freight/react-lenis'

import Head from 'next/head'
import Script from 'next/script'

import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header'
import { FHS_WORLD as header } from '../../../fixtures/nav'

import { Footer } from '../../../fuselage/theme/2025/ais/common/footer/footer'

import HubspotForm from '../../../fuselage/components/hubspot-form/hubspot-form'



export default function Page () {

    const lenis = useLenis()



    return (
        <>
                <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
            <Head>
                <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex, nocache, nositelinkssearchbox"/>
                <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex, nocache, nositelinkssearchbox" />
            </Head>
            
            <EventsBar site={'/world'} />
            <Header
				site={`/world`}
                handle={`World`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />

            {/* HEADING */}
            <section className="block bg-default">
                <div className="container">
                    <div style={{ width: 500, maxWidth: '70vw', margin: '0 auto' }}>
                        <img src="/assets/img/ais/ais-logo.svg" alt="logo" width="100%" />
                    </div>
                </div>
            </section>


            {/* FORM */}
            <section id="form" className="block bg-default">
                <div className="container formatted center maxw-40">
                    <p className="fs-2 lh-1 fw-600">Register  for UAE Africa Tourism Investment Summit</p>
                    <p className='fs-4 fw-600 c-white caps center mt-sm'>27 October 2025, 08:30–13:00</p>
                </div>
                <div className="container center formatted maxw-45">
                    <p className='fs-6 fw-400'>Please complete below form to register for the UAE Africa Tourism Investment Summit.</p>
                    <p className='fs-6 fw-400 c-accent'><strong className='fw-600'>THIS IS AN INVITATION ONLY EVENT</strong>, if you have not been invited to this link by a member of the organising teams, your registration may be rejected.</p>
                </div>
                <div className="container maxw-70">
                    <HubspotForm portalId='14527187' formId='aef1bdec-b43d-430c-b054-c2aa99347b7f' />
                </div>
            </section>


            <Footer />
            <LenisScroller />
        </>
    )
}

Page.theme = 'world-2024'


