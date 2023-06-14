import { Pop, Slide, Fade } from "./layout/animation/animation"

import CSS from './impact-figure.module.css'

export const ImpactFigure = ({ value, label }) => {
    return (
        <div className={CSS.wrapper}>
            <Pop><p className={`${CSS.value} fs-0 ff-oswald`}>{ value }</p></Pop>
            <Slide delay={.2}><p className={`${CSS.label} fs-5`}>{ label }</p></Slide>
        </div>
    )
}