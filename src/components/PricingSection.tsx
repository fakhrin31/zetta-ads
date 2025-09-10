import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Early Presence",
      price: "IDR 2.000.000",
      period: "",
      description: "SMEs, Freelancers, Small Stores",
      features: [
        "1 Website Page (Landing Page)",
        "Professional Template",
        "WhatsApp Button"
      ],
      completion: "3-5 Business days",
      support: "7 Days Post-launch",
      buttonText: "Order Now",
      variant: "outline" as const,
      isPopular: false
    },
    {
      name: "Smart Business",
      price: "IDR 40.000.000",
      period: "",
      description: "Ready For AI Digitalization",
      features: [
        "Custom Website/App",
        "AI Integration (ChatGPT, Gemini, Claude, etc)",
        "Custom Domain request",
        "3rd Party API Integration"
      ],
      completion: "4-6 Weeks",
      support: "2 Months",
      buttonText: "Order Now",
      variant: "outline" as const,
      isPopular: false
    },
    {
      name: "Growth",
      price: "IDR 25.000.000",
      period: "",
      description: "SMEs in Need of Automation",
      features: [
        "Web App + Admin CRUD",
        "Database Integration",
        "Simple Automation",
        "Custom Design & Contact Form",
        "Maintenance"
      ],
      completion: "3-4 Weeks",
      support: "1 Month",
      buttonText: "Order Now",
      variant: "outline" as const,
      isPopular: false
    },
    {
      name: "Starter",
      price: "IDR 15.000.000",
      period: "",
      description: "Early-Stage Startups",
      features: [
        "Multi Page Website",
        "Custom UI (Light)",
        "SEO & Contact Form",
        "WhatsApp Integration",
        "Mini Admin Dashboard"
      ],
      completion: "1-2 Weeks",
      support: "1 Month",
      buttonText: "Order Now",
      variant: "default" as const,
      isPopular: true
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Service Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to kickstart your digital journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-card-gradient border-border hover:shadow-intense transition-bounce group ${
                plan.isPopular ? 'ring-2 ring-primary shadow-glow scale-105' : 'hover:scale-102'
              }`}
            >
              {plan.isPopular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent-gradient text-white font-bold animate-pulse-slow">
                  POPULAR
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 mb-8 p-4 bg-secondary/20 rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Completion:</span>
                    <span className="text-foreground font-medium">{plan.completion}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Support:</span>
                    <span className="text-foreground font-medium">{plan.support}</span>
                  </div>
                </div>
                
                <Button 
                  className={`w-full transition-all ${plan.isPopular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.isPopular ? "default" : plan.variant} 
                  size="lg"
                >
                  {plan.buttonText} {plan.isPopular ? '🚀' : ''}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;