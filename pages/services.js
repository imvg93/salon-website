import { useState } from 'react';
import styles from '../styles/Services.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const Services = () => {
  const [activeTab, setActiveTab] = useState('hair');

  const services = {
    hair: [
      {
        name: 'Haircut & Styling',
        price: '₹300 - ₹1500',
        description: 'Professional haircut and styling by expert stylists',
        image: '/images/haircut.jpg',
        duration: '45-60 mins'
      },
      {
        name: 'Hair Coloring',
        price: '₹600 - ₹5000',
        description: 'Professional hair coloring with premium products',
        image: '/images/haircolor.jpg',
        duration: '2-3 hours'
      },
      {
        name: 'Hair Treatment',
        price: 'Pricing depends on Brand',
        description: 'Deep conditioning and repair treatments',
        image: '/images/hairtreatment.jpg',
        duration: '1-1.5 hours'
      }
    ],
    facial: [
      {
        name: 'Basic Facial',
        price: '₹400 - ₹1500',
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
        price: '₹4000 - ₹5000',
        description: 'Special bridal facial package with premium products',
        image: '/images/bridal.jpg',
        duration: '2-2.5 hours'
      }
    ],
    makeup: [
      {
        name: 'Party Makeup',
        price: '₹3000 - ₹4000',
        description: 'Professional party makeup with long-lasting products',
        image: '/images/partym.jpg',
        duration: '1-1.5 hours'
      },
      {
        name: 'Bridal Makeup',
        price: '₹9000 - ₹15000',
        description: 'Complete bridal makeup package with trials',
        image: '/images/bridalm.jpg',
        duration: '2-3 hours'
      },
      {
        name: 'HD Makeup',
        price: '₹15000',
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
        image: '/images/basichc.jpg',
        duration: '3 months'
      },
      {
        name: 'Advanced Makeup Course',
        price: '₹35000',
        description: 'Master advanced makeup techniques and styles',
        image: '/images/advancemc.jpg',
        duration: '4 months'
      },
      {
        name: 'Complete Beauty & Hair Course',
        price: '₹50000',
        description: 'Comprehensive beauty and styling course',
        image: '/images/completebhc.jpg',
        duration: '6 months'
      }
    ]
  };

  return (
    <div className={styles.container}>
      <div className="absolute top-4 left-4 z-10">
        <Link href="/">
          <button className="bg-[#f85555] text-white px-6 py-2 rounded-lg hover:bg-[#121212] transition shadow-md flex items-center gap-2">
            <FaArrowLeft className="w-4 h-4" />
            Catwalk
          </button>
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