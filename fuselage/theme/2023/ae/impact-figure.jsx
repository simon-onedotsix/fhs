import CSS from './impact-figure.module.css'

export const ImpactFigure = ({ value, label }) => {
    return (
        <div className={CSS.wrapper}>
            <p className={`${CSS.value} fs-0 ff-oswald`}>{ value }</p>
            <p className={`${CSS.label} fs-5`}>{ label }</p>
        </div>
    )
}