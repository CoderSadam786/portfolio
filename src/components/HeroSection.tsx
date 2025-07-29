import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/20 z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <p className="text-primary font-medium animate-slide-in">Welcome to my portfolio</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-in" style={{animationDelay: "200ms"}}>
              Hi, I'm <span className="gradient-text">Sadam Hussain</span> <br />
              <span className="text-3xl md:text-4xl">Front-End Developer</span>
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 text-lg animate-slide-in" style={{animationDelay: "400ms"}}>
              Turning ideas into interactive digital experiences.
            </p>
            
        
        
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-in" style={{animationDelay: "600ms"}}>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="#portfolio">
                  View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-fade-in">
                <Avatar className="w-full h-full">
                  <AvatarImage   src="/491417981_18044152289529177_4222495140787102735_n.jpg"
                    alt="Sadam Hussain"
                    className="object-cover w-full h-full object-top" />
                  <AvatarFallback className="text-2xl"> </AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg animate-fade-in" style={{animationDelay: "400ms"}}>
                <div className="bg-primary/10 text-primary rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
          <div className="w-5 h-9 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-black dark:bg-white rounded-full animate-bounce mt-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
