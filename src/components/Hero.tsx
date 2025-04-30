
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Design</span> Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Educational Technology projects showcasing innovative solutions for learning challenges
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a 
              href="#group-project"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Group Project
            </motion.a>
            <motion.a 
              href="#final-project"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
            >
              Final Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
