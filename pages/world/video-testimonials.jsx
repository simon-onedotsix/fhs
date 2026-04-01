import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import Head from 'next/head'
import Script from "next/script"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_WORLD as header } from '../../fixtures/nav'

import { Footer } from '../../fuselage/theme/2024/world/common/footer/footer'
import { VideoPlayer } from "../../fuselage/components/video-player/video-player"

export default function VideoTestimonials ({ entries }) {

    // console.log('entries:', entries)

    return (
        <>

                <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>

            <EventsBar site={'/world'} />
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