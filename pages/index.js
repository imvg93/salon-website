import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Catwalk Academy - Beauty Training & Salon</title>
        <meta name="description" content="Professional beauty training and salon services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Social Media Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/+919959673434?text=Hi%20book%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
          style={{ width: '60px', height: '60px' }}
        >
          <FaWhatsapp className="w-8 h-8" />
        </a>
        <a
          href="https://www.instagram.com/catwalk__salon/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-4 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center"
          style={{ width: '60px', height: '60px' }}
        >
          <FaInstagram className="w-8 h-8" />
        </a>
      </div>

      <Navbar /> 
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroContent}
          >
            <h1 className={styles.heroTitle}>Welcome to Catwalk</h1>
            <p className={styles.heroSubtitle}>Beauty salon & professional hair and makeup training in one destination.</p>
            <div className={styles.heroButtons}>
              <Link href="/services" className={styles.primaryButton}>
                View Our Services
              </Link>
              <Link href="/appointments" className={styles.secondaryButton}>
                Book Now
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Featured Services */}
        <section className={styles.featuredServices}>
          <h2 className={styles.sectionTitle}>Our Featured Services</h2>
          <div className={styles.servicesGrid}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={styles.serviceCard}
            >
              <img src="/images/haircut.jpg" alt="Hair Styling" className={styles.serviceImage} />
              <h3>Hair Styling</h3>
              <p>Expert cuts, coloring, and styling for all hair types.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={styles.serviceCard}
            >
              <img src="/images/makeup.jpg" alt="Makeup Services" className={styles.serviceImage} />
              <h3>Beauty and Makeup Services</h3>
              <p>Services include facials, makeup application, eyebrow shaping, lash extensions.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={styles.serviceCard}
            >
              <img src="/images/training.jpg" alt="Beauty Training" className={styles.serviceImage} />
              <h3>Beauty Training</h3>
              <p>Comprehensive courses for aspiring beauty professionals.</p>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.whyChooseUs}>
          <h2 className={styles.sectionTitle}>Why Choose Catwalk?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>✨</div>
              <h3>Expert Team</h3>
              <p>Highly trained professionals with years of experience.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>💎</div>
              <h3>Premium Products</h3>
              <p>We use only the finest quality products.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🌟</div>
              <h3>Modern Techniques</h3>
              <p>Stay ahead with the latest beauty trends.</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🎓</div>
              <h3>Professional Training</h3>
              <p>Learn from the best in the industry.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
