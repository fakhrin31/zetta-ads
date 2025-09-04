import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ShowcaseSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      client: "Toko Online Modern",
      category: "E-commerce / Online Store",
      description: "Platform e-commerce lengkap dengan sistem pembayaran terintegrasi, manajemen inventory, dan dashboard analytics yang powerful.",
      image: "/placeholder.svg"
    },
    {
      title: "Company Profile Website",
      client: "PT. Digital Solutions",
      category: "Corporate Website / Company Profile",
      description: "Website company profile profesional dengan CMS yang mudah digunakan dan SEO-optimized untuk meningkatkan visibility online.",
      image: "/placeholder.svg"
    },
    {
      title: "Mobile App Development",
      client: "Startup Innovation",
      category: "Mobile Application / Cross-platform",
      description: "Aplikasi mobile cross-platform dengan fitur real-time notification dan integrasi API yang seamless.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Showcasing Our Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gain valuable insights into how our expertise can propel your business to new heights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card-gradient border-border hover:shadow-intense transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-t-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-1">
                    Client: {project.client}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Category: {project.category}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Learn More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;