export const Chevron = ({ direction = 0, color }) => {

    const handleDirection = (d) => {

        switch (d) {
            case "left":
                return 90
                break
            
            case "right":
                return -90
                break
            
            case 'up':
                return 180
                break
        
            default:
                return 0
                break
        }

    }

    return (
        <div
            src="/dropdown-chevron.svg"
            alt=""
            style={{
                display: `inline-flex`,
                width: 16,
                height: 10,
                transform: `rotate(${handleDirection(direction)}deg)`
            }}
        >
            <svg width="100%" height="100%" viewBox="0 0 26 24" style={{fillRule:`evenodd`, clipRule:`evenodd`, strokeMiterlimit:1.5 }}>
                <g transform="matrix(1,0,0,1,-1888,-350)">
                    <g id="dropdown-chevron" transform="matrix(-0.710384,0.710384,-0.710384,-0.710384,2739.05,152.543)">
                        <path d="M730,440L740,440L740,450" style={{ fill:`none`, stroke: color ? color : `white`, strokeWidth:3 }}/>
                    </g>
                </g>
            </svg>
        </div>
    )
}

