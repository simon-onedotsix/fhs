import { ThemeBg } from "../../../../fuselage/theme/2023/ae/theme-bg"

import { gql } from "@apollo/client"
import craftApolloClient from "../../../api/apollo"

import Head from "next/head"
import { useRouter } from "next/router"

import { Header, HeaderShim } from "../../../../fuselage/global-ae/header/header"
import { Footer } from '../../../../fuselage/global-ae/footer/footer'
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
                                className={`uLink fs-6 fw-600 c-primary ${ router.query.category === category.slug ? 'here' : '' }`} 
                                href={`/ae/content-library/category/${category.slug}`}
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
                <section className="bg-white-90 p-md">                    
                    <p className="fs-2 fw-600 caps c-secondary">{category.title}</p>
                    <div className="columns-3 gap-sm mt-sm">
                        {
                            articles.map( entry => (
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
                </section>
            )
        }
    }

    return (
        <>
            <Head>
                <title>FHS | Content Library</title>
            </Head>

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
                            <p className="mt-sm">
                                <a className="uLink fs-sm caps fw-400 c-medium" href={`/ae/content-library`}>Clear filter</a>
                            </p>
                        </div>
                    </aside>

                    <main>
                        <HeaderShim/>
                        <div className="bg-white-90 p-md">
                            <p className="fs-0 fw-600 c-primary">Content Library</p>
                        </div>

                        { handleArticles() }
                    </main>
                </StickySidebar>
            </section>

            <Footer theme={{ footerBg: 'bg-white-90' }} />
        </>
    )
}

ContentLibraryCategory.theme = 'ae'




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
        paths: categories,
        fallback: false
    }

}

export async function getStaticProps({ params }) {
    const { data } = await craftApolloClient().query({
        query: gql`
            query Articles {
                entries(
                    site: "${process.env.SITE_HANDLE_AE}", 
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