
import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import useCustomMediaQuery from '../../hooks/useCustomMediaQuery'

import Head from 'next/head'
import Link from "next/link"
import Script from "next/script"
import { Pop } from "../../fuselage/animation/animation"

import { Button } from "../../fuselage/theme/2024/sa/components/button/button"

import { Passes, QuerySEO } from "../../graphql/queries"

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_SA as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'

import { ThemeBg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-bg'

import { PassPriceBands, Pass, SpecialPass, PassGrid, PassGridSectionHeading } from '../../fuselage/theme/2024/sa/components/pass/pass'

import handleSeomaticMeta from '../../lib/seomatic'



import CSS from '../../fuselage/theme/2025/sa/css/purchase-pass.module.css'


function PurchasePass({ seomatic, entry }) {

	const isDesktop = useCustomMediaQuery('(min-width: 600px)')

	const regularPasses = entry.fhisContentBlocks[0].passes.filter(pass => pass.__typename === "passes_passNew_BlockType")
	const specialPasses = entry.fhisContentBlocks[0].passes.filter(pass => pass.__typename === "passes_specialPass_BlockType")
	
	
	console.log('entry:', entry)
	// console.log('passes:', entry.fhisContentBlocks[0].passes)
	// console.log('regularPasses:', regularPasses)
	// console.log('specialPasses:', specialPasses)

	return (
		<>
			<Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) } 
			</Head>
			
			
            <EventsBar site={'/sa'} />
            <Header
				site={`/sa`}
                handle={`Saudi Arabia`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />

			
			<div className={`${CSS.themeWrapper} bg-neutral-02`}>
				<img className={CSS.deco} src="/assets/theme/sa-2025/gfk-01.svg" alt=""/>
				<div style={{ position: 'relative', zIndex: 2 }}>



					<section className={`block pb-0`}>
						<div
							className="container columns-2 gap-md"
							style={{
								gridTemplateColumns: isDesktop ? `1fr 2fr` : `1fr`
							}}
						>
							<div>
								<div>
									<p className="fw-600 c-secondary lh-1">Registration Sponsor</p>
									<img src="https://static.swapcard.com/public/images/9885a71a05aa47359fb09142449b455e.png" alt="" width={`200`} />
								</div>
								
								<p className='fs-1 fw-600 c-secondary'>Purchase Pass</p>
								<br />
								<p className="maxw-45">Discounted rates below are exclusively available for hotel operators, owners, developers, investors/banks, consultants, architects, lawyers, Govt. officials. If your organisation does not fall within these categories, please email <a href="hello@thebench.com">hello@thebench.com</a> to register.</p>
							</div>

							<div>
								{
									regularPasses.length &&
									regularPasses.map(pass => (
										<PassPriceBands
											key={pass.id}
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
									))
								}
							</div>

						</div>
					</section>


					<section className="block">
						<div className="container">
							<p className="fs-2 fw-500 c-primary">Special Passes</p>
						</div>

						<div className="container columns-3 gap-sm">
							{
								specialPasses.length &&
								specialPasses.map(pass => (
									<SpecialPass 
										key={pass.id}
										title={ pass.specialPassTitle }
										description={ pass.specialPassDescription }
										value={ pass.specialPassValue }
										from={ pass.specialPassAvailableFrom }
										to={ pass.specialPassExpires }
										label={ pass.specialPassButtonLabel }
										href={ pass.specialPassHyperlink }
									/>
								))
							}
						</div>
					</section>

				</div>
			</div>


			<Footer />
			<LenisScroller />

		</>
	)
}

PurchasePass.theme = 'sa-2025'



export async function getStaticProps({ locale }) {

	const cmsData = await craftApolloClient().query({
        query: gql`
			query Page {
				entry(site: "${process.env.SITE_HANDLE_SA}", id: "63865") {
					... on ${process.env.SITE_HANDLE_SA}PurchasePass_${process.env.SITE_HANDLE_SA}PurchasePass_Entry {
						id
						slug
						title
						${process.env.CONTENT_BLOCKS_HANDLE}ContentBlocks {
							${Passes}
						}
						${QuerySEO}
					}
				}
			}
        `
    })

	return {
		props: { 
			seomatic: cmsData.data.entry.seomatic,
			entry: cmsData.data.entry
		}
	}
}

export default PurchasePass