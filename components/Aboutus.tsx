import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const timelineData = [
  { year: "2011", event: "Opened our very first salon." },
  { year: "2014", event: "Launched advanced hair and beauty courses." },
  { year: "2017", event: "Expanded to 2 new locations." },
  { year: "2020", event: "Crossed 10,000 satisfied clients milestone." },
  { year: "2023", event: "Introduced online learning for beauty students." },
  { year: "Today", event: "Still growing with love, trust, and your continued support ❤️" },
];

const AboutUs = () => {
  return (
    <section id="about" className="relative bg-gradient-to-br from-purple-50 to-white py-20 px-6 sm:px-10 md:px-16 font-sans">
      
      {/* Home Button (Sticky Top Left) */}
      <div className="right-0">
        <Link href="/">
          <div className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-4 py-2 rounded-full shadow-md transition duration-300">
            Home
          </div>
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
              Our journey began in 2011 with a small salon and a big dream — to make people feel confident, beautiful, and empowered.
              Over the years, we've evolved into a full-service beauty destination and a trusted training center for aspiring beauticians.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/images/our-story.jpg"
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
          <div className="relative border-l-4 border-purple-600 pl-6 space-y-6">
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-3 top-1 w-5 h-5 bg-purple-600 rounded-full border-4 border-white shadow"></div>
                <h4 className="font-semibold text-lg text-gray-800">{item.year}</h4>
                <p className="text-gray-700 text-base">{item.event}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-semibold text-purple-700">Ready to Transform?</h3>
          <p className="text-gray-700 text-lg">Book your appointment or join our training programs to begin your beauty journey with us!</p>

          {/* Book Now Button */}
          <div className="flex justify-center">
            <Link href="/appointments">
              <div className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-medium px-8 py-3 rounded-full shadow-md transition duration-300">
                Book Now
              </div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
