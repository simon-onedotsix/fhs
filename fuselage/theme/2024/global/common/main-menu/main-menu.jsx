import React, { useState } from 'react'

import { useContext } from 'react'
import { GlobalsContext } from '../../../../../../pages/_app'

import { renderMainMenu } from '../../../../../../lib/render-main-menu'

import { ArrowButton } from '../../../../../components/arrow-button/arrow-button'

import CSS from './main-menu.module.css'

export const MainMenu = ({ otherEvents }) => {

    const [ active, setActive ] = useState( false )

    const { globals } = useContext(GlobalsContext)
    // console.log( 'globals:', globals )

    const { mainMenu } = globals.global.find( data => data.__typename === 'header_GlobalSet' )
    // console.log( 'sa:', globals.sa )
    // console.log( 'sa mainMenu:', mainMenu )


    return (
        <>
            <div className={CSS.toggleContainer}>
                <div className={`${CSS.toggle} ${ active && CSS.active }`} onClick={ () => setActive(!active) }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* <div className={`${CSS.toggleActions} ${ active && CSS.active } fw-600 caps`}><Button href={`#`} accent>Stay Updated</Button></div> */}
            </div>


            <div className={`${CSS.overlay} ${ active && CSS.active } bg-primary`}>

                <nav className="columns-3 gap-md mt-sm">

                    { renderMainMenu(mainMenu) }

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
                                    <ul key={ event.id} className="mt-xs">
                                        <li>
                                            <ArrowButton 
                                                href={event.url} 
                                                theme={{ arrow: `var(--primary-3)`, 
                                                border: `var(--primary-3)`, 
                                                label: `white`}}
                                            >   
                                                { event.title }
                                            </ArrowButton>
                                        </li>
                                    </ul>
                                )
                            })
                        }
                    </section>
                </nav>

               
            </div>
        </>
    )
}
