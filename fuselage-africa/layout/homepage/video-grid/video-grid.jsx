import { VideoPlayer } from '../../../components/video-player/video-player'

import CSS from './video-grid.module.css'

export const VideoGrid = ({ children, videoUrl }) => {
    return (
        <section className={CSS.layout}>

            <section className={`${CSS.videoContainer} bg-dark`}>
                <div className="container">
                    <VideoPlayer videoUrl={videoUrl} />
                </div>
            </section>

            <section className="block bg-default">
                <div className="container">
                    { children }
                </div>
            </section>

        </section>
    )
}