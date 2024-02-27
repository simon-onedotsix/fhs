import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Head from 'next/head'

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
    QueryImages,
    Passes,
    QueryPartners,
	BizzaboPartners
} from "../../graphql/queries"

import handleContentBlocks from "../../lib/content-blocks"

import { Header } from '../../fuselage/theme/2024/ae/common/header/header'
import { Footer } from '../../fuselage/theme/2024/ae/common/footer/footer'

import { ThemeBg } from "../../fuselage/theme/2023/ae/theme-bg"


import handleSeomaticMeta from '../../lib/seomatic'

function PurchasePass({ seomatic, entry }) {

	// console.log('entry:', entry )

	return (
		<>

			<Head>
				{ handleSeomaticMeta( seomatic ) } 
            </Head>

			<Header inverse />

			<ThemeBg />

			{ handleContentBlocks( entry.fhisContentBlocks, null, null, 'ae' ) }

			<Footer />
			<LenisScroller />

		</>
	)
}

PurchasePass.theme = 'ae-2024'



export async function getStaticProps() {

	const cmsData = await craftApolloClient().query({
        query: gql`
			query Page {
				entry(site: "${process.env.SITE_HANDLE_AE}", id: "10624") {
					... on ${process.env.SITE_HANDLE_AE}PurchasePass_${process.env.SITE_HANDLE_AE}PurchasePass_Entry {
						id
						slug
						title
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
							${QueryPartners}
							${Passes}
							${BizzaboPartners}
						}
						${QuerySEO}
					}
				}
			}
        `
    })

	return {
		props: { 
			seomatic: cmsData.data.entry.seomatic,
			entry: cmsData.data.entry,
		}
	}
}

export default PurchasePass


