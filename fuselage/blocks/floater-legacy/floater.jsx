import Image from 'next/image'

import CSS from './floater.module.css'


export const FloatersLegacy = ({ children, theme, flipped }) => {
    return (
        <section className={`${CSS.floaters} block bg-${theme} ${flipped ? CSS.flipped : ''}`}>
            <div className="container">
                {children}
            </div>
        </section>
    )
}

export const FloaterLegacy = ({ children, hero }) => {
    return (
        <section className={CSS.floater}>
            <div className={CSS.container}>
                <div className={CSS.hero}>
                    <Image className={CSS.image} src={hero.url} width={hero.width} height={hero.height} alt={hero.title}/>               
                </div>

                <div className={`${CSS.body} formatted`}>
                    {children}
                </div>
            </div>
        </section>
    )
}