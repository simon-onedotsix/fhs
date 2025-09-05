import Image from 'next/image'

import { Reveal } from '../../../animation/reveal'
import { Pop, Fade, Slide } from '../../../animation/animation'
import { Button } from '../../../components/button/button'

import CSS from './new-features.module.css'


const CARD_DATA_COL_1 = [
    {
        heading: "Personalised Itinerary ",
        body: "Delegates can tailor their experience through a variety of workshops, exclusive roundtables, and content sessions that align with their business priorities.",
        heroUrl: "/assets/img/homepage/new-2025/new-itinerary.jpg"
    },
    {
        heading: "Enhanced Networking Opportunities",
        body: "An increased focus on providing delegates with additional opportunities to network. The exhibition floor is open for the entire event, providing constant opportunities to meet with existing clients and forge new business connections.",
        heroUrl: "/assets/img/homepage/new-2025/new-networking.jpg"
    }
    
]
const CARD_DATA_COL_2 = [
    
    {
        heading: "Interactive Content Sessions",
        body: "Attend hands-on workshops, roundtables, and interactive sessions tailored to your interests and industry needs.",
        heroUrl: "/assets/img/homepage/new-2025/new-interactive.jpg"
    },
    {
        heading: "Focused Insights",
        body: "One morning dedicated to key industry trends, pipeline insights, and expert analysis across the road at the CTICC. Catch bite-sized, impactful presentations by hospitality leaders, covering the latest market trends and innovations.",
        heroUrl: "/assets/img/homepage/new-2025/new-insights.jpg"
    },
    {
        heading: "Country Showcases & Project Opportunities",
        body: "Discover new opportunities through dedicated sessions highlighting investment-ready projects and country-specific showcase.",
        heroUrl: "/assets/img/homepage/new-2025/new-showcase.jpg"
    }
]


export const NewFeatures = () => {
    return(
        <section className={`${CSS.layout} block bg-default`}>
          
                <div className={CSS.column}>
                    <div className="fs-0 fw-600 c-primary lh-1 pb-md"><Reveal>New for</Reveal> <Reveal delay={0.1}>FHS&nbsp;Africa 2025!</Reveal></div>
                    {
                        CARD_DATA_COL_1 &&
                        CARD_DATA_COL_1.map( (card, index) => (
                            <FeatureCard key={index} heroUrl={card.heroUrl}>
                                <p className='fs-2 fw-600 lh-1 mb-xs'>{card.heading}</p>
                                <p>{card.body}</p>
                            </FeatureCard>
                        ))
                    }
                    
                </div>

                <div className={CSS.column}>
                    {
                        CARD_DATA_COL_2 &&
                        CARD_DATA_COL_2.map( (card, index) => (
                            <FeatureCard key={index} heroUrl={card.heroUrl}>
                                <p className='fs-2 fw-600 lh-1 mb-xs'>{card.heading}</p>
                                <p>{card.body}</p>
                            </FeatureCard>
                        ))
                    }
                </div>

                {/* <p><Button href={'/agenda'} decal={'fs-5 fw-600'}>View the Agenda</Button></p> */}
            
        </section>
    )
}


export const FeatureCard = ({ heroUrl, children }) => {
    return (
        <Pop>
            <div className={CSS.card}>
                <section className={CSS.cardGraphic}>
                    <Image src={'/assets/img/homepage/new-2025/new-graphic.jpg'} layout={'fill'} />
                </section>

                <section className={CSS.cardContent}>
                    <Slide>
                        { children }
                    </Slide>
                </section>

                <section className={CSS.cardHero}>
                    <Image src={heroUrl} layout={'fill'} />
                </section>
            </div>
        </Pop>
    )
}