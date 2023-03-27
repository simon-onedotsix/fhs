import { useInView } from 'react-intersection-observer'

import Link from 'next/link'
import { MainMenu } from '../main-menu/main-menu'
import LogoInverseSVG from './img/FHS-AE-logo-inverse.svg'
import CSS from './header.module.css'


export const Header = ({ compact, shim }) => {

	const [headerTrigger, inView, entry] = useInView({
		threshold: 0,
	})

    return (
        <>
            <header className={`
                ${CSS.header} 
                ${ compact ? CSS.compact : '' }
                ${ !inView ? CSS.compact : '' }
            `}>
                
                <div className={CSS.underlay}></div>
                
                <div className={CSS.venue}>
                    <MainMenu />
                    
                    <Link href="/ae/purchase-pass">
                        <a className={`${CSS.ctaButton} fw-600 caps`}>Purchase Pass</a>
                    </Link>
                    
                    <p><span className='fw-600 fs-6'>25-27 September 2023</span> <br/>Hilton Abu Dhabi Yas Island</p>
                </div>
                
                <a href={'/ae'} aria-label='FHIS Home'>
                    <LogoInverseSVG className={CSS.brand}/>
                </a>
                
            </header>

            <div ref={headerTrigger} className={shim ? CSS.shim : ''}></div>
        </>
    )
}

export const HeaderShim = () => <div className={CSS.shim}></div>