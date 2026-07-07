import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useRouter } from 'next/router'
import Image from 'next/image'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Link from 'next/link'
import Script from "next/script"

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_SA as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'

import HubspotForm from '../../fuselage/components/hubspot-form/hubspot-form'



export default function Page () {

    const { locale } = useRouter()

    return (
        <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            
            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

            <EventsBar site={'/sa'} />
            <Header
                site={`/sa`}
                handle={`Saudi Arabia`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />

            


            {/* sponsor benefits */}
            <section className="block bg-default">
                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 c-primary lh-1 caps">Become a Partner</p>
                    </Fade>
                </div>

                <div className="container maxw-55">
                    <HubspotForm portalId={'14527187'} formId={'34357038-0e2a-412a-95e3-a68427da15e3'} />
                </div>
            </section>





            <Footer />
            <LenisScroller />
        </div>
    )
}

Page.theme = 'sa-2025'

