import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Andi Wijaya",
      company: "CEO, Perusahaan A", 
      content: "Layanan digitalisasi dari tim ini sangat memuaskan. Kami berhasil meningkatkan penjualan secara signifikan.",
      initial: "AW"
    },
    {
      name: "Siti Rahayu",
      company: "Owner, Perusahaan B",
      content: "Kami sangat puas dengan hasil kerja mereka. Website dan sistem yang modern dan mudah digunakan telah membantu bisnis kami berkembang.",
      initial: "SR"
    },
    {
      name: "Budi Santoso", 
      company: "Owner, Perusahaan C",
      content: "Tim ini sangat responsif dan profesional. Mereka benar-benar memahami kebutuhan kami dan memberikan solusi terbaik.",
      initial: "BS"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Apa Kata</span>
            <br />
            <span className="text-foreground">Klien Kami</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kami bangga telah membantu banyak bisnis untuk tumbuh. <strong className="text-primary">Rating 4.9/5 dari 500+ review!</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card-gradient border-border hover:shadow-intense transition-bounce relative group hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {'⭐'.repeat(5)}
                  </div>
                  <span className="text-sm text-muted-foreground font-semibold">5.0</span>
                </div>
                <Quote className="h-8 w-8 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors" />
                <p className="text-foreground mb-6 leading-relaxed italic text-lg">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <Avatar className="h-14 w-14 mr-4 ring-2 ring-primary/20">
                    <AvatarFallback className="bg-accent-gradient text-white font-bold text-lg">
                      {testimonial.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-primary font-semibold">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;