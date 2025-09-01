import _ from 'lodash'

export const getAllTopics = (sessionsData) => {
        if ( !sessionsData ) return []

        const fieldIds = []
        const fieldObjects = []
        const distilledFieldObjects = []

        // build arrays
        sessionsData.forEach( (session) => {
            let topics = session.fields.filter( (field) => field.definition.name === 'Topics' )
            topics.forEach( (field) => {
                fieldIds.push(field.id)
                fieldObjects.push({ id: field.id, name: field.translations[0].value })
            })
        })

        // for unique IDs, search the field object array to find the related name
        _.uniq(fieldIds).forEach( (id) => {
            distilledFieldObjects.push(fieldObjects.find( (obj) => obj.id === id ))
        })

        return distilledFieldObjects
    }