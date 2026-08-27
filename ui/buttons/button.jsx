import Link from 'next/link'

import CSS from './button.module.css'

export const Button = ({ href = '/', label, target, inverse, outline, fake, alert }) => {

    if (fake) return (
        <span className={`
            ${CSS.ui} 
            ${inverse ? CSS.inverse : ''}
            ${outline ? CSS.outline : ''}
        `}>
            {label}
        </span>
    )

    if (target) return (
        <Link
            href={href}
            target={target}
            rel={`noreferrer`}
        >
            <a className={`
                ${CSS.ui} 
                ${inverse ? CSS.inverse : ''}
                ${outline ? CSS.outline : ''}
            `}>{label}</a>
        </Link>
    )

    return (
        <Link href={href} >
            <a className={`
                ${CSS.ui} 
                ${inverse ? CSS.inverse : ''}
                ${outline ? CSS.outline : ''}
                ${alert ? CSS.alert : ''}
            `}>{label}</a>
        </Link>
    )
}



export const ButtonGrid = ({ children }) => <div className={CSS.grid}>{children}</div>