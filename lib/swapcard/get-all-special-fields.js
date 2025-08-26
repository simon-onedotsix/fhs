export const getAllSpecialFields = ( speakerData ) => {

    if ( !speakerData ) return
    
    const specialFields = []
    
    speakerData.withEvent.fields.map( field => {
        if (field.definition?.id === 'RmllbGREZWZpbml0aW9uXzgzNzE0Mw==') {

            // color-code BRF (id: RmllbGRWYWx1ZV8yODE3MjMyNA==) with accent, all others with secondary

            specialFields.push({
                id: field.id,
                value: field.value,
                color: field.id === 'RmllbGRWYWx1ZV8yODE3MjMyNA==' ? 'var(--accent)' : 'var(--secondary)'
            })
        }
    })

    if (specialFields.length) return specialFields
    
    return

}