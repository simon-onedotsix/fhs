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

            <section className="bg-dark p-sm">
                <div className="cotainer maxw-40 columns-2 gap-sm mx-auto">
                    <InvestorImpact figure={100} unit={"+"} label={"Investors"} />
                    <InvestorImpact prefix={'$'} figure={248} unit={'B'} label={"AUM"} />
                </div>
            </section>

            {/* <SpeakerCarousel heading={'Investor-Speakers at FHS Africa 2025'} ctaLink={'/africa/speakers'} ctaLabel={'See all speakers'}>
                {
                    speakers.map( speaker => (
                        <Pop key={speaker.id}>
                            <SpeakerCard 
                                key={speaker.id}
                                url={`/africa/speakers/profile/${speaker.slug}`}
                                photoUrl={speaker.avatar[0].url}
                                fullName={speaker.title}
                                jobTitle={speaker.positions[0].jobTitle}
                                company={speaker.positions[0].organisation}
                            />
                        </Pop>
                    ))
                }
            </SpeakerCarousel> */}


            <section className="block bg-secondary">
                <div className="container center">
                    <p className='fs-1 fw-600'>SAMPLE LIST OF INVESTORS FROM 2026</p>
                </div>

                <div className="container formatted">
                    <article className={CSS.listing}>
                        <p>
                            Blackrock Incorporation<br/>
                            Bluebay Hotels Zanzibar<br/>
                            CityBlue Hotels<br/>
                            Compagnie Hoteliere Et Immobiliere Du Congo<br/>
                            Eagle Asset Management Company<br/>
                            Elewana Collection<br/>
                            Grandwest Hotel & Apartments Ltd<br/>
                            Hapa Developments<br/>
                            Hemingways Hospitality Limited<br/>
                            Ikeja Hotel Plc<br/>
                            Industrial Development Corporation<br/>
                            International Finance Corporation<br/>
                            JAM Asset Management Ltd.<br/>
                            Janus Continental Group<br/>
                            Kasada Capital Management<br/>
                            KfW-DEG<br/>
                            Lake Greenfield Hotel & Towers Ltd.<br/>
                            Lordship Group<br/>
                            Maasai Mara Sopa Lodges<br/>
                            Mirasi Group Ltd<br/>
                            Millat Investments<br/>
                            Modways<br/>
                            Nile Hotel International Ltd.<br/>
                            Niti Group - La Maison Royale<br/>
                            Nungwi Dreams Resort Zanzibar<br/>
                            One Ada<br/>
                            Park Vega Waterpark Limited<br/>
                            Quao Realty<br/>
                            Temple Point Resort<br/>
                            Terra Vista Development<br/>
                            The House of Chinhara<br/>
                            The Merwest Company<br/>
                            UAG Investments (Pty)-United Africa Hospitality (Pty) Ltd<br/>
                            Westmont Hospitality Group<br/>
                        </p>
                        <p><em>Updated 17/03/2026</em></p>
                    </article>
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


const InvestorImpact = ({ prefix, figure, unit, label }) => {
    return (
        <Pop>
            <div className={CSS.investorImpact}>
                <p className={CSS.investorImpactFigure}>{prefix}<AnimatedCounter from={0} to={figure} />{unit}</p>
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
                entries(site: "${process.env.SITE_HANDLE_AFRICA}", section: "contentLibrary" id: [ 204140, 204009, 177023, 117582 ]) {
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