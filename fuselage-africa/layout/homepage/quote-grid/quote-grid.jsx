import Image from 'next/image'

import CSS from './quote-grid.module.css'

export const QuoteGrid = ({ children }) => {
    return (
        <section className={`${CSS.container} bg-primary`}>
            <div className={CSS.layout}>
                
                <div className={`${CSS.quoteContainer} block`}>
                    { children }
                </div>

                <div className={CSS.graphicContainer}>
                    <Image src={`/assets/theme/neutral/graphic-01f.png`} layout={`fill`} className={CSS.graphic} />
                </div>
            </div>
        </section>
    )
}