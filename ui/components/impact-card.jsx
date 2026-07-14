import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'

import { AnimatedCounter } from '../../fuselage/animation/animated-counter'
import { Pop, Fade, Slide } from '../../fuselage/animation/animation'

import CSS from './impact-card.module.css'


export const ImpactCard = ({ prefix, figure, unit, label }) => {
    return (
        <Pop>
            <div className={CSS.layout}>
                <p className={CSS.figure}>{prefix}<AnimatedCounter from={0} to={figure} />{unit}</p>
                <p className={CSS.label}>{label}</p>
            </div>
        </Pop>
    )
}