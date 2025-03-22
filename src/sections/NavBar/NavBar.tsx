'use client';

import './NavBar.scss';
import { useScroll } from '@/context/ScrollContext';

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
    <nav className="navbar">
      <div className="logo">
        <h3>MUSICA</h3>
      </div>
      <ul className="nav-links">
        {sections.map((section) => (
          <li key={section.name}>
            <button 
              onClick={() => scrollToSection(section.name)}
              className="nav-link"
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
} 