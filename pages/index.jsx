import { gql } from "@apollo/client"
import craftApolloClient from "./api/apollo"

import Head from 'next/head'

import { LenisScroller } from '../fuselage/animation/lenis-scroller'

import { QuerySEO } from "../graphql/queries"
import handleSeomaticMeta from '../lib/seomatic'

import { Header } from '../fuselage/theme/2024/global/common/header/header'
import { Footer } from '../fuselage/theme/2024/global/common/footer/footer'

import { HeroUnitVideo } from '../fuselage/theme/2024/world/blocks/hero-unit-video/hero-unit-video'
import { SectionDivider } from '../fuselage/theme/2024/world/blocks/section-divider/section-divider'
import { UpcomingEvents, EventGroupCard, EventCard } from '../fuselage/theme/2024/world/blocks/upcoming-events/upcoming-events'
import { ContentCard } from "../fuselage/theme/2024/world/components/content-card/content-card"


import { ArrowButton } from '../fuselage/components/arrow-button/arrow-button'
import { AngledSection } from '../fuselage/blocks/angled-section/angled-section'
import { Floater, Floaters, FloaterLogo, FloaterWebsiteButton } from '../fuselage/blocks/floater/floater'
import { SpeakerCard } from '../fuselage/components/speaker-card/speaker-card'

export default function Home ({ data, seomatic, podcasts, industryNews }) {

    // console.log('data:', data)
    // console.log('seomatic:', seomatic)
    // console.log('contentLibraryPosts:', data.contentLibraryPosts)
    // console.log('podcasts:', podcasts)
    // console.log('industryNews:', industryNews)
    

    const handleUpcomingEvents = ( events ) => {
        
        if ( ! events ) return

        // console.log('upocoming events:', events)

        return (
            <UpcomingEvents landscape={true}>
                {
                    events.map( event => {
                        return (
                            <EventGroupCard
                                key={event.id}
                                theme={event.theme} 
                                location={event.heading} 
                                dates={{ startDate: event.startDate, endDate: event.endDate}}
                                dateOverride={event.dateOverride}
                                venue={event.venue}
                            >
                                {
                                    event.streams &&
                                    event.streams.map( stream => (
                                        <EventCard
                                            key={stream.id}
                                            title={stream.heading}
                                            logo={stream.logo[0]}
                                            passLink={stream.purchasePassLink} 
                                            websiteLink={stream.websiteLink} 
                                            theme={event.theme} 
                                        />
                                    ))
                                }
                            </EventGroupCard>
                        )
                    })
                }
            </UpcomingEvents>
        )
    }

    const handleEvents = ( events ) => {
        
        if ( !events || !events.length ) return

        // console.log('focussed events:', events)

        return events.map( (event, index) => {
            return <Floater key={index} hero={event.hero[0]}>
                {
                    event.logo &&
                    <FloaterLogo logo={event.logo[0]} />
                    
                }
                <div className='formatted mt-sm' dangerouslySetInnerHTML={{__html: event.body }} />
                {
                    event.websiteUrl &&
                    <p className='mt-sm'><FloaterWebsiteButton href={event.websiteUrl} /></p>
                }
            </Floater>
        })
    }

    const handleContentGroup = ( id, data ) => {

        console.log('content-group:', data)

        return (
            <section key={id} className={`c-white`}>
                <p className='fs-1 fw-500 lh-1 c-white'>{ data.heading }</p>

                <div className="columns-4 gap-sm mt-md">
                    {
                        data.posts.map( entry => (
                            <ContentCard
                                key={entry.id}
                                url={`/content-library/${entry.slug}`}
                                heroUrl={entry.contentLibraryHero && entry.contentLibraryHero[0] ? entry.contentLibraryHero[0].url : null}
                                heading={entry.title}
                                excerpt={entry.excerpt}
                                contentTypes={entry.contentTypes}
                                postDate={entry.postDate}
                                type={entry.contentTypes[0].slug}
                            />
                        ))
                    }
                </div>

                {
                    data.ctaButtonLink && data.ctaButtonLabel ?
                        <div className='mt-md mb-xl'>
                            <ArrowButton href={ data.ctaButtonLink } theme={{ arrow: `var(--primary-3)`, border: `var(--primary-3)`, label: `white`}}>{ data.ctaButtonLabel }</ArrowButton>
                        </div>
                    :
                        <></>

                }
            </section>
        )
    }
    
    const handleContentGroupFallback = ( heading, data, ctaButtonLink, ctaButtonLabel ) => {

        // console.log('content-group:', data)

        return (
            <section className={`c-white`}>
                <p className='fs-1 fw-500 lh-1 c-white'>{ heading }</p>

                <div className="columns-4 gap-sm mt-md">
                    {
                        data.map( (entry, index) => (
                            <ContentCard
                                key={index}
                                url={`/content-library/${entry.slug}`}
                                heroUrl={entry.contentLibraryHero && entry.contentLibraryHero[0] ? entry.contentLibraryHero[0].url : null}
                                heading={entry.title}
                                excerpt={entry.excerpt}
                                contentTypes={entry.contentTypes}
                                postDate={entry.postDate}
                                type={entry.contentTypes[0].slug}
                            />
                        ))
                    }
                </div>

                <div className='mt-md mb-xl'>
                    <ArrowButton href={ ctaButtonLink } theme={{ arrow: `var(--primary-3)`, border: `var(--primary-3)`, label: `white`}}>{ ctaButtonLabel }</ArrowButton>
                </div>

            </section>
        )
    }

    const handleCmsSpeakerProfiles = ( profiles ) => {

        if ( ! profiles ) return

        return profiles.map( profile => (
            <SpeakerCard
                key={profile.id}
                // url={`/speakers/profile/${profile.slug}`} 
                color={"white"}
                photoUrl={profile.avatar[0] ? profile.avatar[0].url : null }
                fullName={profile.title}
                jobTitle={profile.positions[0].jobTitle}
                company={profile.positions[0].organisation}
            />
        ))
    }


    
    return (
        <div className='bg-primary' style={{ backgroundColor: `var(--primary)`, backgroundImage: `url('/assets/theme/fhs-2024-global-bg.svg')` }}>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/favicon-16x16.png" sizes="16x16" />
                { handleSeomaticMeta( seomatic ) }
            </Head>


            <Header overlaid inverse />


            <HeroUnitVideo video={'https://cms.thebench.com/assets/video/fhs-2023-opt.mp4'} poster={'/assets/video/fhs-2023-opt-poster.jpg'}>
                <SectionDivider 
                    heading={`Future Hospitality Summit`} 
                    description={`Where the world's most influential hospitality investment decision-makers connect, exchange knowledge and explore new partnerships.`}
                />
            </HeroUnitVideo>


            <section className={`block`}>
                <div className="container">
                    <p className='fs-0 fw-700 center'>Upcoming FHS&nbsp;events</p>
                </div>

                <div className="container">
                    { handleUpcomingEvents( data.events )}
                </div>

                <div className="container center">
                    <ArrowButton href={'fhs-club'} theme={{ arrow: `var(--primary-3)`, border: `var(--primary-3)`, label: `white`}}>FHS Club Loyalty Programme</ArrowButton>
                </div>
            </section>

            

          
            {
                data.profiles.length &&
                <>
                    <section className="block bg-primary" style={{ background: `transparent`, width: `100%`, overflow: `hidden` }}>
                        <div className="container">
                            <SectionDivider 
                                heading={`Thought Leadership`} 
                                description={`With an unparalleled lineup of global hospitality leaders taking the stage every year, FHS promises to provide valuable insights and the latest industry knowledge through panel talks and round-table discussions with experts.`}
                            />
                        </div>
                    </section>

                    <section className="block bg-primary" style={{ background: `transparent`}}>
                        <div className="container columns-4 gap-md">
                            { handleCmsSpeakerProfiles( data.profiles )}
                        </div>
                    </section>
                </>
            }

            
            <section className="block bg-primary mt-lg" style={{ background: `transparent`, width: `100%`, overflow: `hidden` }}>
                <div className="container">
                    <SectionDivider 
                        heading={`News and Insights`} 
                        description={`With an international media frenzy, FHS takes center stage as the ultimate platform for the industry's hottest deal signings and groundbreaking announcements. Global hospitality leaders use the digital FHS platform to share invaluable industry intelligence.`}
                    />
                </div>
            </section>

            
            <section className="block bg-primary" style={{ background: `transparent`, width: `100%`, overflow: `hidden` }}>
                { handleContentGroupFallback('Latest Podcasts', podcasts, '/content-library/category/podcast', 'See more podcasts') }
                { handleContentGroupFallback('Latest Industry News', industryNews, '/content-library/category/industry-news', 'See more industry news') }
            </section>
         


            <Footer />
            <LenisScroller />

            {/* <CtaTab /> */}
        </div>
    )
}
Home.theme = 'global-2024'






export async function getStaticProps() {

    const { data } = await craftApolloClient().query({
        query: gql`
            query LandingPage {
                entry(site: "${process.env.SITE_HANDLE}", id: "77020") {
                    ... on ${process.env.SITE_HANDLE}Homepage_${process.env.SITE_HANDLE}Homepage_Entry {
                        id
                        title
                        theme
                        events {
                            ... on events_BlockType {
                                id
                                heading
                                startDate
                                endDate
                                dateOverride
                                venue
                                theme
                                streams {
                                    ... on streams_stream_BlockType {
                                        id
                                        logo {
                                            id
                                            url
                                            width
                                            height
                                        }
                                        heading
                                        purchasePassLink
                                        websiteLink
                                    }
                                }
                            }
                        }
                        eventFloaters {
                            ... on eventFloaters_event_BlockType {
                                id
                                hero {
                                    id
                                    url
                                    width
                                    height
                                }
                                logo {
                                    id
                                    url
                                    width
                                    height
                                }
                                body
                                websiteUrl
                                opensInNewWindow
                            }
                        }
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
                            }
                        }
                        contentLibraryPosts {
                            ... on contentLibraryPosts_BlockType {
                                id
                                heading
                                ctaButtonLink
                                ctaButtonLabel
                                posts (section: "contentLibrary" site:["${process.env.SITE_HANDLE}", "${process.env.SITE_HANDLE_AE}", "${process.env.SITE_HANDLE_SA}"]) {
                                    ... on contentLibrary_article_Entry {
                                        id
                                        slug
                                        title
                                        postDate
                                        excerpt
                                        contentLibraryHero {
                                            id
                                            url
                                            width
                                            height
                                        }
                                        contentTypes {
                                            ... on contentLibrary_Category {
                                                id
                                                title
                                                slug
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        ${QuerySEO}
                    }
                }
                podcasts: entries(
                    section: "contentLibrary"
                    site: ["${process.env.SITE_HANDLE}", "${process.env.SITE_HANDLE_AE}", "${process.env.SITE_HANDLE_SA}"]
                    limit: 4
                    relatedTo: "7701"
                ){
                    ... on contentLibrary_article_Entry {
                        id
                        slug
                        title
                        postDate
                        excerpt
                        contentLibraryHero {
                            id
                            url
                            width
                            height
                        }
                        contentTypes {
                            ... on contentLibrary_Category {
                                id
                                title
                                slug
                            }
                        }
                    }
                }
                industryNews: entries(
                    section: "contentLibrary"
                    site: ["${process.env.SITE_HANDLE}", "${process.env.SITE_HANDLE_AE}", "${process.env.SITE_HANDLE_SA}"]
                    limit: 4
                    relatedTo: "7703"
                ){
                    ... on contentLibrary_article_Entry {
                        id
                        slug
                        title
                        postDate
                        excerpt
                        contentLibraryHero {
                            id
                            url
                            width
                            height
                        }
                        contentTypes {
                            ... on contentLibrary_Category {
                                id
                                title
                                slug
                            }
                        }
                    }
                }
            }
          
        `
        })

        return {
        props: {
            data: data.entry,
            podcasts: data.podcasts,
            industryNews: data.industryNews,
            seomatic: data.entry.seomatic
        },
    }
}