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

            <SpeakerCarousel heading={'Investor-Speakers at FHS Africa 2025'} ctaLink={'/africa/speakers'} ctaLabel={'See all speakers'}>
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
            </SpeakerCarousel>


            <section className="block bg-default">
                <div className="container center">
                    <p className='fs-1 fw-600'>SAMPLE LIST OF INVESTORS FROM 2025</p>
                </div>

                <div className="container formatted">
                    <article className={CSS.listing}>
                        <p>
                            Actis<br/>
                            Brix Group<br/>
                            Cadence<br/>
                            Cameroon Hotels Corporation<br/>
                            Catembe Gallery Hotel<br/>
                            Cresta Marakanelo Limited<br/>
                            Crestigo<br/>
                            Compagnie Hoteliere Et Immobiliere Du Congo<br/>
                            DEG - Deutsche Investitions- und Entwicklungsgesellschaft mbH<br/>
                            Elewana<br/>
                            Enrich Network Corp/Enrich Hotels &amp; Resorts<br/>
                            Ensemble Holdings<br/>
                            FNB Commercial Property Finance<br/>
                            FIT Group of Companies<br/>
                            Fidelity Life Asset Management<br/>
                            Fundo Soberano de Angola<br/>
                            Grandwest Hotel &amp; Apartments Ltd<br/>
                            V&amp;A Waterfront<br/>
                            Hemingways Hospitality<br/>
                            House of Chinhara (HOC)<br/>
                            IFC<br/>
                            Indalo hotels &amp; Leisure<br/>
                            Janus Continental Group<br/>
                            Kasada Capital Management<br/>
                            Kokobeach Hotels &amp; Resorts<br/>
                            KTAfrica<br/>
                            Kuriftu Resorts<br/>
                            Le Palais d&rsquo;Akwa<br/>
                            Lineage Invest<br/>
                            Lordship Group<br/>
                            Magnolia Hotel &amp; Conference Center<br/>
                            Manta Ventures<br/>
                            Metro rez pty ltd<br/>
                            MIGA - World Bank Group<br/>
                            Millat Investment<br/>
                            Nedbank<br/>
                            Nedbank CIB<br/>
                            National Social Security Fund Tanzania (NSSF Tanzania)<br/>
                            Nile Hotel International Ltd<br/>
                            Nokras Hotels<br/>
                            Nortech Group Holdings (Pty) Ltd<br/>
                            Nucleus Investment Management<br/>
                            Old Mutual Zimbabwe<br/>
                            Onomo<br/>
                            Panchshil Realty<br/>
                            Port of Tanit<br/>
                            Proparco<br/>
                            Quao Realty<br/>
                            Rainbow Tourism Group Limited<br/>
                            RG Alliance SA Pty Ltd<br/>
                            Rockshieldburg-city (hotel-55-africa) Flagship<br/>
                            Root Partners<br/>
                            Santiago<br/>
                            Scenery Lodge<br/>
                            Senegindia SA<br/>
                            SHB<br/>
                            Southern Sun Hotels<br/>
                            Sun International<br/>
                            TEHC Real Estate Investment Company<br/>
                            The Cavaleros Group<br/>
                            UAG Investments Pty Ltd - United Hospitality Management<br/>
                            Watercress Hotel<br/>
                            Welwitschia Property Company<br/>
                            Westmont Hospitality<br/>
                            WestProp Holding Limited<br/>
                        </p>
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