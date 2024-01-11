import Layout from '../../../../fuselage/templates/sa/layout'

import _ from 'lodash'

import Image from 'next/image'
import Link from 'next/link'

import { Header } from '../../../../fuselage/theme/2023/sa/global/header/header'
import { Footer } from '../../../../fuselage/global-sa/footer/footer'
import { SpeakerGrid } from "../../../../fuselage/layout/speaker-grid/speaker-grid"

// legacy data

import { bzSpeakers } from '../../../../data/legacy/sa/2023/bz-speakers'

import CSS from '../../../../css/app/speakers.module.css'

function Speakers({ bizzaboSpeakers }) {


	// console.log('bizzabo speakers found:', bizzaboSpeakers.length)
	// console.log('bizzabo speaker data:', bizzaboSpeakers)
	// console.log('cms profile data:', craftCmsProfiles)
	


	// reorder speakers alphabetically by lastname

	let orderedSpeakers = _.orderBy( bzSpeakers.content, [ speaker => speaker.lastname.toLowerCase()], ['asc'])
	// console.log('ordered:', orderedSpeakers)

	// customise order (move al saud into first place)
	let customSpeakers = _.sortBy(orderedSpeakers, speaker => speaker.lastname === 'Al Saud' ? 0 : 1 )


	
	return (
		<div className='bg-secondary'>

			<Header 
				compact 
				shim
				path={'/partners'}
				theme={{ 
					primary: 'white', 
					secondary: 'var(--secondary)', 
					text: 'white',
					buttons: 'var(--primary)',
					buttonText: 'white',
					headerBg: 'linear-gradient(90deg, #7A4AFF 0%, var(--secondary) 73%)',
					overlayBg: 'var(--primary)',
				}}
			/>

			<section className="block bg-theme">
				<div className="container">

					{/* bizzabo speakers */}

					<p className='fs-1 fw-600 lh-1 maxw-40'>2023 SPEAKERS</p>
					
					<SpeakerGrid decal="gap-sm mt-md">
						{customSpeakers.map( speaker => (
							<div key={speaker.id}>
								{/* <Link href={`/sa/2023/speakers/${speaker.id}`}> */}
									<span className={CSS.avatar}>
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
									</span>
								{/* </Link> */}
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


export default Speakers


