import _ from 'lodash'

import Head from 'next/head'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../../fuselage/theme/2025/sa/common/footer/footer'

import { PartnerCategoryGrid, PartnerCategory, PartnerLogoGrid, PartnerLogo } from '../../../fuselage/theme/2024/sa/components/partner-logo/partner-logo'




// hard-coded legacy data

import { partnerData } from '../../../data/legacy/sa/2025/sc-partners'


function Partners() {



	// programatically build array of unique types pulled from exhibitor data
	const allCategoriesArray = []
	partnerData.exhibitors.forEach( obj => {
		if ( obj.fields ) allCategoriesArray.push({id: obj.fields[0]?.id, name: obj.fields[0]?.translations[0].value, size: ''})
	})
	const categoriesArray = _.uniqBy(allCategoriesArray, obj => obj.id)

	// 2025 custom ordering
	const orderedCategories = []
	categoriesArray.forEach( category => {
		if (category.id === 'RmllbGRWYWx1ZV8yMzk2Njg1Nw==') orderedCategories.push({ ...category, priority: 1 })
		if (category.id === 'RmllbGRWYWx1ZV8yMzk2Njg2MQ==') orderedCategories.push({ ...category, priority: 2 })
		if (category.id === 'RmllbGRWYWx1ZV8yMzk2Njg2MA==') orderedCategories.push({ ...category, priority: 3 })
		if (category.id === 'RmllbGRWYWx1ZV8yNTg5Nzk4NA==') orderedCategories.push({ ...category, priority: 4 })
		if (category.id === 'RmllbGRWYWx1ZV8yMzk2Njg1OA==') orderedCategories.push({ ...category, priority: 5 })
		if (category.id === 'RmllbGRWYWx1ZV8yNDQ3NDE0MA==') orderedCategories.push({ ...category, priority: 6 })
		if (category.id === 'RmllbGRWYWx1ZV8yMzk3OTkyMw==') orderedCategories.push({ ...category, priority: 7 })
		if (category.id === 'RmllbGRWYWx1ZV8yNzQyNTY2Ng==') orderedCategories.push({ ...category, priority: 8 })
			
		if (category.id === 'RmllbGRWYWx1ZV8yNzQ0NjA5Nw==') orderedCategories.push({ ...category, priority: 9 })
		if (category.id === 'RmllbGRWYWx1ZV8yMzk3OTkyNQ==') orderedCategories.push({ ...category, priority: 10 })
		if (category.id === 'RmllbGRWYWx1ZV8yNzQ2MzE3OQ==') orderedCategories.push({ ...category, priority: 11 })
		if (category.id === 'RmllbGRWYWx1ZV8yNzA3NzQwMA==') orderedCategories.push({ ...category, priority: 12 })
		if (category.id === 'RmllbGRWYWx1ZV8yNjcwNDI5MQ==') orderedCategories.push({ ...category, priority: 13 })
		if (category.id === 'RmllbGRWYWx1ZV8yNjAzMTE4Mg==') orderedCategories.push({ ...category, priority: 14 })
		if (category.id === 'RmllbGRWYWx1ZV8yMzEwNjg2Mw==') orderedCategories.push({ ...category, priority: 15 })
	})


	console.log('swapcard partner data 2025:', partnerData)
	// console.log('content-blocks:', contentBlocks)
	// partnerData.exhibitors.forEach( ex => console.log( ex.typeLabel?.name))

	console.log('categories:', categoriesArray)
	console.log('orderedCategories:', orderedCategories)


	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
            </Head>

			<Header compact shim />


			{/* 2025 partners */}

			<section className='block bg-default'>

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
													<PartnerLogo 
														key={partner.id}
														src={partner.logoUrl ? partner.logoUrl : null } 
														size={ category && category.size }
													/>
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

			<Footer />
			<LenisScroller />
		</>
	)
}

Partners.theme = 'sa-2025'



export default Partners


