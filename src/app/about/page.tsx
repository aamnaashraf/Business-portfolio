'use client'
import { motion, Variants } from 'framer-motion'

type TeamMember = {
  name: string
  role: string
  bio: string
  skills: string[]
  icon: string
}

const AboutPage = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Wajahat Ali",
      role: "Founder & AI/Cloud Lead",
      bio: "Builds mission-critical backend systems with AI/ML integration",
      skills: [
        "Python (Django/Flask)",
        "LLM & RAG Systems", 
        "AWS/Azure Cloud",
        "API Microservices",
        "Database Optimization",
        "DevOps (Docker/K8s)"
      ],
      icon: ""
    },
    {
      name: "Aamna Ashraf Rajput",
      role: "Co-Founder & Tech CEO",
      bio: "Full-stack developer who blends business strategy with hands-on coding in AI and marketing tech",
      skills: [
        "Digital Marketing (SEO/Ads)", 
        "Agentic AI Architect",
        "Next.js/React Frontend",
        "Python Automation",
        "UI/UX Design (Figma)",
        "Project Management"
      ],
      icon: ""
    },
    
    {
      name: "Muhammad Huzaifa",
      role: "Co-Founder & API Specialist",
      bio: "Full-stack developer focused on high-performance connections",
      skills: [
        "Node.js/Express", 
        "REST/GraphQL APIs",
        "React/TypeScript",
        "MongoDB/PostgreSQL",
        "WebSockets",
        "JWT/OAuth Security"
      ],
      icon: ""
    },
    {
      name: "Maryam Saleem",
      role: "Co-Founder & Creative Tech Lead",
      bio: "Unites visual design with advanced frontend engineering",
      skills: [
        "UI/UX Design",
        "CSS/SCSS Animation",
        "Three.js/WebGL",
        "Adobe Creative Suite",
        "Motion Graphics",
        "Accessibility Standards"
      ],
      icon: ""
    }
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  }

  return (
    <div className="bg-black text-gray-100 min-h-screen overflow-x-hidden">
      {/* Hero Section - About Us Heading */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-10 pb-8 md:pt-10 md:pb-2 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/10 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-400">Us</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center"
          >
            We are a passionate team of full-stack developers and designers creating cutting-edge digital solutions
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="py-14 md:py-18 relative"
      >
        <div className="container mx-auto px-5 max-w-5xl">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative bg-gradient-to-b from-gray-900 to-black rounded-xl p-8 md:p-10 border border-gray-800"
          >
            <motion.h2
              whileHover={{ x: 5 }}
              className="text-3xl md:text-4xl font-bold mb-2 text-purple-300"
            >
              Our Story
            </motion.h2>
            
                <motion.p 
  whileHover={{ scale: 1.01 }}
  className="text-gray-300 mb-6 text-lg leading-relaxed"
>
  Founded in 2025 by our team of four passionate developers, we came together with a shared vision to create exceptional digital experiences. What began as a collaborative effort among like-minded professionals has quickly grown into a dynamic web development agency.
</motion.p>

<motion.p 
  whileHover={{ scale: 1.01 }}
  className="text-gray-300 mb-6 text-lg leading-relaxed"
>
  Our strength lies in our diverse skillset - combining frontend artistry with backend expertise, UI/UX design with robust architecture. Each team member brings unique talents to the table, allowing us to tackle complex projects with comprehensive solutions. Together, we've helped businesses of all sizes establish their digital presence.
</motion.p>

<motion.p 
  whileHover={{ scale: 1.01 }}
  className="text-gray-300 text-lg leading-relaxed"
>
  As we move forward, we continue to innovate in web technologies, responsive design, and performance optimization. Our collaborative approach ensures we stay ahead of industry trends while delivering tailored solutions that exceed our clients' expectations.
</motion.p>
          </motion.div>
        </div>
      </motion.section>

    {/* Team Section */}
<motion.section 
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="py-14 md:py-18 bg-gradient-to-b from-black to-gray-900/50"
>
  <div className="container mx-auto px-5">
    <motion.h2
      variants={itemVariants}
      className="text-3xl md:text-4xl font-bold mb-12 text-center"
    >
      Our <span className="text-purple-300">Team</span>
    </motion.h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{
            y: -10,
            rotateX: 5,
            rotateY: -5,
            transition: { duration: 0.3 }
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
              opacity: [0.2, 0.4, 0.2],
              boxShadow: [
                "0 0 10px rgba(126, 34, 206, 0.3)",
                "0 0 20px rgba(126, 34, 206, 0.6)",
                "0 0 10px rgba(126, 34, 206, 0.3)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-purple-900 blur-sm group-hover:opacity-40"
          />
          
          <div className="relative bg-gray-900 rounded-xl p-8 border border-gray-800 group-hover:border-purple-400/40 h-full transition-all duration-300">
            <div className="text-5xl mb-4">{member.icon}</div>
            
            <motion.h3
              whileHover={{ x: 3 }}
              className="text-2xl font-bold mb-1 text-white"
            >
              {member.name}
            </motion.h3>
            
            <motion.p 
              whileHover={{ x: 3 }}
              className="text-purple-300 mb-4"
            >
              {member.role}
            </motion.p>
            
            <motion.p 
              whileHover={{ scale: 1.01 }}
              className="text-gray-300 mb-6"
            >
              {member.bio}
            </motion.p>
            
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(126, 34, 206, 0.2)"
                  }}
                  className="text-xs md:text-sm bg-gray-800 text-purple-200 px-3 py-1 rounded-full border border-gray-700 transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

{/* Our Approach Section */}
<motion.section 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="py-14 md:py-18"
>
  <div className="container mx-auto px-5 max-w-5xl">
    <motion.h2
      whileHover={{ x: 5 }}
      className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-300"
    >
      Our Approach
    </motion.h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          title: "Technical Excellence",
          description: "Clean, efficient code with modern architectures",
          icon: "⚙️"
        },
        {
          title: "Design First",
          description: "Beautiful interfaces that delight users",
          icon: "🎨"
        },
        {
          title: "AI Integration",
          description: "Smart solutions with cutting-edge AI",
          icon: "🧠"
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ 
            y: -5,
            rotateX: 3,
            rotateY: -3,
            transition: { duration: 0.3 }
          }}
          style={{
            transformStyle: "preserve-3d",
            transformPerspective: 800
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
            className="absolute -inset-1 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 blur-sm group-hover:opacity-30"
          />
          
          <div className="relative bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-purple-400/30 transition-all">
            <div className="text-3xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
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
  transition={{ duration: 0.6 }}
  className="py-20 text-center bg-gradient-to-b from-black to-purple-900/10 relative overflow-hidden"
>
  {/* Animated background elements */}
  <motion.div
    animate={{
      x: [0, 20, 0],
      y: [0, -15, 0]
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
    className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-purple-900/10 to-black opacity-50"
  />
  
  <div className="container mx-auto px-5 relative z-10">
    <motion.h2
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%']
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }}
      className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300 bg-[length:200%_100%]"
    >
      Ready to Build Something Amazing?
    </motion.h2>
    
    <motion.p
      whileHover={{ scale: 1.01 }}
      className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
    >
      Let's combine our expertise in full-stack development and AI to create your next digital masterpiece.
    </motion.p>
    
    <div className="flex flex-wrap justify-center gap-4">
      <motion.button
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 5px 15px rgba(126, 34, 206, 0.4)"
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-lg font-medium text-lg"
      >
        Start Your Project
      </motion.button>
      
      <motion.button
        whileHover={{ 
          scale: 1.05,
          backgroundColor: "rgba(255, 255, 255, 0.1)"
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-medium text-lg"
      >
        Meet Our Team
      </motion.button>
    </div>
  </div>
</motion.section>
    </div>
  )
}

export default AboutPage
