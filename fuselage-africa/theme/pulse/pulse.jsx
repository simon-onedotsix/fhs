import CSS from './pulse.module.css'

export const Pulse = () => {
    return (
        <div className={CSS.pulse}>
            <div className={CSS.pulseRingThin} />
            <div className={CSS.pulseRingThick} />
        </div>
    )
}