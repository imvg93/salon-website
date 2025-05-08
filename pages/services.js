import { useState } from 'react';
import styles from '../styles/Services.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const Services = () => {
  const [activeTab, setActiveTab] = useState('packages');
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = {
    packages: [
      {
        name: 'Bridal Package',
        description: 'Complete bridal package for the perfect wedding look',
        image: '/images/services/bridal package salon image to see clients.jpg',
        benefits: [
          'Pre-bridal facial treatments (3 sessions)',
          'Hair spa and treatment',
          'Hair coloring and styling',
          'Complete bridal makeup with trial',
          'Manicure and pedicure',
          'Free consultation',
          
        ]
      },
      {
        name: 'Party Package',
        description: 'Complete party look package',
        image: '/images/services/party package salon .jpg',
        duration: '3-4 hours',
        benefits: [
          'Hair styling',
          'Party makeup',
          'Manicure',
          'Quick facial',
         
        ]
      },
      {
        name: 'Hair Care Package',
        description: 'Complete hair care and beauty ',
        image: '/images/services/e538d28e-f45b-46a1-b3b6-a52f627595c1.jpeg',
        duration: '2-3 hours',
        benefits: [
          'Hair spa',
          'Haircut',
          'Scalp massage',
          'pedicure',
          'manicure',
          'facial',
          'waxing'
          
        ]
      },
      {
        name: 'Skin Care Package',
        description: 'Complete skin care and facial package',
        image: '/images/services/skin care package for salon in services doing.jpg',
        duration: '2-3 hours',
        benefits: [
          'Deep cleansing facial',
          'Skin analysis',
          'Face massage',
          'LED therapy',
          
        ]
      },
      {
        name: 'Complete Beauty Package',
        description: 'Complete beauty and grooming package',
        image: '/images/services/Complete Beauty Package for salon in services.jpg',
        duration: '4-5 hours',
        benefits: [
          'Haircut and styling',
          'Facial treatment',
          'Manicure and pedicure',
          'Waxing',
          'Hair spa',

        ]
      },
      {
        name: 'Men\'s Grooming Package',
        description: 'Complete grooming package for men',
        image: '/images/services/Mens Grooming Package for salon in services.jpg',
        duration: '2-3 hours',
        benefits: [
          'Haircut and styling',
          'O3 Facials/radiant grooming Facials',
          'Beard trim and styling',
          'Manicure',
          'pedicure',
          'hair spa'

        ]
      }
    ],
    membership: [
      {
        name: 'silver membership',
        description: 'Basic membership with exclusive benefits',
        image: '/images/services/Silver Membership for salon in services.jpg',
        duration: '1 year',
        benefits: [
          '10% off on all services',
          'Priority booking',
          'Free birthday treatment',
          'Monthly newsletter'
        ]
      },
      {
        name: 'Gold Membership',
        description: 'Premium membership with enhanced benefits',
        image: '/images/services/Gold Membership for salon in services.jpg',
        duration: '1 year',
        benefits: [
          '20% off on all services',
          'Priority booking',
          'Free birthday package',
          'One free facial',
          'Exclusive member events'
        ]
      },
      {
        name: 'Platinum Membership',
        description: 'Elite membership with maximum benefits',
        image: '/images/services/Platinum Membership for salon in services.jpg',
        duration: '1 year',
        benefits: [
          '30% off on all services',
          'VIP priority booking',
          'Monthly free treatment',
          'O3 facials & Radiant Facial',
          'Exclusive member events',
          'Personal beauty consultant',
          'Complimentary spa day'
        ]
      },
      {
        name: 'Diamond Membership',
        description: 'Ultimate luxury membership with exclusive VIP benefits',
        image: '/images/services/Diamond Membership for salon in services.jpg',
        duration: '1 year',
        benefits: [
          '40% off on all services',
          '24/7 VIP booking',
          'Monthly free premium treatment',
          'Exclusive VIP events',
          'Personal beauty consultant',
          'Quarterly spa day',
          'Free product samples',
          'Priority access to new services'
        ]
      },
      {
        name: 'Student Membership',
        description: 'Special membership for students with exclusive benefits',
        image: '/images/services/Student Membership for salon in services.jpg',
        duration: '1 year',
        benefits: [
          '15% off on all services',
          'Free basic haircut monthly',
          'Student ID required',
          'Special student events',
          'Free beauty consultation'
        ]
      }
    ],
    hair: [
      {
        name: 'Haircut & Styling',
        description: 'Professional haircut and styling by expert stylists',
        image: '/images/haircut.jpg',
        duration: '45-60 mins'
      },
      {
        name: 'Hair Coloring',
        description: 'Professional hair coloring with premium products',
        image: '/images/haircolor.jpg',
        duration: '2-3 hours'
      },
      {
        name: 'Hair Treatment',
        description: 'Deep conditioning and repair treatments',
        image: '/images/hairtreatment.jpg',
        duration: '1-1.5 hours'
      },
      {
        name: 'Keratin Treatment',
        description: 'Professional keratin treatment for smooth, frizz-free hair',
        image: '/images/services/Keratin Treatment for salon in services doing.jpg',
        duration: '2-3 hours'
      },
      {
        name: 'Hair Spa',
        description: 'Relaxing hair spa with deep conditioning and scalp massage',
        image: '/images/services/Hair Spa for salon in services doing.jpg',
        duration: '1-1.5 hours'
      },
      {
        name: 'Hair Highlights',
        description: 'Professional hair highlighting for a natural, sun-kissed look',
        image: '/images/services/Hair Highlights for salon in services doing.jpg',
        duration: '2-2.5 hours'
      },
      {
        name: 'Hair Botox',
        description: 'Advanced hair botox treatment for deep repair and shine',
        image: '/images/services/Hair Botox for salon in services doing.jpg',
        duration: '2-2.5 hours'
      },
      {
        name: 'Hair Rebonding',
        description: 'Professional hair rebonding for straight, silky hair',
        image: '/images/services/Hair Rebonding for salon in services doing.jpg',
        duration: '3-4 hours'
      },
      {
        name: 'Hair Smoothening',
        description: 'Advanced hair smoothening for frizz-free, manageable hair',
        image: '/images/services/Hair Smoothening for salon in services doing.jpg',
        duration: '2-3 hours'
      },
      {
        name: 'Hair Perming',
        description: 'Professional hair perming for beautiful, natural-looking curls',
        image: '/images/services/Hair Perming for salon in services doing.jpg',
        duration: '2.5-3.5 hours'
      }
    ],
    nail: [
      {
        name: 'Manicure & Pedicure',
        description: 'Complete nail care including cuticle care, shaping, and polish',
        image: '/images/manicure & pedicure service.jpg',
        duration: '45-60 mins'
      },
      {
        name: 'Gel Nail Art',
        description: 'Long-lasting gel polish with beautiful nail art designs',
        image: '/images/gel nail art execellent service salon.jpg',
        duration: '1-1.5 hours'
      },
      {
        name: 'Nail Extension',
        description: 'Professional nail extensions with acrylic or gel',
        image: '/images/nail extensions execellent service salon.jpg',
        duration: '1.5-2 hours'
      },
      {
        name: 'Nail Art Design',
        description: 'Creative and trendy nail art designs by expert artists',
        image: '/images/services/Nail Art .jpg',
        duration: '1-1.5 hours'
      },
      {
        name: 'Paraffin Treatment',
        description: 'Moisturizing paraffin treatment for soft, smooth hands and feet',
        image: '/images/services/Paraffin Treatment.jpg',
        duration: '30-45 mins'
      },
      {
        name: 'Acrylic Nails',
        description: 'Professional acrylic nail extensions with custom designs',
        image: '/images/services/Acrylic.jpg',
        duration: '2-2.5 hours'
      },
      {
        name: 'SNS Dipping Powder',
        description: 'Long-lasting SNS dipping powder nails with shine',
        image: '/images/services/SNS.jpg',
        duration: '1.5-2 hours'
      },
      {
        name: 'French Manicure',
        description: 'Classic French manicure with perfect white tips',
        image: '/images/services/French.jpg',
        duration: '1-1.5 hours'
      }
    ],
    facial: [
      {
        name: 'Hydrafacial',
        description: 'Advanced hydrafacial treatment for deep hydration',
        image: '/images/services/Hydrafacia.jpg',
        duration: '1.5 hours'
      },
      {
        name: 'Premium Facial',
        description: 'Advanced facial with premium products',
        image: '/images/Premium.jpg',
        duration: '1-1.5 hours'
      },
      {
        name: 'Bridal Facial',
        description: 'Special bridal facial package with premium products',
        image: '/images/Bridal.jpg',
        duration: '2-2.5 hours'
      },
      {
        name: 'Gold Facial',
        description: 'Luxurious gold facial for radiant, glowing skin',
        image: '/images/services/Gold Facialin salon service doing.jpg',
        duration: '1.5 hours'
      },
      {
        name: 'Anti-Aging Facial',
        description: 'Advanced anti-aging treatment with premium products',
        image: '/images/services/anti aging.jpg',
        duration: '1.5-2 hours'
      },
      {
        name: 'Detox Facial',
        description: 'Deep cleansing and detoxifying facial treatment',
        image: '/images/services/Detox.jpg',
        duration: '1-1.5 hours'
      },
      {
        name: 'Diamond Facial',
        description: 'Premium diamond facial for ultimate skin rejuvenation',
        image: '/images/services/diamond facial.jpg',
        duration: '2 hours'
      },
      {
        name: 'Oxygen Facial',
        description: 'Revitalizing oxygen facial for fresh, glowing skin',
        image: '/images/services/Oxygen.jpg',
        duration: '1.5 hours'
      },
      {
        name: 'LED Light Therapy',
        description: 'Advanced LED light therapy for skin concerns',
        image: '/images/services/LED Light.jpg',
        duration: '1 hour'
      },
      {
        name: 'Basic Facial',
        description: 'Deep cleansing and basic skin care treatment',
        image: '/images/Basic.jpg',
        duration: '45-60 mins'
        
      }
    ],
    makeup: [
      {
        name: 'Party Makeup',
        description: 'Professional party makeup with long-lasting products',
        image: '/images/partym.jpg',
        duration: '1-1.5 hours'
      },
      {
        name: 'Bridal Makeup',
        description: 'Complete bridal makeup package with trials',
        image: '/images/bridalm.jpg',
        duration: '2-3 hours'
      },
      {
        name: 'HD Makeup',
        description: 'High-definition makeup for special occasions',
        image: '/images/hdm.jpg',
        duration: '1.5-2 hours'
      },
      {
        name: 'Engagement Makeup',
        description: 'Special engagement makeup with trial session',
        image: '/images/services/Engagement Makeup.jpg',
        duration: '1.5-2 hours'
      },
      {
        name: 'Character Makeup',
        description: 'Creative character and theme-based makeup',
        image: '/images/services/character Makeup.jpg',
        duration: '1-2 hours'
      },
      {
        name: 'Airbrush Makeup',
        description: 'Flawless airbrush makeup for special occasions',
        image: '/images/services/air bush.jpg',
        duration: '1.5-2 hours'
      },
      {
        name: 'Mehendi Makeup',
        description: 'Traditional mehendi ceremony makeup with trial',
        image: '/images/services/Mehendi Makeup.jpg',
        duration: '1.5 hours'
      },
      {
        name: 'Fashion Show Makeup',
        description: 'Professional makeup for fashion shows and events',
        image: '/images/services/Fashion Show Makeup.jpg',
        duration: '2 hours'
      },
      {
        name: 'Photoshoot Makeup',
        description: 'Camera-ready makeup for photoshoots',
        image: '/images/services/photoshoot .jpg',
        duration: '1.5-2 hours'
      },
      {
        name: 'Glamour Makeup',
        description: 'High-impact glamour makeup for special occasions',
        image: '/images/services/glamour.jpg',
        duration: '2 hours'
      }
    ],
    training: [
      {
        name: 'Basic Hair Course',
        description: 'Learn basic hair cutting and styling techniques',
        image: '/images/basichc.jpg',
        duration: '3 months'
      },
      {
        name: 'Advanced Makeup Course',
        description: 'Master advanced makeup techniques and styles',
        image: '/images/advancemc.jpg',
        duration: '4 months'
      },
      {
        name: 'Complete Beauty & Hair Course',
        description: 'Comprehensive beauty and styling course',
        image: '/images/completebhc.jpg',
        duration: '6 months'
      },
      {
        name: 'Nail Art Course',
        description: 'Professional nail art and design techniques',
        image: '/images/services/nail art course.jpg',
        duration: '2 months'
      },
      {
        name: 'Spa Therapy Course',
        description: 'Comprehensive spa and massage therapy training',
        image: '/images/services/Spa Therapy Course.jpg',
        duration: '3 months'
      },
      {
        name: 'Bridal Makeup Course',
        description: 'Specialized bridal makeup and styling techniques',
        image: '/images/services/Bridal Makeup Course.jpg',
        duration: '3 months'
      },
      {
        name: 'Hair Coloring Course',
        description: 'Professional hair coloring and treatment techniques',
        image: '/images/services/hair Color.jpg',
        duration: '3 months'
      },
      {
        name: 'Facial Therapy Course',
        description: 'Advanced facial treatments and skin care techniques',
        image: '/images/services/Facial Therapy Course.jpg',
        duration: '2 months'
      },
      {
        name: 'Hair Styling Course',
        description: 'Professional hair styling and cutting techniques',
        image: '/images/services/Hair styling.jpg',
        duration: '3 months'
      },
      {
        name: 'Beauty Therapy Diploma',
        description: 'Comprehensive beauty therapy and salon management',
        image: '/images/services/beauty therapy.jpg',
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
        <div className="mt-4 p-4 bg-pink-100 border-2 border-pink-300 rounded-lg max-w-2xl mx-auto shadow-md">
          <p className="text-gray-800 text-sm font-medium text-center">
            <span className="text-pink-600 font-semibold">Note:</span> For detailed pricing and special offers, please contact your nearest branch. 
            Our friendly staff will be happy to assist you with current rates and available packages.
          </p>
        </div>
      </div>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'packages' ? styles.active : ''}`}
          onClick={() => setActiveTab('packages')}
        >
          Packages
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'membership' ? styles.active : ''}`}
          onClick={() => setActiveTab('membership')}
        >
          Membership
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'hair' ? styles.active : ''}`}
          onClick={() => setActiveTab('hair')}
        >
          Hair Services
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'nail' ? styles.active : ''}`}
          onClick={() => setActiveTab('nail')}
        >
          Nail Services
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
          data-tab="training"
          className={`${styles.tab} ${activeTab === 'training' ? styles.active : ''}`}
          onClick={() => setActiveTab('training')}
        >
          Training Programs
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-6xl mx-auto">
        {services[activeTab].map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer flex flex-col h-[500px]"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
            }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            transition={{ duration: 0.2 }}
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={service.image}
                alt={service.name}
                fill
                style={{ objectFit: 'cover' }}
                className={`transition-transform duration-300 ${
                  hoveredCard === index ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
            <div className={`p-4 transition-all duration-300 flex flex-col flex-grow ${
              hoveredCard === index ? 'bg-pink-50' : ''
            }`}>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold mb-1">{service.name}</h3>
                <p className="text-sm text-gray-600 mb-1">Duration: {service.duration}</p>
                <p className="text-sm text-gray-700 mb-3">{service.description}</p>
                {(activeTab === 'membership' || activeTab === 'packages') && (
                  <div className="mb-3">
                    <h4 className="font-medium text-sm mb-1">Benefits:</h4>
                    <ul className="list-disc list-inside space-y-0.5">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-xs text-gray-600">{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="mt-auto pt-4">
                <Link 
                  href="/appointments" 
                  className={`inline-block w-full text-center px-4 py-2 bg-black text-white rounded-lg transition-all duration-300 text-sm ${
                    hoveredCard === index ? 'bg-pink-600' : ''
                  }`}
                >
                  {activeTab === 'membership' ? 'Join Now' : 'Book Now'}
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center py-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-3">Ready to Transform Your Look?</h2>
        <p className="text-gray-600 mb-4 text-sm">Book your appointment today and experience the Catwalk difference</p>
        <Link 
          href="/appointments" 
          className="inline-block px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300 text-sm"
        >
          Book Your Appointment
        </Link>
      </div>
    </div>
  );
};

export default Services; 