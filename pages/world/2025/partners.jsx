import { Fragment } from 'react/jsx-runtime'
import _ from 'lodash'

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import Head from 'next/head'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header'
import { FHS_WORLD as header } from '../../../fixtures/nav'
import { Footer } from '../../../fuselage/theme/2024/world/common/footer/footer'

import { PartnerCategoryGrid, PartnerCategory, PartnerLogoGrid, PartnerLogo } from '../../../fuselage/theme/2024/sa/components/partner-logo/partner-logo'
import { Flag } from "../../../fuselage/theme/2025/world/blocks/flag-ticker/flag-ticker"
import { QuerySEO, QueryCoutryPavilions } from "../../../graphql/queries"

import { partnerData, flags } from "../../../data/legacy/ae/2025/sc-partners"

export default function Partners() {

	const CUSTOM_ORDERING = [
		{ id: 'RmllbGRWYWx1ZV8yNjEwNTYyOA==', value: 'host-sponsor' },
		{ id: 'RmllbGRWYWx1ZV8yODY1NTcyOQ==', value: 'strategic-partner' },
		{ id: 'RmllbGRWYWx1ZV8yNjEwNTYxNg==', value: 'knowledge-partner' },
		{ id: 'RmllbGRWYWx1ZV8yODY1NTcyOA==', value: 'headline-sponsor' },
		{ id: 'RmllbGRWYWx1ZV8yODY1NTcyNw==', value: 'sponsor' },
		{ id: 'RmllbGRWYWx1ZV8yNTg5NzkyNg==', value: 'exhibitor' },
		{ id: 'RmllbGRWYWx1ZV8yNzc0MTg0MA==', value: 'tech-pavilion' },
		{ id: 'RmllbGRWYWx1ZV8yODc1NTU5MA==', value: 'startup-sponsor' },
		{ id: 'RmllbGRWYWx1ZV8yNjY5MzQ2NQ==', value: 'supporter' },
		{ id: 'RmllbGRWYWx1ZV8yODY1NTczMA==', value: 'media-partner' }
	]


	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>

			<EventsBar site={'/world'} />
            <Header
				site={`/world`}
                handle={`World`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />




			{/* PARTNERS */}

			<section className='block pb-0'>
				<div className='container center formatted'>
					<p className='fs-1 fw-600'>2025 Sponsors &amp; Partners</p>
				</div>
			</section>

				<PartnerCategoryGrid>
					{
						partnerData.length &&
						_.orderBy(partnerData, x => _.findIndex( CUSTOM_ORDERING, y => x.group.id === y.id )).map( (category, index) => (
							<Fragment key={index}>
								<PartnerCategory key={index}>

									<div className="block pt-0">
										<h4 className='fs-5 fw-600 c-accent caps pb-xs'>{category.group.translations[0].value}</h4>
										<PartnerLogoGrid>
											{
												_.orderBy( category.partners, [(p) => p.name.toLowerCase()] ).map(partner => (
													<span key={partner.id}>
														{
															partner.logoUrl &&
															<PartnerLogo 
																src={ partner.logoUrl } 
																label={ partner.id === "RXhoaWJpdG9yXzIxNzg3Nzg=" && 'China' }
															/>
														}
													</span>
												))
											}
										</PartnerLogoGrid>
									</div>
									
								</PartnerCategory>

								{/* inject after sponsors category */}
								{
									category.group.id === "RmllbGRWYWx1ZV8yODY1NTcyNw==" &&
									<PartnerCategory>
										<div className="block pt-0">
										<h4 className='fs-5 fw-600 c-accent caps pb-xs'>Country Pavilions</h4>
											<PartnerLogoGrid>
												{ 
													flags.map( (pavilion, index) => (
														<div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
															<Flag flagUrl={pavilion.flag[0].url} /> 
															<p className='fs-5 fw-500 c-primary mt-xxs'>{pavilion.country}</p>
														</div>
													)) 
												}
											</PartnerLogoGrid>
										</div>
									</PartnerCategory>

								}
							</Fragment>
						))
					}
				</PartnerCategoryGrid>
				
			



			<Footer theme={{ footerBg: 'bg-white' }} />
			<LenisScroller />
		</>
	)
}

Partners.theme = 'world-2024'