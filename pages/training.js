import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const courses = [
  {
    id: 1,
    title: 'Elite Hair Styling Mastery',
    image: '/images/courses/styling.jpg',
    description: 'Learn the art of hair transformations—from sleek cuts to bridal updos—with tools and techniques used by top stylists.',
    duration: '3 Months',
    level: 'All Levels',
    features: ['Precision Hair Cutting', 'Advanced Coloring', 'Bridal & Editorial Styling', 'Client Psychology'],
    price: '₹45,000'
  },
  {
    id: 2,
    title: 'Luxury Makeup Artistry Pro',
    image: '/images/courses/makeup.jpg',
    description: 'Become a certified makeup artist and create glam, bridal, and high-fashion looks that turn heads.',
    duration: '4 Months',
    level: 'Intermediate to Advanced',
    features: ['HD Bridal Makeup', 'Fashion & Editorial Looks', 'Airbrush Techniques', 'Skin Prep Mastery'],
    price: '₹55,000'
  },
  {
    id: 3,
    title: 'Skin Science & Spa Therapy',
    image: '/images/courses/skincare.jpg',
    description: 'Unlock glowing skin secrets with professional skincare treatments, facials, and client care routines.',
    duration: '2 Months',
    level: 'Beginner',
    features: ['Facial Equipment Use', 'Chemical Peels', 'Skin Analysis Tools', 'Aromatherapy Basics'],
    price: '₹35,000'
  },
  {
    id: 4,
    title: 'Creative Nail Art & Extensions',
    image: '/images/courses/nails.jpg',
    description: 'Design bold, beautiful nails using acrylics, gels, art stamping, and advanced extension methods.',
    duration: '2 Months',
    level: 'Beginner',
    features: ['Acrylic & Gel Mastery', 'Nail Sculpting', 'Sanitation Protocols', 'Luxury Nail Design'],
    price: '₹30,000'
  }
]

export default function Training() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-100 via-purple-50 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold mb-6 text-purple-800"
          >
            Build a Glamorous Career in Beauty & Wellness
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-700 mb-10"
          >
            Join our certified training programs led by industry professionals and open doors to a world of beauty success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition">
              View Courses
            </button>
            <button className="px-8 py-3 bg-white text-purple-700 font-semibold border border-purple-700 rounded-lg hover:bg-purple-100 transition">
              Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">Professional Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Carefully curated programs to transform you into a confident, certified beauty professional ready for salons, studios, or your own brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {courses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden"
              >
                <div className="relative h-52">
                  <Image
                    src={course.image}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                    <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {course.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="space-y-1 mb-5">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <FaStar className="text-yellow-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center border-t pt-4">
                    <span className="text-xl font-bold text-purple-700">{course.price}</span>
                    <button 
                      onClick={() => setSelectedCourse(course)}
                      className="text-white bg-purple-700 px-4 py-2 rounded-lg hover:bg-purple-800 transition"
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
            className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-xl"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-purple-800">{selectedCourse.title}</h3>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>
            <div className="space-y-5">
              <div className="flex justify-between text-sm bg-purple-50 p-4 rounded-lg">
                <span className="text-purple-700 font-medium">Duration: {selectedCourse.duration}</span>
                <span className="text-purple-700 font-medium">Level: {selectedCourse.level}</span>
              </div>
              <p className="text-gray-700">{selectedCourse.description}</p>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Course Features</h4>
                <ul className="space-y-2">
                  {selectedCourse.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <FaStar className="text-yellow-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center border-t pt-4">
                <span className="text-2xl font-bold text-purple-800">{selectedCourse.price}</span>
                <button className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition">
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
