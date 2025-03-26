import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"

import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'

import { FhsIcon, FhsIconKeyline } from "../../fuselage/theme/2024/world/components/logos/fhs-brand"
import { SpeakerCarousel } from "../../fuselage/theme/2024/world/blocks/speaker-carousel/speaker-carousel"
import { ImpactFigure } from "../../fuselage/theme/2024/world/components/impact-figure/impact-figure"
import { Button } from "../../fuselage/theme/2024/world/components/button/button"

import { SpeakerCard } from "../../fuselage/components/speaker-card/speaker-card"
import { VideoPlayer } from '../../fuselage/components/video-player/video-player'
import { ArrowButton } from "../../fuselage/components/arrow-button/arrow-button"
import { PopupOverlay } from "../../fuselage/components/popup-overlay/popup-overlay"

import HubspotForm from "../../fuselage/components/hubspot-form/hubspot-form"

import { 
    QueryText, 
    QueryFlipFlops, 
    QueryFloaters, 
    QueryBillboards, 
    QueryBillboardSliders, 
    QueryImpactFigures, 
    QueryVideos,
    QueryForm,
	QueryProfileCarousel,
    QuerySEO,
    QueryImages
} from "../../graphql/queries"

import handleSeomaticMeta from '../../lib/seomatic'

import { THEMES_DATA } from "./themes"
import { ThemesSlider } from "../../fuselage/theme/2024/world/components/themes-slider/themes-slider"
import { InvestorImpact } from "../../fuselage/components/impact-figure/impact-figure"
import { ButtonKeyline } from "../../fuselage/theme/2024/world/components/button-keyline/button-keyline"

import { HeroUnitVideo } from "../../fuselage/theme/2025/world/pages/home/hero-unit-video"
import { ThemeBillboard } from "../../fuselage/theme/2025/world/pages/home/theme-billboard"

import CSS from '../../fuselage/theme/2024/world/css/homepage.module.css'


const photos = [
    {
        "id": "13864",
        "hero": [
            {
                "id": "50183",
                "url": "/assets/img/world/pages/home/fhs-world-2024-05.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "13865",
        "hero": [
            {
                "id": "50184",
                "url": "/assets/img/world/pages/home/fhs-world-2024-03.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "13867",
        "hero": [
            {
                "id": "50186",
                "url": "/assets/img/world/pages/home/fhs-world-2024-02.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "13868",
        "hero": [
            {
                "id": "50187",
                "url": "/assets/img/world/pages/home/fhs-world-2024-04.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "50206",
        "hero": [
            {
                "id": "50189",
                "url": "/assets/img/world/pages/home/fhs-world-2024-01.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "50207",
        "hero": [
            {
                "id": "50193",
                "url": "/assets/img/world/pages/home/fhs-world-2024-06.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "13868",
        "hero": [
            {
                "id": "50187",
                "url": "/assets/img/world/pages/home/fhs-world-2024-07.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "50206",
        "hero": [
            {
                "id": "50189",
                "url": "/assets/img/world/pages/home/fhs-world-2024-08.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    },
    {
        "id": "50207",
        "hero": [
            {
                "id": "50193",
                "url": "/assets/img/world/pages/home/fhs-world-2024-09.jpg",
                "width": 1000,
                "height": 588
            }
        ]
    }
]



export default function Home ({ globals, entry, seomatic, speakerData, partnerData }) {

    const [ showModal, setShowModal ] = useState(false)
    const [ modalContent, setModalContent ] = useState()

    // console.log('entry:', entry)
	// console.log('SEO — title:', JSON.parse(entry.seomatic.metaTitleContainer))
    // console.log('SEO — tags:', JSON.parse(entry.seomatic.metaTagContainer))	
    // console.log('speakerData:', speakerData)

    let selectedCmsSpeakers = entry.fhisContentBlocks.find( obj => obj.__typename === 'fhisContentBlocks_profilesCarousel_BlockType')
    // console.log('selectedCmsSpeakers:', selectedCmsSpeakers)


    // scroll animation
    let introRef = useRef(null)
    let { scrollYProgress } = useScroll({ 
        target: introRef,
        offset: ["start 75%", "end 0%"]
    })

    let y = useTransform( scrollYProgress, [0, 1], ["-15%", "5%"])

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) }
			</Head>
        
            <Header overlaid inverse />

            <HeroUnitVideo video={'https://cms.thebench.com/assets/video/fhs-2024-world-opt.mp4'} poster={'/assets/video/fhs-2024-world-opt-poster.jpg'}>
                <ThemeBillboard />
            </HeroUnitVideo>

            {/* <HeroUnitVideo video={'https://cms.thebench.com/assets/video/fhs-2024-world-opt.mp4'} poster={'/assets/video/fhs-2024-world-opt-poster.jpg'}>

                    <div className={CSS.flashWrapper}>
                        <Pop>
                            <div className={CSS.flash}>
                                <p className={CSS.flashHeading}>See you <br/>in 2025!</p>
                                <p>27-29 October 2025</p>
                            </div>
                        </Pop>
                    </div>

                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    // viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25 }}

                    className={`fs-0 fw-700 c-white lh-1 center`} 
                >
                    Invest in Our Future
                </motion.p>

                <motion.p 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    // viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.25 }}

                    className={`fs-5 fw-500 c-white center mt-xs`} 
                >
                    27-29 October 2025, Madinat Jumeirah, Dubai
                </motion.p>

                <Fade>
                    <div className="mt-sm center">
                        <Pop inline>
                            <Button href={`/world/purchase-pass`} theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} decal={`fs-5 fw-600`}>Purchase Pass</Button>
                        </Pop>
                    </div>
                </Fade>
            </HeroUnitVideo> */}


            {/* HOST SPONSOR */}

            {/* <section className="block bg-default">
                <div className="container center">
                    <p className="fs-3 fw-600 c-secondary caps">Host Sponsor</p>
                    <div className={`${CSS.hostSponsorLogoWrapper} mt-sm mx-auto`}>
                        <Pop>
                            <Image src={`/assets/site/ae/jumeirah-2024.png`} layout={`responsive`} width={900} height={173} />
                        </Pop>
                    </div>
                </div>
            </section> */}


            {/* PATRONAGE */}
            <section className="block bg-primary">
                <div className="container center">
                    <p className="fs-3 fw-600 c-secondary caps pb-sm">Under the Patronage of</p>

                    <div className={CSS.patronBox}>

                        <div className={CSS.patronBoxAvatar}>
                            <Pop>
                                <div className={CSS.avatar}>
                                    <Image src={"https://cms.thebench.com/assets/img/avatars/H.H.-Sheikh-Ahmed-bin-Saeed-Al-Maktoum.jpeg"} layout='fill' alt="" unoptimized />
                                </div>
                            </Pop>
                        </div>

                        <div className={CSS.patronBoxContent}>
                            <Pop>
                                <p className="fs-4 fw-600">His Highness Sheikh Ahmed bin Saeed Al Maktoum</p>
                                <p className="fs-5 mt-xxs">
                                    Founding Patron, AHIC/FHS
                                </p>
                                <p className="fs-5 mt-xxs">
                                    President, Dubai Civil Aviation Authority
                                </p>
                                <p className="fs-5 mt-xxs">
                                    Chairman, Dubai Airports
                                </p>
                                <p className="fs-5 mt-xxs">
                                    Chairman and Chief Executive, Emirates Airline & Group
                                </p>
                                <p className="fs-5 mt-xxs">
                                    Chairman, Dubai Holding
                                </p>

                            </Pop>
                        </div>
                    </div>
                    
                    <p className="mt-xs caps fs-sm c-secondary"><Link href={'/world/speakers/profile/h-h-sheikh-ahmed-bin-saeed-al-maktoum'}><a className="uLink">View biography</a></Link></p>
                </div>
            </section>



            <section className="block">
                <ThemesSlider data={THEMES_DATA} link={'/world/themes'} linkLabel={'Learn More'} />
            </section>


            {/* AWARD-WINNER */}
            <section className="block bg-primary">
                <div className="container center">
                    <p className="fs-3 fw-600 c-secondary caps pb-sm">FHS Lifetime Achievement Award 2025 Winner</p>

                    <div className={CSS.patronBox}>

                        <div className={CSS.patronBoxAvatar}>
                            <Pop>
                                <div className={CSS.avatar}>
                                    <Image src={"https://cms.thebench.com/assets/img/avatars/AAA-Chairman.jpg"} layout='fill' alt="" unoptimized />
                                </div>
                            </Pop>
                        </div>

                        <div className={CSS.patronBoxContent}>
                            <Pop>
                                <p className="fs-4 fw-600">Abdullah Ahmed Al Moosa</p>
                                <p className="fs-5 mt-xxs">
                                    Founder &amp; Chairman
                                </p>
                                <p className="fs-5 mt-xxs">
                                    A. A. Al Moosa Enterprises | ARENCO Group
                                </p>
                            </Pop>
                        </div>
                    </div>
                    
                    <p className="mt-xs caps fs-sm c-secondary"><Link href={'/world/speakers/profile/abdullah-ahmed-al-moosa'}><a className="uLink">View biography</a></Link></p>
                </div>
            </section>



            {/* INVESTORS */}
            <section className="block bg-primary-2-dark">
                <div className="container center">
                    <Fade>
                        <p className="fs-1 fw-600 lh-1 caps">Investors at FHS World</p>
                    </Fade>
                    <div className="columns-4 gap-sm mt-md">
                        <InvestorImpact figure={239} label={"Investors"} />
                        <InvestorImpact figure={4.5} prefix={"$"} unit={"tn"} label={"Assets Under Management"} />
                        <InvestorImpact figure={78} label={"Introductions Facilitated"} />
                        <InvestorImpact figure={22} label={"Meetings Scheduled"} />
                    </div>
                    <p className="mt-md">
                        <Pop>
                            <ButtonKeyline 
                                href={'/world/investors'} 
                                decal={'fs-5 fw-600'} 
                                color={'var(--primary)'}
                            >
                                View Past Investors
                            </ButtonKeyline>
                        </Pop>
                    </p>
                </div>
            </section>

            
            {/* LAUNCH STATEMENT */}

            <section className="block bg-white o-hidden" style={{ position: `relative`, overflow: 'hidden' }}>
                <div className="container columns-2 gap-md formatted">

                    <section className="flex jc-center ai-center">
                        <motion.div 
                            className={CSS.fhsGraphicWrapper}

                            initial={{ x: 0 , y: 0, rotate: -45, scale: 0.1, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
                            // viewport={'once'}
                            transition={{ type: "spring", bounce: 0.25 }}
                        >
                            <FhsIcon />
                        </motion.div>
                    </section>

                    <section>
                        <Fade>
                            <p className='fs-0 fw-600 lh-1 maxw-45 c-primary'>
                                Thank You for Joining Us at <span className="c-accent"> FHS World!</span>
                            </p>
                        </Fade>
                        <Fade>
                            <p className='fs-5 fw-500 maxw-45 mt-sm'>At FHS World 2024, we created an intersection for the world of hospitality where the industry invests in its future with 1596 attendees, representing 735 companies, from 60 countries.</p>
                            <p className='fs-6 fw-300 maxw-45'>FHS World 2024 featured several new exciting initiatives and partnerships. <Link href={'/world/branded-residences-forum'}><strong className="underline">The Branded Residences Forum</strong></Link>, a one-day exclusive event co-located with FHS World, focused on the thriving sector of branded residences. For the first time ever, FHS World hosted the semi-finals of the <Link href={'/world/unto'}><strong className="underline">UN Tourism&apos;s Women in Tech</strong></Link> startup competition, showcasing innovative solutions from women-led tech startups. Additionally, the #FHSWomenPower initiative facilitated a record-number of women with over 550+ women in attendance.</p>
                            <p className='fs-5 fw-500 maxw-45 pb-sm'>We look forward to connecting with you in 2025!</p>
                        </Fade>
                        <Pop inline>
                            <Button 
                                href={`https://my.matterport.com/show/?m=DaYm3aXzc6n&ss=103&sr=1.79,.48`} 
                                theme={{ 
                                    background: `var(--secondary-2)`, 
                                    hover: `var(--secondary-2-dark)`, 
                                    color: `white`
                                }} 
                                decal={`fs-5 fw-600`}
                                target={'_blank'}
                            >
                                Virtual Tour 2024
                            </Button>&emsp;
                            <Button 
                                href={`/world/get-in-touch`} 
                                theme={{ 
                                    background: `var(--secondary-2)`, 
                                    hover: `var(--secondary-2-dark)`, 
                                    color: `white`
                                }} 
                                decal={`fs-5 fw-600`}
                            >
                                Get in touch
                            </Button>
                        </Pop>
                    </section>

                </div>
            </section>

         


            {/* SPEAKER HIGHLIGHTS */}

            {
                selectedCmsSpeakers &&
                <SpeakerCarousel 
                    heading={`Featured Speakers`} 
                    text={``}
                    decal={'bg-secondary'}
                    ctaLink={selectedCmsSpeakers.ctaButton.length ? selectedCmsSpeakers.ctaButton[0].buttonLink : ''}
                    ctaLabel={selectedCmsSpeakers.ctaButton.length ? selectedCmsSpeakers.ctaButton[0].buttonLabel : ''}
                    anchorId={``}
                >
                    {
                        selectedCmsSpeakers.profiles.map( profile => (
                            <Pop key={profile.id}>
                                <SpeakerCard
                                    url={`world/speakers/profile/${profile.slug}`}
                                    photoUrl={profile.avatar[0] ? profile.avatar[0].url : null }
                                    fullName={profile.title}
                                    jobTitle={profile.positions[0].jobTitle}
                                    company={profile.positions[0].organisation}
                                />
                            </Pop>
                        ))
                    }
                </SpeakerCarousel>
            }


            {/* IMPACT FIGURES */}

            <section className="block bg-white o-hidden">
                <div className="container">
                    <div className={CSS.impactFiguresGrid}>
                        <Slide><p className="fs-0 fw-700 c-primary lh-1">2024 in Numbers</p></Slide>
                        
                        <div className='columns-4 gap-sm'>
                            <ImpactFigure value={`1596`} label={`Delegates`} />
                            <ImpactFigure value={`60`} label={`Countries`} />
                            <ImpactFigure value={`735`} label={`Companies`} />
                            <ImpactFigure value={`276`} label={`Speakers`} />
                        </div>
                    </div>
                </div>
            </section>


            {/* VIDEO + PHOTO HIGHLIGHTS */}

            <section className="block o-hidden" style={{ position: `relative`, overflow: 'hidden' }}>
                <div className={`${CSS.highlightVideoGrid} container`}>
                    <Slide><p className='fs-0 fw-700 lh-1'>Highlights from <span className='c-secondary'>FHS World 2024</span></p></Slide>
                    <VideoPlayer theme={`dark`} maxWidth={`100`} videoUrl={`https://www.youtube.com/watch?v=yv7QScRD9Nk`} />
                </div>

                <div className={`${CSS.photoGrid} container`}>
                    <Slide><p className='fs-0 fw-700 lh-1 mt-lg'>2024 in <span className='c-secondary'>Photos</span></p></Slide>
                    
                    <div className="columns-3 gap-xs mt-md">
                        {
                            photos.map( (photo, index) => (
                                <Pop key={index}>
                                    <div key={photo.id} style={{ position: `relative`}}>
                                        <Image src={photo.hero[0].url} width={photo.hero[0].width} height={photo.hero[0].height} layout={`responsive`} alt="" />
                                    </div>
                                </Pop>
                            ))
                        }
                        <p className="mt-xs">
                            <ArrowButton href={`https://www.flickr.com/photos/benchevents/albums/`} target='_blank' theme={{ arrow: `var(--secondary)`, border: `var(--secondary)`, label: `var(--secondary)`}}>View all photos</ArrowButton>
                        </p>
                    </div>

                </div>

                <motion.div className={CSS.highlightsGraphicWapper} style={{ y }}>
                    <FhsIconKeyline inverse />
                </motion.div>
            </section>


            {/* SPONSORSHIP FORM */}

            <section className="block bg-white o-hidden">
                <div className="container columns-2 gap-lg">
                    <div className="formatted">
                        <Slide><h1>Become a <span className='c-secondary'>Sponsor</span></h1></Slide>
                        <Fade><p>For over two decades - government leaders, tourism ministries, global travel &amp; tourism associations, the world&apos;s most influential hospitality brands, hotel owners &amp; investors, renowned restaurant groups, airlines &amp; aviation authorities, destination developers, asset managers, financial groups and consultants - have been participating in The Bench&apos;s events for their respective objectives. These include AHIF, GRIF, FHS, AHF, IDEEA, AviaDev and RENEW - where industry players showcase their brands, position themselves as thought leaders or innovators, and connect with the right opportunities and knowledge. Speak with one of our sales team members to understand how you can make the most of this unique opportunity!<br /></p></Fade>
                    </div>

                    <div>
                        <HubspotForm portalId={`14527187`} formId={`65f4705e-45dc-4e1f-8d89-858947d3ac40`} />
                    </div>
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
Home.theme = 'world-2024'




export async function getStaticProps({ params, preview, previewData }) {

    const data = await craftApolloClient( preview, previewData ).query({
        query: gql`
			query Homepage {
				globalSet(site: "${process.env.SITE_HANDLE_AE}") {
					... on footer_GlobalSet {
						id
						name
						socialConnections {
							... on socialConnections_BlockType {
								id
								hyperlink
								icon
								label
							}
						}
						contactDetails {
							... on contactDetails_BlockType {
								id
								body
							}
						}
						hubspotForm {
							... on hubspotForm_BlockType {
								id
								formId
								portalId
							}
						}
					}
				}
				entry(site: "${process.env.SITE_HANDLE_AE}", id: "7949") {
					id
					title
					... on ${process.env.SITE_HANDLE_AE}Homepage_${process.env.SITE_HANDLE_AE}Homepage_Entry {
						${process.env.CONTENT_BLOCKS_HANDLE}ContentBlocks {
							${QueryText}
							${QueryFlipFlops}
							${QueryFloaters}
							${QueryBillboards}
							${QueryBillboardSliders}
							${QueryImpactFigures}
							${QueryVideos}
							${QueryProfileCarousel}
							${QueryForm}
							${QueryImages}
						}
						${QuerySEO}
					}
				}
			}
        `
    })
    const pageData = data


    return { 
		props: { 
			globals: pageData.data.globalSet,
			entry: pageData.data.entry,
			seomatic: pageData.data.entry.seomatic,
			// speakerData: speakerData.content, 
			// partnerData: partnerData.content
		}
	}
}