import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import useCustomMediaQuery from '../../hooks/useCustomMediaQuery'
import { Pop, Fade } from "../../fuselage/animation/animation"

import _, { curry } from 'lodash'

import Head from "next/head"
import Link from "next/link"


import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header-living'
import { FHS_LIVING as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/living/common/footer/footer'

import { PageHero } from "../../ui/modules/page-hero"
import { Button, ButtonGrid } from "../../ui/buttons/button"
import { VideoTestimonialCard } from "../sa/video-testimonials"
import { Avatar } from '../../fuselage/components/avatar/avatar'


import { partners } from "../../data/partners"


export default function Page ({ videoTestimonials }) {

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
                        <p className="fs-1 fw-400 lh-1 maxw-50">Partners and Supporters</p>
                    </div>

                    <div className="container formatted center">
                        <p className="fs-6 maxw-55 balance">Our partners help shape the conversation and connect the market - supporting an environment designed for meaningful introductions and high, quality deal flow.</p>            
                    </div>

                    <p className="mt-sm"><Pop inline><Button inverse href={`/living/register-interest`} label={`Download Brochure`}/></Pop></p>
                </section>
            </PageHero>



            <section className="block bg-primary">
                <div className="container center">
                    <p className="fs-4 fw-600 c-magenta">FHS Living 2027 partners to be announced soon</p>
                </div>

                <div className="container center logoGrid">

                    <div className={`mb-md`}>
                        <p className="fs-5 fw-500 pb-xs">Headline Partner</p>
                        <div className="logoGrid">
                            <LogoBox
                                size={250}
                                logoUrl={`/assets/img/living/partners/logos/maslows.png`}
                            />
                        </div>
                    </div>

                    <div className={`mb-md`}>
                        <p className="fs-5 fw-500 pb-xs">Supporters</p>
                        <div className="logoGrid">
                            <LogoBox
                                size={250}
                                logoUrl={`/assets/img/living/partners/logos/ISHC-Logo-Black-03.png`}
                            />
                        </div>
                    </div>
                    
                    <div className={`mb-md`}>
                        <p className="fs-5 fw-500 pb-xs">Media Partners</p>
                        <div className="logoGrid">
                            <LogoBox
                                size={250}
                                logoUrl={`/assets/img/living/partners/logos/ULN-round.png`}
                            />
                        </div>
                    </div>
                    
                </div>

                <div className="container">
                    <p className="fs-2 fw-500 caps center">What partnership delivers</p>
                </div>
                
                <div className="container columns-4 gap-md balance">

                    <article className="formatted">
                        <Pop>
                            <img src="/assets/img/living/partners/partners-01.jpg" width="100%" alt="" style={{ borderRadius: `1rem`, marginBottom: 20 }}/>
                        </Pop>
                        <h4 className="c-magenta lh-2">A curated room of capital allocators</h4>
                        <p>FHS Living partners are introduced to a room of pre-qualified capital allocators - LPs, sovereign wealth funds, family offices and pension funds actively deploying into European living assets.</p>
                    </article>

                    <article className="formatted">
                        <Pop>
                            <img src="/assets/img/living/partners/partners-02.jpg" width="100%" alt="" style={{ borderRadius: `1rem`, marginBottom: 20 }}/>
                        </Pop>
                        <h4 className="c-magenta lh-2">Pre-scheduled 1:1 investor meetings</h4>
                        <p>Partners receive curated, pre-scheduled introductions with investors matched to their specific criteria - arranged by the FHS Living investor relations team in advance of the event.</p>
                    </article>

                    <article className="formatted">
                        <Pop>
                            <img src="/assets/img/living/partners/partners-03.jpg" width="100%" alt="" style={{ borderRadius: `1rem`, marginBottom: 20 }}/>
                        </Pop>
                        <h4 className="c-magenta lh-2">Thought leadership and programme presence</h4>
                        <p>FHS Living is built around investor-first content and curated conversations. Partners could receive speaker positions, Advisory Board seats, project announcement opportunities and sustained marketing presence throughout the campaign leading to Paris (depending on the package).</p>
                    </article>

                    <article className="formatted">
                        <Pop>
                            <img src="/assets/img/living/partners/partners-04.jpg" width="100%" alt="" style={{ borderRadius: `1rem`, marginBottom: 20 }}/>
                        </Pop>
                        <h4 className="c-magenta lh-2">Exhibition and showcase presence</h4>
                        <p>Partners have a dedicated physical presence on the exhibition floor. Your stand is your base of operations for two days: a space to host conversations, display projects, and engage the delegate community as it moves through the event. (depending on the package).</p>
                    </article>

                </div>
            </section>



            <section className="block bg-secondary">
                <div className="container">
                    <p className="fs-2 fw-500 caps center"> Hear Directly From FHS Partners</p>
                </div>
                <div className="container columns-3 gap-md">
                    { videoTestimonials.map( (entry, index) => <Pop key={index}><VideoTestimonialCard entry={entry} /></Pop> ) }
                </div>
            </section>



            <section className="block bg-white">
                <div className="container">
                    <p className="fs-2 fw-500 caps center c-primary">PARTNERS - 2026 FHS EVENTS</p>
                </div>

                <div className="container" style={{ display: `flex`, flexWrap: `wrap`, gap: `4rem`, justifyContent: `center`}}>
                    {
                        partners.length &&
                        _.orderBy(_.uniqBy(partners, 'name'), 'name').map(partner => (
                            <div
                                key={partner.id}
                                style={{
                                    position: `relative`,
                                    width: 150,
                                    aspectRatio: 19 / 9,
                                    display: `flex`,
                                    justifyContent: `center`,
                                    alignItems: `center`,
                                }}
                            >
                                <Pop><img src={partner.logoUrl} alt="" style={{ objectFit: `contain`, width: `100%`, height: `100%`}} /></Pop>
                            </div>
                        ))
                    }
                </div>
            </section>



            <section className="block bg-secondary">
                <div className="container">
                    <p className="fs-2 fw-500 caps center">Let&apos;s build your partnership together</p>
                </div>

                <div className="container center">
                    <Avatar src={`https://cms.thebench.com/assets/img/avatars/matt-weihs_2026-05-17-075235_bmsy.png`} />

                    <p className="fs-6 mt-xxs">
                        <strong>Matthew Weihs</strong><br />Chief Development Officer, The Bench <br />
                        <a href="mailto:matthew.weihs@thebench.com">matthew.weihs@thebench.com</a>
                    </p>
                </div>

                <div className="container center">
                    <p className="mt-sm"><Pop inline><Button href={`/living/register-interest`} label={`Download Brochure`}/></Pop></p>
                </div>
            </section>
            



            <Footer/>
            <LenisScroller />
        </>
    )
}
Page.theme = 'living'



const LogoBox = ({ logoUrl, size = 150, href }) => {
    return (
        <Pop inline>
            {
                href
                    ? (
                        <Link href={href}>
                            <a>
                                <div style={{...logoBoxStyle, width: size}} >
                                    <img src={logoUrl} alt="" style={{ objectFit: `contain`, width: `100%`, height: `100%`}} />
                                </div>
                            </a>
                        </Link>
                    ) : (
                        <div style={{...logoBoxStyle, width: size}} >
                            <img src={logoUrl} alt="" style={{ objectFit: `contain`, width: `100%`, height: `100%`}} />
                        </div>
                    )
            }
            
        </Pop>
    )
}

const logoBoxStyle = {
    position: `relative`,
    aspectRatio: 19 / 9,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,

    backgroundColor: `white`,
    padding: 20,
    borderRadius: 10
}





export async function getStaticProps() {

    const cmsData = await craftApolloClient().query({
        query: gql`
            query Page {
                entries(site: "${process.env.SITE_HANDLE_SA}", section: "videoTestimonials", limit: 3) {
                    ... on videoTestimonials_videoTestimonial_Entry {
                        id
                        slug
                        title
                        videoShareUrl
                        fullName
                        jobTitle
                        organisation
                        testimonial
                    }
                }
            }
        `
    })


    return {
        props: { 
            videoTestimonials: cmsData.data.entries
        }
    }
}