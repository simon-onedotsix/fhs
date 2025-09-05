import { ContentCard } from "../../../../fuselage/components/content-card/content-card"
import { ArrowButton } from "../../../../fuselage/components/arrow-button/arrow-button"

import { Reveal } from "../../../animation/reveal"
import { Pop } from "../../../animation/animation"

import CSS from './featured-content.module.css'

export const FeaturedContent = ({ posts }) => {

    return (

                
            <div className={`${CSS.content} block bg-default`}>
                <div className='bl-1 bc-primary pl-md'>
                    <div className={`${CSS.headingGrid} container flex gap-sm ai-center`}>
                        <div className="fs-1 fw-700 lh-1 c-primary"><Reveal>Latest press releases</Reveal></div>
                        <div><Pop><ArrowButton href={`/content-library/category/press-room`} theme={{ arrow: `var(--primary)`, border: `var(--primary)`, label: `var(--primary)`}}>See all press releases</ArrowButton></Pop></div>
                    </div>

                    <div className="container columns-3 gap-md">
                        {
                            posts &&
                            posts.map( post => {
                                return (
                                    <Pop key={post.id}>
                                        <ContentCard
                                            key={post.id}
                                            url={`/content-library/${post.slug}`}
                                            heroUrl={post.contentLibraryHero && post.contentLibraryHero[0] ? post.contentLibraryHero[0].url : null}
                                            heading={post.title}
                                            type={``}
                                        />
                                    </Pop>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


    )
}
