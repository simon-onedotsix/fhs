import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState } from "react"

import { motion } from "framer-motion"

import Head from "next/head"
import Image from "next/image"
import Script from "next/script"

import { ThemeBg } from "../../fuselage/theme/2023/ae/theme-bg"

import { Header } from '../../fuselage/global-ae/header/header'
import { Footer } from '../../fuselage/global-ae/footer/footer'
import { CtaTab } from "../../fuselage/components/cta-tab/cta-tab"

import { Container } from '../../fuselage/theme/2023/ae/layout/container/container'
import { LogoBubble, LogoBubbleGrid, HostSponsorLogo, HostSponsorGrid } from '../../fuselage/theme/2023/ae/launch-page'
import { Headline } from "../../fuselage/theme/2023/ae/headline/headline"
import { FhsLogo } from '../../fuselage/components/fhs-logo/fhs-logo'
import { AhicLogo } from '../../fuselage/components/ahic-logo/ahic-logo'
import { ImpactFigure } from "../../fuselage/theme/2023/ae/impact-figure"
import { SpeakerCarousel } from "../../fuselage/blocks/speaker-carousel/speaker-carousel"
import { SpeakerCard } from "../../fuselage/components/speaker-card/speaker-card"
import { VideoPlayer } from '../../fuselage/components/video-player/video-player'
import { Form } from '../../fuselage/blocks/form/form'
import { Button } from "../../fuselage/components/button/button"
import { ArrowButton } from "../../fuselage/components/arrow-button/arrow-button"
import { Pop, Slide, Fade } from "../../fuselage/theme/2023/ae/layout/animation/animation"
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

import CSS from '../../fuselage/theme/2023/ae/homepage.module.css'


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

    return (
        <>
            <Head>
				{ handleSeomaticMeta( seomatic ) }
			</Head>
        
            <ThemeBg />

            <Header compact shim theme={{ 
                primary: 'var(--primary)', 
                secondary: 'var(--secondary)', 
                text: 'var(--primary)',
                buttons: 'var(--primary)',
                buttonText: 'white',
                headerBg: '#ffffffee',
                overlayBg: 'var(--primary)',
            }} />

            <section className="block flush">
                <Container decal={`bg-white-90 p-md`}>
                    <Slide><p className='fs-3 fw-300 caps mb-xs'>30 September - 02 October 2024</p></Slide>
                    <Headline />
                    <Slide delay={.5}><p className='fs-5 fw-300 caps mb-lg'>Madinat Jumeirah, Dubai</p></Slide>
                    
                    <Fade>
                        <Button href={`https://www.canva.com/design/DAFtBtry1HM/nJ8pAa0CtfAnnW4g7jA7Uw/view#1`} decal={`fs-4 fw-600`} target={`_blank`}>FHS World 2024 Brochure</Button>
                    </Fade>
                    {/* <LogoBubbleGrid>
                        <LogoBubble delay={0.2}><FhsLogo primary={`white`} secondary={`white`} /></LogoBubble>
                    </LogoBubbleGrid> */}
                </Container>
                
                <Container flushRight decal={`bg-white-90 p-md`}>
                    <div className="formatted">
                        <Slide delay={.2}><p className='fs-1 fw-600 lh-1 maxw-40'>Thank you for making FHS 2023 a success!</p></Slide>
                        <Fade delay={.4}><p className='fs-4 fw-300 maxw-40 mt-sm'>For <strong>Future Hospitality Summit 2024</strong>, we&apos;re creating an intersection for the world of hospitality where the industry invests in its future. We are returning to Dubai to a much bigger, bolder space - Madinat Jumeirah. A more personalised and immersive experience with new features like Investors Lounge, ESG Lab, Country Pavilions, an Expanded Exhibition Area, and much more.</p>
                        </Fade>
                    </div>

                    {/* download prospectus */}

                    <div className="mt-md">
                        <span 
                            onClick={() => {
                                console.log('modal button clicked')
                                    setModalContent('content')
                                    setShowModal(true)
                               
                            }}>
                            <Button decal={`fs-5 fw-600`}>Register Interest</Button>
                        </span>
                    </div>

                </Container>
            </section>


            {
                selectedCmsSpeakers &&
                <SpeakerCarousel 
                    heading={`Featured Speakers`} 
                    text={``}
                    decal={'bg-light'}
                    ctaLink={selectedCmsSpeakers.ctaButton.length ? selectedCmsSpeakers.ctaButton[0].buttonLink : ''}
                    ctaLabel={selectedCmsSpeakers.ctaButton.length ? selectedCmsSpeakers.ctaButton[0].buttonLabel : ''}
                    anchorId={``}
                >
                    {
                        selectedCmsSpeakers.profiles.map( profile => (
                            <SpeakerCard
                                key={profile.id}
                                url={`ae/speakers/profile/${profile.slug}`}
                                photoUrl={profile.avatar[0] ? profile.avatar[0].url : null }
                                fullName={profile.title}
                                jobTitle={profile.positions[0].jobTitle}
                                company={profile.positions[0].organisation}
                            />
                        ))
                    }
                </SpeakerCarousel>
            }


            <section className="block flush">
                <Container decal={`bg-white-90 p-md`}>
                    <Slide><p className="fs-0 caps lh-1 maxw-50 mb-md" style={{ lineHeight: 0.9}}>2023 in numbers</p></Slide>
                    
                    <div className='columns-2 gap-sm'>
                        <ImpactFigure value={`1200`} label={`Delegates`} />
                        <ImpactFigure value={`40`} label={`Countries`} />
                        <ImpactFigure value={`400`} label={`Companies`} />
                        <ImpactFigure value={`200`} label={`Speakers`} />
                    </div>
                </Container>

                <Container flushRight decal={`bg-light`}>
                    <Slide><p className='fs-0 caps p-md lh-1'>Highlights from FHS&nbsp;2023</p></Slide>
                    <VideoPlayer theme={`dark`} maxWidth={`100`} videoUrl={`https://www.youtube.com/watch?v=7Ar-CT0z23k&t=2s`} />
                </Container>

                <Container decal={``}>
                    <Slide><p className='bg-light fs-0 caps p-md lh-1'>2023 in photos</p></Slide>
                    
                    <div className="p-md bg-white-90 columns-3 gap-xs">
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

                </Container>
            </section>



            <Form 
                theme={`light`} 
                maxWidth={`block.maxWidth`}
                portalId={`14527187`}
                formId={`f2335c74-d011-4635-830c-8d44ec22bb58`}
            >
                {`<h1>BECOME A SPONSOR</h1>
                <p>For over two decades - government leaders, tourism ministries, global travel &amp; tourism associations, the world&apos;s most influential hospitality brands, hotel owners &amp; investors, renowned restaurant groups, airlines &amp; aviation authorities, destination developers, asset managers, financial groups and consultants - have been participating in The Bench&apos;s events for their respective objectives. These include AHIF, GRIF, FHS, AHF, IDEEA, AviaDev and RENEW - where industry players showcase their brands, position themselves as thought leaders or innovators, and connect with the right opportunities and knowledge. Speak with one of our sales team members to understand how you can make the most of this unique opportunity!<br /></p>`}
            </Form>





            <Footer theme={{ footerBg: 'bg-white' }} />

            
            {/* <CtaTab iconColor={`white`} buttonColor={`var(--primary)`} /> */}


            <PopupOverlay onClose={() => setShowModal(false)} show={showModal}>

                <div className={CSS.popupHeader}>
                    <p className="fs-4 fw-600 lh-1 mb-sm">Register interest</p>
                </div>

                <HubspotForm portalId={`14527187`} formId={`ad1a19c2-b5ac-4290-8b46-57979532c947`} />

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
Home.theme = 'ae-2023'


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