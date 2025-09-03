import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "Rp 999rb",
      period: "/bulan",
      description: "Perfect untuk bisnis kecil",
      features: [
        "Website dasar",
        "Optimasi SEO",
        "Domain & hosting"
      ],
      buttonText: "Pilih Paket",
      variant: "outline" as const,
      isPopular: false
    },
    {
      name: "Standard",
      price: "Rp 1.9jt", 
      period: "/bulan",
      description: "Solusi lengkap untuk bisnis berkembang",
      features: [
        "Website profesional",
        "Analitik lanjutan",
        "Integrasi aplikasi"
      ],
      buttonText: "Pilih Paket",
      variant: "default" as const,
      isPopular: true
    },
    {
      name: "Unggulan",
      price: "Rp 2.9jt",
      period: "/bulan", 
      description: "Paket premium untuk pertumbuhan maksimal",
      features: [
        "Kampanye pemasaran",
        "Manajer akun",
        "Support 24/7"
      ],
      buttonText: "Pilih Paket",
      variant: "outline" as const,
      isPopular: false
    },
    {
      name: "Enterprise",
      price: "Kustom",
      period: "",
      description: "Solusi khusus untuk perusahaan besar",
      features: [
        "Solusi enterprise",
        "Dukungan premium",
        "Skala besar"
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
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Pilihan Paket</span>
            <br />
            <span className="text-foreground">Digitalisasi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda. <strong className="text-primary">Semua paket include support penuh!</strong>
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
                  variant={plan.isPopular ? "cta" : plan.variant} 
                  className={`w-full transition-bounce ${plan.isPopular ? 'animate-pulse-slow' : ''}`}
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