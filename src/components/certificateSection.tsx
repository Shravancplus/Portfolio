'use client'

import { SectionRef } from '@/libs/definition'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function CertificateSection({ sectionRefs }: SectionRef) {
    const [showFullCertificate, setShowFullCertificate] = useState(false)
    const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0)

    const nextCertificate = () => {
        setCurrentCertificateIndex((prev) => (prev + 1) % certificates.length)
    }

    const prevCertificate = () => {
        setCurrentCertificateIndex(
            (prev) => (prev - 1 + certificates.length) % certificates.length
        )
    }
    const certificates = [
        {
            name: 'JavaScript Algorithms and Data Structures',
            issuer: 'FreeCodeCamp',
            link: '#',
            image: '/certificates/javascriptcodecamp.jpg',
        },
        {
            name: 'SalesForce Developer Virtual Internship',
            issuer: 'Salesforce',
            link: '#',
            image: '/certificates/salesforcepic.png',
        },
        {
            name: 'Artificial Intelligence and Machine Learning',
            issuer: 'YBI Foundation',
            link: '#',
            image: '/certificates/aimlcertificate.png',
        },
        {
            name: 'Get Started with Artificial Intelligence',
            issuer: 'MathWorks',
            link: '#',
            image: '/certificates/mathworks.png',
        },
        {
            name: '30 days of Postman - for developers',
            issuer: 'Postman',
            link: '#',
            image: '/certificates/postmanAPI.jpg',
        },
        {
            name: 'Responsive Web Design',
            issuer: 'FreeCodeCamp',
            link: '#',
            image: '/certificates/responsivewebdesign.png',
        },
        {
            name: 'Java (Basic)',
            issuer: 'HackerRank',
            link: '#',
            image: '/certificates/javabsaic.jpg',
        },
        {
            name: 'AI for everyone',
            issuer: 'Coursera',
            link: '#',
            image: '/certificates/aiforeveryone.png',
        },
    ]
    return (
        <>
            <section
                ref={sectionRefs.current[4]}
                className="min-h-screen flex items-center py-20 bg-gray-900"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold mb-12 text-cyan-400">
                        Certificates
                    </h2>
                    <div className="relative">
                        <div className="flex justify-center gap-8">
                            {[0, 1, 2].map((offset) => {
                                const index =
                                    (currentCertificateIndex + offset) %
                                    certificates.length
                                const certificate = certificates[index]
                                return (
                                    <motion.div
                                        key={certificate.name}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm hidden md:block "
                                    >
                                        <Image
                                            src={certificate.image}
                                            width={800}
                                            height={600}
                                            alt={certificate.name}
                                            objectFit="cover conatin"
                                            className="w-full h-60 rounded-md mb-4"
                                        />
                                        <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                                            {certificate.name}
                                        </h3>
                                        <p className="text-gray-400 mb-4">
                                            Issued by {certificate.issuer}
                                        </p>
                                        <button
                                            onClick={() => {
                                                setShowFullCertificate(true)
                                                setCurrentCertificateIndex(
                                                    index
                                                )
                                            }}
                                            className="text-cyan-400 hover:text-cyan-300 transition-colors mt-auto flex items-center"
                                        >
                                            View Certificate
                                            <ExternalLink className="w-4 h-4 ml-2" />
                                        </button>
                                    </motion.div>
                                )
                            })}
                            <motion.div
                                key={currentCertificateIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm md:hidden"
                            >
                                <div className="aspect-w-16 aspect-h-9 mb-4">
                                    <Image
                                        src={
                                            certificates[
                                                currentCertificateIndex
                                            ].image
                                        }
                                        alt={
                                            certificates[
                                                currentCertificateIndex
                                            ].name
                                        }
                                        width={800}
                                        height={600}
                                        objectFit="cover contain"
                                        className="rounded-md object-cover max-h-[200px]"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                                    {certificates[currentCertificateIndex].name}
                                </h3>
                                <p className="text-gray-400 mb-2">
                                    Issued by{' '}
                                    {
                                        certificates[currentCertificateIndex]
                                            .issuer
                                    }
                                </p>
                                <button
                                    onClick={() => setShowFullCertificate(true)}
                                    className="text-cyan-400 hover:text-cyan-300 transition-colors mt-auto flex items-center"
                                >
                                    View Certificate
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </button>
                            </motion.div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevCertificate}
                            className="absolute top-1/2 left-4  bg-gray-800 bg-opacity-50 p-2 rounded-full text-cyan-400 hover:bg-opacity-75 transition-all"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextCertificate}
                            className="absolute top-1/2 right-4  bg-gray-800 bg-opacity-50 p-2 rounded-full text-cyan-400 hover:bg-opacity-75 transition-all"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </motion.button>
                    </div>
                    <div className="flex justify-center mt-8 space-x-2">
                        {certificates.map((_, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                                onClick={() =>
                                    setCurrentCertificateIndex(index)
                                }
                                className={`w-3 h-3 rounded-full 
                                    ${
                                        // On mobile, highlight only the current dot
                                        index === currentCertificateIndex
                                            ? 'bg-cyan-400'
                                            : 'bg-gray-600'
                                    } 
                                    ${
                                        // On desktop, highlight the current and next two dots
                                        index === currentCertificateIndex ||
                                        index ===
                                            (currentCertificateIndex + 1) %
                                                certificates.length ||
                                        index ===
                                            (currentCertificateIndex + 2) %
                                                certificates.length
                                            ? 'md:bg-cyan-400'
                                            : 'md:bg-gray-600'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <AnimatePresence>
                {showFullCertificate && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                        onClick={() => setShowFullCertificate(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{
                                type: 'spring',
                                damping: 25,
                                stiffness: 300,
                            }}
                            className="bg-gray-800 p-6 rounded-lg shadow-2xl w-full max-w-2xl mx-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowFullCertificate(false)}
                                className="absolute top-2 right-2 bg-gray-700 text-gray-300 hover:text-white transition-colors p-2 rounded-full"
                                aria-label="Close"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                                {certificates[currentCertificateIndex].name}
                            </h3>
                            <div className="bg-gray-700 p-4 rounded-lg mb-4">
                                <Image
                                    src={
                                        certificates[currentCertificateIndex]
                                            .image
                                    }
                                    alt={
                                        certificates[currentCertificateIndex]
                                            .name
                                    }
                                    width={800}
                                    height={600}
                                    className="w-full h-auto max-h-[500px] object-contain rounded-lg"
                                />
                            </div>
                            <div className="text-gray-300">
                                <p className="mb-2">
                                    <span className="font-semibold">
                                        Issued by:
                                    </span>{' '}
                                    {
                                        certificates[currentCertificateIndex]
                                            .issuer
                                    }
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
