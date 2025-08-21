import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Database, Users } from "lucide-react";
import heroImage from "@/assets/clcuv-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="CLCUV disease research in Indian cassava fields"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-hero font-bold leading-tight text-foreground">
                India CLCUV
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Disease Atlas</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Comprehensive data and analysis platform for Cotton Leaf Curl Virus research across India, supporting agricultural resilience through evidence-based insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Explore Data
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="research" size="lg">
                View Publications
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">28</div>
                <div className="text-sm text-muted-foreground">Indian States</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">150+</div>
                <div className="text-sm text-muted-foreground">Research Papers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5M+</div>
                <div className="text-sm text-muted-foreground">Field Records</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            <div className="grid gap-4">
              <FeatureCard
                icon={<Database className="h-6 w-6" />}
                title="Disease Mapping"
                description="Explore CLCUV distribution patterns across Indian agricultural regions"
                highlight="primary"
              />
              <FeatureCard
                icon={<Globe className="h-6 w-6" />}
                title="India Coverage"
                description="Comprehensive data spanning 28 Indian states with standardized monitoring"
                highlight="secondary"
              />
              <FeatureCard
                icon={<Users className="h-6 w-6" />}
                title="Research Network"
                description="Collaborative platform connecting agricultural researchers across India"
                highlight="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: "primary" | "secondary";
}

const FeatureCard = ({ icon, title, description, highlight }: FeatureCardProps) => {
  return (
    <div className="group p-6 rounded-lg bg-card shadow-card hover:shadow-research transition-all duration-300 border border-border/50">
      <div className="flex items-start space-x-4">
        <div className={`p-2 rounded-lg ${highlight === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;