import _ from 'lodash'
import Head from 'next/head'


import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header'
import { FHS_AFRICA as header } from '../../../fixtures/nav'
import { Footer } from '../../../fuselage/theme/2025/africa/common/footer/footer'

import { PartnerCategoryGrid, PartnerCategory, PartnerLogoGrid, PartnerLogo } from '../../../fuselage/theme/2024/sa/components/partner-logo/partner-logo'



function Partners({ partnerData }) {


	// programatically build array of unique types pulled from exhibitor data
	const allCategoriesArray = []
	partnerData.exhibitors?.forEach( obj => {
		if ( obj.fields ) allCategoriesArray.push({id: obj.fields[0]?.id, name: obj.fields[0]?.translations[0].value, size: ''})
	})
	const categoriesArray = _.uniqBy(allCategoriesArray, obj => obj.id)
	

	// 2026 custom ordering
	const orderedCategories = []
	categoriesArray.forEach( category => {
		if (category.id === 'RmllbGRWYWx1ZV8xNTAzNDczOQ==') orderedCategories.push({ ...category, priority: 0 })
		if (category.id === 'RmllbGRWYWx1ZV8yMjM5NDE1NA==') orderedCategories.push({ ...category, priority: 1 })
		if (category.id === 'RmllbGRWYWx1ZV8yNzM1MDgyNw==') orderedCategories.push({ ...category, priority: 3 })
		if (category.id === 'RmllbGRWYWx1ZV8yNzM1MDg0OA==') orderedCategories.push({ ...category, priority: 4 })
		if (category.id === 'RmllbGRWYWx1ZV8yOTk2MzQ4OQ==') orderedCategories.push({ ...category, priority: 5 })
		if (category.id === 'RmllbGRWYWx1ZV8yOTk2MzUxMA==') orderedCategories.push({ ...category, priority: 6 })
		if (category.id === 'RmllbGRWYWx1ZV8yNzM1MTMyNw==') orderedCategories.push({ ...category, priority: 7 })
		if (category.id === 'RmllbGRWYWx1ZV8yMzkxMjA4NA==') orderedCategories.push({ ...category, priority: 8 })
		if (category.id === 'RmllbGRWYWx1ZV8yNzM1MTUxNQ==') orderedCategories.push({ ...category, priority: 9 })
		if (category.id === 'RmllbGRWYWx1ZV8xOTE4ODg3Mg==') orderedCategories.push({ ...category, priority: 9 })
		if (category.id === 'RmllbGRWYWx1ZV8xOTE4ODgzNg==') orderedCategories.push({ ...category, priority: 9 })
		if (category.id === 'RmllbGRWYWx1ZV8zMDA0MTcxNw==') orderedCategories.push({ ...category, priority: 10 })
		
	})

	// console.log('swapcard partner data:', partnerData)
	// console.log('categories:', categoriesArray)
	// console.log('orderedCategories:', orderedCategories)
	


	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/africa/favicon-16x16.png" sizes="16x16" />
			</Head>
			
			<EventsBar site={'/africa'} />
			<Header
				site={`/africa`}
				handle={`Africa`}
				event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
			/>



			{/* PARTNERS */}

			<section className='block'>
				<div className='container center formatted'>
					<p className='fs-1 fw-600'>2026 Partners</p>
				</div>
				
				<div className='center'>
					{
						partnerData &&
						_.orderBy(orderedCategories, "priority").map( category => {
							const group = partnerData.exhibitors?.filter( partner => {
								if (partner.fields[0]?.id === category.id ) return partner
							})
							
							// console.log('group:', group)

							if ( group.length > 0 ) {
								return (
									<PartnerCategory key={category.id}>

										<h4 className='fs-5 fw-600 c-white caps pt-md pb-xs'>{category && category.name}</h4>
										<PartnerLogoGrid>
											{
												_.orderBy( group, [(p) => p.name.toLowerCase()] ).map( partner => (
													<a key={partner.id} href={`/africa/partners/${partner.id}`} style={{ textDecoration: 'none'}}>
														<PartnerLogo 
															src={partner.logoUrl ? partner.logoUrl : null} 
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
				</div>
			</section>
			

			<Footer theme={{ footerBg: 'bg-white' }} />
			<LenisScroller />
		</>
	)
}

Partners.theme = 'africa'



export async function getStaticProps({ preview, previewData }) {


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
						event(id: "${process.env.SWAPCARD_EVENT_ID_AFRICA_2026}") {
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
						exhibitors(eventId: "${process.env.SWAPCARD_EVENT_ID_AFRICA_2026}", page:1, pageSize: 200) {
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
					"eventId": process.env.SWAPCARD_EVENT_ID_AFRICA_2026,
					"page": 1
				}
			})
		}
	)

	console.log(swapcardData)
	
	const partnerData =  await swapcardData.json()


	return { 
		props: { 
			partnerData: partnerData.data
		}
	}
}



export default Partners


