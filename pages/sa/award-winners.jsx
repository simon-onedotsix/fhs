import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Head from "next/head"
import Script from "next/script"
import Image from 'next/image'

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_SA as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'


import { HeroUnitImage } from '../../fuselage/blocks/hero-unit-image/hero-unit-image'
import { AwardWinnerCard } from '../../fuselage/components/award-winner-card/award-winner-card'


export default function AwardWinners ({ data }) {

    // console.log('data.awardWinners:', data.awardWinners)

    
    return (
        <div className="bg-theme">

            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/sa/favicon-16x16.png" sizes="16x16" />
            </Head>

            <EventsBar site={'/sa'} />
            <Header
				site={`/sa`}
                handle={`Saudi Arabia`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />


            <HeroUnitImage heading={data.title} description={data.description} />

            {
                data.awardWinners.length &&
                <section className="block pt-0">
                    <div className="container columns-4 gap-md">

                        {
                            data.awardWinners.map( group => {

                                let localisedWinners = []

                                group.winners.filter( winner => {
                                    if ( winner.event === process.env.NEXT_PUBLIC_SITE_HANDLE_SA ) { 
                                        localisedWinners.push(winner)
                                    }
                                })
                                
                                // console.log('localisedWinners:', localisedWinners)

                                return (
                                    localisedWinners?.map( (winner, index) => {
                                        if ( winner.event === process.env.NEXT_PUBLIC_SITE_HANDLE_SA ) return (
                                            <AwardWinnerCard
                                                key={winner.id}
                                                theme={`var(--accent)`}
                                                year={ index < 1 ? group.year: null }
                                                award={winner.award}
                                                // url={`/speakers/profile/${winner.recipientProfile[0].slug}`} 
                                                photoUrl={winner.recipientProfile[0].avatar[0] ? winner.recipientProfile[0].avatar[0].url : null }
                                                fullName={winner.recipientProfile[0].title}
                                                jobTitle={winner.recipientProfile[0]?.positions.length && winner.recipientProfile[0].positions[0].jobTitle}
                                                company={winner.recipientProfile[0]?.positions.length && winner.recipientProfile[0].positions[0].organisation}
                                            />
                                        )
                                    })
                                    
                                )
                            })
                        }

                    </div>
                </section>
            }

            <Footer />
            <LenisScroller />

            {/* <CtaTab /> */}
        </div>
    )
}


AwardWinners.theme='sa-2025'



export async function getStaticProps() {
    const { data } = await craftApolloClient().query({
        query: gql`
            query Page {
                entry(site: "${process.env.SITE_HANDLE}", id: "137082") {
                    ... on fhsAwardWinners_fhsAwardWinners_Entry {
                        id
                        title
                        description
                        awardWinners {
                            ... on awardWinners_yearGroup_BlockType {
                                id
                                year
                                winners {
                                    ... on winners_BlockType {
                                        id
                                        award
                                        event
                                        recipientProfile {
                                            ... on profiles_profile_Entry {
                                                id
                                                title
                                                slug
                                                avatar {
                                                    id
                                                    url
                                                    width
                                                    height
                                                }
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
                   
                }
            }
          
        `
        })

        return {
        props: {
            data: data.entry
        },
    }
}