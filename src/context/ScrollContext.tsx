'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

type ScrollContextType = {
    scrollToSection: (selector: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children } : { children: React.ReactNode }) {
    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    }, []);

    const scrollToSection = (selector: string) => {
        gsap.to(window, {
            duration: 2,
            scrollTo: {
                y: `section[aria-label="${selector}"]`,
                offsetY: 80,
            }, 
            ease: "power4.out"
        });
    }

    return (
        <ScrollContext.Provider value={{
            scrollToSection
        }}>
            {children}
        </ScrollContext.Provider>
    )
}

// ------------------------------- //
//  Export Custom Hook  //
// ------------------------------- //

export function useScroll() { 
    const context = useContext(ScrollContext);
    if (context === undefined) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
} 