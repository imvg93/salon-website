import BookingForm from '../components/BookingForm';
import Link from 'next/link';
import Head from 'next/head';
import { FaArrowLeft, FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

const Appointments = () => {
  const [showLocationInfo, setShowLocationInfo] = useState(false);

  return (
    <>
      <Head>
        {/* ==============================================
             APPOINTMENTS PAGE - SEO META TAGS
             ============================================== */}

        {/* Basic Meta Tags */}
        <title>Book Appointment - Catwalk Salons | KPHB & Nizampet Locations</title>
        <meta name="description" content="Book your beauty appointment at Catwalk Salons. Professional hair styling, makeup, facials & beauty training. Two convenient locations in Hyderabad: KPHB & Nizampet. Call +91-99596-73434" />
        <meta name="keywords" content="book appointment catwalk salons, beauty salon appointment Hyderabad, hair salon booking KPHB, makeup appointment Nizampet, beauty services booking, salon appointment online" />
        <meta name="author" content="Catwalk Salons" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.catwalksalons.com/appointments" />

        {/* Open Graph Tags (Facebook/LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Book Appointment - Catwalk Salons | KPHB & Nizampet Locations" />
        <meta property="og:description" content="Schedule your beauty appointment at Catwalk Salons. Professional services at two convenient Hyderabad locations. Book online or call +91-99596-73434" />
        <meta property="og:url" content="https://www.catwalksalons.com/appointments" />
        <meta property="og:image" content="https://www.catwalksalons.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Catwalk Salons" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book Appointment - Catwalk Salons | KPHB & Nizampet Locations" />
        <meta name="twitter:description" content="Schedule your beauty appointment at Catwalk Salons. Professional services at two convenient Hyderabad locations. Book online or call +91-99596-73434" />
        <meta name="twitter:image" content="https://www.catwalksalons.com/og-image.jpg" />

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
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Book Appointment",
                "item": "https://www.catwalksalons.com/appointments"
              }
            ]
          })
        }} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm lg:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <FaArrowLeft className="w-5 h-5 text-blue-600" />
            <span className="text-lg font-semibold text-gray-800">Back</span>
          </Link>
          <button
            onClick={() => setShowLocationInfo(!showLocationInfo)}
            className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            <FaMapMarkerAlt className="inline w-4 h-4 mr-2" />
            Locations
          </button>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <FaArrowLeft className="w-5 h-5 text-blue-600" />
              <span className="text-lg font-semibold text-gray-800">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-6">
              <h1 className="text-xl font-bold text-blue-600">Catwalk Salon</h1>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://wa.me/+919959673434" 
                  className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors flex items-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp
                </a>
                <a 
                  href="tel:+919959673434" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <FaPhone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="pt-20 px-4 pb-6 max-w-3xl mx-auto lg:hidden">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">
            <span className="text-blue-600">Catwalk</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-1">
            Hair & Beauty Parlour
          </p>
          <p className="text-sm text-blue-500 font-medium">
                Book Your Appointment
          </p>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Book Your <span className="text-blue-600">Appointment</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience premium hair and beauty services at Catwalk Salon. Choose your preferred location and book your appointment today.
            </p>
          </div>
          </div>
        </div>

      {/* Mobile Location Info Modal/Overlay */}
      {showLocationInfo && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden">
          <div className="absolute inset-x-4 top-20 bg-white rounded-2xl border border-gray-200 p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
                <FaMapMarkerAlt className="text-blue-600" />
                Our Locations
              </h3>
              <button
                onClick={() => setShowLocationInfo(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <h4 className="font-semibold text-blue-600 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Nizampet Branch
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    Sreekrutha Sadan, Beside HP petrol,<br />
                    Nizampet, Hyderabad
                  </p>
                <a 
                  href="https://wa.me/+919959673434" 
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp
                </a>
                </div>
              
              <div className="bg-pink-50 rounded-xl p-4 border border-pink-200">
                <h4 className="font-semibold text-pink-600 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-600 rounded-full"></span>
                  Kukatpally Branch (Ladies Only)
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  K P H B Phase 3, Near MIG bustop, opp K.s bakers<br />
                    Kukatpally, Hyderabad
                  </p>
                <a 
                  href="https://wa.me/+919959673434" 
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <FaClock className="text-gray-600" />
                  Working Hours
                </h4>
                <p className="text-gray-600 text-sm">
                  Daily: 10:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Main Content */}
      <div className="hidden lg:block pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Left Sidebar - Location Info */}
            <div className="xl:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-600" />
                  Our Locations
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                      <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                      Nizampet Branch
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      Sreekrutha Sadan, Beside HP petrol,<br />
                      Nizampet, Hyderabad
                    </p>
                    <div className="flex gap-2">
                      <a 
                        href="https://wa.me/+919959673434" 
                        className="flex-1 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        WhatsApp
                      </a>
                      <a 
                        href="tel:+919959673434" 
                        className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <FaPhone className="w-4 h-4" />
                        Call
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-pink-50 rounded-xl p-5 border border-pink-200">
                    <h4 className="font-semibold text-pink-800 mb-3 flex items-center gap-2">
                      <span className="w-3 h-3 bg-pink-600 rounded-full"></span>
                      Kukatpally Branch
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-2">
                      K P H B Phase 3, Near MIG bustop,<br />
                      opp K.s bakers, Kukatpally, Hyderabad
                    </p>
                    <div className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-lg mb-4 inline-block">
                      Ladies Only
                    </div>
                    <div className="flex gap-2">
                      <a 
                        href="https://wa.me/+919959673434" 
                        className="flex-1 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        WhatsApp
                      </a>
                      <a 
                        href="tel:+919959673434" 
                        className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <FaPhone className="w-4 h-4" />
                        Call
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <FaClock className="text-gray-600" />
                      Working Hours
                    </h4>
                    <div className="text-gray-700 text-sm space-y-2">
                      <div className="flex justify-between">
                        <span>Mon - Sat</span>
                        <span className="font-medium">10:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium">10:00 AM - 6:00 PM</span>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

            {/* Right Content - Booking Form */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Book Your Appointment</h2>
                  <p className="text-blue-100">Fill in your details to schedule your visit</p>
                </div>
                <div className="p-6">
              <BookingForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Main Content */}
      <div className="px-4 pb-20 max-w-3xl mx-auto lg:hidden">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg">
          <BookingForm />
        </div>
      </div>

      {/* Mobile Quick Contact Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/98 backdrop-blur-md border-t border-gray-200 p-3 shadow-xl lg:hidden">
        <div className="flex gap-2 max-w-3xl mx-auto">
          <a 
            href="https://wa.me/+919959673434" 
            className="flex-1 bg-green-500 text-white py-2.5 px-3 rounded-lg text-center font-medium flex items-center justify-center gap-1.5 hover:bg-green-600 transition-all duration-200 text-sm shadow-md hover:shadow-lg"
          >
            <FaWhatsapp className="w-4 h-4" />
            WhatsApp
          </a>
          <a 
            href="tel:+919959673434" 
            className="flex-1 bg-blue-600 text-white py-2.5 px-3 rounded-lg text-center font-medium flex items-center justify-center gap-1.5 hover:bg-blue-700 transition-all duration-200 text-sm shadow-md hover:shadow-lg"
          >
            <FaPhone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>
      </div>
    </>
  );
};

export default Appointments; 