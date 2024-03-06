import _ from 'lodash'

import Image from 'next/image'
import Link from 'next/link'

import { Header } from '../../../../fuselage/theme/2022/ae/global/header/header'
import { Footer } from '../../../../fuselage/global-ae/footer/footer'
import { SpeakerGrid } from "../../../../fuselage/layout/speaker-grid/speaker-grid"


import CSS from '../../../../css/app/speakers.module.css'

// import legacy data
import { bzSpeakers } from "../../../../data/legacy/ae/2022/bz-speakers"


function Speakers() {

	let orderedSpeakers = _.orderBy( bzSpeakers.content, [ speaker => speaker.lastname.toLowerCase()], ['asc'])

	return (
		<>
            <Header 
				compact 
				shim
				path={'/speakers'}
				theme={{ 
					primary: 'white', 
					secondary: 'var(--accent)', 
					text: 'white',
					buttons: 'var(--primary)',
					buttonText: 'white',
					headerBg: 'bg-theme',
					overlayBg: 'var(--primary)',
				}} 
			/>

			<section className="block">
				<div className="container">

					{/* bizzabo speakers */}

					<p className='fs-1 fw-600 c-primary lh-1 maxw-40'>2022 SPEAKERS</p>
					
					<SpeakerGrid decal="gap-sm mt-md">
						{orderedSpeakers.map( speaker => (
							<div key={speaker.id}>
								<Link href={`/world/2022/speakers/${speaker.id}`}>
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
			
			<Footer theme={{ footerBg: 'bg-theme' }} />
		</>
	)
}

Speakers.theme = 'ae-2022'


export default Speakers


