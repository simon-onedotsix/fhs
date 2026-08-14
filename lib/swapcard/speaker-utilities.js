import _ from 'lodash'

export function orderByLastName(speakers) {
    return _.orderBy( speakers, [ speaker => speaker.lastName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") ], ['asc'])
}


export function customOrderById(collection, ids) {
    
    const orderMap = _.reduce(ids, (acc, id, index) => {
        acc[String(id)] = index
        return acc
    }, {})

    const sorted = _.sortBy(collection, (item) => {
        const index = orderMap[String(item.id)]
        return index !== undefined ? index : Infinity
    })

    if (!ids) return collection
    
    return sorted
}