import { motion } from "framer-motion";
import { Scissors, Sparkles, Brush, Paintbrush, Gem } from "lucide-react";
import Link from "next/link";
import { NextPage } from "next";

const services = [
  {
    category: "Beauty Services",
    items: [
      { icon: <Scissors className="h-8 w-8 text-[#F4C430]" />, name: "Haircuts", description: "Professional haircuts tailored to your style." },
      { icon: <Sparkles className="h-8 w-8 text-[#F4C430]" />, name: "Facials", description: "Rejuvenating facials for glowing skin." },
      { icon: <Brush className="h-8 w-8 text-[#F4C430]" />, name: "Makeup", description: "Flawless makeup for all occasions." },
    ],
  },
  {
    category: "Nail Services",
    items: [
      { icon: <Paintbrush className="h-8 w-8 text-[#F4C430]" />, name: "Manicure", description: "Classic and spa manicures." },
      { icon: <Gem className="h-8 w-8 text-[#F4C430]" />, name: "Pedicure", description: "Relaxing and luxurious pedicures." },
      { icon: <Sparkles className="h-8 w-8 text-[#F4C430]" />, name: "Nail Art", description: "Custom designs and creative nail art." },
    ],
  },
];

const ServicesPage: NextPage = () => {
  return (
    <div className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition">

      {/* Animated Catwalk Home Button */}
      <div className="mb-6 text-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link
            href="/"
            className="inline-block bg-[#5b2f94] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-[#47267a] transition duration-300 ease-in-out"
          >
            Catwalk
          </Link>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[400px] bg-gradient-to-r from-[#060e37] to-[#091661] text-white">
        <section className="salon-service">
          <p className="text-5xl md:text-6xl font-extrabold tracking-wide">
            Catwalk Hair and Beauty Parlour [Services]
          </p>
        </section>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {services.map((section, idx) => (
          <div key={idx} className="mb-20">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[#060e37] mb-10 text-center"
            >
              {section.category}
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {section.items.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-8 flex flex-col items-center text-center group"
                >
                  <div className="flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-[#060e37] group-hover:text-[#F4C430] transition">{service.name}</h3>
                  <p className="text-gray-500 mt-3">{service.description}</p>
                  <Link href="/booking" className="mt-6" />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ServicesPage;
