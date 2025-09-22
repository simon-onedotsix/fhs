import { gql } from "@apollo/client"
import craftApolloClient from "../../../pages/api/apollo"

import Head from 'next/head'

import parse from 'html-react-parser'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/theme/2025/africa/common/header/header'
import { Footer } from '../../../fuselage/theme/2025/africa/common/footer/footer'

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
		if( partner.websiteUrl ) {

			// check for protocol
			function getProtocol(url) {

				let protocol = url.startsWith("http://") ? 1 : 0

				if (protocol == 0) protocol = url.startsWith("https://") ? 2 : 0
				
				switch (protocol) {
					case 1:
						return url
					case 2:
						return url
					case 0:
						return `http://${url}`
				}
			}

			return (
				<OffsiteLink href={ getProtocol(partner.websiteUrl) } direction='right' target='_blank'>
					Learn more
				</OffsiteLink>
			)
		}
	}

	return (

		<>
			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
			</Head>

			<Header compact />


			<section className="block pt-0 mt-lg">
				<div className="container">

					<StickySidebar size='medium'>
						
						<aside className="formatted">
							<p className="fw-600"><ArrowLink href="/africa/partners">View all partners</ArrowLink></p>

							<div className={CSS.profileLogo}>
								{
									partner.partnerLogo.length &&
									<div className={CSS.profileLogoWrapper}>
										<img 
											src={partner.partnerLogo[0].url} 
											alt=""
										/>
									</div>
								}
							</div>
						</aside>
						
						<main className="maxw-60">

							{/* <p className='fs-2 fw-600 lh-1 c-secondary maxw-40'>partner.level</p> */}
							<p className="fs-3 fw-600 caps">{ partner.title }</p>	
							{
								partner.partnerProfile &&
								<div className="mt-sm maxw-50" style={{ whiteSpace: `pre-line` }}>{ parse(String(partner.partnerProfile)) }</div>
							}
							<p className="mt-md fw-600">{ handleWebsite() }</p>
						</main>

					</StickySidebar>

				</div>
			</section>

			<Footer />

			<LenisScroller />
		</>
	)
}

Partner.theme = 'africa'





export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking'
	}

}

export async function getStaticProps({ params }) {

	// console.log('params',params)
	
	const partner = await craftApolloClient().query({
        query: gql`
			query Page {
				entry(site: "ahif", slug: "${params.slug}" ) {
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


