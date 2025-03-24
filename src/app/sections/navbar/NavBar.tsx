'use client';

import './NavBar.scss';
import { useScroll } from '@/context/ScrollContext';
import { LanguageSelector } from './components/LanguageSelector/LanguageSelector';
import Image from 'next/image';

export default function NavBar() {
  const { scrollToSection } = useScroll();
  
  const sections = [
    { name: 'header', label: 'Home' },
    { name: 'about', label: 'About' },
    { name: 'packages', label: 'Packages' },
    { name: 'featured', label: 'Featured' },
    { name: 'contact', label: 'Contact' }
  ];

  return (
    <div className="navbar-container">

    <div className="logo-container">
      <div className="logos-left">
        <Image src="/assets/img/theknotlogo.avif" alt="logo" width={100} height={30} />
        <Image src="/assets/img/weddingwirelogo.avif" alt="logo" width={70} height={30} />
      </div>

      <div className="renanmalato">
      <span className="text-top">RENAN MALATO</span>
      <span className="text-bottom">#GOODMUSICONLY</span>
      </div>

      <div className="logos-right">
        <Image src="/assets/img/gig-salad-badge-top-performer.avif" alt="logo" width={100} height={70} />
              {/* Language Selector */}
      <div className="language-selector-container">
        <LanguageSelector />
      </div>
      </div>
    </div>
    
    <nav className="navbar">

      <ul className="nav-links">

        {sections.map((section) => (
          <li key={section.name}>
            <button onClick={() => scrollToSection(section.name)} className="nav-link">
              {section.label}
            </button>
          </li>
        ))}

      </ul>
      

    </nav>
    </div>
  );
} 