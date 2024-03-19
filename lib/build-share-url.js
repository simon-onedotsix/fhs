export const buildShareUrl = ( basePath, router ) => {
    let postPath = `https://www.futurehospitality.com${router.asPath}`
    return basePath + postPath
}