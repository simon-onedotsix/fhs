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
                    </section>

                    <section className={`${CSS.mainMenu} ${navActive && CSS.active}`}>
                        <ul>
                            <li><a href={parentSite}><Chevron direction={'left'} /> {parentHandle}</a></li>
                            {
                                mainMenu?.map((item, index) => {
                                    if (item.children.length) {
                                        // level-1
                                        return (
                                            <li key={index}>
                                                <span className={CSS.title}>{item.title}<Chevron /></span>
                                                <ul>
                                                    {
                                                        item.children.map((child, index) => {
                                                            // level-2
                                                            if (child.children?.length) {
                                                                return (
                                                                    <li key={index}><p>{child.title}</p>
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
