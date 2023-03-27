import Layout from '../../../fuselage/templates/ae/layout'

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import _ from 'lodash'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Header, HeaderShim } from '../../../fuselage/global-ae/header/header'
import { Footer } from '../../../fuselage/global-ae/footer/footer'
import { StickySidebar } from '../../../fuselage/layout/sticky-sidebar/sticky-sidebar'
import { SpeakerGrid } from "../../../fuselage/layout/speaker-grid/speaker-grid"
import HubspotForm from'../../../fuselage/components/hubspot-form/hubspot-form'

import handleSeomaticMeta from '../../../lib/seomatic'

import CSS from '../../../css/app/speakers.module.css'

function Speakers({ seomatic, bizzaboSpeakers, craftCmsProfiles }) {

	// speakers

	// console.log('bizzabo speakers found:', bizzaboSpeakers.length)
	// console.log('bizzabo speaker data:', bizzaboSpeakers)
	// console.log('cms profile data:', craftCmsProfiles)

	let orderedSpeakers = _.orderBy( bizzaboSpeakers, [ speaker => speaker.lastname.toLowerCase()], ['asc'])
	// console.log('ordered:', orderedSpeakers)

	return (
		<div className='bg-secondary'>

			<Head>
				{ handleSeomaticMeta( seomatic ) }
            </Head>

			<Header compact shim />

			<section className="block bg-theme">
				<div className="container">

					{/* bizzabo speakers */}

					<p className='fs-1 fw-600 lh-1 maxw-40'>2022 SPEAKERS</p>
					
					<SpeakerGrid decal="gap-sm mt-md">
						{orderedSpeakers.map( speaker => (
							<div key={speaker.id}>
								<Link href={`/ae/speakers/${speaker.id}`}>
									<a className={CSS.avatar}>
										{
											speaker.photoSet ? 
											<Image 
												src={speaker.photoSet.large} 
												width={370} 
												height={370} 
												alt=""
											/>
											: 
											<Image 
												src='/assets/ui/avatar-fallback.png' 
												width={370} 
												height={370} 
												alt=""
											/>
										}
									</a>
								</Link>
								<div>
									<p className='mt-xs'><span className='fw-600'>{speaker.firstname} {speaker.lastname}</span> <br/>{speaker.title} <br/>{speaker.company}</p>
								</div>
							</div>
						))}
					</SpeakerGrid>
			
				</div>
				
			</section>
			
			<Footer />
		</div>
	)
}

Speakers.getLayout = function getLayout( page ) {
	return (
	<Layout>
		{ page }
	</Layout>
	)
}



export async function getStaticProps() {

	const bizzaboSpeakers = await fetch(`https://api.bizzabo.com/api/speakers?eventId=${process.env.BIZZABO_EVENT_ID}&size=200`, {
		"method": "GET",
		"headers": {
			"Content-Type": "application/json",
			"Authorization": "Bearer 67f61f9e-e897-4536-914e-3f47286650f9"
		}
	})
	const json = await bizzaboSpeakers.json()


	const cmsData = await craftApolloClient().query({
        query: gql`
			query SEO {
				entry(site: "${process.env.SITE_HANDLE_AE}", id: "11552") {
					title
					seomatic (asArray: true) {
						metaTitleContainer
						metaTagContainer
					}
				}
			}
        `
    })

	return {
		props: { 
			bizzaboSpeakers: json.content,
			seomatic: cmsData.data.entry.seomatic
		}
	}
}

export default Speakers


