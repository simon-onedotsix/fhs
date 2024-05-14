import React, { useState } from 'react'
import { useContext } from 'react'
import { GlobalsContext } from '../../../../../../pages/_app'

import { renderMainMenu } from '../../../../../../lib/render-main-menu'

import { Button } from "../../../../../../fuselage/theme/2024/world/components/button/button"
import { ArrowButton } from '../../../../../components/arrow-button/arrow-button'

import CSS from './main-menu.module.css'

export const MainMenu = ({ otherEvents }) => {

    const [ active, setActive ] = useState( false )

    const { globals } = useContext(GlobalsContext)
    // console.log( 'globals:', globals )

    const { mainMenu } = globals.me.find( data => data.__typename === 'header_GlobalSet' )
    // console.log( 'sa:', globals.sa )
    // console.log( 'sa mainMenu:', mainMenu )

    return (
        <>
            <div className={CSS.toggleContainer}>
                <div className={`${CSS.toggleActions} ${ active && CSS.active }`}>
                    <Button 
                        href={`/world/purchase-pass`} 
                        theme={{ 
                            color: `var(--primary)`,
                            background: `var(--secondary-1)`, 
                            hover: `var(--secondary-1-dark)`, 
                        }} 
                        decal={`fw-600`}
                    >
                        Register Now
                    </Button>
                    
                    <Button 
                        href={`/world/become-a-sponsor`} 
                        theme={{ 
                            color: `var(--primary)`,
                            background: `var(--secondary-1)`, 
                            hover: `var(--secondary-1-dark)`, 
                        }} 
                        decal={`fw-600`}
                    >
                        Become A Sponsor
                    </Button>
                </div>
                    
                <div className={`${CSS.toggle} ${ active && CSS.active }`} onClick={ () => setActive(!active) }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>


            <div className={`${CSS.overlay} ${ active && CSS.active } bg-primary`}>
                
                <nav className="columns-4 gap-md mt-md">

                    { renderMainMenu(mainMenu) }

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
                    
                </nav>

               
            </div>
        </>
    )
}
