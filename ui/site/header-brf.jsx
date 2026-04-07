import { useState } from "react"
import { format } from 'date-fns'

import Link from "next/link"

import { handleMenuItem } from "../../lib/handleMenuItem"

import { MenuToggle } from "../components/menu-toggle"
import { BrfLockup } from "../brand/brf-brand"
import { Chevron } from "../chevron"
import { SlideOut } from "../modules/slideout"
import { Button } from "../buttons/button"


import CSS from './header-brf.module.css'


export const HeaderBRF = ({ site, parentSite, handle = 'At FHS', parentHandle = 'FHS', event, mainMenu, ctas }) => {

    const [navActive, setNavActive] = useState(false)

    
    return (
        <>
            <header>

                <nav className={CSS.header}>
                    <section className={CSS.brand}>
                        <Link href={site ? `${site}` : `/`}>
                            <BrfLockup region={handle} />
                        </Link>

                        {/* {
                            event?.startDate &&
                            <p className={CSS.venue}><span className='fw-600'>
                                <span className="caps">{format(new Date(event.startDate), "dd MMM")}{ event.endDate ? ` - ${format(new Date(event.endDate), "dd MMM")}` : ` `} {format( new Date(event.startDate), "yyyy" )}</span></span> <br />{event.venue}
                            </p>
                        } */}
                    </section>

                    <section className={`${CSS.mainMenu} ${navActive && CSS.active}`}>
                        <ul>
                            <li><a href={parentSite}><Chevron direction={'left'} /> {parentHandle}</a></li>
                            {
                                mainMenu?.map(item => {
                                    if (item.children.length) {
                                        // level-1
                                        return (
                                            <li key={item.id}>
                                                <span className={CSS.title}>{item.title}<Chevron /></span>
                                                <ul>
                                                    {
                                                        item.children.map(child => {
                                                            // level-2
                                                            if (child.children?.length) {
                                                                return (
                                                                    <li key={child.id}><p>{child.title}</p>
                                                                        <ul>
                                                                            { child.children?.map(subItem => handleMenuItem(subItem)) }
                                                                        </ul>
                                                                    </li>
                                                                )
                                                            }
                                                            return handleMenuItem(child)
                                                        })
                                                    }
                                                </ul>
                                            </li>
                                        )
                                    }
                                    // level-1
                                    return handleMenuItem(item)
                                })
                            }
                        </ul>

                        <section className={CSS.actions}>
                            {
                                ctas?.map((cta, index) => (
                                    <Button
                                        key={index}
                                        href={cta.hyperlink}
                                        label={cta.label}
                                        target={cta.openInNewWindow}
                                    />
                                ))
                            }
                        </section>
                    </section>

                    {/* toggle button */}
                    <button className={CSS.toggle} onClick={() => setNavActive(!navActive)}><MenuToggle active={navActive}/></button>
                </nav>


            </header>

            <div className={CSS.spacer}/>
        </>
    )
}
