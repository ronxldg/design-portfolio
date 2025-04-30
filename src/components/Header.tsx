
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="w-full py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-4 md:mb-0"
        >
          <h1 className="text-2xl font-bold text-primary">
            Ronald George <span className="text-sm font-normal text-muted-foreground">| Educational Tech Portfolio</span>
          </h1>
        </motion.div>
        
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center space-x-4"
        >
          <Button variant="ghost" asChild>
            <a href="#group-project">Group Project</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#final-project">Final Project</a>
          </Button>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
