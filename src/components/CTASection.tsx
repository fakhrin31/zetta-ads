import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Siap Mengubah</span>
            <br />
            <span className="text-foreground">Bisnis Anda?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Jangan biarkan bisnis Anda tertinggal di era digital. <strong className="text-primary">Mulai transformasi sekarang juga</strong> dan rasakan perubahannya dalam <strong className="text-accent">30 hari pertama!</strong>
          </p>
          
          <div className="space-y-6">
            <Button variant="cta" size="lg" className="px-12 py-6 text-xl font-bold">
              Mulai Digitalisasi Bisnis Anda Sekarang! 🚀
            </Button>
            
            <p className="text-lg text-muted-foreground">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold mr-2">✅ Konsultasi gratis</span>
              <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full font-semibold mr-2">⚡ Tanpa komitmen</span>
              <span className="inline-block bg-secondary/20 text-foreground px-4 py-2 rounded-full font-semibold">🎯 Respons cepat</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;