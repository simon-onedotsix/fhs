import Link from "next/link"
import { HorizontalTicker } from "react-infinite-ticker"

import CSS from './ticker.module.css'

export const Ticker = ({ speed, messages }) => {

    return (
        <div className={CSS.container} style={{ backgroundColor: `var(--dark)` }}>
            {/* <HorizontalTicker duration={ speed ? speed * 1000 : 100000 }>
                <div className={CSS.messages}>
                    {
                        messages.length &&
                        messages.map( message => (
                            <p 
                                key={message.id} 
                                className={`
                                    ${CSS.message}
                                    ${message.color ? `c-${message.color}` : `c-white`}
                                    ${message.weight ? `fw-${message.weight}` : `fw-400`}
                                `}
                            >
                                { 
                                    message.hyperlink ? 
                                        <Link href={message.hyperlink}>{ message.text }</Link>
                                    : message.text
                                }
                            </p>
                        ))
                    }
                </div>
            </HorizontalTicker> */}
        </div>
    )
}