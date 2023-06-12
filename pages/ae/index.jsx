
import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from "next/head"
import Image from "next/image"

import { ThemeBg } from "../../fuselage/theme/2023/ae/theme-bg"

import { Header } from '../../fuselage/global-ae/header/header'
import { Footer } from '../../fuselage/global-ae/footer/footer'

import { Container } from '../../fuselage/theme/2023/ae/layout/container/container'
import { LogoBubble, LogoBubbleGrid, HostSponsorLogo, HostSponsorGrid } from '../../fuselage/theme/2023/ae/launch-page'
import { Headline } from "../../fuselage/theme/2023/ae/headline/headline"
import { FhsLogo } from '../../fuselage/components/fhs-logo/fhs-logo'
import { AhicLogo } from '../../fuselage/components/ahic-logo/ahic-logo'
import { GrifLogo } from '../../fuselage/components/grif-logo/grif-logo'
import { ImpactFigure } from "../../fuselage/theme/2023/ae/impact-figure"
import { SpeakerCarousel } from "../../fuselage/blocks/speaker-carousel/speaker-carousel"
import { SpeakerCard } from "../../fuselage/components/speaker-card/speaker-card"
import { VideoPlayer } from '../../fuselage/components/video-player/video-player'
import { Form } from '../../fuselage/blocks/form/form'
import { ArrowButton } from "../../fuselage/components/arrow-button/arrow-button"

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



export default function PreLaunch ({ globals, entry, seomatic, speakerData, partnerData }) {

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
                    <p className='fs-3 fw-300 caps'>25-27 September 2023</p>
                    <Headline />
                    <p className='fs-5 fw-300 caps mb-lg'>Hilton Abu Dhabi Yas Island</p>
                    
                    <LogoBubbleGrid>
                        <LogoBubble><FhsLogo primary={`white`} secondary={`white`} /></LogoBubble>
                        <LogoBubble><AhicLogo primary={`white`} secondary={`white`} /></LogoBubble>
                        <LogoBubble><GrifLogo primary={`white`} secondary={`white`}  /></LogoBubble>
                    </LogoBubbleGrid>
                </Container>
                
                <Container flushRight decal={`bg-white-90 p-md`}>
                    <div className="formatted">
                        <h1 className='lh-1'>FHS & AHIC 2023</h1>
                        <h3 className='maxw-40'> Join Us As We Transform Yas Island into a Global Epicenter for Hospitality Investment</h3>
                        <p className='fs-6 fw-300 maxw-40 mt-md'>Experience the highly anticipated Future Hospitality Summit 2023 alongside the 19th edition of The Bench&apos;s flagship AHIC - Arabian Hospitality Investment Conference, in Abu Dhabi for the very first time! </p>
                        <p className='fs-6 fw-300 maxw-40'>Experience three extraordinary days of dealmaking and impactful industry discussions at the Yas Island, thanks to our host sponsors - Abu Dhabi Convention & Exhibition Bureau, Miral, and Hilton Abu Dhabi Yas Island. </p>
                        <p className='fs-6 fw-300 maxw-40'>Explore innovative investment trends, groundbreaking insights, and unparalleled networking opportunities in the world of hospitality. </p>
                        <p className='fs-6 fw-300 maxw-40'>Don&apos;t miss this unique opportunity to shape the industry&apos;s future.</p>
                    </div>

                    <div className="mt-md bt-1 bc-grey-10 pt-sm">
                        <p className='fw-600 caps mb-sm'>Host Sponsors</p>

                        <HostSponsorGrid>
                            <HostSponsorLogo hero={{url: `/assets/site/ae/abu-dhabi.png`}}/>
                            <HostSponsorLogo hero={{url: `/assets/site/ae/miral.png`}}/>
                            <HostSponsorLogo hero={{url: `/assets/site/ae/hilton.png`}}/>
                        </HostSponsorGrid>
                    </div>
                </Container>
            </section>


            {
                selectedCmsSpeakers &&
                <SpeakerCarousel 
                    heading={`confirmed speakers`} 
                    text={``}
                    decal={'bg-light'}
                    ctaLink={``}
                    ctaLabel={``}
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
                    <p className="fs-0 caps lh-1 maxw-50 mb-md" style={{ lineHeight: 0.9}}>2022 in numbers</p>
                    
                    <div className='columns-2 gap-sm'>
                        <ImpactFigure value={`1072`} label={`attendees from across the globe`} />
                        <ImpactFigure value={`63`} label={`sponsors and partners`} />
                        <ImpactFigure value={`74`} label={`media and press attending`} />
                        <ImpactFigure value={`200`} label={`speakers`} />
                    </div>
                </Container>

                <Container flushRight decal={`bg-light`}>
                    <p className='fs-0 caps p-md lh-1'>Highlights from FHS&nbsp;2022</p>
                    <VideoPlayer theme={`dark`} maxWidth={`100`} videoUrl={`https://youtu.be/4w6h8gXKpvg`} />
                </Container>

                <Container decal={``}>
                    <p className='bg-light fs-0 caps p-md lh-1'>2022 in photos</p>
                    
                    <div className="p-md bg-white-90 columns-3 gap-xs">
                        {
                            photos.map( photo => (
                                <div key={photo.id} style={{ position: `relative`}}>
                                    <Image src={photo.hero[0].url} width={photo.hero[0].width} height={photo.hero[0].height} layout={`responsive`} />
                                </div>
                            ))
                        }
                        <p className="mt-xs">
                            <ArrowButton href={`https://flic.kr/s/aHBqjAbKY7`} target='_blank' theme={{ arrow: `var(--secondary)`, border: `var(--secondary)`, label: `var(--secondary)`}}>View all photos</ArrowButton>
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


            
        </>
    )
}
PreLaunch.theme = 'ae'


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