import Image from 'next/image'

import CSS from './brand-callout.module.css'

export const BrandCallout = ({ children, theme, flipped, overlapTop, overlapBottom }) => {
    return (
        <section className={`
            ${CSS.layout}
            ${flipped && CSS.flipped}
            ${overlapTop && CSS.overlapTop}
            ${overlapBottom && CSS.overlapBottom}
        `}>

            <div className={`${CSS.content} block ${theme ? theme : 'bg-white'}`} >
                { children }
            </div>

            <div className={CSS.brandPattern}>
                <Image src={`/assets/theme/2023/lockups/3x1-01.png`} layout={`fill`} width={960} height={500} alt="" priority />
            </div>

        </section>
    )
}