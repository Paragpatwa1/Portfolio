import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Web Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Parag Patwa
          </h1>

          <div className="h-12">
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            "Hi There, I’m Parag Patwa — a Full Stack Web Developer with
            expertise in React, Node,Express,Mongodb and modern web
            technologies. Passionate about creating clean, responsive, and
            impactful applications."
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
           <motion.a
  href="/Devlop.parag.pdf"
  download="Devlop.parag.pdf"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
>
  Download My Resume
</motion.a>

            <motion.button
              onClick={() => alert("📞 877002967")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-purple-400 text-purple-400 rounded-full font-medium hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-purple-400 w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
}
