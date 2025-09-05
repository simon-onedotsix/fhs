import CSS from './logo-grid.module.css'

export const LogoGrid = ({ children }) => {
    return (
        <div className={CSS.layout}>
            { children }
        </div>
    )
}