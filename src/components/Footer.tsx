
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 bg-muted/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-medium">Ronald George</h3>
            <p className="text-sm text-muted-foreground">CS 6460 Educational Technology Portfolio</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} - All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
