import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Skills() {
  const skills = [
    { name: 'React.js', level: 90, color: 'from-blue-500 to-blue-600' },
    
    { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
     { name: 'Express.js', level: 85, color: 'from-green-500 to-green-600' },
    
    { name: 'JavaScript', level: 92, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Bootstrap', level: 80, color: 'from-blue-600 to-blue-700' },
    { name: 'MongoDB', level: 75, color: 'from-green-600 to-green-700' },
    { name: 'SQL', level: 78, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Java', level: 82, color: 'from-purple-500 to-purple-600' },
    { name: 'HTML/CSS', level: 88, color: 'from-pink-500 to-pink-600' }
  ];

  const [animatedSkills, setAnimatedSkills] = useState(skills.map(skill => ({ ...skill, currentLevel: 0 })));

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skills.map(skill => ({ ...skill, currentLevel: skill.level })));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {animatedSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white font-semibold">{skill.name}</h3>
                <span className="text-purple-400 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.currentLevel}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}