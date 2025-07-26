import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react'

const CTA = () => {
  return (
    <section id="contact" className="section bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full transform -translate-x-40 translate-y-40"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform
              <span className="block text-white/90">Your Business?</span>
            </h2>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Don't let your competitors get ahead. Start your digital marketing journey today 
              and watch your business grow exponentially with our proven strategies.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-white/90">Free strategy consultation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-white/90">Custom marketing plan</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-white/90">No long-term contracts</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors group flex items-center justify-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                View Our Work
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  How can we help you?
                </label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option value="" className="text-gray-900">Select a service</option>
                  <option value="seo" className="text-gray-900">Search Engine Optimization</option>
                  <option value="ppc" className="text-gray-900">Pay-Per-Click Advertising</option>
                  <option value="social" className="text-gray-900">Social Media Marketing</option>
                  <option value="content" className="text-gray-900">Content Marketing</option>
                  <option value="email" className="text-gray-900">Email Marketing</option>
                  <option value="ecommerce" className="text-gray-900">E-commerce Marketing</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-primary-600 px-6 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm mb-4">Or reach out directly:</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-white/60" />
                  <span className="text-white/90">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-white/60" />
                  <span className="text-white/90">hello@digitalpro.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-white/60" />
                  <span className="text-white/90">Live chat available 24/7</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Urgency Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Limited Time Offer
            </h3>
            <p className="text-white/80 text-lg mb-6">
              Book your free consultation this month and receive a complimentary 
              competitor analysis report worth $500!
            </p>
            <div className="flex items-center justify-center space-x-8 text-white/60">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">48</div>
                <div className="text-sm">Hours Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">5★</div>
                <div className="text-sm">Average Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA