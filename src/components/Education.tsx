import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
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
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50"
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Master of Computer Applications (MCA)
              </h3>
              <h4 className="text-xl text-purple-400 mb-4">
                Lakshmi Narain College of Technology (LNCT)
              </h4>
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>Completed with Excellence</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Comprehensive program covering software development, database management, 
                system analysis, and modern programming paradigms. Gained strong foundation 
                in computer science principles and practical application development.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', 'Web Technologies', 'Mobile Development'].map((subject) => (
                  <span
                    key={subject}
                    className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-400/20"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}