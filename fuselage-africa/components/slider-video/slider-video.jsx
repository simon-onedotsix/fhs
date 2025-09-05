import { Slider } from "../../components/slider/slider"
import { VideoPlayer } from "../../components/video-player/video-player"

export const SliderVideo = ({ heading, slides, videoUrl }) => {

    return (
        <div>
            <section className="block columns-2 gap-sm">

                <div className="">
                    <p className="fs-1 fw-600 c-secondary mb-sm">{ heading }</p>
                    <Slider data={slides} />
                </div>

                <div className="">
                    <VideoPlayer videoUrl={ videoUrl } controls />
                </div>

            </section>
        </div>
    )
}