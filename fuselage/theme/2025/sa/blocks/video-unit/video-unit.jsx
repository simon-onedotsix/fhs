import ReactPlayer from "react-player/youtube"

import CSS from './video-unit.module.css'

export const VideoUnit = ({ children }) => {
    return (
        <section className={CSS.layout}>
            <div className={CSS.video}>
                <ReactPlayer
                    url={"https://www.youtube.com/watch?v=aei8otOKt_0"}
                    width='100%'
                    height='100%'
                    controls={true}
                    muted={false}
                    playing={false}
                />
            </div>


            <div className={CSS.content}>
                { children }
            </div>
        </section>
    )
}