'use client'

import { useState } from 'react'

import { Chevron } from '../chevron'

import CSS from './eventsbar.module.css'

import { OTHER_EVENTS } from '../../fixtures/eventsbar'



export const EventsBar = ({ site }) => {

    const [active, setActive] = useState(false)
    

    return (
        <div className={`${CSS.layout} ${active && CSS.active}`}>
            <section className={CSS.header}>
                <p>Brought to you by&thinsp;<a href="https://www.thebench.com" className='uLink fw-600' target='_blank' rel='noreferrer'>The Bench</a></p>

                <button className={CSS.toggle} onClick={() => setActive(!active)}><Chevron direction={ active ? 'up' : 'down'} /></button>
            </section>

            <section className={CSS.content}>
                Our Events:
                {
                    OTHER_EVENTS.map((event, index) => {

                        if (event.url !== site) return (
                            <a
                                key={index}
                                href={event.url}
                                className='uLink'
                                target={event.target ? '_blank' : '_self'}
                                rel={event.target ? 'noopener' : ''}
                            >
                                {event.title}
                            </a>
                        )
                    })
                }

            </section>
        </div>
    )
}