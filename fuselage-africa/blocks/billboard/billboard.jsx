import React from 'react'

import CSS from './billboard.module.css'

export const Billboard = ({ children, hero, height, verticalAlign, horizontalAlign, maxContentWidth, tint }) => {

    const handleVerticalAlign = () => {
        switch ( verticalAlign ) {
            case 'top' : return CSS.top
            break

            case 'bottom' : return CSS.bottom
            break

            default: return CSS.middle
        }
    }

    const handleHorizontalAlign = () => {
        switch ( horizontalAlign ) {
            case 'center' : return CSS.center
            break

            case 'right' : return CSS.right
            break

            default: return CSS.left
        }
    }

    return (
        <section className={CSS.billboard}>

            <div className={CSS.billboardBg}>
                {
                    hero &&
                    <img src={hero.url} alt={hero.alt}/>
                }
            </div>

            <div className={`
                ${CSS.billboardFg} 
                ${handleVerticalAlign()} 
                minvh-${height} 
                bg-black-${tint}
            `}>
                <div className={`${CSS.contentContainer} ${handleHorizontalAlign()} container`}>
                    <div className={`maxw-${maxContentWidth} formatted c-white`}>
                        {children}
                    </div>
                </div>
            </div>

        </section>
    )
}