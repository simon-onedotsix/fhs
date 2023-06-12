import CSS from './headline.module.css'

export const Headline = () => {
    return (
        <h1 style={{ lineHeight: 0.9}}>
            <span className={CSS.focusWrapper}>
                <span>Focus on</span>
            </span>
            <span className={CSS.topicWrapper}>
                <span className={CSS.topics}>
                    Innovation<br/>
                    Growth<br/>
                    Sustainability<br/>
                    Future<br/>
                    Investment
                </span>
            </span>
        </h1>
    )
}