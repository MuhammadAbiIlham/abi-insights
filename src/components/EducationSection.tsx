import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const EducationSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="education" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="section-container">
        <div className="text-center mb-16">
          <p
            className={`text-accent font-medium mb-2 tracking-wider uppercase text-sm transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Education
          </p>
          <h2
            className={`text-3xl md:text-4xl font-serif font-bold text-foreground transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Academic <span className="text-accent">Background</span>
          </h2>
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative pl-8 md:pl-0">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />

            {/* Education Card */}
            <div className="relative md:w-1/2 md:ml-auto md:pl-12">
              {/* Timeline dot */}
              <div className="absolute left-[-29px] md:left-[-5px] top-8 w-4 h-4 rounded-full bg-accent shadow-gold" />

              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-medium card-hover border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <GraduationCap className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-1">
                      Universitas Negeri Malang
                    </h3>
                    <p className="text-accent font-medium mb-3">
                      Bachelor of Information Technology (S1 TI)
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>2023 - Present</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Malang, Indonesia</span>
                      </div>
                    </div>

                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      Currently 6th Semester
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
