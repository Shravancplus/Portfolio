import { AnimatePresence, motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { TopBarProps } from '@/libs/definition'

export default function TopBar({
    sections,
    activeSection,
    scrollToSection,
    isMenuOpen,
    setIsMenuOpen,
}: TopBarProps) {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 bg-gray-800 shadow-md">
                <div className="container mx-auto px-4 py-6">
                    <nav className="flex justify-between items-center">
                        {/* Motion H1 to animate only opacity without horizontal shift */}
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl font-bold text-customCyan"
                        >
                            Shravan
                        </motion.h1>

                        {/* Desktop Navigation Buttons */}
                        <div className="hidden md:flex space-x-8">
                            {sections.map((section, index) => (
                                <motion.button
                                    key={section}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection(index)}
                                    className={`capitalize text-lg font-medium transition-colors ${
                                        activeSection === section
                                            ? 'text-customCyan'
                                            : 'text-gray-300 hover:text-cyan-200'
                                    }`}
                                >
                                    {section}
                                </motion.button>
                            ))}
                        </div>

                        {/* Mobile Menu Icon */}
                        <button
                            className="md:hidden text-cyan-400 "
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Menu />
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-16 left-0 right-0 bg-gray-800 shadow-md z-40 md:hidden"
                    >
                        {sections.map((section, index) => (
                            <motion.button
                                key={section}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    scrollToSection(index)
                                    setIsMenuOpen(false)
                                }}
                                className={`block w-full py-3 px-4 text-left capitalize ${
                                    activeSection === section
                                        ? 'text-cyan-400'
                                        : 'text-gray-300'
                                }`}
                            >
                                {section}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
