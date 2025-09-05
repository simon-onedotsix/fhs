import Image from 'next/image'

import CSS from './layout-grid.module.css'

export const LayoutGrid = ({ children }) => {
    return <div className={CSS.layout}>{ children }</div>
}


export const AboveTheFoldBg = () => <div className={CSS.aboveTheFoldBg}></div>


export const HeroGraphic = () => {
    return (
        <div className={CSS.heroGraphic}>
            <Image src={`/assets/theme/neutral/graphic-01.png`} width={1085} height={950} />
        </div>
    )
}


export const Descriptor = ({ children }) => {
    return (
        <section className={` ${CSS.descriptor} block`}>
            <div className="container">
                { children }
            </div>
        </section>
    )
}


export const ImageBox = ({ children }) => {
    return (
        <div className={`${CSS.imageBox} bg-dark`}>
            { children }
        </div>
    )
}


export const IntroBox =({ children }) => {
    return (
        <section className={`${CSS.introBox} block bg-light`}>
            <div className="container">
                { children }
            </div>
        </section>
    )
}


export const ImpactFiguresBox = ({ children }) => {
    return (
        <section className={`${CSS.impactFiguresBox} block bg-white`}>
            <div className="container formatted">
                { children }
            </div>
        </section>
    )
}

export const ImpactFiguresBoxGrid = ({ children }) => <div className={CSS.impactFiguresBoxGrid}>{ children }</div>

export const ImpactFiguresGraphic = () => {
    return (
        <div className={CSS.impactFiguresGraphic}>
            <Image src={`/assets/theme/neutral/graphic-03.png`} width={570} height={353} />
        </div>
    )
}


export const QuoteBox = ({ children }) => {
    return (
        <section className={`${CSS.quoteBox} block bg-white`}>
            <div className="container">
                { children }
            </div>
        </section>
    )
}

export const QuoteBoxGraphic = () => {
    return (
        <div className={CSS.quoteBoxGraphic}>
            <Image src={`/assets/theme/neutral/graphic-02.png`} width={543} height={229} />
        </div>
    )
}