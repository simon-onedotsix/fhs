import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Image from 'next/image'
import Link from 'next/link'

import { Header, HeaderShim } from '../../fuselage/theme/2024/eu/global/header/header'
import { Footer } from "../../fuselage/theme/2024/eu/global/footer/footer"
import { SpeakerGrid } from '../../fuselage/layout/speaker-grid/speaker-grid'

import CSS from '../../css/app/speakers.module.css'

function Speakers({ craftCmsProfiles }) {

	// console.log('cms profile data:', craftCmsProfiles)

	return (
		<div className='bg-primary'>

            <Header compact shimMobile={true} />

            <HeaderShim />

			<section className="block">

				<p className='fs-1 fw-600 lh-1 c-accent'>Advisory Board</p>

				<SpeakerGrid decal="gap-sm mt-md">
					{craftCmsProfiles.map( speaker => (
						<div key={speaker.id}>
							<Link href={`/eu/speakers/profile/${speaker.slug}`}>
								<a className={CSS.avatar}>
									<Image 
										src={speaker.avatar[0].url} 
										layout='fill'
										alt="profile picture"
									/>
								</a>
							</Link>
							<div>
								<p className='mt-xs'>
									<span className='fw-600'>
									{speaker.title}</span> <br/>
									{speaker.positions[0] && speaker.positions[0].jobTitle} <br/>
									{speaker.positions[0] && speaker.positions[0].organisation} <br/>
									
								</p>
							</div>
						</div>
					))}
				</SpeakerGrid>


			</section>
						
			<Footer />
		</div>
	)
}

Speakers.theme = 'eu-2024'


export async function getStaticProps() {


	const craftCmsProfiles = await craftApolloClient().query({
        query: gql`
            query Profiles {
                entries(site: "${process.env.SITE_HANDLE_EU}", section: "profileGroups", id: "134294") {
					... on profileGroups_default_Entry {
						id
						title
						profiles {
							... on profiles_profile_Entry {
								id
								slug
								title
								avatar {
									... on avatars_Asset {
										id
										url
										width
										height
									}
								}
								positions {
									... on positions_BlockType {
										id
										jobTitle
										organisation
									}
								}
								profile
							}
						}
					}
				}
            }
          
        `
	})

	return {
		props: { 
			craftCmsProfiles: craftCmsProfiles.data.entries[0].profiles
		}
	}
}

export default Speakers


