import Image from 'next/image'

import { AnimatedCounter } from '../../animation/animated-counter'
import { Pop, Fade, Slide } from '../../animation/animation'

import CSS from './impact-figures.module.css'


export const ImpactFiguresGrid = ({ children }) => {
    return (
        <section className={`${CSS.layout} block bg-secondary`}>
            <div className={CSS.graphic}>
                <Image src={`/assets/img/homepage/brand-pattern-horizontal.jpg`} layout={`fill`} width={1920} height={1000} alt="" priority />
            </div>
            { children }
        </section>
    )
}

export const ImpactFigures = ({ children, theme }) => {
    return (
        <section className={CSS.container}>
            <div className={`${CSS.impactFigures} container`}>
                {children}
            </div>
        </section>
    )
}


export const ImpactFigure = ({value, prefix, suffix, label}) => {
    return (
        <div className={CSS.impactFigure}>
            <p className={`impactFigureValue fs-0 fw-200 c-primary`}>{prefix}<AnimatedCounter from={0} to={parseInt(value)} />{suffix}</p>
            <div className={`caps`}><Slide>{label}</Slide></div>
        </div>
    )
}

export const ImpactFigureSpacer = () => <div className={CSS.spacer}></div>