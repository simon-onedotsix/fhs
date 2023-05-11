import { useInView } from 'react-intersection-observer'

import { EventsBar } from '../../components/events-bar/events-bar'

import Link from 'next/link'
import { MainMenu } from '../main-menu/main-menu'
import LogoInverseSVG from './img/FHS-SA-logo-inverse.svg'
import CSS from './header.module.css'


export const Header = ({ compact, shim, shimMobile }) => {

	const [menuTrigger, inView, entry] = useInView({
		threshold: 0.1,
	})

    const [hideEventsBarTrigger, headerInView, header] = useInView({
		threshold: 0,
        initialInView: true
	})

    const otherEvents = [
        {
            id: 1,
            title: 'FHS & AHIC',
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
            id: 3,
            title: 'IDEEA',
            url: 'https://www.ideea-forum.com',
            target: true
        },
        {
            id: 4,
            title: 'AHIF',
            url: 'https://www.ahif.com',
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

    return (
        <>     
            <span ref={menuTrigger}>
                <EventsBar 
                    hidden={ !headerInView ? true : false }
                    thisEvent={'FHS Saudi Arabia'} 
                    events={otherEvents} 
                    theme={{
                        background: 'var(--primary)',
                        text: 'white',
                        accent: 'var(--accent-sa)'
                    }}
                />
            </span>
            
            <header ref={hideEventsBarTrigger} 
                className={`
                    ${CSS.header} 
                    ${ compact ? CSS.compact : '' }
                    ${ !inView ? CSS.compact : '' }
                    ${ !inView && CSS.fixed }
                `}  
            >
                
                <div className={CSS.venue}>
                    <MainMenu fixToggle={!inView} />
                                        
                    <Link href="/sa/register-interest">
                        <a className={`${CSS.ctaButton} fw-600 caps`}>Register Interest <span className='mobileHide'>for 2024</span></a>
                        {/* <a className={`${CSS.ctaButton} fw-600 caps`}>Purchase Pass</a> */}
                    </Link>
                    
                    <p><span className='fw-600 fs-6'>7-9 May 2023</span> <br/>Al Faisaliah Hotel, Riyadh</p>
                </div>
                
                <a href={'/sa'} aria-label='FHS Saudi Arabia Home'>
                    <LogoInverseSVG className={CSS.brand}/>
                </a>

                <div className={`${CSS.underlay} bg-theme`}></div>
                
            </header>

            <div className={`bg-theme ${shim ? CSS.shim : ''} ${shimMobile ? CSS.shimMobile : ''}`}></div>
        </>
    )
}

export const HeaderShim = () => <div className={CSS.shim}></div>