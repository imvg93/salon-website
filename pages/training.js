import { useRouter } from 'next/router';
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaStar, FaClock, FaUserGraduate, FaCertificate, FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

const courses = [
  {
    id: 1,
    title: 'Professional Hair Styling',
    image: '/images/Professional Hair Styling course training.jpg',
    description: 'Master the art of hair styling with our comprehensive course covering cutting, coloring, and styling techniques.',
    duration: '3 Months',
    level: 'Beginner to Advanced',
    features: [
      'Basic to Advanced Hair Cutting',
      'Hair Coloring & Highlights',
      'Hair Treatments & Care',
      'Client Consultation Skills',
      'Salon Management Basics'
    ],
    price: '₹25,000',
    certification: 'Certified Hair Stylist'
  },
  {
    id: 2,
    title: 'Professional Makeup Artistry',
    image: '/images/Professional Makeup Artistry course training.jpg',
    description: 'Learn professional makeup techniques for bridal, party, and special occasions with industry experts.',
    duration: '4 Months',
    level: 'All Levels',
    features: [
      'Bridal & Party Makeup',
      'HD & Airbrush Makeup',
      'Skin Preparation',
      'Color Theory & Application',
      'Client Management'
    ],
    price: '₹35,000',
    certification: 'Certified Makeup Artist'
  },
  {
    id: 3,
    title: 'Beauty Therapy & Facial',
    image: '/images/Beauty Therapy & Facial course training.jpg',
    description: 'Comprehensive training in facial treatments, skin care, and beauty therapy techniques.',
    duration: '2 Months',
    level: 'Beginner',
    features: [
      'Basic to Advanced Facials',
      'Skin Analysis',
      'Facial Equipment Usage',
      'Product Knowledge',
      'Client Care'
    ],
    price: '₹20,000',
    certification: 'Certified Beauty Therapist'
  },
  {
    id: 4,
    title: 'Complete Beauty Course',
    image: '/images/Complete Beauty Course training.jpg',
    description: 'All-in-one course covering hair, makeup, and beauty therapy for a complete beauty career.',
    duration: '6 Months',
    level: 'All Levels',
    features: [
      'Hair Styling & Treatments',
      'Professional Makeup',
      'Beauty Therapy',
      'Business Management',
      'Client Relations'
    ],
    price: '₹50,000',
    certification: 'Certified Beauty Professional'
  }
]

export default function Training() {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const router = useRouter()

  const handleExploreCourses = () => {
    router.push('/services')
  }

  return (
    <main className="min-h-screen bg-[#FFF9F0]">
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <Link href="/" className="flex items-center space-x-2">
          <FaArrowLeft className="w-4 h-4" />
          <span className="hidden md:inline">Catwalk</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-[#D4AF37] to-[#F5E6B3]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-[#2C1810]">
            <Link href="/training" className="inline-block mb-6">
              <h2 className="text-3xl font-bold text-[#2C1810] hover:text-[#29251a] transition-colors">
                Catwalk Academy
              </h2>
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-4"
            >
              Professional Beauty Training
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl"
            >
              Transform your passion into a successful career with our expert-led courses
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={handleExploreCourses}
              className="bg-[#D4AF37] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#B38B1F] transition shadow-lg"
            >
              Explore Training
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <FaUserGraduate className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#2C1810]">Expert Instructors</h3>
              <p className="text-[#5C4033]">Learn from industry professionals with years of experience</p>
            </div>
            <div className="text-center p-6">
              <FaCertificate className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#2C1810]">Certification</h3>
              <p className="text-[#5C4033]">Get certified and recognized in the beauty industry</p>
            </div>
            <div className="text-center p-6">
              <FaClock className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#2C1810]">Flexible Schedule</h3>
              <p className="text-[#5C4033]">Choose timings that work best for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C1810] mb-4">Our Courses</h2>
            <p className="text-[#5C4033] max-w-2xl mx-auto">
              Choose from our range of professional courses designed to kickstart your career in beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition border border-[#F5E6B3]"
              >
                <div className="relative h-64">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-[#2C1810]">{course.title}</h3>
                    <span className="bg-[#FFF9F0] text-[#D4AF37] px-3 py-1 rounded-full text-sm border border-[#F5E6B3]">
                      {course.duration}
                    </span>
                  </div>
                  <p className="text-[#5C4033] mb-4">{course.description}</p>
                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-[#5C4033]">
                        <FaStar className="text-[#D4AF37] mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center border-t border-[#F5E6B3] pt-4">
                    <div>
                      <span className="text-2xl font-bold text-[#D4AF37]">{course.price}</span>
                      <p className="text-sm text-[#5C4033]">{course.certification}</p>
                    </div>
                    <button 
                      onClick={() => setSelectedCourse(course)}
                      className="bg-[#D4AF37] text-white px-6 py-2 rounded-lg hover:bg-[#B38B1F] transition shadow-md"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-xl border border-[#F5E6B3]"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-[#2C1810]">{selectedCourse.title}</h3>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-[#5C4033] hover:text-[#2C1810]"
              >
                ✕
              </button>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 text-sm">
                <div className="bg-[#FFF9F0] text-[#D4AF37] px-4 py-2 rounded-lg border border-[#F5E6B3]">
                  Duration: {selectedCourse.duration}
                </div>
                <div className="bg-[#FFF9F0] text-[#D4AF37] px-4 py-2 rounded-lg border border-[#F5E6B3]">
                  Level: {selectedCourse.level}
                </div>
              </div>
              <p className="text-[#5C4033]">{selectedCourse.description}</p>
              <div>
                <h4 className="font-semibold text-[#2C1810] mb-3">Course Features</h4>
                <ul className="space-y-2">
                  {selectedCourse.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-[#5C4033]">
                      <FaStar className="text-[#D4AF37] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center border-t border-[#F5E6B3] pt-4">
                <div>
                  <span className="text-2xl font-bold text-[#D4AF37]">{selectedCourse.price}</span>
                  <p className="text-sm text-[#5C4033]">{selectedCourse.certification}</p>
                </div>
                <button className="bg-[#D4AF37] text-white px-6 py-2 rounded-lg hover:bg-[#B38B1F] transition shadow-md">
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  )
}
