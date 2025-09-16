import _ from 'lodash'

import Head from 'next/head'


import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/theme/2025/africa/common/header/header'
import { Footer } from '../../../fuselage/theme/2025/africa/common/footer/footer'

import { PartnerCategoryGrid, PartnerCategory, PartnerLogoGrid, PartnerLogo } from '../../../fuselage/theme/2024/sa/components/partner-logo/partner-logo'




function Partners({ partnerData }) {
	console.log('swapcard partner data:', partnerData)

	// use fieldDefinitions to automate partner categorisation (requires ID of the selectFieldDefinition used to tag categories inside SC studio)

	const swapcardPartnerGroups = partnerData.event.fieldDefinitions.find( arr => arr.id === "RmllbGREZWZpbml0aW9uXzI5NjgyNg==").optionsValues
	const partnersArray = []
	
	swapcardPartnerGroups.map( category => {
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
	


	
	// console.log('content-blocks:', contentBlocks)
	// console.log('vts:', videoTestimonials)
	// console.log('swapcard partner categories:', swapcardPartnerGroups )
	// console.log('PARTNERS ARRAY:', partnersArray)



	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>

			<Header compact/>



			{/* PARTNERS */}

			<section className='block pb-0'>
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
									<h4 className='fs-5 fw-600 caps pb-xs'>{ category.group.translations[0].value }</h4>
									<PartnerLogoGrid>
										{
											_.orderBy( category.partners, [(p) => p.name.toLowerCase()] ).map(partner => (
												<a key={partner.id} href={`/africa/partners/${partner.id}`}>
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

						</>
					))
				}
			</PartnerCategoryGrid>
				
			

			<Footer theme={{ footerBg: 'bg-white' }} />
			<LenisScroller />
		</>
	)
}

Partners.theme = 'africa'



export async function getStaticProps() {


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
						event(id: "${process.env.SWAPCARD_EVENT_ID_AFRICA_2025}") {
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
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_AFRICA_2025}", page:1, pageSize: 200) {
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
					"eventId": process.env.SWAPCARD_EVENT_ID_AFRICA_2025,
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
		}
	}
}

export default Partners


