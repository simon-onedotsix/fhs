import { useInView } from 'react-intersection-observer'

import { EventsBar } from '../../components/events-bar/events-bar'

import Link from 'next/link'
import { MainMenu } from '../main-menu/main-menu'
import LogoInverseSVG from './img/FHS-AE-logo-inverse.svg'
import CSS from './header.module.css'
import { FhsLogo } from '../../components/fhs-logo/fhs-logo'


export const Header = ({ compact, shim, shimMobile, theme }) => {

	// console.log('header theme:', theme)

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
            title: 'FHS Saudi Arabia',
            url: '/sa',
            target: false
        },
        {
            id: 2,
            title: 'GRIF Saudi Arabia',
            url: '/sa/grif',
            target: false
        },
        {
            id: 5,
            title: 'AviaDev',
            url: 'https://www.aviationdevelop.com',
            target: true
        },
        {
            id: 4,
            title: 'AHIF',
            url: 'https://www.ahif.com',
            target: true
        },
        {
            id: 3,
            title: 'IDEEA',
            url: 'https://www.ideea-forum.com',
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
                    thisEvent={'FHS'} 
                    events={otherEvents} 
                    theme={{
                        background: 'var(--secondary)',
                        text: 'white',
                        accent: 'white'
                    }}
                />
            </span>

            <header ref={hideEventsBarTrigger} 
                className={`
                    ${CSS.header} 
                    ${ compact ? CSS.compact : '' }
                    ${ !inView ? CSS.compact : '' }
                    ${!inView && CSS.fixed}
                `}
            >
                
                
                <div className={CSS.venue} style={{ color: theme ? theme.text : 'var(--default-text-color'}}>
                    <MainMenu fixToggle={!inView} theme={theme} otherEvents={otherEvents}  />
                    
                    <Link href="/ae/purchase-pass">
                        <a 
                            className={`${CSS.ctaButton} fw-600 caps`} 
                        >Purchase Pass</a>
                    </Link>
                    
                    <p><span className='fw-600 fs-6'>30 September - 02 October 2024</span> <br/>Madinat Jumeirah, Dubai</p>
                </div>
                
                <a className={CSS.brand} href={'/ae'} aria-label='FHS Home'>
                    <FhsLogo 
                        primary={theme ? theme.primary : `var(--primary-ae)`} 
                        secondary={theme ? theme.secondary : `var(--secondary-ae)`} 
                    />
                </a>

                <div className={`${CSS.underlay} `} style={{ background: theme ? theme.headerBg : `bg-theme` }}></div>
                
            </header>

            <div className={`bg-theme ${shim ? CSS.shim : ''} ${shimMobile ? CSS.shimMobile : ''}`}></div>
        </>
    )
}

export const HeaderShim = () => <div className={CSS.shim}></div>