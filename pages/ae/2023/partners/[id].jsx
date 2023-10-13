import { useRouter } from "next/router"
import Image from "next/image"

// import { GetBizzaboPartnerLevelTitle } from "../../../lib/bizzabo-partner-levels"

// import { Header, HeaderShim } from '../../../../fuselage/global-ae/header/header'
import { Header, HeaderShim } from '../../../../fuselage/theme/2022/ae/global/header/header'
import { Footer } from "../../../../fuselage/global-ae/footer/footer"
import { OffsiteLink } from '../../../../fuselage/components/offsite-link/offsite-link'
import { StickySidebar } from '../../../../fuselage/layout/sticky-sidebar/sticky-sidebar'
import { ArrowLink } from '../../../../fuselage/components/arrow-link/arrow-link'
import { ButtonSocial } from  '../../../../fuselage/components/button-social/button-social'

import CSS from '../../../../css/app/partners.module.css'

// legacy data
import { bzPartners } from "../../../../data/legacy/ae/2023/bz-partners"

function Partner() {

	const router = useRouter()
	
	let partner = bzPartners.find( partner => partner.id === parseInt(router.query.id))

	// console.log('bizzabo partner data:', partner)

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
			<Header 
				compact 
				shim 
				theme={{ 
					primary: 'var(--primary)', 
					secondary: 'var(--secondary)', 
					text: 'var(--primary)',
					buttons: 'var(--primary)',
					buttonText: 'white',
					headerBg: '#ffffffee',
					overlayBg: 'var(--primary)',
				}}
				path={`/partners`}
			/>

			<section className="block pt-0">
				<div className="container">

					<StickySidebar size='medium'>

						<aside className="formatted">
							<HeaderShim/>
							<p className="fw-600">
								<ArrowLink href="/ae/2023/partners" theme={{ color: `var(--dark)`, stroke: `var(--accent)` }}>
									View all 2023 partners
								</ArrowLink>
							</p>

							<div className="bg-white p-sm mt-sm center">
								<div className={CSS.logo}>
									<Image 
										src={partner.logo} 
										width={500}
										height={400}
										layout='responsive'
										alt=""
										unoptimized
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

			<Footer theme={{ footerBg: 'bg-white-90' }} />
		</>
	)
}
Partner.theme = 'ae-2023'



export default Partner


