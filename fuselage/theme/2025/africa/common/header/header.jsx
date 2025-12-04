import Link from 'next/link'

import { useInView } from 'react-intersection-observer'

import { MainMenu } from '../main-menu/main-menu'
import { EventsBar } from '../../../../../components/events-bar/events-bar'
import { FhsLockup } from '../../components/logos/fhs-brand'

import CSS from './header.module.css'

const otherEvents = [
    {
        id: 1,
        title: 'FHS Home',
        url: '/',
        target: false
    },
    {
        id: 5,
        title: 'FHS World',
        url: '/world',
        target: true
    },
    {
        id: 2,
        title: 'FHS Saudi Arabia',
        url: '/sa',
        target: false
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
        url: '/sa/brf',
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
                        background: 'var(--secondary)',
                        color: 'white',
                        accent: 'var(--accent)'
                    }}
                />
            </span>
        
            <header ref={hideEventsBarTrigger} className={`${CSS.layout} ${overlaid && CSS.overlaid} ${compact && CSS.compact}`}>

                <section className='flex jc-center flex-wrap gap-sm ai-center'>
                    <div className={`${CSS.brand}`}>
                        <Link href={`/africa`}><a className={CSS.logo}><FhsLockup inverse sectorColor={`#3C1053`} topColor={`#FFB600`} sectorLabel={`Africa`} /></a></Link>
                    </div>
                    <div className={CSS.venue}>
                        <p className='lh-2'><span className='fw-600'>31 March - 1 April 2026</span> <br/>Radisson Blu Hotel, Nairobi Upper Hill, Kenya</p>
                    </div>
                </section>
                
                <div className={`${CSS.nav} ${ !inView && CSS.fixed}`}>
                    <MainMenu mainMenu={null} otherEvents={otherEvents} />
                </div>

            </header>

            { compact && <HeaderShim /> }

        </>
    )
}


export const HeaderShim = () => <div className={CSS.shim}></div>