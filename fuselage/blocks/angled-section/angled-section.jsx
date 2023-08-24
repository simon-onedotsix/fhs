import CSS from './angled-section.module.css'

export const AngledSection = ({ children, outerBgDecal, innerBg }) => {
    return (
        <section className={`${ outerBgDecal ? outerBgDecal : 'bg-default'}`} style={{ backgroundColor: `transparent` }}>
            <div className={`${CSS.layout} block`} style={{ backgroundColor: innerBg ? innerBg : `white`}}>
                <div className={CSS.wrapper}>
                    { children }
                </div>
            </div>
        </section>
    )
}