import { motion } from "framer-motion"

import CSS from './ais-brand.module.css'


export const AisLockup = () => {
    return (
        <div className={CSS.lockupLayout}>

            <motion.section 
                className={CSS.lockupEn}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ type: "spring", bounce: 0.1, delay: .75 }}
            >
                <img src="/assets/img/ais/ais-en.svg" alt=""/>
            </motion.section>

            <section className={CSS.lockupIcon}>
                <CascadingIcon />
            </section>
            
            <motion.section 
                className={CSS.lockupAr}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ type: "spring", bounce: 0.1, delay: .75 }}
            >
                <img src="/assets/img/ais/ais-ar.svg" alt=""/>
            </motion.section>
        </div>
    )
}

export const AisMotifBackground = ({ children }) => {
    return (
        <div className={CSS.layout}>
            <div className={CSS.graphic}>
                <CascadingIcon color={`var(--accent)`} />
            </div>

            <div className={CSS.overlay}>
                { children }
            </div>
        </div>
    )
}

export const CascadingIcon = () => {
    return (
        <div className={CSS.icon}>

            <Slug x={9} y={19} h={9}/>
            <Slug x={9} y={31} h={13} />
            
            <Slug x={18.5} y={7} h={11} delay={.1}/>
            <Slug x={18.5} y={21} h={28} delay={.1}/>
            
            <Slug x={28} y={4} h={17}  delay={.2}/>
            <Slug x={28} y={24} h={23} delay={.2}/>
            
            <Slug x={37.5} y={3} h={30} delay={.3}/>
            <Slug x={37.5} y={36} h={22}  delay={.3}/>
            
            <Slug x={47} y={11} h={16} delay={.4}/>
            <Slug x={47} y={30} h={60} delay={.4}/>
            
            <Slug x={56.5} y={9} h={30} delay={.5}/>
            <Slug x={56.5} y={42} h={54} delay={.5}/>
            
            <Slug x={66} y={12} h={16} delay={.6}/>
            <Slug x={66} y={31} h={55} delay={.6}/>
            
            <Slug x={75.5} y={29} h={13} delay={.7}/>
            <Slug x={75.5} y={45} h={15} delay={.7}/>
            
            <Slug x={85} y={34} h={7} delay={.8}/>
            <Slug x={85} y={44} h={9} delay={.8}/>
        </div>
    )
}

const Slug = ({ x, y, h = 50, delay = 0 }) => {
    return (
        <motion.div
            style={{
                width: `6%`,
                height: `${h}%`,
                borderRadius: 500,
                backgroundColor: `white`,
                position: `absolute`,
                top: `${y}%`,
                left: `${x}%`,
            }}

            initial={{ opacity: 0, height: `${h * 1.5}%`, y: -40  }}
            whileInView={{ opacity: 1, height: `${h}%`, y: 0  }}
            viewport={{ once: false }}
            transition={{ type: "linear", bounce: 0.25, duration: .5, delay }}
        />
    )
}