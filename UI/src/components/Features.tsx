import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, Target, Users, BarChart, Clock } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Data-Driven Approach',
      description: 'Every decision is backed by comprehensive analytics and market research to ensure maximum ROI.',
    },
    {
      icon: Zap,
      title: 'Fast Implementation',
      description: 'Get your campaigns live quickly with our streamlined processes and experienced team.',
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Reach your ideal customers with laser-focused targeting across all digital channels.',
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Work with a dedicated team of digital marketing experts committed to your success.',
    },
    {
      icon: BarChart,
      title: 'Transparent Reporting',
      description: 'Get detailed reports and insights into your campaign performance with real-time dashboards.',
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring and optimization to ensure your campaigns perform at their best.',
    },
  ]

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose
              <span className="gradient-text block">DigitalPro?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We combine cutting-edge technology with proven strategies to deliver exceptional results 
              for your digital marketing campaigns. Here's what sets us apart from the competition.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">Over 500 successful campaigns with an average ROI increase of 300%.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600">Certified professionals with years of experience in digital marketing.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <button className="btn-primary">Start Your Journey</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Proven Process
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your digital marketing success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your business, goals, and target audience' },
              { step: '02', title: 'Strategy', description: 'Create a customized digital marketing strategy' },
              { step: '03', title: 'Execute', description: 'Implement campaigns across all relevant channels' },
              { step: '04', title: 'Optimize', description: 'Continuously monitor and improve performance' },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h4>
                <p className="text-gray-600">{process.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-secondary-200 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features