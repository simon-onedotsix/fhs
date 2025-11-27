import Head from "next/head"
import Image from "next/image"

import { Pop, Slide, Fade } from "../../fuselage/animation/animation"
import { Reveal } from "../../fuselage/animation/reveal"

import { Header } from '../../fuselage/theme/2025/africa/common/header/header'
import { Footer } from '../../fuselage/theme/2025/africa/common/footer/footer'

import { Button } from "../../fuselage/components/button/button"
import { StickySidebar } from "../../fuselage/layout/sticky-sidebar/sticky-sidebar"

import CSS from '../../fuselage/theme/2025/africa/css/pipelines-webinar.module.css'


export default function Page () {
    return (
        <>
            
            <Head>
                <link rel="icon" type="image/png" href="/assets/favicons/africa/favicon-16x16.png" sizes="16x16" />
            </Head>

            <Header compact />

            <section className="block pt-0 bg-secondary">
                
                <div className={CSS.graphic}>
                    <Image src={'/assets/img/homepage/brand-pattern-horizontal.jpg'} layout={'fill'} />
                </div>
            

                <StickySidebar>

                    <aside style={{ width: '100%', overflow: 'hidden' }}>
                        <Pop>
                            <h2 className="fs-2 c-primary">FHS Africa Webinar: </h2>
                        </Pop>

                        <Slide delay={.2}>
                            <h1 className="fs-1 lh-1">From Pipeline to Reality: Tracking Africa&apos;s Hotel Openings in 2024</h1>
                        </Slide>
                        <Slide delay={.3}>
                            <h3 className="fs-4 fw-600 pt-xs">7 March | 11:00 GMT </h3>
                        </Slide>

                        <div className="mt-md">
                            <Pop delay={.4} inline>
                                <Button inverse href={'https://app.swapcard.com/login/event/fhs-africa-webinar-pipelines-to-reality/registration?widget=true&ticket=VGlja2V0VHlwZV82MDMyNQ%3D%3D'} target={'_blank'} decal={'fs-5 fw-600'}>Register for free webinar</Button>
                            </Pop>
                        </div>
                    </aside>

                    <main className="columns-1 gap-md">
                        <p className="fs-5">Future Hospitality Summit Africa (FHS Africa) has partnered with W Hospitality Group to present a <strong>complimentary webinar on March 7th, 11:00 GMT</strong>, exploring the latest insights from the <strong>Pipeline Report</strong>—analyzing what hotel openings were projected for 2024 and what actually became a reality.</p>

                        <div>
                            <Reveal>
                                <p className="fs-3 fw-600 c-primary">Presented By</p>
                            </Reveal>

                            <Pop inline>
                                <div className={CSS.image}>
                                    <Image src="https://cms.thebench.com/assets/img/avatars/Trevor-Ward_Photo.png" layout='fill' alt="" />
                                </div>
                            </Pop>

                            <p className="fs-5 fw-600">Trevor Ward</p>
                            <p>Managing Director<br/><strong>W Hospitality Group</strong></p>
                        </div>

                        <div className="formatted">
                            <h3 style={{ color: "var(--primary)" }}><strong>Who Should Attend ?</strong></h3>
                            <p>This webinar is essential for hotel developers, investors, operators, and industry professionals keen on understanding <strong>Africa&apos;s evolving hospitality landscape</strong>. Whether you are tracking <strong>market growth</strong>, exploring <strong>pipeline development</strong>, or looking for <strong>data-driven investment opportunities</strong>, this session will provide key insights into the <strong>realities of hotel openings versus projections</strong>.</p>

                            <h3 style={{ color: "var(--primary)" }}><strong>What Will Be Discussed?</strong></h3>
                            <ul>
                                <li>
                                    <strong>Pipeline Realities:</strong> What was expected to open in 2024 vs. what actually launched.
                                </li>
                                <li>
                                    <strong>Development Timelines:</strong> Key challenges and success stories behind hotel project completions.
                                </li>
                                <li>
                                    <strong>Investment Momentum:</strong> The impact of Africa&apos;s hospitality growth on future developments.
                                </li>
                                <li>
                                    <strong>Market Trends:</strong> How regional and global factors are shaping hotel development strategies.
                                </li>
                                <li>
                                    <strong>Opportunities & Lessons Learned:</strong> Insights from W Hospitality Group&apos;s latest findings.
                                </li>
                            </ul>
                        </div>

                    </main>

                </StickySidebar>



            </section>
            
        
                
            <Footer/>
      </>
    );
}
Page.theme = 'africa'