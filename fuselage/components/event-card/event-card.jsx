import Image from 'next/image'

import { ArrowButton } from '../arrow-button/arrow-button'

import CSS from './event-card.module.css'

export const EventCard = ({ children, ctaUrl, hero, background }) => {
    return (
        <div className={`${CSS.layout}`} style={{ backgroundColor: background }}>
            <div className={CSS.hero}>
                <Image src={hero.url} width={hero.width} height={hero.height} layout={`responsive`} />
            </div>
            <div className={CSS.tri}></div>

            <div className={CSS.content}>
                <div className='right'>
                    <ArrowButton href={ctaUrl} theme={{ arrow: `white`, border: `white`, label: `white`}} flipped small>Visit website</ArrowButton>
                </div>
                <div>
                    { children }
                </div>
            </div>
        </div>
    )
}