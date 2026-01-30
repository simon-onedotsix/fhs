import Link from 'next/link'

import { useInView } from 'react-intersection-observer'

import { MainMenu } from '../main-menu/main-menu'
import { EventsBar } from '../../../../components/events-bar/events-bar'
import { FhsLockup } from '../../../2024/world/components/logos/fhs-brand'

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
        title: 'FHS World',
        url: '/world',
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
                        background: 'var(--primary)',
                        color: 'white',
                        accent: 'white'
                    }}
                />
            </span>
        
            <header ref={hideEventsBarTrigger} className={`${CSS.layout} ${overlaid && CSS.overlaid} ${compact && CSS.compact}`}>

                <section className='flex jc-center flex-wrap gap-sm ai-center'>
                    <div className={`${CSS.brand}`}>
                        <Link href={`/egypt`}>
                            <a className={CSS.logo}>
                                <FhsLockup
                                    sectorLabel={'EGYPT'}
                                    sectorColor={'var(--accent)'}
                                    topColor={`var(--primary)`}
                                    inverse
                                />
                            </a>
                        </Link>
                    </div>

                    <div className={CSS.venue}>
                        <p className='lh-2'><span className='fw-600'>10-11 November 2026</span> <br/>Sofitel Downtown Cairo</p>
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