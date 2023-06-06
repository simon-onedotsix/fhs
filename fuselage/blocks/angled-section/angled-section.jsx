import CSS from './angled-section.module.css'

export const AngledSection = ({ children, outerBgDecal, transition, innerBg }) => {
    return (
        <section className={`${ outerBgDecal ? outerBgDecal : 'bg-default'}`} style={{ backgroundColor: `transparent` }}>
            <div className={`${CSS.layout} block`} style={{ backgroundColor: innerBg ? innerBg : `red`}}>
                <div className={CSS.wrapper}>
                    { children }
                </div>
            </div>
        </section>
    )
}