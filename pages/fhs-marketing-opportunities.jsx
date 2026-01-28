import { gql } from "@apollo/client"
import craftApolloClient from "./api/apollo"
import { 
    QueryText, 
    QueryFloaters,
} from "../graphql/queries"

import parse from "html-react-parser"

import { useRouter } from 'next/router'
import Image from 'next/image'

import { LenisScroller } from '../fuselage/animation/lenis-scroller'

import { Pop, Slide, Fade } from "../fuselage/theme/2023/ae/layout/animation/animation"

import { Header } from '../fuselage/theme/2024/global/common/header/header'
import { Footer } from '../fuselage/theme/2024/global/common/footer/footer'


export default function Page({ entry }) {
    
    // console.log('entry:', entry)

    const floatersBlock = entry.fhisContentBlocks.find(block => block.__typename === "fhisContentBlocks_floaters_BlockType" && block.id === "292977")
    const cards = floatersBlock.floaters
    // console.log('floaters:', cards)

    const { locale } = useRouter()

    return (
        <div dir={ locale === 'ar' ? 'rtl' : 'ltr' }>
            <Header compact />


            <section className="block bg-primary">
                <div className="container center">
                    <Pop inline>
                        <p className="fs-1 fw-600 lh-1 caps ">Additional Marketing Opportunities</p>
                    </Pop>    
                </div>

                <div className="container columns-3 gap-sm">

                    {
                        cards && 
                        cards.map(card => (
                            <Card
                                key={card.id}
                                heading={card.heading}
                                image={{ url: card.hero[0].url, width: card.hero[0].width, height: card.hero[0].height }}
                            >
                                { parse(card.body) }
                            </Card>
                        ))
                    }

                   
                </div>
            </section>




            <Footer />
            <LenisScroller />
        </div>
    )
}

Page.theme = 'global-2024'



const Card = ({ image, heading, children }) => {
    return (
        
        <div className='bg-primary'
            style={{
                backgroundColor: `hsl(from var(--primary) h s calc(l - 5) / 1)`,
                padding: `var(--space-sm)`,
                borderRadius: `1rem`,

                display: `flex`,
                flexDirection: `column`,
                gap: `var(--space-xs)`
            }}
        >
            <Fade><p><strong><span className="fs-3 lh-1">{ heading }</span></strong></p></Fade>
            <Pop><Image src={image.url} width={image.width} height={image.height} style={{ borderRadius: `.5rem`}}/></Pop>
            <Fade>
                <div className='formatted'>
                    { children }
                </div>
            </Fade>
        </div>
    )
}




export async function getStaticProps({ preview, previewData }) {

    const entryData = await craftApolloClient( preview, previewData ).query({
        query: gql`
            query Page {
                entry(site: "${process.env.SITE_HANDLE}", id: "292503") {
                    ... on fhsPages_page_Entry {
                        id
                        title
                        slug
                        ${process.env.CONTENT_BLOCKS_HANDLE}ContentBlocks {
                            ${QueryText}
                            ${QueryFloaters}
                        }
                    }
                }
            }
        `
    })

    return { 
        props: { 
            entry: entryData.data.entry,
        }
    }
}