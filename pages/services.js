import { useState } from 'react';
import styles from '../styles/Services.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  const [activeTab, setActiveTab] = useState('hair');

  const services = {
    hair: [
      {
        name: 'Haircut & Styling',
        price: '₹500 - ₹1500',
        description: 'Professional haircut and styling by expert stylists',
        image: '/images/haircut.jpg',
        duration: '45-60 mins'
      },
      {
        name: 'Hair Coloring',
        price: '₹2000 - ₹5000',
        description: 'Professional hair coloring with premium products',
        image: '/images/hair-color.jpg',
        duration: '2-3 hours'
      },
      {
        name: 'Hair Treatment',
        price: '₹1500 - ₹3000',
        description: 'Deep conditioning and repair treatments',
        image: '/images/hair-treatment.jpg',
        duration: '1-1.5 hours'
      }
    ],
    facial: [
      {
        name: 'Basic Facial',
        price: '₹1000 - ₹2000',
        description: 'Deep cleansing and basic skin care treatment',
        image: '/images/basic.jpg',
        duration: '45-60 mins'
      },
      {
        name: 'Premium Facial',
        price: '₹2500 - ₹4000',
        description: 'Advanced facial with premium products',
        image: '/images/premium.jpg',
        duration: '1-1.5 hours'
      },
      {
        name: 'Bridal Facial',
        price: '₹5000 - ₹8000',
        description: 'Special bridal facial package with premium products',
        image: '/images/bridal.jpg',
        duration: '2-2.5 hours'
      }
    ],
    makeup: [
      {
        name: 'Party Makeup',
        price: '₹2000 - ₹4000',
        description: 'Professional party makeup with long-lasting products',
        image: '/images/partym.jpg',
        duration: '1-1.5 hours'
      },
      {
        name: 'Bridal Makeup',
        price: '₹15000 - ₹25000',
        description: 'Complete bridal makeup package with trials',
        image: '/images/bridalm.jpg',
        duration: '2-3 hours'
      },
      {
        name: 'HD Makeup',
        price: '₹3000 - ₹6000',
        description: 'High-definition makeup for special occasions',
        image: '/images/hdm.jpg',
        duration: '1.5-2 hours'
      }
    ],
    training: [
      {
        name: 'Basic Hair Course',
        price: '₹25000',
        description: 'Learn basic hair cutting and styling techniques',
        image: '/images/hair-training.jpg',
        duration: '3 months'
      },
      {
        name: 'Advanced Makeup Course',
        price: '₹35000',
        description: 'Master advanced makeup techniques and styles',
        image: '/images/makeup-training.jpg',
        duration: '4 months'
      },
      {
        name: 'Complete Beauty Course',
        price: '₹50000',
        description: 'Comprehensive beauty and styling course',
        image: '/images/beauty-training.jpg',
        duration: '6 months'
      }
    ]
  };

  return (
    <div className={styles.container}>
      <div className={styles.navHeader}>
        <Link href="/" className={styles.homeButton}>
          <span className={styles.salonName}>Catwalk</span>
        </Link>
      </div>

      <div className={styles.header}>
        <h1>Our Services</h1>
        <p>Discover our range of premium beauty and styling services</p>
      </div>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'hair' ? styles.active : ''}`}
          onClick={() => setActiveTab('hair')}
        >
          Hair Services
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'facial' ? styles.active : ''}`}
          onClick={() => setActiveTab('facial')}
        >
          Facial Treatments
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'makeup' ? styles.active : ''}`}
          onClick={() => setActiveTab('makeup')}
        >
          Makeup Services
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'training' ? styles.active : ''}`}
          onClick={() => setActiveTab('training')}
        >
          Training Programs
        </button>
      </div>

      <div className={styles.servicesGrid}>
        {services[activeTab].map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.imageContainer}>
              <Image
                src={service.image}
                alt={service.name}
                width={400}
                height={300}
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.serviceInfo}>
              <h3>{service.name}</h3>
              <p className={styles.price}>{service.price}</p>
              <p className={styles.duration}>Duration: {service.duration}</p>
              <p className={styles.description}>{service.description}</p>
              <Link href="/appointments" className={styles.bookButton}>
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <h2>Ready to Transform Your Look?</h2>
        <p>Book your appointment today and experience the Catwalk difference</p>
        <Link href="/appointments" className={styles.ctaButton}>
          Book Your Appointment
        </Link>
      </div>
    </div>
  );
};

export default Services; 