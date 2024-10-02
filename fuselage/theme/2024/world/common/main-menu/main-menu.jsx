import React, { useState } from 'react'
import { useContext } from 'react'
import { GlobalsContext } from '../../../../../../pages/_app'

import Link from 'next/link'

import { Button } from "../../../../../../fuselage/theme/2024/world/components/button/button"
import { ArrowButton } from '../../../../../components/arrow-button/arrow-button'

import CSS from './main-menu.module.css'

export const MainMenu = ({ otherEvents }) => {

    const [ active, setActive ] = useState( false )

    const { globals } = useContext(GlobalsContext)
    // console.log( 'globals:', globals )

    const { mainMenu } = globals.me.find( data => data.__typename === 'header_GlobalSet' )
    // console.log( 'sa:', globals.sa )
    // console.log( 'world mainMenu:', mainMenu )

    return (
        <>
            <div className={CSS.toggleContainer}>
                <div className={`${CSS.toggleActions} ${ active && CSS.active }`}>
                    <Button 
                        href={`/world/register-interest`} 
                        theme={{ 
                            color: `var(--primary)`,
                            background: `var(--secondary-1)`, 
                            hover: `var(--secondary-1-dark)`, 
                        }} 
                        decal={`fw-600`}
                    >
                        Register Interest
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
                
                <nav className={CSS.layout}>

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
                                                            ${CSS.heading}
                                                            fw-600
                                                            ${item.headingSize === 'lg' ? 'fs-5 c-accent mb-xxs' : ''}
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

                                                                let showFlash = false

                                                                if ( 
                                                                    link.hyperlink === '/world/brf' ||
                                                                    link.hyperlink === '/world/projects' ||
                                                                    link.hyperlink === '/world/unto' ||
                                                                    link.hyperlink === '/world/sustainable-cook-off' ||
                                                                    link.hyperlink === '/world/the-big-project-pitch' ||
                                                                    link.hyperlink === '/world/country-pavilions' ||
                                                                    link.hyperlink === '/world/future-leader-award'
                                                                ) showFlash = true
                
                                                                if (link.hyperlink) return (
                                                                    <li key={index}  style={{ paddingBottom: `.05vh` }}>
                                                                        <Link href={link.hyperlink}>
                                                                            <a
                                                                                className={` 
                                                                                    ${link.size === 'sm' ? 'uLink' : 'uLink fw-400'}
                                                                                    ${link.indent && 'ml-sm'}
                                                                                `} 
                                                                                target={ link.newWindow ? '_blank' : '_self'}
                                                                                onClick={ () => setActive(false)}
                                                                            >
                                                                                {
                                                                                    showFlash &&
                                                                                    <span className={CSS.label}>New!</span>
                                                                                }
                                                                                { link.label }
                                                                            </a>
                                                                        </Link>    
                                                                    </li> 
                                                                )
                
                                                                return (
                                                                    <li 
                                                                        key={index}
                                                                        className={` 
                                                                            ${link.size === 'sm' ? '' : 'fw-400'}
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

                    <section className="c-white">
                        <p className="pb-xs">
                            <ArrowButton 
                                href={ '/' } 
                                theme={{ arrow: `var(--accent)`, border: `var(--accent)`, label: `white`}}
                            >
                                FHS
                            </ArrowButton>
                        </p>
                        <p className="pb-sm">
                            <ArrowButton 
                                href={ '/sa' } 
                                theme={{ arrow: `var(--accent)`, border: `var(--accent)`, label: `white`}}
                            >
                                FHS Saudi Arabia
                            </ArrowButton>
                        </p>

                        <p className="fs-4 fw-600 c-accent">Our Other Events</p>
                        {
                            otherEvents.length &&
                            otherEvents.map( event => {
                                if ( event.id != 1 ) return (
                                    <p key={event.id} className="mt-xs">
                                        <ArrowButton 
                                            href={ event.url } 
                                            theme={{ arrow: `var(--accent)`, border: `var(--accent)`, label: `white`}}
                                            target={ event.target && '_blank' }
                                        >
                                            { event.title }
                                        </ArrowButton>
                                    </p>
                                )
                            })
                        }
                    </section>
                    
                </nav>

               
            </div>
        </>
    )
}
