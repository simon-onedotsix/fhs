import _ from 'lodash'

import Head from 'next/head'
import Link from 'next/link'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header'
import { FHS_SA as header } from '../../../fixtures/nav'
import { Footer } from '../../../fuselage/theme/2025/sa/common/footer/footer'

import { Quote, QuoteGrid } from '../../../fuselage/theme/2024/sa/components/quote/quote'
import { PartnerCategoryGrid, PartnerCategory, PartnerLogoGrid, PartnerLogo } from '../../../fuselage/theme/2024/sa/components/partner-logo/partner-logo'




// hard-coded legacy data

import { partnerData } from '../../../data/legacy/sa/2024/sc-partners'




function Partners() {


	// console.log('swapcard partner data:', partnerData)
	// console.log('content-blocks:', contentBlocks)

	partnerData.exhibitors.forEach( ex => console.log( ex.typeLabel?.name))

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
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
            </Head>

            <EventsBar site={'/sa'} />
            <Header
				site={`/sa`}
                handle={`Saudi Arabia`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />

			


			<section className='block'>

				<div className='container center formatted'>
					<p className='fs-1 fw-600'>2024 Partners</p>
				</div>

				<PartnerCategoryGrid>
					{
						partnerData &&
						partnerData.event.exhibitorsTypes.map( type => {

							const group = partnerData.exhibitors.filter( element => {
								if (element.typeLabel && element.typeLabel.id === type.id ) return element
							})

							if ( group.length > 0 ) {

								let category = typesArray.find( obj => obj.id === type.id )

								console.log(`GROUP: ${category.id} - ${category.name}`)

								let specialCategories = [
									'RmllbGRWYWx1ZV8yMjM5NDE1NA==',
									'RmllbGRWYWx1ZV8yMjM5NDE1Mg==',
									'RmllbGRWYWx1ZV8yMjM5NDE0OQ=='
								]

								return (
									<PartnerCategory key={type.id} width={ specialCategories.includes( category.id ) ? 1 : null }>

										<h4 className='fs-5 fw-600 c-accent caps pb-xs'>{ category && category.name }</h4>
										<PartnerLogoGrid>
											{
												_.orderBy(group, 'name').map(partner => (
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



			<Footer />
			<LenisScroller />
		</>
	)
}

Partners.theme = 'sa-2025'



export default Partners


