import CSS from './speaker-grid.module.css'

export const SpeakerGrid = ({ children, decal }) => {
    return <div className={`${CSS.layout} ${decal}`}>{ children }</div>
}