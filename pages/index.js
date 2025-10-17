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
        {/* ==============================================
             HOME PAGE - SEO META TAGS
             ============================================== */}

        {/* Basic Meta Tags */}
        <title>Catwalk Salons - Premium Beauty Salon & Training Academy in Hyderabad</title>
        <meta name="description" content="Catwalk Salons offers premium beauty services, professional hair styling, makeup, facials & beauty training courses in Hyderabad. Book appointments at KPHB & Nizampet locations." />
        <meta name="keywords" content="beauty salon Hyderabad, hair salon KPHB, makeup artist Hyderabad, beauty training academy, professional hair styling, bridal makeup, facial treatments, nail art, beauty courses" />
        <meta name="author" content="Catwalk Salons" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.catwalksalons.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        {/* Open Graph Tags (Facebook/LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Catwalk Salons - Premium Beauty Salon & Training Academy in Hyderabad" />
        <meta property="og:description" content="Transform your beauty with Catwalk Salons. Premium hair styling, makeup, facials & professional beauty training courses in Hyderabad. Book your appointment today!" />
        <meta property="og:url" content="https://www.catwalksalons.com/" />
        <meta property="og:image" content="https://www.catwalksalons.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Catwalk Salons" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Catwalk Salons - Premium Beauty Salon & Training Academy in Hyderabad" />
        <meta name="twitter:description" content="Transform your beauty with Catwalk Salons. Premium hair styling, makeup, facials & professional beauty training courses in Hyderabad. Book your appointment today!" />
        <meta name="twitter:image" content="https://www.catwalksalons.com/og-image.jpg" />

        {/* Additional SEO Tags */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        <meta name="ICBM" content="17.3850, 78.4867" />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.catwalksalons.com/"
              }
            ]
          })
        }} />

        {/* Local Business Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "Catwalk Salons",
            "description": "Premium beauty salon and training academy offering hair styling, makeup, facials, and professional beauty courses in Hyderabad",
            "url": "https://www.catwalksalons.com",
            "telephone": "+91-99596-73434",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "JNTU to Hitech city road, Near MIG Bus-stop",
              "addressLocality": "KPHB",
              "addressRegion": "Telangana",
              "postalCode": "500072",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "17.3850",
              "longitude": "78.4867"
            },
            "openingHours": "Mo-Su 10:00-20:00",
            "priceRange": "$$",
            "servedArea": "Hyderabad",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Beauty Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hair Styling & Coloring"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bridal Makeup & Styling"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Facial Treatments"
                  }
                }
              ]
            }
          })
        }} />
      </Head>

      {/* Social Media Floating Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/+919959673434?text=Hi%20book%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center social-button"
          style={{ width: '50px', height: '50px' }}
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/catwalk__salon/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center social-button"
          style={{ width: '50px', height: '50px' }}
        >
          <FaInstagram className="w-6 h-6" />
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

        {/* Tattoo Services Section */}
        <section className={styles.tattooSection}>
          <h2 className={styles.sectionTitle}>Professional Tattoo Services</h2>
          <div className={styles.servicesGrid}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={styles.serviceCard}
            >
              <img src="/images/Designer (1).jpeg" alt="Custom Tattoo Designs" className={styles.serviceImage} />
              <h3>Custom Tattoo Designs</h3>
              <p>Unique, personalized designs created just for you by our expert artists.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={styles.serviceCard}
            >
              <img src="/images/Designer.jpeg" alt="Cover-up Tattoos" className={styles.serviceImage} />
              <h3>Cover-up Tattoos</h3>
              <p>Transform existing tattoos into beautiful new designs.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={styles.serviceCard}
            >
              <img src="/images/tattoo.png" alt="Tattoo Touch-ups" className={styles.serviceImage} />
              <h3>Tattoo Touch-ups</h3>
              <p>Professional touch-up services to maintain your tattoo's vibrancy.</p>
            </motion.div>
          </div>
          <div className="text-center mt-8">
            <Link href="/tattoo-intro" className={styles.primaryButton}>
              Learn More About Our Tattoo Services
            </Link>
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
