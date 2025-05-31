import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { ProjectCarousel } from "./ProjectCarousel";

const featuredProjects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const mlProjects = [
{
  id: 1,
  title: "GPU Accelerated ML Toolkit",
  description:
    "A GPU-accelerated machine learning toolkit built with CuPy and NumPy, supporting core algorithms like GMMs, K-Means, PCA, Linear Regression, and MLPs. Integrated Optuna for hyperparameter tuning, Wandb for real-time experiment logging, and included full EDA capabilities. Achieved 8–30× speed-ups on GPU benchmarks.",
  image: "/projects/ml3.png", // Update image path if needed
  tags: ["Python", "CuPy", "Optuna", "Wandb", "EDA"],
  demoUrl: "#", // Replace with live demo if available
  githubUrl: "https://github.com/UberMayinch/gpu-accelerated-ml-toolkit", // Replace with actual GitHub repo
},
];

const devProjects = [
  {
    id: 1,
    title: "Tapas",
    description: "RESTful API for task management built with Node.js and Express.",
    image: "/projects/dev1.png",
    tags: ["React Native", "LLMs"],
    demoUrl: "#",
    githubUrl: "https://github.com/UberMayinch/Tapas",
  },
  {
    id: 2,
    title: "Developer Portfolio",
    description: "Real-time weather dashboard with data visualization.",
    image: "/projects/dev2.png",
    tags: ["React", "Chart.js", "API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Network File System",
    description: "Real-time weather dashboard with data visualization.",
    image: "/projects/dev2.png",
    tags: ["React", "Chart.js", "API"],
    demoUrl: "#",
    githubUrl: "#",
  },
{
  id: 4,
  title: "Ubermayincsh - C Shell Implementation",
  description:
    "A custom UNIX-style shell built in C/C++ that supports command parsing, process management (fork, exec, wait), piping, I/O redirection, and basic TCP networking for remote execution and file transfer.",
  image: "/projects/dev4.png", // Update this path to a relevant image if available
  tags: ["C", "UNIX", "Sockets", "Shell"],
  demoUrl: "#", // Replace with demo link if applicable
  githubUrl: "https://github.com/UberMayinch/ubermayincsh", // Replace with actual GitHub URL if available
},

];

const researchProjects = [
  {
    id: 1,
    title: "Blockchain Security Analysis",
    description: "Research on security vulnerabilities in blockchain implementations.",
    image: "/projects/research1.png",
    tags: ["Blockchain", "Security", "Research"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Human-Computer Interaction Study",
    description: "Research on improving user interfaces for accessibility.",
    image: "/projects/research2.png",
    tags: ["HCI", "UX Research", "Accessibility"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="my-16 border-border/50" />
        
        <ProjectCarousel title="Machine Learning Projects" projects={mlProjects} />
        <ProjectCarousel title="Dev Projects" projects={devProjects} />
        <ProjectCarousel title="Research Work" projects={researchProjects} />

        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ubermayinch"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
