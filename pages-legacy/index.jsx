import Layout from '../fuselage/templates/layout'

import { gql } from "@apollo/client"
import craftApolloClient from "../pages/api/apollo"

import Head from 'next/head'
import Link from 'next/link'

import { 
    QuerySEO,
} from "../graphql/queries"

import handleSeomaticMeta from '../lib/seomatic'

import { Header, HeaderShim } from '../fuselage/global/header/header'
import { Footer } from "../fuselage/global/footer/footer"

import KsaLogoInverse from '../fuselage/global-sa/header/img/FHS-KSA-logo-inverse.svg'
import MeLogoInverse from '../fuselage/global-ae/header/img/FHS-ME-logo-inverse-strapless.svg'

import CSS from '../css/app/home.module.css'

export default function Home({ globals, entry, seomatic }) {

	// console.log('entry:', entry)
	// console.log('seomatic:', seomatic)

	return (
		<>
			<Head>
				{ handleSeomaticMeta( seomatic ) }
			</Head>

			<Header inverse />


			{/* event cards */}

			<section className="block bg-secondary" style={{ minHeight: `100vh`}}>

				<HeaderShim />
				
				<div className="container center maxw-40 formatted">
					<p className="fs-2 fw-600">Welcome to the Future Hospitality Investment Summit</p>
				</div>
					
				<div className={`${CSS.eventCardGrid} container center maxw-60`}>

					<div className='sa'>
						<section className={`${CSS.eventCard} bg-theme p-sm center fw-400`}>

							<div className={`maxw-10 mx-auto mb-xs`}>
								<KsaLogoInverse style={{ height: 140}} />
							</div>

							<div className={CSS.eventCardContent}>
								<p className='fs-3 fw-600 lh-2'>Future Hospitality Investment Summit Saudi Arabia</p>
								<p className='mt-xs'>7-9 May 2023<br/>Al Faisaliah Hotel, Riyadh</p>
								<p className='mt-sm'>
									<Link href="/sa">
										<a className="button">GO!</a>
									</Link>
									</p>
							</div>
							
						
						</section>
					</div>

					<div className='ae'>
						<section className={`${CSS.eventCard} bg-theme p-sm center fw-400`}>
						
							<div className={`maxw-10 mx-auto mb-xs`}>
								<MeLogoInverse style={{ height: 140}} />
							</div>
						
							<div className={CSS.eventCardContent}>
								<p className='fs-3 fw-600 lh-2'>Future Hospitality Investment Summit</p>
								<p className='mt-xs'>25-27 September 2023<br/>Hilton Abu Dhabi Yas Island</p>
								<p className='mt-sm'>
									<Link  href="/ae">
										<a className="button">GO!</a>
									</Link>
								</p>
							</div>
						
						</section>
					</div>

				</div>
			</section>


			{/* <Footer /> */}
			
		</>
	)
}

Home.getLayout = function getLayout( page ) {
	return (
	<Layout>
		{ page }
	</Layout>
	)
}




export async function getStaticProps({ preview, previewData }) {

    const data = await craftApolloClient( preview, previewData ).query({
        query: gql`
			query Homepage {
				globalSet(site: "${process.env.SITE_HANDLE}") {
					... on footer_GlobalSet {
						id
						name
						socialConnections {
							... on socialConnections_BlockType {
								id
								hyperlink
								icon
								label
							}
						}
						contactDetails {
							... on contactDetails_BlockType {
								id
								body
							}
						}
						hubspotForm {
							... on hubspotForm_BlockType {
								id
								formId
								portalId
							}
						}
					}
				}
				entry(site: "${process.env.SITE_HANDLE}", id: 77020) {
					id
					title
					... on ${process.env.SITE_HANDLE}Homepage_${process.env.SITE_HANDLE}Homepage_Entry {
						id
						title
						theme
						contentLibraryPosts {
							... on contentLibraryPosts_BlockType {
								id
								heading
								ctaButtonLink
								ctaButtonLabel
								posts(site: ["${process.env.SITE_HANDLE}", "${process.env.SITE_HANDLE_SA}", "${process.env.SITE_HANDLE_AE}"]) {
									id
									slug
									title
									postDate
									excerpt
									contentLibraryHero {
										id
										url
										width
										height
									}
									contentTypes {
										... on contentLibrary_Category {
											id
											title
										}
									}
								}
							}
						}
						${QuerySEO}
					}
				}
			}
			
        `
    })
    const pageData = data

    return { 
		props: { 
			globals: pageData.data.globalSet,
			entry: pageData.data.entry,
			seomatic: pageData.data.entry.seomatic,
		}
	}
}