import _ from 'lodash'

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import Head from 'next/head'
import Link from 'next/link'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../../fuselage/theme/2025/sa/common/footer/footer'

import handleContentBlocks from "../../../lib/content-blocks-sa"
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
	QueryPartnerGroups,
	QueryTestimonials
} from "../../../graphql/queries"

import { Quote, QuoteGrid } from '../../../fuselage/theme/2024/sa/components/quote/quote'
import { PartnerCategoryGrid, PartnerCategory, PartnerLogoGrid, PartnerLogo } from '../../../fuselage/theme/2024/sa/components/partner-logo/partner-logo'
import { VideoTestimonialCard } from '../video-testimonials'
import { CTAButton } from '../../../fuselage/theme/2025/sa/components/cta-button/cta-button'




function Partners({ seomatic, contentBlocks, partnerData, partnerData2025, videoTestimonials }) {


	// LEGACY !!!
	// programatically build array of unique types pulled from exhibitor data
	const allTypesArray = []
	partnerData.exhibitors.forEach( obj => {
		if ( obj.type && obj.typeLabel ) allTypesArray.push({id: obj.typeLabel.id, name: obj.type, size: ''})
	})
	const typesArray = _.uniqBy(allTypesArray, obj => obj.id)
	// END LEGACY !!!

	
	// 2025 (switched to SC custom field)
	// programatically build array of unique types pulled from exhibitor data
	const allCategoriesArray = []
	partnerData2025.exhibitors.forEach( obj => {
		if ( obj.fields ) allCategoriesArray.push({id: obj.fields[0]?.id, name: obj.fields[0]?.translations[0].value, size: ''})
	})
	const categoriesArray = _.uniqBy(allCategoriesArray, obj => obj.id)

	// 2025 custom ordering
	const orderedCategories = []
	categoriesArray.forEach( category => {
		if (category.id === 'RmllbGRWYWx1ZV8yMzk2Njg1Nw==') orderedCategories.push({ ...category, priority: 1 })
		if (category.id === 'RmllbGRWYWx1ZV8yNTg5Nzk4NA==') orderedCategories.push({ ...category, priority: 2 })
		if (category.id === 'RmllbGRWYWx1ZV8yMzk2Njg2MA==') orderedCategories.push({ ...category, priority: 3 })
		if (category.id === 'RmllbGRWYWx1ZV8yMzk2Njg1OA==') orderedCategories.push({ ...category, priority: 4 })
		if (category.id === 'RmllbGRWYWx1ZV8yNDQ3NDE0MA==') orderedCategories.push({ ...category, priority: 5 })
		if (category.id === 'RmllbGRWYWx1ZV8yMzk3OTkyMw==') orderedCategories.push({ ...category, priority: 6 })
		if (category.id === 'RmllbGRWYWx1ZV8yMzk3OTkyNQ==') orderedCategories.push({ ...category, priority: 7 })
		if (category.id === 'RmllbGRWYWx1ZV8yNjcwNDI5MQ==') orderedCategories.push({ ...category, priority: 8 })
		if (category.id === 'RmllbGRWYWx1ZV8yNjAzMTE4Mg==') orderedCategories.push({ ...category, priority: 9 })
		if (category.id === 'RmllbGRWYWx1ZV8yMzEwNjg2Mw==') orderedCategories.push({ ...category, priority: 10 })
	})


	// console.log('swapcard partner data 2025:', partnerData2025)
	// console.log('swapcard partner data 2024:', partnerData)
	// console.log('content-blocks:', contentBlocks)
	// partnerData.exhibitors.forEach( ex => console.log( ex.typeLabel?.name))
	// console.log('orderedCategories:', orderedCategories)
	console.log('categories:', categoriesArray)


	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) }  
            </Head>

			<Header compact shim />


			{
				videoTestimonials.length ?
					<section className="block bg-default">
						<div className="container columns-3 gap-md">
							{ videoTestimonials.map( entry => <VideoTestimonialCard key={entry.id} entry={entry} /> ) }
						</div>
						<div className="container center">
							<CTAButton
								href={'/sa/video-testimonials'}
								label={'More Testimonials'} 
							/>
						</div>
					</section>
				: null
			}



			{/* 2025 partners */}

			<section className='block bg-default'>

				<div className='container center formatted'>
					<p className='fs-1 fw-600'>2025 Sponsors &amp; Partners</p>
					<p><Link href="/sa/get-in-touch"><a className="button secondary">Become A Sponsor</a></Link></p>
				</div>

				<PartnerCategoryGrid>
					{
						partnerData2025 &&
						_.orderBy(orderedCategories, 'priority').map( category => {
							const group = partnerData2025.exhibitors.filter( partner => {
								if (partner.fields[0]?.id === category.id ) return partner
							})
							// console.log('group:', group)

							return (
								<PartnerCategory key={category.id}>

									<h4 className='fs-5 fw-600 c-accent caps pb-xs'>{ category && category.name }</h4>
									<PartnerLogoGrid>
										{
											_.orderBy(group, 'name').map(partner => (
												<a key={partner.id} href={`/sa/partners/${partner.id}`}>
													{
														partner.logoUrl &&
														<PartnerLogo 
															hero={{ url: partner.logoUrl }} 
															size={ category && category.size }
														/>
													}
												</a>
											))
										}
									</PartnerLogoGrid>
									
								</PartnerCategory>
							)
							
						})
					}
				</PartnerCategoryGrid>
				
			</section>


			<QuoteGrid>
				<Quote 
					quote={`“Great quality content and senior influential leadership under one roof!”`}
					name={`Imran Changezi`}
					title={`Executive Director Development`}
					company={`Hospitality, Diriyah Company`}
				/>
				<Quote 
					quote={`“Great insight into the Saudi Arabia tourism business development and valuable contacts. A very well-organised conference with ample opportunity to network.”`}
					name={`Elisabeth Ixmeier`}
					title={`Co-Founder and Managing Partner`}
					company={`Healing Hotels of the World`}
				/>
				<Quote 
					quote={`“Very informative, relevant to our business, engaging and necessary! It has become a must do.”`}
					name={`Najee Syriani`}
					title={`Corporate Vice President - Projects`}
					company={`Rotana`}
				/>
			</QuoteGrid>



			{/* LEGACY !!! – 2024 content */}

			

			{/* END LEGACY !!! – 2024 content */}

			

			<section className="block bg-default">
				<div className="container flex jc-center flex-wrap gap-xs">
					<Link href="/sa/2024/partners"><a className="button secondary">2024 Sponsors & Partners</a></Link> 
					<Link href="/sa/get-in-touch"><a className="button secondary">Get in Touch</a></Link>
				</div>
			</section>



			{/* { handleContentBlocks( contentBlocks, null, partnerData, '/sa' ) } */}


			<Footer />
			<LenisScroller />
		</>
	)
}

Partners.theme = 'sa-2025'



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
							${QueryPartnerGroups}
							${QueryTestimonials}
						}
					}
					${QuerySEO}
				}
				entries(site: "${process.env.SITE_HANDLE_SA}", section: "videoTestimonials", limit: 3) {
					... on videoTestimonials_videoTestimonial_Entry {
                        id
                        slug
                        title
                        videoShareUrl
                        fullName
                        jobTitle
                        organisation
                        testimonial
                    }
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
						event(id: "${process.env.SWAPCARD_EVENT_ID_SA}") {
							exhibitorsTypes {
								name
								id
								position
							}
						}
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_SA}", page:1, pageSize: 200) {
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
					"eventId": process.env.SWAPCARD_EVENT_ID_SA,
					"page": 1
				}
			})
		}
	)
	const partnerData =  await swapcardData.json()


	const swapcardData2025 = await fetch(
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
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_SA_2025}", page:1, pageSize: 200) {
							id
							name
							logoUrl
							fields {
								... on SelectField {
									id
									value
									definition {
										id
										name
									}
									translations {
										value
									}
								}
							}
						}
					}
				`,
				variables: {
					"eventId": process.env.SWAPCARD_EVENT_ID_SA_2025,
					"page": 1
				}
			})
		}
	)
	const partnerData2025 =  await swapcardData2025.json()
	
	return {
		props: { 
			seomatic: cmsData.data.entry.seomatic,
			contentBlocks: cmsData.data.entry.fhisContentBlocks,
			partnerData: partnerData.data,
			partnerData2025: partnerData2025.data,
			videoTestimonials: cmsData.data.entries
		}
	}
}

export default Partners


