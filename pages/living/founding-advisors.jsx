import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { useState, useRef } from "react"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'
import useCustomMediaQuery from '../../hooks/useCustomMediaQuery'

import Head from "next/head"



import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header-living'
import { FHS_LIVING as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/living/common/footer/footer'

import { Pop } from "../../fuselage/animation/animation"
import { SpeakerCard } from "../../ui/components/speaker-card"




export default function Home ({ advisors }) {

    // console.log('advisors;', advisors)

    const isDesktop = useCustomMediaQuery('(min-width: 600px)');

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/living/favicon-16x16.png" sizes="16x16" />
                <meta content="https://cms.thebench.com/assets/content-library/img/FHS-Living/FHS-Living-Launch-PR.jpg" property="og:image"></meta>
                <title>FHS Living | Feb 2027, Paris | Founding Edition</title>
                <meta name="description" content="Addressing the growing 'lanyard fatigue' of the European hospitality conferencing market"></meta>
            </Head>
        
            
            <EventsBar site={'/living'} />
            <Header
                site={`/living`}
                handle={`Living`}
                event={header.data.event}
                mainMenu={header.data.mainMenu}
                ctas={header.data.event.headerCtas}
            />



            
            <div className="block bg-secondary py-xs">
                <div className="container center">
                    <p className="fs-2 fw-500 caps">Founding Advisors</p>
                </div>

                <div className="container columns-5 gap-sm center">
                    {
                        advisors.profiles.map( (profile, index) => (
                            <Pop key={index}>
                                <SpeakerCard
                                    key={index}
                                    url={``}
                                    photoUrl={profile.avatar[0]?.url}
                                    fullName={profile.title}
                                    positions={profile.positions}
                                    color={'white'}
                                    focus={profile.focus}
                                    geographies={profile.geographies}
                                />
                            </Pop>
                        ))
                    }
                </div>
            </div>



            <Footer />
            <LenisScroller />
        </>
    )
}
Home.theme = 'living'






export async function getStaticProps() {

    const { data } = await craftApolloClient().query({
        query: gql`
            query Data {
                advisors: entry(site: "${process.env.SITE_HANDLE_LIVING}", section: "profileGroups", id: "310153") {
                    ... on profileGroups_default_Entry {
                        id
                        title
                        profiles {
                            ... on profiles_profile_Entry {
                                id
                                slug
                                title
                                avatar {
                                    ... on avatars_Asset {
                                        id
                                        url
                                        width
                                        height
                                    }
                                }
                                positions {
                                    ... on positions_BlockType {
                                        id
                                        jobTitle
                                        organisation
                                    }
                                }
                                profile
                                focus
                                geographies
                            }
                        }
                    }
                } 
            }
          
        `
        })

        return {
        props: {
            advisors: data.advisors
        },
    }
}