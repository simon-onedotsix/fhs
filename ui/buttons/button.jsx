import Link from 'next/link'

import CSS from './button.module.css'

export const Button = ({ href = '/', label, target, outline, fake }) => {

    if (fake) return (
        <span className={`${CSS.ui} ${outline ? CSS.outline : ''}`}>
            {label}
        </span>
    )

    if (target) return (
        <a
            href={href}
            className={`${CSS.ui} ${outline ? CSS.outline : ''}`}
            target={target}
            rel={`noreferrer`}
        >
            {label}
        </a>
    )

    return (
        <a href={href} className={`${CSS.ui} ${outline ? CSS.outline : ''}`}>
            {label}
        </a>
    )
}



export const ButtonGrid = ({ children }) => <div className={CSS.grid}>{children}</div>