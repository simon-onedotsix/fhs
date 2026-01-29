import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import Head from "next/head"

import { Header } from '../../../fuselage/theme/egypt/common/header/header'
import { Footer } from '../../../fuselage/theme/egypt/common/footer/footer'

import HubspotForm from '../../../fuselage/components/hubspot-form/hubspot-form'



export default function Page () {

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>
        
            <Header compact />
            
            <section className="block">
                <div className="container maxw-50">
                    <h1 className="fs-1">Register Interest</h1>
                </div>

                <div className="container  maxw-50">
                    <HubspotForm portalId={"14527187"} formId={"fbba2b56-01eb-4255-b5c8-59b98448e592"} />
                </div>
            </section>


       

            <Footer />
            <LenisScroller />

        </>
    )
}
Page.theme = 'egypt'

