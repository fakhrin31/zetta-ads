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
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to have helped many businesses grow and succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card-gradient border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {'⭐'.repeat(5)}
                  </div>
                  <span className="text-sm text-muted-foreground font-semibold">5.0</span>
                </div>
                <Quote className="h-6 w-6 text-primary/30 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed text-base">
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