import styles from '../styles/Navbar.module.css';
import Link from 'next/link';



export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Catwalk</h1>
        <ul className={styles.navLinks}>
          <li><a href="/" className={styles.navLink}>Home</a></li>
          <li><a href="/about-us" className={styles.navLink}>About</a></li>
          <li><a href="/services" className={styles.navLink}>Services</a></li>
          <li><a href="/tattoo-intro" className={styles.navLink}>Tattoo Studio</a></li>
          <li><a href="/training" className={styles.navLink}>Training</a></li>     
          <li><a href="/contact" className={styles.navLink}>Contact</a></li>          
          <li><Link href="/appointments" className={styles.navLink}>Book Appointment</Link></li>


        </ul>
      </div>
    </nav>
  );
}
