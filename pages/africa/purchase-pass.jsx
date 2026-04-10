import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Head from "next/head"

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_AFRICA as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2025/africa/common/footer/footer'

import handleContentBlocks from "../../lib/content-blocks-africa"

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
    QueryPageHeader,
    QueryCards,
    QueryOffsetCallout,
    QueryDividers,
    QuerySEO,
    QueryPartners,
	QueryImages,
	Passes,
} from "../../graphql/queries-africa"

import handleSeomaticMeta from '../../lib/seomatic'

function PurchasePass({ seomatic, entry }) {

	console.log('entry:', entry )

	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) } 
            </Head>

            <EventsBar site={'/africa'} />
            <Header
                site={`/africa`}
                handle={`Africa`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />

			{/* <div style={{ height: `var(--space-lg)`}} /> */}

			{ handleContentBlocks( entry.ahifContentBlocks, null, null, null ) }

			<Footer />
			<LenisScroller />

		</>
	)
}

PurchasePass.theme = 'africa'



export async function getStaticProps() {

	const cmsData = await craftApolloClient().query({
        query: gql`
			query Page {
				entry(site: "${process.env.SITE_HANDLE_AFRICA}", id: "15798") {
					... on ${process.env.SITE_HANDLE_AFRICA}PurchasePass_${process.env.SITE_HANDLE_AFRICA}PurchasePass_Entry {
						id
						slug
						title
						ahifContentBlocks {
							${QueryPageHeader}
							${QueryText}
							${Passes}
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


