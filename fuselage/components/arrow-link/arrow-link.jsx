import Link from 'next/link'

import CSS from './arrow-link.module.css'

export const ArrowLink = ({ href, rel, target, children, direction, theme }) => {

    return (
        <Link href={href}>
            <a 
                className={`
                    ${CSS.arrowLink} 
                    ${direction === 'right' ? CSS.right : CSS.left} 
                `}
                target={target}
                rel={rel}
                style={{
                    color: theme ? theme.color : `currentcolor`
                }}
            >
                {
                    direction !== 'right' &&
                    <ChevronLeft stroke={theme ? theme.stroke : `currentcolor`} />

                }
                { children }
                {
                    direction === 'right' &&
                    <ChevronRight stroke={theme ? theme.stroke : `currentcolor`} />
                }
            </a>
        </Link>
    )
}



const ChevronLeft = ({ stroke }) => {
    return (
        <div style={{ width: 20, height: 20 }}>
            <svg width="100%" height="100%" viewBox="0 0 9 15" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeMiterlimit: 1.5 }}>
                <g transform="matrix(1,0,0,1,-2133,-139)">
                    <g id="chevron-left" transform="matrix(-0.507813,0.507813,0.507813,0.507813,2287.29,-452.69)">
                        <path d="M730,440L740,440L740,450" style={{ fill:`none`, stroke:`${stroke ? stroke : `currentColor`}`, strokeWidth: `2.78px` }}/>
                    </g>
                </g>
            </svg>
        </div>
    )
}
const ChevronRight = ({ stroke }) => {
    return (
        <div style={{ width: 20, height: 20 }}>
            <svg width="100%" height="100%" viewBox="0 0 9 15" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeMiterlimit: 1.5 }}>
                <g transform="matrix(1,0,0,1,-2102,-139)">
                    <g id="chevron-right" transform="matrix(0.507813,0.507813,-0.507813,0.507813,1956.66,-452.69)">
                        <path d="M730,440L740,440L740,450" style={{ fill:`none`, stroke:`${stroke ? stroke : `currentColor`}`, strokeWidth: `2.78px` }}/>
                    </g>
                </g>
            </svg>
        </div>
    )
}