import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"


import { LenisScroller } from '../../../fuselage/animation/lenis-scroller' 
import _ from 'lodash'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Header } from '../../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../../fuselage/theme/2024/world/common/footer/footer'
import { SpeakerGrid } from "../../../fuselage/layout/speaker-grid/speaker-grid"

import handleSeomaticMeta from '../../../lib/seomatic'

import CSS from '../../../css/app/speakers.module.css'

function Speakers({ seomatic, speakers, craftCmsProfiles }) {

	// console.log('speakers:', speakers)

	// sort speakers by lastName
	let orderedSpeakers = _.orderBy( speakers, [ speaker => speaker.lastName.toLowerCase()], ['asc'])
	// console.log('ordered:', orderedSpeakers)

	// customise order (VIP speakers to top of list)
	let customOrderedSpeakers = _.sortBy(orderedSpeakers, [
		(speaker => speaker.lastName === 'bin Touq Al Marri' ? 0 : 1),
		(speaker => speaker.lastName === 'Bazin' ? 0 : 1),
		(speaker => speaker.lastName === 'Anand' ? 0 : 1),
		(speaker => speaker.lastName === 'Abdulrahim Kazim' ? 0 : 1),
		(speaker => speaker.lastName === 'Paolo Righi' ? 0 : 1),
	] )
	// console.log('customOrderedSpeakers:', customOrderedSpeakers)

	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) }
            </Head>

            <Header compact />

			<section className="block">
				<div className="container">

					{/* swapcard speakers */}

					<p className='fs-1 fw-600 lh-1 maxw-40'>2024 SPEAKERS</p>
					
					<SpeakerGrid decal="gap-sm mt-md">
						{
							speakers.length &&
							customOrderedSpeakers.map( speaker => {
								if ( speaker.type ) return (
									<div key={speaker.id}>
										<Link href={`/world/speakers/${speaker.id}`}>
											<a className={CSS.avatar}>
												{
													speaker.photoUrl ? 
													<Image 
														src={speaker.photoUrl} 
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
											<p className='mt-xs'>
												<span className='fw-600'>{speaker.firstName} {speaker.lastName}</span> 
												<br/>{speaker.jobTitle} 
												<br/>{speaker.organization}
											</p>
										</div>
									</div>
								)
							})
						}
					</SpeakerGrid>
			
				</div>
				
			</section>
			
			<Footer />
			<LenisScroller />
		</>
	)
}

Speakers.theme = 'world-2024'



export async function getStaticProps() {

	const swapcardData = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query eventPerson($eventId: ID!, $cursor: CursorPaginationInput, $filters: [EventPersonFilter!] ) {
						eventPerson(eventId: $eventId, cursor: $cursor, filters:$filters ) {
						nodes {
							id
							type
							firstName
							lastName
							jobTitle
							organization
							photoUrl
							groups {
								id
								name
							}
							withEvent(eventId: $eventId) {
							fields {
								... on SelectField {
									translations {
										value
										language
									}
									definition {
										id
										translations {
											name
											language
										}
											}
										}
									}
									badges {
										... on BadgeBarcode {
											__typename
											barcode
											createdAt
										}
									}
								}
							}
						}
					}
				`,
				variables: {
					"eventId": process.env.SWAPCARD_EVENT_ID_AE,
					"cursor": {
						"first": 300
					},
					"filters": {
						"shouldBeInGroups": "RXZlbnRHcm91cF80MDIzNTQ="
					}
				}
			})
		}
	)

	// console.log(swapcardData)
	
	const speakerData =  await swapcardData.json()


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
			speakers: speakerData.data.eventPerson.nodes,
			seomatic: cmsData.data.entry.seomatic
		}
	}
}

export default Speakers


