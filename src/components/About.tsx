import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Parag Patwa, a passionate Full Stack Web Developer with a Master's in Computer Applications from LNCT. 
              I specialize in creating beautiful, functional, and user-centered digital experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With expertise in both frontend and backend technologies, I bring ideas to life through clean, 
              efficient code and innovative solutions. I'm always eager to learn new technologies and 
              take on challenging projects.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'TypeScript', 'Python'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm text-purple-400 rounded-full text-sm border border-purple-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Code, title: 'Frontend', desc: 'React, Vue, Angular' },
              { icon: Database, title: 'Backend', desc: 'Node.js, Python, Java' },
              { icon: Globe, title: 'Web Tech', desc: 'HTML5, CSS3, JavaScript' },
              { icon: Smartphone, title: 'Mobile', desc: 'React Native, Flutter' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center"
              >
                <item.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}