import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import Ticker from 'framer-motion-ticker'

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"

import { Header } from '../../fuselage/theme/egypt/common/header/header'
import { Footer } from '../../fuselage/theme/egypt/common/footer/footer'

import { ButtonKeyline } from "../../fuselage/theme/2024/world/components/button-keyline/button-keyline"
import { Button } from "../../fuselage/theme/2024/world/components/button/button"
import { ArrowButton } from "../../fuselage/components/arrow-button/arrow-button"

import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'
import { ThemeBillboard } from "../../fuselage/theme/2025/world/pages/home/theme-billboard"
import { SpeakerCard } from "../../fuselage/components/speaker-card/speaker-card"
import { PopupOverlay } from "../../fuselage/components/popup-overlay/popup-overlay"
import { BillboardSlider } from '../../fuselage/blocks/billboard-slider/billboard-slider'
import { Billboard } from '../../fuselage/blocks/billboard/billboard'
import { UpcomingEvents, EventGroupCard, EventCard, EventCardLite } from '../../fuselage/theme/2024/world/blocks/upcoming-events/upcoming-events'
import { ContentCard } from "../../fuselage/theme/2024/world/components/content-card/content-card"

import { Carousel } from "../../fuselage/blocks/carousel/carousel"

import { HeroUnitVideo } from "../../fuselage/theme/2025/world/pages/home/hero-unit-video"

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

    console.log(content)


    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>
        
            <Header overlaid inverse />

            
            {/* SECTION 1 */}

            <PageHeroImage hero={{ url: '/assets/img/egypt/homepage/fhs-egypt-hero.jpg', width: 1200, height: 630 }} >
                
                <section className="block">
                    <div className="container center">
                        <h1 className="fs-0 caps">Where Legacy <br />Inspires Investment</h1>
                        <h4 className="fs-4">10/11 November 2026, Cairo</h4>

                        <p className="mt-md"><ButtonKeyline href={`/egypt/forms/download-prospectus`}>Download Prospectus</ButtonKeyline></p>
                    </div>
                </section>

            </PageHeroImage>




            {/* TICKER */}
            <div className="bg-primary py-xs">
                <Ticker>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong className="fw-600">$3 billion</strong>  in business opportunities and deal volume gained in 2025 conferences</p>
                    <p className="fs-4">&ensp;&bull;&ensp;<strong className="fw-600">$3 billion</strong>  in business opportunities and deal volume gained in 2025 conferences</p>
                </Ticker>
            </div>
            


            {/* SECTION 2 */}

            <LayerSection
                layers={[
                    {
                        zIndex: 2,
                        content:
                            <div style={{ padding: `var(--space-lg)`, pointerEvents: `none`}}>
                                <SplitSection>
                                    <div className="container maxw-50 center">
                                    <p className="fs-1 fw-500 lh-1">EGYPT IS ENTERING A NEW GROWTH CYCLE</p>
                                    <p className="fs-5 mt-sm">A rare combination of scale, connectivity and reform is accelerating hospitality investment across cultural, coastal and urban destinations</p>
                                </div>
                                </SplitSection>
                            </div>
                    },
                    {
                        zIndex: 1,
                        content:
                            <Carousel>
                                <Billboard hero={{ url: `/assets/img/egypt/homepage/egypt-01.jpg` }} tint={30}>
                                    <SplitSection bottom>
                                        <div className="container center">
                                            <p className="fs-3 fw-600 lh-2 balance">Record-Breaking Tourism Demand</p>
                                            <p className="fs-5 balance">Egypt welcomed <strong>19 million tourists</strong> in 2025, marking a record year for inbound travel and highlighting sustained demand across leisure, cultural, and urban hospitality destinations.</p>
                                        </div>
                                    </SplitSection>
                                </Billboard>

                                <Billboard hero={{ url: `/assets/img/egypt/homepage/egypt-02.jpg` }} tint={30}>
                                    <SplitSection bottom>
                                        <div className="container center">
                                            <p className="fs-3 fw-600 lh-2 balance">Growing Hospitality Investment Market</p>
                                            <p className="fs-5 balance">Egypt&apos;s hospitality sector is projected to reach a market value of <strong>USD 8.8 billion by 2033</strong>, with hotel revenues expected to grow from <strong>USD 2.85 billion to USD 3.60 billion</strong> between <strong>2025 and 2029</strong>, underpinned by new developments and expanding tourism flows.</p>
                                            <small>Source: IMARC Group 2025</small>
                                        </div>
                                    </SplitSection>
                                </Billboard>

                                <Billboard hero={{ url: `/assets/img/egypt/homepage/africa-map.jpg` }} tint={30}>
                                    <SplitSection bottom>
                                        <div className="container center">
                                            <p className="fs-3 fw-600 lh-2 balance">Strategic Gateway for Global Capital</p>
                                            <p className="fs-5 balance">Located at the crossroads of Africa, the Middle East, and Europe, Egypt&apos;s hospitality growth is supported by <strong>Egypt Vision 2030</strong>, driving investment in infrastructure, tourism incentives, and policy reform to create a compelling environment for long-term, scalable hospitality development.</p>
                                        </div>
                                    </SplitSection>
                                </Billboard>
                            </Carousel>
                    },
                    

                ]}
            />


            {/* SECTION 3 */}

            <section className="block">
                <div className="container center">
                    <p className="fs-1 fw-500">WHO YOU WILL MEET</p>
                    <p className="fs-5 mt-xs">300+ C-Level hospitality investment decision-makers</p>
                </div>

                <div className="container columns-5 gap-sm center formatted">
                    <Card><h5>Owners, developers and master planners</h5></Card>
                    <Card><h5>Hotel and resort operators</h5></Card>
                    <Card><h5>Investors, banks and capital partners</h5></Card>
                    <Card><h5>Government and tourism leadership</h5></Card>
                    <Card><h5>Architects, designers, advisors and ecosystem partners</h5></Card>
                </div>

                <div className="container center">
                    <p><ButtonKeyline href={`/egypt/forms/register-interest`}>Register Interest</ButtonKeyline></p>
                </div>
            </section>


            
            {/* SECTION 4 */}

            <section className="block bg-dark">
                <div className="container center">
                    <p className="fs-1 fw-500">THESE HAVE SPOKEN AT OUR CONFERENCES</p>
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
                    <p><ButtonKeyline href={`/egypt/speakers`}>View Past Speakers</ButtonKeyline></p>
                </div>
            </section>
            


            {/* SECTION 5 */}

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
                    <p><ButtonKeyline href={`/egypt/agenda`}>View Agenda-at-glance</ButtonKeyline></p>
                </div>
            </section>



            {/* SECTION 6 */}

            <section className="block">
                <div className="container center">
                    <p className="fs-1 fw-500 caps">FHS Around the World</p>
                </div>

                <div className="container columns-5 gap-xs">
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


                                

            {/* SECTION 7 */}

            <section className="block">
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