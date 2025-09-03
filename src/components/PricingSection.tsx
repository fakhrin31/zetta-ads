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
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Pilihan Paket Digitalisasi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-card border-border hover:shadow-elegant transition-all duration-300 ${
                plan.isPopular ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
            >
              {plan.isPopular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  BEST VALUE
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
                  variant={plan.variant} 
                  className="w-full transition-colors"
                  size="lg"
                >
                  {plan.buttonText}
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