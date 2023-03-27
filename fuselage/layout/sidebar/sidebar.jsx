import CSS from './sidebar.module.css'

export const Sidebar = ({ children, size, flipped, sticky }) => {

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
            ${sticky ? CSS.sticky : ''}
        `}>
            { children }
        </section>
    )
}