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
      buttonText: "Pilih Paket",
      variant: "outline" as const,
      isPopular: false
    },
    {
      name: "Business Growth", 
      price: "IDR 5.000.000",
      period: "",
      description: "Growing businesses and established companies",
      features: [
        "Multi-page Website",
        "SEO Optimization",
        "Contact Forms",
        "Social Media Integration"
      ],
      buttonText: "Pilih Paket",
      variant: "default" as const,
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      period: "",
      description: "Large corporations and complex projects",
      features: [
        "Custom Web Application",
        "Database Integration",
        "Advanced Features",
        "Priority Support"
      ],
      buttonText: "Hubungi Kami",
      variant: "outline" as const,
      isPopular: false
    }
  ];

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-card-gradient border-border hover:shadow-intense transition-bounce group ${
                plan.isPopular ? 'ring-2 ring-primary shadow-glow scale-105' : 'hover:scale-102'
              }`}
            >
              {plan.isPopular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent-gradient text-white font-bold animate-pulse-slow">
                  🔥 BEST VALUE 🔥
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
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
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