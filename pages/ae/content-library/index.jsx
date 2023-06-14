import { ThemeBg } from "../../../fuselage/theme/2023/ae/theme-bg"

import { gql } from "@apollo/client"
import craftApolloClient from "../../api/apollo"

import { Header, HeaderShim } from '../../../fuselage/global-ae/header/header'
import { Footer } from '../../../fuselage/global-ae/footer/footer'
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
                            <a className="uLink fs-6 fw-600 c-primary" href={`/ae/content-library/category/${category.slug}`}>{category.title}</a>
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
                        <section key={category.id} id={category.slug} className="bg-white-90 p-md">
                            <p className="fs-2 fw-600 caps c-secondary">{category.title}</p>
                            
                            <div className="columns-3 gap-sm mt-sm">
                                {
                                    entries.slice(0, 3).map( entry => (
                                        <ContentCard
                                            key={entry.id}
                                            url={`/ae/content-library/${entry.slug}`}
                                            heroUrl={entry.contentLibraryHero && entry.contentLibraryHero[0] ? entry.contentLibraryHero[0].url : null}
                                            heading={entry.title}
                                            excerpt={entry.excerpt}
                                            postDate={entry.postDate}
                                            type={entry.contentTypes[0].slug}
                                        />
                                    ))
                                }
                            </div>
    
                            <p className="mt-sm"><ArrowButton href={`/ae/content-library/category/${category.slug}`}>See all in {category.title}</ArrowButton></p>
                        </section>
                    )
                }
            })
        )
    }

    return (
        <>
            <ThemeBg />

            <Header compact theme={{ 
                primary: 'var(--primary)', 
                secondary: 'var(--secondary)', 
                text: 'var(--primary)',
                buttons: 'var(--primary)',
                buttonText: 'white',
                headerBg: '#ffffffee',
                overlayBg: 'var(--primary)',
            }} />

            <section className="block flush bg-default pt-0">
                <StickySidebar size='small'>
                    <aside>
                        <HeaderShim/>
                        <div className="bg-white-90 p-md">
                            <p className="fs-6 fw-600 c-secondary mb-sm">Filter</p>
                            { handleCategoryMenu() }
                        </div>
                    </aside>

                    <main>
                        <HeaderShim/>
                        <div className="bg-white-90 p-md">
                            <p className="fs-0 fw-600 c-primary">Content Library</p>
                        </div>

                        { handleCategorisedArticles() }
                    </main>
                </StickySidebar>
            </section>

            <Footer theme={{ footerBg: 'bg-white-90' }} />
        </>
    )
    
}

ContentLibrary.theme = 'ae-2023'



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