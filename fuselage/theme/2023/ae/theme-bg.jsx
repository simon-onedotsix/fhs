import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'

import CSS from './theme-bg.module.css'

export const ThemeBg = () => {

    let scroll  = useScroll()
    
    let largeLeft = useTransform( scroll.scrollYProgress, [0, 1], ["-15vh", "50vh"])
    let small = useTransform( scroll.scrollYProgress, [0, 1], ["80vh", "-20vh"])
    let largeRight = useTransform( scroll.scrollYProgress, [0, 1], ["30vh", "80vh"])
    let large = useTransform( scroll.scrollYProgress, [0, 1], ["150vh", "10vh"])


    return (

        <div className={`${CSS.wrapper} bg-theme`}>
            <motion.div style={{ y: largeLeft, position: `fixed`, zIndex: `0`, top: 0, width: `100%`, aspectRatio: `1680/538`}}>
                <Image src={`/assets/theme/ae-2023/kv-lg-l.png`} width={3360} height={1076} />
            </motion.div>
            
            <motion.div style={{ y: largeRight, position: `fixed`, zIndex: `0`, top: 0, width: `100%`, aspectRatio: `1680/640`}}>
                <Image src={`/assets/theme/ae-2023/kv-lg-r.png`} width={3360} height={1280} />
            </motion.div>
            
            <motion.div style={{ y: small, position: `fixed`, zIndex: `0`, top: 0, width: `100%`, aspectRatio: `1680/241`}}>
                <Image src={`/assets/theme/ae-2023/kv-sm.png`} width={3360} height={482} />
            </motion.div>
            
            <motion.div style={{ y: large, position: `fixed`, zIndex: `0`, top: 0, width: `100%`, aspectRatio: `1680/641`}}>
                <Image src={`/assets/theme/ae-2023/kv-lg.png`} width={3360} height={1282} />
            </motion.div>
        </div>

    )
}