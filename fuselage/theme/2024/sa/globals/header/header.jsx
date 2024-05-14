import { useInView } from 'react-intersection-observer'

import { useContext } from 'react'
import { GlobalsContext } from '../../../../../../pages/_app'

import Link from 'next/link'

import { EventsBar } from '../../components/events-bar/events-bar'
import { MainMenu } from '../main-menu/main-menu'

import { FhsSaLogo } from '../../../../../components/fhs-sa-logo/fhs-sa-logo'

import CSS from './header.module.css'


export const Header = ({ compact, shim, shimMobile, theme, path }) => {

	const [menuTrigger, inView, entry] = useInView({
		threshold: 0.1,
	})

    const [hideEventsBarTrigger, headerInView, header] = useInView({
		threshold: 0,
        initialInView: true
	})

    // const { globals } = useContext(GlobalsContext)
    // console.log( 'globals:', globals )

    // const { mainMenu } = globals.sa.find( data => data.__typename === 'header_GlobalSet' )
    // console.log( 'sa:', globals.sa )
    // console.log( 'sa mainMenu:', mainMenu )


    const otherEvents = [
        {
            id: 1,
            title: 'FHS World',
            url: '/world',
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
                        background: '#2A2865',
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
                    <MainMenu fixToggle={!inView} otherEvents={otherEvents}  />
                                        
                    <Link href="/sa/register-interest">
                        <a className={`${CSS.ctaButton} fw-600 caps`}>Register Interest<span className={CSS.desktopOnly}>&thinsp;for 2025</span></a>
                    </Link>
                    
                    <p><span className='fw-600 fs-6'>12 - 14 May 2025</span> <br/>Mandarin Oriental Al Faisaliah, Riyadh</p>
                </div>
                
                <a href={'/sa'} aria-label='FHS Saudi Arabia Home'>
                    <FhsSaLogo />
                </a>

                <div className={`${CSS.underlay}`}></div>
                
            </header>

            <div className={`bg-theme ${shim ? CSS.shim : ''} ${shimMobile ? CSS.shimMobile : ''}`}></div>
        </>
    )
}

export const HeaderShim = () => <div className={CSS.shim}></div>