import { useInView } from 'react-intersection-observer'


import Link from 'next/link'

import { EventsBar } from '../../components/events-bar/events-bar'
import { MainMenu } from '../main-menu/main-menu'
import LogoSVG from './img/FHS-africa.svg'
import CSS from './header.module.css'


const otherEvents = [
    {
        id: 0,
        title: 'FHS',
        url: 'https://www.futurehospitality.com',
        target: true
    },
    {
        id: 1,
        title: 'FHS World',
        url: 'https://www.futurehospitality.com/world',
        target: true
    },
    {
        id: 2,
        title: 'FHS Saudi Arabia',
        url: 'https://www.futurehospitality.com/sa',
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
        id: 5,
        title: 'AviaDev',
        url: 'https://www.aviationdevelop.com',
        target: true
    },
    {
        id: 6,
        title: 'SAHIC',
        url: 'https://www.sahic.com',
        target: true
    }
]


export const Header = ({ mainMenu }) => {

    const [menuTrigger, inView, entry] = useInView({
		threshold: 0.1,
	})

    const [hideEventsBarTrigger, headerInView, header] = useInView({
		threshold: 0,
        initialInView: true
	})

    return (
        <>
            <span ref={menuTrigger}>
                <EventsBar 
                    hidden={ !headerInView ? true : false }
                    thisEvent={'AHIF'} 
                    events={otherEvents} 
                    theme={{
                        background: 'var(--dark)',
                        text: 'white',
                        accent: 'var(--primary)'
                    }}
                />
            </span>
         

            <header ref={hideEventsBarTrigger} className={`${CSS.header} ${ !inView && CSS.fixed }`}>
                
                <a href={'/'} aria-label='AHIF Home'>
                    {/* <LogoSVG className={CSS.brand} /> */}
                    <img src="/assets/site/fhs-africa.svg" alt="" className={CSS.brand} />
                </a>

                <div className='flex ai-center'>
                    <div className={CSS.venue}>
                        <p><span className='fw-600 fs-6'>31 March - 1 April 2026</span> <br/>Radisson Blu Hotel, Nairobi Upper Hill, Kenya</p>
                    </div>
             
                        {/* <Link href="/get-involved-in-2026">
                            <a className={`${CSS.ctaButton} fw-600 caps`}>Get Involved in 2026</a>
                        </Link>&ensp; */}

                        <Link href="https://www.eventbooking.uk.com/AHIF-2026">
                            <a className={`${CSS.ctaButton} fw-600 caps`}>Purchase Pass</a>
                        </Link>
               
                    <MainMenu mainMenu={mainMenu} otherEvents={otherEvents}  />
                </div>

            </header>
        </>
    )
}

export const HeaderShim = () => <div className={CSS.shim}></div>