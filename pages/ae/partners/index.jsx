import Layout from '../../../fuselage/templates/ae/layout'

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import Head from 'next/head'

import { Header } from '../../../fuselage/global-ae/header/header'
import { Footer } from '../../../fuselage/global-ae/footer/footer'

import handleContentBlocks from "../../../lib/content-blocks"
import handleSeomaticMeta from "../../../lib/seomatic"
import { 
    QueryPageHeader,
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
	QueryCards,
    QueryImages,
	QueryOffsetCallout,
	BizzaboSpeakers,
	BizzaboPartners
} from "../../../graphql/queries"


function Partners({ seomatic, contentBlocks, partnerData }) {


	// console.log('bizzabo partner data:', partnerData)


	return (
		<div className='bg-white'>

			<Head>
				{ handleSeomaticMeta( seomatic ) }
            </Head>

			<Header compact shim />

			{ handleContentBlocks( contentBlocks, null, partnerData, '/ae' ) }

			<Footer />
		
		</div>
	)
}

Partners.getLayout = function getLayout( page ) {
	return (
	<Layout>
		{ page }
	</Layout>
	)
}




export async function getStaticProps() {

	const cmsData = await craftApolloClient().query({
        query: gql`
			query Page {
				entry(site: "${process.env.SITE_HANDLE_AE}", id: 11544) {
					title
					... on ${process.env.SITE_HANDLE_AE}Partners_${process.env.SITE_HANDLE_AE}Partners_Entry {
						id
						title
						slug
						${process.env.SITE_HANDLE}ContentBlocks {
							${QueryText}
							${QueryFlipFlops}
							${QueryFloaters}
							${QueryBillboards}
							${QueryBillboardSliders}
							${QueryImpactFigures}
							${QueryVideos}
							${QueryCards}
							${QueryProfileCarousel}
							${QueryForm}
							${BizzaboPartners}
						}
					}
					${QuerySEO}
				}
			}
        `
    })

	const partners = await fetch(`https://api.bizzabo.com/api/partners?eventId=${process.env.BIZZABO_EVENT_ID_AE}&size=200`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
	const partnerData = await partners.json()
	
	return {
		props: { 
			seomatic: cmsData.data.entry.seomatic,
			contentBlocks: cmsData.data.entry.fhisContentBlocks,
			partnerData: partnerData.content 
		}
	}
}

export default Partners


