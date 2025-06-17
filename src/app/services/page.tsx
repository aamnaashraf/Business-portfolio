'use client'
import { motion, Variants } from 'framer-motion'
import { ServiceItem } from '@/types'

const ServicesSection = () => {
  const services: ServiceItem[] = [
    {
      title: "Frontend Development",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: "Pixel-perfect frontend implementations with React, Next.js and modern frameworks.",
      features: ["Responsive Design", "Performance Optimization", "Cross-browser Compatibility", "Web Accessibility"]
    },
    {
      title: "UI/UX Design",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      description: "Beautiful interfaces that enhance user experience and drive engagement.",
      features: ["User Research", "Wireframing & Prototyping", "Interaction Design", "Usability Testing"]
    },
    {
      title: "E-commerce Solutions",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      description: "Complete online store solutions to grow your business revenue.",
      features: ["Shopify/WordPress", "Payment Integration", "Inventory Management", "Conversion Optimization"]
    },
    {
      title: "Mobile Responsiveness",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      description: "Flawless experiences across all devices and screen sizes.",
      features: ["Mobile-first Approach", "Touch Optimization", "Responsive Breakpoints", "Performance Tuning"]
    },
    {
      title: "Business Websites",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: "Professional websites that establish your brand and attract customers.",
      features: ["Lead Generation", "SEO Strategy", "Content Management", "Analytics Integration"]
    },
    {
      title: "Portfolio Design",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      description: "Showcase your work with elegant, professional portfolio designs.",
      features: ["Gallery Layouts", "Case Studies", "Testimonial Integration", "Contact Systems"]
    }
  ]

   // Refined animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  }

  const item: Variants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.5
      }
    }
  }

  return (
    <section id="services" className="py-14 md:py-18 lg:py-22 bg-black relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-900 rounded-full filter blur-[90px] opacity-[0.08]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600 rounded-full filter blur-[100px] opacity-[0.06]"></div>
      </div>
      
      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        {/* Elegant header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8"
        >
          <span className="inline-block mb-3 text-xl mt-0 font-medium tracking-widest text-purple-400 uppercase">
            Our Services
          </span>
          <p className="text-xl sm:text-3xl md:text-[2.5rem] font-semibold mb-2 text-white leading-tight">
            Transformative <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-400">Solutions</span> <br className="hidden sm:block"/> Tailored For You
          </p>
          
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -6,
                rotateX: 1.5,
                rotateY: -1.5,
                boxShadow: "0 15px 30px -10px rgba(126, 34, 206, 0.25)"
              }}
              className="group relative bg-gray-800/70 rounded-xl border border-gray-700/50 hover:border-purple-400/40 backdrop-blur-sm transition-all duration-400 hover:bg-gray-800/90"
              style={{
                transformStyle: "preserve-3d",
                transformPerspective: 800
              }}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 border border-transparent group-hover:border-purple-500/40 rounded-xl transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6 md:p-7 relative z-10 h-full flex flex-col">
                <motion.div
                  whileHover={{ 
                    rotate: 10,
                    scale: 1.08
                  }}
                  className="w-12 h-12 bg-gradient-to-br from-purple-900/80 to-purple-700/90 rounded-lg flex items-center justify-center text-purple-200 mb-5 shadow-lg transition-all duration-300 group-hover:shadow-purple-500/20"
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-xl md:text-[1.35rem] font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300/90 mb-5 text-sm md:text-[0.95rem] leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
                
                <ul className="space-y-2.5 mt-auto">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      whileHover={{ 
                        x: 6,
                        color: "#f3e8ff"
                      }}
                      className="flex items-center text-purple-200/90 text-sm md:text-[0.92rem] group-hover:text-purple-100 transition-all duration-250"
                    >
                      <svg className="w-4 h-4 mr-2.5 flex-shrink-0 text-purple-400/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* Animated progress indicator */}
                <motion.div 
                  whileHover={{ width: "100%" }}
                  className="h-[2px] bg-gradient-to-r from-purple-500/80 via-purple-400 to-purple-300/80 w-3/4 mx-auto mt-6 rounded-full transition-all duration-600 ease-out"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final elegant touch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Every pixel perfected, every interaction intentional - let's create something extraordinary together.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection