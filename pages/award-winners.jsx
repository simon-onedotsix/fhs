import Layout from '../fuselage/templates/layout'

import { gql } from "@apollo/client"
import craftApolloClient from "./api/apollo"

import Image from 'next/image'

import { Header } from '../fuselage/global/header/header'
import { Footer } from '../fuselage/global/footer/footer'
import { CtaTab } from '../fuselage/components/cta-tab/cta-tab'
import { HeroUnitImage } from '../fuselage/blocks/hero-unit-image/hero-unit-image'
import { AwardWinnerCard } from '../fuselage/components/award-winner-card/award-winner-card'


export default function AwardWinners ({ data }) {

    console.log('data.awardWinners:', data.awardWinners)

    
    return (
        <div className='bg-primary' style={{ backgroundColor: `var(--secondary)`, backgroundImage: `url('/assets/theme/fhs-2023-global-bg.svg')`, backgroundSize: `100%` }}>

            <Header overlaid inverse />

            <HeroUnitImage />

            {
                data.awardWinners.length &&
                <section className="block pt-0">
                    <div className="container columns-4 gap-md">

                        {
                            data.awardWinners.map( group => {
                                return (
                                    group.winners &&
                                    group.winners.map( (winner, index) => (
                                        <AwardWinnerCard
                                            key={winner.id}
                                            index={index}
                                            year={group.year}
                                            award={winner.award}
                                            // url={`/speakers/profile/${winner.recipientProfile[0].slug}`} 
                                            photoUrl={winner.recipientProfile[0].avatar[0] ? winner.recipientProfile[0].avatar[0].url : null }
                                            fullName={winner.recipientProfile[0].title}
                                            jobTitle={winner.recipientProfile[0].positions[0].jobTitle}
                                            company={winner.recipientProfile[0].positions[0].organisation}
                                        />
                                    ))
                                )
                            })
                        }

                    </div>
                </section>
            }

            <Footer />

            <CtaTab />
        </div>
    )
}


AwardWinners.getLayout = function getLayout( page ) {
	return (
	<Layout>
		{ page }
	</Layout>
	)
}



export async function getStaticProps() {
    const { data } = await craftApolloClient().query({
        query: gql`
            query Page {
                entry(site: "${process.env.SITE_HANDLE}", id: "137082") {
                    ... on fhsAwardWinners_fhsAwardWinners_Entry {
                        id
                        title
                        awardWinners {
                            ... on awardWinners_yearGroup_BlockType {
                                id
                                year
                                winners {
                                    ... on winners_BlockType {
                                        id
                                        award
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