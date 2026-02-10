import Link from 'next/link'
import CSS from './icon-button.module.css'


export const IconButton = ({ href, type }) => {

    // console.log('type:', type)

    const handleType = ( type ) => {

        switch ( type ) {
            case 'podcast' : return <PodcastSVG/>
                break

            case 'video' : return <VideoSVG/>
                break
            
            case 'videos-and-webinars' : return <VideoSVG/>
                break

            case 'press-room' : return <NewsSVG/>
                break

            default : return <NewsSVG/>
        }
    }

    const handleLabel = ( type ) => {

        switch ( type ) {
            case 'podcast' : return 'Listen'
                break

            case 'video' : return 'Watch'
                break

            case 'videos-and-webinars' : return 'Watch'
                break

            case 'press-room' : return 'Read'
                break

            default: return 'Read more'
        }
    }


    return (
        <Link href={href}>
            <a className={`${CSS.button} uLink c-accent`}>
                <span className={CSS.iconContainer}>{handleType(type)}</span> {handleLabel(type)}
            </a>
        </Link>
    )
}




const NewsSVG = ({ color = `var(--accent)`}) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 24 24" style={{ fillRule:`evenodd`, clipRule:`evenodd`,strokeLinejoin:`round`, strokeMiterlimit:1.5 }}>
            <g transform="matrix(1,0,0,1,-1002,-86)">
                <g transform="matrix(1.16032,0,0,1.16032,-162.64,-15.643)">
                    <g id="icon-page">
                        <g transform="matrix(1.40988,0,0,1.90861,-56.2812,-392.917)">
                            <path d="M763.948,256.209L759.692,253.065L755,253.065L755,260.912L763.948,260.912L763.948,256.209Z" style={{fill:`none`, strokeWidth:1.03, stroke:color }}/>
                        </g>
                        <g transform="matrix(-0.670557,0,0,-0.764596,1527.06,289.579)">
                            <path d="M763.948,253.065L755,253.065L763.948,260.912L763.948,253.065Z" style={{fill:`none`,strokeWidth:2.4, stroke:color }}/>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

    )
}

const VideoSVG = ({ color = `var(--accent)`}) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 24 24" style={{ fillRule:`evenodd`, clipRule:`evenodd`,strokeLinejoin:`round`, strokeMiterlimit:1.5 }}>
            <g transform="matrix(1,0,0,1,-965,-85)">
                <g transform="matrix(1.45654,0,0,11.5841,-133.68,-291.792)">
                    <g id="icon-video">
                        <g transform="matrix(1.04704,0,0,0.141627,-35.0978,-2.78422)">
                            <rect x="755" y="253.065" width="8.948" height="7.847" style={{ fill:`none`, strokeWidth:1.26, stroke:color }}/>
                        </g>
                        <g transform="matrix(0.369286,0,0,0.0592157,485.977,18.3946)">
                            <path d="M767.665,248.365L755,253.065L755,260.912L767.665,265.612L767.665,248.365Z" style={{fill:`none`, strokeWidth:3.24, stroke:color }}/>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

    )
}

const PodcastSVG = ({ color = `var(--accent)`}) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 24 24" style={{ fillRule:`evenodd`, clipRule:`evenodd`,strokeLinejoin:`round`, strokeMiterlimit:1.5 }}>
            <g transform="matrix(1,0,0,1,-924,-85)">
                <g transform="matrix(1,0,0,8.4781,845.925,-3999.94)">
                    <g id="icon-podcast">
                        <g transform="matrix(-0.740953,0.0873961,-0.740953,-0.0873961,3194.54,833.461)">
                            <path d="M100,4097.5C100,4102.19 96.191,4106 91.5,4106C86.809,4106 83,4102.19 83,4097.5C83,4092.81 86.809,4089 91.5,4089" style={{ fill:`none`, strokeWidth:1.91 }}/>
                        </g>
                        <g transform="matrix(-0.407503,0.0480654,-0.407503,-0.0480654,1797.72,675.903)">
                            <path d="M100,4097.5C100,4102.19 96.191,4106 91.5,4106C86.809,4106 83,4102.19 83,4097.5C83,4092.81 86.809,4089 91.5,4089" style={{fill:`none`, strokeWidth:3.47 }}/>
                        </g>
                        <g transform="matrix(0.824632,0,0,0.0972661,15.6448,84.8142)">
                            <path d="M91,4097L91,4106" style={{fill:`none`, strokeWidth:2.43 }}/>
                        </g>
                        <g transform="matrix(1,0,0,0.117951,-2016.41,449.085)">
                            <circle cx="2107.05" cy="290.586" r="1.365" style={{fill:`none`, strokeWidth:1.5,strokeLinecap:`butt` }}/>
                        </g>
                    </g>
                </g>
            </g>
        </svg>

    )
}