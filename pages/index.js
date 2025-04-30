import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
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
                View Our 
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

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>Get in Touch</h2>
              <p>Ready to transform your look? Contact us to schedule an appointment or learn more about our services.</p>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <span>+91 99596 73434</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📧</span>
                  <span>info@catwalk.com</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <span>Catwalk Ladies Salon - JNTU to Hitech city road, Kukatpally</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <span>Catwalk Unisex Salon - Sreekrutha Sadan,Beside Hp petrol,Nizampet</span>
                </div>
              </div>
            </div>
            <div id="contact" className={styles.contactForm}>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
