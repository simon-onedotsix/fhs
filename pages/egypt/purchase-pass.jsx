
import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Head from 'next/head'

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_EGYPT as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/egypt/common/footer/footer'
import { PassPriceBands, Pass, SpecialPass, PassGrid, PassGridSectionHeading } from '../../fuselage/theme/2024/world/components/pass/pass'



function PurchasePass({ entry }) {

	// console.log('entry:', entry )

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
					<p className='fs-1 fw-600'>Purchase Pass</p>
				</div>
				<div className="container">
					<p className="maxw-50">Discounted rates below are exclusively available for hotel operators, owners, developers, investors/banks, consultants, architects, lawyers, Govt. officials. If your organisation does not fall within these categories, please email <a href="mailto:hello@thebench.com">hello@thebench.com</a> to register.</p>
				</div>

				<div className="container">
					<PassGrid>
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
										title={pass.passTitle}
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



export async function getStaticProps() {

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
			entry: cmsData.data.entry
		}
	}
}

export default PurchasePass


