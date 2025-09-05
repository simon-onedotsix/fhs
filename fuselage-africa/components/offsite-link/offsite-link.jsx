import Link from 'next/link'

import CSS from './offsite-link.module.css'

export const OffsiteLink = ({ href, rel, target, children, direction, decal }) => {

    return (
        <Link href={href}>
            <a 
                className={`
                    ${CSS.offsiteLink} 
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