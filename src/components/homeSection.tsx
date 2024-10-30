'use client'

import { HomeSectionProps } from '@/libs/definition'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function HomeSection({
    sectionRefs,
    scrollToSection,
    backgroundY,
    textY,
}: HomeSectionProps) {
    return (
        <section
            ref={sectionRefs.current[0]}
            className="h-screen flex flex-col justify-center items-center relative overflow-hidden"
        >
            <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 to-cyan-900"
                style={{ y: backgroundY }}
            />
            <motion.div className="z-10 text-center px-4" style={{ y: textY }}>
                <h1 className="text-6xl font-bold mb-4 text-cyan-400">
                    Shravan R Hegde
                </h1>
                <p className="text-3xl mb-8 text-gray-300">
                    Full-Stack Developer
                </p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(1)}
                    className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-6 rounded-full transition-colors text-lg"
                >
                    Explore My Work
                </motion.button>
            </motion.div>
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <ChevronDown size={32} className="text-cyan-400" />
            </motion.div>
        </section>
    )
}
