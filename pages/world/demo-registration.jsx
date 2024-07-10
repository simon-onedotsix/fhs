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
			"id": "45",
			"passTitle": "Standard Pass",
			"passFlash": "",
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
		},
		{
			"id": "46",
			"passTitle": "Premium Pass",
			"passFlash": "Best value!",
			"passPriceIncreases": "true",
			"passDescription": "<p>Includes access to:</p><ul><li><strong>Branded Residences Forum 2024</strong></li><li>All FHS conference tracks</li><li>Exhibition</li><li>Experiences (subject to availability)</li><li>Networking receptions</li></ul>",
			"passCurrency": "US$",
			"passPriceBands": [
				{
					"endDate": "2024-06-30T00:00:00+01:00",
					"startDate": "2024-05-01T00:00:00+01:00",
					"value": "2800"
				},
				{
					"endDate": "2024-08-31T00:00:00+01:00",
					"startDate": "2024-06-30T00:00:00+01:00",
					"value": "3200"
				},
				{
					"endDate": "2024-09-30T00:00:00+01:00",
					"startDate": "2024-08-31T00:00:00+01:00",
					"value": "3500"
				},
				{
					"endDate": "2024-10-02T00:00:00+01:00",
					"startDate": "2024-09-30T00:00:00+01:00",
					"value": "3800"
				}
			],
			"passQuantityRemaining": "34",
			"passButtonLabel": "Purchase Pass",
			"PassButtonUrl": "#"
		},
		{
			"id": "47",
			"passTitle": "Branded Residences Forum Pass",
			"passFlash": "",
			"passPriceIncreases": "true",
			"passDescription": "<p>Includes <strong>single day access</strong> to:</p><ul><li><strong>Branded Residences Forum 2024</strong></li><li>All FHS conference tracks (Oct 2 only)</li><li>Exhibition</li></ul>",
			"passCurrency": "US$",
			"passPriceBands": [
				{
					"endDate": "2024-06-30T00:00:00+01:00",
					"startDate": "2024-05-01T00:00:00+01:00",
					"value": "650"
				},
				{
					"endDate": "2024-08-31T00:00:00+01:00",
					"startDate": "2024-06-30T00:00:00+01:00",
					"value": "750"
				},
				{
					"endDate": "2024-09-30T00:00:00+01:00",
					"startDate": "2024-08-31T00:00:00+01:00",
					"value": "850"
				},
				{
					"endDate": "2024-10-02T00:00:00+01:00",
					"startDate": "2024-09-30T00:00:00+01:00",
					"value": "950"
				}
			],
			"passQuantityRemaining": "12",
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

				<div className="container center pb-md">
					<p className="fs-1 fw-600 c-secondary">Purchase Pass</p>
				</div>

				<PassGrid>
					{
						PASS_DATA &&
						PASS_DATA.map( pass => (
							<PassPriceBands
								key={pass.id}
								flash={pass.passFlash}
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


