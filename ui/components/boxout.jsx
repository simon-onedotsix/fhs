import { Fade } from '../../fuselage/animation/animation'

import CSS from './boxout.module.css'

export const Boxout = ({ children, bg = 'white', fg = 'var(--primary)', padding = 0 }) => {
    return (
        <Fade>
            <div className={CSS.layout} style={{ backgroundColor: bg, color: fg, padding }}>
                {children}
            </div>
        </Fade>
    )
}