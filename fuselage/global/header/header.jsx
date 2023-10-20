import Link from 'next/link'

import { useInView } from 'react-intersection-observer'

import { MainMenu } from '../main-menu/main-menu'
import { EventsBar } from '../../components/events-bar/events-bar'
import { FhsLogo } from '../../components/fhs-logo/fhs-logo'

import CSS from './header.module.css'

const otherEvents = [
    {
        id: 1,
        title: 'FHS Saudi Arabia',
        url: '/sa',
        target: false
    },
    {
        id: 3,
        title: 'FHS World',
        url: '/ae',
        target: false
    },
    {
        id: 2,
        title: 'GRIF Saudi Arabia',
        url: '/sa/grif',
        target: false
    },
    {
        id: 6,
        title: 'AviaDev',
        url: 'https://www.aviationdevelop.com',
        target: true
    },
    {
        id: 5,
        title: 'AHIF',
        url: 'https://www.ahif.com',
        target: true
    },
    {
        id: 4,
        title: 'IDEEA',
        url: 'https://www.ideea-forum.com',
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
                    events={otherEvents} />
            </span>
        
            <header ref={hideEventsBarTrigger} className={`${CSS.layout} ${overlaid && CSS.overlaid}`}>

                <div className={`${CSS.brand} ${compact && CSS.compact}`}>
                    <Link href={`/`}><FhsLogo inverse={inverse} /></Link>
                </div>

                <div className={`${CSS.nav} ${ !inView && CSS.fixed}`}>
                    <MainMenu mainMenu={null} />
                </div>
            </header>

        </>
    )
}


export const HeaderShim = () => <div className={CSS.shim}></div>