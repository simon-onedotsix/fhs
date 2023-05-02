import Layout from '../../fuselage/templates/sa/layout'

import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from 'next/head'

import { Header } from '../../fuselage/global-sa/header/header'
import { Footer } from '../../fuselage/global-sa/footer/footer'
import { PassBox, PassBoxGrid, PassBoxActions } from '../../fuselage/components/pass-box/pass-box' 
import { Button } from '../../fuselage/components/button/button'

import handleSeomaticMeta from '../../lib/seomatic'

function PurchasePass({ seomatic }) {

	return (
		<div className='bg-secondary'>

			<Head>
				{ handleSeomaticMeta( seomatic ) } 
            </Head>

			<Header compact shim />

			<section className="block bg-theme">
				<div className="container">
					<p className='fs-0 fw-600 lh-1'>Purchase Pass</p>
				</div>

				<div className="container">
					<PassBoxGrid
						heading={`FHS Saudi Arabia Standard Pass`}
						description={`Provides full conference access including conference sessions, networking events, and post-event resources.`}
					>
						<PassBox
							title={`January`}
							currency={`US$`}
							price={160000}
							availableFrom={`2023-01-01T00:00:00+0000`}
							availableTo={`2023-02-01T00:00:00+0000`}
							// description={`<p><ul><li>Includes access to the 15th March reception in Dubai</li></ul></p>`}
							// buttonLink={'https://fhs.marcomevent.net/'}
						/>
						<PassBox
							title={`February`}
							currency={`US$`}
							price={190000}
							availableFrom={`2023-02-01T00:00:00+0000`}
							availableTo={`2023-03-01T00:00:00+0000`}
							// description={`<p><ul><li>Includes access to the 15th March reception in Dubai</li></ul></p>`}
							// buttonLink={'https://fhs.marcomevent.net/'}
						/>
						<PassBox
							title={`March`}
							currency={`US$`}
							price={220000}
							availableFrom={`2023-03-01T00:00:00+0000`}
							availableTo={`2023-04-01T00:00:00+0000`}
							// description={`<p><ul><li>Includes access to the 15th March reception in Dubai</li></ul></p>`}
							// buttonLink={'https://fhs.marcomevent.net/'}
						/>
						<PassBox
							title={`April`}
							currency={`US$`}
							price={260000}
							availableFrom={`2023-04-01T00:00:00+0000`}
							availableTo={`2023-05-01T00:00:00+0000`}
							// buttonLink={'https://fhs.marcomevent.net/'}
						/>
						<PassBox
							title={`May`}
							currency={`US$`}
							price={290000}
							availableFrom={`2023-05-01T00:00:00+0000`}
							availableTo={`2023-05-12T00:00:00+0000`}
							// buttonLink={'https://fhs.marcomevent.net/'}
							hideAvailability
						/>
					</PassBoxGrid>

					<PassBoxActions>
						<Button href={ 'https://fhs.marcomevent.net/' } secondary decal="fw-600">
							Purchase Pass 
						</Button>
					</PassBoxActions>
				</div>

				<div className="container bg-white p-sm">
					<p className='fs-2 fw-600 lh-1 c-primary'>GRIF Saudi Arabia Pass</p>
					<p className='fs-5 fw-400 mt-xs c-dark maxw-60'>GRIF passes are available at a discounted rate for restaurant operators and owners only. You can apply for a GRIF Pass through the GRIF page.</p>
					<div className='mt-xs right'>
						<Button href={ '/sa/grif#register' } secondary decal="fw-600">
							Purchase Pass 
						</Button>
					</div>
				</div>
			</section>

			<Footer />

		</div>
	)
}

PurchasePass.getLayout = function getLayout( page ) {
	return (
		<Layout>
			{ page }
		</Layout>
	)
}



export async function getStaticProps() {

	const cmsData = await craftApolloClient().query({
        query: gql`
			query SEO {
				entry(site: "${process.env.SITE_HANDLE_SA}", id: "63858") {
					title
					seomatic (asArray: true) {
						KSAtaTitleContainer
						metaTagContainer
					}
				}
			}
        `
    })



	return {
		props: { 
			// seomatic: cmsData.data.entry.seomatic,
		}
	}
}

export default PurchasePass


