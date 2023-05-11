import ReactPlayer from "react-player/youtube"

import CSS from './video-player.module.css'

export const VideoPlayer = ({ videoUrl, controls, muted, autoplay }) => {

    return (
        <>
            <div className={CSS.container}>
                <ReactPlayer
                    url={videoUrl}
                    width='100%'
                    height='100%'
                    controls={controls}
                    muted={muted}
                    playing={autoplay}
                />
            </div>
        </>
    )
}