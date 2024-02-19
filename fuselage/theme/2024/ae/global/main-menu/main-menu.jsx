import React, { useState } from 'react'
import Link from 'next/link'

import { Button } from '../../components/button/button'
import { ArrowButton } from '../../../../../components/arrow-button/arrow-button'

import CSS from './main-menu.module.css'

export const MainMenu = ({ mainMenu, otherEvents }) => {

    const [ active, setActive ] = useState( false )

    return (
        <>
            <div className={CSS.toggleContainer}>
                <div className={`${CSS.toggleActions} ${ active && CSS.active } fw-600 caps`}>
                    <Button href={`#`} theme={{ background: `var(--primary-2)`, hover: `var(--primary-3)`, color: `white`}}>Register Now</Button>
                </div>

                <div className={`${CSS.toggle} ${ active && CSS.active }`} onClick={ () => setActive(!active) }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>


            <div className={`${CSS.overlay} ${ active && CSS.active } bg-primary`}>
                
                <div className="columns-3 gap-md mt-sm">
                    <section>
                        <p className='c-white'>
                            <Link href={'/'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Home</a>
                            </Link>
                        </p>
                        <p className='c-white mt-xs'>
                            <Link href={'/content-library'}>
                                <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>Content Library</a>
                            </Link>
                        </p>
                    </section>

                    <section className='c-white'>
                        <p className="fs-4 fw-600 c-primary-3">Future Hospitality events</p>
                        <p className="mt-xs">
                            <ArrowButton href={`/ae`} theme={{ arrow: `var(--primary-3)`, border: `var(--primary-3)`, label: `white`}}>FHS World</ArrowButton>
                        </p>
                        <p className="mt-xs">
                            <ArrowButton href={`/sa`} theme={{ arrow: `var(--primary-3)`, border: `var(--primary-3)`, label: `white`}}>FHS Saudi Arabia</ArrowButton>
                        </p>
                    </section>
                    
                    <section className='c-white'>
                        <p className="fs-4 fw-600 c-primary-3">Our other events</p>
                        {
                            otherEvents.length &&
                            otherEvents.map( event => {
                                if ( event.id == 1 || event.id == 3 ) return
                                return (
                                    <p key={ event.id} className="mt-xs">
                                        <ArrowButton 
                                            href={event.url} 
                                            theme={{ arrow: `var(--primary-3)`, 
                                            border: `var(--primary-3)`, 
                                            label: `white`}}
                                        >   
                                            { event.title }
                                        </ArrowButton>
                                    </p>
                                )
                            })
                        }
                    </section>

                </div>

               
            </div>
        </>
    )
}
