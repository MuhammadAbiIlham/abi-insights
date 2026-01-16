import { MapPin, ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const roles = [
  "Data Analyst",
  "Deep Learning Enthusiast",
  "Python Developer",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy-dark to-primary animate-gradient" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--gold)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 section-container text-center text-primary-foreground">
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <p className="text-accent font-medium mb-4 tracking-wider uppercase text-sm">
            Welcome to my portfolio
          </p>
        </div>

        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            Muhammad Abi{" "}
            <span className="text-accent">Ilham</span>
          </h1>
        </div>

        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <div className="h-8 mb-6 overflow-hidden">
            <p className="text-lg md:text-xl text-primary-foreground/80 font-medium transition-all duration-500">
              {roles[currentRole]}
            </p>
          </div>
        </div>

        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <div className="flex items-center justify-center gap-2 text-primary-foreground/70 mb-8">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Pagar Alam City, Indonesia</span>
          </div>
        </div>

        <div className="animate-fade-in-up opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold px-8 shadow-gold transition-all duration-300 hover:scale-105"
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 transition-all duration-300 hover:scale-105"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <div className="animate-fade-in-up opacity-0 mt-6" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary-foreground/60 hover:text-accent hover:bg-transparent gap-2"
          >
            <Download className="w-4 h-4" />
            Download CV
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary-foreground/50 hover:text-accent transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
