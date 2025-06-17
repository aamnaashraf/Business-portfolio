'use client'
import { motion } from 'framer-motion'
import { FaSearch, FaSketch, FaCode, FaRocket } from 'react-icons/fa'

const ProcessSection = () => {
  const steps = [
    {
      icon: <FaSearch className="text-purple-400" size={24} />,
      title: "Discovery",
      description: "We analyze your goals and requirements",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <FaSketch className="text-blue-400" size={24} />,
      title: "Design",
      description: "Crafting pixel-perfect UI/UX prototypes",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <FaCode className="text-green-400" size={24} />,
      title: "Development",
      description: "Agile coding with modern tech stacks",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <FaRocket className="text-orange-400" size={24} />,
      title: "Launch",
      description: "Deployment & ongoing support",
      color: "from-orange-500 to-orange-700"
    }
  ]

  return (
    <section className="py-16 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Deliver Excellence</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A proven 4-phase framework for flawless project execution
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Animated connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="hidden md:block absolute top-16 left-10 right-10 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 z-0"
            style={{ originX: 0 }}
          />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="text-center"
              >
                {/* Animated step card */}
                <div className={`p-1 rounded-full bg-gradient-to-br ${step.color} mb-4 mx-auto w-fit`}>
                  <div className="bg-gray-900 rounded-full p-4">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                
                {/* Step number (mobile only) */}
                <div className="md:hidden mt-3 text-purple-400 font-bold">
                  {index + 1}.
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection