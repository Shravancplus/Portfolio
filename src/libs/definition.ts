import { MotionValue } from "framer-motion";
import { Dispatch, MutableRefObject, RefObject, SetStateAction } from "react";

export type NavElements = "home" | "about" | "projects" | "skills" | "certificates" | "contact"

export interface TopBarProps {
    sections: NavElements[];
    activeSection: NavElements;
    scrollToSection: (index: number) => void;
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

export interface HomeSectionProps {
    sectionRefs: MutableRefObject<RefObject<HTMLElement>[]>;
    backgroundY: MotionValue<string>;
    textY: MotionValue<string>;
    scrollToSection: (index: number) => void
}

export interface SectionRef {
    sectionRefs: MutableRefObject<RefObject<HTMLElement>[]>;
}

export interface ToastProps {
    message: string
    isVisible: boolean
    onClose: () => void
}
