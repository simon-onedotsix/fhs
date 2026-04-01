import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from 'next/head'
import Script from "next/script"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { Header } from '../../ui/site/header'
import { FHS_WORLD as header } from '../../fixtures/nav'

import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'
import { VideoPlayer } from "../../fuselage/components/video-player/video-player"

import { InstagramEmbed } from 'react-social-media-embed'
import { LinkedInEmbed } from 'react-social-media-embed'



// https://www.linkedin.com/posts/dan-hiza-7741b71_the-third-final-day-at-the-future-hospitality-activity-7247174458824699906-Xz4D?utm_source=share&utm_medium=member_desktop
// https://www.linkedin.com/posts/knightfrankmena_knightfrank-futurehospitalitysummit-dubai-activity-7246569517802287105-MbHJ?utm_source=share&utm_medium=member_desktop
// https://www.linkedin.com/posts/hotelcatering-news_hassan-ahdab-chief-hospitality-operations-activity-7250137069321154561-Q7Oh?utm_source=share&utm_medium=member_desktop
// https://www.instagram.com/reel/DA6qUnJufWR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
// https://www.instagram.com/reel/DBIkscGuWDG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==
// https://www.instagram.com/reel/DA0hj36Nkr0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==



export default function VideoTestimonials ({ entries }) {

    // console.log('entries:', entries)

    return (
        <>

                <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>

            <Header
                site={`/world`}
                handle={`World`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />

            <section className="block bg-default">
                <div className="container">
                    <p className="fs-1 fw-500">Video Testimonials</p>
                </div>
            </section>

            <section className="block bg-default">
                <div className="container columns-3 gap-md">
                    {
                        entries.length 
                        ? 
                            entries.map( entry => <VideoTestimonialCard key={entry.id} entry={entry} /> )
                        : 
                            <p>Currently, there are no testimonials available.</p>
                    }
                    
                </div>
            </section>


            <section className="block bg-default">
                <div className="container columns-3 gap-md">
                    
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url="https://www.instagram.com/p/DA6qUnJufWR/" width={'100%'} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url="https://www.instagram.com/p/DBIkscGuWDG/" width={'100%'} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <InstagramEmbed url="https://www.instagram.com/p/DA0hj36Nkr0/" width={'100%'} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <LinkedInEmbed 
                            url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384"
                            postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
                            width={'100%'}
                            height={570} 
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <LinkedInEmbed 
                            url="https://www.linkedin.com/embed/feed/update/urn:li:share:7250136666856734720"
                            postUrl="https://www.linkedin.com/posts/hotelcatering-news_hassan-ahdab-chief-hospitality-operations-activity-7250137069321154561-Q7Oh"
                            width={'100%'}
                            height={570} 
                        />
                    </div>

                </div>
            </section>



            <Footer />
			<LenisScroller />
        </>
    )
}

VideoTestimonials.theme = 'world-2024'



export const VideoTestimonialCard = ({ entry }) => {

    if ( !entry ) return

    return (
        <div className="">
            <VideoPlayer videoUrl={entry.videoShareUrl} controls />
            <div className="formatted mt-xs">
                <p className="fs-4 lh-2">&ldquo;{ entry.testimonial }&rdquo;</p>
                <p className="fw-600 lh-3 c-secondary">{ entry.fullName } <br/>
                <span className="fs-sm c-secondary">{ entry.jobTitle }{ entry.organisation && ","} { entry.organisation }</span></p>
            </div>
        </div>
    )
}



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
                entries(site: "${process.env.SITE_HANDLE_AE}", section: "videoTestimonials") {
					... on videoTestimonials_videoTestimonial_Entry {
                        id
                        slug
                        title
                        videoShareUrl
                        fullName
                        jobTitle
                        organisation
                        testimonial
                    }
				}
            }
          
        `
	})

	return {
		props: { 
			entries: craftCmsProfiles.data.entries
		}
	}
}