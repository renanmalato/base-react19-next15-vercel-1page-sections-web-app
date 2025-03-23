'use client';

import { useGoogleTranslate } from '@/hooks/useGoogleTranslate';
import './LanguageSelector.scss';

export function LanguageSelector() {
    const { changeLanguage, currentLanguage } = useGoogleTranslate();

    return (
        <div className="language-selector">
            <button 
                onClick={() => changeLanguage('en')} 
                className={`flag-button ${currentLanguage === 'en' ? 'active' : ''}`}
                aria-label="English"
            >
                <span className="flag-button-text">🇺🇸</span>
            </button>
            <button 
                onClick={() => changeLanguage('es')} 
                className={`flag-button ${currentLanguage === 'es' ? 'active' : ''}`}
                aria-label="Español"
            >
                <span className="flag-button-text">🇪🇸</span>
            </button>
            <button 
                onClick={() => changeLanguage('pt')} 
                className={`flag-button ${currentLanguage === 'pt' ? 'active' : ''}`}
                aria-label="Português"
            >
                <span className="flag-button-text">🇧🇷</span>
            </button>
        </div>
    );
} 