import Link from "next/link"
import { HorizontalTicker } from "react-infinite-ticker"

import CSS from './ticker.module.css'

export const Ticker = ({ speed, children }) => {

    if (!children) return

    return (
        <div className={CSS.container} style={{ backgroundColor: `var(--primary)` }}>
            <HorizontalTicker duration={ speed ? speed * 1000 : 20000 }>
                <div className={CSS.messages}>
                    { children }
                </div>
            </HorizontalTicker>
        </div>
    )
}