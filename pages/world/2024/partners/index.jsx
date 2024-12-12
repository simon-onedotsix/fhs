import _ from 'lodash'

import Head from 'next/head'

import { LenisScroller } from '../../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../../../fuselage/theme/2024/world/common/footer/footer'
import { PartnerLogoGrid, PartnerLogo } from '../../../../fuselage/theme/2024/sa/components/partner-logo/partner-logo'



import { bzPartners as partnerData } from "../../../../data/legacy/ae/2024/bz-partners"



function Partners() {

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
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>

			<Header compact/>



			{/* PARTNERS */}

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
										<h4 className='fs-5 fw-600 c-secondary caps pb-xs'>{ category && category.name }</h4>
										<PartnerLogoGrid>
											{
												_.orderBy(group, [partner => partner.name?.toLowerCase()]).map(partner => (
													<span key={partner.id} href={`/world/partners/${partner.id}`}>
														<PartnerLogo 
															hero={{ url: partner.logoUrl }} 
															size={ category && category.size }
														/>
													</span>
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



			<Footer theme={{ footerBg: 'bg-white' }} />
			<LenisScroller />
		</>
	)
}

Partners.theme = 'world-2024'




export default Partners


