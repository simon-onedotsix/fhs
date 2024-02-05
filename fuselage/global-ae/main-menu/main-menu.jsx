import React, { useState } from 'react'
import Link from 'next/link'

import { ArrowButton } from '../../components/arrow-button/arrow-button'
import { Button } from '../../components/button/button'

import CSS from './main-menu.module.css'

export const MainMenu = ({ fixToggle, mainMenu, otherEvents, theme }) => {

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
                            <Link href={'/ae/advisory-board'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Advisory Board</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/ae/partners'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Sponsors &amp; Partners</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/ae/content-library'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Content Library</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/ae/purchase-pass'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Purchase Pass</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/ae/contact-us'}>
                                <a className='uLink fs-6 fw-400' onClick={ () => setActive(false)}>Contact Us</a>
                            </Link>
                        </p>
                    </section>

                    <section>
                        <p className='fs-5 fw-700 c-accent'>Event Features</p>
                        <p className='c-white mt-xs'>
                            <Link href={'/ae/stages-and-tracks'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Stages &amp; Tracks</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/ae/country-pavilions'}>
                                <a className='uLink fs-6 fw-400' onClick={ () => setActive(false)}>Country Pavilions</a>
                            </Link>
                        </p>
                    </section>

                    <section>
                        <p className='fs-5 fw-700 c-accent'>FHS 2024</p>
                        <p className='c-white mt-xs'>
                            <Link href={'https://www.canva.com/design/DAFtBtry1HM/nJ8pAa0CtfAnnW4g7jA7Uw/view#1'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>FHS World 2024 Brochure</a>
                            </Link>
                        </p>

                        <p className='fs-5 fw-700 c-accent mt-md'>FHS 2023</p>

                        <p className='c-white mt-xs'>
                            <Link href={'/ae/speakers'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Speakers</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/ae/agenda'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Agenda</a>
                            </Link>
                        </p>

                        <p className='fs-5 fw-700 c-accent mt-md'>FHS 2022</p>
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

                    {/* <section className='c-white'>
                        <p className="fs-4 fw-600">Future Hospitality events</p>
                        <p className="mt-xs">
                            <ArrowButton href={`https://www.canva.com/design/DAFtBtry1HM/nJ8pAa0CtfAnnW4g7jA7Uw/view#1`} target={`_blank`} theme={{ arrow: `white`, border: `white`, label: `white`}}>FHS World 2024 Brochure</ArrowButton>
                        </p>
                        <p className="mt-xs">
                            <ArrowButton href={`/sa`} theme={{ arrow: `white`, border: `white`, label: `white`}}>FHS Saudi Arabia</ArrowButton>
                        </p>
                    </section> */}

                    <section className="c-white">
                        <p className="fs-4 fw-600 c-accent">Our Other Events</p>
                        {
                            otherEvents.length &&
                            otherEvents.map( event => (
                                <p key={event.id} className="mt-xs">
                                    <ArrowButton 
                                        href={ event.url } 
                                        theme={{ arrow: `var(--accent)`, border: `var(--accent)`, label: `white`}}
                                        target={ event.target && '_blank' }
                                    >
                                        { event.title }
                                    </ArrowButton>
                                </p>
                            ))
                        }
                    </section>
                    
                </div>
  
            </div>
        </>
    )
}
