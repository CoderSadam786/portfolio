import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  image: string;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "Developed a multi-page e-commerce website with product catalog and responsive design.",
    technologies: ["HTML", "CSS", "JavaScript"],
    role: "Front-end Developer",
    image: "/e-commerece.png",
    github: "https://github.com/CoderSadam786/Watch_Collection_web.git",
    live: "http://127.0.0.1:5500/index.html"
  },
  {
    id: 2,
    title: "Portfolio Template",
    description: "Created a customizable portfolio template for creative professionals with smooth animations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    role: "Front-end Developer",
    image: "/portfolio-template.png",
    github: "#",
    live: "http://localhost:8080/"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Built an interactive task management application with drag-and-drop functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
    role: "Front-end Developer",
    image: "/farm.png",
    github: "https://github.com/CoderSadam786/FarmTasker_Mangement_web.git",
    live: "#"
  }
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState("all");
  
  const filters = [
    { value: "all", label: "All" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "JavaScript", label: "JavaScript" }
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  return (
    <section id="portfolio" className="py-24 bg-secondary dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title pb-4 mb-6">My Portfolio</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Here are some of my recent projects that showcase my skills and experience in front-end development.
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(item => (
            <Button 
              key={item.value}
              variant={filter === item.value ? "default" : "outline"}
              className={filter === item.value ? "bg-primary hover:bg-primary/90" : ""}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover border-none shadow-md">
              <div className="relative h-48 bg-gray-100 dark:bg-gray-800">
                {project.image === "/placeholder.svg" ? (
                  <div className="h-full flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">Project Image</span>
                  </div>
                ) : (
                  <AspectRatio ratio={16 / 9} className="h-full">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="font-medium">Role:</span> {project.role}
                </div>
                
                <div className="flex space-x-2">
                  {project.github && (
                    <a 
                      href={project.github}
                      className="inline-flex items-center text-xs text-gray-600 dark:text-gray-400 hover:text-primary"
                      target="_blank" 
                      rel="noreferrer noopener"
                    >
                      <Github className="h-4 w-4 mr-1" /> Code
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live}
                      className="inline-flex items-center text-xs text-gray-600 dark:text-gray-400 hover:text-primary"
                      target="_blank" 
                      rel="noreferrer noopener"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No projects found with the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
