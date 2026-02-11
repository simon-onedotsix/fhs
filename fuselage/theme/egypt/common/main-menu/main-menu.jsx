import React, { useState } from 'react'
import { useContext } from 'react'
import { GlobalsContext } from '../../../../../pages/_app'

import Link from 'next/link'

import { Button } from "../../../../../fuselage/theme/2024/world/components/button/button"
import { ArrowButton } from '../../../../components/arrow-button/arrow-button'

import CSS from './main-menu.module.css'


const MENU_DATA = [
    {
        "__typename": "mainMenu_BlockType",
        "id": "191085",
        "columnData": [
            {
                "__typename": "columnData_menuLinksGroup_BlockType",
                "id": "204651",
                "menuLinks": [
                    {
                        "__typename": "menuLinks_TableRow",
                        "hyperlink": "/egypt",
                        "label": "Home",
                        "size": "md",
                        "indent": false,
                        "newWindow": false
                    }
                ]
            },
            {
                "__typename": "columnData_heading_BlockType",
                "id": "204652",
                "heading": "About",
                "headingSize": "lg"
            },
            {
                "__typename": "columnData_menuLinksGroup_BlockType",
                "id": "204653",
                "menuLinks": [
                    {
                        "__typename": "menuLinks_TableRow",
                        "hyperlink": "/egypt/about-fhs-egypt",
                        "label": "About FHS Egypt",
                        "size": "md",
                        "indent": false,
                        "newWindow": false
                    },
                    {
                        "__typename": "menuLinks_TableRow",
                        "hyperlink": "/egypt/contact-us",
                        "label": "Contact Us",
                        "size": "md",
                        "indent": false,
                        "newWindow": false
                    }
                ]
            },
            {
                "__typename": "columnData_heading_BlockType",
                "id": "204654",
                "heading": "Programme",
                "headingSize": "lg"
            },
            {
                "__typename": "columnData_menuLinksGroup_BlockType",
                "id": "204655",
                "menuLinks": [
                    {
                        "__typename": "menuLinks_TableRow",
                        "hyperlink": "/egypt/agenda",
                        "label": "Agenda",
                        "size": "md",
                        "indent": false,
                        "newWindow": false
                    },
                    {
                        "__typename": "menuLinks_TableRow",
                        "hyperlink": "/egypt/speakers",
                        "label": "Speakers",
                        "size": "md",
                        "indent": false,
                        "newWindow": false
                    }
                ]
            },
            {
                "__typename": "columnData_heading_BlockType",
                "id": "219179",
                "heading": "Sponsorship",
                "headingSize": "lg"
            },
            {
                "__typename": "columnData_menuLinksGroup_BlockType",
                "id": "219180",
                "menuLinks": [
                {
                        "__typename": "menuLinks_TableRow",
                        "hyperlink": "/egypt/why-sponsor",
                        "label": "Why Sponsor?",
                        "size": "md",
                        "indent": false,
                        "newWindow": false
                    },
                    {
                        "__typename": "menuLinks_TableRow",
                        "hyperlink": "/egypt/partners",
                        "label": "Sponsors & Partners",
                        "size": "md",
                        "indent": false,
                        "newWindow": false
                    }
                ]
            },
        ]
    },
    {
        "__typename": "mainMenu_BlockType",
        "id": "191095",
        "columnData": [
            {
                "__typename": "columnData_heading_BlockType",
                "id": "191096",
                "heading": "Content Library",
                "headingSize": "lg"
            },
            {
                "__typename": "columnData_menuLinksGroup_BlockType",
                "id": "191097",
                "menuLinks": [
                    {
                        "__typename": "menuLinks_TableRow",
                        "hyperlink": "/egypt/content-library/category/videos-and-webinars",
                        "label": "Videos",
                        "size": "md",
                        "indent": false,
                        "newWindow": false
                    },
                    {
                        "__typename": "menuLinks_TableRow",
                        "hyperlink": "/egypt/content-library/category/podcast",
                        "label": "Podcasts",
                        "size": "md",
                        "indent": false,
                        "newWindow": false
                    },
                    {
                        "__typename": "menuLinks_TableRow",
                        "hyperlink": "/egypt/content-library/category/press-room",
                        "label": "Press Room",
                        "size": "md",
                        "indent": false,
                        "newWindow": false
                    },
                    {
                        "__typename": "menuLinks_TableRow",
                        "hyperlink": "/egypt/content-library/category/reports",
                        "label": "Reports",
                        "size": "md",
                        "indent": false,
                        "newWindow": false
                    },
                    
                ]
            }
        ]
    }
]

export const MainMenu = ({ otherEvents }) => {

    const [ active, setActive ] = useState( false )

    // const { globals } = useContext(GlobalsContext)
    // console.log( 'globals:', globals )

    // const { mainMenu } = globals.me.find( data => data.__typename === 'header_GlobalSet' )
    // console.log( 'sa:', globals.sa )
    // console.log( 'world mainMenu:', mainMenu )

    return (
        <>
            <div className={CSS.toggleContainer}>
                <div className={`${CSS.toggleActions} ${ active && CSS.active }`}>
                    <Button 
                        href={`/egypt/forms/register-interest`} 
                        theme={{ 
                            color: `var(--secondary)`,
                            background: `var(--accent)`, 
                            hover: `white`
                        }} 
                        decal={`fw-600`}
                    >
                        Register Interest
                    </Button>
                    
                    <Button 
                        href={`/egypt/forms/become-a-partner`} 
                        theme={{ 
                            color: `var(--secondary)`,
                            background: `var(--accent)`, 
                            hover: `white`
                        }} 
                        decal={`fw-600`}
                    >
                        Become A Partner
                    </Button>
                </div>

                <div className={CSS.toggleWrapper}>
                    <caption>MENU</caption>
                    
                    <div className={`${CSS.toggle} ${ active && CSS.active }`} onClick={ () => setActive(!active) }>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
                    
            </div>


            <div className={`${CSS.overlay} ${ active && CSS.active } bg-dark`}>
                
                <nav className={CSS.layout}>

                    { 
                        MENU_DATA?.map( column => (
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
                                                            ${item.headingSize === 'lg' ? 'fs-5 c-primary mb-xxs' : ''}
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
                                                                            fw-600
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
                        <p className="fs-4 fw-600 c-primary">Future Hospitality Events</p>
                        <p className="mt-xs pb-xs">
                            <ArrowButton 
                                href={ '/' } 
                                theme={{ arrow: `var(--primary)`, border: `var(--primary)`, label: `white`}}
                            >
                                FHS
                            </ArrowButton>
                        </p>
                        <p className="pb-xs">
                            <ArrowButton 
                                href={ '/sa' } 
                                theme={{ arrow: `var(--primary)`, border: `var(--primary)`, label: `white`}}
                            >
                                FHS Saudi Arabia
                            </ArrowButton>
                        </p>
                        <p className="pb-xs">
                            <ArrowButton 
                                href={ '/africa' } 
                                theme={{ arrow: `var(--primary)`, border: `var(--primary)`, label: `white`}}
                            >
                                FHS Africa
                            </ArrowButton>
                        </p>
                        <p className="pb-sm">
                            <ArrowButton 
                                href={ 'https://www.brandedresidencesforum.com/' } 
                                theme={{ arrow: `var(--primary)`, border: `var(--primary)`, label: `white`}}
                            >
                                Branded Residences Forum
                            </ArrowButton>
                        </p>
                    </section>

                    <section className="c-white">
                        <p className="fs-4 fw-600 c-primary">Our Other Events</p>
                        {
                            otherEvents.length &&
                            otherEvents.map( event => {
                                if ( event.id != 1 && event.id != 2 && event.id != 5 && event.id != 11 && event.id != 15 ) return (
                                    <p key={event.id} className="mt-xs">
                                        <ArrowButton 
                                            href={ event.url } 
                                            theme={{ arrow: `var(--primary)`, border: `var(--primary)`, label: `white`}}
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
