import Layout from '../../fuselage/templates/ae/layout'

import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from 'next/head'

import { Header } from '../../fuselage/global-ae/header/header'
import { Footer } from "../../fuselage/global-ae/footer/footer"
import { HeroUnitPostEvent } from '../../fuselage/blocks/hero-unit-post-event/hero-unit-post-event'
import { PortalPopup } from "../../fuselage/components/portal-popup/portal-popup"
import { LocalesTab } from '../../fuselage/components/locales-tab/locales-tab'

import { SpeakerCarousel } from '../../fuselage/blocks/speaker-carousel/speaker-carousel'
import { SpeakerCard } from '../../fuselage/components/speaker-card/speaker-card'

import { GetBizzaboPartersByLevel } from '../../lib/bizzabo-partner-levels'
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
		<div className="bg-theme">
			<Head>
				{ handleSeomaticMeta( seomatic ) }
			</Head>

			<Header shim />

			{/* <LocalesTab />
			<PortalPopup /> */}
			<HeroUnitPostEvent />

			{handleContentBlocks( entry.fhisContentBlocks )}

			<Footer />
		</div>
	)
}

Home.getLayout = function getLayout( page ) {
	return (
	<Layout>
		{ page }
	</Layout>
	)
}


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


