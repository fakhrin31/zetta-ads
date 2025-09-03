import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Siap Mengubah Bisnis Anda?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Jangan biarkan bisnis Anda tertinggal di era digital. Mulai transformasi sekarang juga dan rasakan perubahannya.
          </p>
          
          <Button variant="hero" size="lg" className="px-8 py-4 text-lg font-semibold">
            Mulai Digitalisasi Bisnis Anda Sekarang! 🚀
          </Button>
          
          <p className="text-sm text-muted-foreground mt-6">
            Konsultasi gratis • Tanpa komitmen • Respons cepat
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;