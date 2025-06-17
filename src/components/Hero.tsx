'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

const HeroSection = () => {
  const [currentService, setCurrentService] = useState(0);
  const services = [
    "Web Development",
    "UI/UX Design",
    "E-commerce Solutions",
    "SEO Optimization",
    "Mobile Responsive Design",
    "Web Applications",
    "CMS Development"
  ];

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "97%", label: "Client Satisfaction" },
    { value: "1+", label: "Years Experience" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 overflow-hidden"
        >
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-purple-600 rounded-full filter blur-[100px] opacity-20 mix-blend-multiply"
          ></motion.div>
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-purple-800 rounded-full filter blur-[120px] opacity-20 mix-blend-multiply"
          ></motion.div>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
            {/* Content Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-0">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center lg:items-start"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Elevate Your Business With{' '}
                  <motion.span 
                    className="text-purple-400"
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: "0 0 10px rgba(168, 85, 247, 0.7)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Codentech
                  </motion.span>
                </h1>
                
                {/* Animated services */}
                <div className="h-16 md:h-20 mb-4 overflow-hidden">
                  <motion.div
                    key={currentService}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl sm:text-2xl md:text-3xl font-medium text-purple-300"
                  >
                    {services[currentService]}
                  </motion.div>
                </div>

                <motion.p 
                  className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  We create <span className="text-purple-300 font-medium">custom digital solutions</span> that drive growth. Our team delivers <span className="text-purple-300 font-medium">high-quality websites</span> and <span className="text-purple-300 font-medium">web applications</span> tailored to your business needs.
                </motion.p>

                {/* Stats Section */}
                <motion.div 
                  className="grid grid-cols-3 gap-3 mb-8 max-w-md mx-auto lg:mx-0"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ 
                        y: -3,
                        backgroundColor: 'rgba(126, 34, 206, 0.1)'
                      }}
                      className="bg-gray-900 bg-opacity-50 p-3 rounded-lg border border-gray-800 transition-all duration-300"
                    >
                      <p className="text-xl md:text-2xl font-bold text-purple-400">{stat.value}</p>
                      <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <motion.a
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(126, 34, 206, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    href="/services"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Explore Services
                  </motion.a>
                  <motion.a
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(126, 34, 206, 0.2)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    href="/contact"
                    className="border-2 border-purple-600 text-purple-400 hover:text-purple-300 hover:bg-purple-900 hover:bg-opacity-30 px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Get Free Quote
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Business Image Section */}
           
<div className="w-full lg:w-1/2 mt-4 lg:mt-0 flex justify-center">
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="relative w-full max-w-md rounded-xl overflow-hidden bg-black"
  >
      <motion.div
      whileHover={{ 
        scale: 1.05,                     // Increased from 1.03 to 1.05
        boxShadow: "0 0 30px rgba(126, 34, 206, 0.7)", // Increased glow
        zIndex: 10,                      // Added z-index
        transition: { 
          duration: 0.4,                 // Slower transition
          ease: "easeOut"                // Smoother easing
        }
      }}
      className="w-full h-full"
    >
      <Image
        src="/logo 1.jpeg"
        alt="Codentech Services"
        width={600}
        height={700}
        className="w-full h-auto object-contain rounded-xl transition-all duration-300"
        priority
        style={{ backgroundColor: 'black' }}
      />
    </motion.div>
  </motion.div>
</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <motion.div
            animate={{ 
              y: [0, 12, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="flex flex-col items-center"
          >
            <p className="text-xs sm:text-sm text-purple-300 mb-1">Scroll Down</p>
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
