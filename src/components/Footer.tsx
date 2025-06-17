'use client'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const links = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const socials = [
    { icon: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=61577329857165" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/code_ntech?utm_source=qr&igsh=MXNmZndramg1bWFvMw==" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/company/codentech" },
    { icon: <FiMail />, href: "mailto:codentech744@gmail.com" },
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-black border-t border-gray-800 pt-12 pb-8 relative">
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ 
          y: -5,
          backgroundColor: '#7e22ce',
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full shadow-lg z-50"
        aria-label="Back to top"
      >
        <FaArrowUp className="text-lg" />
      </motion.button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - Now using 2 columns on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column - Full width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-2 md:col-span-1"
          >
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">
                Codentech<span className="text-purple-400">.</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
              Web solutions that elevate your business
            </p>
            <div className="flex space-x-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    y: -3,
                    color: "#a855f7",
                    transition: { duration: 0.2 }
                  }}
                  className="text-gray-400 hover:text-purple-400 text-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links Columns - Stack under brand on mobile */}
          {[
            { title: "Company", links: links.slice(0, 3) },
            { title: "Resources", links: links.slice(3) }
          ].map((column, colIndex) => (
            <motion.div
              key={colIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: colIndex * 0.1 }}
              className="col-span-1"
            >
              <h3 className="text-white font-semibold mb-4 md:mb-6 text-base md:text-lg">
                {column.title}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm md:text-base"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Column - Full width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-2 md:col-span-1"
          >
            <h3 className="text-white font-semibold mb-4 md:mb-6 text-base md:text-lg">Contact</h3>
            <address className="not-italic text-gray-400 space-y-2 md:space-y-3">
              <p className="text-sm md:text-base">Karachi, Pakistan</p>
              <a 
                href="mailto:codentech744@gmail.com" 
                className="hover:text-purple-400 transition-colors block text-sm md:text-base"
              >
                codentech744@gmail.com
              </a>
              <a 
                href="tel:+923342570180" 
                className="hover:text-purple-400 transition-colors block text-sm md:text-base"
              >
                0334 2570180
              </a>
            </address>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6 md:mb-8"
        />

        {/* Bottom Footer - Stacked on mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-xs md:text-sm"
          >
            © {currentYear} Codentech. All rights reserved.
          </motion.p>

          <div className="flex space-x-4 md:space-x-6">
            <motion.a
              whileHover={{ color: "#a855f7" }}
              href="/privacy"
              className="text-gray-500 hover:text-purple-400 text-xs md:text-sm"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              whileHover={{ color: "#a855f7" }}
              href="/terms"
              className="text-gray-500 hover:text-purple-400 text-xs md:text-sm"
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer