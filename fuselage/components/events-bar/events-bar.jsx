import Link from 'next/link'

import CSS from './events-bar.module.css'

export const EventsBar = ({ hidden, thisEvent, eventsLabel, events, theme }) => {

    return (
        <div className={`${CSS.wrapper} ${hidden && CSS.hidden}`} style={{ background: theme ? theme.background : `var(--primary)` }}>

            <div className={CSS.layout}>
                <section>
                    { thisEvent ? thisEvent : 'This event ' } is brought to you by <EventBarButton href={`https://www.thebench.com`} title={`The Bench`} target stroke={ theme ? theme.accent : `var(--accent)`} />
                </section>

                <section className={CSS.events}>

                    {
                        events &&
                        <>
                            {
                                eventsLabel ?
                                    <span>{ eventsLabel }</span>
                                :
                                    <span>Our other events:</span>
                            }
                            { events.map( (event, index) => (
                                <EventBarButton 
                                    key={index}
                                    href={event.url} 
                                    title={event.title} 
                                    target={event.target} 
                                    stroke={ theme ? theme.accent : `var(--accent)`} 
                                /> 
                            )) }
                        </>
                    }

                </section>
            </div>

        </div>
    )
}



const EventBarButton = ({ href, title, target, stroke }) => {


    let style = { backgroundImage: `linear-gradient(${stroke ? stroke : `var(--accent)`}, ${stroke ? stroke : `var(--accent)`}` }

    if ( target ) return (
        <a href={href} className={`${CSS.event} fw-600`} target="_blank" rel="noreferrer" style={style}>{ title }</a>
    )
    return (
        <a href={href} className={`${CSS.event} fw-600`} style={style}>{ title }</a>
    )
}