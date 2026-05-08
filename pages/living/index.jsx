import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import useCustomMediaQuery from '../../hooks/useCustomMediaQuery'
import { Pop, Fade } from "../../fuselage/animation/animation"

import Head from "next/head"



import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_LIVING as header } from '../../fixtures/nav'
import { Footer } from "../../ui/site/footer"

import { Button, ButtonGrid } from "../../ui/buttons/button"
import { ButtonKeyline } from "../../fuselage/theme/egypt/components/button-keyline/button-keyline"
import { SpeakerCard } from "../../fuselage/components/speaker-card/speaker-card"
import { FhsIconKeyline } from "../../fuselage/theme/2024/global/components/logos/fhs-brand"
import HubspotForm from "../../fuselage/components/hubspot-form/hubspot-form"





const SPEAKER_DATA = [
    {
        url: ``,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Alabbar_Mohamed_sq.jpg',
        fullName: 'H.E. Mohamed Ali Rashed Alabbar',
         jobTitle: 'Founder & Managing Director of Emaar Properties; Founder & Director of Noon.com; Chairman of Eagle Hills; Chairman of Americana Group',
        company: '',
    },
    {
        url: ``,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Dirk-Bakker.jpg',
        fullName: 'Dirk Bakker',
        jobTitle: 'CEO',
        company: 'Necron Hospitality',
    },
    {
        url: ``,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Jeff-Tisdall.jpeg',
        fullName: 'JEFF TISDALL',
        jobTitle: 'Chief Business Officer',
        company: 'Accor One Living',
    },
    {
        url: ``,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/robert-dobrzycki.webp',
        fullName: 'ROBERT DOBRZYCKI',
        jobTitle: 'CEO and Co-Owner',
        company: 'Panattoni Europe',
    },
    {
        url: ``,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/lolita-prysiazhniuk.jpeg',
        fullName: 'LOLITA PRYSIAZHNIUK',
        jobTitle: 'VP Hotel Development & Transactions',
        company: 'Aroundtown SA',
    },
]


export default function Home () {

    // console.log(content)

    const isDesktop = useCustomMediaQuery('(min-width: 600px)');

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/egypt/favicon-16x16.png" sizes="16x16" />
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
            <section className="block bg-secondary py-xs" style={{ position: `relative`, overflow: `hidden` }}>
                <div className="container" style={{ position: `relative`, zIndex: 2 }}>
                    <p className="fs-1 fw-600 caps lh-1 maxw-45">Connecting Global Capital with Living, Lifestyle &amp; Hospitality</p>
                    <p className="fs-5 fw-500 caps mt-sm mb-sm">February 2027 | <span className="c-accent">Paris</span>, France</p>
                    <ButtonGrid>
                        <Button href={`/download-brochure`} label={`Download Brochure`} />
                        <Button href={`/register-interest`} label={`Register Interest`} />
                    </ButtonGrid>
                </div>

                <div style={{ position: `absolute`, top: `-10vw`, right: `-15vw`, width: `55vw`, aspectRatio: 1 }}>
                    <FhsIconKeyline topColor={`var(--primary)`} sectorColor={`var(--primary)`} />
                </div>
            </section>


            {/* CHAIRMAN LETTER */}
            <section className="block bg-white">
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


            {/* SPEAKERS */}
            <section className="block bg-primary">
                <div className="container center">
                    <p className="fs-2 fw-500 caps">Envisioned Speakers</p>
                </div>

                <div className="container columns-5 gap-sm center">
                    {
                        SPEAKER_DATA.map( (profile, index) => (
                            <Pop key={index}>
                                <SpeakerCard
                                    url={profile.url}
                                    photoUrl={profile.photoUrl}
                                    fullName={profile.fullName}
                                    jobTitle={profile.jobTitle}
                                    company={profile.company}
                                    color={'white'}
                                />
                            </Pop>
                        ))
                    }
                </div>

                <div className="container center">
                    <div className="button-grid">
                        <p><Pop><Button href={`/living/speakers`} label={`View All Speakers`}/></Pop></p>
                        <p><Pop><Button href={`/living/agenda`} label={`Full Agenda`}/></Pop></p>
                    </div>
                </div>
            </section>


            {/* WHY EUROPE? */}
            <section className="block bg-white">
                <div className="container">
                    <p className="fs-2 fw-600 c-primary caps center">Why <span className="c-accent">FHS Living</span> in Europe</p>
                </div>

                <div className="container columns-2 gap-sm">
                    <Card>
                        <div className="formatted" style={{ alignSelf: `flex-start`}}>
                            <p className="fs-3 fw-600 caps lh-2 balance">The <span className="c-accent">Alternative</span> Hospitality Demand</p>
                            <ul>
                                <li>Europe faces a 9.6 million home shortfall (CBRE)</li>
                                <li>PBSA investment has grown at 11% annually (JLL)</li>
                                <li>Occupancy in student housing averages 97% (BONARD)</li>
                                <li>Care homes were the fastest-growing living investment sector in EMEA in 2025, with investment soaring 165% year- on-year to approximately €14.4 Billion (JLL)</li>
                                <li>Number branded residences schemes in Europe is expected to more than double, rising from 141 at the end of 2025 to over 300 schemes by 2032 (Savills)</li>
                            </ul>
                        </div>
                    </Card>

                    <Card>
                        <div className="formatted" style={{ alignSelf: `flex-start`}}>
                            <p className="fs-3 fw-600 caps lh-2 balance">A <span className="c-accent">Fragmented</span> Market</p>
                            <p>There is no Europe region focused conference today that aggregates:</p>
                            <ul>
                                <li>Living asset classes: Branded Residences, Student Accommodation, Senior Living, Serviced Living</li>
                                <li>Prioritises investors and developers</li>
                                <li>Operates as a curated investment marketplace</li>
                            </ul>
                            <p>FHS Living addresses this gap, envisioned to deliver a 2-Day agenda packed with meaningful investment insights and networking across key living asset categories.</p>
                        </div>
                    </Card>
                </div>
            </section>
 

            {/* WHO ATTENDS */}
            <section className="block bg-secondary">
                <div className="container">
                    <p className="fs-2 fw-600 caps center">Who Attends <span className="c-accent">FHS Living</span></p>
                </div>

                <div className="container">
                    <ImpactWrapper>
                        <div className="bg-primary columns-4 gap-sm">
                            <Impact title={`Capital`} percent={25}>
                                <p>Sovereign wealth funds</p>
                                <p>Private equity</p>
                                <p>Family offices</p>
                                <p>Asset managers</p>
                                <p>Middle eastern investors</p>
                            </Impact>

                            <Impact title={`Developers`} percent={35}>
                                <p>European developers</p>
                                <p>Mixed-use and residential developers</p>
                                <p>Asset Owners</p>
                            </Impact>

                            <Impact title={`Operators`} percent={20}>
                                <p>Student houseing</p>
                                <p>Branded residences</p>
                                <p>Senior living</p>
                                <p>Hospitality groups</p>
                            </Impact>

                            <Impact title={`Enablers`} percent={20}>
                                <p>Advisors</p>
                                <p>Brokers</p>
                                <p>Selected enablers</p>
                            </Impact>
                        </div>
                    </ImpactWrapper>
                </div>
            </section>

            
            {/* TESTIMONIALS */}
            <section className="block bg-white">
                <div className="container center">
                    <p className="fs-2 fw-600 c-primary caps center">Words From Our Partners</p>
                </div>

                <div className="container columns-2 gap-sm">
                    <PartnerCard photoUrl={`https://cms.thebench.com/assets/img/avatars/Jeff-Tisdall.jpeg`}>
                        <p>“The market is still fragmented. Large events are too broad, and niche ones don&apos;t have the right scale.”</p>
                        <p className="fw-600 mt-xxs">Jeff Tisdall</p>
                        <p>Chief Business Officer, Accor One Living</p>
                    </PartnerCard>
                    
                    <PartnerCard photoUrl={`https://cms.thebench.com/assets/img/avatars/Dirk-Bakker.jpg`}>
                        <p>“A conference that brings all of this together would be a huge success.”</p>
                        <p className="fw-600 mt-xxs">Dirk Bakker</p>
                        <p>Chief Executive Officer, Necron Hospitality</p>
                    </PartnerCard>
                    
                    <PartnerCard photoUrl={`https://cms.thebench.com/assets/img/avatars/kasper-ravn-wigen.webp`}>
                        <p>“I wish there was a business event that brings together key living categories across European real estate in a single place.”</p>
                        <p className="fw-600 mt-xxs">Kasper Ravn Wigen</p>
                        <p>Global Marketing Director, Yugo</p>
                    </PartnerCard>
                    
                    <PartnerCard photoUrl={`https://static.swapcard.com/public/images/17a8fd55607b40008b6b49ac4cde22e7.jpeg`}>
                        <p>“Luxury hospitality, branded residences and mixed-use projects continue to attract strong interest, with branded residences offering an efficient route to fund development through presales.” </p>
                        <p className="fw-600 mt-xxs">Larissa Esser</p>
                        <p>Colliers</p>
                    </PartnerCard>
                </div>
            </section>

            
            

            <Footer/>
            <LenisScroller />
        </>
    )
}
Home.theme = 'living'





const Card = ({ children }) => {
    return (
        <Pop>
            <div className="bg-primary p-sm c-white" style={{ borderRadius: `1rem`, height: `100%`, display: `flex`, alignItems: `center`, justifyContent: `center` }}>
                { children }
            </div>
        </Pop>
    )
}

const ImpactWrapper = ({ children }) => {

    const isDesktop = useCustomMediaQuery('(min-width: 600px)')

    return (
        <Fade>
            <div
                className="bg-primary c-white"
                style={{
                    borderRadius: `1rem`,
                    height: `100%`,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    padding: isDesktop ? `2rem` : `3rem`
                }}
            >
                { children }
            </div>
        </Fade>
    )
}

const Impact = ({ title, percent, children }) => {

    const isDesktop = useCustomMediaQuery('(min-width: 600px)')

    return (
        <Pop delay={.1}>
            <p className="fs-4 caps center mb-sm">{title}</p>
            <div
                style={{
                    position: `relative`,
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                    justifyContent: `center`,

                    aspectRatio: 1,
                    border: `1px solid var(--accent)`,
                    borderRadius: `50rem`,
                    padding: `2rem`,
                    
                    textAlign: `center`,
                }}
            >
                <p
                    className="fw-600"
                    style={{
                        position: `absolute`,
                        top: `-1.5rem`,
                        backgroundColor: `var(--primary)`,
                        fontSize: isDesktop ? `4vw` : `15vw`
                    }}
                >
                    {percent}%
                </p>

                {children}
            </div>
        </Pop>
    )
}

const PartnerCard = ({ photoUrl, children }) => {
    return (
        <Pop>
            <div className="bg-primary p-sm c-white" style={{ borderRadius: `1rem`, height: `100%`, display: `flex`, alignItems: `flex-start`, justifyContent: `center` }}>
                <div
                    style={{
                        display: `grid`,
                        gridTemplateColumns: `1fr 3fr`,
                        gap: `2rem`,
                        alignItems: `flex-start`
                    }}
                >
                    <Pop delay={.1}>
                        <img src={photoUrl} alt="" width={`100%`} style={{ borderRadius: 6 }} />
                    </Pop>
                    <div>
                        { children }
                    </div>
                </div>
            </div>
        </Pop>
    )
}