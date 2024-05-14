import Layout from '../../../../fuselage/templates/sa/layout'

import { gql } from "@apollo/client"
import craftApolloClient from "../../../api/apollo"

import Head from "next/head"
import { useRouter } from "next/router"

import { LenisScroller } from '../../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../../fuselage/theme/2024/sa/globals/header/header'
import { Footer } from "../../../../fuselage/theme/2024/sa/globals/footer/footer"

import { ThemeBg } from '../../../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

import { HeaderShim } from "../../../../fuselage/global-sa/header/header"

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
                                href={`/sa/content-library/category/${category.slug}`}
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
                    <p className="fs-2 fw-600 caps c-accent mt-md">{category.title}</p>
                    <div className="columns-3 gap-sm mt-sm">
                        {
                            articles.map( entry => (
                                <ContentCard
                                    key={entry.id}
                                    url={`/sa/content-library/${entry.slug}`}
                                    heroUrl={entry.contentLibraryHero && entry.contentLibraryHero[0] ? entry.contentLibraryHero[0].url : null}
                                    heading={entry.title}
                                    excerpt={entry.excerpt}
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
                <link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
            </Head>

            <Header compact />

            <ThemeBg />

            <section className="block bg-default pt-0">
                <StickySidebar size='small'>
                    <aside>
                        <HeaderShim/>
                        <p className="fs-6 fw-600 c-accent mb-sm">Filter</p>
                        { handleCategoryMenu() }
                        <p className="mt-sm">
                            <a className="uLink fs-sm caps fw-400 c-accent" href={`/sa/content-library`}>Clear filter</a>
                        </p>
                    </aside>

                    <main>
                        <HeaderShim/>
                        <p className="fs-0 fw-600 c-accent">Content library</p>

                        { handleArticles() }
                    </main>
                </StickySidebar>
            </section>

            <Footer />

            <LenisScroller />

        </>
    )
}

ContentLibraryCategory.theme = 'sa-2024'



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
                    site: ["${process.env.SITE_HANDLE}", "${process.env.SITE_HANDLE_AE}", "${process.env.SITE_HANDLE_SA}"], 
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
                categories (group: "contentLibrary", id: [7701, 7702, 7703]) {
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