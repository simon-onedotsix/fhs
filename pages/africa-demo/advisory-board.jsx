import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { Header } from '../../fuselage/theme/2025/africa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/africa/common/footer/footer'
import { PageHeader } from '../../fuselage-africa/blocks/page-header/page-header'
import { SpeakerGrid } from '../../fuselage/layout/speaker-grid/speaker-grid'

import handleSeomaticMeta from '../../lib/seomatic'

import CSS from '../../css/app/speakers.module.css'

function Speakers({ seomatic, craftCmsProfiles }) {

	// console.log('cms profile data:', craftCmsProfiles)

	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) }
            </Head>

			<Header compact />
			
			<PageHeader>
				<p className='fs-1 fw-600 lh-1'>Advisory Board</p>
				<p className="mt-sm">Made up of representatives from sponsoring companies and hand selected investors representing the most senior decision-makers and thought-leaders in the African hotel investment industry. The FHS Africa Advisory Board convenes annually to discuss the trends of the future of hospitality into the FHS Africa programme.</p>
			</PageHeader>

			<section className="block">
				<div className="container">

					<SpeakerGrid decal="gap-sm mt-md">
						{craftCmsProfiles.map( speaker => (
							<div key={speaker.id}>
								<Link href={`/africa/speakers/profile/${speaker.slug}`}>
									<a className={CSS.avatar}>
										{
											speaker.avatar[0] ?
											<Image 
												src={speaker.avatar[0].url} 
												layout='fill'
												alt="profile picture"
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
										<span className='fw-600'>
										{speaker.title}</span> <br/>
										{speaker.positions[0] && speaker.positions[0].jobTitle} <br/>
										{speaker.positions[0] && speaker.positions[0].organisation} <br/>
										
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

Speakers.theme = 'africa'




export async function getStaticProps() {

	const cmsData = await craftApolloClient().query({
        query: gql`
			query SEO {
				entry(site: "${process.env.SITE_HANDLE_AFRICA}", id: "15801") {
					title
					seomatic (asArray: true) {
						metaTitleContainer
						metaTagContainer
					}
				}
			}
        `
    })


	const craftCmsProfiles = await craftApolloClient().query({
        query: gql`
            query Profiles {
                entries(site: "${process.env.SITE_HANDLE_AFRICA}", section: "profileGroups", id: "16501") {
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
			seomatic: cmsData.data.entry.seomatic,
			craftCmsProfiles: craftCmsProfiles.data.entries[0].profiles
		}
	}
}

export default Speakers


