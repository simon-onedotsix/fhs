import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Head from 'next/head'
import Script from "next/script"

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

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_WORLD as header } from '../../fixtures/nav'

import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'

import { ThemeBg } from "../../fuselage/theme/2023/ae/theme-bg"


import handleSeomaticMeta from '../../lib/seomatic'

function PurchasePass({ seomatic, entry }) {

	console.log('entry:', entry )

	return (
		<>

				<Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
				{handleSeomaticMeta(seomatic)} 
            </Head>

			<EventsBar site={'/world'} />
			<Header
				site={`/world`}
				handle={`World`}
				event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
			/>

			<ThemeBg />

			{ handleContentBlocks( entry.fhisContentBlocks, null, null, 'ae' ) }

			<Footer />
			<LenisScroller />

		</>
	)
}

PurchasePass.theme = 'world-2024'



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


