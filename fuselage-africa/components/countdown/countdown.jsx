import {useState, useEffect} from 'react'

import CSS from './countdown.module.css'
import { set } from 'lodash'

export const Countdown = ({ expiryDate, children }) => {

    const [ isActive, setIsActive ] = useState( false )
    
    const now = Date.now()
    //end date
    const countdownDate = new Date( expiryDate || '10/18/2021' )

    // if ( now > countdownDate) console.log('expired')

    //state variable to store days, hours, minutes and seconds
    const [ state, setState ] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    
    useEffect(() => {
        //indicating function to rerun every 1000 milliseconds (1 second)
        const interval = setInterval(() => setNewTime(), 1000)
        
        //Stop the rerun once state.seconds is less than zero
        if(state.seconds < 0){
            setIsActive(false)
            clearInterval(interval)
        }
    }, [ state ])

    const setNewTime = () => {
        if ( countdownDate ) {

            //get current time now in milliseconds
            const currentTime = new Date()
            //get difference dates in milliseconds
            const distanceToDate = countdownDate - currentTime
            // get number of days from the difference in dates
            let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24))
            // get number of minutes from the remaining time after removing hours
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            )
            // number of hours from the remaining time after removing seconds
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            )
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000)

            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9]

            // a logic to add 0 in front of numbers such that 1 will be 01, 2 will be 02, and so on.
            days = `${days}`
            
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`
            }

            //Updating the state variable.
            setState({ days, hours, minutes, seconds })
            setIsActive( true )
        }
    }

    return (
        <div className={CSS.container} style={{ display: isActive ? 'block' : 'none' }}>

            <div className={CSS.headline}>
                { children }
            </div>

            <div className={CSS.counterWrapper}>
                {
                    state.seconds < 0 
                    ?
                        <div>
                            <p className='fs-2 fw-600 caps c-white'>Time&apos;s up!</p>
                        </div>
                    :
                        <div className={CSS.counterContainer}>
                            <div className={CSS.counterTimerWrapper}>
                                <div className={CSS.counterTimer}>{state.days || '00'}</div>
                                <span>{state.days == 1 ? 'Day' : 'Days'}</span>
                            </div>

                            <div className={CSS.counterTimerWrapper}>
                                <div className={CSS.counterTimer}>{state.hours || '00'}</div>
                                <span>{state.hours == 1 ? 'Hour' : 'Hours'}</span>
                            </div>

                            <div className={CSS.counterTimerWrapper}>
                                <div className={CSS.counterTimer}>{state.minutes || '00'}</div>
                                <span>Minutes</span>
                            </div>

                            <div className={CSS.counterTimerWrapper}>
                                <div className={CSS.counterTimer}>{state.seconds || '00'}</div>
                                <span>Seconds</span>
                            </div>
                        </div>
                }
            </div>
        </div>

    )
}