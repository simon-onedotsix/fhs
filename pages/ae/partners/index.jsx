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
	QueryPartnerGroups,
    QueryImages,
	QueryOffsetCallout
} from "../../../graphql/queries"


function Partners({ seomatic, contentBlocks }) {


	// console.log('content-blocks:', contentBlocks)

	return (
		<div className='bg-white'>

			<Head>
				{ handleSeomaticMeta( seomatic ) }
            </Head>

			<Header compact shim theme={{ 
                primary: 'var(--primary)', 
                secondary: 'var(--secondary)', 
                text: 'var(--primary)',
                buttons: 'var(--primary)',
                buttonText: 'white',
                headerBg: '#ffffffee',
                overlayBg: 'var(--primary)',
            }} />

			{ handleContentBlocks( contentBlocks, null, null, '/ae' ) }

			<Footer theme={{ footerBg: 'bg-white-90' }} />
		
		</div>
	)
}

Partners.theme = 'ae-2023'



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
							${QueryPartnerGroups}
						}
					}
					${QuerySEO}
				}
			}
        `
    })

	
	return {
		props: { 
			seomatic: cmsData.data.entry.seomatic,
			contentBlocks: cmsData.data.entry.fhisContentBlocks
		}
	}
}

export default Partners


