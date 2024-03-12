import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import Head from "next/head"
import Image from "next/image"
import Script from "next/script"

import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"

import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'
import { HeroUnitVideo } from "../../fuselage/theme/2024/world/blocks/hero-unit-video/hero-unit-video"
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

import CSS from '../../fuselage/theme/2024/world/css/homepage.module.css'


const photos = [
    {
        "id": "13864",
        "hero": [
            {
                "id": "50183",
                "url": "/assets/img/ae/2023/photo-01.jpg",
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
                "url": "/assets/img/ae/2023/photo-02.jpg",
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
                "url": "/assets/img/ae/2023/photo-03.jpg",
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
                "url": "/assets/img/ae/2023/photo-04.jpg",
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
                "url": "/assets/img/ae/2023/photo-05.jpg",
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
                "url": "/assets/img/ae/2023/photo-06.jpg",
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
				{ handleSeomaticMeta( seomatic ) }
			</Head>
        
            <Header overlaid inverse />


            <HeroUnitVideo>
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
                    30 SEP - 02 OCT 2024, Madinat Jumeirah, Dubai
                </motion.p>

                <Fade>
                    <div className="mt-sm center">
                        <Pop inline>
                            <Button href={`/ae/purchase-pass`} theme={{ background: `var(--secondary-2)`, hover: `var(--secondary-2-dark)`, color: `white`}} decal={`fs-5 fw-600`}>Register Now</Button>
                        </Pop>
                    </div>
                </Fade>
            </HeroUnitVideo>


            {/* HOST SPONSOR */}

            <section className="block bg-default">
                <div className="container center">
                    <p className="fs-3 fw-600 c-secondary caps">Host Sponsor</p>
                    <div className={`${CSS.hostSponsorLogoWrapper} mt-xs mx-auto`}>
                        <Pop>
                            <Image src={`/assets/site/ae/jumeirah.png`} layout={`responsive`} width={923} height={354} />
                        </Pop>
                    </div>
                </div>
            </section>


            {/* DOWNLOADS */}

            <section className="block">
                <div className="container">
                    <Fade>
                        <div className="flex flex-wrap jc-center gap-xs">
                            <span 
                                onClick={() => {
                                    console.log('modal button clicked')
                                        setModalContent(
                                            <>
                                                <div className={CSS.popupHeader}>
                                                    <p className="fs-5 fw-600 lh-1 mb-sm">Download Event Brochure</p>
                                                </div>

                                                <HubspotForm portalId={`14527187`} formId={'40f2dd9c-9f5a-41c2-9d78-f35a170107d4'} />
                                            </>
                                        )
                                        setShowModal(true)
                                
                                }}>
                                <Button decal={`fs-5 fw-600`} theme={{ background: `var(--secondary-1)`, hover: `white`, color: `var(--primary)`}} target={`_blank`}>Download Event Brochure</Button>
                            </span>
                            
                            <span 
                                onClick={() => {
                                    console.log('modal button clicked')
                                        setModalContent(
                                            <>
                                                <div className={CSS.popupHeader}>
                                                    <p className="fs-4 fw-600 lh-1 mb-sm">Download FHS 2023 Post-event Report</p>
                                                    <img className={CSS.popupHeaderImage} src="/assets/site/ae/ae-2024-brochure.png" alt=""/>
                                                </div>

                                                <HubspotForm portalId={`14527187`} formId={'c2b14f19-e6b6-478f-83ac-e76e9facc2c6'} />
                                            </>
                                        )
                                        setShowModal(true)
                                
                                }}>
                                <Button decal={`fs-5 fw-600`} theme={{ background: `var(--secondary-1)`, hover: `white`, color: `var(--primary)`}} target={`_blank`}>Download FHS 2023 Post-event Report</Button>
                            </span>

                        </div>
                    </Fade>
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
                                What&apos;s new for <span className="c-secondary">Future Hospitality Summit</span> <span className="c-accent">2024</span>
                            </p>
                        </Fade>
                        <Fade>
                            <p className='fs-5 fw-500 maxw-45 mt-sm'>This year we are creating an intersection for the world of hospitality where the industry invests in its future. </p>
                            <p className='fs-6 fw-300 maxw-45'>We are returning to <strong>Dubai</strong> to a much bigger, bolder space - Madinat Jumeirah. A more personalised and immersive experience with new features like <strong>Investors Lounge</strong>, <strong>ESG Lab</strong>, <strong>Country Pavilions</strong>, an <strong>Expanded Exhibition Area</strong>, and much more.</p>
                            <p className='fs-6 fw-300 maxw-45 mt-xs mb-sm'>Sponsorship spaces at the event are limited and are selling out fast. If you are interested in booking a stand or a pavilion, please feel free to reach out to our sponsorship team.</p>
                        </Fade>
                        <Pop inline>
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
                        <Slide><p className="fs-0 fw-700 c-primary lh-1">2023 in Numbers</p></Slide>
                        
                        <div className='columns-4 gap-sm'>
                            <ImpactFigure value={`1200`} label={`Delegates`} />
                            <ImpactFigure value={`40`} label={`Countries`} />
                            <ImpactFigure value={`400`} label={`Companies`} />
                            <ImpactFigure value={`200`} label={`Speakers`} />
                        </div>
                    </div>
                </div>
            </section>


            {/* VIDEO + PHOTO HIGHLIGHTS */}

            <section className="block o-hidden" style={{ position: `relative`, overflow: 'hidden' }}>
                <div className={`${CSS.highlightVideoGrid} container`}>
                    <Slide><p className='fs-0 fw-700 lh-1'>Highlights from <span className='c-secondary'>FHS&nbsp;2023</span></p></Slide>
                    <VideoPlayer theme={`dark`} maxWidth={`100`} videoUrl={`https://www.youtube.com/watch?v=7Ar-CT0z23k&t=2s`} />
                </div>

                <div className={`${CSS.photoGrid} container`}>
                    <Slide><p className='fs-0 fw-700 lh-1 mt-lg'>2023 in <span className='c-secondary'>Photos</span></p></Slide>
                    
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
                            <ArrowButton href={`https://flic.kr/s/aHBqjAXaGC`} target='_blank' theme={{ arrow: `var(--secondary)`, border: `var(--secondary)`, label: `var(--secondary)`}}>View all photos</ArrowButton>
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
                        <HubspotForm portalId={`14527187`} formId={`f2335c74-d011-4635-830c-8d44ec22bb58`} />
                    </div>
                </div>
            </section>




            <Footer />
            <LenisScroller />


            <PopupOverlay onClose={() => setShowModal(false)} show={showModal}>
                { modalContent } 
            </PopupOverlay>


            <Script id="chatbot" strategy="afterInteractive">
                {`
                    (function(d,t) {
                        var BASE_URL="https://app.chatlyn.com";
                        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                        g.src=BASE_URL+"/packs/js/sdk.js";
                        g.defer = true;
                        g.async = true;
                        s.parentNode.insertBefore(g,s);
                        g.onload=function(){
                        window.chatwootSDK.run({
                        websiteToken: 'M83YXfr8QveNibKc6eFniAuA',
                        baseUrl: BASE_URL
                        })
                        }
                    })(document,"script");;
                `}
            </Script>
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


	const speakers = await fetch(`https://api.bizzabo.com/api/speakers?eventId=${process.env.BIZZABO_EVENT_ID}&size=200`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
	const speakerData = await speakers.json()

	
	const partners = await fetch(`https://api.bizzabo.com/api/partners?eventId=${process.env.BIZZABO_EVENT_ID}&size=200`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
	const partnerData = await partners.json()

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