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
                    <h1 className="fs-1">Become a Partner</h1>
                </div>

                <div className="container  maxw-50">
                    <HubspotForm portalId={"14527187"} formId={"801ad76c-d560-4986-bc35-0e28763ff4d0"} />
                </div>
            </section>


       

            <Footer />
            <LenisScroller />

        </>
    )
}
Page.theme = 'egypt'

