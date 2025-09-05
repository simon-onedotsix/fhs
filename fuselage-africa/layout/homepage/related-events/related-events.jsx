// import { ArrowButton } from '../../../../components/arrow-button/arrow-button'

import CSS from './related-events.module.css'

export const RelatedEvents = ({ children }) => {

    return (
        <section className={`${CSS.layout} block bg-default`}>

            <div className={CSS.content}>
                { children }
            </div>

            <div className={CSS.graphic}>
            </div>

        </section>
    )
}



export const RelatedEventsCallout = () => {
    return (
        <div className={`${CSS.calloutLayout} bg-primary`}>
            <div className={`${CSS.flash} bg-extra-dark px-sm py-xs`}>
                <p className='fs-1 fw-600'>!</p>
            </div>
            <div className={CSS.message}>
                <p className='fs-5 lh-2'>Attendees can attend AviaDev Real Estate as part of their <strong>AHIF Pass</strong> or <strong>AviaDev Pass</strong> or as a standalone ticket</p>
            </div>
            <div className={CSS.actions}>
                {/* <ArrowButton href={`/register`} solid theme={{ arrow: `white`, border: `var(--accent)`, label: `white`}} >REGISTER HERE</ArrowButton> */}
            </div>
        </div>
    )
}