import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import _ from 'lodash'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/theme/2024/sa/globals/header/header'
import { Footer } from "../../../fuselage/theme/2024/sa/globals/footer/footer"

import { ThemeBg } from '../../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

import { SpeakerGrid } from "../../../fuselage/layout/speaker-grid/speaker-grid"

import handleSeomaticMeta from '../../../lib/seomatic'

import CSS from '../../../css/app/speakers-sa-2024.module.css'





function Speakers({ seomatic, speakers }) {

	console.log('speakers:', speakers)

	return (
		<>

			<Head>
				{ handleSeomaticMeta( seomatic ) } 
            </Head>

			<Header compact shim />

			<ThemeBg />

			<section className="block bg-theme">
				<div className="container">

					<p className='fs-1 fw-600 lh-1 maxw-40'>2024 SPEAKERS</p>
					
					<SpeakerGrid decal="gap-sm mt-md">
						{
							speakers.length &&
							_.orderBy(speakers, 'lastName').map( speaker => {
								if ( speaker.type ) return (
									<div key={speaker.id}>
										<Link href={`/sa/speakers-2024/${speaker.id}`}>
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

Speakers.theme = 'sa-2024'




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
				query eventPerson($eventId: ID!, $cursor: CursorPaginationInput) {
					eventPerson(eventId: $eventId, cursor: $cursor) {
					pageInfo {
						hasNextPage
						endCursor
						totalItems
						startCursor
						lastPage
						hasPreviousPage
						currentPage
					}
					totalCount
					nodes {
						id
						type
						clientIds
						email
						firstName
						lastName
						jobTitle
						organization
						photoUrl
						websiteUrl
						biography
						socialNetworks {
							profile
							type
						}
						groups {
							id
							name
						}
						source
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
					"eventId": process.env.SWAPCARD_EVENT_ID_SA,
					"cursor": {
						"first": 300
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
			seomatic: cmsData.data.entry.seomatic,
			speakers: speakerData.data.eventPerson.nodes
		}
	}
}

export default Speakers


