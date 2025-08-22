import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Built a full-stack E-Commerce platform using React, Node.js, and MongoDB, featuring secure user authentication, product catalog, shopping cart functionality, and an intuitive admin dashboard for product and order management. Designed to provide a seamless and responsive shopping experience for users with efficient tools for administrators.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express','Bootstrap'],
      image: '/1.webp'
    },
    
     {
      title: 'Mobile Platform Website',
      description: "Built a responsive website using HTML, CSS, JavaScript, and Bootstrap, enhanced with React.js for a dynamic, component-based UI. Features reusable components, smooth routing, and interactive elements for a seamless user experience across all devices.",
      technologies: ['Html', 'Css', 'Javascript', 'Bootstrap','React.js'],
      image: '/5.webp'
    },
    {
      title: 'Currency-Conveter',
      description: "Developed an intuitive Currency Converter application with a clean user interface, allowing users to quickly and accurately convert amounts between multiple currencies. Built with HTML, CSS, and JavaScript, featuring responsive design, dropdown selection for currencies, and real-time conversion for a seamless experience.",
      technologies: ['Html', 'Css', 'API Integration', 'Javascript.js'],
      image: '/9.png'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with Three.js animations, responsive design, and smooth user interactions.',
      technologies: ['React', 'Bootstrap.js', , 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      {/* <Github className="w-5 h-5" /> */}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      {/* <ExternalLink className="w-5 h-5" /> */}
                    </motion.button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm border border-purple-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}