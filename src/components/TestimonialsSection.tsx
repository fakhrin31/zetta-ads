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
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Apa Kata Klien Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kami bangga telah membantu banyak bisnis untuk tumbuh.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300 relative">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
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