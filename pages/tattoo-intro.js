import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';

const TattooIntro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2c1810] to-[#1a0f0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2c1810]/90 backdrop-blur-md border-b border-[#3d2318]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <FaArrowLeft className="w-5 h-5 text-[#ff6b35]" />
              <span className="text-xl font-bold">Catwalk</span>
            </Link>
            <div className="flex items-center space-x-6">
              <a href="https://www.instagram.com/catwalk__salon/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff6b35] transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://wa.me/+919959673434" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ff6b35] transition-colors">
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c1810] via-[#2c1810]/50 to-transparent z-10" />
        <Image
          src="/images/tattoo-hero.jpg"
          alt="Tattoo Art"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tight">
                INK YOUR
                <span className="block text-[#ff6b35]">STORY</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                Where every line tells a story, and every design becomes a part of your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/appointments">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto bg-[#ff6b35] text-white px-8 py-4 text-lg font-semibold hover:bg-[#ff5722] transition-all duration-300"
                  >
                    Book Now
                  </motion.button>
                </Link>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-transparent border-2 border-[#ff6b35] text-white px-8 py-4 text-lg font-semibold hover:bg-[#ff6b35]/10 transition-all duration-300"
                >
                  View Portfolio
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-[#1a0f0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">About Our Studio</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Welcome to our exclusive tattoo studio at Nizampet, where art meets precision. 
                Our team of skilled artists specializes in creating unique, personalized designs 
                that reflect your individuality.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ff6b35]/10 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="w-6 h-6 text-[#ff6b35]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Sreekrutha Sadan, Beside HP petrol, Nizampet</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ff6b35]/10 rounded-full flex items-center justify-center">
                    <FaRegClock className="w-6 h-6 text-[#ff6b35]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-gray-400">Daily: 10:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/tattoo-studio.jpg"
                alt="Tattoo Studio"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-[#3d2318]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">The Process</h2>
            <p className="text-gray-300 text-lg">Your journey to a perfect tattoo</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Consultation",
                description: "Meet with our artists to discuss your ideas and vision"
              },
              {
                number: "02",
                title: "Design",
                description: "We create a custom design that matches your style"
              },
              {
                number: "03",
                title: "Creation",
                description: "Your design comes to life with precision and care"
              }
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative p-8 border border-[#2c1810] rounded-xl group hover:border-[#ff6b35] transition-colors duration-300 bg-[#1a0f0a]"
              >
                <span className="absolute -top-4 left-8 bg-[#ff6b35] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {step.number}
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-[#2c1810]">
        <div className="absolute inset-0 bg-[#ff6b35]/5" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-300">
              Book a consultation with our expert artists and bring your vision to life.
            </p>
            <Link href="/appointments">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#ff6b35] text-white px-12 py-4 text-lg font-semibold hover:bg-[#ff5722] transition-all duration-300"
              >
                Book Your Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TattooIntro; 