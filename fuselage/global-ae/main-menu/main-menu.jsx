import React, { useState } from 'react'
import Link from 'next/link'

import { ArrowButton } from '../../components/arrow-button/arrow-button'
import { Button } from '../../components/button/button'

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
                    // style={{ 
                    //     background: theme ? theme.buttons : 'white',
                    //     color: `white`
                    // }}
                >
                    <span style={{ background: theme ? theme.buttonText : 'white', }}></span>
                    <span style={{ background: theme ? theme.buttonText : 'white', }}></span>
                    <span style={{ background: theme ? theme.buttonText : 'white', }}></span>
                </div>
                {/* <p className={`${CSS.toggleLabel} fw-600`}>MENU</p> */}
            </div>


            <div className={`${CSS.overlay} ${ active && CSS.active } p-lg`} style={{ background: theme ? theme.overlayBg : 'var(--dark)' }}>
                
                <div className="columns-4 gap-md mt-md">
                    <section>
                        <p className='c-white'>
                            <Link href={'/ae'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Home</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/ae/speakers'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Speakers</a>
                            </Link>
                        </p>

                        <p className='c-white mt-xs'>
                            <Link href={'/ae/agenda'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>2023 Agenda</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs pl-sm'>
                            <Link href={'/ae/agenda'}>
                                <a className='uLink fw-400' onClick={ () => setActive(false)}>Full Programme</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs pl-sm'>
                            <Link href={'/ae/programme'}>
                                <a className='uLink fw-400' onClick={ () => setActive(false)}>Schedule at a Glance</a>
                            </Link>
                        </p>

                        <p className='c-white mt-xs'>
                            <Link href={'/ae/partners'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Sponsors &amp; Partners</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/ae/advisory-board'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Advisory Board</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/ae/content-library'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Content Library</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/ae/purchase-pass'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Register Now</a>
                            </Link>
                        </p>

                    </section>

                    <section>
                        <p className='fs-5 fw-700 c-white'>Get Involved</p>
                        <p className='c-white mt-xs'>
                            <Link href={'/ae/contact-us'}>
                                <a className='uLink fs-6 fw-400' onClick={ () => setActive(false)}>Contact Us</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/ae/venue'}>
                                <a className='uLink fs-6 fw-400' onClick={ () => setActive(false)}>Venue &amp; Accommodation</a>
                            </Link>
                        </p>

                        <p className='fs-5 fw-700 c-white mt-sm'>Event Features</p>
                        <p className='c-white mt-xs fs-6 fw-400'>Experiences</p>
                        <p className='c-white mt-xs pl-sm'>
                            <Link href={'/ae/networking-receptions'}>
                                <a className='uLink fw-400' onClick={ () => setActive(false)}>Networking Receptions</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs pl-sm'>
                            <Link href={'/ae/site-tours'}>
                                <a className='uLink fw-400' onClick={ () => setActive(false)}>Site Tours</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs pl-sm'>
                            <Link href={'/ae/fnb-tour'}>
                                <a className='uLink fw-400' onClick={ () => setActive(false)}>F&B Concepts Tour</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs pl-sm'>
                            <Link href={'/ae/sports'}>
                                <a className='uLink fw-400' onClick={ () => setActive(false)}>Sports &amp; Wellness</a>
                            </Link>
                        </p>
                       
                        <p className='c-white mt-xs fs-6 fw-400'>Pitch Sessions</p>
                        <p className='c-white mt-xs pl-sm'>
                            <Link href={'/ae/lead-the-change'}>
                                <a className='uLink fw-400' onClick={ () => setActive(false)}>Lead The Change</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs pl-sm'>
                            <Link href={'/ae/startup-den'}>
                                <a className='uLink fw-400' onClick={ () => setActive(false)}>Startup Den</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs pl-sm'>
                            <Link href={'/ae/sustainable-hospitality-challenge'}>
                                <a className='uLink fw-400' onClick={ () => setActive(false)}>Sustainable Hospitality Challenge</a>
                            </Link>
                        </p>
                    </section>


                    <section>
                        <p className='fs-5 fw-700 c-white'>FHS 2022</p>
                        <p className='c-white mt-xs'>
                            <Link href={'/ae/2022/speakers'}>
                                <a className='uLink fs-6 fw-400' onClick={ () => setActive(false)}>Speakers</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/ae/2022/agenda'}>
                                <a className='uLink fs-6 fw-400' onClick={ () => setActive(false)}>Agenda</a>
                            </Link>
                        </p>
                    </section>

                    <section className='c-white'>
                        {/* <p className="fs-4 fw-600">FHS 2022</p>
                        <p className='c-white mt-xs'>
                            <Link href={'/ae/agenda'}>
                                <a className='uLink fw-400 fs-5' onClick={ () => setActive(false)}>2022 programme</a>
                            </Link>
                        </p> */}
                        <p className="fs-4 fw-600">Future Hospitality events</p>
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
