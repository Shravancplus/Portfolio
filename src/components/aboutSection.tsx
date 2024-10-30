'use client'

import { SectionRef } from '@/libs/definition'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection({ sectionRefs }: SectionRef) {
    return (
        <section
            ref={sectionRefs.current[1]}
            className="min-h-screen flex items-center py-20 bg-gray-800"
        >
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center gap-8"
                >
                    <div className="md:w-1/2">
                        <h2 className="text-5xl font-bold mb-8 text-cyan-400">
                            About Me
                        </h2>
                        <p className="text-xl mb-6 text-gray-300">
                            Hello! I&apos;m Shravan R Hegde, a passionate
                            full-stack developer with a BE in Computer Science
                            from St. Joseph Engineering College. I have hands-on
                            experience through a 6-month internship and my
                            current role as a software engineer at CodeCraft
                            Technologies. My technical expertise includes
                            proficiency in Next.js, React, TypeScript, Java,
                            Node.js, and SQL, along with a good understanding of
                            various other programming languages.
                        </p>
                        <p className="text-xl text-gray-300">
                            In addition to my full-stack work, I have a growing
                            interest in AI/ML, having completed two internships
                            in the field and working on projects involving large
                            language models (LLMs). I am always eager to learn
                            and explore emerging technologies.
                        </p>
                        <br></br>
                        <p className="text-xl text-gray-300">
                            Outside of work, I enjoy staying active through
                            cricket and volleyball, balancing my passion for
                            tech with my love for sports.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <motion.div
                            className="relative w-64 h-64 mx-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            />
                            <motion.div className="absolute inset-2 bg-gray-800 rounded-full overflow-hidden">
                                <Image
                                    src="/profile.png"
                                    width={400}
                                    height={400}
                                    alt="Shravan"
                                    className="rounded-full  object-cover mx-auto"
                                />
                            </motion.div>
                            {/* <motion.div
                                className="absolute -inset-4 rounded-full opacity-30"
                                style={{
                                    background:
                                        'linear-gradient(45deg, #00FFFF, #FF00FF, #00FFFF)',
                                    backgroundSize: '200% 200%',
                                    filter: 'blur(20px)',
                                }}
                                animate={{
                                    backgroundPosition: ['0% 0%', '100% 100%'],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                }}
                            /> */}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
