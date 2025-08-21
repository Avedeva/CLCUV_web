import { Card, CardContent } from "@/components/ui/card";
import { Globe, FileText, Users, Database } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Globe className="h-8 w-8" />,
      value: "28",
      label: "Indian States",
      description: "Comprehensive coverage across India"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      value: "150+",
      label: "Research Papers",
      description: "Agricultural research publications"
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "300+",
      label: "Researchers",
      description: "Indian agricultural network"
    },
    {
      icon: <Database className="h-8 w-8" />,
      value: "5M+",
      label: "Field Records",
      description: "Validated disease data"
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-section font-bold text-foreground">
            India's Agricultural Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our research platform has become India's leading resource for CLCUV data, supporting evidence-based agricultural decision making across the nation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="group text-center hover:shadow-research transition-all duration-300 border-border/50">
              <CardContent className="p-8 space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="font-semibold text-card-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-card shadow-card border border-border/50">
            <blockquote className="text-xl italic text-muted-foreground mb-4">
              "The India CLCUV Atlas has revolutionized our understanding of cotton leaf curl virus distribution, enabling targeted agricultural interventions that protect crop yields and farmer livelihoods."
            </blockquote>
            <cite className="text-sm font-semibold text-foreground">
              Indian Agricultural Research Institute
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;