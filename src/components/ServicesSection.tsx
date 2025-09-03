import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Zap, TrendingUp, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Cepat & Profesional",
      description: "Proses digitalisasi yang cepat dan hasil yang profesional. Kami bekerja dengan standar tinggi untuk memberikan hasil terbaik."
    },
    {
      icon: TrendingUp,
      title: "Harga Terjangkau",
      description: "Paket harga yang kompetitif dan sesuai budget. Dapatkan solusi digital berkualitas tanpa biaya yang mengkhawatirkan."
    },
    {
      icon: Shield,
      title: "Berpengalaman",
      description: "Tim ahli kami memiliki pengalaman bertahun-tahun dalam industri digital. Percayakan transformasi bisnis Anda kepada yang terpercaya."
    }
  ];

  return (
    <section className="py-24 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Keunggulan</span>
            <br />
            <span className="text-foreground">Layanan Kami</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kami menawarkan solusi digitalisasi yang komprehensif dan terpercaya. <strong className="text-primary">Terbukti membantu 1000+ bisnis berkembang!</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-card-gradient border-border hover:shadow-intense transition-bounce text-center group hover:scale-105">
              <CardHeader className="pb-4">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 animate-float">
                  <service.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
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
      </div>
    </section>
  );
};

export default ServicesSection;