import React from "react";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title pb-4 mb-12">About Me</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 rounded-xl overflow-hidden shadow-xl border-8 border-white dark:border-gray-2000">       
                <Avatar className="w-full h-full">       
                  <AvatarImage
                    src="/public/m0cou6vcry.jpg"
                    alt="Sadam Hussain"
                    className="object-cover w-full h-full object-top"
                  />
                  <AvatarFallback className="bg-gray-300 text-gray-500 text-2xl"></AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-lg shadow-lg flex items-center justify-center text-white font-bold"
                   style={{ backgroundColor: "#7c3aed" }}>
                <div className="text-center">
                  <div className="text-2xl">2+</div>
                  <div className="text-xs">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 space-y-6">
            <h3 className="text-2xl font-bold">
              Front-end Developer & UI Enthusiast
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300">
              I am Sadam Hussain, a front-end developer passionate about crafting user-friendly web experiences. 
              Currently pursuing a degree in Computer Science from SZABIST Karachi.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300">
              My expertise lies in creating responsive and interactive websites that deliver exceptional 
              user experiences. I love turning complex problems into simple, beautiful, and intuitive interface designs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-3">Education</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-2 w-2 mt-2 bg-primary rounded-full mr-2"></div>
                    <div>
                      <p className="font-medium">BS in Computer Science</p>
                      <p className="text-sm text-gray-500">SZABIST Karachi (In Progress)</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">HTML</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">CSS</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Responsive Design</span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">UI/UX</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button className="bg-primary hover:bg-primary/90">
                <FileDown className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 p-6 bg-secondary dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="text-center">
            <p className="text-xl font-medium italic text-gray-700 dark:text-gray-300">
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
            <p className="mt-4 text-gray-500">- Steve Jobs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
