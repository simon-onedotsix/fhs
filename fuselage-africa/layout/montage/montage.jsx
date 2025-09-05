import Image from 'next/image'

import Icon from './img/quotes.svg'
import CSS from './montage.module.css'


export const MontageGrid = ({ children }) => {
    return (
        <div className={CSS.gridLayout}>
            { children }
        </div>
    )
}


export const MontageSpacer = ({ children, backgroundColor, span }) => {
    return (
        <div className={`${CSS.spacer} ${ span === 2 && CSS.double}`} style={{ backgroundColor: backgroundColor }}>
            { children }
        </div>
    )
}


export const MontageImage = ({ src, width, height, span }) => {
    return (
        <div className={`${CSS.imageContainer} ${ span === 2 && CSS.double}`}>
            <Image src={src} width={width} height={height} layout={`responsive`} alt="" />
        </div>

    )
}


export const MontageBox = ({ children, span }) => {
    return (
        <div className={`${CSS.box} ${ span === 2 && CSS.double}`} >
            { children }
        </div>
    )
}


export const MontageQuote = ({ children, span }) => {
    return (
        <div className={`${CSS.quoteContainer} ${ span === 2 && CSS.double}`} >
            <div className={CSS.iconBox}>
                <Icon className={CSS.icon}/>
            </div>
            { children }
        </div>
    )
}


export const MontageGraphic = () => {
    return (
        <div className={CSS.montageGraphic}>
            <Image src={`/assets/brand/motif-banner-square.jpg`} layout={`fill`} width={1000} height={1000} alt="" />
        </div>
    )
}