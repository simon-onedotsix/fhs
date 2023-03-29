import { useInView } from 'react-intersection-observer'

import Link from 'next/link'
import { MainMenu } from '../main-menu/main-menu'
import LogoInverseSVG from './img/FHS-SA-logo-inverse.svg'
import CSS from './header.module.css'


export const Header = ({ compact, shim, shimMobile }) => {

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
                
                <div className={`${CSS.underlay} bg-theme`}></div>
                
                <div className={CSS.venue}>
                    <MainMenu />
                    
                    {/* <a href="https://fhs.marcomevent.net/" target={`_blank`} className={`${CSS.ctaButton} fw-600 caps`}>Purchase Pass</a> */}
                    
                    <Link href="/sa/purchase-pass">
                        <a className={`${CSS.ctaButton} fw-600 caps`}>Purchase Pass</a>
                    </Link>
                    
                    <p><span className='fw-600 fs-6'>7-9 May 2023</span> <br/>Al Faisaliah Hotel, Riyadh</p>
                </div>
                
                <a href={'/sa'} aria-label='FHS-KSA Home'>
                    <LogoInverseSVG className={CSS.brand}/>
                </a>
                
            </header>

            <div ref={headerTrigger} className={`${shim ? CSS.shim : ''} ${shimMobile ? CSS.shimMobile : ''}`}></div>
        </>
    )
}

export const HeaderShim = () => <div className={CSS.shim}></div>