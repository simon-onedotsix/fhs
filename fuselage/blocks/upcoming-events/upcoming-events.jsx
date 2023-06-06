import { motion } from 'framer-motion'

import Image from 'next/image'

import { formatInTimeZone } from 'date-fns-tz'

import { PassIcon } from '../../icons/pass'
import { ExternalLinkIcon } from '../../icons/external-link'
import { AddToCalendarIcon } from '../../icons/add-to-calendar'

import CSS from './upcoming-events.module.css'

export const UpcomingEvents = ({ children, landscape }) => {
    return (
        <section className={`${CSS.layout} ${landscape && CSS.landscape} block`}>
            <div className="container">
                <p className='ff-space fs-1 caps'>Upcoming FHS events</p>
            </div>

            <div className={`container ${landscape ? 'columns-1' : 'columns-3'} gap-md`}>
                { children }
            </div>
        </section>
    )
}



export const EventGroupCard = ({ children, theme, location, dates, venue }) => {

    let startDay = formatInTimeZone(new Date( dates.startDate ), 'Asia/Dubai', 'd')
    let endDay = formatInTimeZone(new Date( dates.endDate ), 'Asia/Dubai', 'd')
    let startMonth = formatInTimeZone(new Date( dates.startDate ), 'Asia/Dubai', 'MMMM')
    let endMonth = formatInTimeZone(new Date( dates.endDate ), 'Asia/Dubai', 'MMMM')
    let year = formatInTimeZone(new Date( dates.startDate ), 'Asia/Dubai', 'yyyy')

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

            className={`${CSS.groupCard}`} 
            style={{ borderColor: theme }}
        >

            <div className={CSS.groupCardDetails}>
                <div className='formatted'>
                    <p className='fs-2 fw-500'>{ location }</p>
                    {
                        startMonth === endMonth ?
                            <p className='fs-5 lh-2'>
                                <span className='fs-2'>{ startDay }-{ endDay }</span><br/> { startMonth } { year }
                            </p>
                        :
                            <p className='fs-5 lh-2'>
                                <span className='fs-2'>{ startDay }</span> { startMonth } - <span className='fs-2'>{ endDay }</span> { endMonth } { year }
                            </p>

                    }
                    <p className='fs-5'>{ venue }</p>
                </div>
                {/* <div className={CSS.calendar}><AddToCalendarButton /></div> */}
            </div>

            <div className={CSS.groupCardGrid}>
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
            
            className={`${CSS.eventCard} p-sm bg-accent`} 
            style={{ backgroundColor: theme }}
        >

            <div className={CSS.eventCardContent}>
                <p className='fs-4 lh-1 fw-600'>{ title }</p>
                <div>
                    <p className='mt-sm'><a className={`${CSS.purchasePassButton} uLink`} href={ passLink } target='_blank'><PassIcon />Purchase Pass</a></p>
                    <p className='mt-xs'><a className={CSS.websiteButton} href={ websiteLink } target='_blank'>Website <ExternalLinkIcon /></a></p>
                </div>
            </div>
            {
                logo &&
                <div className={CSS.eventCardLogo}>
                    <Image src={logo.url} layout={`fill`} alt=''/>
                </div> 
            }
            
        </motion.div>
    )
}



const AddToCalendarButton = () => {
    return (
        <button className={CSS.calendarButton} onClick={ () => console.log('add to calendar clicked') }><AddToCalendarIcon /></button>
    )
}