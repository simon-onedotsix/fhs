import CSS from './flash.module.css'

export const Flash = ({ children, maxWidth }) => {
    return (
        <div className={CSS.layout} style={{ maxWidth: maxWidth }}>
            { children }
        </div>
    )
}