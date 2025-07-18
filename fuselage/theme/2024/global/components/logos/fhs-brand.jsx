import CSS from './fhs-brand.module.css'

export const FhsLockup = ({ sectorColor, sectorLabel, topColor, inverse }) => {
    return (
        <div className={CSS.layout}>
            <FhsIcon inverse={inverse} topColor={topColor} sectorColor={sectorColor} />
            <div>
                <p className={CSS.brand} style={{ color: inverse ? 'white' : 'var(--primary)'}}>FHS</p>
                <p className={CSS.sector} style={{ color: sectorColor ? sectorColor : 'var(--accent)' }}>{ sectorLabel ? sectorLabel : '' }</p>
            </div>
        </div>
    )
}

export const FhsIcon = ({ topColor, sectorColor, inverse }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 91 98" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinejoin:`round`, strokeMiterlimit:2 }}>
            <g transform="matrix(1,0,0,1,-927,-335)">
                <g id="fhs-icon">
                    <g transform="matrix(1,0,0,1,926.762,335.416)">
                        <path d="M27.211,23.297L0.944,8.681L0.962,8.581L15.403,0.543L90.375,42.282L64.157,56.861L64.208,43.883L51.566,36.846L51.566,36.849L39.383,30.069L15.419,43.8L15.471,29.726L27.211,23.297ZM31.317,62.198L51.801,50.792L52.016,63.612L43.119,68.56L31.317,62.198Z" style={{ fill: topColor ? topColor : `rgb(113,207,235)` }}/>
                    </g>
                    <g transform="matrix(1,0,0,1,926.762,335.416)">
                        <path d="M15.452,67.172L15.437,96.892L0.944,88.824L0.944,8.681L27.211,23.297L15.471,29.726L15.419,43.8L15.464,43.774L15.471,53.655L43.125,68.563L29.947,75.884L15.452,67.172ZM51.786,49.944L27.903,36.647L39.383,30.069L51.566,36.849L51.786,49.944ZM15.472,96.909L15.472,96.912L15.469,96.911L15.472,96.909Z" style={{ fill: inverse ? 'white' : 'var(--primary)' }}/>
                    </g>
                    <g transform="matrix(1,0,0,1,926.762,335.416)">
                        <path d="M64.157,56.861L90.374,42.283L90.374,55.206L15.437,96.929L15.452,67.172L29.947,75.884L43.125,68.563L43.119,68.56L52.016,63.612L51.566,36.846L64.209,43.883L64.157,56.861ZM27.894,36.652L29.947,37.797L29.947,61.459L15.471,53.655L15.464,43.774L27.894,36.652Z" style={{ fill: sectorColor ? sectorColor : `rgb(239,55,66)` }}/>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export const FhsIconKeyline = ({ topColor, sectorColor, inverse, strokeWidth }) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 1407 1572" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinecap:`round`, strokeLinejoin:`round` }}>
            <g transform="matrix(1,0,0,1,1,-1175)">
                <g transform="matrix(1,0,0,1,0,-0.999632)">
                    <g id="fhs-icon-keyline" transform="matrix(1,0,0,1,-0.749023,1176.47)">
                        <path vectorEffect="non-scaling-stroke" d="M803.262,809.524L446.278,987.169" style={{ fill:`none`, fillRule:`nonzero`, stroke: topColor ? topColor : `rgb(113,207,235)`, strokeWidth: strokeWidth ? strokeWidth : `1px`}}/>
                        <path vectorEffect="non-scaling-stroke" d="M443.004,582.217L443.004,983.781" style={{ fill:`none`, fillRule:`nonzero`, stroke: sectorColor ? sectorColor : `rgb(239,55,66)`, strokeWidth: strokeWidth ? strokeWidth : `1px` }}/>
                        <path vectorEffect="non-scaling-stroke" d="M439.299,579.914L802.269,806.927" style={{ fill:`none`, fillRule:`nonzero`, stroke: inverse ? 'white' : 'var(--primary)', strokeWidth: strokeWidth ? strokeWidth : `1px` }}/>
                        <path vectorEffect="non-scaling-stroke" d="M1405.87,680.502L1405.87,899.385L228.415,1570.87L228.415,1085.79L456.578,1228L803.262,1028.27L803.262,595.903" style={{ fill:`none`, fillRule:`nonzero`, stroke: sectorColor ? sectorColor : `rgb(239,55,66)`, strokeWidth: strokeWidth ? strokeWidth : `1px` }}/>
                        <path vectorEffect="non-scaling-stroke" d="M228.415,1570.87L0.749,1438.89L1.043,131.489" style={{ fill:`none`, fillRule:`nonzero`, stroke: inverse ? 'white' : 'var(--primary)', strokeWidth: strokeWidth ? strokeWidth : `1px` }}/>
                        <path vectorEffect="non-scaling-stroke" d="M228.89,705.141L228.957,865.825L663.622,1108.58" style={{ fill:`none`, fillRule:`nonzero`, stroke: inverse ? 'white' : 'var(--primary)', strokeWidth: strokeWidth ? strokeWidth : `1px` }}/>
                        <path vectorEffect="non-scaling-stroke" d="M1.043,131.489L413.526,371.171L228.913,475.847L228.913,705.141L605.978,480.703L994.788,706.609L993.998,918.649L1405.87,680.502L227.896,0.525L1.043,131.489Z" style={{ fill:`none`, fillRule:`nonzero`, stroke: topColor ? topColor : `rgb(113,207,235)`, strokeWidth: strokeWidth ? strokeWidth : `1px`}}/>
                    </g>
                </g>
            </g>
        </svg>
    )
}
