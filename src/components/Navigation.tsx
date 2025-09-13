import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/utils";

const Navigation = () => {
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Showcase", href: "#showcase" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" }
  ];
  const contactLink = createWhatsAppLink("Halo Zettatech, saya tertarik untuk memulai proyek.");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">Z</span>
          </div>
          <span className="text-xl font-bold text-foreground">ZETTATECH</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a href={contactLink} target="_blank" rel="noopener noreferrer"> {/* <-- 3. Bungkus Button */}
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;