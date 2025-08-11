import { useInView } from 'react-intersection-observer'

import Link from 'next/link'

import { MainMenu } from '../main-menu/main-menu'
import { EventsBar } from '../../../../../components/events-bar/events-bar'
import { FhsLockup } from '../../../../../theme/2024/global/components/logos/fhs-brand'

import CSS from './header.module.css'

const otherEvents = [
    {
        id: 3,
        title: 'FHS World',
        url: '/world',
        target: false
    },
    {
        id: 1,
        title: 'FHS Saudi Arabia',
        url: '/sa',
        target: false
    },
    {
        id: 5,
        title: 'FHS Africa (AHIF)',
        url: 'https://www.ahif.com',
        target: true
    },
    {
        id: 11,
        title: 'BRF Asia',
        url: 'https://www.brandedresidencesforum.com/',
        target: true
    },
    {
        id: 12,
        title: 'BRF',
        url: '/world/brf',
        target: true
    },
    {
        id: 6,
        title: 'AviaDev',
        url: 'https://www.aviationdevelop.com',
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
                        background: 'var(--primary-2)',
                        color: 'white',
                        accent: 'white'
                    }}
                />
            </span>
        
            <header ref={hideEventsBarTrigger} className={`${CSS.layout} ${overlaid && CSS.overlaid} ${compact && CSS.compact} `}>

                <div className={`${CSS.brand} ${compact && CSS.compact}`}>
                    <Link href={`/`}><FhsLockup inverse sectorLabel={``} topColor={'var(--primary-light)'} sectorColor={'var(--primary-2)'} /></Link>
                </div>
                
                <div className={`${CSS.nav} ${ !inView && CSS.fixed}`}>
                    <MainMenu otherEvents={otherEvents} />
                </div>

            </header>

        </>
    )
}


export const HeaderShim = () => <div className={CSS.shim}></div>