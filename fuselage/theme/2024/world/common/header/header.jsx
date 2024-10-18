import Link from 'next/link'

import { useInView } from 'react-intersection-observer'

import { MainMenu } from '../main-menu/main-menu'
import { EventsBar } from '../../../../../components/events-bar/events-bar'
import { FhsLogo } from '../../../../../components/fhs-logo/fhs-logo'
import { FhsLockup } from '../../components/logos/fhs-brand'

import CSS from './header.module.css'

const otherEvents = [
    {
        id: 1,
        title: 'FHS Saudi Arabia',
        url: '/sa',
        target: false
    },
    // {
    //     id: 3,
    //     title: 'FHS World',
    //     url: '/world',
    //     target: false
    // },
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
                    events={otherEvents} 
                    theme={{ 
                        background: 'var(--secondary)',
                        color: 'var(--primary)',
                        accent: 'var(--primary)'
                    }}
                />
            </span>
        
            <header ref={hideEventsBarTrigger} className={`${CSS.layout} ${overlaid && CSS.overlaid} ${compact && CSS.compact}`}>

                <section className='flex jc-center flex-wrap gap-sm ai-center'>
                    <div className={`${CSS.brand}`}>
                        <Link href={`/ae`}><a className={CSS.logo}><FhsLockup inverse /></a></Link>
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