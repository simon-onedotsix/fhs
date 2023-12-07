import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import parse from 'html-react-parser'

import Layout from '../../../fuselage/templates/sa/layout'

import Image from "next/image"

import { 
    QuerySEO,
	QueryPartnerGroups,
} from "../../../graphql/queries"

import { Header, HeaderShim } from '../../../fuselage/global-sa/header/header'
import { Footer } from "../../../fuselage/global-sa/footer/footer"
import { OffsiteLink } from '../../../fuselage/components/offsite-link/offsite-link'
import { StickySidebar } from '../../../fuselage/layout/sticky-sidebar/sticky-sidebar'
import { ArrowLink } from '../../../fuselage/components/arrow-link/arrow-link'
import { ButtonSocial } from  '../../../fuselage/components/button-social/button-social'

import CSS from '../../../css/app/partners.module.css'

function Partner({ partner }) {

	// console.log('partner:', partner)

	const handleLinkedIn = () => {
		if ( partner.linkedin ) {
			return (
				<>
					<ButtonSocial 
						icon='linkedin' 
						url={partner.linkedin} 
						alt='linkedin'
						target='_blank'
						rel='noreferrer'
						decal={'bg-secondary'}
					/>&ensp;
				</>
			)
		}
	}
	const handleTwitter = () => {
		if ( partner.twitter ) {
			return (
				<>
					<ButtonSocial 
						icon='twitter' 
						url={`https://www.twitter.com/${partner.twitter}`} 
						alt='twitter'
						target='_blank'
						rel='noreferrer'
						decal={'bg-secondary'}
					/>&ensp;
				</>
			)
		}
	}
	const handleFacebook = () => {
		if ( partner.facebook ) {
			return (
				<ButtonSocial 
					icon='facebook' 
					url={partner.facebook} 
					alt='twitter'
					target='_blank'
					rel='noreferrer'
					decal={'bg-secondary'}
				/>
			)
		}
	}
	const handleWebsite = () => {
		if( partner.website ) {
			return (
				<OffsiteLink href={partner.website} direction='right' target='_blank'>
					Learn more
				</OffsiteLink>
			)
		}
	}

	return (

		<div className="bg-white">
			<Header compact />

			<section className="block pt-0">
				<div className="container">

					<StickySidebar size='medium'>

						<aside className="formatted">
							<HeaderShim/>
							<p className="fw-600"><ArrowLink href="/sa/partners">View all partners</ArrowLink></p>

							<div className="bg-white p-sm mt-sm center">
								<div className={CSS.profileLogoWrapper}>
									<Image 
										src={partner.partnerLogo[0].url} 
										layout='fill'
										alt=""
									/>
								</div>
							</div>

							<div className="mt-sm">
								{ handleLinkedIn() }
								{ handleTwitter() }
								{ handleFacebook() }
							</div>
							
						</aside>
						
						<main className="maxw-60">
							<HeaderShim/>
							{/* <p className='fs-2 fw-600 lh-1 c-secondary maxw-40'>{GetBizzaboPartnerLevelTitle(partner.level)}</p> */}
							<p className="fs-3 fw-600 caps">{partner.title}</p>	
							<p className="mt-sm maxw-50" style={{ whiteSpace: `pre-line` }}>{ parse(String(partner.partnerProfile)) }</p>
							<p className="mt-md fw-600">{ handleWebsite() }</p>
						</main>

					</StickySidebar>

				</div>
			</section>

			<Footer />
		</div>
	)
}

Partner.getLayout = function getLayout( page ) {
	return (
		<Layout>
			{ page }
		</Layout>
	)
}





export async function getStaticPaths() {

	const cmsData = await craftApolloClient().query({
        query: gql`
			query Page {
				entry(site: "${process.env.SITE_HANDLE_SA}", id: 63862) {
					title
					... on ${process.env.SITE_HANDLE_SA}Partners_${process.env.SITE_HANDLE_SA}Partners_Entry {
						id
						title
						slug
						${process.env.SITE_HANDLE}ContentBlocks {
							${QueryPartnerGroups}
						}
					}
					${QuerySEO}
				}
			}
        `
    })
	
	// get partner page content-blocks	
	let blocks = cmsData.data.entry.fhisContentBlocks

	// find partner-group content-blocks
	let groupData = blocks.find( group => group.__typename === "fhisContentBlocks_partnerGroups_BlockType")

	// search each group for individual partner slugs
	let slugs = []
	groupData.partnerGroups.forEach( group => group.partners.forEach( partner => slugs.push(partner.slug)) )


	return {
		paths: slugs.map( slug => ({ params: { slug: slug } })),
		fallback: false
	}

}

export async function getStaticProps({ params }) {

	// console.log('params',params)
	
	const partner = await craftApolloClient().query({
        query: gql`
			query Page {
				entry(site: "${process.env.SITE_HANDLE}", slug: "${params.slug}" ) {
					... on partners_partner_Entry {
						id
						slug
						title
						website
						partnerProfile
						partnerLogo {
							id
							url
							width
							height
						}
					}
				}
			}
        `
    })

	return {
		props: { partner: partner.data.entry }
	}

}
export default Partner


