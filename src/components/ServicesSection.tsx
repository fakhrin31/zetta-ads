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
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Keunggulan Layanan Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kami menawarkan solusi digitalisasi yang komprehensif dan terpercaya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300 text-center group">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
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