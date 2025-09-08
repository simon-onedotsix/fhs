import Image from 'next/image'

import CSS from './new-features.module.css'


const CARD_DATA_COL_1 = [
    {
        heading: "High Growth Rates",
        body: "Africa is the world's second fastest-growing economic region, and its hospitality sector is expected to see annual growth of 8.68%, with revenue forecasted to reach $13.8 billion by 2027."
    },
    {
        heading: "Young, Expanding Population",
        body: "Africa's young, rapidly urbanising population is driving demand for hotels, entertainment, and leisure, making it a rich ground for hospitality investments."
    }
]
const CARD_DATA_COL_2 = [
    {
        heading: "Resilient Tourism Sector",
        body: "With a growing interest in both business and leisure travel, Africa's tourism sector saw 67 million visitors in 2018 and remains resilient with 6-7% growth annually, driven by improved air connectivity and expanding business hubs."
    },
    {
        heading: "Opportunities in ESG (Environmental, Social, Governance)",
        body: "With 89% of African hospitality firms prioritising ESG initiatives, investors have a unique opportunity to align with businesses committed to long-term sustainability, meeting the expectations of values-driven travelers and stakeholders."
    }
]


export const NewFeatures = () => {
    return(
        <section className={`${CSS.layout} block`}>
          
                <div className={CSS.column}>
                    <p className="fs-1 fw-600 lh-1 maxw-30">Why Invest in Africa?</p>
                    <p className='fs-5 maxw-35 mb-md'>Africa&apos;s hospitality market presents unmatched potential for investors:</p>
                    {
                        CARD_DATA_COL_1 &&
                        CARD_DATA_COL_1.map( (card, index) => (
                            <FeatureCard key={index} heroUrl={card.heroUrl}>
                                <p className='fs-3 fw-600 lh-1 mb-xs'>{card.heading}</p>
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
                                <p className='fs-3 fw-600 lh-1 mb-xs'>{card.heading}</p>
                                <p>{card.body}</p>
                            </FeatureCard>
                        ))
                    }
                </div>
            
        </section>
    )
}


export const FeatureCard = ({ children }) => {
    return (
        <div className={CSS.card}>
            <section className={CSS.cardGraphic}>
                <Image src={'/assets/img/homepage/new-2025/new-graphic.jpg'} layout={'fill'} />
            </section>
            <section className={CSS.cardContent}>
                { children }
            </section>
        </div>
    )
}