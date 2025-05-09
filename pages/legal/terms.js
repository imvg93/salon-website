import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="flex items-center space-x-2">
            <FaArrowLeft className="w-4 h-4" />
            <span className="hidden md:inline">Catwalk</span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-right">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">1. Acceptance of Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">2. Use License</h2>
              <p>Permission is granted to temporarily access the materials (information or software) on Catwalk's website for personal, non-commercial transitory viewing only.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">3. Appointment Booking</h2>
              <ul className="list-disc ml-6 mt-2">
                <li>Appointments must be booked in advance</li>
                <li>Cancellations require 24-hour notice</li>
                <li>Late arrivals may result in service modification</li>
                <li>We reserve the right to refuse service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">4. Payment Terms</h2>
              <ul className="list-disc ml-6 mt-2">
                <li>Payment is due at the time of service</li>
                <li>We accept cash and major credit cards</li>
                <li>Prices are subject to change without notice</li>
                <li>Gift cards are non-refundable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">5. Service Guarantee</h2>
              <p>We strive to provide the highest quality service. If you are not satisfied with your service, please notify us within 48 hours of your appointment.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">6. Limitation of Liability</h2>
              <p>Catwalk shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">7. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. We will notify users of any changes by updating the date at the bottom of this page.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">8. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p className="mt-2">Email: terms@catwalk.com</p>
              <p>Phone: [Your Phone Number]</p>
            </section>

            <section>
              <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 