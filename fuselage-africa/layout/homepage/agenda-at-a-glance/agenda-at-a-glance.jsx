import { Reveal } from '../../../animation/reveal'
import { Pop, Fade, Slide } from '../../../animation/animation'

import CSS from './agenda-at-a-glance.module.css'

const DATA = [
    {
        date: "Tuesday 17 June",
        timeslots: [
            { timing: "11:00 - 14:00", title: "On-going coffee" },
            { timing: "14:00 - 17:00", title: "Selection of Workshops (Knowledge HUB, Pioneer HUB, The Forum)" },
            { timing: "17:00 - 18:00", title: "Speed Networking" },
            { timing: "18:00 - 21:00", title: "Reception" },
        ]
    },
    {
        date: "Wednesday 18 June",
        timeslots: [
            { timing: "09:00 - 13:30", title: "Main Session (Future HUB)" },
            { timing: "13:30 - 15:00", title: "Lunch" },
            { timing: "15:00 - 18:00", title: "Selection of Workshops, Focus Sessions, Country Showcase... (Knowledge HUB, Pioneer HUB, Showcase HUB, The Forum)" },
            { timing: "17:15 - 18:00", title: "Speed Networking 2" },
            { timing: "18:00 - 21:00", title: "Reception" },
        ]
    },
    {
        date: "Thursday 19 June",
        timeslots: [
            { timing: "07:30 - 08:30", title: "Charity Run" },
            { timing: "09:00 - 13:00", title: "Selection of Workshops, Focus Sessions, Country Showcase... (Knowledge HUB, Pioneer HUB, Showcase HUB, The Forum)" },
            { timing: "13:00 - 14:00", title: "Lunch" },
            { timing: "14:00 - 16:00", title: "Student Session" },
            { timing: "14:00 - 16:00", title: "Tour of Cape Grace - Sustainability Visit" },
            { timing: "14:00 - 16:00", title: "Walking tour - Sustainbility" },
            { timing: "14:00 - 16:00", title: "Cultural Tour" },
        ]
    }
]

export const AgendaAtAGlance = () => {
    return (
        <section className={`${CSS.layout} block pt-0`}>

            <div className="container maxw-50">
                <div className="fs-0 fw-600 c-primary lh-1 pb-md"><Reveal>2025 Agenda</Reveal> <Reveal delay={0.1}>at&nbsp;a&nbsp;glance</Reveal></div>

                <div className={CSS.agenda}>
                    {
                        DATA &&
                        DATA.map( (day, index) => (
                            <div key={index}>
                                <Fade>
                                    <p className={`${CSS.day} fs-4`}>{ day.date }</p>
                                </Fade>

                                {
                                    day.timeslots.length ? 
                                        day.timeslots.map( (slot,index) => <Timeslot key={index} timing={slot.timing} title={slot.title} />  )
                                    : null
                                }
                                
                            </div>
                        ))
                    }

                    
                </div>
            </div>


        </section>
    )
}

const Timeslot = ({ timing, title }) => {
    return (
        <Pop>
            <div className={CSS.timeslot}>
                <p className='fs-6 c-primary'>{ timing }</p>
                <p className='fs-5 fw-600'>{ title }</p>
            </div>
        </Pop>
    )
}