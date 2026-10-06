import { useState, useRef } from "react"

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'
import { motion, useScroll, useTransform } from "framer-motion"

import _ from 'lodash'

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import Ticker from 'framer-motion-ticker'

import { Pop, Slide, Fade } from "../../../fuselage/theme/2023/ae/layout/animation/animation"

import { EventsBar } from "../../../ui/site/eventsbar"
import { Header } from '../../../ui/site/header'
import { FHS_EGYPT as header } from '../../../fixtures/nav'
import { Footer } from '../../../fuselage/theme/egypt/common/footer/footer'

import { Button } from "../../../fuselage/theme/2024/world/components/button/button"
import { ButtonKeyline } from "../../../fuselage/theme/egypt/components/button-keyline/button-keyline"
import { ArrowButton } from "../../../fuselage/components/arrow-button/arrow-button"

import { SpeakerCard } from "../../../fuselage/components/speaker-card/speaker-card"
import { PopupOverlay } from "../../../fuselage/components/popup-overlay/popup-overlay"

import { HeroUnitVideo } from "../../../fuselage/theme/2025/world/pages/home/hero-unit-video"
import { ThemeBillboard, Tri } from "../../../fuselage/theme/2025/world/pages/home/theme-billboard"

import { orderByLastName, customOrderById } from '../../../lib/swapcard/speaker-utilities'

import CSS from '../../../fuselage/theme/2024/world/css/homepage.module.css'






export const PRIORITY_SPEAKER_IDS = [
	'RXZlbnRQZW9wbGVfNDc3MjUyNzA=',
	'RXZlbnRQZW9wbGVfNDc2OTA3Mzg=',
	'RXZlbnRQZW9wbGVfNDcyMTAyODI=',
	'RXZlbnRQZW9wbGVfNDc1NjAzNDE=',
	'RXZlbnRQZW9wbGVfNDg2NTIwNTU=',
	
	'RXZlbnRQZW9wbGVfNDc5NTk1NTE=',
	'RXZlbnRQZW9wbGVfNDgwNzM2NTc=',
	'RXZlbnRQZW9wbGVfNDc2OTA1NTU=',
	'RXZlbnRQZW9wbGVfNDc1NjIwNzQ=',
	'RXZlbnRQZW9wbGVfNDcyMjczMzU=',
	
	'RXZlbnRQZW9wbGVfNDcyMTA0Njg=',
	'RXZlbnRQZW9wbGVfNDcyODc5NzY=',
	'RXZlbnRQZW9wbGVfNDcyMTAzOTM=',
	'RXZlbnRQZW9wbGVfNDcyMTAyNDk=',
	'RXZlbnRQZW9wbGVfNDcyMTAyMzY=',

	'RXZlbnRQZW9wbGVfNDc5MTIyMjE=',
	'RXZlbnRQZW9wbGVfNDk1OTYzODk=',
	'RXZlbnRQZW9wbGVfNDk2MTI2OTE='
]



export default function Page({ speakers }) {
    
    // console.log('speakers:', speakers)

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
            
            <section className="block bg-default">
                <div className="container center">
                    <h1 className="fs-0 caps">Speakers</h1>
                    <p className="fs-5 balance">FHS events bring together global leaders in hospitality investment, development, operations and government.</p>
                </div>
            </section>



            <section className="block bg-default">
                <div className="container columns-5 gap-sm">
                    {
                        speakers.length &&
                        customOrderById( orderByLastName(speakers), PRIORITY_SPEAKER_IDS).map( (profile, index) => (
                            <Pop key={index}>
                                <SpeakerCard
                                    url={`/egypt/speakers/${profile.id}`}
                                    photoUrl={profile.photoUrl}
                                    fullName={`${profile.firstName} ${profile.lastName}`}
                                    jobTitle={profile.jobTitle}
                                    company={profile.organization}
                                    color={'white'}
                                />
                            </Pop>
                        ))
                    }
                </div>
            </section>


       

            <Footer />
            <LenisScroller />

        </>
    )
}
Page.theme = 'egypt'


export async function getStaticProps() {

	const swapcardSpeakers = await fetch(
		"https://developer.swapcard.com/event-admin/graphql",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": process.env.SWAPCARD_AUTH_KEY
			},
			body: JSON.stringify({
				query: `
					query eventPerson(
						$eventId: ID!
						$cursor: CursorPaginationInput
						$filters: [EventPersonFilter!]
					){
						eventPerson(eventId: $eventId, cursor: $cursor, filters: $filters) {
							nodes {
								id
								type
								firstName
								lastName
								jobTitle
								organization
								photoUrl

								speakerOnPlannings {
									id
									title
									categories
									fields {
									... on MultipleSelectField {
										id
										definition {
											isDefault
											name
										}
										value
										translations {
											value
										}
									}
									}
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
										... on TextField {
											definition {
												name
												translations {
													name
												}
												id
											}
											locale
											value
											id
										}
									}
								}
								}
							}
						}
					`,
					variables: {
						"eventId": process.env.SWAPCARD_EVENT_ID_EGYPT_2026,
						"cursor": {
							"first": 300
						},
						"filters": {
							"shouldBeInGroups": "RXZlbnRHcm91cF82NjExMzE="
						}
					}
			}
			)
		}
	)

	// console.log(swapcardSpeakers)
	
	const speakerData =  await swapcardSpeakers.json()


	return {
		props: { 
			speakers: speakerData.data.eventPerson.nodes
		}
	}
}