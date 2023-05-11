import { gql } from "@apollo/client"
import craftApolloClient from "../../pages/api/apollo"

import Head from 'next/head'

import { ThemeBg } from "../../fuselage/theme/2023/ae/theme-bg"

import { Header } from '../../fuselage/global-ae/header/header'
import { Footer } from "../../fuselage/global-ae/footer/footer"

import { Container } from '../../fuselage/theme/2023/ae/launch-page'
import { LogoBubble, LogoBubbleGrid, HostSponsorLogo, HostSponsorGrid } from '../../fuselage/theme/2023/ae/launch-page'
import { FhsLogo } from '../../fuselage/components/fhs-logo/fhs-logo'
import { AhicLogo } from '../../fuselage/components/ahic-logo/ahic-logo'
import { GrifLogo } from '../../fuselage/components/grif-logo/grif-logo'

import handleContentBlocks from "../../lib/content-blocks"

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


export default function Home({ globals, entry, seomatic, speakerData, partnerData }) {

	// console.log('entry:', entry)
	// console.log('SEO — title:', JSON.parse(entry.seomatic.metaTitleContainer))
    // console.log('SEO — tags:', JSON.parse(entry.seomatic.metaTagContainer))
	
    let metaTitle = JSON.parse(entry.seomatic.metaTitleContainer)
    let metaTags = JSON.parse(entry.seomatic.metaTagContainer)  
	
    // console.log('speakerData:', speakerData)
	const selectedSpeakers = []

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
					<p className="fs-xl caps maxw-50 my-sm" style={{ lineHeight: 0.9}}>Focus on Investment</p>
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


			{handleContentBlocks( entry.fhisContentBlocks )}


			<Footer theme={{ footerBg: 'bg-white-90' }} />
		</>
	)
}
Home.theme = 'ae'


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


