import Layout from '../../../fuselage/templates/ae/layout'

import Image from "next/image"

import { GetBizzaboPartnerLevelTitle } from "../../../lib/bizzabo-partner-levels"

import { Header, HeaderShim } from '../../../fuselage/global-ae/header/header'
import { Footer } from "../../../fuselage/global-ae/footer/footer"
import { OffsiteLink } from '../../../fuselage/components/offsite-link/offsite-link'
import { StickySidebar } from '../../../fuselage/layout/sticky-sidebar/sticky-sidebar'
import { ArrowLink } from '../../../fuselage/components/arrow-link/arrow-link'
import { ButtonSocial } from  '../../../fuselage/components/button-social/button-social'

import CSS from '../../../css/app/partners.module.css'

function Partner({ partner }) {

	console.log('bizzabo partner data:', partner)

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

		<div className="bg-theme">
			<Header compact />

			<section className="block pt-0">
				<div className="container">

					<StickySidebar size='medium'>

						<aside className="formatted">
							<HeaderShim/>
							<p className="fw-600"><ArrowLink href="/ae/partners">View all partners</ArrowLink></p>

							<div className="bg-white p-sm mt-sm center">
								<div className={CSS.logo}>
									<Image 
										src={partner.logo} 
										width={500}
										height={400}
										layout='responsive'
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
							<p className="fs-3 fw-600 caps">{partner.name}</p>	
							<p className="mt-sm maxw-50" style={{ whiteSpace: `pre-line` }}>{partner.description}</p>
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

	const res = await fetch(`https://api.bizzabo.com/api/partners?eventId=${process.env.BIZZABO_EVENT_ID_AE}&size=200`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
	const allPartners = await res.json()
	// console.log('hello:',allPartners)

	return {
		paths: allPartners.content.map( entry => ({ params: { id: String(entry.id) } })),
		fallback: false
	}
}

export async function getStaticProps({ params }) {

	// console.log('params',params)
	
	const res = await fetch(`https://api.bizzabo.com/api/partners/${params.id}?eventId=${process.env.BIZZABO_EVENT_ID_AE}`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
	const partnerData = await res.json()

	return {
		props: { partner: partnerData }
	}
}

export default Partner


