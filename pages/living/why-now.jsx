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
import { AnimatedCounter } from "../../fuselage/theme/2025/sa/blocks/impact-grid/impact-grid"
import { Card } from './index'
import { Quotation } from "../../ui/components/quotation"



export const ASSET_CLASS_DATA = [
    {
        imageUrl: "/assets/img/living/why/asset-01.jpg",
        heading: "Branded residences",
        body: "Europe's fastest-growing luxury real estate category. With more than 300 schemes projected by 2032, branded residences offer developers an efficient route to capital through presales, while delivering premium returns to investors."
    },
    {
        imageUrl: "/assets/img/living/why/asset-02.jpg",
        heading: "Student accommodation (PBSA)",
        body: "97% average occupancy across Europe. Annual investment growth of 11% has made PBSA a firmly institutional category, with sovereign funds, pension funds and global asset managers leading deployment."
    },
    {
        imageUrl: "/assets/img/living/why/asset-03.jpg",
        heading: "Senior living",
        body: "Care home investment in EMEA grew 165% year-on-year in 2025. Ageing demographics across Germany, the Netherlands and the Nordics are creating enduring, demographically-driven demand for well-capitalised senior living platforms."
    },
    {
        imageUrl: "/assets/img/living/why/asset-04.jpg",
        heading: "Serviced living",
        body: "The convergence of residential and hospitality is reshaping how developers, operators and capital approach yield. Serviced apartments and aparthotels are demonstrating strong income stability and attracting long-duration capital."
    },
    {
        imageUrl: "/assets/img/living/why/asset-05.jpg",
        heading: "Co-living",
        body: "Institutional co-living operators are scaling across European gateway cities, supported by capital seeking contractual income streams and the operational expertise to manage them."
    },
    {
        imageUrl: "/assets/img/living/why/asset-06.jpg",
        heading: "Shared ownership",
        body: "Accessible entry points into residential real estate at a time of tightening affordability across prime European markets - a growing category attracting both private equity and institutional capital."
    },
    {
        imageUrl: "/assets/img/living/why/asset-07.jpg",
        heading: "Club concepts and hostels",
        body: "Hybrid formats serving the social living ambitions of younger demographics at scale. A category attracting growth capital from lifestyle-focused operators and investors seeking experiential living exposure."
    },
    {
        imageUrl: "/assets/img/living/why/asset-08.jpg",
        heading: "Mixed-use developments",
        body: "Hospitality as the anchor of integrated communities - hotels, branded residences, retail and wellness brought together into developments that command premium pricing and institutional-grade returns."
    },
    {
        imageUrl: "/assets/img/living/why/asset-09.jpg",
        heading: "Hotels and resorts",
        body: "Operationally-managed accommodation assets with contractual income, included at FHS Living as part of the full-spectrum living and hospitality investment conversation."
    },
]



export default function Page () {

    const isDesktop = useCustomMediaQuery('(min-width: 600px)');

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/living/favicon-16x16.png" sizes="16x16" />
                <meta content="https://cms.thebench.com/assets/content-library/img/FHS-Living/FHS-Living-Launch-PR.jpg" property="og:image"></meta>
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

            <PageHero hero={{url: `/assets/img/living/why/page-hero.jpg`, width: 595, height: 335}}>
                <section className="">
                    <div className="container">
                        <p className="fs-1 fw-400 lh-1 maxw-50">Europe&apos;s largest real estate asset class. One dedicated investment forum.</p>
                    </div>

                    <div className="container">
                        <p className="fs-6 maxw-55 balance">Living - branded residences, student accommodation, senior living, serviced living, co-living and mixed-use has become the pre-eminent European real estate investment category. Capital is moving with conviction. FHS Living is the dedicated platform where that capital meets the developers and operators deploying it.</p>
                    </div>
                </section>
            </PageHero>



            {/* IMPACT */}
            <section className="block bg-primary">            
                <div className="container columns-3 gap-md">
                    <div>
                        <p className="fs-2 fw-300 lh-1">€<AnimatedCounter from={0} to={46.9} /> billion</p>
                        <p className="fs-5 lh-1 mt-xxs balance c-magenta">invested in European living in 2025 -  the continent&apos;s largest real estate investment class.</p>
                    </div>
                    
                    <div>
                        <p className="fs-2 fw-300 lh-1">€<AnimatedCounter from={0} to={50} /> billion</p>
                        <p className="fs-5 lh-1 mt-xxs balance c-magenta">of fresh capital planned specifically for European living sectors over the next three years.</p>
                    </div>
                    
                    <div>
                        <p className="fs-2 fw-300 lh-1"><AnimatedCounter from={0} to={9.6} /> million</p>
                        <p className="fs-5 lh-1 mt-xxs balance c-magenta">home shortfall across Europe - structural undersupply driving long-term institutional demand across every living category.</p>
                    </div>
                    
                    <div>
                        <p className="fs-2 fw-300 lh-1"><AnimatedCounter from={0} to={165} />% year-on-year growth</p>
                        <p className="fs-5 lh-1 mt-xxs balance c-magenta">in care home investment across EMEA in 2025, reaching €14.4 billion.</p>
                    </div>
                    
                    <div>
                        <p className="fs-2 fw-300 lh-1"><AnimatedCounter from={0} to={300} />+ schemes</p>
                        <p className="fs-5 lh-1 mt-xxs balance c-magenta">Branded residences expected in Europe by 2032 - more than double the 141 operating today.</p>
                    </div>
                </div>
            </section>
            


            {/* ASSET CLASSES */}
            <section className="block bg-secondary">
                <div className="container center">
                    <p className="fs-2 fw-500 caps">Nine asset classes. One investment forum.</p>
                </div>

                <div className="container columns-3 gap-md">
                    {
                        ASSET_CLASS_DATA.map((card, index) => (
                            <article key={index} className="formatted">
                                <Pop>
                                    <img src={card.imageUrl} alt="" width={`100%`} style={{ borderRadius: `1rem`}} />
                                </Pop>
                                <p className="fs-4 fw-600 mt-xxs">{card.heading}</p>
                                <p>{card.body}</p>
                            </article>
                        ))
                    }
                </div>
            </section>

            

            {/* QUOTE */}
            <section className="block bg-primary">
                <div className="container maxw-55">
                    <Quotation
                        avatarUrl={`/assets/img/living/why/larissa.webp`}
                        quote={`"Luxury hospitality, branded residences and mixed-use projects continue to attract strong interest, with branded residences offering an efficient route to fund development through presales."`}
                        fullName={`Larissa Esser`}
                        title={`Colliers`}
                    />
                </div>
            </section>



            <Footer/>
            <LenisScroller />
        </>
    )
}
Page.theme = 'living'



