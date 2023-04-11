export const handleSeomaticMeta = ( seomatic ) => {

    if ( !seomatic ) return

    let metaTitle = JSON.parse(seomatic.metaTitleContainer)
    let metaTags = JSON.parse(seomatic.metaTagContainer) 

    // console.log('metaTitle:', metaTitle)
    // console.log('metaTags:', metaTags)

    return (
        <>
            <title>{metaTitle.title.title}</title>

            <meta name="description" content={metaTags.description.content} />
            <meta name="referrer" content={metaTags.referrer.content} />
            <meta content={metaTags['og:locale'].content} property="og:locale" />
            <meta content={metaTags['og:site_name'].content} property="og:site_name" />
            <meta content={metaTags['og:type'].content} property="og:type" />
            <meta content={metaTags['og:url'].content} property="og:url" />
            <meta content={metaTags['og:title'].content} property="og:title" />
            <meta content={metaTags['og:description'].content} property="og:description" />
            <meta content={metaTags['og:image'].content} property="og:image"></meta>  
        </>
    )

}

export default handleSeomaticMeta