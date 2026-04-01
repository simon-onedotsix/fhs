import { useState, Fragment } from "react"
import { format } from 'date-fns'

import Link from "next/link"

import { handleMenuItem } from "../../lib/handleMenuItem"

import { MenuToggle } from "../components/menu-toggle"
import { FhsLockup } from "../brand/fhs-brand"
import { Chevron } from "../chevron"
import { Button } from "../buttons/button"


import CSS from './header.module.css'

export const Header = ({ site, handle, event, mainMenu, ctas }) => {

    const [navActive, setNavActive] = useState(false)

    // console.log(mainMenu)
   
    
    return (
        <>
            <header>

                <nav className={CSS.header}>
                    <section className={CSS.brand}>
                        <Link href={site ? `${site}` : `/`}>
                            <a style={{ textDecoration: `none`}}>
                                <FhsLockup
                                    region={handle}
                                    leftColor={`white`}
                                    topColor={`var(--secondary)`}
                                    bottomColor={`var(--accent)`}
                                />
                            </a>
                        </Link>
                        
                        {
                            event?.startDate &&
                            <p className={CSS.venue}><span className='fw-600'>
                                <span className="caps">{format(new Date(event.startDate), "dd MMM")}{ event.endDate ? ` - ${format(new Date(event.endDate), "dd MMM")}` : ` `} {format( new Date(event.startDate), "yyyy" )}</span></span> <br />{event.venue}
                            </p>
                        }
                    </section>

                    <section className={`${CSS.mainMenu} ${navActive && CSS.active}`}>
                        <ul>
                            <li className={CSS.deviceOnly}><Link href={`${site && `${site}`}/`}><a>Home</a></Link></li>

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

                    {/* mobile toggle button */}
                    <button className={CSS.toggle} onClick={() => setNavActive(!navActive)}><MenuToggle active={navActive}/></button>
                </nav>


            </header>

            <div className={CSS.spacer}/>
        </>
    )
}
