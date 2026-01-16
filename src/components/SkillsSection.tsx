import { useInView } from "@/hooks/useInView";
import { Code, Database, Brain, BarChart3, FileText, Microscope } from "lucide-react";

const programmingSkills = [
  { name: "Python", level: 75, icon: Code },
];

const frameworkSkills = [
  { name: "PyTorch", level: 70 },
  { name: "TensorFlow", level: 70 },
];

const databaseSkills = [
  { name: "MySQL", level: 65, icon: Database },
];

const additionalSkills = [
  { name: "Deep Learning", icon: Brain },
  { name: "Natural Language Processing", icon: FileText },
  { name: "Data Analysis & Visualization", icon: BarChart3 },
  { name: "Machine Learning Model Development", icon: Code },
  { name: "Research & Statistical Analysis", icon: Microscope },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const { ref, isInView } = useInView({ threshold: 0.5 });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-bar-fill ${isInView ? "animate" : ""}`}
          style={{
            "--skill-level": `${level}%`,
            transitionDelay: `${delay}ms`,
          } as React.CSSProperties}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 md:py-32 bg-cream" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-16">
          <p
            className={`text-accent font-medium mb-2 tracking-wider uppercase text-sm transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Skills
          </p>
          <h2
            className={`text-3xl md:text-4xl font-serif font-bold text-foreground transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Technical <span className="text-accent">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div
            className={`bg-card rounded-2xl p-6 shadow-medium card-hover border border-border transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-lg font-serif font-bold text-foreground mb-6 flex items-center gap-2">
              <Code className="w-5 h-5 text-accent" />
              Programming Languages
            </h3>
            {programmingSkills.map((skill, index) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 100} />
            ))}
          </div>

          {/* Frameworks */}
          <div
            className={`bg-card rounded-2xl p-6 shadow-medium card-hover border border-border transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-lg font-serif font-bold text-foreground mb-6 flex items-center gap-2">
              <Brain className="w-5 h-5 text-accent" />
              Libraries & Frameworks
            </h3>
            {frameworkSkills.map((skill, index) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 100} />
            ))}
          </div>

          {/* Database */}
          <div
            className={`bg-card rounded-2xl p-6 shadow-medium card-hover border border-border transition-all duration-700 delay-400 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-lg font-serif font-bold text-foreground mb-6 flex items-center gap-2">
              <Database className="w-5 h-5 text-accent" />
              Database
            </h3>
            {databaseSkills.map((skill, index) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 100} />
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div
          className={`mt-12 transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-lg font-serif font-bold text-foreground mb-6 text-center">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft border border-border hover:border-accent hover:shadow-gold transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <skill.icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
