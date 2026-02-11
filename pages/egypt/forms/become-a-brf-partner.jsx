import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import Head from "next/head"

import { Header } from '../../../fuselage/theme/egypt/common/header/header'
import { Footer } from '../../../fuselage/theme/egypt/common/footer/footer'

import HubspotForm from '../../../fuselage/components/hubspot-form/hubspot-form'



export default function Page () {

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/egypt/favicon-16x16.png" sizes="16x16" />
            </Head>
        
            <Header compact />
            
            <section className="block">
                <div className="container maxw-50">
                    <h1 className="fs-1">Become a Branded Residences Forum Partner</h1>
                </div>

                <div className="container  maxw-50">
                    <HubspotForm portalId={"14527187"} formId={"3052d2d0-573d-4c36-a4cf-853fcef9e98d"} />
                </div>
            </section>


       

            <Footer />
            <LenisScroller />

        </>
    )
}
Page.theme = 'egypt'

