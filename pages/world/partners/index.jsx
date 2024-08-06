import _ from 'lodash'

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import Head from 'next/head'
import Link from 'next/link'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../../fuselage/theme/2024/world/common/footer/footer'

import { PartnerLogoGrid, PartnerLogo } from '../../../fuselage/theme/2024/sa/components/partner-logo/partner-logo'

import handleContentBlocks from "../../../lib/content-blocks"
import handleSeomaticMeta from "../../../lib/seomatic"

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
	QueryPartnerGroups,
	QueryTestimonials
} from "../../../graphql/queries"





function Partners({ seomatic, contentBlocks, partnerData }) {


	// console.log('swapcard partner data:', partnerData)
	// console.log('content-blocks:', contentBlocks)


	// programatically build array of unique types pulled from exhibitor data

	const allTypesArray = []
	partnerData.exhibitors.forEach( obj => {
		if ( obj.type && obj.typeLabel ) allTypesArray.push({id: obj.typeLabel.id, name: obj.type, size: ''})
	})
	// console.log('types:', _.uniqBy(allTypesArray, obj => obj.id))

	const typesArray = _.uniqBy(allTypesArray, obj => obj.id)

	

	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) }  
            </Head>

			<Header compact/>


			{/* PARTNERS */}

			<section className='block'>

				<div className='container center formatted'>
					<p className='fs-1 fw-600'>2024 Sponsors &amp; Partners</p>
				</div>

				<div className='container columns-1 gap-md center pt-md'>
					{
						partnerData &&
						partnerData.event.exhibitorsTypes.map( type => {

							const group = partnerData.exhibitors.filter( element => {
								if (element.typeLabel && element.typeLabel.id === type.id ) return element
							})

							if ( group.length > 0 ) {

								let category = typesArray.find( obj => obj.id === type.id )

								return (
									<div key={type.id}>
										<h4 className='fs-5 fw-600 c-secondary caps pb-xs'>{ category && category.name }</h4>
										<PartnerLogoGrid>
											{
												_.orderBy(group, [partner => partner.name?.toLowerCase()]).map(partner => (
													<a key={partner.id} href={`/world/partners/${partner.id}`}>
														<PartnerLogo 
															hero={{ url: partner.logoUrl }} 
															size={ category && category.size }
														/>
													</a>
												))
											}
										</PartnerLogoGrid>
									</div>
								)
							}
							
						})
					}
				</div>
				
			</section>



			<Footer theme={{ footerBg: 'bg-white' }} />
			<LenisScroller />
		</>
	)
}

Partners.theme = 'world-2024'



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
							${QueryTestimonials}
						}
					}
					${QuerySEO}
				}
			}
        `
    })


	const swapcardData = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query {
						event(id: "${process.env.SWAPCARD_EVENT_ID_AE}") {
							exhibitorsTypes {
								name
								id
								position
							}
						}
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_AE}", page:1, pageSize: 200) {
							id
							name
							logoUrl
							type
							typeLabel {
								id
								name
							}
						}
					}
				`,
				variables: {
					"eventId": process.env.SWAPCARD_EVENT_ID_AE,
					"page": 1
				}
			})
		}
	)

	// console.log(swapcardData)
	
	const partnerData =  await swapcardData.json()
	
	return {
		props: { 
			seomatic: cmsData.data.entry.seomatic,
			contentBlocks: cmsData.data.entry.fhisContentBlocks,
			partnerData: partnerData.data
		}
	}
}

export default Partners


