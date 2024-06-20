import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import Head from "next/head"

import { Header } from '../../../fuselage/theme/2024/world/common/header/header'
import { Footer } from '../../../fuselage/theme/2024/world/common/footer/footer'
import { ArrowButton } from "../../../fuselage/components/arrow-button/arrow-button"

import { StickySidebar } from "../../../fuselage/layout/sticky-sidebar/sticky-sidebar"
import { ContentCard } from "../../../fuselage/components/content-card/content-card"

export default function ContentLibrary ({ articles, categories }) {

    // console.log('categories:', categories)
    // console.log('articles:', articles.map(article => article.contentTypes[0]))


    const handleCategoryMenu = () => {        
        if ( categories.length ) {
            return (
                categories.map( category => {
                    return (
                        <section key={category.id} id={category.slug} className="mb-xxs">
                            <a className="uLink fs-6 fw-600" href={`/world/content-library/category/${category.slug}`}>{category.title}</a>
                        </section>
                    )
                })
            )
        }
    }

    const handleCategorisedArticles = () => {
        return (
            categories.map( category => {

                let entries = []
                
                articles.map( article => {
                    article.contentTypes.find( cat => {
                        if (cat.id === category.id) {
                            entries.push(article)
                        }
                    } )
                })

                if ( entries.length ) {

                    return (
                        <section key={category.id} id={category.slug} className="p-md pt-0">
                            <p className="fs-2 fw-600 caps c-secondary">{category.title}</p>
                            
                            <div className="columns-3 gap-sm mt-sm">
                                {
                                    entries.slice(0, 3).map( entry => (
                                        <ContentCard
                                            key={entry.id}
                                            url={`/world/content-library/${entry.slug}`}
                                            heroUrl={entry.contentLibraryHero && entry.contentLibraryHero[0] ? entry.contentLibraryHero[0].url : null}
                                            heading={entry.title}
                                            excerpt={entry.excerpt}
                                            postDate={entry.postDate}
                                            type={entry.contentTypes[0].slug}
                                        />
                                    ))
                                }
                            </div>
    
                            <p className="mt-sm"><ArrowButton href={`/world/content-library/category/${category.slug}`} theme={{ arrow: `var(--secondary)`, border: `var(--secondary)`, label: `white`}}>See all in {category.title}</ArrowButton></p>
                            
                        </section>
                    )
                }
            })
        )
    }

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
            </Head>

            <Header compact />

            <section className="block flush pt-0">
                <StickySidebar size='small'>
                    <aside>
                        {/* <HeaderShim/> */}
                        <div className="p-md pt-0">
                            <p className="fs-6 fw-600 c-secondary mb-sm">Filter</p>
                            { handleCategoryMenu() }
                        </div>
                    </aside>

                    <main>
                        {/* <HeaderShim/> */}
                        <div className="p-md pt-0">
                            <p className="fs-0 fw-600">Content Library</p>
                        </div>

                        { handleCategorisedArticles() }
                    </main>
                </StickySidebar>
            </section>

            <Footer />
            <LenisScroller />
        </>
    )
    
}

ContentLibrary.theme = 'world-2024'



export async function getStaticProps() {
    const { data } = await craftApolloClient().query({
        query: gql`
            query Articles {
                entries(site: "${process.env.SITE_HANDLE_AE}", section: "contentLibrary") {
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
                categories (group: "contentLibrary", id: [7701, 7702, 7703, 121314]) {
                    id
                    title
                    slug
                }
            }
          
        `
        })

        return {
        props: {
            articles: data.entries,
            categories: data.categories
        },
    }
}