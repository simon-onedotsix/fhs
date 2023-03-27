import Layout from '../../fuselage/templates/sa/layout'

import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from 'next/head'

import { Header } from '../../fuselage/global-sa/header/header'
import { Footer } from '../../fuselage/global-sa/footer/footer'
import { SpeakerGrid } from '../../fuselage/layout/speaker-grid/speaker-grid'
import { SpeakerCard } from '../../fuselage/components/speaker-card/speaker-card'

import handleSeomaticMeta from '../../lib/seomatic'

function Speakers({ seomatic, craftCmsProfiles }) {

	// speakers

	// console.log('cms profile data:', craftCmsProfiles)

	return (
		<div className='bg-secondary'>

			<Head>
				{ handleSeomaticMeta( seomatic ) } 
            </Head>

			<Header compact shim />

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


