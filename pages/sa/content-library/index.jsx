import Layout from '../../../fuselage/templates/sa/layout'

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/theme/2024/sa/globals/header/header'
import { Footer } from "../../../fuselage/theme/2024/sa/globals/footer/footer"

import { ThemeBg } from '../../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

import { HeaderShim } from '../../../fuselage/global-sa/header/header'

import { ArrowButton } from "../../../fuselage/components/arrow-button/arrow-button"

import { StickySidebar } from "../../../fuselage/layout/sticky-sidebar/sticky-sidebar"
import { ContentCard } from "../../../fuselage/components/content-card/content-card"

export default function ContentLibrary ({ articles, categories }) {

    // console.log('categories:', categories)
    console.log('articles:', articles.map(article => article.contentTypes[0]))


    const handleCategoryMenu = () => {        
        if ( categories.length ) {
            return (
                categories.map( category => {
                    return (
                        <section key={category.id} id={category.slug} className="mb-xxs">
                            <a className="uLink fs-6 fw-600 c-white" href={`/sa/content-library/category/${category.slug}`}>{category.title}</a>
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
                        <section key={category.id} id={category.slug} className="mt-md">
                            <p className="fs-2 fw-600 caps c-accent">{category.title}</p>
                            
                            <div className="columns-3 gap-sm mt-sm">
                                {
                                    entries.slice(0, 3).map( entry => (
                                        <ContentCard
                                            key={entry.id}
                                            url={`/sa/content-library/${entry.slug}`}
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
    
                            <p className="mt-sm">
                                <ArrowButton href={`/sa/content-library/category/${category.slug}`} theme={{ arrow: `var(--accent)`, border: `var(--accent)`, label: `white`}}>See all in {category.title}</ArrowButton>
                            </p>
                        </section>
                    )
                }
            })
        )
    }

    return (
        <>
            <Header compact />

            <ThemeBg />

            <section className="block bg-default pt-0">
                <StickySidebar size='small'>
                    <aside>
                        <HeaderShim/>
                        <p className="fs-6 fw-600 c-accent mb-sm">Filter</p>
                        { handleCategoryMenu() }
                    </aside>

                    <main>
                        <HeaderShim/>
                        <p className="fs-0 fw-600 c-accent">Content library</p>

                        { handleCategorisedArticles() }
                    </main>
                </StickySidebar>
            </section>

            <Footer />

            <LenisScroller />
        </>
    )
    
}

ContentLibrary.theme = 'sa-2024'

export async function getStaticProps() {
    const { data } = await craftApolloClient().query({
        query: gql`
            query Articles {
                entries(site: "${process.env.SITE_HANDLE_SA}", section: "contentLibrary") {
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
                categories (group: "contentLibrary", id: [7701, 7702, 7703]) {
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