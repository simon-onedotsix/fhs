export default function convertSeconds (seconds) {

    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)

    const hourString = hours > 0 ? `${hours} hour${hours > 1 ? `s` : `` }` : ''
    const minuteString = minutes > 0 ? `${minutes} minutes` : ''

    if ( hours > 0 ) {
        return `${hourString} ${ minutes > 0 ? minuteString : ''}`

    } else if ( !hours && minutes > 0 ) {
        return `${minuteString}`

    }

    return
}