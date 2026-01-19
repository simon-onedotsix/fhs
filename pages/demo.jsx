import { useRouter } from 'next/router'
import Image from 'next/image'

import { LenisScroller } from '../fuselage/animation/lenis-scroller'


import { Pop, Slide, Fade } from "../fuselage/theme/2023/ae/layout/animation/animation"

import { Header } from '../fuselage/theme/2025/sa/common/header/header'
import { Footer } from '../fuselage/theme/2025/sa/common/footer/footer'


export default function Page ({ partners }) {

    const { locale } = useRouter()

    return (
        <div dir={ locale === 'ar' ? 'rtl' : 'ltr' }>
            <Header compact />



            {/* join the conversation */}
            <section className="block bg-primary">
                <div className="container center">
                    <Pop inline>
                        <p className="fs-1 fw-600 lh-1 caps ">Additional Marketing Opportunities</p>
                    </Pop>    
                </div>

                <div className="container columns-3 gap-sm">
                    <Card heading={'Online Podcast'} image={{ url: `https://cms.thebench.com/assets/img/site/FHS/podcast.png`, width: 1081, height: 665 }} >
                        <p>10 to 30 mins one-on-one conversation with a senior Bench representative on agreed topic to capture your unique insights, positioning and value proposition.</p>
                        <p><a className="button" href="https://www.futurehospitality.com/sa/content-library/category/podcast" target="_blank" rel="noreferrer">Online Podcasts</a> <a className="button" href="https://www.youtube.com/watch?v=i3LFNwS1UHY" target="_blank" rel="noreferrer">In-Person Podcast</a></p>
                    </Card>

                    <Card heading={"Thought Leadership Insights"} image={{ url: `https://cms.thebench.com/assets/img/site/FHS/leadership.jpg`, width: 1136, height: 1600 }}>
                        <p>Short digital or written insights from your company&apos;s thought leader that will be published on our social media channels.</p>
                        <p><a className="button" href="https://www.linkedin.com/posts/future-hospitality-summit_hassan-ahdab-at-fhs-world-2024-activity-7244966922419621889-_dLr" target="_blank" rel="noreferrer">Written Insights</a> <a className="button" href="https://www.linkedin.com/posts/future-hospitality-summit_alain-debare-hvs-at-fhs-world-2024-activity-7242784372414660608-tBhQ" target="_blank" rel="noreferrer">Video Insights</a></p>
                    </Card>
                    
                    <Card heading={"Speaker Profiling"} image={{ url: `https://cms.thebench.com/assets/img/site/FHS/speaker.jpg`, width: 1026, height: 1600 }}>
                        <p>Dedicated social media post highlighting your company&apos;s speaker featured on the FHS agenda, showcasing their expertise and promoting their session.</p>
                        <p><a className="button" href="https://www.linkedin.com/posts/future-hospitality-summit_futurehospitalitysummit-fhssaudiarabia2025-activity-7291055731863150592-_KNY" target="_blank" rel="noreferrer">Speaker Post</a></p>
                    </Card>
                   
                    <Card heading={"On-site Video Interview"} image={{ url: `https://cms.thebench.com/assets/img/site/FHS/video.jpg`, width: 1136, height: 1600 }}>
                        <p>Conducting video interview of your company&apos;s speaker/representative during the event - to be published on social media as part of our post-event engagement campaign. Questions to be agreed in advance.</p>
                        <p><a className="button" href="https://www.linkedin.com/posts/future-hospitality-summit_fhssaudiarabia-sustainability-futurehospitalitysummit-activity-7269326724855648256-jql6" target="_blank" rel="noreferrer">Video Interview</a></p>
                    </Card>
                   
                    <Card heading={"Stage Session Snippet"} image={{ url: `https://cms.thebench.com/assets/img/site/FHS/stage-session.jpg`, width: 1106, height: 1600 }}>
                        <p>Our team will create a 1-3 min long snippet from the recording your speaker&apos;s stage session - to be published on social media as part of our post-event engagement campaign.</p>
                        <p><a className="button" href="https://www.linkedin.com/posts/future-hospitality-summit_fhs-fhsworld-fhsksa-activity-7354476768445005824-IQTr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAdHjcABZqxLaljL7CJSipwvc6T27bqSEAw" target="_blank" rel="noreferrer">Session Snippet</a></p>
                    </Card>
                   
                </div>
            </section>




            <Footer />
            <LenisScroller />
        </div>
    )
}

Page.theme = 'sa-2025'



const Card = ({ image, heading, children }) => {
    return (
        
        <div className='bg-primary'
            style={{
                backgroundColor: `hsl(from var(--primary) h s calc(l - 5) / 1)`,
                padding: `var(--space-sm)`,
                borderRadius: `1rem`,

                display: `flex`,
                flexDirection: `column`,
                gap: `var(--space-xs)`
            }}
        >
            <Fade><p><strong><span className="fs-3">{ heading }</span></strong></p></Fade>
            <Pop><Image src={image.url} width={image.width} height={image.height} style={{ borderRadius: `.5rem`}}/></Pop>
            <Fade>
                <div className='formatted'>
                    { children }
                </div>
            </Fade>
        </div>
    )
}