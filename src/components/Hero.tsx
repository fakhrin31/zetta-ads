import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  const stats = [
    { number: "100+", label: "Projects Done" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years of Support" }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-hero-gradient overflow-hidden pt-20">
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-foreground">
            Your Trusted Partner for
            <br />
            <span className="text-foreground">Digital Transformation</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kami adalah lebih dari sekedar software house. Kami adalah partner yang memahami kebutuhan Anda dan membantu mencapai tujuan bisnis. Kami menawarkan solusi inovatif dan efektif untuk membantu bisnis Anda berkembang di dunia digital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90">
              Get a Free Consultation
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg font-semibold">
              Hire Our Experts on Upwork
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card-gradient border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;