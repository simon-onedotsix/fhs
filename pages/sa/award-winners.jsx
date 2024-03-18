import { gql } from "@apollo/client"
import craftApolloClient from "../api/apollo"

import { LenisScroller } from '../../fuselage/animation/lenis-scroller'

import Image from 'next/image'

import { Header } from '../../fuselage/theme/2024/sa/globals/header/header'
import { Footer } from '../../fuselage/theme/2024/sa/globals/footer/footer'

import { ThemeBg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-bg'
import { ThemeFg } from '../../fuselage/theme/2024/sa/blocks/theme/theme-fg'

import { CtaTab } from '../../fuselage/components/cta-tab/cta-tab'
import { HeroUnitImage } from '../../fuselage/blocks/hero-unit-image/hero-unit-image'
import { AwardWinnerCard } from '../../fuselage/components/award-winner-card/award-winner-card'


export default function AwardWinners ({ data }) {

    console.log('data.awardWinners:', data.awardWinners)

    
    return (
        <>

            <Header overlaid inverse />

            <ThemeBg />
			<ThemeFg />

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
                                
                                console.log('localisedWinners:', localisedWinners)

                                return (
                                    localisedWinners?.map( (winner, index) => {
                                        if ( winner.event === process.env.NEXT_PUBLIC_SITE_HANDLE_SA ) return (
                                            <AwardWinnerCard
                                                key={winner.id}
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

            <CtaTab />
        </>
    )
}


AwardWinners.theme='sa-2024'



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