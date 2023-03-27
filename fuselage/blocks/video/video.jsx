import PropTypes from 'prop-types'

import ReactPlayer from "react-player/youtube"

import CSS from './video.module.css'

export const Video = ({ videoUrl, theme, maxWidth }) => {
    return (
        <section className={`block bg-${theme}`}>
            <div className={`container maxw-${maxWidth}`}>

                <div className={CSS.video}>
                    <ReactPlayer
                        url={videoUrl}
                        width='100%'
                        height='100%'
                        controls={true}
                        muted={false}
                        playing={false}
                    />
                </div>

            </div>
        </section>
    )
}

Video.propTypes = {
    theme: PropTypes.string,
    source: PropTypes.string.isRequired,
    maxWidth: PropTypes.string
}
Video.defaultProps = {
    theme: 'default',
    source: 'https://www.youtube.com/embed/GSycMV-_Csw',
    maxWidth: 50
}