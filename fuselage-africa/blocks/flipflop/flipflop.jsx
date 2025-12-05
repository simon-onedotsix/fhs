import Image from 'next/image'

import CSS from './flipflop.module.css'

export const FlipFlop = ({ children, theme, hero, flipped }) => {

    if ( !children ) return
    
    return (
        <section className={`${CSS.layout} ${flipped ? CSS.flipped : ''}`}>

            <div className={CSS.image}>
                <Image src={hero.url} layout='responsive' width={hero.width} height={hero.height} />
            </div>

            <div className={`${CSS.body} formatted`}>
                {children}
            </div>

        </section>
    )
}