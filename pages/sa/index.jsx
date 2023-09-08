import Layout from '../../fuselage/templates/sa/layout'

import { useContext } from 'react'
import { GlobalsContext } from '../_app'

import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from 'next/head'

import { Header } from '../../fuselage/global-sa/header/header'
import { Footer } from "../../fuselage/global-sa/footer/footer"
import { CtaTab } from '../../fuselage/components/cta-tab/cta-tab'

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
	QueryCards,
    QuerySEO,
    QueryImages,
	BizzaboPartners
} from "../../graphql/queries"

import handleSeomaticMeta from '../../lib/seomatic'


import { HeroUnitVideo } from '../../fuselage/blocks-sa/hero-unit-video/hero-unit-video'


export default function Home({ seomatic, contentBlocks, speakerData, partnerData }) {

	const { globals } = useContext(GlobalsContext)
    // console.log('globals from template MAIN:', globals.ksa)

	// console.log('entry:', entry)
	// console.log('seomatic:', seomatic)
	
    // console.log('speakerData:', speakerData)
	// const selectedSpeakers = []

	// const [menuTrigger, inView, entry] = useInView({
	// 	threshold: 0.15,
	// })

	return (
		<div className="bg-theme">
			<Head>
				{ handleSeomaticMeta( seomatic ) }
			</Head>

			<Header shimMobile />

			<HeroUnitVideo />

			{ handleContentBlocks( contentBlocks, null, partnerData, 'sa' ) }

			<Footer />

			<CtaTab />

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


export async function getStaticProps({ preview, previewData }) {

    const data = await craftApolloClient( preview, previewData ).query({
        query: gql`
			query Homepage {
				globalSet(site: "${process.env.SITE_HANDLE_SA}") {
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
				entry(site: "fhisSa", id: 63852) {
					id
					title
					... on fhisSaHomepage_fhisSaHomepage_Entry {
						id
						${process.env.CONTENT_BLOCKS_HANDLE}ContentBlocks {
							${QueryText}
							${QueryFlipFlops}
							${QueryFloaters}
							${QueryBillboards}
							${QueryBillboardSliders}
							${QueryImpactFigures}
							${QueryVideos}
							${QueryProfileCarousel}
							${QueryCards}
							${QueryForm}
							${QueryImages}
							${BizzaboPartners}
						}
						${QuerySEO}
					}
				}
			}
			
        `
    })
    const pageData = data


	const speakers = await fetch(`https://api.bizzabo.com/api/speakers?eventId=${process.env.BIZZABO_EVENT_ID_SA}&size=200`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
	const speakerData = await speakers.json()

	
	const partners = await fetch(`https://api.bizzabo.com/api/partners?eventId=${process.env.BIZZABO_EVENT_ID_SA}&size=200`, {
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
			contentBlocks: pageData.data.entry.fhisContentBlocks,
			partnerData: partnerData.content
		}
	}
}


