import { useRouter } from 'next/router'
import Link from 'next/link'

import CSS from './events-bar.module.css'

export const EventsBar = ({ hidden, thisEvent, eventsLabel, events, theme }) => {

    const { locale } = useRouter()

    return (
        <div className={`${CSS.wrapper} ${hidden && CSS.hidden}`} style={{ background: theme ? theme.background : `var(--primary)` }} dir={ locale === 'ar' ? 'rtl' : 'ltr' }>

            <div className={CSS.layout} style={{ color: theme ? theme.color : 'inherit'}}>
                <section>
                    { thisEvent ? thisEvent : 'This event ' } { locale === 'ar' ? "تأتيكم قمة مستقبل الضيافة برعاية" : "is brought to you by" } <EventBarButton href={`https://www.thebench.com`} title={`The Bench`} target stroke={ theme ? theme.accent : `var(--accent)`} />
                    &emsp;<EventBarButton href={`https://www.thebench.com/newsletter`} title={ locale === 'ar' ? `اشترك في نشرتنا` : `Subscribe to our Newsletter`} target stroke={ theme ? theme.accent : `var(--accent)`} />
                </section>

                <section className={CSS.events}>

                    {
                        events &&
                        <>
                            { 
                                locale === 'ar'
                                ?
                                    "فعالياتنا:"
                                :
                                    "Our Events:"
                            }
                            { events.map( (event, index) => (
                                <EventBarButton 
                                    key={index}
                                    href={event.url} 
                                    title={event.title} 
                                    target={event.target} 
                                    stroke={ theme ? theme.accent : `var(--accent)`} 
                                    color={ theme ? theme.color : 'inherit' }
                                /> 
                            )) }
                        </>
                    }

                </section>
            </div>

        </div>
    )
}



const EventBarButton = ({ href, title, target, stroke, color }) => {

    let style = { 
        color: color ? color : 'inherit',
        backgroundImage: `linear-gradient(${stroke ? 
        stroke : `var(--accent)`}, ${stroke ? stroke : `var(--accent)`}` 
    }

    if ( target ) return (
        <a href={href} className={`${CSS.event} fw-600`} target="_blank" rel="noreferrer" style={style}>{ title }</a>
    )
    return (
        <a href={href} className={`${CSS.event} fw-600`} style={style}>{ title }</a>
    )
}