import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary-glow/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in">
            <span className="gradient-text">Transformasi Bisnis Anda</span>
            <br />
            <span className="text-foreground">ke Era Digital</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            Kami membantu bisnis Anda berkembang dengan solusi digital yang inovatif
            dan efektif. <strong className="text-primary">Tingkatkan visibilitas, efisiensi, dan jangkauan pasar Anda.</strong>
          </p>
          
          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button variant="hero" size="lg" className="px-12 py-6 text-xl font-bold mb-4">
              🚀 Hubungi Kami di WhatsApp
            </Button>
            <p className="text-sm text-muted-foreground mt-4 animate-pulse">
              Konsultasi GRATIS • Tanpa Komitmen • Respons dalam 5 menit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;