import React from 'react'

import CSS from './impact-figures.module.css'

export const ImpactFigures = ({ children, theme }) => {
    return (
        <section className={`block bg-${theme}`}>
            <div className={`${CSS.impactFigures} container`}>
                {children}
            </div>
        </section>
    )
}

export const ImpactFigure = ({value, label}) => {
    return (
        <div className={CSS.impactFigure}>
            <p className={CSS.impactFigureValue}>
                {value}
                <span className={`${CSS.bar} bg-accent`}></span>
            </p>
            <p className={CSS.impactFigureLabel}>{label}</p>
        </div>
    )
}