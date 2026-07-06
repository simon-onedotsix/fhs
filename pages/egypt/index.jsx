import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import useCustomMediaQuery from '../../hooks/useCustomMediaQuery'

import Head from "next/head"

import Ticker from 'framer-motion-ticker'

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"
import { Reveal } from "../../fuselage/animation/reveal"

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_EGYPT as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/egypt/common/footer/footer'

import { PageHeroVideo } from "../../ui/modules/page-hero-video"
import { Dunes } from "../../fuselage/theme/egypt/page-hero-themed/page-hero-themed"
import { Countdown } from "../../fuselage/theme/egypt/components/countdown/countdown"
import { Button, ButtonGrid } from "../../ui/buttons/button"
import { ButtonKeyline } from "../../fuselage/theme/egypt/components/button-keyline/button-keyline"
import { PageHeroThemed } from "../../fuselage/theme/egypt/page-hero-themed/page-hero-themed"
import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'
import { ThemeBillboard } from "../../fuselage/theme/2025/world/pages/home/theme-billboard"
import { SpeakerCard } from "../../fuselage/components/speaker-card/speaker-card"
import { PopupOverlay } from "../../fuselage/components/popup-overlay/popup-overlay"
import { Billboard } from '../../fuselage/blocks/billboard/billboard'
import { EventCardLite } from '../../fuselage/theme/2024/world/blocks/upcoming-events/upcoming-events'
import { ContentCard } from "../../fuselage/theme/2024/world/components/content-card/content-card"
import { Carousel } from "../../fuselage/blocks/carousel/carousel"



import CSS from '../../fuselage/theme/egypt/css/homepage.module.css'



const SPEAKER_DATA = [
    {
        url: `/world/speakers/profile/h-e-mohamed-ali-rashed-alabbar`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Alabbar_Mohamed_sq.jpg',
        fullName: 'H.E. Mohamed Ali Rashed Alabbar',
         jobTitle: 'Founder & Managing Director of Emaar Properties; Founder & Director of Noon.com; Chairman of Eagle Hills; Chairman of Americana Group',
        company: '',
    },
    {
        url: null,
        photoUrl: 'https://static.swapcard.com/public/images/f8635bf938934af3af21186cca1768de.jpeg',
        fullName: 'HE Shaikha Nasser Al Nowais',
         jobTitle: 'Chairman of the Board of Directors',
        company: 'Rotana Hotel Management Corporation P.J.S.C',
    },
    {
        url: '/egypt/speakers/RXZlbnRQZW9wbGVfNDcyMTAzOTM=',
        photoUrl: 'https://static.swapcard.com/public/images/651d88045d184b34a984f5007f20415a.jpeg',
        fullName: 'Elie Milky',
         jobTitle: 'Chief Development Officer for the Middle East, Northeast Africa, Greece, and Cyprus',
        company: 'Radisson Hotel Group',
    },
    {
        url: '/egypt/speakers/RXZlbnRQZW9wbGVfNDcyMTAyODI=',
        photoUrl: 'https://cdn-api.swapcard.com/public/images/aefdd15eccd248aca1586c93329716d8.jpeg',
        fullName: 'Dr. Ahmed Shalaby',
         jobTitle: 'Co-Founder, President & CEO',
        company: 'Tatweer Misr',
    },
    
]

import { WEBINAR_SPEAKER_DATA } from "./webinar"

export default function Home ({ data, content }) {

    const [ showModal, setShowModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState()

    // console.log(content)

    const isDesktop = useCustomMediaQuery('(min-width: 600px)');

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/egypt/favicon-16x16.png" sizes="16x16" />
            </Head>
        
            
            <EventsBar site={'/egypt'} />
            <Header
                site={`/egypt`}
                handle={`Egypt`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />


            <PageHeroVideo
                video={'https://cms.thebench.com/assets/video/fhs-egypt-2026-video-opt.mp4'}
                poster={'https://cms.thebench.com/assets/video/fhs-egypt-2026-video-opt-poster.jpg'}
            >
                
                <Dunes />

                <h1 className="fs-0 caps lh-0"><Reveal>Where Heritage <br />Inspires Investment</Reveal></h1>
                <h4 className="fs-4 pb-md">10-11 November 2026, Sofitel Downtown Cairo Nile</h4>

                <ButtonGrid>
                    <Pop inline>
                        <ButtonKeyline decal={`fs-5`} href={`/egypt/forms/download-prospectus`}>
                            Download Prospectus
                        </ButtonKeyline>
                    </Pop>
                    <Pop inline>
                        <ButtonKeyline decal={`fs-5`} href={`/egypt/forms/register-interest`} >
                            Register Interest
                        </ButtonKeyline>
                    </Pop>
                </ButtonGrid>
            </PageHeroVideo>


            

            {/* TICKER */}
            <div className="bg-accent py-xs">
                <Ticker duration={20}>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong className="fw-600">$3 billion</strong>  in business opportunities and deal volume gained in 2025 conferences</p>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong className="fw-600">95.8%</strong>  of FHS attendees achieved their networking goals last year</p>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong className="fw-600">91.5%</strong>  of FHS Attendees rated FHS speaker content as high value</p>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong className="fw-600">29 </strong>  landmark hotel signings announced on stage</p>
                </Ticker>
            </div>




            {/* BUILDING MOMENTUM */}
            <section className="block bg-primary">
                <div className="container center">
                    <p className="fs-1 fw-500 lh-1 caps balance">Building Momentum in Cairo</p>
                </div>

                <div className="container formatted center balance">
                    <p className="fs-6">Ahead of the main summit in November, FHS Egypt hosted a launch reception in Cairo with 70+ senior hospitality investors, developers and operators. The evening featured market insights from STR and a high-level panel on investing in Egypt, drawing some of the market&apos;s most active players.</p>
                    <p className="fs-6">The conversation has started, see you in November.</p>
                </div>

                <div className="container center">
                    <Pop><ButtonKeyline href={`/egypt/forms/register-interest`}>Register Interest</ButtonKeyline></Pop>
                </div>

                <div className="container pt-xs" style={isDesktop ? { display: `flex`, flexWrap: `wrap`, justifyContent: `center`, gap: `var(--space-sm)` } : { display: `grid`, gap: `var(--space-sm)` }}>
                    <div style={{width: isDesktop ? `30%` : `100%`}}>
                        <Pop><img src="/assets/img/egypt/homepage/FHS-2026-06-prelaunch-01.jpg" alt="" style={{ width: `100%`, borderRadius: `.5rem`}} /></Pop>
                    </div>
                    <div style={{width: isDesktop ? `30%` : `100%`}}>
                        <Pop><img src="/assets/img/egypt/homepage/FHS-2026-06-prelaunch-02.jpg" alt="" style={{ width: `100%`, borderRadius: `.5rem`}} /></Pop>
                    </div>
                    <div style={{width: isDesktop ? `30%` : `100%`}}>
                        <Pop><img src="/assets/img/egypt/homepage/FHS-2026-06-prelaunch-03.jpg" alt="" style={{ width: `100%`, borderRadius: `.5rem`}} /></Pop>
                    </div>
                    <div style={{width: isDesktop ? `30%` : `100%`}}>
                        <Pop><img src="/assets/img/egypt/homepage/FHS-2026-06-prelaunch-04.jpg" alt="" style={{ width: `100%`, borderRadius: `.5rem`}} /></Pop>
                    </div>
                    <div style={{width: isDesktop ? `30%` : `100%`}}>
                        <Pop><img src="/assets/img/egypt/homepage/FHS-2026-06-prelaunch-05.jpg" alt="" style={{ width: `100%`, borderRadius: `.5rem`}} /></Pop>
                    </div>

                </div>
            </section>

            


            {/* NEW GROWTH CYCLE */}
            <section className="block bg-secondary">
                <div className="container center">
                    <p className="fs-1 fw-500 lh-1 caps balance">Key Egypt Insights from the Hotel Chain Development Pipeline Report</p>
                </div>

                <div className="container columns-3 gap-md">
                    <div className="formatted">
                        <Pop><img src="/assets/img/egypt/homepage/egypt-03.jpg" alt="" width={`100%`} style={{ borderRadius: `1rem`, marginBottom: `1rem`}}/></Pop>
                        <h3 className="balance">Africa&apos;s #1 Hospitality Market</h3>
                        <p className="fs-6">Egypt leads the continent with <strong>185 hotels and 45,984 rooms in the pipeline</strong>, making it by far the largest hospitality development market in Africa.</p>
                    </div>
                    
                    <div className="formatted">
                        <Pop><img src="/assets/img/egypt/homepage/egypt-04.jpg" alt="" width={`100%`} style={{ borderRadius: `1rem`, marginBottom: `1rem`}}/></Pop>
                        <h3 className="balance">Over One-Third of Africa&apos;s Pipeline</h3>
                        <p className="fs-6">Egypt accounts for <strong>37.1%</strong> of all hotel pipeline rooms in Africa, underlining its central role in shaping the continent&apos;s tourism future.</p>
                    </div>

                    <div className="formatted">
                        <Pop><img src="/assets/img/egypt/homepage/egypt-05.jpg" alt="" width={`100%`} style={{ borderRadius: `1rem`, marginBottom: `1rem`}}/></Pop>
                        <h3 className="balance">Exceptional Growth Momentum</h3>
                        <p className="fs-6">The country&apos;s pipeline grew by <strong>35.5% year-on-year</strong>, with <strong>53 new deals signed in 2025</strong>, reflecting strong investor confidence and rapid expansion.</p>
                    </div>
                </div>

                <div className="container center">
                    <Pop><ButtonKeyline href={`https://share.hsforms.com/12LxArJVDTpurv9TCoLcoig8nd8z`} target={`_blank`} rel={`noreferrer`}>Download Hotel Chain Development Report</ButtonKeyline></Pop>
                </div>
            </section>

            

            
            {/* SPEAKERS */}
            <section className="block bg-dark">
                <div className="container center">
                    <p className="fs-1 fw-500 caps">Envisioned Speakers</p>
                </div>

                <div className="container columns-4 gap-sm maxw-60 center">
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
                    <p><Pop><ButtonKeyline href={`/egypt/speakers`}>View Confirmed Speakers</ButtonKeyline></Pop></p>
                </div>
            </section>




            {/* WHO YOU WILL MEET */}
            <section className="block bg-accent">
                <div className="container center">
                    <p className="fs-1 fw-500">WHO YOU WILL MEET</p>
                </div>

                <div className="container columns-5 gap-sm center formatted">
                    <Card><h5>Owners, developers and master planners</h5></Card>
                    <Card><h5>Hotel and resort operators</h5></Card>
                    <Card><h5>Investors, banks and capital partners</h5></Card>
                    <Card><h5>Government and tourism leadership</h5></Card>
                    <Card><h5>Architects, designers, advisors and ecosystem partners</h5></Card>
                </div>

                <div className="container center">
                    <p><Pop><ButtonKeyline inverse color={`var(--primary)`} href={`/egypt/forms/register-interest`}>Register Interest</ButtonKeyline></Pop></p>
                </div>
            </section>


            
            {/* BRF */}
            <section className="block bg-white">
                <div className="container center">
                    <p className="fs-1 fw-500">Branded Residences at FHS Egypt</p>
                </div>

                <div className="container columns-2 gap-md ai-center">
                    <Pop><img src="/assets/img/egypt/homepage/brf-egypt.jpg" alt="" width={`100%`} style={{ borderRadius: `1rem`, marginBottom: `1rem`}} /></Pop>
                    
                    <section className="formatted">
                        <p>Egypt is rapidly emerging as a leading branded residences market, with <strong>45% of high-net-worth investors</strong> identifying the segment as a key asset class, delivering <strong>8–12% yields vs. 5–7% for traditional hotels</strong>.</p>
                        <p>Backed by <strong>Egypt Vision 2030</strong> and expanding partnerships between leading local developers and global brands, branded residences are reshaping mixed-use and resort development across the country.</p>
                        <br />
                        <p><Pop inline><ButtonKeyline href={`/egypt/brf`}>Learn More</ButtonKeyline></Pop></p>
                    </section>
                </div>
            </section>
            


            {/* THEMES */}
            <section className="block">
                <div className="container center">
                    <p className="fs-1 fw-500">THEMES YOU WILL EXPLORE</p>
                </div>

                <div className="container columns-3 gap-sm formatted center balance">
                    <Card><h5>Investment, Financing &amp; Capital Flows</h5></Card>
                    <Card><h5>Destinations &amp; Masterplanning</h5></Card>
                    <Card><h5>Branded Residences &amp; Mixed-Use Development</h5></Card>
                    <Card><h5>Operational Excellence &amp; Asset Performance</h5></Card>
                    <Card><h5>Luxury, Lifestyle &amp; Experience-Led Hospitality</h5></Card>
                    <Card><h5>Technology, AI &amp; Digital Transformation</h5></Card>
                </div>

                <div className="container center">
                    <p><Pop><ButtonKeyline href={`/egypt/agenda`}>View Agenda-at-glance</ButtonKeyline></Pop></p>
                </div>
            </section>



            {/* CONTENT-ARTICLES */}
            <section className="block bg-primary">
                <div className="container center">
                    <p className="fs-1 fw-500 caps">THOUGHT LEADERSHIP IN ACTION</p>
                </div>

                <div className="container columns-3 gap-sm">
      
                        {
                            content.map( (entry, index) => (
                                <ContentCard
                                    key={index}
                                    url={`/egypt/content-library/${entry.slug}`}
                                    heroUrl={entry.contentLibraryHero && entry.contentLibraryHero[0] ? entry.contentLibraryHero[0].url : null}
                                    heading={entry.title}
                                    excerpt={entry.excerpt}
                                    contentTypes={entry.contentTypes}
                                    postDate={entry.postDate}
                                    type={entry.contentTypes[0].slug}
                                />
                            ))
                        }
               
                </div>
            </section>



            {/* FHS EVENTS */}
            <section className="block">
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

            



            <Footer />
            <LenisScroller />


            <PopupOverlay onClose={() => setShowModal(false)} show={showModal}>
                { modalContent } 
            </PopupOverlay>

        </>
    )
}
Home.theme = 'egypt'


const Card = ({ children }) => {
    return (
        <Pop>
            <div className="bg-primary p-sm" style={{ borderRadius: `1rem`, height: `100%`, display: `flex`, alignItems: `center`, justifyContent: `center` }}>
                { children }
            </div>
        </Pop>
    )
}

const LayerSection = ({ layers = [] }) => {
    return (
        <section
            style={{
                width: `100%`,
                // overflow: `hidden`,
                position: `relative`,
                display: `grid`,
                gridTemplateRows: 1
            }}
        >
            {
                layers.map((layer, index) => (
                    <div
                        key={index}
                        style={{
                            width: `100vw`,
                            gridArea: `1 1 2 2`,
                            zIndex: layer.zIndex,
                        }}
                    >
                        {layer.content}
                    </div>
                ))
            }
        </section>
    )
}

const SplitSection = ({ children, bottom }) => {
    return (
        <div
            className={CSS.splitSection}
            style={{
                display: `grid`,
                gridTemplateRows: `1fr 1fr`,
                gap: `var(--space-lg)`,
            }}
        >
            <div
                style={{
                    gridArea: bottom ? `2/1 / 3/2` : `1/1 / 2/2`,
                    alignSelf: bottom ? `center` : ``,
                }}
            >
                { children }
            </div>
        </div>
    )
}






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
                podcasts: entries(
                    section: "contentLibrary"
                    site: ["${process.env.SITE_HANDLE}", "${process.env.SITE_HANDLE_AE}", "${process.env.SITE_HANDLE_SA}"]
                    id: [ 293054, 266706, 274754 ]
                ){
                    ... on contentLibrary_article_Entry {
                        id
                        slug
                        title
                        postDate
                        excerpt
                        contentLibraryHero {
                            id
                            url
                            width
                            height
                        }
                        contentTypes {
                            ... on contentLibrary_Category {
                                id
                                title
                                slug
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
            content: data.podcasts,
        },
    }
}