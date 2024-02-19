import parse from 'html-react-parser'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/theme/2024/sa/globals/header/header'
import { Footer } from "../../../fuselage/theme/2024/sa/globals/footer/footer"

import { ThemeBg } from '../../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

import { HeaderShim } from '../../../fuselage/global-sa/header/header'

import { OffsiteLink } from '../../../fuselage/components/offsite-link/offsite-link'
import { StickySidebar } from '../../../fuselage/layout/sticky-sidebar/sticky-sidebar'
import { ArrowLink } from '../../../fuselage/components/arrow-link/arrow-link'
import { ButtonSocial } from  '../../../fuselage/components/button-social/button-social'

import CSS from '../../../css/app/partners.module.css'

function Partner({ partner }) {

	console.log('partner:', partner)

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
			<Header compact />

			<ThemeBg />

			<section className="block pt-0">
				<div className="container">

					<StickySidebar size='medium'>

						<aside className="formatted">
							<HeaderShim/>
							<p className="fw-600 c-white"><ArrowLink href="/sa/partners">View all partners</ArrowLink></p>

							<div className="bg-white p-sm mt-sm center rad-sm">
								<div className={CSS.profileLogoWrapper}>
                                    
                                        <img
                                            src={partner.logoUrl} 
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
						
						<main className="maxw-60 c-white">
							<HeaderShim/>
							{/* <p className='fs-2 fw-600 lh-1 c-secondary maxw-40'>{GetBizzaboPartnerLevelTitle(partner.level)}</p> */}
							<p className="fs-3 fw-600 caps">{partner.name}</p>	
							{
								partner.htmlDescription &&
								<div className="mt-sm maxw-50 formatted">{ parse(String(partner.htmlDescription)) }</div>
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

Partner.theme = 'sa-2024'





export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking'
	}

}

export async function getStaticProps({ params }) {

	console.log('params',params)
	
	const result = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
                    query exhibitors($eventId: String!, $ids: [String!]) {
                        exhibitors(eventId: $eventId, ids: $ids, page:1, pageSize:100) {
                            id
                            name
                            logoUrl
                            websiteUrl
                            htmlDescription
                        }
                    }
				`,
				variables: {
					"eventId": process.env.SWAPCARD_EVENT_ID_SA,
					"ids": [
                        params.id
                      ]
				}
			})
		}
	)

	const partner = await result.json()

	return {
		props: { partner: partner.data.exhibitors[0] }
	}

}
export default Partner


