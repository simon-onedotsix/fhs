import React, { useState } from 'react'
import Link from 'next/link'

import { ArrowButton } from '../../../../../components/arrow-button/arrow-button'
import { Button } from '../../../../../components/button/button'

import CSS from './main-menu.module.css'

export const MainMenu = ({ fixToggle, mainMenu, otherEvents }) => {

    const [ active, setActive ] = useState( false )

    return (
        <>
            <div className={`${CSS.toggleContainer} ${fixToggle && CSS.fixed}`}>
                <div className={`${CSS.toggle} ${ active && CSS.active }`} onClick={ () => setActive(!active) }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* <p className={`${CSS.toggleLabel} fw-600`}>MENU</p> */}
            </div>


            <div className={`${CSS.overlay} ${ active && CSS.active }`}>
                
                <div className="columns-4 gap-md">
                    <section>
                        <p className='c-white'>
                            <Link href={'/sa/'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Home</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/sa/speakers'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Speakers</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <span className='fs-5 fw-400'>2024 Programme</span>
                        </p>
                        {/* <p className='c-white mt-xs'>
                            <Link href={'/sa/agenda'}>
                                <a className='uLink fs-5 fw-400'>2024 Programme</a>
                            </Link>
                        </p> */}
                        <p className='c-white mt-xs'>
                            <Link href={'/sa/agenda'}>
                                <a className='uLink fw-400 ml-sm'>Full Programme</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/sa/schedule-at-a-glance'}>
                                <a className='uLink fw-400 ml-sm'>Schedule at a Glance</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/sa/advisory-board'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Advisory Board</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/sa/partners'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Sponsors and Partners</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/sa/networking'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Networking</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/sa/content-library'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Content Library</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/sa/purchase-pass'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Register Now</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/sa/saudi-women-in-hospitality'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>#FHSWomenPower</a>
                            </Link>
                        </p>
                    </section>

                    <section>
                        <p className='fs-5 fw-700 c-accent'>Get Involved</p>
                        <p className='c-white mt-xs'>
                            <Link href={'/sa/contact-us'}>
                                <a className='uLink fs-6 fw-400' onClick={ () => setActive(false)}>Contact Us</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/sa/travel-guide'}>
                                <a className='uLink fs-6 fw-400' onClick={ () => setActive(false)}>Travel Guide</a>
                            </Link>
                        </p>

                        <p className='fs-5 fw-700 c-accent mt-sm'>Event Features</p>
                        <p className='c-white mt-xs pl-sm'>
                            <Link href={'/sa/grif'}>
                                <a className='uLink fw-400' onClick={ () => setActive(false)}>GRIF Saudi Arabia</a>
                            </Link>
                        </p>

                        <p className='c-white mt-xs fs-6 fw-400'>Experiences</p>
                        <p className='c-white mt-xs pl-sm'>
                            <Link href={'/sa/networking'}>
                                <a className='uLink fw-400' onClick={ () => setActive(false)}>The Networking Experience</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs pl-sm'>
                            <Link href={'/sa/networking-receptions'}>
                                <a className='uLink fw-400' onClick={ () => setActive(false)}>Networking Receptions</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs pl-sm'>
                            <Link href={'/sa/site-tours'}>
                                <a className='uLink fw-400' onClick={ () => setActive(false)}>Site Tours</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs fs-6 fw-400'>Pitch Sessions</p>
                        <p className='c-white mt-xs pl-sm'>
                            <Link href={'/sa/destination-tomorrow'}>
                                <a className='uLink fw-400' onClick={ () => setActive(false)}>Destination Tomorrow</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs pl-sm'>
                            <Link href={'/sa/speakers-corner'}>
                                <a className='uLink fw-400' onClick={ () => setActive(false)}>Speakers Corner</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs pl-sm'>
                            <Link href={'/sa/startup-den'}>
                                <a className='uLink fw-400' onClick={ () => setActive(false)}>Startup Den</a>
                            </Link>
                        </p>
                    </section>

                    <section className='c-white'>
                        <p className="fs-5 fw-600 c-accent">FHS Saudi Arabia 2022</p>
                        <p className='c-white mt-xs'>
                            <a className='uLink fs-6 fw-400' href={'https://ksa.futurehospitalitysummit.com/episode/future-hospitality-summit/programme'} target="_blank">2022 programme</a>
                        </p>
                        <p className='c-white mt-xs'>
                            <a className='uLink fs-6 fw-400' href={'https://ksa.futurehospitalitysummit.com/speakers'} target="_blank">2022 speakers</a>
                        </p>
                        
                        <p className="fs-5 fw-600 c-accent mt-md">FHS Saudi Arabia 2023</p>
                        <p className='c-white mt-xs'>
                            <a className='uLink fs-6 fw-400' href={'/sa/2023/agenda'}>2023 programme</a>
                        </p>
                        <p className='c-white mt-xs'>
                            <a className='uLink fs-6 fw-400' href={'/sa/2023/speakers'}>2023 speakers</a>
                        </p>
                        <p className='c-white mt-xs'>
                            <a className='uLink fs-6 fw-400' href={'/sa/2023/partners'}>2023 partners</a>
                        </p>
                    </section>

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
