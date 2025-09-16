import { gql } from "@apollo/client"
import craftApolloClient from '../../api/apollo'

import Head from "next/head"
import { useRouter } from 'next/router'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import Image from "next/image"
import Link from "next/link"
import {format} from 'date-fns'

import { Header } from '../../../fuselage/theme/2025/africa/common/header/header'
import { Footer } from '../../../fuselage/theme/2025/africa/common/footer/footer'

import { StickySidebar } from "../../../fuselage/layout/sticky-sidebar/sticky-sidebar"
import { ProfileCard } from "../../../fuselage/components/profile-card/profile-card"
import { ArrowLink } from '../../../fuselage/components/arrow-link/arrow-link'
import { ButtonSocial } from '../../../fuselage/components/button-social/button-social'
import { VideoPlayer } from "../../../fuselage-africa/components/video-player/video-player"
import { Button } from "../../../fuselage/components/button/button"
import HubspotForm from "../../../fuselage/components/hubspot-form/hubspot-form"

import { QuerySEO } from "../../../graphql/queries"
import handleSeomaticMeta from '../../../lib/seomatic'
import { buildShareUrl } from '../../../lib/build-share-url'


export default function Article ({ entry }) {

    // console.log(entry)

    const router = useRouter()



    const handleHero = () => {
        if ( entry.hero ) {
            return (
                <div className="container">
                    <Image 
                        src={entry.hero[0].url} 
                        alt="hero" 
                        width={entry.hero[0].width} 
                        height={entry.hero[0].height} 
                    />
                </div>
            )
        }
    }

    const handleCategories = () => {
        return (
            <p className="fw-600">
                { entry.contentTypes.map( (type, index) => <span key={type.id}>{index > 0 ? <span className="fw-400 c-primary">&ensp;|&ensp;</span> : ''}{type.title}</span> ) }
            </p>
        )
    }

    const handleProfiles = () => {
        if ( entry.profiles.length ) {
            return (
                <div className="pb-sm bb-1 bc-secondary">
                    <div className="columns-1 gap-xs">
                        <p className="mb-xs fw-600">{ entry.profiles.length > 1 ? 'Authors' : 'Author' }</p>
                        {entry.profiles.map( profile => <ProfileCard key={profile.id} profile={profile} />)}
                    </div>
                </div>
            )
        }
    }

    const handleContentLibraryBlocks = ( entry ) => {

        if ( !entry ) return

        const blocks = entry.contentLibraryContentBlocks

        // console.log('content-library-blocks:', blocks)

        return (
            <>
                {blocks.map( block => {

                    // text
                    if ( block.__typename === 'contentLibraryContentBlocks_text_BlockType' ) {
                        return (
                            <div key={block.id} className="mt-sm formatted">
                                <div dangerouslySetInnerHTML={{__html: block.body}}></div>
                            </div>
                        )
                    }
                    
                    // image
                    if ( block.__typename === 'contentLibraryContentBlocks_image_BlockType' ) {
                        return (
                            <div key={block.id} className="mt-sm"style={{ borderRadius: `var(--default-radius)`, overflow: `hidden`}}>
                                <Image 
                                    src={block.hero[0].url}
                                    width={block.hero[0].width}
                                    height={block.hero[0].height}
                                />
                            </div>
                        )
                    }
                    
                    // video
                    if ( block.__typename === 'contentLibraryContentBlocks_video_BlockType' ) {
                        return (
                            <div key={block.id} className="mt-sm formatted">
                                <VideoPlayer 
                                    videoUrl={block.videoShareUrl}
                                    autoplay={false}
                                    muted={false}
                                    controls={true}
                                />
                            </div>
                        )
                    }
                    
                    // podcast
                    if ( block.__typename === 'contentLibraryContentBlocks_podcast_BlockType' ) {
                        return (
                            <div key={block.id} className="mt-sm formatted">
                                <div dangerouslySetInnerHTML={{__html: block.codeSnippet}}></div>
                            </div>
                        )
                    }
                    
                    // download
                    if ( block.__typename === 'contentLibraryContentBlocks_download_BlockType' ) {
                        return (
                            <div key={block.id} className="mt-sm formatted flex flex-wrap gap-xs">
                                {
                                    block.downloads.map( download => {
                                        return (
                                            <Button 
                                                key={download.id}
                                                href={download.file[0].url}
                                                target={'_blank'}
                                                decal={'fw-600'}
                                                secondary
                                            >
                                                {download.label}
                                            </Button>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                    
                    // hubspot form
                    if ( block.__typename === 'contentLibraryContentBlocks_hubspotForm_BlockType' ) {

                        if ( !block.hubspotForm ) return

                        return (
                            <div key={block.id} className="mt-sm formatted flex flex-wrap gap-xs mt-md">

                                <div dangerouslySetInnerHTML={{__html: block.body}}></div>

                                <HubspotForm portalId={block.hubspotForm[0].portalId} formId={block.hubspotForm[0].formId} />

                            </div>
                        )
                    }

                })}
            </>
        )
    }

    const handleProfileGroups = () => {

        if ( !entry.profileGroups.length ) return

        // console.log('profileGroups:', entry.profileGroups)

        return (
            <div className="pb-sm bb-1 bc-secondary columns-1 gap-xs">
                {
                    entry.profileGroups.map( group => {
                        return (
                            <div key={group.id} className="columns-1 gap-xs">
                                {
                                    group.heading &&
                                    <p className="mb-xs fw-600">{group.heading}</p>
                                }
                                {
                                    group.profiles.length &&
                                    group.profiles.map( profile => <ProfileCard key={profile.id} profile={profile} />)
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    

    return (
        <>

            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/world/favicon-16x16.png" sizes="16x16" />
                { handleSeomaticMeta( entry.seomatic ) }
            </Head>
            
            <Header compact />
                        

            <section className="block flush pt-0">
                <div className="container">
                    <StickySidebar size='large' flipped>

                        <main>
                            <div className="p-md pt-0">
                                <div className="mb-sm pb-xs bb-1 bc-secondary flex jc-between">
                                    <ArrowLink href="/africa/content-library" decal='fw-600'>Content library</ArrowLink>
                                    {handleCategories()}                                
                                </div>

                                <p className="fs-1 fw-600 lh-1 mb-sm">{entry.title}</p>
                                
                                {handleHero()}

                                {handleContentLibraryBlocks( entry )}

                            </div>
                        </main>

                        <aside>
                            <div className="p-md pt-0">
                                <div className="mb-sm pb-xs bb-1 bc-secondary">
                                    <p className="fw-600">Published: { format(new Date(entry.postDate), 'd MMMM yyyy') }</p>
                                </div>
                                
                                {handleProfileGroups()}

                                <div className="py-xs">
                                    <p className="fw-600 pb-xs">Share this article</p>
                                    <div className="flex gap-xxs">
                                        <ButtonSocial url={buildShareUrl(`https://www.linkedin.com/sharing/share-offsite/?url=`, router)} icon='linkedin' decal='bg-secondary' />
                                        <ButtonSocial url={buildShareUrl(`https://www.facebook.com/sharer.php?u=`, router)} icon='facebook' decal='bg-secondary' />
                                        <ButtonSocial url={buildShareUrl(`https://twitter.com/intent/tweet?url=`, router)} icon='twitter' decal='bg-secondary' />
                                    </div>
                                </div>
                            </div>

                        </aside>

                    </StickySidebar>
                </div>                
            </section>

            <Footer />
            <LenisScroller />
        </>
    )

}

Article.theme = 'africa'



export async function getStaticPaths() {

    const res = await craftApolloClient().query({
        query: gql`
            query Articles {
                entries(site: "${process.env.SITE_HANDLE_AFRICA}", section: "contentLibrary") {
                    slug
                }
            }
        `
    })

    const entries = await res.data.entries

    return {
        paths: entries.map( entry => ({ params: { slug: entry.slug } })),
        fallback: false
    }

}

export async function getStaticProps({ params, preview, previewData }) {

    const entryQuery = await craftApolloClient( preview, previewData ).query({
        query: gql`
            query Entry {
                entries(site: "${process.env.SITE_HANDLE_AFRICA}", slug: "${params.slug}") {
                    ... on contentLibrary_article_Entry {
                        id
                        slug
                        title
                        postDate
                        body
                        hero {
                            id
                            url
                            width
                            height
                        }
                        ${QuerySEO}
                        contentLibraryContentBlocks {
                            ... on contentLibraryContentBlocks_text_BlockType {
                                id
                                body
                            }
                            ... on contentLibraryContentBlocks_video_BlockType {
                                id
                                videoShareUrl
                            }
                            ... on contentLibraryContentBlocks_image_BlockType {
                                id
                                hero {
                                    id
                                    url
                                    width
                                    height
                                }
                            }
                            ... on contentLibraryContentBlocks_download_BlockType {
                                id
                                downloads {
                                    ... on downloads_BlockType {
                                        id
                                        file {
                                            id
                                            url
                                        }
                                        label
                                    }
                                }
                            }
                            ... on contentLibraryContentBlocks_podcast_BlockType {
                                id
                                codeSnippet
                            }
                            ... on contentLibraryContentBlocks_hubspotForm_BlockType {
                                id
                                body
                                hubspotForm {
                                    ... on hubspotForm_BlockType {
                                        id
                                        formId
                                        portalId
                                    }
                                }
                            }
                        }


                        contentTypes {
                            ... on contentLibrary_Category {
                                id
                                title
                            }
                        }


                        profiles {
                            id
                            ... on profiles_profile_Entry {
                                id
                                title
                                positions {
                                    ... on positions_BlockType {
                                        id
                                        jobTitle
                                        organisation
                                    }
                                }
                                avatar {
                                    id
                                    url
                                    width
                                    height
                                }
                            }
                        }
                    }

                    profileGroups {
                        id
                        ... on profileGroups_BlockType {
                            id
                            heading
                            profiles {
                                id
                                ... on profiles_profile_Entry {
                                    id
                                    title
                                    positions {
                                        ... on positions_BlockType {
                                            id
                                            jobTitle
                                            organisation
                                        }
                                    }
                                    avatar {
                                        id
                                        url
                                        width
                                        height
                                    }
                                }
                            }
                        }
                    }

                }
            }
        `
    })

    let entry = entryQuery.data.entries[0]

    return { props: { entry }}
}