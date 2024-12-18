import _ from 'lodash'

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import Head from 'next/head'
import Link from 'next/link'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../../fuselage/theme/2024/world/common/footer/footer'

import { PartnerCategoryGrid, PartnerCategory, PartnerLogoGrid, PartnerLogo } from '../../../fuselage/theme/2024/sa/components/partner-logo/partner-logo'
import { Button } from '../../../fuselage/theme/2024/world/components/button/button'

import handleSeomaticMeta from "../../../lib/seomatic"

import { QuerySEO } from "../../../graphql/queries"

import { VideoTestimonialCard } from '../video-testimonials'





function Partners({ seomatic, partnerData, videoTestimonials }) {


	// console.log('swapcard partner data:', partnerData)
	// console.log('content-blocks:', contentBlocks)
	// console.log('vts:', videoTestimonials)


	// programatically build array of unique types pulled from exhibitor data
	const allCategoriesArray = []
	partnerData.exhibitors.forEach( obj => {
		if ( obj.fields ) allCategoriesArray.push({id: obj.fields[0]?.id, name: obj.fields[0]?.translations[0].value, size: ''})
	})
	const categoriesArray = _.uniqBy(allCategoriesArray, obj => obj.id)

	// 2025 custom ordering
	const orderedCategories = []
	categoriesArray.forEach( category => {
		if (category.id === 'RmllbGRWYWx1ZV8yNTY4ODMxNQ==') orderedCategories.push({ ...category, priority: 1 })
		if (category.id === 'RmllbGRWYWx1ZV8yNTg5MzU2Ng==') orderedCategories.push({ ...category, priority: 2 })
		if (category.id === 'RmllbGRWYWx1ZV8yNTY4ODM0Ng==') orderedCategories.push({ ...category, priority: 3 })
		if (category.id === 'RmllbGRWYWx1ZV8yNTY4ODM0Mw==') orderedCategories.push({ ...category, priority: 4 })
		if (category.id === 'RmllbGRWYWx1ZV8yNTg5NzkyNg==') orderedCategories.push({ ...category, priority: 5 })
	})



	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) }  
            </Head>

			<Header compact/>


			{
				videoTestimonials &&
				<section className="block bg-default">
					<div className="container columns-3 gap-md">
						{ videoTestimonials.map( entry => <VideoTestimonialCard key={entry.id} entry={entry} /> ) }
					</div>
					<div className="container center">
						<Button
							href={'/world/video-testimonials'}
							decal={`fs-5 fw-600`} 
							theme={{ background: `var(--secondary-1)`, hover: `white`, color: `var(--primary)`}} 
						>
							More Testimonials
						</Button>
					</div>
				</section>
			}


			{/* PARTNERS */}

			<section className='block'>

				<div className='container center formatted'>
					<p className='fs-1 fw-600'>2025 Sponsors &amp; Partners</p>
				</div>

				<PartnerCategoryGrid>
					{
						partnerData &&
						_.orderBy(orderedCategories, 'priority').map( category => {
							const group = partnerData.exhibitors.filter( partner => {
								if (partner.fields[0]?.id === category.id ) return partner
							})
							// console.log('group:', group)

							return (
								<PartnerCategory key={category.id}>

									<h4 className='fs-5 fw-600 c-accent caps pb-xs'>{ category && category.name }</h4>
									<PartnerLogoGrid>
										{
											_.orderBy(group, 'name').map(partner => (
												<a key={partner.id} href={`/world/partners/${partner.id}`}>
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
					}
					${QuerySEO}
				}
				entries(site: "${process.env.SITE_HANDLE_AE}", section: "videoTestimonials", limit: 3) {
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
						event(id: "${process.env.SWAPCARD_EVENT_ID_AE_2025}") {
							exhibitorsTypes {
								name
								id
								position
							}
						}
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_AE_2025}", page:1, pageSize: 200) {
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
					"eventId": process.env.SWAPCARD_EVENT_ID_AE_2025,
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
			partnerData: partnerData.data,
			videoTestimonials: cmsData.data.entries
		}
	}
}

export default Partners


