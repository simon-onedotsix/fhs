import Head from 'next/head'

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_AFRICA as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2025/africa/common/footer/footer'

import { PageHeader } from '../../fuselage-africa/layout/investors/page-header/page-header'
import { NewFeatures } from '../../fuselage-africa/layout/investors/new-features/new-features'
import { Callout } from  '../../fuselage-africa/layout/investors/callout/callout'
import { CardSlider } from '../../fuselage-africa/layout/investors/card-slider/card-slider'
import { ContentCard } from "../../fuselage-africa/components/content-card/content-card"
import { SpeakerCarousel } from '../../fuselage-africa/blocks/speaker-carousel/speaker-carousel'
import { SpeakerCard } from "../../fuselage-africa/components/speaker-card/speaker-card"
import { Pop } from '../../fuselage-africa/animation/animation'
import { AnimatedCounter } from '../../fuselage-africa/animation/animated-counter'
import { ArrowButton } from "../../fuselage-africa/components/arrow-button/arrow-button"

import CSS from '../../fuselage-africa/layout/investors/css/investors.module.css'

export default function Investors ({ articles, speakers }) {

    // console.log( 'articles:', articles )
    // console.log( 'speakers:', speakers )

    return (
        <>
            
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/africa/favicon-16x16.png" sizes="16x16" />
            </Head>

            <EventsBar site={'/africa'} />
            <Header
                site={`/africa`}
                handle={`Africa`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />

            <PageHeader/>

            <section className="block bg-dark">
                <div className="container maxw-40 columns-2 gap-sm mx-auto">
                    <InvestorImpact figure={100} unit={"+"} label={"Investors"} />
                    <InvestorImpact prefix={'$'} figure={59.8} decimals={1} unit={'B'} label={"AUM"} />
                </div>
                <div className="container center">
                    <Pop inline><ArrowButton href={`/africa/sample-attendee-list-download`} theme={{ arrow: `var(--primary)`, border: `var(--primary)`, label: `white`}}>Access Attendee List</ArrowButton></Pop>
                </div>
            </section>


            <NewFeatures />

            <Callout />

            <section className="block">
                <div className="container">
                    <p className='fs-1 fw-500
                    '>Deals Signed at FHS Africa</p>
                </div>

                <div className="container">
                    <CardSlider>
                        {
                            articles.map( entry => (
                                <ContentCard
                                    key={entry.id}
                                    url={`/africa/content-library/${entry.slug}`}
                                    heroUrl={entry.contentLibraryHero && entry.contentLibraryHero[0] ? entry.contentLibraryHero[0].url : null}
                                    heading={entry.title}
                                    excerpt={''}
                                    contentTypes={entry.contentTypes}
                                    postDate={entry.postDate}
                                />
                            ))
                        }
                    </CardSlider>
                </div>
            </section>

            <Footer />

        </>
    )
}
Investors.theme = 'africa'


const InvestorImpact = ({ prefix, figure, unit, label, decimals }) => {
    return (
        <Pop>
            <div className={CSS.investorImpact}>
                <p className={CSS.investorImpactFigure}>{prefix}<AnimatedCounter decimals={decimals} from={0} to={figure} />{unit}</p>
                <p className={CSS.investorImpactLabel}>{label}</p>
            </div>
        </Pop>
    )
}



import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

export async function getStaticProps() {
    const { data } = await craftApolloClient().query({
        query: gql`
            query Articles {
                entries(site: "${process.env.SITE_HANDLE_AFRICA}", section: "contentLibrary" id: [ 305386, 305272, 305213, 305192 ]) {
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
                            }
                        }
                    }
                }
                categories (group: "contentLibrary", id: [7701, 7702, 7704, 121314]) {
                    id
                    title
                    slug
                }
                speakers: entries(site: "${process.env.SITE_HANDLE_AFRICA}", id: 252814) {
                    id
                    slug
                    title
                    ... on profileGroups_default_Entry {
                        id
                        profiles {
                            ... on profiles_profile_Entry {
                                id
                                title
                                slug
                                avatar {
                                    url
                                    width
                                    height
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
                    }
                }
            }
          
        `
        })

        return {
        props: {
            articles: data.entries,
            categories: data.categories,
            speakers: data.speakers[0].profiles
        },
    }
}