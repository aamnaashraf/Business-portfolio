'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="bg-black text-gray-100 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-0 pb-12 md:pt-16 md:pb-16 relative" // Changed from pt-2 pb-16 md:pt-24 md:pb-20
      >
        {/* Animated gradient background */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black bg-[length:200%_200%]"
        />

        <div className="container mx-auto px- relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-400">Contact</span> Us
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center mt-4" // Added mt-4 for paragraph spacing
          >
            Have a project in mind or want to discuss potential collaboration? Reach out to our team.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-2 md:py-16 relative" // Changed from py-2 md:py-20
      >
        <div className="container mx-auto px-5 max-w-4xl">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative"
          >
            {/* Glowing border animation */}
            <motion.div
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-transparent to-purple-600 rounded-2xl opacity-20 blur-sm"
            />
            
            <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-xl p-8 md:p-10 border border-gray-800 overflow-hidden">
              <motion.h2
                whileHover={{ x: 5 }}
                className="text-3xl md:text-4xl font-bold mb-2 text-purple-300"
              >
                Get In Touch
              </motion.h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative"
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <motion.div
                    whileHover={{
                      boxShadow: "0 0 0 2px rgba(126, 34, 206, 0.5)"
                    }}
                    className="relative"
                  >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative"
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <motion.div
                    whileHover={{
                      boxShadow: "0 0 0 2px rgba(126, 34, 206, 0.5)"
                    }}
                    className="relative"
                  >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative"
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <motion.div
                    whileHover={{
                      boxShadow: "0 0 0 2px rgba(126, 34, 206, 0.5)"
                    }}
                    className="relative"
                  >
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    ></textarea>
                  </motion.div>
                </motion.div>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(126, 34, 206, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-4 rounded-lg font-medium text-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Info Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 md:py-20 bg-gradient-to-b from-black to-purple-900/10"
      >
        <div className="container mx-auto px-5">
          <motion.h2
            whileHover={{ x: 5 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-300"
          >
            Other Ways to Connect
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Email Us",
                value: "codentech744@gmail.com",
                icon: "✉️",
                action: "mailto:codentech744@gmail.com"
              },
              {
                title: "Call Us",
                value: "03342570180",
                icon: "📞",
                action: "tel:03342570180"
              },
              {
                title: "Visit Us",
                value: "Karachi,Pakistan",
                icon: "🏢",
                action: "https://maps.google.com"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -5,
                  rotateX: 3,
                  rotateY: -3
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transformPerspective: 1000
                }}
                className="relative group"
              >
                {/* Continuous glowing border animation */}
                <motion.div
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    boxShadow: [
                      "0 0 8px rgba(126, 34, 206, 0.2)",
                      "0 0 15px rgba(126, 34, 206, 0.4)",
                      "0 0 8px rgba(126, 34, 206, 0.2)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-1 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 blur-sm group-hover:opacity-30"
                />
                
                <a 
                  href={item.action} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-purple-400/40 h-full flex flex-col items-center text-center transition-all"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.value}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default ContactPage