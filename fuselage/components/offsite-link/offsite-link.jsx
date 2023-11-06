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
                { children } <LinkIcon color={`var(--accent)`} />
            </a>
        </Link>
    )
}


const LinkIcon = ({ color }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 15 15" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeMiterlimit: 1.5 }}>
            <g id="link">
                <g>
                    <g>
                        <path d="M7.583,2.596L12.538,2.564L12.57,7.519" style={{ fill:`none`, stroke: color ? color : `var(--accent)`, strokeWidth:`2.18px` }}/>
                    </g>
                    <g>
                        <path d="M6.978,8.217L12.383,2.722" style={{ fill:`none`, stroke: color ? color : `var(--accent)`, strokeWidth:`2.18px` }}/>
                    </g>
                </g>
                <path d="M6.792,4.38L2.631,4.38L2.631,12.494L10.745,12.494L10.745,8.333" style={{ fill:`none`, stroke: color ? color : `var(--accent)`, strokeWidth:`2px` }}/>
            </g>
        </svg>
    )
}