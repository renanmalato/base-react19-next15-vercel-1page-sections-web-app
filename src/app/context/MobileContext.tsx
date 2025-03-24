'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';


// ------------------------------- //
//  Definitions and Types          //
// ------------------------------- //

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1250,
  desktop: 1251
} as const;

type DeviceType = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isPortrait: boolean;
  isRetina: boolean;
};

const MobileContext = createContext<DeviceType>({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  isPortrait: false,
  isRetina: false
});

// ------------------------------- //
//                                 //
//         Provider                //
//                                 //
// ------------------------------- //

export function MobileProvider({ children }: { children: ReactNode }) {


  const isMobile = useMediaQuery({ maxWidth: BREAKPOINTS.mobile });
  const isTablet = useMediaQuery({ minWidth: BREAKPOINTS.mobile + 1, maxWidth: BREAKPOINTS.tablet });
  const isDesktop = useMediaQuery({ minWidth: BREAKPOINTS.desktop });
  const isPortrait = useMediaQuery({ orientation: 'portrait' });
  const isRetina = useMediaQuery({ minResolution: '2dppx' });

  // ------------------------------- //
  //  Debugging Sizes               //
  // ------------------------------- //
  
  if (typeof window !== 'undefined') {
    console.log({isMobile, isTablet, isDesktop, isPortrait, isRetina, windowWidth: window.innerWidth});
  }

  return (
    <MobileContext.Provider 
      value={{ isMobile, isTablet, isDesktop, isPortrait, isRetina }}
    >
      {children}
    </MobileContext.Provider>
  );
}

// ------------------------------- //
//                                 //
//         Custom Hooks            //
//                                 //
// ------------------------------- //

export function useMobileContext() {
  const context = useContext(MobileContext);
  if (context === undefined) {
    throw new Error('useMobileContext must be used within a MobileProvider');
  }
  return context;
}

// Utility hooks for specific queries
export function useIsMobile() {
  const { isMobile } = useMobileContext();
  return isMobile;
}

export function useIsTablet() {
  const { isTablet } = useMobileContext();
  return isTablet;
}

export function useIsDesktop() {
  const { isDesktop } = useMobileContext();
  return isDesktop;
}

// Example usage of breakpoints in components
export const QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.mobile}px)`,
  tablet: `(min-width: ${BREAKPOINTS.mobile + 1}px) and (max-width: ${BREAKPOINTS.tablet}px)`,
  desktop: `(min-width: ${BREAKPOINTS.desktop}px)`,
  portrait: '(orientation: portrait)',
  retina: '(min-resolution: 2dppx)'
};

