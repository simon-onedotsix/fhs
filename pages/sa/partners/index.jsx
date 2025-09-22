import _ from 'lodash'

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import Head from 'next/head'
import Link from 'next/link'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../../fuselage/theme/2025/sa/common/footer/footer'


import { Quote, QuoteGrid } from '../../../fuselage/theme/2024/sa/components/quote/quote'
import { PartnerCategoryGrid, PartnerCategory, PartnerLogoGrid, PartnerLogo } from '../../../fuselage/theme/2024/sa/components/partner-logo/partner-logo'
import { VideoTestimonialCard } from '../video-testimonials'
import { CTAButton } from '../../../fuselage/theme/2025/sa/components/cta-button/cta-button'




function Partners({ partnerData, videoTestimonials }) {



	// programatically build array of unique types pulled from exhibitor data
	const allCategoriesArray = []
	partnerData.exhibitors?.forEach( obj => {
		if ( obj.fields ) allCategoriesArray.push({id: obj.fields[0]?.id, name: obj.fields[0]?.translations[0].value, size: ''})
	})
	const categoriesArray = _.uniqBy(allCategoriesArray, obj => obj.id)

	// 2025 custom ordering
	const orderedCategories = []
	categoriesArray.forEach( category => {
		if (category.id === 'RmllbGRWYWx1ZV8yNzc4OTQxNw==') orderedCategories.push({ ...category, priority: 0 })
		if (category.id === 'RmllbGRWYWx1ZV8yNzc4OTQ0Mw==') orderedCategories.push({ ...category, priority: 1 })
		if (category.id === 'RmllbGRWYWx1ZV8yNzc4OTQ0MQ==') orderedCategories.push({ ...category, priority: 3 })
		if (category.id === 'RmllbGRWYWx1ZV8yNzc4OTQ0Mg==') orderedCategories.push({ ...category, priority: 2 })
		if (category.id === 'RmllbGRWYWx1ZV8yNzc4OTQyMQ==') orderedCategories.push({ ...category, priority: 4 })
		if (category.id === 'RmllbGRWYWx1ZV8yNzc4OTQyMg==') orderedCategories.push({ ...category, priority: 5 })
	})


	// console.log('swapcard partner data 2026:', partnerData)
	console.log('categories:', categoriesArray)
	console.log('orderedCategories:', orderedCategories)


	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
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
					<p className='fs-1 fw-600'>2026 Sponsors &amp; Partners</p>
					<p><Link href="/sa/become-a-sponsor#form"><a className="button secondary">Become A Sponsor</a></Link></p>
				</div>

				<PartnerCategoryGrid>
					{
						partnerData &&
						_.orderBy(orderedCategories, 'priority').map( category => {
							const group = partnerData.exhibitors?.filter( partner => {
								if (partner.fields[0]?.id === category.id ) return partner
							})
							
							// console.log('group:', group)

							if ( group.length > 0 ) {

								// console.log(`GROUP: ${category.id} - ${category.name}`)

								let specialCategories = [
									'RmllbGRWYWx1ZV8yNTg5Nzk4NA==',
									'RmllbGRWYWx1ZV8yMzk2Njg2MA==',
									'RmllbGRWYWx1ZV8yMzk2Njg2MQ=='
								]

								return (
									<PartnerCategory key={category.id} width={ specialCategories.includes( category.id ) ? 1 : null }>

										<h4 className='fs-5 fw-600 c-accent caps pb-xs'>{ category && category.name }</h4>
										<PartnerLogoGrid>
											{
												_.orderBy( group, [(p) => p.name.toLowerCase()] ).map( partner => (
													<a key={partner.id} href={`/sa/partners/${partner.id}`}>
														<PartnerLogo 
															src={partner.logoUrl ? partner.logoUrl : null} 
															size={ category && category.size }
														/>
													</a>
												))
											}
										</PartnerLogoGrid>
										
									</PartnerCategory>
								)
							}
							
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


			

			<section className="block bg-default">
				<div className="container flex jc-center flex-wrap gap-xs">
					<Link href="/sa/2025/partners"><a className="button secondary">2025 Sponsors & Partners</a></Link> 
					<Link href="/sa/become-a-sponsor#form"><a className="button secondary">Get in Touch</a></Link>
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
						event(id: "${process.env.SWAPCARD_EVENT_ID_SA_2026}") {
							fieldDefinitions {
								... on SelectFieldDefinition {
									id
									name
									optionsValues {
										id
										value
										translations {
											language
											value
										}
									}
								}
							}
						}
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_SA_2026}", page:1, pageSize: 200) {
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
					"eventId": process.env.SWAPCARD_EVENT_ID_SA_2026,
					"page": 1
				}
			})
		}
	)
	const partnerData =  await swapcardData.json()

	
	return {
		props: { 
			partnerData: partnerData.data,
			videoTestimonials: cmsData.data.entries
		}
	}
}

export default Partners


