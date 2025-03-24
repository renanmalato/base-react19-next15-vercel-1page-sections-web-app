'use client';

import { createContext, useContext, ReactNode, useEffect, useState } from 'react';
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
  // Add mounting state
  const [isMounted, setIsMounted] = useState(false);

  // Move media queries into state
  const [deviceState, setDeviceState] = useState<DeviceType>({
    isMobile: false,
    isTablet: false,
    isDesktop: true, // Default to desktop
    isPortrait: false,
    isRetina: false
  });

  // Use media queries
  const mobileQuery = useMediaQuery({ maxWidth: BREAKPOINTS.mobile });
  const tabletQuery = useMediaQuery({ 
    minWidth: BREAKPOINTS.mobile + 1, 
    maxWidth: BREAKPOINTS.tablet 
  });
  const desktopQuery = useMediaQuery({ minWidth: BREAKPOINTS.desktop });
  const portraitQuery = useMediaQuery({ orientation: 'portrait' });
  const retinaQuery = useMediaQuery({ minResolution: '2dppx' });

  useEffect(() => {
    // Update state only after component mounts
    setDeviceState({
      isMobile: mobileQuery,
      isTablet: tabletQuery,
      isDesktop: desktopQuery,
      isPortrait: portraitQuery,
      isRetina: retinaQuery
    });
    setIsMounted(true);
  }, [mobileQuery, tabletQuery, desktopQuery, portraitQuery, retinaQuery]);

  // Return early with default values during SSR
  if (!isMounted) {
    return (
      <MobileContext.Provider value={deviceState}>
        {children}
      </MobileContext.Provider>
    );
  }

  return (
    <MobileContext.Provider value={deviceState}>
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

