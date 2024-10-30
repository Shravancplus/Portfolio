'use client'

import { SectionRef, ToastProps } from '@/libs/definition'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, Linkedin, Mail, X } from 'lucide-react'
import { useState } from 'react'

const Toast = ({ message, isVisible, onClose }: ToastProps) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50"
                >
                    <span>{message}</span>
                    <button
                        onClick={onClose}
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        <X size={18} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default function ContactSection({ sectionRefs }: SectionRef) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [showToast, setShowToast] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setShowToast(true)
        setFormData({
            name: '',
            email: '',
            message: '',
        })
        // Auto hide toast after 3 seconds
        setTimeout(() => {
            setShowToast(false)
        }, 3000)
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    return (
        <>
            <section
                ref={sectionRefs.current[5]}
                className="min-h-screen flex items-center py-20 bg-gray-800"
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gray-900 p-8 rounded-2xl shadow-2xl"
                    >
                        <h2 className="text-5xl font-bold mb-8 text-cyan-400 text-center">
                            Get in Touch
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-xl mb-6 text-gray-300">
                                    I&apos;m always open to new opportunities
                                    and collaborations. Feel free to reach out
                                    to me through any of the following channels:
                                </p>
                                <div className="space-y-4">
                                    <div className="flex">
                                        <motion.a
                                            href="mailto:shravanhegde125@gmail.com"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-flex items-center text-cyan-300 hover:text-cyan-200 transition-colors"
                                        >
                                            <Mail className="mr-2" />
                                            shravanhegde125@gmail.com
                                        </motion.a>
                                    </div>
                                    <div className="flex">
                                        <motion.a
                                            href="https://github.com/Shravancplus"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-flex items-center text-cyan-300 hover:text-cyan-200 transition-colors"
                                        >
                                            <Github className="mr-2" />
                                            github.com/Shravancplus
                                        </motion.a>
                                    </div>
                                    <div className="flex">
                                        <motion.a
                                            href="https://www.linkedin.com/in/shravan-hegde-b34386267"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-flex items-center text-cyan-300 hover:text-cyan-200 transition-colors"
                                        >
                                            <Linkedin className="mr-2" />
                                            linkedin.com/in/shravanhegde
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                    required
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                    required
                                ></textarea>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-2 px-4 rounded transition-colors"
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Toast
                message="Message sent successfully!"
                isVisible={showToast}
                onClose={() => setShowToast(false)}
            />
        </>
    )
}
