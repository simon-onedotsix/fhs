import CSS from './angled-section.module.css'

export const AngledSection = ({ children, outerBgDecal, innerBg, topOnly }) => {
    return (
        <section className={`${ outerBgDecal ? outerBgDecal : 'bg-default'}`} 
            style={{ backgroundColor: `transparent` }}
        >
            <div className={`
                    ${CSS.layout} 
                    block 
                    ${topOnly && CSS.topOnly}
                `} 
                style={{ 
                    backgroundColor: innerBg ? innerBg : `white`
                }}
            >
                <div className={`${CSS.wrapper} ${topOnly && CSS.topOnly}`}>
                    { children }
                </div>
            </div>
        </section>
    )
}