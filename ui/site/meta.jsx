export const Meta = ({ faviconUrl, imageUrl, title, description }) => {
    return (
        <>
            { faviconUrl && <link rel="icon" type="image/png" href={faviconUrl} sizes="16x16" />}
        
            { imageUrl && <meta content={imageUrl} property="og:image"></meta> }
        
            { title && <title>{title}</title>}
        
            { description && <meta name="description" content={description}></meta> }
        </>
    )
}