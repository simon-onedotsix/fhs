'use client'

import CSS from './slideout.module.css'

export const SlideOut = ({ children, active, setActive, bg = `var(--brand-2)` }) => {

    return (
        <div className={`${CSS.layout} ${active ? CSS.active : ''}`} style={{ backgroundColor: bg }}>
            <div className={CSS.actions}>
                <button className={CSS.closeButton} onClick={() => setActive(false)}>&times;</button>
            </div>
            { children }
        </div>
    )
}