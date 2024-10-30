'use client'

import { SectionRef } from '@/libs/definition'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SkillsSection({ sectionRefs }: SectionRef) {
    const skills = [
        {
            name: 'JavaScript',
            icon: '/skills/javascript.png',
            animation: 'bounce',
        },
        { name: 'Nodejs', icon: '/skills/nodejs.png', animation: 'bounce' },
        { name: 'React', icon: '/skills/reactjs.png', animation: 'rotate' },
        { name: 'Html', icon: '/skills/html.png', animation: 'pulse' },
        { name: 'Python', icon: '/skills/pythons.png', animation: 'rotate' },
        { name: 'Java', icon: '/skills/java.png', animation: 'bounce' },
        { name: 'CSS', icon: '/skills/css.png', animation: 'shake' },
        { name: 'MySQL', icon: '/skills/mysql.png', animation: 'rotate' },
        {
            name: 'TypeScript',
            icon: '/skills/typescript.png',
            animation: 'shake',
        },
        { name: 'Git', icon: '/skills/git.png', animation: 'rotate' },
        { name: 'Nextjs', icon: '/skills/nextjs.png', animation: 'pulse' },
    ]

    const getAnimation = (type: string) => {
        switch (type) {
            case 'rotate':
                return { rotate: 360 }
            case 'pulse':
                return { scale: [1, 1.1, 1] }
            case 'bounce':
                return { y: [0, -10, 0] }
            case 'shake':
                return { x: [0, -5, 5, -5, 0] }
            default:
                return {}
        }
    }
    return (
        <section
            ref={sectionRefs.current[3]}
            className="min-h-screen flex items-center py-20 bg-gray-800"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold mb-12 text-cyan-400">
                    Skills
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <motion.div
                                className="relative w-20 h-20 mb-4"
                                animate={getAnimation(skill.animation)}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            >
                                <Image
                                    src={skill.icon}
                                    width={80}
                                    height={80}
                                    alt={skill.name}
                                    objectFit="contain"
                                    className="rounded-full mx-auto"
                                />
                            </motion.div>
                            <span className="text-lg font-medium text-cyan-300">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
