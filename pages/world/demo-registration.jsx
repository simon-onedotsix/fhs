import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { Pass, PassPriceBands, SpecialPass, PassGrid, PassGridSectionHeading } from '../../fuselage/theme/2024/world/components/pass/pass'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Head from 'next/head'


import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'

import { TickIcon } from "../../fuselage/icons/tick"


import handleSeomaticMeta from '../../lib/seomatic'

function PurchasePass({ seomatic, entry }) {

	// console.log('entry:', entry )

	const PASS_DATA = [
		{
			"id": "",
			"passTitle": "Standard Pass",
			"passPriceIncreases": "true",
			"passDescription": "<p>Includes access to:</p><ul><li>All FHS conference tracks</li><li>Exhibition</li><li>Experiences (subject to availability)</li><li>Networking receptions</li></ul>",
			"passCurrency": "US$",
			"passPriceBands": [
				{
					"endDate": "2024-06-30T00:00:00+01:00",
					"startDate": "2024-05-01T00:00:00+01:00",
					"value": "2600"
				},
				{
					"endDate": "2024-08-31T00:00:00+01:00",
					"startDate": "2024-06-30T00:00:00+01:00",
					"value": "3000"
				},
				{
					"endDate": "2024-09-30T00:00:00+01:00",
					"startDate": "2024-08-31T00:00:00+01:00",
					"value": "3300"
				},
				{
					"endDate": "2024-10-02T00:00:00+01:00",
					"startDate": "2024-09-30T00:00:00+01:00",
					"value": "3600"
				}
			],
			"passQuantityRemaining": "67",
			"passButtonLabel": "Purchase Pass",
			"PassButtonUrl": "#"
		}
	]

	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) } 
            </Head>

			<Header compact />


			<section className="block">
				<PassGrid>
					{
						PASS_DATA &&
						PASS_DATA.map( pass => (
							<PassPriceBands
								key={pass.id}
								flash={null}
								title={pass.passTitle}
								priceIncreaseMessage={pass.passPriceIncreases}
								description={pass.passDescription}
								currency={pass.passCurrency}
								priceBands={pass.passPriceBands}
								quantityRemaining={pass.passQuantityRemaining}
								label={pass.passButtonLabel}
								href={pass.PassButtonUrl}
							/>
						))
					}
				</PassGrid>
			</section>

			<section className="block">

				<div className="container center pb-md">
					<p className="fs-1 fw-600 c-secondary">Purchase Pass</p>
				</div>

				<PassGrid>
					<Pass
						title={ "Standard Pass" }
						header={
							<>
								<p className="fs-6"><span className="fw-800 c-primary">Only available at this rate until 31 July</span> before the price increases to <strong>US$ 3000</strong></p>
							</>
						}
						cta={ <p className="fw-600">6 passes left at this rate</p> }
						description={ 
							<>
								<p>Includes access to:</p>
								<ul>
									<li>All FHS conference tracks</li>
									<li>Exhibition</li>
									<li>Experiences (subject to availability)</li>
									<li>Networking receptions</li>
								</ul>
							</> 
						}
						currency={ "US$" }
						value={ 2600 }
						from={ "2024-01-01T00:00:00+00:00" }
						to={ "2024-10-02T23:00:00+00:00" }
						label={ "Purchase Pass" }
						href={ "#" }
					/>
					
					<Pass
						flash={ <span className='fw-600 fs-6 c-white caps'><TickIcon/>&ensp;Best value!</span> }
						title={ "Premium Pass" }
						header={
							<>
								<p className="fs-6"><span className="fw-800 c-primary">Only available at this rate until 31 July</span> before the price increases to <strong>US$ 3200</strong></p>
							</>
						}
						cta={ <p className="fw-600">20 passes left at this rate</p> }
						description={ 
							<>
								<p>Includes access to:</p>
								<ul>
									<li><strong>Branded Residences Forum 2024</strong></li>
									<li>All FHS conference tracks</li>
									<li>Exhibition</li>
									<li>Experiences (subject to availability)</li>
									<li>Networking receptions</li>
								</ul>
							</> 
						}
						currency={ "US$" }
						value={ 2800 }
						from={ "2024-01-01T00:00:00+00:00" }
						to={ "2024-10-02T23:00:00+00:00" }
						label={ "Purchase Pass" }
						href={ "#" }
					/>
					
					<Pass
						title={ "Branded Residences Forum Pass" }
						header={
							<>
								<div className="center pb-xs">
									<p className="slug keyline fw-600">Provides access for one day only</p>
								</div>
								<p className="fs-6"><span className="fw-800 c-primary">Only available at this rate until 31 July</span> before the price increases to <strong>US$ 750</strong></p>

							</>
						}
						cta={ <p className="fw-600">35 passes left at this rate</p> }
						description={ 
							<>
								<p>Includes access to:</p>
								<ul>
									<li><strong>Branded Residences Forum 2024</strong></li>
								</ul>
								<p>Oct 2 (Day 3 only) access to:</p>
								<ul>
									<li>All FHS conference tracks</li>
									<li>Exhibition</li>
								</ul>
							</> 
						}
						currency={ "US$" }
						value={ 650 }
						from={ "2024-01-01T00:00:00+00:00" }
						to={ "2024-10-02T23:00:00+00:00" }
						label={ "Purchase Pass" }
						href={ "#" }
					/>
					
				</PassGrid>


				<div className="container center pt-lg pb-md">
					<p className="fs-1 fw-600 c-secondary">Special Passes</p>
				</div>

				<PassGrid>
					<SpecialPass
						title={ "Investor Pass" }
						header={
							<>
								<p className="fs-6">Exclusively for investors, subject to approval from organisers.</p>
							</>
						}
						currency={ "US$" }
						value={ 1500 }
						from={ "2024-01-01T00:00:00+00:00" }
						to={ "2024-10-02T23:00:00+00:00" }
						label={ "Apply Now" }
						href={ "#" }
					/>
					
					<SpecialPass
						title={ "Restauranteur Pass" }
						header={
							<>
								<p className="fs-6">Exclusively for restaurant owners/operators, subject to approval from organisers.</p>
							</>
						}
						currency={ "US$" }
						value={ 1500 }
						from={ "2024-01-01T00:00:00+00:00" }
						to={ "2024-10-02T23:00:00+00:00" }
						label={ "Purchase Pass" }
						href={ "#" }
					/>
					
					<SpecialPass
						title={ "Student Pass" }
						header={
							<>
								<p className="fs-6">Exclusively for students enrolled in a full-time hospitality-related programme. To apply for this pass, please reach out at <strong>hello@thebench.com</strong> with your Student ID and Proof of Enrollment.</p>

							</>
						}
						currency={ "US$" }
						value={ 750 }
						from={ "2024-01-01T00:00:00+00:00" }
						to={ "2024-10-02T23:00:00+00:00" }
					/>
					
				</PassGrid>
			</section>


			{/* { handleContentBlocks( entry.fhisContentBlocks, null, null, 'ae' ) } */}

			<Footer />
			{/* <LenisScroller /> */}

		</>
	)
}

PurchasePass.theme = 'world-2024'



// export async function getStaticProps() {

// 	const cmsData = await craftApolloClient().query({
//         query: gql`
// 			query Page {
// 				entry(site: "${process.env.SITE_HANDLE_AE}", id: "10624") {
// 					... on ${process.env.SITE_HANDLE_AE}PurchasePass_${process.env.SITE_HANDLE_AE}PurchasePass_Entry {
// 						id
// 						slug
// 						title
// 						${process.env.CONTENT_BLOCKS_HANDLE}ContentBlocks {
// 							${QueryText}
// 							${QueryFlipFlops}
// 							${QueryFloaters}
// 							${QueryBillboards}
// 							${QueryBillboardSliders}
// 							${QueryImpactFigures}
// 							${QueryVideos}
// 							${QueryProfileCarousel}
// 							${QueryForm}
// 							${QueryImages}
// 							${QueryPartners}
// 							${Passes}
// 							${BizzaboPartners}
// 						}
// 						${QuerySEO}
// 					}
// 				}
// 			}
//         `
//     })

// 	return {
// 		props: { 
// 			seomatic: cmsData.data.entry.seomatic,
// 			entry: cmsData.data.entry,
// 		}
// 	}
// }

export default PurchasePass


