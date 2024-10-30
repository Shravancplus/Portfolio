'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { SectionRef } from '@/libs/definition'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Link from 'next/link'

export default function ProjectSection({ sectionRefs }: SectionRef) {
    const projects = [
        {
            id: 1,
            title: 'Library Management System',
            description:
                'A comprehensive Library Management System with admin and user roles, book borrowing requests, and integrations with Calendly, Razorpay, and Cloudinary.',
            expandedDescription:
                'The Library Management System offers admin and user authentication, with integrations like Calendly for scheduling, Razorpay for payments, and Cloudinary for photo uploads. Users can browse, request, and track books, manage profiles, and log in via Google. Admins handle catalog and requests, with internationalization support for global access.',
            image: '/projects/nextjs-library.png',
            ref: 'https://nextjs-library-management-system.vercel.app/',
            techStack: [
                'Next.js',
                'React',
                'Node.js',
                'PostgreSql',
                'Tailwind CSS',
            ],
        },
        {
            id: 2,
            title: 'CrickInfo',
            description:
                'A Cricket Statistics Database with admin and user roles, player and team stats, and foreign key-linked records.',
            expandedDescription:
                'The Cricket Statistics Database Management System offers a structured platform for viewing player and team stats, covering both national and franchise teams. Users can explore stats for players, batsmen, bowlers, and coaches, while admins manage player data, teams, and coaches. Foreign keys interlink data for efficient management and streamlined queries.',
            image: '/projects/sachin.png',
            ref: 'https://github.com/Shravancplus/CricInfo',
            techStack: [
                'JavaScript',
                'HTML',
                'CSS',
                'PHP',
                'MySQL',
                'Bootstrap',
            ],
        },
        {
            id: 3,
            title: 'Bill Splitter',
            description:
                'A Bill Splitter app that calculates tip and splits bills per person, with custom tip options and reset functionality.s',
            expandedDescription:
                'The Bill Splitter app offers a simple way to calculate and split bills among multiple people. Users can enter the bill amount, choose or set a custom tip percentage, and specify the number of people. The app displays real-time calculations for tip and total per person, with a reset option for easy recalculations. Ideal for group dining!',
            image: '/projects/finalfigma.png',
            ref: 'https://github.com/Shravancplus/Bill_Splitter',
            techStack: ['React', 'Tailwind CSS', 'Vite', 'StoryBook'],
        },
        {
            id: 4,
            title: 'Advanced Dice Games',
            description:
                'An interactive dice game where players roll and score based on combinations like three-of-a-kind and full house.',
            expandedDescription:
                'The Advanced Dice Game challenges players to roll dice and achieve various scoring combinations, such as three-of-a-kind, full house, and straights. Players can roll the dice multiple times per round to improve their score, and selected scores are recorded in the score history. A "Show Rules" option provides game guidelines, making it easy for players to understand scoring possibilities and aim for the highest total score.',
            image: '/projects/dicegame.jpg',
            ref: 'https://shravancplus.github.io/Dice_Game/',
            techStack: ['HTML', 'CSS', 'JavaScript'],
        },
        {
            id: 5,
            title: 'College Club Management System',
            description:
                'An Android app for managing college clubs, allowing users to view and join clubs with SMS confirmation.Android App where the user can see the clubs of the college and register themselves for a particular club',
            expandedDescription:
                'The College Club Management System is an Android app for streamlined college club coordination. Users can browse clubs, view details, and register by submitting information. Upon registration, users receive an SMS confirmation, ensuring smooth communication. This app simplifies club membership management, helping students easily discover and join college activities.',
            image: '/projects/android.png',
            ref: 'https://github.com/Shravancplus/College-Club-Management---',
            techStack: [
                'Java',
                'XML',
                'Android Studio',
                'Gradle',
                'Android SDK',
            ],
        },
    ]
    const [currentProject, setCurrentProject] = useState(0)
    const [showDetails, setShowDetails] = useState(false)

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length)
    }

    const prevProject = () => {
        setCurrentProject(
            (prev) => (prev - 1 + projects.length) % projects.length
        )
    }

    return (
        <section
            ref={sectionRefs.current[2]}
            className="min-h-screen flex items-center py-20 bg-gray-900"
        >
            <div className="container mx-auto px-4 ">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12 text-cyan-400">
                    Projects
                </h2>
                <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentProject}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="w-full h-full"
                            >
                                <Image
                                    src={projects[currentProject].image}
                                    layout="fill"
                                    objectFit="cover contain"
                                    alt={projects[currentProject].title}
                                    className="rounded-lg"
                                />
                            </motion.div>

                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent">
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                                    <motion.h3
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-2xl md:text-3xl font-semibold mb-2 md:mb-4 text-cyan-300"
                                    >
                                        {projects[currentProject].title}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-sm md:text-base text-gray-300 mb-4"
                                    >
                                        {projects[currentProject].description}
                                    </motion.p>
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className=" space-x-4  w-full"
                                    >
                                        <button
                                            onClick={() => setShowDetails(true)}
                                            className="bg-cyan-500 text-white px-4  py-2 rounded hover:bg-cyan-600 transition-colors"
                                        >
                                            View Details
                                        </button>
                                        <Link
                                            href={projects[currentProject].ref}
                                        >
                                            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors ">
                                                View Project
                                            </button>
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevProject}
                        className="absolute top-1/2 left-2 md:left-4  bg-gray-800 bg-opacity-50 p-1 md:p-2 rounded-full text-cyan-400 hover:bg-opacity-75 transition-all"
                    >
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextProject}
                        className="absolute top-1/2 right-2 md:right-4  bg-gray-800 bg-opacity-50 p-1 md:p-2 rounded-full text-cyan-400 hover:bg-opacity-75 transition-all"
                    >
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                    </motion.button>
                </div>
                <div className="flex justify-center mt-4 md:mt-8 space-x-2">
                    {projects.map((_, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setCurrentProject(index)}
                            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                                currentProject === index
                                    ? 'bg-cyan-400'
                                    : 'bg-gray-600'
                            }`}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {showDetails && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                        onClick={() => setShowDetails(false)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            className="bg-gray-800 p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-cyan-400">
                                    {projects[currentProject].title}
                                </h3>
                                <button
                                    onClick={() => setShowDetails(false)}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <p className="text-gray-300 mb-4">
                                {projects[currentProject].expandedDescription}
                            </p>
                            <div className="mb-4">
                                <h4 className="text-lg font-semibold text-cyan-300 mb-2">
                                    Tech Stack:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {projects[currentProject].techStack.map(
                                        (tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                            <Link href={projects[currentProject].ref}>
                                <span className="inline-block bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors">
                                    View Live Project
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
