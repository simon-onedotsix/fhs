import React, { useState } from 'react'

import { useContext } from 'react'
import { GlobalsContext } from '../../../../../../pages/_app'

import Link from 'next/link'

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
                <div className={`${CSS.toggleActions} ${ active && CSS.active }`}></div>
                
                <div className={CSS.toggleWrapper}>
                    <caption>MENU</caption>
                    
                    <div className={`${CSS.toggle} ${ active && CSS.active }`} onClick={ () => setActive(!active) }>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
                    
            </div>


            <div className={`${CSS.overlay} ${ active && CSS.active } bg-primary`}>

                <nav className="columns-3 gap-md mt-sm">

                    { 
                        mainMenu?.map( column => (
                            <section key={column.id}>
                                {
                                    column.columnData.map( item => {
                                        switch (item.__typename) {
                
                                            case "columnData_heading_BlockType":
                                                return (
                                                    <p  
                                                        key={item.id}
                                                        className={`
                                                            fw-600
                                                            ${item.headingSize === 'lg' ? 'fs-5 c-secondary mt-sm mb-xs' : ''}
                                                            ${item.headingSize === 'md' ? 'fs-6' : ''}
                                                            ${item.headingSize === 'sm' ? 'fs-default' : ''}
                                                        `} 
                                                    >
                                                        { item.heading }
                                                    </p>
                                                )
                                                break
                        
                                            case "columnData_menuLinksGroup_BlockType":
                                                return (
                                                    <ul key={item.id}>
                                                        {
                                                            item.menuLinks?.map( (link, index) => {
                
                                                                if (link.hyperlink) return (
                                                                    <li key={index}  style={{ paddingBottom: `.125vh` }}>
                                                                        <Link href={link.hyperlink}>
                                                                            <a
                                                                                className={` 
                                                                                    ${link.size === 'sm' ? 'uLink' : 'uLink fs-6 fw-400'}
                                                                                    ${link.indent && 'ml-sm'}
                                                                                `} 
                                                                                target={ link.newWindow ? '_blank' : '_self'}
                                                                                onClick={ () => setActive(false)}
                                                                            >{ link.label }</a>
                                                                        </Link>    
                                                                    </li> 
                                                                )
                
                                                                return (
                                                                    <li 
                                                                        key={index}
                                                                        className={` 
                                                                            ${link.size === 'sm' ? '' : 'fs-6 fw-400'}
                                                                            ${link.indent && 'ml-sm'}
                                                                        `}
                                                                    >{ link.label }</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                )
                                                break
                                        
                                            default:
                                                break
                                        }
                                    })
                                }
                            </section> 
                        ))
                    }

                    <section className='c-white'>
                        <p className="fs-4 fw-600 c-primary-3">Future Hospitality events</p>
                        <p className="mt-xs">
                            <ArrowButton href={`/ae`} theme={{ arrow: `var(--primary-3)`, border: `var(--primary-3)`, label: `white`}}>FHS World</ArrowButton>
                        </p>
                        <p className="mt-xs">
                            <ArrowButton href={`/sa`} theme={{ arrow: `var(--primary-3)`, border: `var(--primary-3)`, label: `white`}}>FHS Saudi Arabia</ArrowButton>
                        </p>
                        <p className="mt-xs">
                            <ArrowButton href={`https://www.ahif.com`} theme={{ arrow: `var(--primary-3)`, border: `var(--primary-3)`, label: `white`}}>FHS Africa</ArrowButton>
                        </p>
                    </section>
                    
                    <section className='c-white'>
                        <p className="fs-4 fw-600 c-primary-3">Our other events</p>
                        {
                            otherEvents.length &&
                            <ul>
                                {
                                    otherEvents.map( (event, index) => {
                                        if ( event.id == 1 || event.id == 3 || event.id == 5 ) return
                                        return (
                                                <li key={index} className="mt-xs">
                                                    <ArrowButton 
                                                        href={event.url} 
                                                        theme={{ arrow: `var(--primary-3)`, 
                                                        border: `var(--primary-3)`, 
                                                        label: `white`}}
                                                    >   
                                                        { event.title }
                                                    </ArrowButton>
                                                </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </section>
                </nav>

               
            </div>
        </>
    )
}
