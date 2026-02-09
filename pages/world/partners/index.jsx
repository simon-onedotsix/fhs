import { Fragment } from 'react/jsx-runtime'
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
import { QuerySEO, QueryCoutryPavilions } from "../../../graphql/queries"



function Partners({ partnerData, videoTestimonials, flags }) {

	const {countryPavilions} = flags.fhisContentBlocks.find( block => block.__typename === 'fhisContentBlocks_countryPavilions_BlockType' )

	console.log('country pavilions:', countryPavilions)
	

	// use fieldDefinitions to automate partner categorisation (requires ID of the selectFieldDefinition used to tag categories inside SC studio)

	const swapcardPartnerGroups = partnerData.event.fieldDefinitions.find( arr => arr.id === "RmllbGREZWZpbml0aW9uXzg1NTI0Ng==").optionsValues
	const partnersArray = []
	
	swapcardPartnerGroups.map(category => {
		const partnerGroup = []
		
		partnerData.exhibitors.map( partner => {
			partner.fields.map( field => {
				if ( field.id === category.id ) partnerGroup.push( partner )
			})
		})
		
		if (partnerGroup.length) {
			partnersArray.push(
				{
					group: category,
					partners: partnerGroup
				}
			)
		}
	})
	


	console.log('swapcard partner data:', partnerData)
	// console.log('content-blocks:', contentBlocks)
	// console.log('vts:', videoTestimonials)
	console.log('swapcard partner categories:', swapcardPartnerGroups )
	// console.log('PARTNERS ARRAY:', partnersArray)
	// console.log('flags:', countryPavilions)


	const CUSTOM_ORDERING = [
		
		{ id: 'RmllbGRWYWx1ZV8yOTM0Mzg2Ng==', value: 'strategic-partner' },
		{ id: 'RmllbGRWYWx1ZV8yOTM0Mzg2Nw==', value: 'headline-sponsor' },
		{ id: 'RmllbGRWYWx1ZV8yOTM0Mzg2OA==', value: 'country-pavilion' },
		{ id: 'RmllbGRWYWx1ZV8yOTM0Mzg2NA==', value: 'sponsor' },
		{ id: 'RmllbGRWYWx1ZV8yOTM0Mzg2Mw==', value: 'exhibitor' },
		{ id: 'RmllbGRWYWx1ZV8yOTM0Mzg2OQ==', value: 'brf-sponsor' },

	]


	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
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
					<p className='fs-1 fw-600'>2026 Sponsors &amp; Partners</p>
				</div>
			</section>

				<PartnerCategoryGrid>
					{
						partnersArray.length &&
						_.orderBy(partnersArray, x => _.findIndex(CUSTOM_ORDERING, y => x.group.id === y.id)).map((category, index) => {

							// replace SC pavilions category with CMS data
							if (category.group.id === "RmllbGRWYWx1ZV8yOTM0Mzg2OA==") {
								return (
									<PartnerCategory key={category.id}>
										<div className="block pt-0">
										<h4 className='fs-5 fw-600 c-accent caps pb-xs'>Country Pavilions</h4>
											<PartnerLogoGrid>
												{ 
													countryPavilions.map( pavilion => (
														<div key={pavilion.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
															<Flag flagUrl={pavilion.flag[0].url} /> 
															<p className='fs-5 fw-500 c-primary mt-xxs'>{pavilion.country}</p>
														</div>
													)) 
												}
											</PartnerLogoGrid>
										</div>
									</PartnerCategory>
								)
							}

							return (
								<PartnerCategory key={index}>
									<div className="block pt-0">
										<h4 className='fs-5 fw-600 c-accent caps pb-xs'>{category.group.translations[0].value}</h4>
										<PartnerLogoGrid>
											{
												_.orderBy( category.partners, [(p) => p.name.toLowerCase()] ).map(partner => (
													<a key={partner.id} href={`/world/partners/${partner.id}`}>
														{
															partner.logoUrl &&
															<PartnerLogo 
																src={ partner.logoUrl } 
																label={ partner.id === "RXhoaWJpdG9yXzIzOTI3MTI=" && 'China' }
															/>
														}
													</a>
												))
											}
										</PartnerLogoGrid>
									</div>
								</PartnerCategory>
							)
						})
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
			query Data {
				entry(site: "${process.env.SITE_HANDLE_AE}", id: 11544) {
					title
					... on ${process.env.SITE_HANDLE_AE}Partners_${process.env.SITE_HANDLE_AE}Partners_Entry {
						id
						title
						slug
					}
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
				flags: entry(site: "${process.env.SITE_HANDLE_AE}", id: "271354") {
					${process.env.CONTENT_BLOCKS_HANDLE}ContentBlocks {
						${QueryCoutryPavilions}
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
						event(id: "${process.env.SWAPCARD_EVENT_ID_AE_2026}") {
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
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_AE_2026}", page:1, pageSize: 200) {
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
					"eventId": process.env.SWAPCARD_EVENT_ID_AE_2026,
					"page": 1
				}
			})
		}
	)

	console.log(swapcardData)
	
	const partnerData =  await swapcardData.json()
	
	return {
		props: { 
			partnerData: partnerData.data,
			videoTestimonials: cmsData.data.entries,
			flags: cmsData.data.flags
		}
	}
}

export default Partners


