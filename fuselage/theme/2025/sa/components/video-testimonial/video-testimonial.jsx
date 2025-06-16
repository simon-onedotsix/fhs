import { VideoPlayer } from "../../../../../components/video-player/video-player"
import { Pop, Fade } from "../../../../../animation/animation"

import CSS from './video-testimonial.module.css'

export const VideoTestimonial = ({ entry }) => {

    if ( !entry ) return

    return (
        <div className={CSS.layout}>
            <Pop>
                <div className={CSS.videoContainer}>
                    <VideoPlayer videoUrl={entry.videoShareUrl} controls />
                </div>

            </Pop>
            <Fade>
                <div className="formatted">
                    <p className="fs-4 lh-2">&ldquo;{ entry.testimonial }&rdquo;</p>
                    <p className="fw-600 lh-3">{ entry.fullName } <br/>
                    <span className="fw-300">{ entry.jobTitle }{ entry.organisation && ","} { entry.organisation }</span></p>
                </div>
            </Fade>
        </div>
    )
}