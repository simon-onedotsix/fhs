import CSS from './poster.module.css'

export const Poster = ( props ) => {

    return (

        <section className={`${CSS.poster} | ${props.decal}`}>

            <div className={CSS.backgroundImage}>
                <img src={props.imageUrl} alt="" />
            </div>

            {props.children}
        </section>

    )
}