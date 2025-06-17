'use client'
import { motion } from 'framer-motion'
import { FaHandshake, FaLightbulb, FaUsers, FaChartLine, FaProjectDiagram } from 'react-icons/fa'

const OtherSkillsSection = () => {
  const skills = [
    {
      icon: <FaHandshake size={20} />,
      title: "Client Relations",
      description: "Building trust through transparent communication",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <FaLightbulb size={20} />,
      title: "Problem Solving",
      description: "Innovative solutions for complex challenges",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: <FaUsers size={20} />,
      title: "Team Leadership",
      description: "Empowering teams to deliver excellence",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaChartLine size={20} />,
      title: "Business Strategy",
      description: "Tech solutions driving business growth",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaProjectDiagram size={20} />,
      title: "Project Management",
      description: "Delivering projects on time and budget",
      color: "from-red-500 to-red-600"
    }
  ]

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-purple-600 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-600 rounded-full filter blur-[100px]"></div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">Excellence</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            The human skills that make our technical expertise deliver real impact
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
                rotate: 3, // Simplified to single rotation value
                boxShadow: "0 20px 25px -5px rgba(0,0,0,0.3)"
              }}
              className="relative group"
            >
              {/* Glowing border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-xl opacity-0 group-hover:opacity-70 blur-sm transition-all duration-300`}></div>
              
              {/* Skill card */}
              <div className="relative bg-gray-900 p-6 rounded-xl border border-gray-800 h-full flex flex-col items-center text-center group-hover:border-transparent transition-all duration-300">
                {/* Animated icon */}
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10, // Simplified to single rotation value
                    transition: { duration: 0.5 }
                  }}
                  className={`mb-5 p-4 rounded-full bg-gradient-to-br ${skill.color} text-white`}
                >
                  {skill.icon}
                </motion.div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
                
                {/* Hover pulse effect */}
                <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute -top-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-r ${skill.color} opacity-20 animate-pulse`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OtherSkillsSection