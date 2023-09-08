import React, { useState } from 'react'
import Link from 'next/link'

import { ArrowButton } from '../../../../../components/arrow-button/arrow-button'
import { Button } from '../../../../../components/button/button'

import CSS from './main-menu.module.css'

export const MainMenu = ({ fixToggle, mainMenu, theme }) => {

    // console.log('main-menu theme:', theme)

    const [ active, setActive ] = useState( false )

    return (
        <>
            <div className={`${CSS.toggleContainer} ${fixToggle && CSS.fixed}`}>
                <div 
                    className={`${CSS.toggle} ${ active && CSS.active }`} 
                    onClick={ () => setActive(!active) } 
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* <p className={`${CSS.toggleLabel} fw-600`}>MENU</p> */}
            </div>


            <div className={`${CSS.overlay} ${ active && CSS.active } p-lg`} style={{ background: theme ? theme.overlayBg : 'var(--dark)' }}>
                
                <div className="columns-2 gap-md mt-md">
                    <section>
                        <p className='c-white'>
                            <Link href={'/eu'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Home</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/eu/agenda'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Agenda</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/eu/advisory-board'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Advisory Board</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/eu/investor-registration'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Investor Registration</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/eu/become-a-sponsor'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Become a Sponsor</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/eu/register-your-interest'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Register interest</a>
                            </Link>
                        </p>

                    </section>

                    <section className='c-white'>
                        <p className="fs-4 fw-600">Future Hospitality events</p>
                        <p className="mt-xs">
                            <ArrowButton href={`/ae`} theme={{ arrow: `white`, border: `white`, label: `white`}}>FHS & AHIC 2023</ArrowButton>
                        </p>
                        <p className="mt-xs">
                            <ArrowButton href={`/sa`} theme={{ arrow: `white`, border: `white`, label: `white`}}>FHS Saudi Arabia</ArrowButton>
                        </p>
                        <p className="fs-4 fw-600 mt-md">Related events</p>
                        <p className="mt-xs">
                            <ArrowButton href={`https://ahic.com`} target='_blank' theme={{ arrow: `white`, border: `white`, label: `white`}}>AHIC 2021</ArrowButton>
                        </p>
                    </section>
                    
                </div>
  
            </div>
        </>
    )
}
