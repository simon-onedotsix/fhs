import useCustomMediaQuery from '../../hooks/useCustomMediaQuery'

import { Fade } from '../../fuselage/animation/animation'

import CSS from './boxout.module.css'

export const Boxout = ({ children, bg = 'white', fg = 'var(--primary)', padding = 0, maxWidth =`20rem`, minHeight = `auto` }) => {

    const isDesktop = useCustomMediaQuery('(min-width: 900px)')

    return (
        <Fade>
            <div
                className={CSS.layout}
                style={{
                    backgroundColor: bg,
                    color: fg,
                    padding,
                    maxWidth: isDesktop ? maxWidth : '100%',
                    minHeight: isDesktop ? minHeight : 'auto',
                }}>
                {children}
            </div>
        </Fade>
    )
}