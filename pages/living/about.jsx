import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import useCustomMediaQuery from '../../hooks/useCustomMediaQuery'
import { Pop, Fade } from "../../fuselage/animation/animation"

import Head from "next/head"



import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header-living'
import { FHS_LIVING as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/living/common/footer/footer'

import { PageHero } from "../../ui/modules/page-hero"
import { EventCardLite } from '../../fuselage/theme/2024/world/blocks/upcoming-events/upcoming-events'





export default function Page ({ data }) {

    // console.log(content)

    const isDesktop = useCustomMediaQuery('(min-width: 600px)');

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/living/favicon-16x16.png" sizes="16x16" />
            </Head>
        
            
            <EventsBar site={'/living'} />
            <Header
                site={`/living`}
                handle={`Living`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />


            {/* INTRO */}
            <PageHero hero={{url: `/assets/img/living/about/about-hero.jpg`, width: 595, height: 335}}>
                <section className="">
                    <div className="container">
                        <p className="fs-1 fw-400 lh-1 maxw-50">Built by the architects of global hospitality investment platforms. Built for what comes next.</p>
                    </div>

                    <div className="container">
                        <p className="fs-6 maxw-55 balance">FHS Living is a new investor-led forum launching in Paris in February 2027, organised by The Bench — the team behind the Future Hospitality Summit series. It brings together global capital, European developers and operators across the full spectrum of living asset classes, in a curated, dealmaking-focused environment that the market has been calling for.</p>
                    </div>
                </section>
            </PageHero>



            {/* CHAIRMAN LETTER */}
            <section className="block bg-wash">
                <div
                    className="container"
                    style={
                        isDesktop ?
                        {
                            display: `grid`,
                            gridTemplateColumns: `3fr 1fr`,
                            gap: `var(--space-md)`
                        }:{
                            display: `flex`,
                            flexDirection: `column-reverse`,
                            gap: `var(--space-md)`,
                            textAlign: `center`
                        }
                    }
                >
                    <div className="formatted">
                        <p className="fs-2 fw-600 c-primary caps lh-1">Letter from the Chairman</p>
                        <p>Hospitality is no longer a standalone asset class. It is becoming a layer of value across how people live, work and experience space. The industry needs a platform that reflects this - and we have built it.</p>
                        <p><strong>FHS Living</strong> has been designed as a curated forum where global capital meets developers and operators across the full spectrum of living and hospitality assets. A place where operational expertise and real estate ownership converge. A place where deals are initiated, partnerships are formed, and new models of living are defined.</p>
                        <p>We believe this is one of those moments, and we look forward to building it together… with you.</p>
                        <p>Jonathan Worsley, Chairman, <strong>The Bench</strong></p>
                    </div>

                    <Pop>
                        <img src="https://cms.thebench.com/assets/img/site/The-Bench/image-16.png" alt="" width={ isDesktop ? `100%` : `60%`} style={{ borderRadius: `30rem`}} />
                    </Pop>
                </div>
            </section>


            {/* DEDICATED PLATFORM */}
            <section className="block bg-secondary">
                <div className="container center">
                    <p className="fs-2 fw-500 caps">A market ready for a dedicated platform</p>
                </div>

                <div className="container columns-3 gap-md">
                    <div className="formatted balance">
                        <Pop inline><p className="fs-xl fw-600 lh-1 c-primary">01</p></Pop>
                        <h5>The scale of European living investment</h5>
                        <p>Living has become Europe&apos;s largest real estate investment class, drawing €46.9 billion in 2025 alone. Capital is moving toward operationally-managed assets that generate stable, contractual income streams - branded residences, student accommodation, senior living and serviced apartments are now core institutional categories.</p>
                    </div>
                    
                    <div className="formatted balance">
                        <Pop inline><p className="fs-xl fw-600 lh-1 c-primary">02</p></Pop>
                        <h5>The demand for cross-category dealmaking</h5>
                        <p>The growth of the living sector across Europe has created a need for a forum that brings its constituent asset classes together in a single, investment-led environment. FHS Living aggregates the full living spectrum - giving capital allocators, developers and operators a single curated point of access to cross-category opportunity.</p>
                    </div>
                    
                    <div className="formatted balance">
                        <Pop inline><p className="fs-xl fw-600 lh-1 c-primary">03</p></Pop>
                        <h5>The platform the industry has validated</h5>
                        <p>Conversations with senior industry leaders confirmed the same message: the European living investment community needs a dedicated forum, built for dealmaking, bringing together the right people at the right moment.</p>
                    </div>
                </div>
            </section>


            {/* GEOPOLITICS */}
            {/* <section className="block bg-primary">
                <div className="container">
                    <p className="fs-2 fw-600 caps center">The geopolitical moment</p>
                </div>

                <div className="container columns-2 gap-md">
                    <Pop>
                        <img src="/assets/img/living/about/geopolitics-01.jpg" width={`100%`} alt="" style={{ borderRadius: `1rem` }} />
                    </Pop>
        
                    <div className="formatted" style={{ alignSelf: `center`}}>
                        <p>Geopolitical shifts across the Middle East have accelerated the movement of global capital toward European real estate. Middle Eastern and Asian family offices - historically focused on hotel assets are increasingly directing capital toward European cities including Paris, Amsterdam and Madrid, where long-duration stability and premium returns converge.</p>
                        <p>Sharia-compliant living assets - student accommodation, senior living and branded residences offer a particularly attractive entry point: stable income, long-duration yield, and exposure to the operational performance of Europe&apos;s most structurally undersupplied real estate categories.</p>
                        <p>FHS Living sits at the intersection of this capital shift. Paris in February 2027 is the year-opening capital deployment moment - post-Davos, ahead of the major spring conferences, at the point when institutional capital is setting its strategy for the year ahead.</p>
                    </div>
                </div>
            </section> */}
            

            {/* THREE DECADES */}
            <section className="block bg-primary">
                <div className="container">
                    <p className="fs-2 fw-600 caps center">Three decades of connecting capital and hospitality</p>
                </div>

                <div className="container columns-2 gap-md">
                    <div className="formatted" style={{ alignSelf: `center`}}>
                        <p>The Bench has spent three decades building the infrastructure of global hospitality investment. The FHS franchise - Future Hospitality Summit World, Saudi Arabia, Africa, Egypt and Branded Residences Forum gives FHS Living a global network spanning the Middle East, Africa, Asia and Europe. That network, built over 20 years, is the foundation FHS Living is built on.</p>
                        <p>Across our 2025 FHS conferences, we brought together more than 3,000 C-level decision-makers, including 621 investors representing over USD 11 trillion in assets under management, and facilitated USD 3 billion in business opportunities. FHS Living carries that same convening power, focused on the living sector and anchored in Europe.</p>
                    </div>
        
                    <Pop>
                        <img src="/assets/img/living/about/fhs-01.jpg" width={`100%`} alt="" style={{ borderRadius: `1rem` }} />
                    </Pop>
                </div>
            </section>
 
            
            {/* FHS EVENTS */}
            <section className="block bg-secondary">
                <div className="container center">
                    <p className="fs-1 fw-500 caps">FHS Around the World</p>
                </div>

                <div className="container columns-3 maxw-55 gap-xs">
                    {
                        data.events.map(event => {
                            console.log(event)
                            return (
                                <div key={event.id} className={`columns-1 gap-xs`}>                                
                                    {
                                        event.streams &&
                                        event.streams.map( stream => (
                                            <EventCardLite
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
                                            />
                                        ))
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            
            
            

            <Footer/>
            <LenisScroller />
        </>
    )
}
Page.theme = 'living'






export async function getStaticProps() {

    const { data } = await craftApolloClient().query({
        query: gql`
            query LandingPage {
                entry(site: "${process.env.SITE_HANDLE}", id: "77020") {
                    ... on ${process.env.SITE_HANDLE}Homepage_${process.env.SITE_HANDLE}Homepage_Entry {
                        id
                        title
                        theme
                        events {
                            ... on events_BlockType {
                                id
                                heading
                                startDate
                                endDate
                                dateOverride
                                venue
                                theme
                                streams {
                                    ... on streams_stream_BlockType {
                                        id
                                        logo {
                                            id
                                            url
                                            width
                                            height
                                        }
                                        heading
                                        purchasePassLink
                                        websiteLink
                                    }
                                }
                            }
                        }
                    }
                }                
            }
          
        `
        })

        return {
        props: {
            data: data.entry,
        },
    }
}