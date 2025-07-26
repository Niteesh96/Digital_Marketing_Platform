import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Users, TrendingUp } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-20 animate-bounce-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-100 rounded-full opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full opacity-10 animate-pulse"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">Trusted by 10,000+ businesses</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Grow Your Business with
              <span className="gradient-text block">Digital Marketing</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Transform your online presence with our data-driven digital marketing strategies. 
              Increase leads, boost sales, and dominate your market with our proven methods.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
            >
              <button className="btn-primary group">
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline group">
                <Play className="mr-2 w-4 h-4" />
                Watch Demo
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <Users className="w-5 h-5 text-primary-600" />
                  <span className="text-2xl font-bold text-gray-900">500+</span>
                </div>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary-600" />
                  <span className="text-2xl font-bold text-gray-900">300%</span>
                </div>
                <p className="text-sm text-gray-600">ROI Average</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <Star className="w-5 h-5 text-primary-600" />
                  <span className="text-2xl font-bold text-gray-900">4.9</span>
                </div>
                <p className="text-sm text-gray-600">Client Rating</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Campaign Performance</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Live</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg">
                    <p className="text-sm text-primary-600 font-medium">Conversions</p>
                    <p className="text-2xl font-bold text-primary-700">+247%</p>
                  </div>
                  <div className="bg-gradient-to-r from-secondary-50 to-secondary-100 p-4 rounded-lg">
                    <p className="text-sm text-secondary-600 font-medium">Revenue</p>
                    <p className="text-2xl font-bold text-secondary-700">$89.2K</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">SEO Traffic</span>
                    <span className="text-sm font-medium text-gray-900">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Social Media</span>
                    <span className="text-sm font-medium text-gray-900">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 z-20"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-700">+15 New Leads</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 z-20"
            >
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-primary-600" />
                <span className="text-xs font-medium text-gray-700">Revenue +24%</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero