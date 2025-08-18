export const getFieldValueByID = ( speakerData, fieldID ) => {

    if ( !speakerData || !fieldID ) return

    let fieldData = speakerData.withEvent.fields.find( field => field.id === fieldID )

    if (fieldData ) return fieldData.value

    return

}