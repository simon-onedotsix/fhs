import CSS from './sponsor-grid.module.css'

export const SponsorGrid = ({ large, children }) => {

    return (
        <div className={`${CSS.layout} ${ large && CSS.lg }`}>
            { children }
        </div>
    )
}