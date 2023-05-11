import CSS from './container.module.css'

export const Container = ({ children, decal, flushRight, maxWidth }) => {
    return (
        <div className={`${CSS.container} ${decal} ${flushRight && CSS.flushRight}`} style={{ maxWidth: maxWidth && maxWidth }}>
            { children }
        </div>
    )
}