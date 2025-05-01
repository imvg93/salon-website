import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaShieldAlt, FaPalette, FaRegClock, FaHeart, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const TattooIntro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#f85555] text-white px-6 py-2 rounded-lg hover:bg-[#e64545] transition-all duration-300 shadow-lg flex items-center gap-2 backdrop-blur-sm bg-opacity-90"
          >
            <FaArrowLeft className="w-4 h-4" />
            Catwalk
          </motion.button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <Image
          src="/images/tattoo-hero.jpg"
          alt="Tattoo Art"
          fill
          className="object-cover transform scale-105"
          priority
        />
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Welcome to Our Tattoo Studio
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            >
              Where Art Meets Skin: Your Journey to Self-Expression Begins Here
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-lg text-[#f85555] font-semibold">
                ✨ Exclusive to our Nizampet Branch ✨
              </p>
              <Link href="/appointments">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(248, 85, 85, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#f85555] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e64545] transition-all duration-300 shadow-lg"
                >
                  Book Your Consultation
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-50" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-[#f85555] transition-all duration-300"
            >
              <div className="bg-[#f85555]/10 p-4 rounded-lg inline-block mb-4">
                <FaShieldAlt className="w-12 h-12 text-[#f85555]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Safety First</h3>
              <p className="text-gray-300 leading-relaxed">
                State-of-the-art sterilization equipment and single-use materials ensure your safety is our top priority at our Nizampet studio.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-[#f85555] transition-all duration-300"
            >
              <div className="bg-[#f85555]/10 p-4 rounded-lg inline-block mb-4">
                <FaPalette className="w-12 h-12 text-[#f85555]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Custom Designs</h3>
              <p className="text-gray-300 leading-relaxed">
                Our expert artists at Nizampet work with you to create unique, personalized designs that tell your story.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-[#f85555] transition-all duration-300"
            >
              <div className="bg-[#f85555]/10 p-4 rounded-lg inline-block mb-4">
                <FaRegClock className="w-12 h-12 text-[#f85555]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Expert Artists</h3>
              <p className="text-gray-300 leading-relaxed">
                Visit our Nizampet branch to experience the work of our skilled tattoo artists with years of experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Visit Our Tattoo Studio
            </h2>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <div className="flex items-center justify-center gap-4 mb-6">
                <FaMapMarkerAlt className="w-8 h-8 text-[#f85555]" />
                <h3 className="text-2xl font-semibold">Nizampet Branch</h3>
              </div>
              <p className="text-gray-300 text-lg mb-4">
                Sreekrutha Sadan, Beside HP petrol, Nizampet
              </p>
              <p className="text-gray-300">
                Open Daily: 10:00 AM - 8:00 PM
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          >
            Your Tattoo Journey at Nizampet
          </motion.h2>
          <div className="space-y-12">
            {[
              {
                number: "1",
                title: "Consultation",
                description: "Visit our Nizampet studio to meet with our artists and discuss your ideas, placement, and design preferences."
              },
              {
                number: "2",
                title: "Design Creation",
                description: "Our Nizampet artists create a custom design based on your consultation and preferences."
              },
              {
                number: "3",
                title: "Tattoo Session",
                description: "Your design comes to life with precision and care in our comfortable Nizampet studio environment."
              },
              {
                number: "4",
                title: "Aftercare",
                description: "Detailed aftercare instructions and support to ensure proper healing, with follow-up care available at our Nizampet location."
              }
            ].map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-6 group"
              >
                <div className="bg-[#f85555] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#f85555] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-50" />
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Ready to Start Your Tattoo Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Visit our Nizampet branch to book a consultation with our expert artists and bring your vision to life.
            </p>
            <Link href="/appointments">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(248, 85, 85, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#f85555] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#e64545] transition-all duration-300 shadow-lg"
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