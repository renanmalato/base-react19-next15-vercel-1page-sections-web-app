'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// Add type declarations for Google Translate
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (options: {
          pageLanguage: string;
          includedLanguages: string;
          autoDisplay: boolean;
        }, element: string) => void;
      };
    };
  }
}

export default function GoogleTranslateScript() {
  useEffect(() => {
    // Define the initialization function in a client-side effect
    window.googleTranslateElementInit = function() {
      console.log('Initializing Google Translate');
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement({
          pageLanguage: 'pt',
          includedLanguages: 'en,es,pt',
          autoDisplay: false,
        }, 'google_translate_element');
        console.log('Google Translate initialized');
      }
    };
  }, []);

  return (
    <>
      <div id="google_translate_element" style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }} />
      <Script
        strategy="afterInteractive"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        onLoad={() => {
          console.log('Google Translate script loaded');
        }}
        onError={(e) => {
          console.error('Google Translate script failed to load:', e);
        }}
      />
    </>
  );
} 