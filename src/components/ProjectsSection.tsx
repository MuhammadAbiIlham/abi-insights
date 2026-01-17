import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    title: "Abstractive Summarization Research",
    description:
      "Deep learning research comparing BART, T5, and GPT-2 models for abstractive podcast summarization using PyTorch. Implemented 5-fold cross validation for robust model evaluation.",
    technologies: ["Python", "Google Colab", "PyTorch", "Transformers"],
    course: "Deep Learning",
    github: "https://github.com/MuhammadAbiIlham/abstractive-summarization",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Named Entity Recognition Research",
    description:
      "Developed a multi-task transformer-based model for Named Entity Recognition (NER) and emotion classification on Indonesian Wayang narrative texts.",
    technologies: ["Python", "Transformers", "NLP", "PyTorch"],
    course: "Natural Language Processing",
    github: "https://github.com/MuhammadAbiIlham/named-entity-recognition",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Parking Management System",
    description:
      "Object-oriented parking lot management system implementation using C++ with greedy algorithm approach for optimal space allocation.",
    technologies: ["C++", "OOP", "Greedy Algorithm"],
    course: "Advanced Programming",
    github: "https://github.com/MuhammadAbiIlham/parking-management-system",
    color: "from-orange-500/20 to-red-500/20",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group bg-card rounded-2xl overflow-hidden shadow-medium border border-border transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Header with gradient */}
      <div
        className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-primary/5" />
        <Folder className="w-16 h-16 text-foreground/20 group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="mb-4">
          <span className="inline-flex items-center gap-1 text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
            📚 {project.course}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2 py-1 rounded-md bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            View Project
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-16">
          <p
            className={`text-accent font-medium mb-2 tracking-wider uppercase text-sm transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Portfolio
          </p>
          <h2
            className={`text-3xl md:text-4xl font-serif font-bold text-foreground transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p
            className={`text-muted-foreground mt-4 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A collection of projects showcasing my expertise in data analysis,
            machine learning, and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
