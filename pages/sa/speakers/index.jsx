import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import _ from 'lodash'

import Head from 'next/head'
import Script from "next/script"
import Image from 'next/image'
import Link from 'next/link'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header'
import { FHS_SA as header } from '../../../fixtures/nav'
import { Footer } from '../../../fuselage/theme/2025/sa/common/footer/footer'

import { ThemeBg } from '../../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

import { SpeakerGrid } from "../../../fuselage/layout/speaker-grid/speaker-grid"

import handleSeomaticMeta from '../../../lib/seomatic'

import CSS from '../../../css/app/speakers-sa-2024.module.css'


const speakerTags = [
			{
				id: 'RXZlbnRQZW9wbGVfNDYyOTMwOTg=',
				firstName: 'Rema',
				lastName: 'Alyahya',
				tag: 'Startup Den Judge'
			},
			{
				id: 'RXZlbnRQZW9wbGVfNDY1NTM3NTI=',
				firstName: 'Yasser',
				lastName: 'Alsharif',
				tag: 'Startup Den Judge'
			},
			{
				id: 'RXZlbnRQZW9wbGVfNDY2NTU1MDQ=',
				firstName: 'Saad',
				lastName: 'Shabbir',
				tag: 'Startup Den Judge'
			},
			{
				id: 'RXZlbnRQZW9wbGVfNDY3NTkyNjg=',
				firstName: 'Abdu',
				lastName: 'Joud',
				tag: 'Startup Den'
			},
			{
				id: 'RXZlbnRQZW9wbGVfNDY3NTkyODk=',
				firstName: 'Nourah',
				lastName: 'Alsodoon',
				tag: 'Startup Den'
			},
			{
				id: 'RXZlbnRQZW9wbGVfNDY3NTE4MDM=',
				firstName: 'Micaela',
				lastName: 'Johnston',
				tag: 'Startup Den'
			},
			{
				id: 'RXZlbnRQZW9wbGVfNDY2NDg2MjY=',
				firstName: 'Sabrine',
				lastName: 'Chennaoui',
				tag: 'Startup Den'
			},
			{
				id: 'RXZlbnRQZW9wbGVfNDY3MTgyOTQ=',
				firstName: 'Fayaz',
				lastName: 'Ali',
				tag: 'Startup Den'
			},
			{
				id: 'RXZlbnRQZW9wbGVfNDY5MzI3MDU=',
				firstName: 'Juana',
				lastName: 'Bouka',
				tag: 'Startup Den'
			},
			{
				id: 'RXZlbnRQZW9wbGVfNDcwNDc0MTk=',
				firstName: 'Omar',
				lastName: 'Issa',
				tag: 'Startup Den Judge'
			},
			{
				id: 'RXZlbnRQZW9wbGVfNDcwNzQ0NzY=',
				firstName: 'Sardar',
				lastName: 'Mahmood',
				tag: 'Startup Den'
			},
		]

const speakerIds = [
	'RXZlbnRQZW9wbGVfNDYyOTMwOTg=', 'RXZlbnRQZW9wbGVfNDY1NTM3NTI=', 'RXZlbnRQZW9wbGVfNDY2NTU1MDQ=', 'RXZlbnRQZW9wbGVfNDY3NTkyNjg=', 'RXZlbnRQZW9wbGVfNDY3NTkyODk=', 'RXZlbnRQZW9wbGVfNDY3NTE4MDM=', 'RXZlbnRQZW9wbGVfNDY2NDg2MjY=', 'RXZlbnRQZW9wbGVfNDY3MTgyOTQ=', 'RXZlbnRQZW9wbGVfNDY5MzI3MDU=', 'RXZlbnRQZW9wbGVfNDcwNDc0MTk=', 'RXZlbnRQZW9wbGVfNDcwNzQ0NzY='
]

function Speakers({ seomatic, speakers }) {

	// console.log('speakers found:', speakers.length)
	// console.log('speakers:', speakers)

	// sort speakers by lastName
	let orderedSpeakers = _.orderBy( speakers, [ speaker => speaker.lastName.toLowerCase()], ['asc'])
	console.log('total ordered speakers:', orderedSpeakers.length)

	// customise order (VIP speakers to top of list)
	let customOrderedSpeakers = _.sortBy(orderedSpeakers, [
		(speaker => speaker.firstName == 'Prince Turki AlFaisal' && speaker.lastName === 'Bin Abdulaziz Al Saud' ? 0 : 1),
		(speaker => speaker.firstName == 'Mahmoud' && speaker.lastName === 'Abdulhadi' ? 0 : 1),
		(speaker => speaker.firstName == 'H․E․ Abdullah' && speaker.lastName === 'Al-Muhaisen' ? 0 : 1),
		(speaker => speaker.firstName == 'Sultan Bader' && speaker.lastName === 'Al-Otaibi' ? 0 : 1),
		
		(speaker => speaker.firstName == 'Joanna' && speaker.lastName === 'Kurowska' ? 0 : 1),
		(speaker => speaker.firstName == 'Elie' && speaker.lastName === 'Younes' ? 0 : 1),
		(speaker => speaker.firstName == 'Tina' && speaker.lastName === 'Yu' ? 0 : 1),
		(speaker => speaker.firstName == 'Khalid' && speaker.lastName === 'Al Gahtani' ? 0 : 1),
		(speaker => speaker.firstName == 'Hamza' && speaker.lastName === 'Farooqui' ? 0 : 1),
		
		(speaker => speaker.firstName == 'Meshari' && speaker.lastName === 'Al Nahari' ? 0 : 1),
		(speaker => speaker.firstName == 'Serena' && speaker.lastName === 'Lim' ? 0 : 1),
		(speaker => speaker.firstName == 'Fatih' && speaker.lastName === 'Tamince' ? 0 : 1),
		(speaker => speaker.firstName == 'Jaume' && speaker.lastName === 'Tàpies-Ibern' ? 0 : 1),
		(speaker => speaker.firstName == 'Sarmad' && speaker.lastName === 'Zok' ? 0 : 1),		
	] )
	console.log('customOrderedSpeakers:', customOrderedSpeakers)



	const tagSpeaker = (speakerId, tags) => {

		const tagObj = tags.find(tag => tag.id === speakerId)

		if (tagObj) return <p className="c-accent fw-600 caps">{tagObj.tag}</p>

	}


	const moveSpeakersToEndById = (speakers, speakerIds) => {
		const result = speakers
			.filter(speaker => !speakerIds.includes(speaker.id))
			.concat(speakers.filter(speaker => speakerIds.includes(speaker.id)))

		return result
	}
	


	return (
		<div className="bg-default">

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

			<ThemeBg />

			<section className="block bg-default">
				<div className="container">

					<p className='fs-1 fw-600 c-secondary lh-1 maxw-40'>2026 SPEAKERS</p>
					
					<SpeakerGrid decal="gap-sm mt-md">
						{
							speakers.length ?
							moveSpeakersToEndById (customOrderedSpeakers, speakerIds).map( speaker => {
								if ( speaker.type ) return (
									<div key={speaker.id}>
										<Link href={`/sa/speakers/${speaker.id}`}>
											<a className={CSS.avatar}>
												{
													speaker.photoUrl ? 
													<Image 
														src={speaker.photoUrl} 
														width={370} 
														height={370} 
														alt=""
														unoptimized
													/>
													: 
													<Image 
														src='/assets/ui/avatar-fallback.png' 
														width={370} 
														height={370} 
														alt=""
														unoptimized
													/>
												}
											</a>
										</Link>
										<div>
											<p className='mt-xs'>
												{ tagSpeaker(speaker.id, speakerTags) }
												
												<span className='fw-600'>{speaker.firstName} {speaker.lastName}</span> 
												<br/>{speaker.jobTitle} 
												<br/>{speaker.organization}
											</p>
										</div>
									</div>
								)
							})
								: <p>No speakers found.</p>
						}
					</SpeakerGrid>
			
				</div>
				
			</section>

			<Footer />
			<LenisScroller />

		</div>
	)
}

Speakers.theme = 'sa-2025'




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
					"eventId": process.env.SWAPCARD_EVENT_ID_SA_2026,
					"cursor": {
						"first": 300
					},
					"filters": {
						"shouldBeInGroups": "RXZlbnRHcm91cF82MzIyMTI="
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


