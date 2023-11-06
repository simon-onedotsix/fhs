import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import parse from 'html-react-parser'

import Image from "next/image"

import { 
    QuerySEO,
	QueryPartnerGroups,
} from "../../../graphql/queries"

import { Header, HeaderShim } from '../../../fuselage/global-ae/header/header'
import { Footer } from "../../../fuselage/global-ae/footer/footer"
import { OffsiteLink } from '../../../fuselage/components/offsite-link/offsite-link'
import { StickySidebar } from '../../../fuselage/layout/sticky-sidebar/sticky-sidebar'
import { ArrowLink } from '../../../fuselage/components/arrow-link/arrow-link'
import { ButtonSocial } from  '../../../fuselage/components/button-social/button-social'

import CSS from '../../../css/app/partners.module.css'



function Partner({ partner }) {

	// console.log('partner data:', partner)

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

		<>
			<Header compact theme={{ 
                primary: 'var(--primary)', 
                secondary: 'var(--secondary)', 
                text: 'var(--primary)',
                buttons: 'var(--primary)',
                buttonText: 'white',
                headerBg: '#ffffffee',
                overlayBg: 'var(--primary)',
            }} />

			<section className="block pt-0">
				<div className="container">

					<StickySidebar size='medium'>

						<aside className="formatted">
							<HeaderShim/>
							<p className="fw-600">
								<ArrowLink href="/ae/partners" theme={{ color: `var(--dark)`, stroke: `var(--accent)` }}>
									View all partners
								</ArrowLink>
							</p>

							<div className={CSS.profileLogo}>
								{
									partner.partnerLogo.length &&
									<div className={CSS.profileLogoWrapper}>
										<Image 
											src={partner.partnerLogo[0].url} 
											layout='fill'
											alt=""
										/>
									</div>
								}
							</div>

							<div className="mt-sm">
								{ handleLinkedIn() }
								{ handleTwitter() }
								{ handleFacebook() }
							</div>
							
						</aside>
						
						<main className="maxw-60">
							<HeaderShim/>
							<p className="fs-3 fw-600 caps">{ partner.title }</p>	
							{
								partner.partnerProfile &&
								<p className="mt-sm maxw-50" style={{ whiteSpace: `pre-line` }}>{ parse(String(partner.partnerProfile)) }</p>
							}
							<p className="mt-md fw-600">{ handleWebsite() }</p>
						</main>

					</StickySidebar>

				</div>
			</section>

			<Footer theme={{ footerBg: 'bg-white-90' }} />
		</>
	)
}
Partner.theme = 'ae-2023'




export async function getStaticPaths() {

	const cmsData = await craftApolloClient().query({
        query: gql`
			query Page {
				entry(site: "${process.env.SITE_HANDLE_AE}", id: 11544) {
					title
					... on ${process.env.SITE_HANDLE_AE}Partners_${process.env.SITE_HANDLE_AE}Partners_Entry {
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


