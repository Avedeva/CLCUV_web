import { Button } from "@/components/ui/button";
import { Mail, Github, Twitter, ExternalLink } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "Data Explorer", href: "#data" },
        { label: "Interactive Maps", href: "#maps" },
        { label: "API Access", href: "#api" },
        { label: "Documentation", href: "#docs" }
      ]
    },
    {
      title: "Research",
      links: [
        { label: "Publications", href: "#research" },
        { label: "Methodology", href: "#methods" },
        { label: "Data Quality", href: "#quality" },
        { label: "Impact Stories", href: "#impact" }
      ]
    },
    {
      title: "Community",
      links: [
        { label: "Research Network", href: "#network" },
        { label: "Collaborators", href: "#partners" },
        { label: "Contact Us", href: "#contact" },
        { label: "Get Involved", href: "#join" }
      ]
    }
  ];

  const partners = [
    "World Health Organization",
    "Oxford University", 
    "Imperial College London",
    "Bill & Melinda Gates Foundation",
    "Wellcome Trust"
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-hero"></div>
                <span className="text-xl font-bold text-foreground">Malaria Atlas</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The world's leading platform for malaria data, research, and evidence-based insights supporting global elimination efforts.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-foreground">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Partners Section */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <h3 className="text-sm font-semibold text-foreground mb-6 text-center">
              Trusted by Leading Organizations
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center space-x-1">
                  <span>{partner}</span>
                  {index < partners.length - 1 && (
                    <ExternalLink className="h-3 w-3 ml-1 opacity-50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Malaria Atlas Project. Open access research for global health.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Use
              </a>
              <a href="#license" className="text-muted-foreground hover:text-primary transition-colors">
                Data License
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;