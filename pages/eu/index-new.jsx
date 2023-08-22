import { useContext } from 'react'
import { GlobalsContext } from '../_app'

import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from 'next/head'

import { Header } from '../../fuselage/theme/2024/eu/global/header/header'
import { Footer } from "../../fuselage/theme/2024/eu/global/footer/footer"
import { HeroUnit } from '../../fuselage/theme/2024/eu/blocks/hero-unit/hero-unit'

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

export default function Home({ seomatic, contentBlocks, speakerData, partnerData }) {

	const { globals } = useContext(GlobalsContext)
	
    // console.log('globals from template MAIN:', globals.ksa)
	// console.log('entry:', entry)
	// console.log('seomatic:', seomatic)
	

	return (
		<div className='bg-primary' style={{ backgroundColor: `var(--primary)`, backgroundImage: `url('/assets/theme/eu-2024/fhs-2024-eu-bg.svg')`, backgroundSize: `100%` }}>
			<Head>
				{ handleSeomaticMeta( seomatic ) }
			</Head>

			<Header />

			<HeroUnit />

			<div style={{ minHeight: `50vh`}} />

			{/* { handleContentBlocks( contentBlocks, null, partnerData, 'eu' ) } */}

			<Footer />

		</div>
	)
}

Home.theme = 'eu-2024'





export async function getStaticProps({ preview, previewData }) {

    const data = await craftApolloClient( preview, previewData ).query({
        query: gql`
			query Homepage {
				globalSet(site: "${process.env.SITE_HANDLE_EU}") {
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
				entry(site: "fhsEu", id: 	127791) {
					id
					title
					... on fhsEuHomepage_fhsEuHomepage_Entry {
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


    return { 
		props: { 
			globals: pageData.data.globalSet,
			entry: pageData.data.entry,
			seomatic: pageData.data.entry.seomatic,
			contentBlocks: pageData.data.entry.fhisContentBlocks,
		}
	}
}


