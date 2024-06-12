import CSS from './sticky-sidebar.module.css'

export const StickySidebar = ({ children }) => {

    return (
        <section className={CSS.layout}>
            { children }
        </section>
    )
}