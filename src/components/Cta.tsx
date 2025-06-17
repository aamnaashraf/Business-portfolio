'use client'
import { motion } from 'framer-motion'
import { FaArrowRight, FaEnvelope, FaCopy } from 'react-icons/fa'
import { toast } from 'react-hot-toast'

const CTASection = () => {
  const email = "codentech744@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    toast.success('Email copied to clipboard!', {
      position: 'bottom-center',
      style: {
        background: '#1e1e1e',
        color: '#fff',
        border: '1px solid #4a00e0'
      }
    })
  }

  return (
    <section className="relative bg-black overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-black/70 z-0"></div>
      
      {/* Animated grid pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: 'linear-gradient(to right, #4a00e0 1px, transparent 1px), linear-gradient(to bottom, #4a00e0 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Elevate</span> Your Digital Presence?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Let's turn your vision into reality. Get a free consultation with our experts today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Primary CTA Button */}
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px -5px rgba(124, 58, 237, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-3"
            >
              Start Your Project <FaArrowRight />
            </motion.a>

            {/* Email Button with Copy Functionality */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative group"
            >
              <a
                href={`mailto:${email}`}
                className="bg-gray-800 border border-gray-700 text-white px-6 py-4 rounded-lg font-medium flex items-center justify-center gap-3"
              >
                <FaEnvelope /> Email Us
              </a>

              {/* Copy email option (appears on hover) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-full mb-2 left-0 right-0 bg-gray-900 rounded-lg p-2 shadow-lg flex justify-between items-center"
              >
                <span className="text-sm">{email}</span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCopyEmail()
                  }}
                  className="text-purple-400 hover:text-purple-300 p-1"
                  aria-label="Copy email"
                >
                  <FaCopy size={14} />
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No obligation quote</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>100% confidential</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection