/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { NavElements } from '@/libs/definition'
import TopBar from './topBar'
import HomeSection from './homeSection'
import AboutSection from './aboutSection'
import SkillsSection from './skillsSection'
import ProjectSection from './projectsection'
import CertificateSection from './certificateSection'
import ContactSection from './contactSection'

export default function MyPortfolio() {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end start'],
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])

    const sections: NavElements[] = [
        'home',
        'about',
        'projects',
        'skills',
        'certificates',
        'contact',
    ]
    const sectionRefs = useRef<React.RefObject<HTMLElement>[]>(
        sections.map(() => useRef(null))
    )
    const [activeSection, setActiveSection] = useState<NavElements>('home')

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const scrollToSection = (index: number) => {
        sectionRefs.current[index].current?.scrollIntoView({
            behavior: 'smooth',
        })
        setIsMenuOpen(false)
    }
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2 // Midpoint detection

            sectionRefs.current.forEach((ref, index) => {
                const element = ref.current
                if (element) {
                    const { offsetTop, offsetHeight } = element

                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(sections[index])
                    }
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [sections])
    return (
        <div
            ref={targetRef}
            className="min-h-screen bg-gray-900 text-customLightText"
        >
            <TopBar
                sections={sections}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
            <main>
                <HomeSection
                    sectionRefs={sectionRefs}
                    backgroundY={backgroundY}
                    textY={textY}
                    scrollToSection={scrollToSection}
                />
                <AboutSection sectionRefs={sectionRefs} />
                <ProjectSection sectionRefs={sectionRefs} />
                <SkillsSection sectionRefs={sectionRefs} />
                <CertificateSection sectionRefs={sectionRefs} />
                <ContactSection sectionRefs={sectionRefs} />
            </main>
            <footer className="bg-gray-900 py-8">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p>&copy; 2023 Shravan R Hegde. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
