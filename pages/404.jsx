import Head from 'next/head'
import Link from 'next/link'

import { FhsLockup } from '../ui/brand/fhs-brand'



import { ArrowButton } from '../fuselage/components/arrow-button/arrow-button'


const FHS_EVENTS = [
    {
        title: 'FHS',
        url: '/'
    },
    {
        title: 'FHS World',
        url: '/world'
    },
    {
        title: 'FHS Saudi Arabia',
        url: '/sa'
    },
    {
        title: 'FHS Africa',
        url: '/africa'
    },
    {
        title: 'FHS Egypt',
        url: '/eygpt'
    },
    {
        title: 'FHS Living',
        url: '/living'
    },

]
const OTHER_EVENTS = [
    {
        title: 'Aviadev',
        url: 'https://www.aviadev.com/'
    },
    {
        title: 'SAHIC',
        url: 'https://www.sahic.com/'
    }
]

export default function ErrorPage () {
    return (
        <div className='bg-primary' style={{ minHeight: `100vh` }}>
            <Head><link rel="icon" type="image/png" href="/assets/favicons/favicon-16x16.png" sizes="16x16" /></Head>
            
            <section className="block bg-primary">
                <div className="container">
                     <Link href={`/`}>
                            <a style={{ textDecoration: `none`}}>
                                <FhsLockup
                                    leftColor={`white`}
                                    topColor={`var(--secondary)`}
                                    bottomColor={`var(--accent)`}
                                />
                            </a>
                        </Link>
                </div>
                    
                <div className="container py-md bt-xs bb-xs bc-secondary">
                    <p className="fs-0 fw-400">404</p>
                    <p className='fw-400'>Page not found. Please check your URL.</p>
                </div>


                <div className="container columns-2 gap-xs" style={{ alignItems: 'flex-start'}}>
                    <div className='columns-1 gap-xs'>
                        <p className="fs-3 fw-500">FHS Events</p>
                        {
                            FHS_EVENTS.map((event, index) => (
                                <div key={index}>
                                    <ArrowButton
                                        href={event.url}
                                        theme={{
                                            arrow: `var(--secondary)`,
                                            border: `var(--secondary)`,
                                            label: `white`
                                        }}
                                    >
                                        {event.title}
                                    </ArrowButton>
                                </div>
                            ))
                        }
                        <br />
                    </div>

                    <div className='columns-1 gap-xs'>
                        <p className="fs-3 fw-500">Other Events</p>
                        {
                            OTHER_EVENTS.map((event, index) => (
                                <div key={index}>
                                    <ArrowButton
                                        href={event.url}
                                        theme={{
                                            arrow: `var(--secondary)`,
                                            border: `var(--secondary)`,
                                            label: `white`
                                        }}
                                        target={`_blank`}
                                    >
                                        {event.title}
                                    </ArrowButton>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

ErrorPage.theme = 'global-2024'