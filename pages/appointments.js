import BookingForm from '../components/BookingForm';
import Link from 'next/link';
import { FaArrowLeft, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Appointments = () => {
  return (
    <div className="min-h-screen bg-[#1e1b4b] text-white">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ff3366]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ff3366]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              <span className="text-[#ff3366]">Catwalk</span>
              <span className="block text-2xl md:text-3xl font-light text-gray-400 mt-2">
                Hair and Beauty Parlour
              </span>
              <span className="block text-xl text-[#ff3366] mt-4">
                Book Your Appointment
              </span>
            </h1>
          </div>
          <Link 
            href="/" 
            className="group flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300"
          >
            <FaArrowLeft className="w-4 h-4 text-[#ff3366] group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#ff3366]" />
                Our Locations
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-[#ff3366] mb-2">Nizampet Branch</h4>
                  <p className="text-gray-400">
                    Sreekrutha Sadan, Beside HP petrol,<br />
                    Nizampet, Hyderabad
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-[#ff3366] mb-2">Kukatpally Branch</h4>
                  <p className="text-gray-400">
                    K P H B Phase 3, Near MIG bustop,opp K.s bakers <br />
                    Kukatpally, Hyderabad
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="font-medium text-[#ff3366] mb-2 flex items-center gap-2">
                  <FaClock className="text-[#ff3366]" />
                  Working Hours
                </h4>
                <p className="text-gray-400">
                  Daily: 10:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments; 