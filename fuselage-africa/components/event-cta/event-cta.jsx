import Link from 'next/link'
import CSS from './event-cta.module.css'

export const EventCta = ({ inverse }) => {
    return (
        <div className={`${CSS.container} ${ inverse && CSS.inverse}`}>

            <section>
                <p className='fs-sm fw-400 lh-3 caps'><span className='fs-2 lh-1'>17-19</span><br/> June 2025</p>
            </section>
            
            <section>
                <p className='fs-sm fw-400 caps'>The Westin Cape Town, South Africa</p>
            </section>
            
            <section>
                <EventCtaButton href={`https://www.eventbooking.uk.com/AHIF-2025`} label={`Purchase Pass`} />
            </section>

        </div>
    )
}

const EventCtaButton = ({ href, label }) => {
    return (

        <a href={href} className={CSS.button}>{ label }</a>

    )
}