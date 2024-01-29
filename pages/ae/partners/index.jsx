import _ from 'lodash'

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import Head from 'next/head'
import Link from 'next/link'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/global-ae/header/header'
import { Footer } from '../../../fuselage/global-ae/footer/footer'


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
	QueryPartnerGroups
} from "../../../graphql/queries"

import { PartnerLogoGrid, PartnerLogo } from '../../../fuselage/theme/2024/sa/components/partner-logo/partner-logo'




function Partners({ seomatic, contentBlocks, partnerData }) {


	// console.log('swapcard partner data:', partnerData)
	// console.log('content-blocks:', contentBlocks)


	// programatically build array of unique types pulled from exhibitor data

	const allTypesArray = []
	partnerData.exhibitors.forEach( obj => {
		if ( obj.type && obj.typeLabel ) allTypesArray.push({id: obj.typeLabel.id, name: obj.type, size: ''})
	})
	console.log('types:', _.uniqBy(allTypesArray, obj => obj.id))

	const typesArray = _.uniqBy(allTypesArray, obj => obj.id)


	
	// hard-coded array of exhibitor types

	// const typesArray = [
	// 	{ id: "RmllbGRWYWx1ZV8xNTAzNDczOQ==", name: "Host Sponsor", size: "lg"},
	// 	{ id: "RmllbGRWYWx1ZV8xNTAzNDc0Mw==", name: "Platinum Sponsor", size: ""},
	// 	{ id: "RmllbGRWYWx1ZV8yMDg1NjkwMg==", name: "Emerald Sponsor", size: ""},
	// 	{ id: "RmllbGRWYWx1ZV8xNTAzNDczMg==", name: "Gold Sponsor", size: ""},
	// 	{ id: "RmllbGRWYWx1ZV8xNTAzNDcyNw==", name: "Silver Sponsor", size: ""},
	// 	{ id: "RmllbGRWYWx1ZV8xNTAzNDczMQ==", name: "GRIF - Data Partner", size: ""},
	// 	{ id: "RmllbGRWYWx1ZV8yMDc3MjE1MQ==", name: "Culinary & Concept Tour Partners", size: ""}
	// ]

	

	return (
		<>

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
										<h4 className='fs-5 fw-600 c-accent caps pb-xs'>{ category && category.name }</h4>
										<PartnerLogoGrid>
											{
												_.orderBy(group, 'name').map(partner => (
													<a key={partner.id} href={`/ae/partners-2024/${partner.id}`}>
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


			{/* <section className="block pt-0">
				<div className="container center">

					<p><Link href="/sa/2023/partners"><a className="button secondary">2023 Sponsors & Partners</a></Link> <Link href="/sa/get-in-touch"><a className="button secondary">Get in Touch</a></Link></p>

				</div>
			</section> */}



			{/* { handleContentBlocks( contentBlocks, null, partnerData, '/ae' ) } */}


			<Footer />
			<LenisScroller />
		</>
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
							websiteUrl
							description
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


