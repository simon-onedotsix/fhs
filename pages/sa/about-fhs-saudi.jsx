import { useTranslations } from 'next-intl'

import { useState } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'

import { Header } from '../../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/sa/common/footer/footer'

import HubspotForm from '../../fuselage/components/hubspot-form/hubspot-form'

import { PageHeroImage } from '../../fuselage/blocks/page-hero-image/page-hero-image'
import { ImpactFigure } from '../../fuselage/theme/2025/world/blocks/impact-grid/impact-grid'
import { BarChart, Field } from '../../fuselage/theme/2025/sa/components/bar-chart/bar-chart'
import { GlobalMap } from '../../fuselage/theme/2025/sa/components/global-map/global-map'
import { Quote } from '../../fuselage/theme/2025/sa/components/quote/quote'


import CSS from '../../css/app/lead-wall.module.css'



export const INDUSTRY_DATA = [
    {
        label: 'Hotel/Resort Operator',
        value: 19.6
    },
    {
        label: 'Tourism / Government Official',
        value: 11.3
    },
    {
        label: 'Consultant / Advisor',
        value: 9.5
    },
    {
        label: 'Hotel Developer / Builder',
        value: 8.7
    },
    {
        label: 'Architect / Designer',
        value: 7.4
    },
    {
        label: 'Investor (Equity) / Owner',
        value: 6.2
    },
    {
        label: 'Media',
        value: 5.9
    },
    {
        label: 'Asset Managers',
        value: 5.6
    },
    {
        label: 'F&B Investor / Operator',
        value: 5.4
    },
    {
        label: 'Supplier',
        value: 4.6
    },
    {
        label: 'Real Estate Agent / Surveyor',
        value: 2.2
    },
    {
        label: 'Lawyer',
        value: 1.9
    },
    {
        label: 'Organiser',
        value: 1.2
    },
    {
        label: 'Bank / Lender',
        value: 0.9
    },
    {
        label: 'Student',
        value: 0.3
    },
    {
        label: 'Education',
        value: 0.1
    },
    {
        label: 'Education, Student',
        value: 0.1
    },
]
const INDUSTRY_DATA_AR = [
    {
        label: 'Hotel/Resort Operator',
        value: 19.6
    },
    {
        label: 'Tourism / Government Official',
        value: 11.3
    },
    {
        label: 'Consultant / Advisor',
        value: 9.5
    },
    {
        label: 'Hotel Developer / Builder',
        value: 8.7
    },
    {
        label: 'Architect / Designer',
        value: 7.4
    },
    {
        label: 'Investor (Equity) / Owner',
        value: 6.2
    },
    {
        label: 'Media',
        value: 5.9
    },
    {
        label: 'Asset Managers',
        value: 5.6
    },
    {
        label: 'F&B Investor / Operator',
        value: 5.4
    },
    {
        label: 'Supplier',
        value: 4.6
    },
    {
        label: 'Real Estate Agent / Surveyor',
        value: 2.2
    },
    {
        label: 'Lawyer',
        value: 1.9
    },
    {
        label: 'Organiser',
        value: 1.2
    },
    {
        label: 'Bank / Lender',
        value: 0.9
    },
    {
        label: 'Student',
        value: 0.3
    },
    {
        label: 'Education',
        value: 0.1
    },
    {
        label: 'Education, Student',
        value: 0.1
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
const LEVEL_DATA_AR = [
    {
        label: 'مدير / إدارة متوسطة',
        value: 23
    },
    {
        label: 'مدير',
        value: 18
    },
    {
        label: 'مجلس الإدارة / الملاك / الشركاء / المؤسسون',
        value: 14
    },
    {
        label: 'المناصب التنفيذية العليا',
        value: 26
    },
    {
        label: 'نائب الرئيس / الرؤساء / المستشارون',
        value: 17
    },
    {
        label: 'أخرى',
        value: 2
    },
]




export default function Page () {

    const { locale } = useRouter()

    const [ showPopover, setShowPopover ] = useState( false )


    return (
        <div dir={ locale === 'ar' ? 'rtl' : 'ltr' }>

            <Header compact />

            <div className="bg-primary">
                <PageHeroImage hero={{ url: '/assets/img/sa/about/hero-about.jpg', width: 2000, height: 1334 }} >
                    <div className="container maxw-50 pb-md formatted c-white center">
                         
                        <h1>{ locale === 'ar' ? "حول قمة مستقبل الضيافة بالمملكة العربية السعودية" : "About FHS Saudi Arabia" }</h1>

                        { 
                            locale  === 'ar' 
                            ? 
                                <>
                                    <p className='mt-sm'>Future Hospitality Summit Saudi Arabia is the Kingdom&apos;s most senior hospitality investment forum, bringing together government stakeholders, sovereign and institutional capital, leading developers, and global hotel and lifestyle operators. It is a deal-led platform focused on investment, partnerships, and delivery aligned directly with Vision 2030.</p>
                                    
                                    <p>An esteemed collection of highly respected, experienced and knowledgeable local and global hospitality and tourism leaders will take to the stage at FHS Saudi Arabia 2026, where more than 1,100 global hospitality investors, innovators and decision-makers will gather to shape the future of hospitality in the Kingdom.</p>
                                </>
                            :
                                <>
                                    <p className='mt-sm'>Future Hospitality Summit Saudi Arabia is the Kingdom&apos;s most senior hospitality investment forum, bringing together government stakeholders, sovereign and institutional capital, leading developers, and global hotel and lifestyle operators. It is a deal-led platform focused on investment, partnerships, and delivery aligned directly with Vision 2030.</p>
                                    
                                    <p>An esteemed collection of highly respected, experienced and knowledgeable local and global hospitality and tourism leaders will take to the stage at FHS Saudi Arabia 2026, where more than 1,100 global hospitality investors, innovators and decision-makers will gather to shape the future of hospitality in the Kingdom.</p>
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
                            <ImpactFigure figure={1106} impact={ locale === 'ar' ? "مشاركًا من جميع أنحاء العالم" : 'attendees from across the globe' }  />
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
                            locale === 'ar'
                            ?
                                INDUSTRY_DATA_AR.map(( field, index) => <Field key={index} label={field.label} value={field.value} unit={'%'} normalise={{ min: 0, max: 22 }} />)
                            :
                                INDUSTRY_DATA.map(( field, index) => <Field key={index} label={field.label} value={field.value} unit={'%'} normalise={{ min: 0, max: 22 }} />)
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
                            locale === 'ar'
                            ?
                                LEVEL_DATA_AR.map(( field, index) => <Field key={index} label={field.label} value={field.value} unit={'%'} normalise={{ min: 0, max: 42 }} />)
                            :
                                LEVEL_DATA.map(( field, index) => <Field key={index} label={field.label} value={field.value} unit={'%'} normalise={{ min: 0, max: 42 }} />)
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
                    <GlobalMap />
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


