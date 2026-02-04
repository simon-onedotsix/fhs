import Link from 'next/link'

import { useInView } from 'react-intersection-observer'

import { MainMenu } from '../../../../sa/common/main-menu/main-menu'
import { EventsBar } from '../../../../../../components/events-bar/events-bar'

import CSS from './header.module.css'

const otherEvents = [
    {
        id: 1,
        title: 'FHS Home',
        url: '/',
        target: false
    },
    {
        id: 2,
        title: 'FHS Saudi Arabia',
        url: '/sa',
        target: false
    },
    {
        id: 5,
        title: 'FHS Africa',
        url: '/africa',
        target: false
    },
    {
        id: 11,
        title: 'Branded Residences Forum',
        url: 'https://www.brandedresidencesforum.com/',
        target: true
    },
    {
        id: 12,
        title: 'BRF @ FHS World',
        url: '/world/brf',
        target: false
    },
    {
        id: 13,
        title: 'BRF @ FHS Saudi Arabia',
        url: '/sa/brf',
        target: false
    },
    {
        id: 6,
        title: 'AviaDev',
        url: 'https://www.aviadev.com',
        target: true
    },
    {
        id: 7,
        title: 'SAHIC',
        url: 'https://www.sahic.com',
        target: true
    }
]


export const Header = ({ compact, overlaid, inverse }) => {

    const [pinHeaderTrigger, inView, eventsBar] = useInView({
		threshold: 0,
        initialInView: true
	})
    
    const [hideEventsBarTrigger, headerInView, header] = useInView({
		threshold: 0,
        initialInView: true
	})


    return (
        <>
            <span ref={pinHeaderTrigger}>
                <EventsBar 
                    hidden={ !headerInView ? true : false } 
                    thisEvent={`FHS`}
                    eventsLabel={`Our events:`}
                    events={otherEvents} 
                    theme={{ 
                        background: 'var(--secondary)',
                        color: 'white',
                        accent: 'var(--accent)'
                    }}
                />
            </span>
        
            <header ref={hideEventsBarTrigger} className={`${CSS.layout} ${overlaid && CSS.overlaid} ${compact && CSS.compact}`}>

                <section className={CSS.brandVenueWrapper}>

                    <div className={`${CSS.brand}`}>
                        <Link href={`/sa/brf`}>
                            <a><img src="/assets/img/brf/brf-@fhs-sa-logo-inverse.svg" alt="logo" /></a>
                        </Link>
                    </div>
                    
                    <div className={CSS.venue}>
                        <p className='lh-2'><span className='fw-600'>27-29 OCT 2025</span> <br/>Madinat Jumeirah, Dubai</p>
                    </div>
                    
                </section>
                
                <div className={`${CSS.nav} ${ !inView && CSS.fixed}`}>
                    <MainMenu mainMenu={null} otherEvents={otherEvents} />
                </div>

            </header>

        </>
    )
}


export const HeaderShim = () => <div className={CSS.shim}></div>