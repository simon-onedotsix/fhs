
import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Head from 'next/head'
import Link from "next/link"

import { Button } from "../../fuselage/theme/2024/sa/components/button/button"

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

import handleContentBlocks from "../../lib/content-blocks-sa"

import { Header } from '../../fuselage/theme/2024/sa/globals/header/header'
import { Footer } from "../../fuselage/theme/2024/sa/globals/footer/footer"

import { ThemeBg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-bg'


import handleSeomaticMeta from '../../lib/seomatic'

function PurchasePass({ seomatic, entry }) {

	// console.log('entry:', entry )

	return (
		<>

			<Head>
				{ handleSeomaticMeta( seomatic ) } 
            </Head>
			<Header compact shim />

			<ThemeBg />
			
			<section className="block bg-default pb-0">
				<div className="container">
					<p className='fs-1 fw-600'>Purchase Pass</p>
					<p className="mt-sm"><Button href={'/sa/travel-guide'} decal={'fw-600'}>Travel Guide</Button></p>
				</div>
			</section>

			{ handleContentBlocks( entry.fhisContentBlocks, null, null, 'sa' ) }

			<Footer />
			<LenisScroller />

		</>
	)
}

PurchasePass.theme = 'sa-2024'



export async function getStaticProps() {

	const cmsData = await craftApolloClient().query({
        query: gql`
			query Page {
				entry(site: "${process.env.SITE_HANDLE_SA}", id: "63865") {
					... on ${process.env.SITE_HANDLE_SA}PurchasePass_${process.env.SITE_HANDLE_SA}PurchasePass_Entry {
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


