import { useInView } from 'react-intersection-observer'

import { EventsBar } from '../../../../../components/events-bar/events-bar'

import Link from 'next/link'
import { MainMenu } from '../main-menu/main-menu'
import CSS from './header.module.css'
import { FhsEuLogo } from '../../../../../components/fhs-eu-logo/fhs-eu-logo'


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
            id: 3,
            title: 'IDEEA',
            url: 'https://www.ideea-forum.com',
            target: true
        },
        {
            id: 7,
            title: 'FHS & AHIC',
            url: '/eu',
            target: false
        },
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
            <span ref={menuTrigger} style={{ position: `relative`, zIndex: 100 }}>
                <EventsBar 
                    hidden={ !headerInView ? true : false }
                    thisEvent={'FHS Europe'} 
                    events={otherEvents} 
                    theme={{
                        background: 'var(--secondary)',
                        text: 'white',
                        accent: 'var(--accent)'
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
                    <MainMenu fixToggle={!inView} theme={theme} />
                    
                    <Link href="/eu/register-your-interest">
                        <a className={`${CSS.ctaButton} fw-600 caps`}>Register Interest</a>
                    </Link>
                    
                    <p><span className='fw-600 fs-6'>11-12 March 2024</span> <br/>Fairmont, Monte Carlo</p>
                </div>
                
                <a className={CSS.brand} href={'/eu'} aria-label='FHS Home'>
                    <FhsEuLogo 
                        primary={theme ? theme.primary : `white`} 
                        secondary={theme ? theme.secondary : `var(--accent)`} 
                    />
                </a>

                <div className={`${CSS.underlay} bg-primary`}></div>
                
            </header>

            <div className={`bg-theme ${shim ? CSS.shim : ''} ${shimMobile ? CSS.shimMobile : ''}`}></div>
        </>
    )
}

export const HeaderShim = () => <div className={CSS.shim}></div>