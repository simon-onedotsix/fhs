import Image from "next/image"

import { HorizontalTicker } from "react-infinite-ticker"
import { Slide } from "../../../../../animation/animation"

import CSS from './flag-ticker.module.css'

export const FlagTicker = ({ heading, speed, children }) => {
    return (
        <div className={CSS.container}>
            <div className={CSS.sectionHeadingContainer}>
                <span/>
                <Slide>
                    <p className={CSS.sectionHeading}>{ heading }</p>
                </Slide>
            </div>
            <div dir="ltr">
                <HorizontalTicker duration={ speed ? speed * 500 : 20000 }>
                    <div className={CSS.logos}>
                        { children }
                    </div>
                </HorizontalTicker>
            </div>
        </div>
    )
}

export const Flag = ({ flagUrl }) => {
    return (
        <div className={CSS.logo}>
            <img src={ flagUrl } />
        </div>
    )
}