export const ThemeGraphic = ({ src, width = '50vw', opacity = 1, coordinates }) => {

    return (
        <div style={{
            width: width,
            position: `absolute`,
            mixBlendMode: `screen`,
            opacity: opacity,
            ...coordinates
        }}>
            <img src={src} alt="" width={`100%`} />
        </div>
    )
    
}