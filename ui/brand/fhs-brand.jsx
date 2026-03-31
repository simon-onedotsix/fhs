import CSS from './fhs-brand.module.css'

export const FhsLockup = ({ bottomColor, region, topColor, leftColor, inverse }) => {
    return (
        <div className={CSS.layout}>
            <FhsIcon leftColor={leftColor} topColor={topColor} bottomColor={bottomColor} />
            <div>
                <p className={CSS.brand} style={{ color: inverse ? 'var(--bg)' : 'var(--fg)'}}>FHS</p>
                <p className={CSS.sector} style={{ color: bottomColor ? bottomColor : 'var(--accent)' }}>{ region ? region : '' }</p>
            </div>
        </div>
    )
}

export const FhsIcon = ({ leftColor, topColor, bottomColor }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 91 98" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinejoin:`round`, strokeMiterlimit:2 }}>
            <g transform="matrix(1,0,0,1,-927,-335)">
                <g id="fhs-icon">
                    <g transform="matrix(1,0,0,1,926.762,335.416)">
                        <path d="M27.211,23.297L0.944,8.681L0.962,8.581L15.403,0.543L90.375,42.282L64.157,56.861L64.208,43.883L51.566,36.846L51.566,36.849L39.383,30.069L15.419,43.8L15.471,29.726L27.211,23.297ZM31.317,62.198L51.801,50.792L52.016,63.612L43.119,68.56L31.317,62.198Z" style={{ fill: topColor ? topColor : `rgba(255, 255, 255, 0.5)` }}/>
                    </g>
                    <g transform="matrix(1,0,0,1,926.762,335.416)">
                        <path d="M15.452,67.172L15.437,96.892L0.944,88.824L0.944,8.681L27.211,23.297L15.471,29.726L15.419,43.8L15.464,43.774L15.471,53.655L43.125,68.563L29.947,75.884L15.452,67.172ZM51.786,49.944L27.903,36.647L39.383,30.069L51.566,36.849L51.786,49.944ZM15.472,96.909L15.472,96.912L15.469,96.911L15.472,96.909Z" style={{ fill: leftColor ? leftColor : 'white' }}/>
                    </g>
                    <g transform="matrix(1,0,0,1,926.762,335.416)">
                        <path d="M64.157,56.861L90.374,42.283L90.374,55.206L15.437,96.929L15.452,67.172L29.947,75.884L43.125,68.563L43.119,68.56L52.016,63.612L51.566,36.846L64.209,43.883L64.157,56.861ZM27.894,36.652L29.947,37.797L29.947,61.459L15.471,53.655L15.464,43.774L27.894,36.652Z" style={{ fill: bottomColor ? bottomColor : `var(--bg)` }}/>
                    </g>
                </g>
            </g>
        </svg>
    )
}