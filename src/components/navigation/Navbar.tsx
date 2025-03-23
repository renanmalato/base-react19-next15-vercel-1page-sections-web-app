'use client';

import './Navbar.scss';
import { LanguageSelector } from './components/LanguageSelector/LanguageSelector';

export default function Navbar() {
  // ------------------------------- //
  //    Main Component Return        //
  // ------------------------------- //

  return (
    <nav className="navbar">
        
      {/* ------------------- */}
      {/*  Left Nav Items     */}
      {/* ------------------- */}

      <div className="navbar-left">
        <h1>Renan Malato</h1>
        <p>#GOODMUSICONLY</p>
      </div>

      {/* ------------------- */}
      {/*     Center Nav      */}
      {/* ------------------- */}
      
      <div className="center-nav">  
        {/* Logo or central element could go here */}
      </div>
      
      {/* ------------------- */}
      {/*  Right Nav Items    */}
      {/* ------------------- */}

      <div className="nav-items">
        <div className="left">
          <button>
            <span className="nav-item">HOME</span>
          </button>

          <button>
            <span className="nav-item">ABOUT</span>
          </button>

          <button>
            <span className="nav-item">PACKAGES</span>
          </button>

          <button>
            <span className="nav-item">CONTACT</span>
          </button>
        </div>

        <div className="right">
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
} 