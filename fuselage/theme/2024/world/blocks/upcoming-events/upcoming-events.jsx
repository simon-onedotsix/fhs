import { motion } from 'framer-motion'
import { Pop } from '../../../../../animation/animation'

import Image from 'next/image'

import { formatInTimeZone } from 'date-fns-tz'

import { ExternalLinkIcon } from '../../../../../icons/external-link'

import CSS from './upcoming-events.module.css'



export const UpcomingEvents = ({ children, landscape }) => {
    return (
        <div className={`columns-1 pt-sm`}>
            { children }
        </div>
    )
}

export const EventGroupCard = ({ children, theme, location, dates, dateOverride, venue }) => {

    let startDay = formatInTimeZone(new Date( dates.startDate ), 'Asia/Dubai', 'd')
    let startMonth = formatInTimeZone(new Date( dates.startDate ), 'Asia/Dubai', 'MMMM')
    let year = formatInTimeZone(new Date( dates.startDate ), 'Asia/Dubai', 'yyyy')
    
    let endDay
    let endMonth

    if (dates.endDate) {
        endDay = formatInTimeZone(new Date( dates.endDate ), 'Asia/Dubai', 'd')
        endMonth = formatInTimeZone(new Date( dates.endDate ), 'Asia/Dubai', 'MMMM')
    }

    // console.log('dates:', dates)
    // console.log('start day:', startDay)
    // console.log('end day:', endDay)
    // console.log('start month:', startMonth)
    // console.log('end month:', endMonth)
    // console.log('year:', year)

    return (
        <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.25 }}
            className={`${CSS.eventCard}`} 
        >

            <div className={`formatted`}>
                <p className='fs-2 fw-700' style={{ color: theme }}>{ location }</p>
                {
                    dateOverride ?
                        <p className='fs-4 fw-700 lh-2'>{dateOverride}</p>
                    :
                        <>
                            {
                                startMonth === endMonth ?
                                    <p className='fs-4 fw-700 lh-2'>
                                        { startDay }-{ endDay } { startMonth } { year }
                                    </p>
                                :
                                    <p className='fs-4 fw-700 lh-2'>
                                        { startDay } { startMonth } { dates.endDate && "-" } { endDay } { endMonth } { year }
                                    </p>

                            }
                        </>
                }
                <p className='fs-5'>{ venue }</p>
            </div>

            <div>
                { children }
            </div>
            
        </motion.div>
    )
}



export const EventCard = ({ theme, title, logo, passLink, websiteLink }) => {
    return (
        <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", bounce: 0.25 }} 
            className={CSS.actions} 
        >

            {
                logo &&
                <div className={CSS.eventLogo} style={{ height: '6rem', aspectRatio: logo.width / logo.height }}>
                    <Image src={logo.url} layout={`fill`} alt=''/>
                </div> 
            }
            {
                websiteLink &&
                <div className={CSS.eventCardContent}>
                    <p className='fs-5'><a className={CSS.websiteButton} href={ websiteLink } target='_blank'>Website <ExternalLinkIcon /></a></p>
                </div>
            }
            
        </motion.div>
    )
}



export const EventCardLite = ({ heading, logo, venue, dates, dateOverride, websiteLink }) => {

    let startDay = formatInTimeZone(new Date( dates.startDate ), 'Asia/Dubai', 'd')
    let startMonth = formatInTimeZone(new Date( dates.startDate ), 'Asia/Dubai', 'MMMM')
    let year = formatInTimeZone(new Date( dates.startDate ), 'Asia/Dubai', 'yyyy')
    
    let endDay
    let endMonth

    if (dates.endDate) {
        endDay = formatInTimeZone(new Date( dates.endDate ), 'Asia/Dubai', 'd')
        endMonth = formatInTimeZone(new Date( dates.endDate ), 'Asia/Dubai', 'MMMM')
    }

    // console.log(heading, dateOverride)

    return (
        <motion.div 
            initial={{ scale: .5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", bounce: 0.25 }} 

            className={CSS.eventCardLite} 
        >

            <p className={`${CSS.eventCardLiteHeading} fs-5 fw-600`}>{heading}</p>

            <div className={CSS.eventCardLiteContent}>
                {
                    logo &&
                    <div className={CSS.eventCardLiteLogo} style={{ height: '4.5rem', aspectRatio: logo.width / logo.height }}>
                        <img src={logo.url} alt=''/>
                    </div> 
                }

                <section>
                    {
                        dateOverride ?
                            <p className='fs-4 fw-700 lh-2'>{dateOverride}</p>
                        :
                            <>
                                {
                                    startMonth === endMonth ?
                                        <p className='fs-6 fw-600 lh-2'>
                                            { startDay }-{ endDay } { startMonth } { year }
                                        </p>
                                    :
                                        <p className='fs-6 fw-600 lh-2'>
                                            { startDay } { startMonth } { dates.endDate && "-" } { endDay } { endMonth } { year }
                                        </p>

                                }
                            </>
                        }

                    <p className='mt-xxs'>{venue}</p>
                </section>

                {
                    websiteLink &&
                    <div className={CSS.eventCardLiteActions}>
                            <span className='fs-5'>
                            <Pop delay={.1}>
                                <a className={CSS.websiteButton} href={websiteLink} target='_blank'>
                                    Website <ExternalLinkIcon />
                                </a>
                            </Pop>
                        </span>
                    </div>
                }
            </div>

        </motion.div>
    )
}