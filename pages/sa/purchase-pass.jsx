
import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Head from 'next/head'
import Link from "next/link"
import Script from "next/script"
import { Pop } from "../../fuselage/animation/animation"

import { Button } from "../../fuselage/theme/2024/sa/components/button/button"

import { 
    QueryText, 
    QueryFlipFlops, 
    QueryFloaters, 
    QueryBillboards, 
    QueryBillboardSliders, 
    QueryImpactFigures, 
    QueryVideos,
    QueryForm,
    QueryProfileCarousel,
    QuerySEO,
    QueryImages,
    Passes,
    QueryPartners,
	BizzaboPartners
} from "../../graphql/queries"

import handleContentBlocks from "../../lib/content-blocks-sa"

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'

import { ThemeBg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-bg'

import handleSeomaticMeta from '../../lib/seomatic'



import CSS from '../../fuselage/theme/2025/sa/css/purchase-pass.module.css'


function PurchasePass({ seomatic, entry }) {

	// console.log('entry:', entry )

	return (
		<>
			<Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) } 
            </Head>

			<Header compact shim />

			
			<div className={`${CSS.themeWrapper} bg-neutral-02`}>
				<img className={CSS.deco} src="/assets/theme/sa-2025/gfk-01.svg" alt=""/>

				<div style={{ position: 'relative', zIndex: 2 }}>
					<section className={`block pb-0`}>
						<div className="container columns-2 gap-md">
							<div>
								<p className='fs-1 fw-600 c-secondary'>Purchase Pass</p>
								<br />
								<p className="maxw-45">Discounted rates below are exclusively available for hotel operators, owners, developers, investors/banks, consultants, architects, lawyers, Govt. officials. If your organisation does not fall within these categories, please email <a href="hello@thebench.com">hello@thebench.com</a> to register.</p>
							</div>

							<Card>
								<img src="https://static.swapcard.com/public/images/9885a71a05aa47359fb09142449b455e.png" alt="" width={`200`} />
							</Card>
						</div>
					</section>

					{ handleContentBlocks( entry.fhisContentBlocks, null, null, 'sa' ) }
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
							${QueryText}
							${QueryFlipFlops}
							${QueryFloaters}
							${QueryBillboards}
							${QueryBillboardSliders}
							${QueryImpactFigures}
							${QueryVideos}
							${QueryProfileCarousel}
							${QueryForm}
							${QueryImages}
							${QueryPartners}
							${Passes}
							${BizzaboPartners}
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






const Card = ({ children }) => {
	return (
		<Pop>
			<div className="bg-white" style={{ width: `max-content`}}>
				<header className="bg-secondary" style={{ padding: `.5rem`, textAlign: `center` }}>
					<p>Registration Sponsor</p>
				</header>
				
				<Pop delay={.1}>
					<div className="py-xs px-md center">
						{ children }
					</div>
				</Pop>
			</div>
		</Pop>
	)
}