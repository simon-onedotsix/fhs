import { motion } from "framer-motion"

export const Pop = ({ children, delay, once }) => {
    return (
        <motion.div 
            initial={{ scale: .25, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once }}
            transition={{ type: "spring", bounce: 0.25, delay }}
        >
            { children }
        </motion.div>
    )
}

export const Slide = ({ children, delay, once, amount = 50 }) => {
    return (
        <motion.div 
            initial={{ x: amount, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once }}
            transition={{ type: "spring", bounce: 0.25, delay }}
        >
            { children }
        </motion.div>
    )
}

export const Fade = ({ children, delay, once, amount = 50 }) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once }}
            transition={{ type: "spring", bounce: 0.25, delay }}
        >
            { children }
        </motion.div>
    )
}