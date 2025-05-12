import React, { useState } from 'react'
import { useContext } from 'react'
import { GlobalsContext } from '../../../../../../pages/_app'

import { useRouter } from 'next/router'
import Link from 'next/link'

import { Locales } from '../locales/locales'
import { Button } from "../../../../../../fuselage/theme/2024/world/components/button/button"
import { ArrowButton } from '../../../../../components/arrow-button/arrow-button'

import CSS from './main-menu.module.css'

export const MainMenu = ({ otherEvents }) => {

    const { locale } = useRouter()

    const [ active, setActive ] = useState( false )

    const { globals } = useContext(GlobalsContext)
    // console.log( 'globals:', globals )

    const { mainMenu } = globals.sa.find( data => data.__typename === 'header_GlobalSet' )
    // console.log( 'sa:', globals.sa )
    // console.log( 'world mainMenu:', mainMenu )

    return (
        <>
            <div className={CSS.toggleContainer}>
                <div className={`${CSS.toggleActions} ${ active && CSS.active }`}>
                    <Button 
                        href={`/sa/register-interest`} 
                        theme={{ 
                            color: `white`,
                            background: `var(--secondary)`, 
                            hover: `var(--secondary-dark)`, 
                        }} 
                        decal={`fw-600`}
                    >
                        Register Interest for 2026
                    </Button>

                    <Locales />
                </div>
                    
                <div className={`${CSS.toggle} ${ active && CSS.active }`} onClick={ () => setActive(!active) }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>


            <div className={`${CSS.overlay} ${ active && CSS.active } bg-primary`} dir='ltr'>
                
                <nav className="columns-4 gap-md">
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
                                                            ${CSS.heading}
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
                                                                    link.hyperlink === '/sa/brf' ||
                                                                    link.hyperlink === '/sa/projects' ||
                                                                    link.hyperlink === '/sa/net-positive-solutions-lab' ||
                                                                    link.hyperlink === '/sa/nextgen-investment-forum' ||
                                                                    link.hyperlink === '/sa/curated-connections'
                                                                ) showFlash = true
                
                                                                if (link.hyperlink) return (
                                                                    <li key={index}  style={{ paddingBottom: 0 }}>
                                                                        <Link href={link.hyperlink}>
                                                                            <a
                                                                                className={` 
                                                                                    ${link.size === 'sm' ? 'uLink' : 'uLink fs-6 fw-400'}
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


                    <section className="c-white">
                        <p className="fs-4 fw-600 c-accent">Future Hospitality Events</p>
                        <p className="pt-xs pb-xs">
                            <ArrowButton 
                                href={ '/' } 
                                theme={{ arrow: `var(--accent)`, border: `var(--accent)`, label: `white`}}
                            >
                                FHS Home
                            </ArrowButton>
                        </p>
                        <p className="pb-xs">
                            <ArrowButton 
                                href={ '/world' } 
                                theme={{ arrow: `var(--accent)`, border: `var(--accent)`, label: `white`}}
                            >
                                FHS World
                            </ArrowButton>
                        </p>
                        <p className="pb-sm">
                            <ArrowButton 
                                href={ 'https://www.ahif.com' } 
                                theme={{ arrow: `var(--accent)`, border: `var(--accent)`, label: `white`}}
                            >
                                FHS Africa
                            </ArrowButton>
                        </p>

                        <p className="fs-4 fw-600 c-accent">Our Other Events</p>
                        {
                            otherEvents.length &&
                            otherEvents.map( event => {
                                if ( event.id !== 1 && event.id !== 2 && event.id !== 5 ) return (
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
