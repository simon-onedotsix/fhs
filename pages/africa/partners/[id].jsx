import Head from 'next/head'
import Script from "next/script"

import parse from 'html-react-parser'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header'
import { FHS_AFRICA as header } from '../../../fixtures/nav'
import { Footer } from '../../../fuselage/theme/2025/africa/common/footer/footer'

import { HeaderShim } from '../../../fuselage/global-sa/header/header'

import { OffsiteLink } from '../../../fuselage/components/offsite-link/offsite-link'
import { StickySidebar } from '../../../fuselage/layout/sticky-sidebar/sticky-sidebar'
import { ArrowLink } from '../../../fuselage/components/arrow-link/arrow-link'
import { ButtonSocial } from  '../../../fuselage/components/button-social/button-social'

import CSS from '../../../css/app/partners.module.css'

function Partner({ partner }) {

	// console.log('partner:', partner)
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
			<Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
			</Head>

            <EventsBar site={'/africa'} />
            <Header
                site={`/africa`}
                handle={`Africa`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />

			<section className="block pt-0">
				<div className="container">

					<StickySidebar size='medium'>

						<aside className="formatted">
							<HeaderShim/>
							<p className="fw-600"><ArrowLink href="/africa/partners">View all partners</ArrowLink></p>

							<div className="bg-white p-sm mt-sm center rad-sm">
								<div className={CSS.profileLogoWrapper}>
                                    
                                        <img
                                            src={partner.logoUrl} 
                                            alt=""
                                        />
								</div>
							</div>
						</aside>
						
						<main className="maxw-60">
							<HeaderShim/>
							{/* <p className='fs-2 fw-600 lh-1 c-secondary maxw-40'>{GetBizzaboPartnerLevelTitle(partner.level)}</p> */}
							<p className="fs-3 fw-600 caps c-secondary">{partner.name}</p>	
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

Partner.theme = 'africa'





export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking'
	}

}

export async function getStaticProps({ params }) {

	// console.log('params',params)
	
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
					"eventId": process.env.SWAPCARD_EVENT_ID_AFRICA_2026,
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


