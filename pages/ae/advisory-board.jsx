import { ThemeBg } from "../../fuselage/theme/2023/ae/theme-bg"

import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Header, HeaderShim } from '../../fuselage/global-ae/header/header'
import { Footer } from '../../fuselage/global-ae/footer/footer'
import { StickySidebar } from '../../fuselage/layout/sticky-sidebar/sticky-sidebar'
import { SpeakerGrid } from '../../fuselage/layout/speaker-grid/speaker-grid'
import HubspotForm from'../../fuselage/components/hubspot-form/hubspot-form'

import { Container } from "../../fuselage/theme/2023/ae/layout/container/container"

import handleSeomaticMeta from '../../lib/seomatic'

import CSS from '../../css/app/speakers.module.css'

function Speakers({ seomatic, craftCmsProfiles }) {

	// console.log('cms profile data:', craftCmsProfiles)

	return (
		<>

			<Head>
				{ handleSeomaticMeta( seomatic ) }
            </Head>

			<ThemeBg />

            <Header compact shim theme={{ 
                primary: 'var(--primary)', 
                secondary: 'var(--secondary)', 
                text: 'var(--primary)',
                buttons: 'var(--primary)',
                buttonText: 'white',
                headerBg: '#ffffffee',
                overlayBg: 'var(--primary)',
            }} />

			<section className="block flush">
				<Container flushRight maxWidth={`85%`} decal={`bg-white-90 p-md`}>

					{/* <HeaderShim /> */}

					<p className='fs-0 fw-600 lh-1'>2023 Advisory Board</p>

					<SpeakerGrid decal="gap-sm mt-md">
						{craftCmsProfiles.map( speaker => (
							<div key={speaker.id}>
								<Link href={`/ae/speakers/profile/${speaker.slug}`}>
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

				</Container>
			</section>
						
			<Footer theme={{ footerBg: 'bg-white-90' }} />
		</>
	)
}

Speakers.theme = 'ae'

export async function getStaticProps() {

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


	const craftCmsProfiles = await craftApolloClient().query({
        query: gql`
            query Profiles {
                entries(site: "${process.env.SITE_HANDLE_AE}", section: "profileGroups", id: "10222") {
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


