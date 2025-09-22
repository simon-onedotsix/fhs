import Layout from '../../fuselage/templates/sa/layout'

import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from 'next/head'

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'

import { ThemeBg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

import { SpeakerGrid } from '../../fuselage/layout/speaker-grid/speaker-grid'
import { SpeakerCard } from '../../fuselage/components/speaker-card/speaker-card'

import { VideoTestimonialCard } from './video-testimonials'
import ReactPlayer from "react-player/youtube"

import handleSeomaticMeta from '../../lib/seomatic'

function Speakers({ videos, craftCmsProfiles }) {

	// speakers

	// console.log('cms profile data:', craftCmsProfiles)

	return (
		<>

			<Head>
				<link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
            </Head>

			<Header compact shim />


			{/* highlights video */}

			{/* <section className="block bg-theme">
				<div className="container center">
					<p className="fs-1 fw-500">Highlights</p>
				</div>
				<div className="container maxw-60" style={{ aspectRatio: 16/9 }}>
					<ReactPlayer
                        url={'https://youtu.be/7Qyzlgh4TYM?si=uA4FL6e54XwJ2fhf'}
                        width='100%'
                        height='100%'
                        controls={true}
                        muted={false}
                        playing={false}
                    />
				</div>
			</section> */}



			{/* AB interviews */}

            <section className="block bg-default">
                <div className="container center">
                    <p className="fs-1 fw-500 c-secondary">Member Interviews</p>
                </div>

                <div className="container columns-4 gap-sm">
                    {
                        videos.length 
                        ? 
                            videos.map( entry => <VideoTestimonialCard key={entry.id} entry={entry} /> )
                        : 
                            <p>Currently, there are no testimonials available.</p>
                    }
                    
                </div>
            </section>


			{/* AB listing */}

			<section className="block bg-neutral-01">
				<div className="container">

					<p className='fs-1 fw-600 c-secondary lh-1 center'>2026 Advisory Board</p>

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
								color={'white'}
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

Speakers.theme = 'sa-2025'



export async function getStaticProps() {


	const craftCmsProfiles = await craftApolloClient().query({
        query: gql`
            query Profiles {
                entries(site: "${process.env.SITE_HANDLE_SA}", section: "profileGroups", id: "276876") {
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

	const cmsVideos = await craftApolloClient().query({
        query: gql`
            query Videos {
                entry(site: "${process.env.SITE_HANDLE_SA}", id: "227427") {
					... on fhsSaAdvisoryBoard_fhsSaAdvisoryBoard_Entry {
					id
					slug
					title
					videos {
						... on videos_video_BlockType {
							id
							videoShareUrl
							fullName
							jobTitle
							organisation
							testimonial
							}
						}
					}
				}
            }
          
        `
	})

	return {
		props: { 
			craftCmsProfiles: craftCmsProfiles.data.entries[0].profiles,
			videos: cmsVideos.data.entry.videos
		}
	}
}

export default Speakers


