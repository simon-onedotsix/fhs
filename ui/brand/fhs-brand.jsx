import CSS from './fhs-brand.module.css'

export const FhsLockup = ({ bottomColor, region, topColor, leftColor, inverse }) => {
    return (
        <div className={CSS.layout}>
            <FhsIcon leftColor={leftColor} topColor={topColor} bottomColor={bottomColor} />
            <div>
                <p className={CSS.brand} style={{ color: 'white'}}>FHS</p>
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

export const FhsLivingLockup = ({ region, inverse }) => {
    return (
        <div className={CSS.layout}>
            <FhsLivingIcon />
            <div>
                <p className={CSS.brand} style={{ color: 'white'}}>FHS</p>
                <p className={CSS.sector} style={{ color: 'var(--accent)' }}>{ region ? region : '' }</p>
            </div>
        </div>
    )
}

export const FhsLivingIcon = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 402 449" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinejoin:`round`, strokeMiterlimit:2 }}>
            <g transform="matrix(1,0,0,1,-2871.146667,-1017.4745)">
                <g id="fhs-living-icon">
                    <g transform="matrix(4.166667,0,0,4.166667,2871.16375,1241.924917)">
                        <path d="M0,-44.821L15.67,-53.868L96.349,-7.286L68.058,9.047L68.062,-5.525L40.88,-21.219L15.67,-6.664L15.67,-21.199L28.261,-28.504L0,-44.821Z" style={{ fill:`rgb(148,0,120)`, fillRule:`nonzero` }}/>
                    </g>
                    <g transform="matrix(-3.608112,2.083899,2.083899,3.608112,3030.523042,1356.888946)">
                        <path d="M-27.791,-13.772L0.059,-13.772L-7.232,-1.14L-20.521,-1.15L-27.791,-13.772Z" style={{ fill:`rgb(148,0,120)`, fillRule:`nonzero` }}/>
                    </g>
                    <g transform="matrix(4.166667,0,0,4.166667,2936.4675,1055.171583)">
                        <path d="M0,98.691L-15.677,89.64L-15.673,0L12.589,16.317L-0.003,23.622L0,51.489L28.266,67.808L15.657,75.103L0,66.062L0,98.691Z" style={{ fill:`rgb(60,26,83)`, fillRule:`nonzero` }}/>
                    </g>
                    <g transform="matrix(-3.607684,-2.08464,-2.08464,3.607684,3020.518834,1131.637945)">
                        <path d="M-31.079,14.651L0.298,14.651L-6.985,2.027L-23.8,2.021L-31.079,14.651Z" style={{ fill:`rgb(60,26,83)`, fillRule:`nonzero` }}/>
                    </g>
                    <g transform="matrix(4.166667,0,0,4.166667,2936.4675,1055.171583)">
                        <path d="M0,98.691L-15.677,89.64L-15.673,0L12.589,16.317L-0.003,23.622L0,51.489L28.266,67.808L15.657,75.103L0,66.062L0,98.691Z" style={{ fill:`white`, fillRule:`nonzero` }}/>
                    </g>
                    <g transform="matrix(-3.607684,-2.08464,-2.08464,3.607684,3020.518834,1131.637945)">
                        <path d="M-31.079,14.651L0.298,14.651L-6.985,2.027L-23.8,2.021L-31.079,14.651Z" style={{ fill:`white`, fillRule:`nonzero` }}/>
                    </g>
                    <g transform="matrix(4.166667,0,0,4.166667,2918.915,1090.191583)">
                        <path d="M0,-1.788L16.767,7.893L24.263,-5.874L17.524,-9.765L0,-1.788ZM16.69,7.977L16.727,7.965L16.735,7.95L16.69,7.977Z" style={{ fill:`rgb(176,61,158)`, fillRule:`nonzero` }}/>
                    </g>
                    <g transform="matrix(4.166667,0,0,4.166667,2988.91875,1183.913667)">
                        <path d="M0,-14.581L-12.591,7.259L12.619,-7.296L21.346,-2.258L27.484,-16.807L18.766,-21.84L0,-14.581Z" style={{ fill:`rgb(176,61,158)`, fillRule:`nonzero` }}/>
                    </g>
                    <g transform="matrix(4.166667,0,0,4.166667,3078.077083,1187.682)">
                        <path d="M0,-3.132L18.326,7.449L18.566,7.376L25.974,-6.229L18.437,-10.581L0,-3.132Z" style={{ fill:`rgb(176,61,158)`, fillRule:`nonzero` }}/>
                    </g>
                    <g transform="matrix(-0.000841,4.166667,4.166667,0.000841,3219.753977,1185.469058)">
                        <path d="M12.691,-15.598L22.6,-15.598L6.26,12.688L5.686,11.694L12.691,-15.598Z" style={{ fill:`rgb(176,61,158)`, fillRule:`nonzero` }}/>
                    </g>
                    <g transform="matrix(4.166667,0,0,4.166667,2875.23,1039.566167)">
                        <path d="M0,3.182L0,4.309L7.231,8.484L7.274,8.47L14.755,-5.267L14.693,-5.302L0,3.182Z" style={{ fill:`rgb(176,61,158)`, fillRule:`nonzero` }}/>
                    </g>
                    <g transform="matrix(3.602605,2.093406,2.093406,-3.602605,3035.400614,1319.535896)">
                        <path d="M6.015,-1.499L6.1,-1.499L12.703,10.035L5.526,22.351L6.015,-1.499Z" style={{ fill:`rgb(176,61,158)`, fillRule:`nonzero` }}/>
                    </g>
                    <g transform="matrix(4.166667,0,0,4.166667,3272.617917,1443.357)">
                        <path d="M0,-55.63L0,-41.055L-80.676,5.526L-80.676,-27.103L-65.019,-18.061L-40.908,-32.011L-40.908,-61.156L-28.287,-53.869L-28.291,-39.296L0,-55.63Z" style={{ fill:`rgb(245,191,184)`, fillRule:`nonzero` }}/>
                    </g>
                    <g transform="matrix(4.166667,0,0,4.166667,3001.6125,1183.877833)">
                        <path d="M0,29.626L0.022,1.775L-3.05,0L-15.638,7.267L-15.635,20.599L0,29.626Z" style={{ fill:`rgb(245,191,184)`, fillRule:`nonzero` }}/>
                    </g>
                </g>
            </g>
        </svg>
    )
}