import ReactPlayer from "react-player/youtube"

import CSS from './video-player.module.css'

export const VideoPlayer = ({ videoUrl, controls, muted, autoplay }) => {


    if ( !videoUrl ) return
    
    // sanitise (strip playlists etc)
    let params = videoUrl.indexOf('&')
    if ( params > 0 ) {
        videoUrl = videoUrl.substring(0, videoUrl.indexOf('&'))
    }
 

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