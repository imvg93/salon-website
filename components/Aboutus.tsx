import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/AboutUs.css";

const timelineData = [
  { year: "2011", event: "Opened our very first salon." },
  { year: "2014", event: "Organized our first bridal beauty and fashion week." },
  { year: "2017", event: "Hosted our first annual beauty and fashion showcase event." },
  { year: "2020", event: "Crossed 20,000+ satisfied clients milestone." },
  { year: "2024", event: "Expanded to 2 new locations." },
  { year: "2025", event: "Launched advanced hair and beauty courses." },
  { year: "Today", event: "Still growing with love, trust, and your continued support ❤️" },
];

const AboutUs = () => {
  return (
    <section id="about" className="relative bg-gradient-to-br from-purple-50 to-white py-20 px-6 sm:px-10 md:px-16 font-sans">
      
      {/* Home Button (Sticky Top Left) */}
      <div className="right-0">
        <Link href="/">
          <button className="catwalk-button">
            Catwalk
          </button>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto space-y-20">

        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 tracking-tight">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Empowering Beauty & Confidence Since 2011</p>
        </div>

        {/* Our Story */} 
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Our Story</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our journey began in 2011 with a salon and a big dream — to make people feel confident, beautiful, and empowered.
              Over the years, we've evolved into a full-service beauty destination and a trusted training center for aspiring beauticians.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/images/ourjourney.jpg"
              alt="Our Story"
              className="w-full h-72 object-cover"
            />
          </div>
        </motion.div>

        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-purple-700">What We Do</h3>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
            <li className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition">
              💇‍♀️ Salon Services: Haircuts, styling, coloring, facials, and more.
            </li>
            <li className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition">
              🎓 Beauty Training: Certified courses in hair, makeup, skincare, and salon management.
            </li>
          </ul>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-purple-700">Why Choose Us</h3>
          <ul className="grid md:grid-cols-2 gap-5 text-gray-700 text-base">
            <li className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
              ✅ Over a decade of experience delivering beauty excellence.
            </li>
            <li className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
              🌟 Thousands of happy clients who inspire our growth.
            </li>
            <li className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
              ✂️ Modern techniques with a personal, caring touch.
            </li>
            <li className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
              👩‍🏫 Certified trainers helping future beauty professionals thrive.
            </li>
          </ul>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-purple-700">Our Journey</h3>
          <div className="relative border-l-4 border-purple-600 pl-8 space-y-6">
            {timelineData.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-11 top-1 w-5 h-5 bg-purple-600 rounded-full border-4 border-white shadow"></div>
                <h4 className="font-semibold text-lg text-gray-800">{item.year}</h4>
                <p className="text-gray-700 text-base">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-purple-700 text-center">Our Moments</h3>
          <div className="gallery-grid">
            {[1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="gallery-item"
              >
                <img
                  src={`/images/moment-${index}.jpg`}
                  alt={`Gallery image ${index}`}
                  className="gallery-image"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-purple-700 text-center">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Charitha Sri",
                text: "The best salon experience ever! Professional team and amazing results.",
                image: "/images/testimonial-1.jpg"
              },
              {
                name: "Sai Kavya",
                text: "Their training program transformed my career. Highly recommended!",
                image: "/images/testimonial-2.jpg"
              },
              {
                name: "rahul",
                text: "Love the attention to detail and personalized service.",
                image: "/images/testimonial-3.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className="flex items-center space-x-4 mb-4">
                 
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-3xl"
        >
          <h3 className="text-3xl font-semibold text-purple-700">Ready to Transform?</h3>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied clients who have experienced the Catwalk difference. 
            Book your appointment or enroll in our training programs today!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/appointments">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-medium px-8 py-3 rounded-full shadow-md transition duration-300"
              >
                Book Now
              </motion.div>
            </Link>
            <Link href="/training">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white hover:bg-gray-50 text-purple-700 font-medium px-8 py-3 rounded-full shadow-md transition duration-300 border-2 border-purple-700"
              >
                Explore Courses
              </motion.div>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;
