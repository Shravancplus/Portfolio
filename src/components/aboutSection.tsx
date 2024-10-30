'use client'

import { SectionRef } from '@/libs/definition'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function AboutSection({ sectionRefs }: SectionRef) {
    const [activeAboutTab, setActiveAboutTab] = useState('Summary')

    return (
        <section
            ref={sectionRefs.current[1]}
            className="min-h-screen flex items-center py-20 bg-gray-800"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold mb-12 text-cyan-400">
                    About Me
                </h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
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
                                    src="/shravan.jpg"
                                    width={400}
                                    height={400}
                                    alt="Shravan"
                                    className="rounded-full  object-cover mx-auto"
                                />
                            </motion.div>
                        </motion.div>
                        <div className="mt-8 flex flex-col space-y-2">
                            {[
                                'Summary',
                                'Education',
                                'Experience',
                                'Interpersonal Skills',
                            ].map((tab) => (
                                <motion.button
                                    key={tab}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveAboutTab(tab)}
                                    className={`py-2 px-4 rounded-md transition-colors ${
                                        activeAboutTab === tab
                                            ? 'bg-cyan-500 text-gray-900'
                                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <AnimatePresence mode="wait">
                            {activeAboutTab === 'Summary' && (
                                <motion.div
                                    key="Summary"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                                        Summary
                                    </h3>
                                    <p className="text-xl mb-6 text-gray-300">
                                        Hello! I&apos;m Shravan R Hegde, a
                                        passionate full-stack developer with a
                                        BE in Computer Science from St. Joseph
                                        Engineering College. I have hands-on
                                        experience through a 6-month internship
                                        and my current role as a software
                                        engineer at CodeCraft Technologies. My
                                        technical expertise includes proficiency
                                        in Next.js, React, TypeScript, Java,
                                        Node.js, and SQL, along with a good
                                        understanding of various other
                                        programming languages.
                                    </p>
                                    <p className="text-xl text-gray-300">
                                        In addition to my full-stack work, I
                                        have a growing interest in AI/ML, having
                                        completed two internships in the field
                                        and working on projects involving large
                                        language models (LLMs). I am always
                                        eager to learn and explore emerging
                                        technologies.
                                    </p>
                                    <br></br>
                                    <p className="text-xl text-gray-300">
                                        Outside of work, I enjoy staying active
                                        through cricket and volleyball,
                                        balancing my passion for tech with my
                                        love for sports.
                                    </p>
                                </motion.div>
                            )}
                            {activeAboutTab === 'Education' && (
                                <motion.div
                                    key="Education"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                                        Education
                                    </h3>
                                    <ul className="space-y-4">
                                        <li>
                                            <h4 className="text-xl font-medium text-gray-200">
                                                Bachelor of Engineering in
                                                Computer Science
                                            </h4>
                                            <p className="text-gray-400">
                                                St.Joseph Engineering College,
                                                Mangalore
                                            </p>
                                            <p className="text-gray-400">
                                                2020-2024
                                            </p>
                                            <p className="text-gray-400">
                                                SGPA: 9
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="text-xl font-medium text-gray-200">
                                                PU ( 12th )
                                            </h4>
                                            <p className="text-gray-400">
                                                St.Aloysius PU College,
                                                Mangalore
                                            </p>
                                            <p className="text-gray-400">
                                                2018-2020
                                            </p>
                                            <p className="text-gray-400">
                                                96.5%
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className="text-xl font-medium text-gray-200">
                                                SSLC
                                            </h4>
                                            <p className="text-gray-400">
                                                BGS Education Centre, Mangalore
                                            </p>
                                            <p className="text-gray-400">
                                                2017-2018
                                            </p>
                                            <p className="text-gray-400">86%</p>
                                        </li>
                                    </ul>
                                </motion.div>
                            )}
                            {activeAboutTab === 'Experience' && (
                                <motion.div
                                    key="Experience"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                                        Experience
                                    </h3>
                                    <ul className="space-y-4">
                                        <li>
                                            <h4 className="text-xl font-medium text-gray-200">
                                                Full-Stack Developer Intern
                                            </h4>
                                            <p className="text-gray-400">
                                                CodeCraft Technologies Private
                                                Limiited, Feb 2024 - Sep 2024
                                            </p>
                                            <ul className="list-disc list-inside text-gray-300 mt-2">
                                                <li>
                                                    Acquired hands-on experience
                                                    in full-stack development,
                                                    focusing on TypeScript,
                                                    React.js, and Next.js, with
                                                    an emphasis on user
                                                    interface design and
                                                    server-side rendering.
                                                </li>
                                                <li>
                                                    Developed skills in unit
                                                    testing, functional
                                                    programming, asynchronous
                                                    programming, and API testing
                                                    with RESTful APIs.
                                                </li>
                                                <li>
                                                    Utilized Git for version
                                                    control and collaboration,
                                                    ensuring efficient teamwork
                                                    and project management.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h4 className="text-xl font-medium text-gray-200">
                                                Salesforce Developer Virtual
                                                Internship
                                            </h4>
                                            <p className="text-gray-400">
                                                Salesforce, Aug 2023 - Oct 2023
                                            </p>
                                            <ul className="list-disc list-inside text-gray-300 mt-2">
                                                <li>
                                                    Completed an 8-week
                                                    Salesforce Developer Virtual
                                                    Internship, focusing on key
                                                    Salesforce modules like
                                                    Organizational Setup,
                                                    Process Automation, and
                                                    Security.
                                                </li>
                                                <li>
                                                    Gained hands-on experience
                                                    with Apex for coding,
                                                    testing, and debugging,
                                                    along with Lightning Web
                                                    Components (LWC) and API
                                                    integration.
                                                </li>
                                                <li>
                                                    Earned three Super Badges:
                                                    Apex Specialist, Process
                                                    Automation Specialist, and
                                                    Developer Super Set,
                                                    demonstrating advanced
                                                    skills in Salesforce
                                                    development.ove client
                                                    website rankings
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </motion.div>
                            )}
                            {activeAboutTab === 'Interpersonal Skills' && (
                                <motion.div
                                    key="Interpersonal Skills"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                                        Interpersonal Skills
                                    </h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>
                                            • Strong communication and
                                            collaboration abilities
                                        </li>
                                        <li>
                                            • Excellent problem-solving and
                                            analytical thinking
                                        </li>
                                        <li>
                                            • Adaptability and quick learning in
                                            new technologies
                                        </li>
                                        <li>
                                            • Time management and ability to
                                            meet deadlines
                                        </li>
                                        <li>
                                            • Leadership and mentoring skills
                                        </li>
                                    </ul>
                                    <h3 className="text-2xl font-semibold mb-4 mt-4 text-cyan-300">
                                        Extra-Curricular
                                    </h3>
                                    <ul className="space-y-2 text-gray-300">
                                        <li>
                                            • Skilled sportsman with experience
                                            in open tournaments and league
                                            matches; captained the class cricket
                                            team to win the college
                                            championship.
                                        </li>
                                        <li>
                                            • Passionate event organizer, active
                                            in college club Cipher, where you
                                            helped organize events like branch
                                            entry and farewell, as well as
                                            community social and sports events.
                                        </li>
                                        <li>
                                            • Former Assistant School Pupil
                                            Leader (ASPL) and quiz enthusiast,
                                            with a history of winning awards in
                                            both school and college-level quiz
                                            competitions.
                                        </li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                {/* <motion.div
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
                        </motion.div>
                    </div>
                </motion.div> */}
            </div>
        </section>
    )
}
