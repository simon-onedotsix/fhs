import { HorizontalTicker } from "react-infinite-ticker"
import { Pop } from "../../../../../animation/animation"

import CSS from './flag-ticker.module.css'

export const FlagTicker = ({ heading, speed, children }) => {
    return (
        <div className={CSS.container}>
            <div className={CSS.sectionHeadingContainer}>
                <Pop>
                    <p className={'fs-2 fw-400 center pb-sm'}>{ heading }</p>
                </Pop>
            </div>
            <div dir="ltr">
                <HorizontalTicker duration={ speed ? speed * 500 : 20000 }>
                    <div className={CSS.flags}>
                        { children }
                    </div>
                </HorizontalTicker>
            </div>
        </div>
    )
}

export const Flag = ({ flagUrl }) => {
    return (
        <div className={CSS.flag}>
            <img src={ flagUrl } />
        </div>
    )
}