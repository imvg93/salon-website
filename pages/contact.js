import { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft, FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    branch: 'kphb' // Default branch
  })

  const [status, setStatus] = useState({
    type: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending message...' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.'
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          branch: 'kphb'
        })
      } else {
        throw new Error(data.message || 'Something went wrong')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again.'
      })
    }
  }

  return (
    <>
      <Head>
        {/* ==============================================
             CONTACT/BOOKING PAGE - SEO META TAGS
             ============================================== */}

        {/* Basic Meta Tags */}
        <title>Contact Catwalk Salons - Book Appointment | KPHB & Nizampet Locations</title>
        <meta name="description" content="Contact Catwalk Salons for appointments & inquiries. Two convenient locations in Hyderabad: KPHB & Nizampet. Call +91-99596-73434 or book online. Open 10 AM - 8 PM daily." />
        <meta name="keywords" content="contact catwalk salons, book appointment Hyderabad, salon KPHB, salon Nizampet, beauty salon contact, appointment booking, salon phone number" />
        <meta name="author" content="Catwalk Salons" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.catwalksalons.com/contact" />

        {/* Open Graph Tags (Facebook/LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Catwalk Salons - Book Appointment | KPHB & Nizampet Locations" />
        <meta property="og:description" content="Get in touch with Catwalk Salons. Two convenient locations in Hyderabad with easy appointment booking. Call +91-99596-73434 or visit our KPHB & Nizampet branches." />
        <meta property="og:url" content="https://www.catwalksalons.com/contact" />
        <meta property="og:image" content="https://www.catwalksalons.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Catwalk Salons" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Catwalk Salons - Book Appointment | KPHB & Nizampet Locations" />
        <meta name="twitter:description" content="Get in touch with Catwalk Salons. Two convenient locations in Hyderabad with easy appointment booking. Call +91-99596-73434 or visit our KPHB & Nizampet branches." />
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
                "name": "Contact",
                "item": "https://www.catwalksalons.com/contact"
              }
            ]
          })
        }} />

        {/* Contact Page Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Catwalk Salons",
            "description": "Contact information and appointment booking for Catwalk Salons locations in Hyderabad",
            "url": "https://www.catwalksalons.com/contact",
            "mainEntity": {
              "@type": "BeautySalon",
              "name": "Catwalk Salons",
              "telephone": "+91-99596-73434",
              "url": "https://www.catwalksalons.com",
              "address": [
                {
                  "@type": "PostalAddress",
                  "name": "Catwalk Ladies Salon - KPHB",
                  "streetAddress": "JNTU to Hitech city road, Near MIG Bus-stop",
                  "addressLocality": "KPHB",
                  "addressRegion": "Telangana",
                  "postalCode": "500072",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "name": "Catwalk Unisex Salon - Nizampet",
                  "streetAddress": "Sreekrutha Sadan, Beside HP petrol",
                  "addressLocality": "Nizampet",
                  "addressRegion": "Telangana",
                  "postalCode": "500090",
                  "addressCountry": "IN"
                }
              ],
              "openingHours": "Mo-Su 10:00-20:00",
              "priceRange": "$$"
            }
          })
        }} />
      </Head>
      <main className="min-h-screen bg-[#FFF9F0]">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <Link href="/" className="flex items-center space-x-2">
          <FaArrowLeft className="w-4 h-4" />
          <span className="hidden md:inline">Catwalk</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gradient-to-r from-[#D4AF37] to-[#4ad4fe]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-[#2C1810]">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-2xl"
            >
              Get in touch with us for appointments, inquiries, or to learn more about our services
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* KPHB Branch */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold text-[#2C1810] mb-6">Catwalk Ladies Salon - KPHB</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-[#D4AF37] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#2C1810]">Address</h3>
                      <p className="text-[#5C4033]">JNTU to Hitech city road,Near MIG Bus-stop KPHB</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaPhone className="text-[#D4AF37] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#2C1810]">Phone</h3>
                      <p className="text-[#5C4033]">+91 99596 73434</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaClock className="text-[#D4AF37] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#2C1810]">Hours</h3>
                      <p className="text-[#5C4033]">10:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Nizampet Branch */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold text-[#2C1810] mb-6">Catwalk Unisex Salon - Nizampet</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-[#D4AF37] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#2C1810]">Address</h3>
                      <p className="text-[#5C4033]">Sreekrutha Sadan, Beside HP petrol, Nizampet</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaPhone className="text-[#D4AF37] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#2C1810]">Phone</h3>
                      <p className="text-[#5C4033]">+91 99596 73434</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaClock className="text-[#D4AF37] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#2C1810]">Hours</h3>
                      <p className="text-[#5C4033]">10:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#2C1810] mb-6">Send us a Message</h2>
              
              {status.message && (
                <div className={`p-4 mb-6 rounded-lg ${
                  status.type === 'success' ? 'bg-green-100 text-green-700' :
                  status.type === 'error' ? 'bg-red-100 text-red-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2C1810] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#F5E6B3] rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2C1810] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#F5E6B3] rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2C1810] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#F5E6B3] rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="branch" className="block text-sm font-medium text-[#2C1810] mb-1">
                    Select Branch *
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    required
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#F5E6B3] rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  >
                    <option value="kphb">Catwalk Ladies Salon - KPHB</option>
                    <option value="nizampet">Catwalk Unisex Salon - Nizampet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#2C1810] mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-[#F5E6B3] rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    placeholder="Enter message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2C1810] mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-[#F5E6B3] rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full bg-[#D4AF37] text-white px-6 py-3 rounded-lg hover:bg-[#B38B1F] transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
} 