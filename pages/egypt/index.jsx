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

import { Countdown } from "../../fuselage/theme/egypt/components/countdown/countdown"


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
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDEwMzg5NzY=`,
        photoUrl: 'https://static.swapcard.com/public/images/42ee3cc4823e43319c9ff340311e8e79.jpeg',
        fullName: 'HE Abdulla bin Touq Al Marri',
        jobTitle: 'Minister of Economy and Tourism',
        company: 'United Arab Emirates',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDI3NzY2MzM=`,
        photoUrl: 'https://static.swapcard.com/public/images/a7e9bcb0c81141618078496f4fe860ec.jpeg',
        fullName: 'HE Patricia De Lille',
        jobTitle: 'Minister of Tourism',
        company: 'Republic of South Africa',
    },
    {
        url: `/world/speakers/profile/h-e-mohamed-ali-rashed-alabbar`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Alabbar_Mohamed_sq.jpg',
        fullName: 'H.E. Mohamed Ali Rashed Alabbar',
         jobTitle: 'Founder & Managing Director of Emaar Properties; Founder & Director of Noon.com; Chairman of Eagle Hills; Chairman of Americana Group',
        company: '',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDA2MDQ1NDk=`,
        photoUrl: 'https://static.swapcard.com/public/images/a8a3eed89c99418ea55cedd0edf6ea16.jpeg',
        fullName: 'HE Shaikha Nasser Al Nowais',
        jobTitle: 'Secretary-General Elect',
        company: 'UN Tourism',
    },
    {
        url: `/world/speakers/profile/sébastien-bazin`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Bazin_Sebastien_cropped.jpg',
        fullName: 'Sébastien Bazin',
        jobTitle: 'Group Chairman & CEO',
        company: 'Accor',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDAzNDU2NjM=`,
        photoUrl: 'https://static.swapcard.com/public/images/cd2f0cf8c3f8428e86d86e922f7b64fb.png',
        fullName: 'Nick Candy',
        jobTitle: 'Chief Executive Officer',
        company: 'Candy Capital',
    },
    {
        url: `/sa/2025/speakers`,
        photoUrl: 'https://static.swapcard.com/public/images/b946c29ec7c24b2091410172ac1ed515.jpeg',
        fullName: 'Jerry Inzerillo',
        jobTitle: 'Group CEO',
        company: 'Diriyah Company',
    },
    {
        url: `/sa/2025/speakers`,
        photoUrl: 'https://static.swapcard.com/public/images/edfc860d7115437ab95c00263a3833b7.jpeg',
        fullName: 'Maud Bailly',
        jobTitle: 'Chief Executive Officer',
        company: 'Sofitel Legend, Sofitel, MGallery & Emblems',
    },
]



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



            <PageHeroThemed>

                <section className="block">
                    <div className="container" style={{ paddingTop: isDesktop ? `4.5vh` : `10rem` }}>

                        <Countdown expiryDate={'05/01/2026'}/>
                        
                        <h1 className="fs-0 caps lh-0 c-secondary"><Reveal>Where Heritage <br />Inspires Investment</Reveal></h1>
                        <h4 className="fs-4 c-secondary">10-11 November 2026, Sofitel Downtown Cairo Nile</h4>

                        <p className="mt-md c-secondary button-grid">
                            <Pop inline><ButtonKeyline decal={`fs-5`} href={`/egypt/forms/download-prospectus`}>Download Prospectus</ButtonKeyline></Pop>
                            <Pop inline><ButtonKeyline decal={`fs-5`} href={`https://share.hsforms.com/12LxArJVDTpurv9TCoLcoig8nd8z`} target={`_blank`} rel={`noreferrer`}>Download Hotel Chain Development Report</ButtonKeyline></Pop>
                        </p>
                    </div>
                </section>

            </PageHeroThemed>

            
            
            {/* ATF */}

            {/* <PageHeroImage hero={{ url: '/assets/img/egypt/homepage/fhs-egypt-hero.jpg', width: 1200, height: 630 }} >
                
                <section className="block">
                    <div className="container center">
                        <h1 className="fs-0 caps">Where Heritage <br />Inspires Investment</h1>
                        <h4 className="fs-4">10-11 November 2026, Sofitel Downtown Cairo Nile</h4>

                        <p className="mt-md"><Pop><ButtonKeyline href={`/egypt/forms/download-prospectus`}>Download Prospectus</ButtonKeyline></Pop></p>
                    </div>
                </section>

            </PageHeroImage> */}




            {/* TICKER */}
            <div className="bg-primary py-xs">
                <Ticker duration={20}>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong className="fw-600">$3 billion</strong>  in business opportunities and deal volume gained in 2025 conferences</p>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong className="fw-600">95.8%</strong>  of FHS attendees achieved their networking goals last year</p>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong className="fw-600">91.5%</strong>  of FHS Attendees rated FHS speaker content as high value</p>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong className="fw-600">29 </strong>  landmark hotel signings announced on stage</p>
                </Ticker>
            </div>



            {/* NEW GROWTH CYCLE */}
            
            <section className="block bg-secondary">
                <div className="container center maxw-45">
                    <p className="fs-1 fw-500 lh-1">EGYPT IS ENTERING A NEW GROWTH CYCLE</p>
                </div>

                <div className="container columns-3 gap-md">
                    <div className="formatted">
                        <Pop><img src="/assets/img/egypt/homepage/egypt-01.jpg" alt="" width={`100%`} style={{ borderRadius: `1rem`, marginBottom: `1rem`}}/></Pop>
                        <h3 className="balance">Record-Breaking Tourism Demand</h3>
                        <p className="fs-6">Egypt welcomed 19 million tourists in 2025, setting a new inbound travel record and reinforcing strong demand across leisure and cultural destinations.</p>
                    </div>
                    
                    <div className="formatted">
                        <Pop><img src="/assets/img/egypt/homepage/egypt-02.jpg" alt="" width={`100%`} style={{ borderRadius: `1rem`, marginBottom: `1rem`}}/></Pop>
                        <h3 className="balance">Growing Hospitality Investment Market</h3>
                        <p className="fs-6">Egypt&apos;s hospitality market is projected to reach USD 8.8 billion by 2033, supported by rising hotel revenues and continued tourism growth.</p>
                        <small>Source: IMARC Group 2025</small>
                    </div>

                    <div className="formatted">
                        <Pop><img src="/assets/img/egypt/homepage/africa-map.jpg" alt="" width={`100%`} style={{ borderRadius: `1rem`, marginBottom: `1rem`}}/></Pop>
                        <h3 className="balance">Strategic Gateway for Global Capital</h3>
                        <p className="fs-6">Positioned between Africa, the Middle East, and Europe, Egypt&apos;s Vision 2030 is accelerating infrastructure and tourism investment to support long-term hospitality growth.</p>
                    </div>
                </div>
            </section>
            


            {/* WHO YOU WILL MEET */}

            <section className="block bg-secondary">
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
                    <p><Pop><ButtonKeyline href={`/egypt/forms/register-interest`}>Register Interest</ButtonKeyline></Pop></p>
                </div>
            </section>


            
            {/* BRF */}

            <section className="block bg-medium">
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


            
            {/* SPEAKERS */}

            <section className="block bg-dark">
                <div className="container center">
                    <p className="fs-1 fw-500 caps">Past FHS Speakers</p>
                    <p className="fs-5 mt-xs">Speaker line-up coming soon</p>
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
                    <p><Pop><ButtonKeyline href={`/egypt/speakers`}>View Past Speakers</ButtonKeyline></Pop></p>
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



            {/* FHS EVENTS */}

            <section className="block">
                <div className="container center">
                    <p className="fs-1 fw-500 caps">FHS Around the World</p>
                </div>

                <div className="container columns-3 maxw-55 gap-xs">
                    {
                        data.events.map( event => {
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
                                            />
                                        ))
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </section>


                                

            {/* CONTENT-ARTICLES */}

            <section className="block bg-dark">
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