import { ThemeBg } from "../../../../fuselage/theme/2023/ae/theme-bg"

import _ from 'lodash'

import Image from 'next/image'
import Link from 'next/link'

import { Header, HeaderShim } from '../../../../fuselage/theme/2022/ae/global/header/header'
import { Footer } from '../../../../fuselage/global-ae/footer/footer'
import { SpeakerGrid } from "../../../../fuselage/layout/speaker-grid/speaker-grid"
import { Container } from "../../../../fuselage/theme/2023/ae/layout/container/container"


import CSS from '../../../../css/app/speakers.module.css'


// import legacy data
import { bzSpeakers } from "../../../../data/legacy/ae/2023/bz-speakers"



function Speakers() {

	// speakers

	// console.log('bizzabo speakers found:', bzSpeakers.content.length)
	// console.log('bizzabo speaker data:', bzSpeakers.content)

	
	let orderedSpeakers = _.orderBy( bzSpeakers.content, [ speaker => speaker.lastname.toLowerCase()], ['asc'])
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

			<ThemeBg />

            <Header 
				compact 
				shim 
				theme={{ 
					primary: 'var(--primary)', 
					secondary: 'var(--secondary)', 
					text: 'var(--primary)',
					buttons: 'var(--primary)',
					buttonText: 'white',
					headerBg: '#ffffffee',
					overlayBg: 'var(--primary)',
				}}
				path={`/speakers`}
			/>

			<section className="block flush">
				<Container flushRight maxWidth={`85%`} decal={`bg-white-90 p-md`}>

					{/* bizzabo speakers */}

					<p className='fs-1 fw-600 lh-1 maxw-40'>2023 SPEAKERS</p>
					
					<SpeakerGrid decal="gap-sm mt-md">
						{
							customSpeakers.map( (speaker, index) => (
								<div key={speaker.id}>
									<Link href={`/ae/2023/speakers/${speaker.id}`}>
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
							))
						}
					</SpeakerGrid>
			
				</Container>
				
			</section>
			
			<Footer theme={{ footerBg: 'bg-white' }} />
		</>
	)
}

Speakers.theme = 'ae-2023'



export default Speakers


