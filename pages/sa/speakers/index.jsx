import Layout from '../../../fuselage/templates/sa/layout'

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import _ from 'lodash'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Header } from '../../../fuselage/global-sa/header/header'
import { Footer } from '../../../fuselage/global-sa/footer/footer'
import { SpeakerGrid } from "../../../fuselage/layout/speaker-grid/speaker-grid"

import handleSeomaticMeta from '../../../lib/seomatic'

import CSS from '../../../css/app/speakers.module.css'

function Speakers({ seomatic, bizzaboSpeakers, craftCmsProfiles }) {


	// console.log('bizzabo speakers found:', bizzaboSpeakers.length)
	// console.log('bizzabo speaker data:', bizzaboSpeakers)
	// console.log('cms profile data:', craftCmsProfiles)
	


	// reorder speakers alphabetically by lastname

	let orderedSpeakers = _.orderBy( bizzaboSpeakers, [ speaker => speaker.lastname.toLowerCase()], ['asc'])
	console.log('ordered:', orderedSpeakers)


	// customise order

	// find index of specific speaker	
	let targetSpeaker = orderedSpeakers.map( speaker => speaker.lastname ).indexOf("Al Saud")
	console.log( 'speaker index:', targetSpeaker )

	// create array containing above speaker
	let firstPlaceSpeaker = orderedSpeakers.splice(targetSpeaker, 1)
	console.log('firstPlaceSpeaker:', firstPlaceSpeaker)
	
	// remove above speaker from master array
	orderedSpeakers.splice(targetSpeaker, 1)
	console.log('ordered (pruned):', orderedSpeakers)
	
	// add speaker back in first place
	let customSpeakers = firstPlaceSpeaker.concat(orderedSpeakers)
	console.log('customSpeakers:', customSpeakers)



	return (
		<div className='bg-secondary'>

			<Head>
				{ handleSeomaticMeta( seomatic ) } 
            </Head>

			<Header compact shim />

			<section className="block bg-theme">
				<div className="container">

					{/* bizzabo speakers */}

					<p className='fs-1 fw-600 lh-1 maxw-40'>2023 SPEAKERS</p>
					
					<SpeakerGrid decal="gap-sm mt-md">
						{customSpeakers.map( speaker => (
							<div key={speaker.id}>
								<Link href={`/sa/speakers/${speaker.id}`}>
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

	const bizzaboSpeakers = await fetch(`https://api.bizzabo.com/api/speakers?eventId=${process.env.BIZZABO_EVENT_ID_SA}&size=200`, {
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
				entry(site: "${process.env.SITE_HANDLE_SA}", id: "63858") {
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


