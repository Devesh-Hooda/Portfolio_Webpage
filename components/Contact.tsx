import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-3 sm:px-6 lg:px-8 max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-purple-400 font-mono mb-4">05. What's Next?</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          I am currently open to new opportunities in Data Analysis and Software Engineering. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a 
          href="mailto:Gvhooda@gmail.com"
          className="inline-block px-8 py-4 border border-purple-400 text-purple-400 font-medium rounded hover:bg-purple-400/10 transition-colors shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)]"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;