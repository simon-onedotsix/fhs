import Layout from '../../../fuselage/templates/sa/layout'

import { gql } from "@apollo/client"
import craftApolloClient from '../../api/apollo'

import Image from "next/image"
import Link from "next/link"
import {format} from 'date-fns'

import { LenisScroller } from '../../../fuselage/animation/lenis-scroller'

import { Header } from '../../../fuselage/theme/2024/sa/globals/header/header'
import { Footer } from "../../../fuselage/theme/2024/sa/globals/footer/footer"

import { ThemeBg } from '../../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

import { HeaderShim } from '../../../fuselage/global-sa/header/header'

import { StickySidebar } from "../../../fuselage/layout/sticky-sidebar/sticky-sidebar"
import { ProfileCard } from "../../../fuselage/components/profile-card/profile-card"
import { ArrowLink } from '../../../fuselage/components/arrow-link/arrow-link'
import { ButtonSocial } from '../../../fuselage/components/button-social/button-social'
import { VideoPlayer } from "../../../fuselage/components/video-player/video-player"
import { Button } from "../../../fuselage/components/button/button"


export default function Article ({ entry }) {

    // console.log(entry)

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

                    //text
                    if ( block.__typename === 'contentLibraryContentBlocks_text_BlockType' ) {
                        return (
                            <div key={block.id} className="mt-sm formatted">
                                <div dangerouslySetInnerHTML={{__html: block.body}}></div>
                            </div>
                        )
                    }
                    
                    //image
                    if ( block.__typename === 'contentLibraryContentBlocks_image_BlockType' ) {
                        return (
                            <div key={block.id} className="mt-sm" style={{ borderRadius: `var(--default-radius)`, overflow: `hidden`}}>
                                <Image 
                                    src={block.hero[0].url}
                                    width={block.hero[0].width}
                                    height={block.hero[0].height}
                                />
                            </div>
                        )
                    }
                    
                    //video
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
                    
                    //podcast
                    if ( block.__typename === 'contentLibraryContentBlocks_podcast_BlockType' ) {
                        return (
                            <div key={block.id} className="mt-sm formatted">
                                <div dangerouslySetInnerHTML={{__html: block.codeSnippet}}></div>
                            </div>
                        )
                    }
                    
                    //download
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

                })}
            </>
        )
    }

    const handleProfileGroups = () => {

        if ( !entry.profileGroups.length ) return

        // console.log('profileGroups:', entry.profileGroups)

        return (
            <div className="pb-sm bb-1 bc-accent columns-1 gap-xs">
                {
                    entry.profileGroups.map( group => {
                        return (
                            <div key={group.id} className="columns-1 gap-xs">
                                {
                                    group.heading &&
                                    <p className="mb-xs fw-600 c-accent">{group.heading}</p>
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
            <Header compact />

            <ThemeBg />
            

            <section className="block pt-0">
                <div className="container">
                    <StickySidebar size='large' flipped>

                        <main>
                            <HeaderShim/>
                            <div className="mb-sm pb-xs bb-1 bc-accent flex jc-between">
                               <ArrowLink href="/sa/content-library" decal='fw-600'>Content library</ArrowLink>
                               {handleCategories()}                                
                            </div>

                            <p className="fs-1 fw-600 lh-1 c-accent mb-sm">{entry.title}</p>
                            
                            {handleHero()}

                            {handleContentLibraryBlocks( entry )}
                        </main>

                        <aside>
                            <HeaderShim/>
                            <div className="mb-sm pb-xs bb-1 bc-accent">
                                <p className="fw-600">Published: { format(new Date(entry.postDate), 'd MMMM yyyy') }</p>
                            </div>
                            
                            {handleProfileGroups()}

                            <div className="py-xs">
                                <p className="fw-600 pb-xs">Share this article</p>
                                <div className="flex gap-xxs">
                                    <ButtonSocial icon='linkedin' decal='bg-accent' />
                                    <ButtonSocial icon='facebook' decal='bg-accent' />
                                    <ButtonSocial icon='twitter' decal='bg-accent' />
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

Article.theme = 'sa-2024'

export async function getStaticPaths() {

    const res = await craftApolloClient().query({
        query: gql`
            query Articles {
                entries(site: "${process.env.SITE_HANDLE_SA}", section: "contentLibrary") {
                    slug
                }
            }
        `
    })

    const entries = await res.data.entries

    return {
        // paths: entries.map( entry => ({ params: { slug: entry.slug } })),
        paths: [],
        fallback: 'blocking'
    }

}

export async function getStaticProps({ params, preview, previewData }) {

    const entryQuery = await craftApolloClient( preview, previewData ).query({
        query: gql`
            query Entry {
                entries(site: "${process.env.SITE_HANDLE_SA}", slug: "${params.slug}") {
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