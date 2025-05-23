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
import { VideoTestimonialCard } from '../video-testimonials'
import { FlagTicker, Flag } from "../../../fuselage/theme/2025/world/blocks/flag-ticker/flag-ticker"

import handleSeomaticMeta from "../../../lib/seomatic"
import { QuerySEO } from "../../../graphql/queries"


import { PAVILIONS_DATA } from '../country-pavilions-demo'



function Partners({ seomatic, partnerData, videoTestimonials }) {


	// use fieldDefinitions to automate partner categorisation (requires ID of the selectFieldDefinition used to tag categories inside SC studio)

	const swapcardPartnerGroups = partnerData.event.fieldDefinitions.find( arr => arr.id === "RmllbGREZWZpbml0aW9uXzc4MjgzNw==").optionsValues
	const partnersArray = []
	
	swapcardPartnerGroups.map(category => {
		const partnerGroup = []
		
		partnerData.exhibitors.map( partner => {
			partner.fields.map( field => {
				if ( field.id === category.id ) partnerGroup.push( partner )
			})
		})
		
		partnersArray.push(
			{
				group: category,
				partners: partnerGroup
			}
		)
	})
	


	// console.log('swapcard partner data:', partnerData)
	// console.log('content-blocks:', contentBlocks)
	// console.log('vts:', videoTestimonials)
	// console.log('swapcard partner categories:', swapcardPartnerGroups )
	// console.log('PARTNERS ARRAY:', partnersArray)



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

			<section className='block py-0'>
				<div className='container center formatted'>
					<p className='fs-1 fw-600'>2025 Sponsors &amp; Partners</p>
				</div>
			</section>

				<PartnerCategoryGrid>
					{
						partnersArray.length &&
						partnersArray.map( (category, index) => (
							<>
								<PartnerCategory key={index}>

									<div className="block pt-0">
										<h4 className='fs-5 fw-600 c-accent caps pb-xs'>{ category.group.translations[0].value }</h4>
										<PartnerLogoGrid>
											{
												_.orderBy( category.partners, [(p) => p.name.toLowerCase()] ).map(partner => (
													<a key={partner.id} href={`/world/partners/${partner.id}`}>
														{
															partner.logoUrl &&
															<PartnerLogo 
																hero={{ url: partner.logoUrl }} 
																label={ partner.id === "RXhoaWJpdG9yXzIxNzg3Nzg=" && 'China' }
															/>
														}
													</a>
												))
											}
										</PartnerLogoGrid>
									</div>
									
								</PartnerCategory>

								{/* inject after sponsors category */}
								{
									category.group.id === "RmllbGRWYWx1ZV8yNTY4ODM0Mw==" &&
									<PartnerCategory>
										<div className="block pt-0">
										<h4 className='fs-5 fw-600 c-accent caps pb-xs'>Country Pavilions</h4>
											<PartnerLogoGrid>
												{ 
													PAVILIONS_DATA.map( pavilion => (
														<div key={pavilion.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
															<Flag flagUrl={pavilion.flag[0].url} /> 
															<p className='fs-5 fw-500 c-primary mt-xxs'>{pavilion.country}</p>
														</div>
													)) 
												}
											</PartnerLogoGrid>
										</div>
									</PartnerCategory>

								}
							</>
						))
					}
				</PartnerCategoryGrid>
				
			



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


