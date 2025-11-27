import { gql } from "@apollo/client"
import craftApolloClient from "../../../pages/api/apollo"
import _ from 'lodash'

import { Fragment } from "react/jsx-runtime"

import Head from 'next/head'


import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/theme/2025/africa/common/header/header'
import { Footer } from '../../../fuselage/theme/2025/africa/common/footer/footer'

import { PartnerCategoryGrid, PartnerCategory, PartnerLogoGrid, PartnerLogo } from '../../../fuselage/theme/2024/sa/components/partner-logo/partner-logo'




function Partners({ entry }) {
	// console.log('cms partner entry:', entry)

	const partners = entry.ahifContentBlocks.find(block => block.id === "177599").partnerGroups
	// console.log('partners:', partners.partnerGroups)

	
	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/africa/favicon-16x16.png" sizes="16x16" />
            </Head>

			<Header compact/>



			{/* PARTNERS */}

			<section className='block pb-0 mt-lg'>
				<div className='container center formatted'>
					<p className='fs-1 fw-600'>2026 Sponsors &amp; Partners</p>
				</div>
			</section>

			<PartnerCategoryGrid>
				{
					partners.length &&
					partners.map( (category, index) => (
						<Fragment key={index}>
							<PartnerCategory key={index}>

								<div className="block pt-0">
									<h4 className='fs-5 fw-600 caps pb-xs'>{ category.title }</h4>
									<PartnerLogoGrid>
										{
											_.orderBy( category.partners, [(p) => p.title.toLowerCase()] ).map(partner => (
												<a key={partner.id} href={`/africa/partners/${partner.slug}`}>
													{
														partner.partnerLogo?.length &&
														<PartnerLogo src={ partner.partnerLogo[0].url } />
													}
												</a>
											))
										}
									</PartnerLogoGrid>
								</div>
								
							</PartnerCategory>

						</Fragment>
					))
				}
			</PartnerCategoryGrid>
				
			

			<Footer theme={{ footerBg: 'bg-white' }} />
			<LenisScroller />
		</>
	)
}

Partners.theme = 'africa'



export async function getStaticProps({ preview, previewData }) {

	const data = await craftApolloClient( preview, previewData ).query({
		query: gql`
			query Partners {
				entry(site: "ahif", id: "177588") {
					... on ahifPages_page_Entry {
						ahifContentBlocks {
							... on ahifContentBlocks_partnerGroups_BlockType {
								id
								partnerGroups {
									... on partnerGroups_default_Entry {
										id
										title
										partners {
											... on partners_partner_Entry {
												id
												title
												slug
												partnerLogo {
													id
													url
													width
													height
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		`
	})
	const pageData = data


	return { 
		props: { 
			entry: pageData.data.entry
		}
	}
}



export default Partners


