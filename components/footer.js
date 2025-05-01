import Link from 'next/link'
import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#2c2a10f8] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* KPHB Branch */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#D4AF37]">Catwalk Ladies Salon - KPHB</h3>
            <p className="text-gray-300">
              Experience luxury and professional beauty services at our KPHB branch. 
              Specializing in hair styling, makeup, and beauty treatments, we bring 
              out your best features with our expert team and premium products.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#D4AF37]" />
                <span>JNTU to Hitech city road, Kukatpally</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-[#D4AF37]" />
                <span>+91 99596 73434</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-[#D4AF37]" />
                <span>10:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Nizampet Branch */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#D4AF37]">Catwalk Unisex Salon - Nizampet</h3>
            <p className="text-gray-300">
              Our Nizampet branch offers a complete range of beauty and grooming services 
              for everyone. From trendy haircuts to rejuvenating treatments, we ensure 
              you leave looking and feeling your best.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#D4AF37]" />
                <span>Sreekrutha Sadan, Beside HP petrol, Nizampet</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-[#D4AF37]" />
                <span>+91 99596 73434</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-[#D4AF37]" />
                <span>10:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Catwalk Hair and Beauty Salons. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
