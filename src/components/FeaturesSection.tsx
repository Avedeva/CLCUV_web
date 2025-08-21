import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Download, Search, TrendingUp } from "lucide-react";
import dataIcon from "@/assets/clcuv-data.jpg";
import researchIcon from "@/assets/clcuv-research.jpg";
import teamIcon from "@/assets/clcuv-team.jpg";

const FeaturesSection = () => {
  const features = [
    {
      id: "data",
      icon: dataIcon,
      title: "Disease Data Explorer",
      description: "Interactive maps and visualization tools for exploring CLCUV distribution patterns across Indian agricultural regions.",
      features: ["Interactive mapping", "State-wise analysis", "Crop impact visualization", "Custom queries"],
      buttonText: "Explore Maps",
      color: "primary"
    },
    {
      id: "research",
      icon: researchIcon,
      title: "Agricultural Research",
      description: "Access peer-reviewed studies, reports, and findings from Indian agricultural research institutions on CLCUV.",
      features: ["150+ publications", "Field trial data", "Resistance studies", "Citation tracking"],
      buttonText: "Browse Research",
      color: "secondary"
    },
    {
      id: "team",
      icon: teamIcon,
      title: "India Collaboration",
      description: "Connect with agricultural researchers, institutions, and farmers working to combat CLCUV across India.",
      features: ["Research network", "State partnerships", "Data sharing", "Extension support"],
      buttonText: "Join Network",
      color: "primary"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-section font-bold text-foreground">
            Advancing CLCUV Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform provides comprehensive tools and resources for agricultural researchers, policymakers, and farmers working to understand and manage CLCUV disease across India.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={feature.id} className="group hover:shadow-research transition-all duration-300 border-border/50">
              <CardHeader className="space-y-4">
                <div className="relative w-full h-48 rounded-lg overflow-hidden bg-muted">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 ${feature.color === "primary" ? "bg-primary" : "bg-secondary"}`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={feature.color === "primary" ? "default" : "secondary"} 
                  className="w-full group"
                >
                  {feature.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <QuickAction
            icon={<Search className="h-6 w-6" />}
            title="Search Data"
            description="Find specific datasets and research"
            action="Search"
          />
          <QuickAction
            icon={<Download className="h-6 w-6" />}
            title="Download Reports"
            description="Access downloadable research reports"
            action="Download"
          />
          <QuickAction
            icon={<TrendingUp className="h-6 w-6" />}
            title="View Trends"
            description="Analyze global malaria trends"
            action="Analyze"
          />
        </div>
      </div>
    </section>
  );
};

interface QuickActionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
}

const QuickAction = ({ icon, title, description, action }: QuickActionProps) => {
  return (
    <div className="group p-6 rounded-lg bg-card border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300">
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-lg bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-card-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <Button variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary hover:text-primary-hover">
            {action} →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;