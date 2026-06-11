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



export default function Page () {

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
                <div className="container columns-1 gap-sm maxw-45">

                    <Day title={`Pre-conference day`}>
                        <p>The day is dedicated to pre-scheduled matched introductions - investor, developer and operator meetings curated by the FHS Living team based on investment criteria and development priorities submitted at registration. The day closes with the Opening Reception, welcoming all delegates to Paris.</p>
                    </Day>
                    
                    <Day title={`Day One`}>
                        <Session>
                            <h5>Opening plenary</h5>
                            <p>Alternative hospitality investment: a new investment class emerges</p>
                        </Session>
                        
                        <Session>
                            <h5>Focus on capital allocation</h5>
                            <p>Where capital is moving: living sectors as the next frontier</p>
                        </Session>
                        
                        <Session>
                            <h5>Investor roundtable</h5>
                            <p>Underwriting living assets: risk, returns and platform strategies</p>
                        </Session>
                        
                        <Session>
                            <h5>Europe meets the Middle East</h5>
                            <p>Bridging capital with opportunity across regions</p>
                        </Session>
                        
                        <Session>
                            <h5>Branded residences in focus</h5>
                            <p>Global demand, premium pricing and scalable growth</p>
                        </Session>
                        
                        <Session>
                            <h5>Student accommodation</h5>
                            <p>From niche to core: institutionalising a global asset class</p>
                        </Session>
                        
                        <Session>
                            <h5>Curated 1:1 meetings</h5>
                            <p>Pre-qualified, pre-matched introductions</p>
                        </Session>
                        
                        <Session>
                            <h5>Welcome reception and networking</h5>
                        </Session>
                    </Day>

                    <Day title={`Day Two`}>
                        <Session>
                            <h5>Market deep dive</h5>
                            <p>Senior living: Demographics driving long-term demand</p>
                        </Session>
                        
                        <Session>
                            <h5>Serviced living and hybrid models</h5>
                            <p>The convergence of hospitality and residential living</p>
                        </Session>
                        
                        <Session>
                            <h5>Mixed-use developments</h5>
                            <p>Hospitality as the anchor of integrated communities</p>
                        </Session>
                        
                        <Session>
                            <h5>Wellness</h5>
                            <p>The rise of health-driven living environments</p>
                        </Session>
                        
                        <Session>
                            <h5>Deal Room</h5>
                            <p>Live opportunities: connecting capital with projects</p>
                        </Session>
                        
                        <Session>
                            <h5>Roundtable discussions</h5>
                            <p>Structuring partnerships across living sectors</p>
                        </Session>
                        
                        <Session>
                            <h5>Final curated 1:1 meetings</h5>
                            <p>Deal flow sessions and final investor introductions</p>
                        </Session>
                        
                        <Session>
                            <h5>Closing plenary</h5>
                            <p>Where capital deploys next</p>
                        </Session>
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