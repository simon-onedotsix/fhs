import { gql } from "@apollo/client"
import craftApolloClient from "./api/apollo"

import Head from 'next/head'

import { QuerySEO } from "../graphql/queries"
import handleSeomaticMeta from '../lib/seomatic'

import { Header } from '../fuselage/theme/2024/global/common/header/header'
import { Footer } from '../fuselage/global/footer/footer'

import { HeroUnitVideo } from '../fuselage/theme/2024/ae/blocks/hero-unit-video/hero-unit-video'
import { SectionDivider } from '../fuselage/theme/2024/ae/blocks/section-divider/section-divider'

import { UpcomingEvents, EventGroupCard, EventCard } from '../fuselage/theme/2024/ae/blocks/upcoming-events/upcoming-events'

import { ArrowButton } from '../fuselage/components/arrow-button/arrow-button'
import { ContentCard } from "../fuselage/components/content-card/content-card"
import { AngledSection } from '../fuselage/blocks/angled-section/angled-section'
import { Floater, Floaters, FloaterLogo, FloaterWebsiteButton } from '../fuselage/blocks/floater/floater'
import { SpeakerCard } from '../fuselage/components/speaker-card/speaker-card'

export default function Home ({ data, seomatic }) {

    // console.log('data:', data)
    // console.log('seomatic:', seomatic)
    // console.log('contentLibraryPosts:', data.contentLibraryPosts)


    const handleUpcomingEvents = ( events ) => {
        
        if ( ! events ) return

        console.log('upocoming events:', events)

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

        // console.log('content-group:', data)

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

    const handleCmsSpeakerProfiles = ( profiles ) => {

        if ( ! profiles ) return

        return profiles.map( profile => (
            <SpeakerCard
                key={profile.id}
                // url={`/speakers/profile/${profile.slug}`} 
                photoUrl={profile.avatar[0] ? profile.avatar[0].url : null }
                fullName={profile.title}
                jobTitle={profile.positions[0].jobTitle}
                company={profile.positions[0].organisation}
            />
        ))
    }


    
    return (
        <div className='bg-primary'>
            <Head>
                { handleSeomaticMeta( seomatic ) }
            </Head>


            <Header overlaid inverse />


            <HeroUnitVideo>
                <SectionDivider 
                    heading={`Future Hospitality Summit`} 
                    description={`Future Hospitality is an international platform where the world's most influential hospitality investment decision-makers connect, exchange knowledge and explore new partnerships.`}
                />
            </HeroUnitVideo>


            { handleUpcomingEvents( data.events )}

            
            {/* <AngledSection innerBg={`white`} transitions={`var(--primary)`}>
                <SectionDivider 
                    theme={{ heading: `var(--primary)`, body: `var(--default-text-color)`, keyline: `var(--accent)` }}
                    heading={`Our Event Brands`} 
                    description={`Future Hospitality Summit series includes conference tracks from the Arabian Hospitality Investment Conference (AHIC) and Global Restaurant Investment Forum (GRIF) to create an unrivalled platform for holistic hospitality investment strategies.`}
                />
                <div className="container">
                    <Floaters flipped>
                        { handleEvents( data.eventFloaters ) }
                    </Floaters>
                </div>
            </AngledSection> */}

          
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
                { data.contentLibraryPosts.map( (group, index) => handleContentGroup(index, group) ) }
            </section>
         

            <Footer />

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
            }
          
        `
        })

        return {
        props: {
            data: data.entry,
            seomatic: data.entry.seomatic
        },
    }
}