import { useInView } from 'react-intersection-observer'

import Link from 'next/link'
import { MainMenu } from '../main-menu-legacy/main-menu'
import LogoInverseSVG from './img/FHS-logo-inverse.svg'
import LogoSVG from './img/FHS-logo.svg'
import CSS from './header.module.css'


export const Header = ({ compact, shim, inverse }) => {

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
                    
                    {/* <Link href="/register-interest">
                        <a className={`${CSS.ctaButton} fw-600 caps`}>Register Interest</a>
                    </Link> */}
                    
                    {/* <p><span className='fw-600 fs-6'>2023</span> <br/>Global</p> */}
                </div>
                
                <div className={CSS.logoContainer}>
                    <a href={'/'} aria-label='FHS Home'>
                        {
                            inverse ? 
                                <LogoInverseSVG className={CSS.brand}/>
                            :
                                <LogoSVG className={CSS.brand}/>
                        }
                    </a>
                </div>
                
            </header>

            <div ref={headerTrigger} className={shim ? CSS.shim : ''}></div>
        </>
    )
}

export const HeaderShim = () => <div className={CSS.shim}></div>