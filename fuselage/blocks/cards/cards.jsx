import Image from 'next/image'

import CSS from './cards.module.css'

export const Cards = ({ children, theme, columns, gap, maxWidth, center }) => {
    return (
        <section className={`block bg-${theme}`}>
            <div className={`
                container 
                columns-${columns} 
                gap-${gap} 
                formatted 
                maxw-${maxWidth}
                ${ center ? 'center' : null }
            `}>

                {children}

            </div>
        </section>
    )
}

export const Card = ({ hero, heroRatio, heroLayout, heroWidth, body }) => {

    if ( !hero || !hero[0] ) return

    return (
        <div className={CSS.layout}>
            <div 
                className={`${CSS.hero} ${heroLayout === `fill` && CSS.fill}`} 
                style={{ aspectRatio: heroRatio, width: heroWidth ? `${heroWidth}%` : `100%` }}
            >
                <Image src={hero[0].url} layout={`fill`} />
            </div>

            <div className={CSS.content} dangerouslySetInnerHTML={{__html: body }} />
        </div>
    )
}