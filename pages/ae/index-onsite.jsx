import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState } from "react"

import { motion } from "framer-motion"

import Head from "next/head"
import Image from "next/image"

import { ThemeBg } from "../../fuselage/theme/2023/ae/theme-bg"

import { Header } from '../../fuselage/global-ae/header/header'
import { Footer } from '../../fuselage/global-ae/footer/footer'
import { CtaTab } from "../../fuselage/components/cta-tab/cta-tab"

import { Container } from '../../fuselage/theme/2023/ae/layout/container/container'
import { HostSponsorLogo, HostSponsorGrid } from '../../fuselage/theme/2023/ae/launch-page'
import { Button } from "../../fuselage/components/button/button"
import { ButtonSocial } from "../../fuselage/components/button-social/button-social"
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
        "__typename": "slides_BlockType",
        "id": "13864",
        "hero": [
            {
                "__typename": "site_Asset",
                "id": "50183",
                "url": "https://cms.thebench.com/assets/img/site/FHIS-AE/52403116903_1d48520bbf_o.jpg",
                "width": 2000,
                "height": 1303
            }
        ],
        "body": null
    },
    {
        "__typename": "slides_BlockType",
        "id": "13865",
        "hero": [
            {
                "__typename": "site_Asset",
                "id": "50184",
                "url": "https://cms.thebench.com/assets/img/site/FHIS-AE/52403147170_d7199b639e_o.jpg",
                "width": 2000,
                "height": 1331
            }
        ],
        "body": null
    },
    {
        "__typename": "slides_BlockType",
        "id": "13867",
        "hero": [
            {
                "__typename": "site_Asset",
                "id": "50186",
                "url": "https://cms.thebench.com/assets/img/site/FHIS-AE/52401819031_2e8f739388_o.jpg",
                "width": 2000,
                "height": 1333
            }
        ],
        "body": null
    },
    {
        "__typename": "slides_BlockType",
        "id": "13868",
        "hero": [
            {
                "__typename": "site_Asset",
                "id": "50187",
                "url": "https://cms.thebench.com/assets/img/site/FHIS-AE/52402232115_08fca076d0_o.jpg",
                "width": 2000,
                "height": 1334
            }
        ],
        "body": null
    },
    {
        "__typename": "slides_BlockType",
        "id": "50206",
        "hero": [
            {
                "__typename": "site_Asset",
                "id": "50189",
                "url": "https://cms.thebench.com/assets/img/site/FHIS-AE/52402260675_9d6a6dd392_o.jpg",
                "width": 2000,
                "height": 1331
            }
        ],
        "body": null
    },
    {
        "__typename": "slides_BlockType",
        "id": "50207",
        "hero": [
            {
                "__typename": "site_Asset",
                "id": "50193",
                "url": "https://cms.thebench.com/assets/img/site/FHIS-AE/52402603181_c0c7457343_o.jpg",
                "width": 2000,
                "height": 1334
            }
        ],
        "body": null
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
                    <Slide>
                        <h1 className="fs-xl caps" style={{ lineHeight: 0.9}}>Welcome to FHS&nbsp;2023</h1>
                    </Slide>
                    <Slide>
                        <p className="fs-2 lh-2">Explore innovative investment trends, groundbreaking insights, and unparalleled networking opportunities in the world of hospitality.</p>
                    </Slide>
                    
                    <div className="columns-2 gap-sm mt-lg">
                        <Button href={`https://onelink.to/sv3c73`} target={`_blank`} decal={`fs-5 fw-600`}><Pop>Download Event Brochure</Pop></Button>
                        <Button href={`/ae/agenda`} target={`_blank`} decal={`fs-5 fw-600`}><Pop>Download Event App</Pop></Button>
                        <Button href={`https://www.linkedin.com/showcase/future-hospitality-summit/?viewAsMember=true`} target={`_blank`} decal={`fs-5 fw-600`}><Pop>View Live Programme</Pop></Button>
                        <span
                            style={{ display: `inline-flex` }}
                            onClick={() => {
                                console.log('modal button clicked')
                                setModalContent('content')
                                setShowModal(true)
                                
                            }}>
                            <Button decal={`fs-5 fw-600 minw-100pc`}><Pop>Download Event Brochure</Pop></Button>
                        </span>
                        <Button href={`https://www.canva.com/design/DAFtBtry1HM/nJ8pAa0CtfAnnW4g7jA7Uw/view#1`} target={`_blank`} decal={`fs-5 fw-600`}><Pop>FHS 2024 Preview</Pop></Button>
                    </div>

                </Container>
                
                <Container flushRight decal={`bg-white-90 p-md`}>
                    <div className="formatted">
                        <Slide delay={.2}><h2 className='maxw-40'>Share your FHS experience by using #FutureHospitalitySummit</h2></Slide>
                        <div className="flex gap-xs mt-sm">
                            <Pop>
                                <ButtonSocial 
                                    icon={`twitter`} 
                                    url={`https://twitter.com/FuturHospSummit`} 
                                    alt={`twitter`}
                                    decal={'secondary'}
                                />
                            </Pop>
                            <Pop delay={.1}>
                                <ButtonSocial 
                                    icon={`instagram`} 
                                    url={`https://www.instagram.com/futurehospitalitysummit/`} 
                                    alt={`instagram`}
                                    decal={'secondary'}
                                />
                            </Pop>
                            <Pop delay={.2}>
                                <ButtonSocial 
                                    icon={`facebook`} 
                                    url={`https://twitter.com/FuturHospSummit`} 
                                    alt={`facebook`}
                                    decal={'secondary'}
                                />
                            </Pop>
                            <Pop delay={.3}>
                                <ButtonSocial 
                                    icon={`linkedin`} 
                                    url={`https://twitter.com/FuturHospSummit`} 
                                    alt={`linkedin`}
                                    decal={'secondary'}
                                />
                            </Pop>
                        </div>
                    </div>


                    <div className="mt-md bt-1 bc-grey-10 pt-sm">
                        <Slide><p className='fw-600 caps mb-sm'>Host Partners</p></Slide>

                        <HostSponsorGrid>
                            <Pop><HostSponsorLogo hero={{url: `/assets/site/ae/abu-dhabi.png`}}/></Pop>
                            <Pop delay={.2}><HostSponsorLogo hero={{url: `/assets/site/ae/miral.png`}}/></Pop>
                            <Pop delay={.4}><HostSponsorLogo hero={{url: `/assets/site/ae/hilton.png`}}/></Pop>
                        </HostSponsorGrid>
                    </div>
                </Container>
            </section>



            <PopupOverlay onClose={() => setShowModal(false)} show={showModal}>
                <div className={CSS.popupHeader}>
                    <p className="fs-4 fw-600 lh-1 mb-sm">Download Event Brochure</p>
                    <img className={CSS.popupHeaderImage} src="/assets/site/ae/ae-2024-brochure.png" alt=""/>
                </div>

                <HubspotForm portalId={`14527187`} formId={`80e983ed-37fc-4343-bbf3-52e3d8021c82`} />
            </PopupOverlay>



            <Footer theme={{ footerBg: 'bg-white' }} />

            <CtaTab iconColor={`white`} buttonColor={`var(--primary)`} />

            
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