export const TickIcon = ({ stroke }) => {
    return (
        <svg width="18" height="100%" viewBox="0 0 22 17" style={{ fillRule:`evenodd`, clipRule:`evenodd`, strokeLinejoin:`round`, strokeMiterlimit:1.5 }}>
            <path id="icon-tick" d="M1.171,8.139L7.691,14.659L20.691,1.659" style={{ fill:`none`, stroke:`${ stroke ? stroke : 'white'}`, strokeWidth:3 }}/>
        </svg>
    )
}

