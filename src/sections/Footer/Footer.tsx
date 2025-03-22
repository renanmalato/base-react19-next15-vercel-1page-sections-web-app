'use client';

import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <h2>Footer Section</h2>
        <p>© {new Date().getFullYear()} Musica. All rights reserved.</p>
      </div>
    </footer>
  );
} 