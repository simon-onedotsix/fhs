import CSS from './agenda-layout.module.css'

export const AgendaLayout = ({ children }) => {

    return (
        <section className={`
            ${CSS.layout} 
        `}>
            { children }
        </section>
    )
}