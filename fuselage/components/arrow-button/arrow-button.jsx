import Link from 'next/link'

import ArrowSVG from './img/arrow.svg'

import CSS from './arrow-button.module.css'


export const ArrowButton = ({ href, target, rel, children, flipped, large, small, theme, solid }) => {
    return (
        <Link href={href ? href : '#'}>
            <a
                className={`
                    ${CSS.arrowButton} 
                    ${large ? CSS.lg : ''}
                    ${small ? CSS.sm : ''}
                    ${solid ? CSS.solid : ''}
                    ${flipped && CSS.flipped}
                `}
                target={target ? target : '_self'}
                rel={rel}
                style={{ color: theme ? theme.border : 'var(--primary)' }}
            >
                <span className={CSS.arrowContainer}>
                    <ArrowSVG className={CSS.arrow} style={{ stroke: theme ? theme.arrow : 'var(--primary)'}}/>
                </span>

                <span className={CSS.labelContainer} style={{ color: theme ? theme.label : 'var(--dark)' }}>
                    { children }
                </span>

                <span className={CSS.box}></span>
            
            </a>
        </Link>
    )
}