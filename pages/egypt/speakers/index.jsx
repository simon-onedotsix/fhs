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

import CSS from '../../../fuselage/theme/2024/world/css/homepage.module.css'


const SPEAKER_DATA = [
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDEwMzg5NzY=`,
        photoUrl: 'https://static.swapcard.com/public/images/42ee3cc4823e43319c9ff340311e8e79.jpeg',
        fullName: 'HE Abdulla bin Touq Al Marri',
        jobTitle: 'Minister of Economy and Tourism',
        company: 'United Arab Emirates',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDI3NzY2MzM=`,
        photoUrl: 'https://static.swapcard.com/public/images/a7e9bcb0c81141618078496f4fe860ec.jpeg',
        fullName: 'HE Patricia De Lille',
        jobTitle: 'Minister of Tourism',
        company: 'Republic of South Africa',
    },
    {
        url: `/world/speakers/profile/h-e-mohamed-ali-rashed-alabbar`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Alabbar_Mohamed_sq.jpg',
        fullName: 'H.E. Mohamed Ali Rashed Alabbar',
        jobTitle: 'Founder & Managing Director of Emaar Properties; Founder & Director of Noon.com; Chairman of Eagle Hills; Chairman of Americana Group',
        company: '',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDA2MDQ1NDk=`,
        photoUrl: 'https://static.swapcard.com/public/images/a8a3eed89c99418ea55cedd0edf6ea16.jpeg',
        fullName: 'HE Shaikha Nasser Al Nowais',
        jobTitle: 'Secretary-General Elect',
        company: 'UN Tourism',
    },
    {
        url: `/world/speakers/profile/sébastien-bazin`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Bazin_Sebastien_cropped.jpg',
        fullName: 'Sébastien Bazin',
        jobTitle: 'Group Chairman & CEO',
        company: 'Accor',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfMzg2MzY0MjM=`,
        photoUrl: 'https://static.swapcard.com/public/images/937564805efb45f9bc59f9df5d033823.jpeg',
        fullName: 'Thomas B. Meier',
        jobTitle: 'Chief Executive Officer',
        company: 'Jumeirah',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDE3NzE2MzE=`,
        photoUrl: 'https://static.swapcard.com/public/images/244c9e623bf44f36b30b2b830b094d74.jpeg',
        fullName: 'Philip Martin Barnes',
        jobTitle: 'Chief Executive Officer',
        company: 'Rotana Hotel Management Corporation PJSC',
    },
    {
        url: `/sa/speakers/profile/hala-matar-choufany`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/HMC-2.jpg',
        fullName: 'Hala Matar Choufany',
        jobTitle: 'President, HVS Middle East, Africa & South Asia',
        company: 'Managing Partner, HVS Dubai',
    },
    {
        url: `/sa/2025/speakers`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Al-Otaibi_Sultan_photo.jpg',
        fullName: 'Sultan Bader Al-Otaibi',
        jobTitle: 'Chief Executive Officer',
        company: 'Taiba Investments',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDAzNDU2NjM=`,
        photoUrl: 'https://static.swapcard.com/public/images/cd2f0cf8c3f8428e86d86e922f7b64fb.png',
        fullName: 'Nick Candy',
        jobTitle: 'Chief Executive Officer',
        company: 'Candy Capital',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDA0OTU5MTE=`,
        photoUrl: 'https://static.swapcard.com/public/images/359e92bb5f56490cb46a404b25bdbfe4.jpeg',
        fullName: 'Marc Socker',
        jobTitle: 'Chief Executive Officer',
        company: 'Maybourne',
    },
    {
        url: `/sa/speakers/RXZlbnRQZW9wbGVfNDM5NTQ2MjE=`,
        photoUrl: 'https://cdn-api.swapcard.com/public/images/047feab9eb2745eb9cc8cbfdd1cd09e2.jpeg',
        fullName: 'Khalid Saud Abuhaimed',
        jobTitle: 'Chief Executive Officer',
        company: 'Al Khozama Investment Company',
    },
    {
        url: `/sa/2025/speakers`,
        photoUrl: 'https://static.swapcard.com/public/images/edfc860d7115437ab95c00263a3833b7.jpeg',
        fullName: 'Maud Bailly',
        jobTitle: 'Chief Executive Officer',
        company: 'Sofitel Legend, Sofitel, MGallery & Emblems',
    },
    {
        url: `/sa/2025/speakers`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/1742306825941.jpg',
        fullName: 'Hossam Al-Basrawi',
        jobTitle: 'Chief Executive Officer',
        company: 'Alrajhi Capital',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDEyMDgzNDk=`,
        photoUrl: 'https://static.swapcard.com/public/images/4ba04289ac88482b8eea156243b38993.jpeg',
        fullName: 'Marc Dardenne',
        jobTitle: 'Chief Executive Officer',
        company: 'Modon Holding Hospitality',
    },
    {
        url: `/world/speakers/profile/mohamed-abdalla-al-zaabi`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/Al-Zaabi_Mohamed-Abdalla_sq.jpg',
        fullName: 'Mohamed Abdalla Al Zaabi',
        jobTitle: 'Group Chief Executive Officer',
        company: 'Miral',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDE1NzI4NjQ=`,
        photoUrl: 'https://static.swapcard.com/public/images/188ddd1dede0470fb0dbe8d7689da7b9.jpeg',
        fullName: 'Alan Faena',
        jobTitle: 'Founder and President',
        company: 'Faena Group',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDA2NTc2MDA=`,
        photoUrl: 'https://static.swapcard.com/public/images/7557dff7b09c456aa6a26d38112546af.png',
        fullName: 'Dimitris Manikis',
        jobTitle: 'President EMEA',
        company: 'Wyndham Hotels & Resorts',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfMzkwNjE0MDQ=`,
        photoUrl: 'https://static.swapcard.com/public/images/d4fcd9cf676c4a6689b8cc875eec082d.jpeg',
        fullName: 'Haitham Mattar',
        jobTitle: 'Managing Director MEA & South West Asia, IHG Hotel & Resort; Special Advisor to Secretary General, UNWTO',
        company: '',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfMzg0MDMyOTQ=`,
        photoUrl: 'https://static.swapcard.com/public/images/cb22de0ff76c48e080aa1ad8b770b936.jpeg',
        fullName: 'Amit Arora',
        jobTitle: 'Chief Operating Officer',
        company: 'Arada',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfNDA5MjI3NTA=`,
        photoUrl: 'https://static.swapcard.com/public/images/cca0cb3e45514a56a843e289363626ad.jpeg',
        fullName: 'Serena Lim',
        jobTitle: 'Chief Growth Officer',
        company: 'The Ascott Limited',
    },
    {
        url: `/world/speakers/profile/puneet-chhatwal`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/profile_picture_2024-09-16-071052_hexy.jpeg',
        fullName: 'Puneet Chhatwal',
        jobTitle: 'Managing Director & CEO',
        company: 'The Indian Hotels Company Limited (IHCL)',
    },
    {
        url: `/world/2024/speakers`,
        photoUrl: 'https://static.swapcard.com/public/images/79c118f294c24c3b90c2504e9ba9b93b.jpeg',
        fullName: 'Pier Paolo Righi',
        jobTitle: 'CEO & President',
        company: 'Karl Lagerfeld',
    },
    {
        url: `/world/speakers/profile/guy-hutchinson`,
        photoUrl: 'https://cms.thebench.com/assets/img/avatars/profile_picture-1_2024-08-20-112759_yvaf.jpeg',
        fullName: 'Guy Hutchinson',
        jobTitle: 'President, Middle East & Africa (MEA)',
        company: 'Hilton',
    },
    {
        url: `/world/speakers/RXZlbnRQZW9wbGVfMzg0MDMxMjY=`,
        photoUrl: 'https://cdn-api.swapcard.com/public/images/03618d250d2f4c30aebff7f3a994a651.jpeg',
        fullName: 'Stephen Sackur',
        jobTitle: 'Former Presenter',
        company: 'HARDTalk',
    },
    
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
                        _.orderBy(speakers, 'lastName').map( (profile, index) => (
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

	// console.log(swapcardData)
	
	const speakerData =  await swapcardData.json()


	return {
		props: { 
			speakers: speakerData.data.eventPerson.nodes
		}
	}
}