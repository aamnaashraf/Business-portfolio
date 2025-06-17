'use client'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaFigma, FaAws, FaDocker } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiAdobexd, SiGraphql, SiFirebase, SiPostgresql } from 'react-icons/si'

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React", icon: <FaReact />, level: 90, colorClass: "text-blue-400", bgClass: "bg-blue-400" },
        { name: "Next.js", icon: <SiNextdotjs />, level: 95, colorClass: "text-white", bgClass: "bg-white" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 98, colorClass: "text-cyan-400", bgClass: "bg-cyan-400" },
        { name: "TypeScript", icon: <SiTypescript />, level: 90, colorClass: "text-blue-600", bgClass: "bg-blue-600" }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", icon: <FaNodeJs />, level: 75, colorClass: "text-green-300", bgClass: "bg-green-300" },
        { name: "GraphQL", icon: <SiGraphql />, level: 70, colorClass: "text-indigo-300", bgClass: "bg-indigo-300" },
        { name: "Firebase", icon: <SiFirebase />, level: 75, colorClass: "text-yellow-200", bgClass: "bg-yellow-200" },
          { name: "PostgreSQL", icon: <SiPostgresql />, level: 68, colorClass: "text-blue-300", bgClass: "bg-blue-300" } 
      ]
    },
    {
      category: "Cloud & Design",
      items: [
        { name: "AWS", icon: <FaAws />, level: 70, colorClass: "text-orange-300", bgClass: "bg-orange-300" },
        { name: "Figma", icon: <FaFigma />, level: 85, colorClass: "text-purple-500", bgClass: "bg-purple-500" },
        { name: "Adobe XD", icon: <SiAdobexd />, level: 75, colorClass: "text-cyan-500", bgClass: "bg-cyan-500" },
          { name: "Docker", icon: <FaDocker />, level: 72, colorClass: "text-blue-400", bgClass: "bg-blue-400" } 
      ]
    }
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-900 rounded-full filter blur-[100px] opacity-10"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-900 rounded-full filter blur-[100px] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Our <span className="text-purple-400">Technical Skills</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Mastering the tools and technologies that power modern digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                rotateZ: [0, 2, -2, 0],
                transition: { duration: 0.5 }
              }}
              className="relative group"
            >
              {/* Glowing Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
              
              {/* Skill Card */}
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 relative overflow-hidden h-full group-hover:border-purple-400 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-center text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                  {skillCategory.category}
                </h3>
                
                <div className="space-y-5">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      whileHover={{ 
                        x: 5,
                        transition: { duration: 0.2 }
                      }}
                      className="mb-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <motion.div 
                            whileHover={{ scale: 1.2 }}
                            className={`w-8 h-8 flex items-center justify-center mr-3 ${skill.colorClass}`}
                          >
                            {skill.icon}
                          </motion.div>
                          <span className="font-medium text-white">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                          className={`h-2 rounded-full ${skill.bgClass}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                  <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-purple-500 filter blur-xl"></div>
                  <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-blue-500 filter blur-xl"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h4 className="text-lg font-medium text-gray-300 mb-6">
            And many more technologies in our stack:
          </h4>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {['JavaScript', 'HTML5', 'CSS3', 'Git', 'REST APIs', 'MongoDB', 'Express', 'Redux'].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ 
                  scale: 1.1,
                  y: -3,
                  boxShadow: "0 0 15px rgba(126, 34, 206, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 text-gray-200 px-4 py-2 rounded-full text-sm border border-gray-700 hover:border-purple-400 transition-all duration-200 relative overflow-hidden"
              >
                <span className="relative z-10">{tech}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection