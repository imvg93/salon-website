import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Catwalk</h1>
        
        {/* Mobile menu button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          <li><a href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="/services" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Services</a></li>
          <li><a href="/about-us" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="/tattoo-intro" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Tattoo Studio</a></li>
          <li><a href="/training" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Training</a></li>     
          <li><a href="/contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contact</a></li>          
          <li><Link href="/appointments" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Book Appointment</Link></li>
        </ul>
      </div>
    </nav>
  );
}
