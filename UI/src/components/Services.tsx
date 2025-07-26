import React from 'react'
import { motion } from 'framer-motion'
import { Search, Share2, PenTool, BarChart3, Mail, ShoppingCart } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Improve your website\'s visibility and ranking on search engines with our proven SEO strategies.',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage with your audience across all major social platforms.',
      features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Create compelling content that attracts, engages, and converts your target audience.',
      features: ['Blog Writing', 'Video Content', 'Infographics', 'Content Strategy'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: BarChart3,
      title: 'Pay-Per-Click Advertising',
      description: 'Drive immediate traffic and conversions with targeted PPC campaigns across platforms.',
      features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'ROI Tracking'],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with personalized email marketing campaigns.',
      features: ['Email Automation', 'List Building', 'A/B Testing', 'Performance Analytics'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Marketing',
      description: 'Boost your online store sales with specialized e-commerce marketing strategies.',
      features: ['Product Optimization', 'Shopping Ads', 'Conversion Rate Optimization', 'Retargeting'],
      color: 'from-teal-500 to-teal-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  }

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Digital Marketing
            <span className="gradient-text block">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital marketing solutions to help your business grow online. 
            From SEO to social media, we've got you covered.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors group-hover:underline">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Not sure which service is right for you? Let's discuss your needs.
          </p>
          <button className="btn-primary">
            Get Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services