import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Head from 'next/head'
import { useRouter } from 'next/router'

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_EGYPT as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/egypt/common/footer/footer'
import { PassPriceBands, Pass, SpecialPass, PassGrid, PassGridSectionHeading } from '../../fuselage/theme/2024/world/components/pass/pass'





function PurchasePass({ entry, country }) {

	// console.log('entry:', entry )
	// console.log('country:', country)
	// country = "EG"

	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/egypt/favicon-16x16.png" sizes="16x16" /> 
            </Head>

            <EventsBar site={'/egypt'} />
            <Header
                site={`/egypt`}
                handle={`Egypt`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />

			
			<div className={`block bg-secondary`}>
				<div className="container">
					{/* <p className="fs-sm c-accent">[ country code: { country } ]</p> */}
					<p className='fs-1 fw-600'>Purchase Pass</p>
				</div>
				<div className="container">
					<p className="maxw-50">Discounted rates below are exclusively available for hotel operators, owners, developers, investors/banks, consultants, architects, lawyers, Govt. officials. If your organisation does not fall within these categories, please email <a href="mailto:hello@thebench.com">hello@thebench.com</a> to register.</p>
				</div>

				<div className="container">
					<PassGrid>

						{/* show special pass for locals */}
						{
							country === 'EG' &&
							<PassPriceBands
								key={2345}
								flash={``}
								title={`Egyptian Attendee Pass`}
								callout={``}
								priceIncreaseMessage={`message`}
								description={`
									<p class="fs-6"><strong>An exclusive rate for Egyptian attendees, making the summit more accessible for local stakeholders involved.</strong></p>
									<div class="formatted"><p class="fs-6 balance"><span class="fw-600">Only available at this rate before 5 October</span> when the price increases to <strong class="fw-600">US$&nbsp;1250</strong></p></div>
									<p class="mt-xs"><strong>Includes access to:</strong></p>
									<ul>
										<li>All keynote presentations, panel discussions and breakout sessions</li>
										<li>Exhibition hall and sponsor booths</li>
										<li>AI-powered attendee matching app for pre-scheduled meetings</li>
										<li>Networking receptions and daily networking lunches</li>
										<li>Post-event session recordings and presentation downloads</li>
										<li>Site tours and local experiences (Subject to Availability)</li>
										<li>Industry reports and investment insights from partners</li>
									</ul>
								`}
								currency={`US$`}
								priceBands={[
									{
										"__typename": "passPriceBands_TableRow",
										"startDate": "2026-04-09T00:00:00+00:00",
										"endDate": "2026-11-30T00:00:00+01:00",
										"value": "1000"
									}
								]}
								quantityRemaining={``}
								label={`Register Here`}
								href={`https://evbk.link/O0NFvr`}
								soldOut={``}
								disclaimer={`<p class="fs-sm lh-1">The local rate is reserved exclusively for Egyptian attendees and is subject to the organiser’s final approval.</p>`}
							/>
						}

						{/* show regular cms passes + adapt title for egyptian users */}
						{
							entry.passes?.length &&
							entry.passes.map( (pass, index) => {

								if ( pass.__typename === 'passes_sectionHeading_BlockType') return ( 
									<PassGridSectionHeading
										key={index}
										heading={pass.heading}
									/> 
								)

								if ( pass.__typename === 'passes_specialPass_BlockType') return ( 
									<SpecialPass 
										key={index}
										title={ pass.specialPassTitle }
										description={ pass.specialPassDescription }
										value={ pass.specialPassValue }
										from={ pass.specialPassAvailableFrom }
										to={ pass.specialPassExpires }
										label={ pass.specialPassButtonLabel }
										href={ pass.specialPassHyperlink }
									/> 
								)

								if ( pass.__typename === 'passes_passNew_BlockType') return ( 
									<PassPriceBands
										key={index}
										flash={pass.passFlash}
										title={ country === 'EG' ? "International Attendee Pass" : pass.passTitle }
										callout={pass.passCallout}
										priceIncreaseMessage={pass.passPriceIncreases}
										description={pass.passDescription}
										currency={pass.passCurrency}
										priceBands={pass.passPriceBands}
										quantityRemaining={pass.passQuantityRemaining}
										label={pass.passButtonLabel}
										href={pass.passButtonUrl}
										soldOut={pass.passSoldOut}
									/> 
								)

								return (
									<Pass
										key={index}
										title={ pass.passTitle }
										description={ pass.passDescription }
										currency={entry.currency}
										value={ pass.passValue }
										from={ pass.availableFrom }
										to={ pass.expires }
										href={ pass.hyperlink }
									/>
								)
							})
						}
					</PassGrid>
				</div>
			</div>


			<Footer />
			<LenisScroller />

		</>
	)
}
PurchasePass.theme = 'egypt'



export async function getServerSideProps({ req }) {

	const country = req.headers['x-vercel-ip-country'] || 'not found'
	console.log('serverSideProps:', country)

	const cmsData = await craftApolloClient().query({
        query: gql`
			query Page {
				entry(site: "${process.env.SITE_HANDLE_EGYPT}", id: "298763") {
					... on egyptPurchasePass_egyptPurchasePass_Entry {
						id
						slug
						title
						passes {
							... on passes_pass_BlockType {
								id
								passTitle
								passDescription
								passValue
								availableFrom
								expires
								hyperlink
							}
							... on passes_sectionHeading_BlockType {
								id
								heading
							}
							... on passes_specialPass_BlockType {
								id
								specialPassTitle
								specialPassDescription
								specialPassValue
								specialPassAvailableFrom
								specialPassExpires
								specialPassButtonLabel
								specialPassHyperlink
							}
							... on passes_passNew_BlockType {
								id
								passTitle
								passFlash
								passCallout
								passPriceIncreases
								passDescription
								passCurrency
								passPriceBands {
									endDate
									startDate
									value
								}
								passQuantityRemaining
								passButtonLabel
								passButtonUrl
								passSoldOut
							}
						}
					}
				}
			}
        `
    })

	return {
		props: { 
			entry: cmsData.data.entry,
			country
		}
	}
}

export default PurchasePass


