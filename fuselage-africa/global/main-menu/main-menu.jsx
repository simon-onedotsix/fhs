import React, { useState } from 'react'
import Link from 'next/link'

import { Button } from '../../components/button/button'
import { ArrowButton } from '../../components/arrow-button/arrow-button'

import CSS from './main-menu.module.css'

export const MainMenu = ({ mainMenu, otherEvents }) => {

    const [ active, setActive ] = useState( false )

    if ( !mainMenu ) return

    // console.log('main-menu:', mainMenu)

    const renderNode = ( node ) => {
                                
        switch (node.level) {
            case 1:
                return (
                    <li key={node.id}>
                        {
                            node.url ?
                                <Link href={node.url ? node.url : '#'}>
                                    <a 
                                        target={ node.newWindow == 1 ? '_blank' : '' } 
                                        className={`uLink c-white fs-5 fw-600`} 
                                        onClick={ () => setActive(false)}
                                    >
                                        {node.title}
                                    </a>
                                </Link>
                            : <span className='c-white fs-5 fw-600'>{ node.title }</span>
                        }
                    </li>
                )
                break
                
            case 2:
                return (
                    <li key={node.id} style={{ paddingLeft: 20}}>
                        {
                            node.url ?
                                <Link href={node.url ? node.url : '#'}>
                                    <a 
                                        target={ node.newWindow == 1 ? '_blank' : '' } 
                                        className={`uLink c-white fs-7 fw-400 ${node.classes}`} 
                                        onClick={ () => setActive(false)}
                                    >
                                        {
                                            node.classes.includes('new') &&
                                            <span className={CSS.label}>New!</span>
                                        }
                                        {node.title}
                                    </a>
                                </Link>
                            : <span className='c-white fs-7 fw-400'>{ node.title }</span>
                        }
                    </li>
                )
                break

            default:
                break
        }
        
        return
    }



    return (
        <>
            <div className={CSS.toggleContainer}>
                <p className={`${CSS.toggleLabel} ${active && 'c-white'} fw-600`}>MENU</p>
                <div className={`${CSS.toggle} ${ active && CSS.active }`} onClick={ () => setActive(!active) }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
            <div className={`${CSS.overlay} ${ active && CSS.active }`}>
                <div className={`columns-1 gap-xs pb-md`}>
                    {
                        mainMenu.map( node => {
                            
                            if ( node.children.length ) {
                                    return (
                                        <ul key={node.id}>
                                            { renderNode( node ) }
                                            { node.children.map( childNode => renderNode( childNode ) ) }
                                        </ul>
                                    )

                                } else {
                                    return (
                                        <ul key={node.id}>
                                            { renderNode( node ) }
                                        </ul>
                                    ) 
                                }
                            }
                        
                        )
                    }
                </div>

                <div className={CSS.actions}>
                    <p className='pb-sm'><Button href={`https://www.eventbooking.uk.com/AHIF-2026`} target={'_blank'} decal={`fs-5 fw-600 caps bg-dark`}>Register Now</Button></p>

                    <p className="fs-4 fw-600 c-white mt-sm">Future Hospitality Events</p>
                    {
                        otherEvents.length &&
                        otherEvents.map( event => {
                            if ( event.id !== 5 && event.id !== 6 && event.id !== 11 && event.id !== 12 ) {
                                return (
                                    <p key={event.id} className="mt-xs">
                                        <ArrowButton 
                                            href={ event.url } 
                                            theme={{ arrow: `white`, border: `white`, label: `white`}}
                                            target={ event.target && '_blank' }
                                        >
                                            { event.title }
                                        </ArrowButton>
                                    </p>
                                )
                            }
                        })
                    }

                    <p className="fs-4 fw-600 c-white mt-sm">Our Other Events</p>
                        {
                            otherEvents.length &&
                            otherEvents.map( event => {
                                if ( event.id === 5 || event.id === 6 || event.id === 11 || event.id === 12 ) {
                                    return (
                                        <p key={event.id} className="mt-xs">
                                            <ArrowButton 
                                                href={ event.url } 
                                                theme={{ arrow: `white`, border: `white`, label: `white`}}
                                                target={ event.target && '_blank' }
                                            >
                                                { event.title }
                                            </ArrowButton>
                                        </p>
                                    )
                                }
                            })
                        }

                </div>
            </div>
        </>
    )
}
