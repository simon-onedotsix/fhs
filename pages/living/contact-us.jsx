import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import useCustomMediaQuery from '../../hooks/useCustomMediaQuery'

import Head from "next/head"



import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header-living'
import { FHS_LIVING as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/living/common/footer/footer'

import { Avatar } from '../../fuselage/components/avatar/avatar'




export default function Home () {

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



            
            <div className="block bg-secondary py-xs">
                <div className="container balance">
                    <p className="fs-2">Contact Us</p>
                    <p>For any general event or registration queries, you can email us at <a href="mailto:hello@thebench.com">hello@thebench.com</a>.  For specific queries, please contact the following members of our team for any assistance.</p>
                </div>

                <div className="container columns-2 gap-md formatted">
                    <div>
                        <p className="fw-600 c-accent">PARTNERSHIP ENQUIRIES</p>
                        <Avatar src={`https://cms.thebench.com/assets/img/avatars/matt-weihs_2026-05-17-075235_bmsy.png`} />
                        <p>
                            <strong>Matthew Weihs</strong><br />
                            Chief Development Officer<br />
                            E: <a href="mailto:matthew.weihs@thebench.com">matthew.weihs@thebench.com</a>
                        </p>
                    </div>

                    {/* <div>
                        <p className="fw-600 c-accent">OPERATIONAL ENQUIRIES</p>
                        <Avatar src={`https://cms.thebench.com/assets/img/avatars/tess-pearson.jpg`} />
                        <p>
                            <strong>Tess Pearson</strong><br />
                            Event Director<br />
                            E: <a href="mailto:tess.pearson@thebench.com">tess.pearson@thebench.com</a>
                        </p>
                    </div> */}

                    <div>
                        <p className="fw-600 c-accent">PROGRAMME ENQUIRIES</p>
                        <Avatar src={`https://cms.thebench.com/assets/img/avatars/tanja-millar.jpg`} />
                        <p>
                            <strong>Tanja Millner</strong><br />
                            Programme Director<br />
                            E: <a href="mailto:tanja.millner@thebench.com">tanja.millner@thebench.com</a>
                        </p>
                    </div>

                    <div>
                        <p className="fw-600 c-accent">INVESTOR RELATIONS ENQUIRIES</p>
                        <Avatar src={`https://cms.thebench.com/assets/img/avatars/Marina-Franolic.jpg`} />
                        <p>
                            <strong>Marina Franolic</strong><br />
                            Head of Investor Relations<br />
                            E: <a href="mailto:marina.franolic@thebench.com">marina.franolic@thebench.com</a>
                        </p>
                    </div>

                    <div>
                        <p className="fw-600 c-accent">MARKETING OR MEDIA ENQUIRIES</p>
                        <Avatar src={`https://cms.thebench.com/assets/img/avatars/ahmed.jpeg`} />
                        <p>
                            <strong>Muhammad Ahmed</strong> <br />
                            Head of Marketing<br />
                            M: +44 7554 548189<br />
                            E: <a href="mailto:muhammad.ahmed@thebench.com">muhammad.ahmed@thebench.com</a>
                        </p>
                    </div>
                </div>
            </div>



            <Footer />
            <LenisScroller />
        </>
    )
}
Home.theme = 'living'

