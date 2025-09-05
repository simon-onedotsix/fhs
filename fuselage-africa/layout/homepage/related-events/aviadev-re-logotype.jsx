import CSS from './aviadev-re-logotype.module.css'

export const AviadevReLogotype = ({ decal }) => {
    return (
        <p className={`${CSS.logotype} ${decal}`}>Aviadev <br/><span>Real Estate</span></p>
    )
}