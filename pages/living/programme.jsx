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
import { Button, ButtonGrid } from "../../ui/buttons/button"
import { AgendaSessionLite } from "../../ui/components/agenda-session"



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


            <PageHero hero={{url: `/assets/img/living/agenda/page-hero.jpg`, width: 595, height: 335}}>
                <section style={{
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`
                }}>
                    <div className="container center">
                        <p className="fs-1 fw-400 lh-1 maxw-50">A two-day programme designed around capital deployment.</p>
                    </div>

                    <div className="container formatted center">
                        <p className="fs-6 maxw-55 balance">Every session at FHS Living is built to support investment decisions. The agenda is investor-first - structured around the questions that capital allocators, developers and operators are genuinely trying to answer. On-stage 1:1 interviews with senior industry leaders. Investor roundtables on underwriting and risk. A live Deal Room running throughout Day Two. Pre-scheduled 1:1 meetings throughout both days.</p>

                        <p>Programme details are in development. The full agenda will be published soon. Register your interest below to be notified.</p>

                        <p className="mt-sm"><Pop><Button inverse href={`/living/register-interest`} label={`Register Interest`}/></Pop></p>
                    </div>
                </section>
            </PageHero>


            {/* PROGRAMME */}
            <section className="block bg-primary">
                <div className="container center">
                    <p className="fs-2 fw-600">Schedule at a Glance</p>
                </div>
                <div className="container columns-1 gap-sm maxw-45">
                    
                    <Day title={`Monday, 22 February 2027`}>
                        <AgendaSessionLite beginsAt={'18:00'}>
                            <h5>Welcome Reception</h5>
                        </AgendaSessionLite>
                    </Day>
                    
                    <Day title={`Tuesday, 23 February 2027`}>
                        <AgendaSessionLite beginsAt={'9:00'} endsAt={'12:30'}>
                            <h5>Plenary Session</h5>
                        </AgendaSessionLite>
                        
                        <AgendaSessionLite beginsAt={'12:30'} endsAt={'13:30'}>
                            <h5>Lunch</h5>
                        </AgendaSessionLite>
                        
                        <AgendaSessionLite beginsAt={'13:30'} endsAt={'15:00'}>
                            <h5>Master Classes &amp; Group Discussions</h5>
                        </AgendaSessionLite>
                    </Day>

                    <Day title={`Wednesday, 24 February 2027`}>
                        <AgendaSessionLite beginsAt={'9:00'} endsAt={'11:00'}>
                            <h5>Plenary Session</h5>
                        </AgendaSessionLite>
                        
                        <AgendaSessionLite beginsAt={'11:00'} endsAt={'11:30'}>
                            <h5>Coffee Break</h5>
                        </AgendaSessionLite>
                        
                        <AgendaSessionLite beginsAt={'11:30'} endsAt={'13:00'}>
                            <h5>Master Classes &amp; Group Discussions</h5>
                        </AgendaSessionLite>
                    </Day>

                </div>

                <div className="container formatted center">
                    <p className="fs-4">Notify me when the programme is live</p>
                    <Pop inline><Button href={`/living/register-interest`} label={`Register Interest`}/></Pop>
                </div>
            </section>
            

            <Footer/>
            <LenisScroller />
        </>
    )
}
Page.theme = 'living'



const Day = ({ title, children }) => {
    return (
        <div
            className="bg-primary formatted"
            style={{
                backgroundColor: `var(--primary)`,
                padding: `var(--space-sm)`,
                borderRadius: `1rem`,
            }}
        >
            <h4 style={{ color: `white` }}>{title}</h4>
            <div
                style={{
                    display: `grid`,
                    gridTemplateColumns: `1fr`,
                    gap: `.5rem`,
                    color: `white`
                }}
            >
                {children}
            </div>
        </div>
    )
}

const Session = ({ children }) => {
    return (
        <Pop>
            <div
                className="bg-secondary"
                style={{
                    backgroundColor: `var(--burgundy)`,
                    padding: `var(--space-xs)`,
                    borderRadius: `.5rem`,
                    color: `white`
                }}
            >
                { children }
            </div>
        </Pop>
    )
}