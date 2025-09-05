import Image from 'next/image'

import CSS from './floater.module.css'


export const Floaters = ({ children, theme, flipped }) => {
    return (
        <section className={`${CSS.floaters} block ${flipped ? CSS.flipped : ''}`}>
            {children}
        </section>
    )
}


export const Floater = ({ children, hero, heroSize, theme }) => {

    let heroAdjust

    switch (heroSize) {
        case heroSize = 'sm':
            heroAdjust = 4
            break
    
        case heroSize = 'md':
            heroAdjust = 3
            break

        case heroSize = 'lg':
            heroAdjust = 2
            break
        
        default:
            heroAdjust = 1
            break
    }

    return (
        <section className={CSS.floater}>

            <div className={`${CSS.container} bg-${theme} ${theme !== 'default' ? 'p-md' : ''}`}>
                <div className={CSS.hero}>
                    <Image className={CSS.image} src={hero.url} width={hero.width/heroAdjust} height={hero.height/heroAdjust} alt={hero.title}/>               
                </div>

                <div className={`${CSS.body} formatted`}>
                    {children}
                </div>
            </div>

        </section>
    )
}