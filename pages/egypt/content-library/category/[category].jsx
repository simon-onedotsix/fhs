import { gql } from "@apollo/client"
import craftApolloClient from "../../../api/apollo"

import { LenisScroller } from '../../../../fuselage/animation/lenis-scroller'

import Head from "next/head"
import { useRouter } from "next/router"

import { EventsBar } from "../../../../ui/site/eventsbar"
import { Header } from '../../../../ui/site/header'
import { FHS_EGYPT as header } from '../../../../fixtures/nav'
import { Footer } from '../../../../fuselage/theme/egypt/common/footer/footer'
import { StickySidebar } from "../../../../fuselage/layout/sticky-sidebar/sticky-sidebar"
import { ContentCard } from "../../../../fuselage/components/content-card/content-card"
import { ArrowLink } from "../../../../fuselage/components/arrow-link/arrow-link"

export default function ContentLibraryCategory ({ categories, category, articles }) {

    const router = useRouter()

    // console.log('router:', router.query)
    // console.log('categories:', categories)
    // console.log('category:', category)
    // console.log('articles:', articles)

    const handleCategoryMenu = () => {        
        if ( categories.length ) {
            return (
                categories.map( category => {
                    return (
                        <section key={category.id} id={category.slug} className="mb-xxs">
                            <a 
                                className={`uLink fs-6 fw-600 c-white ${ router.query.category === category.slug ? 'here' : '' }`} 
                                href={`/egypt/content-library/category/${category.slug}`}
                            >
                                {category.title}
                            </a>
                        </section>
                    )
                })
            )
        }
    }

    const handleArticles = () => {
        if ( articles.length ) {

            return (
                <section>                    
                    <p className="fs-2 fw-600 caps c-primary-3 mt-md">{category.title}</p>
                    <div className="columns-3 gap-sm mt-sm">
                        {
                            articles.map( entry => (
                                <ContentCard
                                    key={entry.id}
                                    url={`/egypt/content-library/${entry.slug}`}
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
                </section>
            )
        }
    }

    return (
        <>
            <Head>
                <title>FHS | Content Library</title>
                <link rel="icon" type="image/png" href="/assets/favicons/egypt/favicon-16x16.png" sizes="16x16" />
            </Head>

            <EventsBar site={'/egypt'} />
            <Header
                site={`/egypt`}
                handle={`Egypt`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />

            <section className="block pt-0">
                <StickySidebar size='small'>
                    <aside>
                        <p className="fs-6 fw-600 c-primary-3 mb-sm">Filter</p>
                        { handleCategoryMenu() }
                        <p className="mt-sm">
                            <a className="uLink fs-sm caps fw-400 c-primary-3" href={`/egypt/content-library`}>Clear filter</a>
                        </p>
                    </aside>

                    <main>
                        <p className="fs-0 fw-600 c-white">Content library</p>

                        { handleArticles() }
                    </main>
                </StickySidebar>
            </section>

            <Footer />
            <LenisScroller />
        </>
    )
}

ContentLibraryCategory.theme = 'egypt'



export async function getStaticPaths() {

    const { data } = await craftApolloClient().query({
        query: gql `
            query ContentLibraryCategory {
                categories(group: "contentLibrary") {
                    id
                    title
                    slug
                }
            }
        `
    })
    
    const categories = await data.categories.map( category => ({ params: { category: category.slug } }))

    // console.log('cats: ',categories)

    return {
        // paths: categories,
        paths: [],
        fallback: 'blocking'
    }

}

export async function getStaticProps({ params }) {
    const { data } = await craftApolloClient().query({
        query: gql`
            query Articles {
                entries(
                    site: ["${process.env.SITE_HANDLE}", "${process.env.SITE_HANDLE_AE}", "${process.env.SITE_HANDLE_SA}", "${process.env.SITE_HANDLE_EGYPT}"], 
                    section: "contentLibrary", 
                    relatedToCategories: {slug: "${params.category}"} 
                ) {
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
                categories (group: "contentLibrary", id: [7701, 7702, 121314]) {
                    id
                    title
                    slug
                }
                category (group: "contentLibrary", slug: "${params.category}") {
                    id
                    title
                    slug
                }
            }
          
        `
        })

        // console.log('entry data:', data.entries)

        return {
        props: {
            articles: data.entries,
            categories: data.categories,
            category: data.category
        },
    }
}