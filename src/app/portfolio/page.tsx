'use client'

import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Image from 'next/image'
import React from 'react'

const ProjectsPage = () => {
  const projects = [
    {
      title: "Modern Furniture E-Commerce",
      description: "A full-featured furniture store with product filtering, cart functionality, and CMS integration.",
      tech: ["Next.js", "Tailwind CSS", "Sanity", "TypeScript"],
      image: "/furniture website.jpg",
      demoLink: "https://final-hackathon-alpha-six.vercel.app/",
      codeLink: "https://github.com/aamnaashraf/final-hackathon.git"
    },
    {
      title: "Tour Booking Platform",
      description: "Interactive tour booking website with date selection, payment integration, and user reviews.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/tour website.PNG",
      demoLink: "https://simple-website-with-tailwind-css.vercel.app/",
      codeLink: "https://github.com/aamnaashraf/simple-website-with-tailwind-CSS.git"
    },
    {
      title: "Food E-Commerce",
      description: "Online ordering system with real-time updates, user accounts, and delivery tracking.",
      tech: ["Next.js", "Firebase", "Redux", "Tailwind CSS"],
      image: "/e commerce.jpeg",
      demoLink: "https://market-place-hacks09.vercel.app/",
      codeLink: "https://github.com/WajahatAli3218664/MarketPlace-Hacks09"
    },
    {
      title: "AI Chatbot Assistant",
      description: "Python-based AI agent that understands natural language queries and provides intelligent responses.",
      tech: ["Python", "NLTK", "TensorFlow", "Streamlit"],
      image: "/AI chatbot.PNG",
      demoLink: "https://multi-agents-ai-production.up.railway.app/",
      codeLink: "https://github.com/aamnaashraf/Multi-agents-AI.git"
    },
    {
      title: "Tech Blog Platform",
      description: "Modern blogging platform with markdown support, tags, and author profiles.",
      tech: ["Next.js", "Tailwind CSS", "GraphQL", "Hygraph"],
      image: "/blog.PNG",
      demoLink: "https://dynamic-blog-project.vercel.app/",
      codeLink: "https://github.com/aamnaashraf/Dynamic-blog-project.git"
    },
    {
      title: "To-Do Application",
      description: "Organize your day by adding tasks and descriptions to stay on track.",
      tech: ["HTML", "CSS", "Javascript"],
      image: "/to-do.jpeg",
      demoLink: "https://todo-application-giaic.vercel.app/",
      codeLink: "https://github.com/WajahatAli3218664/TodoApplication-GIAIC"
    },
    {
      title: "Facebook Clone",
      description: "Social media platform with posts, comments, likes, and user profiles.",
      tech: ["React", "Firebase", "Material UI", "Redux"],
      image: "/0ad135e0-8e88-489a-a788-39a57d47b316.jpg",
      demoLink: "https://facebook-clone-git-main-wajahat-alis-projects-0e7870c5.vercel.app/",
      codeLink: "https://github.com/WajahatAli3218664/Facebook-Clone"
    },
    {
      title: "Modern Clothing E-Commerce",
      description: "A full-featured online clothing store with product filtering, cart functionality, and secure checkout.",
      tech: ["Next.js", "Tailwind CSS", "Stripe", "Sanity CMS"],
      image: "/clothing.jpeg",
      demoLink: "https://ecommerce-website25.vercel.app/",
      codeLink: "https://github.com/WajahatAli3218664/EcommerceWebsite25"
    },
    {
      title: "Pizza E-Commerce",
      description: "Online ordering system with real-time updates, user accounts, and delivery tracking.",
      tech: ["Next.js", "Tailwind CSS", "Redux"],
      image: "/pizza.jpeg",
      demoLink: "https://pizza-website24.vercel.app/",
      codeLink: "https://github.com/WajahatAli3218664/PizzaWebsite24"
    }
  ]

  return (
    <div className="bg-black text-gray-100 min-h-screen overflow-hidden">
      {/* Hero Section - Reduced padding */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-10 pb-8 md:pt-14 md:pb-12 relative"
      >
        {/* More intense gradient background */}
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
          className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 to-black bg-[length:200%_200%]"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-400">Our</span> Portfolio
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center mt-2 mb-6"
          >
            Explore our collection of innovative projects showcasing our expertise across various technologies.
          </motion.p>
        </div>
      </motion.section>

      {/* Projects Grid with enhanced effects */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-8 md:py-12 relative"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -15,
                  rotateX: 8,
                  rotateY: -8,
                  scale: 1.03
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transformPerspective: 800
                }}
                className="relative group"
              >
                {/* Enhanced glowing border animation */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    boxShadow: [
                      "0 0 12px rgba(167, 139, 250, 0.4)",
                      "0 0 24px rgba(167, 139, 250, 0.6)",
                      "0 0 12px rgba(167, 139, 250, 0.4)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-1 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 blur-md group-hover:opacity-70"
                />
                
                <div className="relative h-full bg-gradient-to-b from-gray-900 to-black rounded-xl p-5 border border-gray-800 overflow-hidden transition-all min-h-[420px]">
                  {/* Project Image - Updated with Next.js Image component */}
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gray-800/50 border border-gray-700">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                      style={{ objectFit: 'contain' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/projects/default-project.jpg'
                      }}
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-0.5 bg-purple-900/40 text-purple-300 text-xs rounded-full border border-purple-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex justify-between mt-auto pt-3 border-t border-gray-800">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-300 hover:text-purple-200 transition-colors text-sm"
                    >
                      <FiExternalLink className="mr-1.5" />
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-gray-300 transition-colors text-sm"
                    >
                      <FiGithub className="mr-1.5" />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 bg-gradient-to-b from-black to-purple-900/20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            whileHover={{ scale: 1.02 }}
            className="text-2xl md:text-3xl font-bold mb-4 text-purple-300"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            whileHover={{ x: 3 }}
            className="text-gray-300 max-w-2xl mx-auto mb-6 text-sm md:text-base"
          >
            Let's turn your ideas into reality with our expert development team.
          </motion.p>
          <motion.a
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 5px 20px rgba(167, 139, 250, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2.5 rounded-lg font-medium"
          >
            Get In Touch
          </motion.a>
        </div>
      </motion.section>
    </div>
  )
}

export default ProjectsPage