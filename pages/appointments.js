import BookingForm from '../components/BookingForm';
import Link from 'next/link';
import { FaArrowLeft, FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

const Appointments = () => {
  const [showLocationInfo, setShowLocationInfo] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
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

      {/* Mobile Header */}
      <div className="pt-20 px-4 pb-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            <span className="text-blue-600">Catwalk</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-2">
            Hair & Beauty Parlour
          </p>
          <p className="text-base text-blue-500 font-medium">
            Book Your Appointment
          </p>
        </div>
      </div>

      {/* Location Info Modal/Overlay */}
      {showLocationInfo && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
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

      {/* Main Content */}
      <div className="px-4 pb-20">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl">
          <BookingForm />
        </div>
      </div>

      {/* Quick Contact Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 p-4 shadow-lg">
        <div className="flex gap-3">
          <a 
            href="https://wa.me/+919959673434" 
            className="flex-1 bg-green-500 text-white py-3 px-4 rounded-xl text-center font-medium flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp className="w-5 h-5" />
            WhatsApp
          </a>
          <a 
            href="tel:+919959673434" 
            className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl text-center font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <FaPhone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Appointments; 