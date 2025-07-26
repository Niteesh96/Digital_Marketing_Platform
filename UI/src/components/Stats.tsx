import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      number: 500,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Businesses trust us with their digital marketing',
    },
    {
      number: 300,
      suffix: '%',
      label: 'Average ROI',
      description: 'Return on investment across all campaigns',
    },
    {
      number: 50,
      suffix: 'M+',
      label: 'Leads Generated',
      description: 'Quality leads delivered to our clients',
    },
    {
      number: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Client retention and satisfaction rate',
    },
  ]

  const Counter = ({ number, suffix, isInView }: { number: number; suffix: string; isInView: boolean }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isInView) return

      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = number / steps
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const newCount = Math.min(increment * currentStep, number)
        setCount(Math.floor(newCount))

        if (currentStep >= steps) {
          clearInterval(timer)
          setCount(number)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }, [number, isInView])

    return (
      <span className="text-4xl lg:text-5xl font-bold text-white">
        {count}{suffix}
      </span>
    )
  }

  return (
    <section className="section bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(48)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
                className="bg-white rounded-full w-2 h-2"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Numbers That Speak
            <span className="block text-white/90">Our Success</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We measure our success by the results we deliver for our clients. 
            Here are the numbers that showcase our impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <div className="mb-4">
                  <Counter number={stat.number} suffix={stat.suffix} isInView={isInView} />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {stat.label}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Award-Winning Digital Marketing Agency
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <p className="text-white/90 font-medium">Best Digital Agency 2024</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <p className="text-white/90 font-medium">Top Rated on Google</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <p className="text-white/90 font-medium">Fastest Growing Agency</p>
              </div>
            </div>
            
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Recognized by industry leaders for our innovative approach and exceptional results 
              in digital marketing campaigns across various industries.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats