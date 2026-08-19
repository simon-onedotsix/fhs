import { formatInTimeZone } from 'date-fns-tz'

import { motion } from 'framer-motion'
import { Pop } from '../../fuselage/animation/animation'

import { ExternalLinkIcon } from '../../fuselage/icons/external-link'

import CSS from './event-card.module.css'

export const EventCard = ({ heading, logo, venue, dates, dateOverride, websiteLink, landscape }) => {

    let startDay = formatInTimeZone(new Date( dates.startDate ), 'Asia/Dubai', 'd')
    let startMonth = formatInTimeZone(new Date( dates.startDate ), 'Asia/Dubai', 'MMM')
    let year = formatInTimeZone(new Date( dates.startDate ), 'Asia/Dubai', 'yyyy')
    
    let endDay
    let endMonth

    if (dates.endDate) {
        endDay = formatInTimeZone(new Date( dates.endDate ), 'Asia/Dubai', 'd')
        endMonth = formatInTimeZone(new Date( dates.endDate ), 'Asia/Dubai', 'MMM')
    }

    // console.log(heading, dateOverride)

    return (
        <motion.div 
            initial={{ scale: .5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", bounce: 0.25 }} 
            className={CSS.eventCard} 
        >

            {
                heading && !landscape
                    ? <p className={`${CSS.eventCardHeader} fs-5 fw-600`}>{heading}</p>
                    : null
            }

            <div className={`${CSS.eventCardContent} ${landscape ? CSS.landscape : ''}`}>
                {
                    logo &&
                    <div className={CSS.eventCardLogo} style={{ height: '4.5rem', aspectRatio: logo.width / logo.height }}>
                        <img src={logo.url} alt=''/>
                    </div> 
                }

                <section>
                    {
                        heading && landscape
                            ? <p className={`fs-3 fw-600 caps pb-xs`}>{heading}</p>
                            : null
                    }

                    {
                        dateOverride ?
                            <p className='fs-5 fw-700 lh-2'>{dateOverride}</p>
                        :
                            <>
                                {
                                    startMonth === endMonth ?
                                        <p className='fs-5 fw-600 lh-2'>
                                            { startDay }-{ endDay } { startMonth } { year }
                                        </p>
                                    :
                                        <p className='fs-5 fw-600 lh-2'>
                                            { startDay } { startMonth } { dates.endDate && "-" } { endDay } { endMonth } { year }
                                        </p>

                                }
                            </>
                        }

                    <p>{venue}</p>
                
                    {
                        websiteLink &&
                        <div className={CSS.eventCardActions}>
                                <span className='fs-5'>
                                <Pop delay={.1}>
                                    <a className={CSS.websiteButton} href={websiteLink}>
                                        Website <ExternalLinkIcon />
                                    </a>
                                </Pop>
                            </span>
                        </div>
                    }
                </section>

            </div>

        </motion.div>
    )
}