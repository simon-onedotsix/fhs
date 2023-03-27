import React, { useState } from 'react'
import Link from 'next/link'

import { ArrowButton } from '../../components/arrow-button/arrow-button'
import { Button } from '../../components/button/button'

import CSS from './main-menu.module.css'

export const MainMenu = ({ mainMenu }) => {

    const [ active, setActive ] = useState( false )

    return (
        <>
            <div className={CSS.toggleContainer}>
                <div className={`${CSS.toggle} ${ active && CSS.active }`} onClick={ () => setActive(!active) }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* <p className={`${CSS.toggleLabel} fw-600`}>MENU</p> */}
            </div>


            <div className={`${CSS.overlay} ${ active && CSS.active } bg-secondary p-lg`}>
                
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
                        <p className="fs-4 fw-600 c-accent">Future Hospitality events</p>
                        <p className="mt-xs">
                            <ArrowButton href={`/sa`} theme={{ arrow: `var(--primary-sa)`, border: `var(--primary-sa)`, label: `white`}}>FHS Saudi Arabia</ArrowButton>
                        </p>
                        <p className="mt-xs">
                            <ArrowButton href={`/ae`} theme={{ arrow: `var(--accent-ae)`, border: `var(--accent-ae)`, label: `white`}}>FHS & AHIC 2023</ArrowButton>
                        </p>
                        <p className="fs-4 fw-600 c-accent mt-md">Related events</p>
                        <p className="mt-xs">
                            <ArrowButton href={`https://ahic.com`} target='_blank' theme={{ arrow: `orangered`, border: `orangered`, label: `white`}}>AHIC 2021</ArrowButton>
                        </p>
                    </section>

                </div>
  

                {/* {
                    mainMenu.map( node => {
                        
                            return (
                                <ul key={node.id}>
                                    { 
                                        !node.url ? 
                                            <li><span className='c-secondary fw-600'>{node.title}</span></li>
                                        : 
                                            <li key={node.id}>
                                                <Link href={node.url}>
                                                    <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>
                                                        {node.title}
                                                    </a>
                                                </Link>
                                            </li> 
                                    }
                                    
                                    {
                                        node.children.map( childNode => (
                                            <li key={childNode.id} className='mt-xs'>
                                                <Link href={childNode.url}>
                                                    <a className='uLink fs-5 fw-400' onClick={ () => setActive(false)}>
                                                        {childNode.title}
                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            )
                        }
                    
                    )
                } */}

                {/* <div className='mt-md'>
                    <Button href="/register-interest" decal="fw-700 fs-5" secondary>Register interest</Button>
                </div> */}
            </div>
        </>
    )
}
