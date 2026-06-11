import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import useCustomMediaQuery from '../../hooks/useCustomMediaQuery'

import Head from "next/head"



import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header-living'
import { FHS_LIVING as header } from '../../fixtures/nav'
import { Footer } from "../../ui/site/footer"

import HubspotForm from "../../fuselage/components/hubspot-form/hubspot-form"




export default function Home () {

    // console.log(content)

    const isDesktop = useCustomMediaQuery('(min-width: 600px)');

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/living/favicon-16x16.png" sizes="16x16" />
                <meta content="/assets/img/living/seo/seo-image.jpg" property="og:image"></meta>
                <title>FHS Living | Feb 2027, Paris | Founding Edition</title>
                <meta name="description" content="Addressing the growing 'lanyard fatigue' of the European hospitality conferencing market"></meta>
            </Head>
        
            
            <EventsBar site={'/living'} />
            <Header
                site={`/living`}
                handle={`Living`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />



            
            <div className="block bg-secondary py-xs">
                <div className="container">
                    <p className="fs-2">Register your interest in FHS Living</p>
                    <p className="maxw-60 mt-sm">FHS Living Paris 2027 is a founding-edition event. Places are curated and limited. Register your interest now to be among the first to receive programme updates, early bird delegate pricing and partnership information.</p>
                </div>

                <div className="container">
                    <HubspotForm 
                        portalId={"14527187"}
                        formId={"87149330-f9a0-44cd-af58-6f0d18c31a42"}
                    />
                </div>
            </div>



            <Footer />
            <LenisScroller />
        </>
    )
}
Home.theme = 'living'

