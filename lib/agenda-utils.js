import _ from 'lodash'

export function sortSessions ( sessions ) {
    const orderedSessions = _.orderBy(sessions, [ 'startMinute', 'asc'])
    // console.log('orderedSessions:', orderedSessions)

    const groupedSessions = _
        .chain(orderedSessions)
        .groupBy(function(session) { return new Date(session.startDate).getDay() })
        .sortBy(function(session) { return session.startMinute })
        .value()
    // console.log('sorted sessions:', groupedSessions)
    // console.log('sorted sessions [1]:', groupedSessions[1])

    return groupedSessions
}


export function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
}
