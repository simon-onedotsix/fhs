import Layout from '../fuselage/templates/layout'

import { gql } from "@apollo/client"
import craftApolloClient from "./api/apollo"

import Head from 'next/head'
import Image from 'next/image'

import { 
    QuerySEO
} from "../graphql/queries"
import handleSeomaticMeta from '../lib/seomatic'

import { Header } from '../fuselage/global/header/header'
import { Footer } from '../fuselage/global/footer/footer'
import { AboveTheFold, BelowTheFold } from '../fuselage/blocks/hero-unit-events/hero-unit-events'
import { EventCard } from '../fuselage/components/event-card/event-card'
import { ArrowButton } from '../fuselage/components/arrow-button/arrow-button'
import { ContentCard } from "../fuselage/components/content-card/content-card"

export default function Homepage ({ data, seomatic }) {

    // console.log('data:', data)
    // console.log('seomatic:', seomatic)
    // console.log('contentLibraryPosts:', data.contentLibraryPosts)

    const handleContentGroup = ( id, data ) => {

        // console.log('content-group:', data)

        return (
            <section key={id} className={`c-white`}>
                <p className='fs-2 fw-600 lh-1 c-accent'>{ data.heading }</p>

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
                        <div className='mt-md'>
                            <ArrowButton href={ data.ctaButtonLink } theme={{ arrow: `var(--accent)`, border: `var(--accent)`, label: `white`}}>{ data.ctaButtonLabel }</ArrowButton>
                        </div>
                    :
                        <></>

                }
            </section>
        )
    }


    return (
        <>
            <Head>
                { handleSeomaticMeta( seomatic ) }
            </Head>


            <Header overlaid />

            <AboveTheFold hero={{ url: `/assets/img/global/homepage/hero.jpg`, width: 2100, height: 2100}}>

                <EventCard background={`var(--primary-sa)`} ctaUrl={`/sa`} hero={{ url: `/assets/img/global/homepage/hero-sa.jpg`, width: 2100, height: 2100 }}>
                    <p className='fs-3 fw-600'>Saudi Arabia</p>
                    <p className="fw-500">7-9 May 2023<br/>Al Faisaliah Hotel, Riyadh</p>
                    <p className="fw-300 fs-sm">FHIS returns to Saudi Arabia after an incredible and sold-out event in 2022. The conference programme will include tracks from the Saudi Arabian Hospitality Investment Conference (SHIC), Global Restaurant Investment Forum (GRIF) with a continued focus on sustainability, innovation, startups and human capital development.</p>
                </EventCard>

                <EventCard background={`var(--accent-ae)`} ctaUrl={`/ae`} hero={{ url: `/assets/img/global/homepage/hero-ae.jpg`, width: 2100, height: 2100 }}>
                    <p className='fs-3 fw-600'>Abu Dhabi</p>
                    <p className="fw-500">25-27 September 2023<br/>Hilton Abu Dhabi Yas Island</p>
                    <p className="fw-300 fs-sm">From Dubai in 2022, to Abu Dhabi 2023! FHIS takes place at the Hilton Abu Dhabi Yas Island for the first time. Building upon 19 years of our legacy with the Arabian Hotel Investment Conference (AHIC), our Abu Dhabi event focuses on exciting new international hospitality investment opportunities, sustainable and innovative concepts from around the world, and leading global hotel brands that are shaping the industry.</p>
                </EventCard>

            </AboveTheFold>




            <BelowTheFold>
                { data.contentLibraryPosts.map( (group, index) => handleContentGroup(index, group) ) }
            </BelowTheFold>


            <Footer />
        </>
    )
}


Homepage.getLayout = function getLayout( page ) {
	return (
	<Layout>
		{ page }
	</Layout>
	)
}




export async function getStaticProps() {
    const { data } = await craftApolloClient().query({
        query: gql`
            query LandingPage {
                entry(site: "${process.env.SITE_HANDLE}", id: "77020") {
                    ... on ${process.env.SITE_HANDLE}Homepage_${process.env.SITE_HANDLE}Homepage_Entry {
                        id
                        title
                        theme
                        contentLibraryPosts {
                            ... on contentLibraryPosts_BlockType {
                                id
                                heading
                                ctaButtonLink
                                ctaButtonLabel
                                posts (section: "contentLibrary" site:["${process.env.SITE_HANDLE}","${process.env.SITE_HANDLE_AE}", "${process.env.SITE_HANDLE_SA}"]) {
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