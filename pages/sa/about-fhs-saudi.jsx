import { useTranslations } from 'next-intl'

import { useState } from 'react'

import useCustomMediaQuery from "../../hooks/useCustomMediaQuery"

import { useRouter } from 'next/router'
import Link from 'next/link'
import Script from "next/script"

import { EventsBar } from "../../ui/site/eventsbar"
import { Header } from '../../ui/site/header'
import { FHS_SA as header } from '../../fixtures/nav'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'

import HubspotForm from '../../fuselage/components/hubspot-form/hubspot-form'

import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'
import { ImpactFigure } from '../../fuselage/theme/2025/world/blocks/impact-grid/impact-grid'
import { BarChart, Field } from '../../ui/components/bar-chart'
import { GlobalMap, Region, Bubble } from '../../ui/components/global-map'
import { Quote } from '../../fuselage/theme/2025/sa/components/quote/quote'


import CSS from '../../css/app/lead-wall.module.css'



export const INDUSTRY_DATA = [
    {
        label: 'Hotel Operator / Management',
        value: 34
    },
    {
        label: 'Consultant / Advisor / Lawyer',
        value: 12
    },
    {
        label: 'Investors',
        value: 9
    },
    {
        label: 'Architecture & Design / Construction',
        value: 9
    },
    {
        label: 'Government / Tourism Official',
        value: 7
    },
    {
        label: 'Hotel Developer',
        value: 7
    },
    {
        label: 'Supplier (Technology / Wellness & Spa / FF&E)',
        value: 7
    },
    {
        label: 'Other',
        value: 5
    },
    {
        label: 'Asset Manager',
        value: 3
    },
    {
        label: 'Branded Residences',
        value: 2
    },
    {
        label: 'Education',
        value: 2
    },
    {
        label: 'Media & PR',
        value: 2
    },
    {
        label: 'Tourism (Leisure / Entertainment)',
        value: 2
    },
    
]

export const LEVEL_DATA = [
    {
        label: 'Director / VP / Head / Principal',
        value: 39
    },
    {
        label: 'Board Level / Owner / Partner / Chair / Founder',
        value: 22
    },
    {
        label: 'C-level',
        value: 21
    },
    {
        label: 'Manager',
        value: 19
    },
]
export const JOB_FUNCTION_DATA = [
    {
        label: 'Board Level / Owner / Partner / Chair / Founder',
        value: 18.4
    },
    {
        label: 'C-Level',
        value: 16.5
    },    
    {
        label: 'Director / VP / Head / Principal',
        value: 32.6
    },
    {
        label: 'Manager',
        value: 24.1
    },
    {
        label: 'Not Specified',
        value: 8.5
    },
]




export default function Page () {

    const { locale } = useRouter()

    const [ showPopover, setShowPopover ] = useState( false )

    const isDesktop = useCustomMediaQuery('(min-width: 600px)')

    return (
        <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            
            <Script src="https://bot.leadoo.com/bot/dynamic.js?company=IqbUBErW" strategy="afterInteractive" />

            <EventsBar site={'/sa'} />
            <Header
				site={`/sa`}
                handle={`Saudi Arabia`}
                event={header.data.event}
				mainMenu={header.data.mainMenu}
				ctas={header.data.event.headerCtas}
            />

            <div className="bg-primary">
                <PageHeroImage hero={{ url: '/assets/img/sa/about/hero-about.jpg', width: 2000, height: 1334 }} >
                    <div className="container maxw-50 pb-md formatted c-white center">
                         
                        <h1>{ locale === 'ar' ? "حول قمة مستقبل الضيافة بالمملكة العربية السعودية" : "About FHS Saudi Arabia" }</h1>

                        { 
                            locale  === 'ar' 
                            ? 
                                <>
                                    <p className='mt-sm'>Future Hospitality Summit Saudi Arabia is the Kingdom&apos;s leading hospitality investment forum, bringing together government stakeholders, sovereign and institutional capital, developers, investors, and global hotel and lifestyle operators. The summit is a deal-led platform focused on investment, partnerships, and delivery in support of Vision 2030.</p>
                                    
                                    <p>In 2026, FHS Saudi Arabia welcomed 1000+ attendees, 130+ speakers and 65+ partners. Investors made up 20% of the audience, representing approximately USD 4.8 trillion in assets under management, reinforcing the summit&apos;s role as a key meeting place for the people shaping the future of hospitality in the Kingdom.</p>
                                </>
                            :
                                <>
                                     <p className='mt-sm'>Future Hospitality Summit Saudi Arabia is the Kingdom&apos;s leading hospitality investment forum, bringing together government stakeholders, sovereign and institutional capital, developers, investors, and global hotel and lifestyle operators. The summit is a deal-led platform focused on investment, partnerships, and delivery in support of Vision 2030.</p>
                                    
                                    <p>In 2026, FHS Saudi Arabia welcomed 1000+ attendees, 130+ speakers and 65+ partners. Investors made up 20% of the audience, representing approximately USD 4.8 trillion in assets under management, reinforcing the summit&apos;s role as a key meeting place for the people shaping the future of hospitality in the Kingdom.</p>
                                </>
                        }


                        <p className='mt-sm'>
                            <a className="button fs-6" href="https://www.futurehospitality.com/about-fhs" target="_blank" rel="noreferrer noopener">
                            { locale === 'ar' ? "إرثنا" : "Our Legacy" }
                            </a>
                        </p>
                    </div>


                    <section className="block pt-0" style={{ position: 'relative', zIndex: 2 }}>
                        <div className="container formatted center">
                            <p className='fs-1 fw-600'>
                                { locale === 'ar' ? "عدد الحضور" : "Who Attends" }
                            </p>
                            <ImpactFigure figure={1000} unit={'+'} impact={ locale === 'ar' ? "مشاركًا من جميع أنحاء العالم" : 'attendees from across the globe' }  />
                            <p className='mt-sm'>
                                <button className='button fs-6' onClick={() => setShowPopover(true)}>
                                    { locale === 'ar' ? "حمل تقرير ما بعد الحدث لعام 2025" : "Download 2025 Post-event Report" }
                                </button>
                            </p>
                        </div>
                    </section>
                </PageHeroImage>
            </div>


            <section className="block bg-secondary">
                <div className="container center">
                    <p className='fs-1 fw-300 caps'>
                        { locale === 'ar' ? "حسب القطاع" : "By Industry" }
                    </p>
                </div>

                <div className="container maxw-50">
                    <BarChart>
                        {
                            INDUSTRY_DATA &&
                            INDUSTRY_DATA.map(( field, index) => <Field key={index} label={field.label} value={field.value} unit={'%'} normalise={{ min: 0, max: 34 }} />)
                        }
                    </BarChart>
                </div>
            </section>


            <section className="block bg-theme">
                <div className="container center">
                    <p className='fs-1 fw-300 caps'>
                        { locale === 'ar' ? "حسب الوظيفة" : "Job Seniority" }
                    </p>
                </div>

                <div className="container maxw-50">
                    <BarChart>
                        {
                            JOB_FUNCTION_DATA &&
                            JOB_FUNCTION_DATA.map(( field, index) => <Field key={index} label={field.label} value={field.value} unit={'%'} normalise={{ min: 0, max: 32.6 }} />)
                        }
                    </BarChart>
                </div>

                <div className="container pt-lg maxw-40">
                    <Quote 
                        locale={locale}
                        quote={
                            locale === 'ar'
                            ?
                                "تمكنت القمة من توفير فرص تواصل غير مسبوقة ورؤى عميقة من خلال الجلسات النقاشية، حيث تم تسليط الضوء على قطاع السياحة المزدهر في السعودية."
                            :
                                `The summit provided unparalleled networking opportunities and deep insights from panel discussions, shedding light on Saudi Arabia's vibrant tourism sector.`
                        } 
                        name={ locale === 'ar' ? `فالح م. حجاج` : 'Falih M. Hajaj'} 
                        title={ locale === 'ar' ? `الرئيس التنفيذي` : 'CEO'} 
                        company={ locale === 'ar' ? `تطوير للتشييد العمراني` : 'Tashyid Urban Development'} />
                </div>
            </section>


            <section className="block bg-secondary">
                <div className="container center">
                    <p className='fs-1 fw-300 caps'>
                        { locale === 'ar' ? `حسب الموقع الجغرافي` : `By Geography` }
                    </p>
                </div>

                <div className="container center">
                    <GlobalMap>
                        <Region label={'Middle East'} value={90} unit={'%'} position={{ x: '58%', y: '35%' }} delay={0.3}/>
                        <Region label={'Europe'} value={6} unit={'%'} position={{ x: '40%', y: '28%' }} delay={0.1}/>
                        <Region label={'Asia'} value={1} unit={'%'} position={{ x: '80%', y: '50%' }} delay={0.5}/>
                        <Region label={'Americas'} value={2} unit={'%'} position={{ x: '20%', y: '50%' }} delay={0.2}/>
                        <Region label={'Africa'} value={1} unit={'%'} position={{ x: '45%', y: '60%' }} delay={0.4} />
                        <Bubble size={ isDesktop ? `9rem`: `2.75rem`} position={{ x: '65%', y: '15%' }}>
                            67% from Saudi Arabia
                        </Bubble>
                    </GlobalMap>
                </div>
            </section>


            
            <div className={`${CSS.overlay} ${ showPopover && CSS.active }`}>

                <section className={CSS.container}>
                    <button className={CSS.closeButton} onClick={() => setShowPopover(false)}>&times;</button>
                    <div className={CSS.contentScroller}>
                        <div className={CSS.content} dir='ltr'>
                            <p className='fw-500 c-primary'>Please fill out the form to download the FHS Saudi Arabia 2025 post-event report.</p>
                            <section className='mt-md'>
                                <HubspotForm portalId='14527187' formId='5e8f3e03-d407-469a-9ff6-4b4dbf1065f1' />
                            </section>
                        </div>
                    </div>
                </section>

            </div>
            

            <Footer />
            {/* <LenisScroller /> */}
        </div>
    )

}

Page.theme = 'sa-2025'


