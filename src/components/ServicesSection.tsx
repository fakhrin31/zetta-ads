import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, TrendingUp, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Web Development",
      description: "Kami mengembangkan website dan aplikasi web yang modern, responsif, dan user-friendly dengan teknologi terkini."
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategi pemasaran digital yang efektif untuk meningkatkan visibility dan engagement bisnis Anda di platform online."
    },
    {
      icon: Shield,
      title: "Business Consulting",
      description: "Konsultasi bisnis digital untuk membantu transformasi dan optimalisasi proses bisnis Anda menggunakan teknologi."
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What We Provide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for business success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-card-gradient border-border hover:shadow-lg transition-all duration-300 text-center group">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;