import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b8e5?w=150&h=150&fit=crop&crop=face',
      content: 'DigitalPro transformed our online presence completely. Our leads increased by 400% within the first 3 months, and our ROI has been exceptional. Their team is professional, responsive, and truly understands digital marketing.',
      rating: 5,
      results: '+400% leads in 3 months',
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'E-Commerce Plus',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'Working with DigitalPro has been a game-changer for our e-commerce business. Their strategic approach to PPC and SEO helped us dominate our market. We\'ve seen consistent growth month over month.',
      rating: 5,
      results: '+250% revenue growth',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'Local Services Co.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'The team at DigitalPro doesn\'t just execute campaigns; they become true partners in your success. Their data-driven approach and transparent reporting give us complete confidence in our marketing investments.',
      rating: 5,
      results: '+180% local visibility',
    },
    {
      name: 'David Thompson',
      role: 'CMO',
      company: 'Global Brands Ltd.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      content: 'DigitalPro\'s expertise in multi-channel marketing campaigns is unmatched. They helped us reach new audiences and significantly improve our conversion rates across all platforms. Highly recommended!',
      rating: 5,
      results: '+320% conversions',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients
            <span className="gradient-text block">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with DigitalPro.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-gray-600">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <div className="bg-gradient-to-r from-primary-100 to-secondary-100 px-4 py-2 rounded-full">
                        <p className="text-sm font-semibold text-primary-700">
                          {testimonials[currentIndex].results}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Client Image */}
                <div className="text-center lg:text-right">
                  <div className="relative inline-block">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-primary-600" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors group"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-primary-600" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Leading Brands
            </h3>
            <p className="text-gray-600">
              Join hundreds of successful businesses that trust DigitalPro
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              'TechStart', 'GlobalCorp', 'InnovateLab', 'NextGen', 'FutureFlow', 'BrandForce'
            ].map((brand, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-500 font-bold text-sm">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials