import { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export const ProjectCarousel = ({ title, projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="my-16">
      <h3 className="text-2xl font-semibold mb-8 text-center">
        <span className="text-primary">{title}</span>
      </h3>
      
      <div className="relative">
        {projects.length > 1 && (
          <>
            <button 
              onClick={goToPrevious} 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/20"
              aria-label="Previous project"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={goToNext} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/20"
              aria-label="Next project"
            >
              <ArrowRight size={20} />
            </button>
          </>
        )}
        
        <div className="overflow-hidden rounded-lg">
          <div 
            className="transition-transform duration-500 ease-out flex"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-full">
                <div className="bg-card rounded-lg overflow-hidden shadow-xs card-hover m-1">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            aria-label="View live demo"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            aria-label="View source code"
                          >
                            <Github size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {projects.length > 1 && (
          <div className="flex justify-center mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full mx-1",
                  currentIndex === index ? "bg-primary" : "bg-primary/30"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
