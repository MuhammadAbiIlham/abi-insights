import { User, Code, Brain, BarChart3 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import ProfilPitcure from "../assets/profil_picture.jpg";

const highlights = [
  { icon: Code, label: "Python Developer" },
  { icon: Brain, label: "Deep Learning" },
  { icon: BarChart3, label: "Data Analysis" },
];

const AboutSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 md:py-32 bg-cream" ref={ref}>
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-accent/10 rounded-2xl" />
              
              {/* Profile Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-strong bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                <img alt="Profil Picture" src={ProfilPitcure} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-accent font-medium mb-2 tracking-wider uppercase text-sm">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Transforming Data into{" "}
              <span className="text-accent">Actionable Insights</span>
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sixth-semester Information Technology student at Universitas Negeri Malang, 
              specializing in data analysis and deep learning. Passionate about transforming 
              data into actionable insights through advanced machine learning techniques.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              My journey in data science has led me to explore cutting-edge technologies 
              in natural language processing, computer vision, and predictive analytics. 
              I believe in the power of data to drive informed decision-making.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full bg-background shadow-soft transition-all duration-500`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <item.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
