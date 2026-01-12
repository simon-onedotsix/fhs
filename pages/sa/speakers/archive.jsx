import _ from 'lodash'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../../fuselage/theme/2025/sa/common/footer/footer'
import { ThemeBg } from '../../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

import { SpeakerGrid } from "../../../fuselage/layout/speaker-grid/speaker-grid"



import CSS from '../../../css/app/speakers-sa-2024.module.css'

import { bzSpeakers as speakers23 } from '../../../data/legacy/sa/2023/bz-speakers-sc-transformed'
import { speakers as speakers24 } from "../../../data/legacy/sa/2024/sc-speakers"
import { speakers as speakers25 } from "../../../data/legacy/sa/2025/sc-speakers"


export default function Speakers() {
    
    
    const SPEAKERS = [
        ...speakers23, ...speakers24, ...speakers25
    ]


	return (
		<div className="bg-default">

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
            </Head>

			<Header compact shim />

			<ThemeBg />

			<section className="block bg-default">
				<div className="container">

                    <p className='fs-1 fw-600 c-secondary lh-1 maxw-40'>2023–2025 SPEAKERS</p>
					
					<SpeakerGrid decal="gap-sm mt-md">
						{
							SPEAKERS.length ?
                            _.orderBy(_.uniqBy(SPEAKERS, 'lastName'), 'lastName').map(speaker => {
								if ( speaker.type ) return (
									<div key={speaker.id}>
                                        <div className={CSS.avatar}>
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
                                        </div>
									
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

