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

function Speakers({ seomatic, bizzaboSpeakers, craftCmsProfiles }) {

	// speakers

	// console.log('bizzabo speakers found:', bizzaboSpeakers.length)
	// console.log('bizzabo speaker data:', bizzaboSpeakers)
	// console.log('cms profile data:', craftCmsProfiles)
	
	let orderedSpeakers = _.orderBy( bizzaboSpeakers, [ speaker => speaker.lastname.toLowerCase()], ['asc'])
	// console.log('ordered:', orderedSpeakers)
	
	// customise order (move al saud into first place)
	let customSpeakers = _.sortBy(orderedSpeakers, [
		(speaker => speaker.lastname === 'Al Marri' ? 0 : 1),
		(speaker => speaker.lastname === 'Alabbar' ? 0 : 1),
		(speaker => speaker.lastname === 'Al Zaabi' ? 0 : 1),
		(speaker => speaker.lastname === 'Zubiran' ? 0 : 1),
		(speaker => speaker.lastname === 'Shalaby' ? 0 : 1),
	] )
	// console.log('customSpeakers:', customSpeakers)


	return (
		<>

			<Head>
				{ handleSeomaticMeta( seomatic ) }
            </Head>

            <Header compact />

			<section className="block">
				<div className="container">

					{/* bizzabo speakers */}

					<p className='fs-1 fw-600 lh-1 maxw-40'>2023 SPEAKERS</p>
					
					<SpeakerGrid decal="gap-sm mt-md">
						{customSpeakers.map( speaker => (
							<div key={speaker.id}>
								<Link href={`/world/speakers/${speaker.id}`}>
									<a className={CSS.avatar}>
										{
											speaker.photoSet ? 
											<Image 
												src={speaker.photoSet.large} 
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
									<p className='mt-xs fw-300'>
										<span className='fw-600'>{speaker.firstname} {speaker.lastname}</span> 
										<br/>{speaker.title} 
										<br/>{speaker.company}
									</p>
								</div>
							</div>
						))}
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

	const bizzaboSpeakers = await fetch(`https://api.bizzabo.com/api/speakers?eventId=${process.env.BIZZABO_EVENT_ID_AE}&size=200`, {
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


