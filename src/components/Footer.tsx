import React from "react";
import { Instagram, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-primary">
              Sadam<span className="text-gray-800 dark:text-white">.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xs">
              Front-end developer turning ideas into interactive digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Let's connect and build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:sh1417537@gmail.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://instagram.com/sadammehar786" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Instagram"
                target="_blank" 
                rel="noreferrer noopener"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Sadam Hussain. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
