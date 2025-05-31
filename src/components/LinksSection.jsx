import { Github, Linkedin, Mail, Twitter, FileText, Globe } from "lucide-react";

const links = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: <Github size={24} />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: <Linkedin size={24} />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: <Twitter size={24} />,
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: <Mail size={24} />,
  },
  {
    name: "Resume",
    url: "/cv.pdf",
    icon: <FileText size={24} />,
  },
  {
    name: "Website",
    url: "https://yourwebsite.com",
    icon: <Globe size={24} />,
  },
];

export const LinksSection = () => {
  return (
    <section id="links" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Connect <span className="text-primary">With Me</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Find me on various platforms or reach out directly via email.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center"
            >
              <div className="text-primary mb-3">{link.icon}</div>
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
