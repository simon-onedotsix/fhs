import Image from "next/image"

import { HorizontalTicker } from "react-infinite-ticker"

import CSS from './logo-ticker.module.css'

export const LogoTicker = ({ heading, speed, children }) => {
    return (
        <div className={CSS.container}>
            <div className={CSS.sectionHeadingContainer}>
                <span/>
                <p className={CSS.sectionHeading}>{ heading }</p>
            </div>
            <HorizontalTicker duration={ speed ? speed * 1000 : 20000 }>
                <div className={CSS.logos}>
                    { children }
                </div>
            </HorizontalTicker>
        </div>
    )
}

export const Logo = ({ logoUrl }) => {
    return (
        <div className={CSS.logo}>
            <img src={ logoUrl } />
        </div>
    )
}