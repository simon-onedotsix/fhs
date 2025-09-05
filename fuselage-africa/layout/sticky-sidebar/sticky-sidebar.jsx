import CSS from './sticky-sidebar.module.css'

export const StickySidebar = ({ children, size, flipped }) => {

    const handleLayout = () => {
        switch ( size ) {
            case 'small' : return CSS.small
                break
            
            case 'medium' : return CSS.medium
                break
            
            case 'large' : return CSS.large
                break

            default: return null
        }
    }

    return (
        <section className={`
            ${CSS.layout} 
            ${handleLayout()}
            ${flipped ? CSS.flipped : ''}
        `}>
            { children }
        </section>
    )
}