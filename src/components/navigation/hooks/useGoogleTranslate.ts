import { useState, useEffect } from 'react';

export const useGoogleTranslate = () => {
    const [isTranslateReady, setTranslateReady] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('en');

    useEffect(() => {
        let attempts = 0;
        const maxAttempts = 10;

        const checkGoogleTranslate = setInterval(() => {
            attempts++;
            
            if (!(window as any).google?.translate) {
                if (attempts >= maxAttempts) {
                    clearInterval(checkGoogleTranslate);
                }
                return;
            }

            const select = document.querySelector('.goog-te-combo');
            
            if (select) {
                setTranslateReady(true);
                clearInterval(checkGoogleTranslate);
            } else if (attempts >= maxAttempts) {
                clearInterval(checkGoogleTranslate);
            }
        }, 1000);

        return () => clearInterval(checkGoogleTranslate);
    }, []);

    const changeLanguage = (lang: string) => {
        if (!isTranslateReady) return;

        const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        
        if (select) {
            select.value = lang;
            select.dispatchEvent(new Event('change'));
            setCurrentLanguage(lang);
        }
    };

    return { isTranslateReady, changeLanguage, currentLanguage };
}; 