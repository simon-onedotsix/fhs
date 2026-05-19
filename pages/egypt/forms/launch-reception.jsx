import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import Head from "next/head"

import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header'
import { FHS_EGYPT as header } from '../../../fixtures/nav'
import { Footer } from '../../../fuselage/theme/egypt/common/footer/footer'

import HubspotForm from '../../../fuselage/components/hubspot-form/hubspot-form'



export default function Page () {

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/egypt/favicon-16x16.png" sizes="16x16" />
            </Head>
        
            <EventsBar site={'/egypt'} />
            <Header
                site={`/egypt`}
                handle={`Egypt`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />
            
            <section className="block">
                <div className="container maxw-50">
                    <h1 className="fs-1 balance">RSVP for the FHS&nbsp;Egypt Launch reception</h1>
                </div>

                <div className="container  maxw-50">
                    <HubspotForm portalId={"14527187"} formId={"cd2f4749-3a46-477b-a699-3f3ff20173bf"} />
                </div>
            </section>


       

            <Footer />
            <LenisScroller />

        </>
    )
}
Page.theme = 'egypt'

