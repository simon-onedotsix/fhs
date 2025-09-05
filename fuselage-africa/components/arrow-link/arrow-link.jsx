import Link from 'next/link'

import CSS from './arrow-link.module.css'

export const ArrowLink = ({ href, rel, target, children, direction, decal }) => {

    return (
        <Link href={href}>
            <a 
                className={`
                    ${CSS.arrowLink} 
                    ${direction === 'right' ? CSS.right : CSS.left} 
                    ${decal}
                `}
                target={target}
                rel={rel}
            >
                { children }
            </a>
        </Link>
    )
}