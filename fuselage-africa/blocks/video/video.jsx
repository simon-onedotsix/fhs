import { VideoPlayer } from '../../components/video-player/video-player'

import { Fade } from '../../animation/animation'

import CSS from './video.module.css'

export const Video = ({ children, videoUrl, theme, bgUpper, bgLower }) => {
    return (
        <section className={`${CSS.layout} ${bgUpper}`}>

            <section className={`${CSS.videoContainer} bg-extra-dark`}>
                <Fade>
                    <div className="container">
                        <VideoPlayer videoUrl={videoUrl} />
                    </div>
                </Fade>
            </section>

            <section className={`${CSS.content} block ${theme ? theme : 'bg-default'}`}>
                <div className="container formatted">
                    { children }
                </div>
            </section>

            <div className={`${CSS.bgLower} ${bgLower}`}></div>

        </section>
    )
}