import { useInView } from 'react-intersection-observer'

import { EventsBar } from '../../components/events-bar/events-bar'

import Link from 'next/link'
import { MainMenu } from '../main-menu/main-menu'
import LogoInverseSVG from './img/FHS-AE-logo-inverse.svg'
import CSS from './header.module.css'


export const Header = ({ compact, shim, shimMobile }) => {

	// const [headerTrigger, inView, entry] = useInView({
	// 	threshold: 0,
	// })

    const [menuTrigger, inView, entry] = useInView({
		threshold: 0.1,
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
                    thisEvent={'FHS & AHIC'} 
                    events={otherEvents} 
                    theme={{
                        background: 'var(--dark-ae)',
                        text: 'white',
                        accent: 'var(--accent-ae)'
                    }}
                />
            </span>

            <header className={`
                ${CSS.header} 
                ${ compact ? CSS.compact : '' }
                ${ !inView ? CSS.compact : '' }
                ${!inView && CSS.fixed}
            `}>
                
                
                <div className={CSS.venue}>
                    <MainMenu fixToggle={!inView} />
                    
                    <Link href="/ae/purchase-pass">
                        <a className={`${CSS.ctaButton} fw-600 caps`}>Purchase Pass</a>
                    </Link>
                    
                    <p><span className='fw-600 fs-6'>25-27 September 2023</span> <br/>Hilton Abu Dhabi Yas Island</p>
                </div>
                
                <a href={'/ae'} aria-label='FHS Home'>
                    <LogoInverseSVG className={CSS.brand}/>
                </a>

                <div className={`${CSS.underlay} bg-theme`}></div>
                
            </header>

            <div className={`bg-theme ${shim ? CSS.shim : ''} ${shimMobile ? CSS.shimMobile : ''}`}></div>
        </>
    )
}

export const HeaderShim = () => <div className={CSS.shim}></div>