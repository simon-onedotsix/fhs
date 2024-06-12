import { LenisScroller } from '../fuselage/animation/lenis-scroller'

import Head from 'next/head'

import parse from 'html-react-parser'

import { Header } from '../fuselage/theme/2024/global/common/header/header'
import { Footer } from '../fuselage/theme/2024/global/common/footer/footer'
import { HeroUnitImage } from '../fuselage/blocks/hero-unit-image/hero-unit-image'

import { Waypoint } from '../fuselage/theme/2024/global/components/waypoint/waypoint'
import { ProfileCard } from '../fuselage/theme/2024/global/components/profile-card/profile-card'
import { StickySidebar } from '../fuselage/theme/2024/global/components/sticky-sidebar/sticky-sidebar'

import { Pop, Fade } from '../fuselage/animation/animation'



export default function AboutUs ({ data }) {

    console.log('data:', data)



    const handleContentBlocks = ( blockData ) => {

        if ( !blockData ) return

        return blockData.map( block => {
            switch ( block.__typename ) {

                case "contentBlocksFhsGlobal_timeline_BlockType":
                    return (
                        <section className="block">
                            <div className="container">
                                <StickySidebar>
                                    <aside>
                                        <Pop inline>
                                            <p className="fs-2 fw-600 pb-sm">Our Journey</p>
                                        </Pop>
                                    </aside>

                                    <main style={{ width: '100%', overflow: 'hidden' }}>
                                        <div className="columns-1 gap-sm">
                                            {
                                                block.timeline.map((waypoint, index) => <Waypoint key={index} active={index === 1 && true} year={waypoint.year} value={waypoint.event} />)
                                            }
                                        </div>
                                    </main>
                                </StickySidebar>
                            </div>
                        </section>
                    )                
                    break
                    
                case "contentBlocksFhsGlobal_profiles_BlockType":
                    return (
                        <section className="block">
                            <div className="container">
                                <StickySidebar>
                                    <aside className='formatted'>
                                        <Pop inline>
                                            <p className="fs-2 fw-600 pb-sm">{ block.heading }</p>
                                        </Pop>
                                        <Fade>
                                            { parse(block.body) }
                                        </Fade>
                                    </aside>

                                    <main>
                                        <div className="columns-3 gap-sm">
                                            {
                                                block.profiles.map( profile => <Pop><ProfileCard key={ profile.id } profile={ profile } /></Pop> )
                                            }
                                        </div>
                                    </main>
                                </StickySidebar>
                            </div>
                        </section>
                    )              
                    break
            
                default: null
                    break
            }

        })

    }


    return (
        <div className='bg-primary' style={{ backgroundColor: `var(--primary)`, backgroundImage: `url('/assets/theme/fhs-2024-global-bg.svg')`, backgroundSize: `100%` }}>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/favicon-16x16.png" sizes="16x16" />
            </Head>

            <Header overlaid inverse />

            <HeroUnitImage heading={"About Us"} />

            { handleContentBlocks(data.contentBlocksFhsGlobal) }

            <Footer />
            <LenisScroller />
        </div>
    )
}

AboutUs.theme='global-2024'







import { gql } from "@apollo/client"
import craftApolloClient from "./api/apollo"

export async function getStaticProps() {

    const { data } = await craftApolloClient().query({
        query: gql`
            query Entry {
                entry(site: "${process.env.SITE_HANDLE}", id: "201286") {
                    ... on fhsAboutUs_fhsAboutUs_Entry {
                        id
                        contentBlocksFhsGlobal {
                            ... on contentBlocksFhsGlobal_timeline_BlockType {
                                id
                                title
                                description
                                timeline {
                                    ... on timeline_BlockType {
                                        id
                                        year
                                        event
                                    }
                                }
                            }
                            ... on contentBlocksFhsGlobal_profiles_BlockType {
                                id
                                heading
                                body
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
                                        profile
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
                }
            }
        `
        })

        return {
        props: {
            data: data.entry,
        }
    }
}