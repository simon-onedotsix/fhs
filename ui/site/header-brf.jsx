'use client'

import { useState } from "react"

import Link from "next/link"

import { handleMenuItem } from "@/lib/utils/handleMenuItem"

import { MenuToggle } from "@/ui/components/menu-toggle"
import { BrfLockup } from "@/ui/brand/brf-brand"
import { Chevron } from "@/ui/chevron"
import { SlideOut } from "@/ui/modules/slideout"
import { Button } from "../buttons/button"


import CSS from './header.module.css'


export const HeaderBRF = ({ site, parentSite, handle = 'At FHS', parentHandle = 'FHS' }) => {

    const [navActive, setNavActive] = useState(false)
    const [accountActive, setAccountActive] = useState(false)

    
    return (
        <header>

            <nav className={CSS.header}>
                <section>
                    <Link href={site ? `${site}` : `/`}>
                        <BrfLockup region={handle} />
                    </Link>
                </section>

                <section className={`${CSS.mainMenu} ${navActive && CSS.active}`}>
                    <ul>
                        <li><a href={parentSite}><Chevron direction={'left'} /> {parentHandle}</a></li>
                        <li><a href={`${site && `${site}`}/`}>About</a></li>
                        <li><a href={`${site && `${site}`}/page`}>Agenda</a></li>
                        <li><a href={`${site && `${site}`}/page`}>Partners</a></li>
                    </ul>

                    <section className={CSS.actions}>
                        <Button label={`Register`} />
                        <div onClick={setAccountActive}><Button fake outline label={`Log-in`} /></div>
                    </section>
                </section>

                {/* toggle button */}
                <button className={CSS.toggle} onClick={() => setNavActive(!navActive)}><MenuToggle active={navActive}/></button>
            </nav>


            {/* account */}
            
            <SlideOut active={accountActive} setActive={setAccountActive}>
                <div style={{ display: `flex`, flexDirection: `column`, justifyContent: `space-between`, height: `100%` }}>

                    <div className="navSection formatted">
                        <a className="h4" href="/world">Account</a>
                        <br />
                        <form action="" className="form">
                            <div className='formRow'>
                                <label htmlFor="name">User Name</label>
                                <input type="text" id="name" name="name" />
                            </div>
                            
                            <div className='formRow'>
                                <label htmlFor="email">Password</label>
                                <input type="email" id="email" name="email" />
                            </div>

                            <br />
                            
                            <div className='formRow'>
                                <br />
                                <button className="button" type="submit">Log-in</button>
                            </div>
                        </form>
                        <br />
                    </div>

                    <div className="navSection">
                        <a href="#">Forgot password</a>
                        <a href="#">About FHS Club membership</a>
                    </div>
                    
                </div>
            </SlideOut>


        </header>
    )
}
