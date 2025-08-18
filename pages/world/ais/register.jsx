import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'
import { useLenis } from '@studio-freight/react-lenis'

import Head from 'next/head'

import { Header } from '../../../fuselage/theme/2025/ais/common/header/header'
import { Footer } from '../../../fuselage/theme/2025/ais/common/footer/footer'

import HubspotForm from '../../../fuselage/components/hubspot-form/hubspot-form'



export default function Page () {

    const lenis = useLenis()



    return (
        <>
            <Head>
                <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex, nocache, nositelinkssearchbox"/>
                <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex, nocache, nositelinkssearchbox"/>
            </Head>
            
            <Header overlaid inverse />

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
                <div className="container maxw-70">
                    <HubspotForm portalId='14527187' formId='aef1bdec-b43d-430c-b054-c2aa99347b7f' />
                </div>
            </section>


            <Footer />
            <LenisScroller />
        </>
    )
}

Page.theme = 'global-2024'


