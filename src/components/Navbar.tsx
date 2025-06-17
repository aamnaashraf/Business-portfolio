'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm' : 'bg-gray-900/50'} border-b border-gray-800 transition-all duration-300`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </motion.div>
              <span className="ml-2 text-xl font-bold text-white">
                Codentech<span className="text-purple-400">.</span>
              </span>
            </Link>

            {/* Desktop Navigation (hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                Home
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                Portfolio
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                Contact
              </Link>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
              >
                Get Started
              </motion.a>
            </div>

            {/* Mobile Menu Button (hidden on desktop) */}
            <button 
              className="md:hidden focus:outline-none z-50"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {!isMenuOpen ? (
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu (Full screen overlay) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-70 z-40 md:hidden"
              onClick={closeMenu}
            ></motion.div>

            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-gray-900 z-40 shadow-2xl overflow-y-auto"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-end mb-8">
                  <button 
                    onClick={closeMenu}
                    className="text-gray-400 hover:text-white p-2"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col space-y-6 flex-grow">
                  <Link 
                    href="/" 
                    className="text-2xl text-gray-300 hover:text-purple-400 py-4 border-b border-gray-800"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/services" 
                    className="text-2xl text-gray-300 hover:text-purple-400 py-4 border-b border-gray-800"
                    onClick={closeMenu}
                  >
                    Services
                  </Link>
                  <Link 
                    href="/portfolio" 
                    className="text-2xl text-gray-300 hover:text-purple-400 py-4 border-b border-gray-800"
                    onClick={closeMenu}
                  >
                    Portfolio
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-2xl text-gray-300 hover:text-purple-400 py-4 border-b border-gray-800"
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-2xl text-gray-300 hover:text-purple-400 py-4 border-b border-gray-800"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </div>

                <div className="mt-auto pt-8">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/contact"
                    className="block bg-purple-600 hover:bg-purple-700 text-white text-center py-4 rounded-lg font-medium text-xl"
                    onClick={closeMenu}
                  >
                    Get Started
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Add padding to the top of the page to account for fixed navbar */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;



