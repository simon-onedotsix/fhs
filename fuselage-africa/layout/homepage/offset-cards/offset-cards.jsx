import CSS from './offset-cards.module.css'

export const OffsetCardGrid = ({ children }) => {
    return (
        <section className={CSS.mainGrid}>
            { children }
        </section>
    )
}

export const SubGrid = ({ children, background }) => {
    return (
        <section className={`${CSS.subGrid} ${background} block`}>
            <div className={`${CSS.subGridContainer} container`}>
                { children }
            </div>
        </section>
    )
}