import Layout from '../../fuselage/templates/sa/layout'

import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from 'next/head'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { Header } from '../../fuselage/theme/2024/sa/globals/header/header'
import { Footer } from "../../fuselage/theme/2024/sa/globals/footer/footer"

import { ThemeBg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

import { SpeakerGrid } from '../../fuselage/layout/speaker-grid/speaker-grid'
import { SpeakerCard } from '../../fuselage/components/speaker-card/speaker-card'

import handleSeomaticMeta from '../../lib/seomatic'

function Speakers({ seomatic, craftCmsProfiles }) {

	// speakers

	// console.log('cms profile data:', craftCmsProfiles)

	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
				{ handleSeomaticMeta( seomatic ) } 
            </Head>

			<Header compact shim />

			<ThemeBg />

			<section className="block bg-theme">
				<div className="container">

					<p className='fs-1 fw-600 lh-1'>Advisory Board</p>

					<SpeakerGrid decal="gap-sm mt-md">
						{craftCmsProfiles.map( speaker => (
							<SpeakerCard 
								key={speaker.id}
								url={`/sa/speakers/profile/${speaker.slug}`}
								profile={speaker.profile} 
								photoUrl={speaker.avatar[0] ? speaker.avatar[0].url : null}
								fullName={speaker.title}
								jobTitle={speaker.positions[0] && speaker.positions[0].jobTitle}
								company={speaker.positions[0] && speaker.positions[0].organisation}
							/>
						))}
					</SpeakerGrid>

				</div>
			</section>

			<Footer />
			<LenisScroller />

		</>
	)
}

Speakers.theme = 'sa-2024'



export async function getStaticProps() {

	const cmsData = await craftApolloClient().query({
        query: gql`
			query SEO {
				entry(site: "${process.env.SITE_HANDLE_SA}", id: "63858") {
					title
					seomatic (asArray: true) {
						KSAtaTitleContainer
						metaTagContainer
					}
				}
			}
        `
    })

	const craftCmsProfiles = await craftApolloClient().query({
        query: gql`
            query Profiles {
                entries(site: "${process.env.SITE_HANDLE_SA}", section: "profileGroups", id: "64046") {
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
			// seomatic: cmsData.data.entry.seomatic,
			craftCmsProfiles: craftCmsProfiles.data.entries[0].profiles
		}
	}
}

export default Speakers


