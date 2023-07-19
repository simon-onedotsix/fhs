import Layout from '../../../fuselage/templates/sa/layout'

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import Head from 'next/head'

import { Header } from '../../../fuselage/global-sa/header/header'
import { Footer } from '../../../fuselage/global-sa/footer/footer'

import handleContentBlocks from "../../../lib/content-blocks"
import handleSeomaticMeta from '../../../lib/seomatic'

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
	QueryCards,
	QueryPartners,
	BizzaboPartners
} from "../../../graphql/queries"

import { GetAllBizzaboPartners, GetBizzaboPartners } from "../../../lib/bizzabo-partners"


function Partners({ seomatic, contentBlocks, partnerData }) {


	// console.log('bizzabo partner data:', partnerData)
	// console.log('content-blocks:', contentBlocks)


	return (
		<div className='bg-white'>

			<Head>
				{ handleSeomaticMeta( seomatic ) }  
            </Head>

			<Header compact shim />

			{ handleContentBlocks( contentBlocks, null, partnerData, '/sa' ) }

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
				entry(site: "${process.env.SITE_HANDLE_SA}", id: 63862) {
					title
					... on ${process.env.SITE_HANDLE_SA}Partners_${process.env.SITE_HANDLE_SA}Partners_Entry {
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
							${QueryPartners}
							${BizzaboPartners}
						}
					}
					${QuerySEO}
				}
			}
        `
    })

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
			seomatic: cmsData.data.entry.seomatic,
			contentBlocks: cmsData.data.entry.fhisContentBlocks,
			partnerData: partnerData.content 
		}
	}
}

export default Partners


