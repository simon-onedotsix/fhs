import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { Pass, SpecialPass, PassGrid, PassGridSectionHeading } from '../../fuselage/theme/2024/world/components/pass/pass'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Head from 'next/head'

import { 
    QueryText, 
    QueryFlipFlops, 
    QueryFloaters, 
    QueryBillboards, 
    QueryBillboardSliders, 
    QueryImpactFigures, 
    QueryVideos,
    QueryForm,
    QueryProfileCarousel,
    QuerySEO,
    QueryImages,
    Passes,
    QueryPartners,
	BizzaboPartners
} from "../../graphql/queries"

import handleContentBlocks from "../../lib/content-blocks"

import { Header } from '../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'

import { ThemeBg } from "../../fuselage/theme/2023/ae/theme-bg"

import { TickIcon } from "../../fuselage/icons/tick"


import handleSeomaticMeta from '../../lib/seomatic'

function PurchasePass({ seomatic, entry }) {

	console.log('entry:', entry )

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
					<Pass
						title={ "Standard Pass" }
						header={
							<>
								<p className="fs-6"><span className="fw-800 c-primary">Available at this rate until 29 September</span> before the price increases to <strong>US$ 3500</strong></p>
							</>
						}
						description={ 
							<>
								<p>Includes access to:</p>
								<ul>
									<li>All FHS conference tracks</li>
									<li>Exhibition</li>
									<li>Experiences (subject to availability</li>
									<li>Networking receptions</li>
								</ul>
							</> 
						}
						currency={ "US$" }
						value={ 3300 }
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
								<p className="fs-6"><span className="fw-800 c-primary">Available at this rate until 29 September</span> before the price increases to <strong>US$ 3700</strong></p>
							</>
						}
						description={ 
							<>
								<p>Includes access to:</p>
								<ul>
									<li><strong>Branded Residences Forum 2024</strong></li>
									<li>All FHS conference tracks</li>
									<li>Exhibition</li>
									<li>Experiences (subject to availability</li>
									<li>Networking receptions</li>
								</ul>
							</> 
						}
						currency={ "US$" }
						value={ 3500 }
						from={ "2024-01-01T00:00:00+00:00" }
						to={ "2024-10-02T23:00:00+00:00" }
						label={ "Purchase Pass" }
						href={ "#" }
					/>
					
					<Pass
						title={ "BRF-ONLY Pass" }
						header={
							<>
								<p className="fs-6"><span className="fw-800 c-primary">Available at this rate until 29 September</span> before the price increases to <strong>US$ 950</strong></p>

							</>
						}
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
						value={ 850 }
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


