import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const ShowcaseSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects = [
    {
      title: "E-commerce Platform",
      client: "Toko Online Modern",
      category: "E-commerce / Online Store",
      description: "Platform e-commerce lengkap dengan sistem pembayaran terintegrasi, manajemen inventory, dan dashboard analytics yang powerful.",
      image: "/placeholder.svg",
      overview: "Platform e-commerce modern yang dirancang khusus untuk memenuhi kebutuhan toko online masa kini. Sistem ini menyediakan fitur lengkap mulai dari manajemen produk, sistem pembayaran terintegrasi, hingga dashboard analytics yang comprehensive untuk membantu pemilik bisnis mengambil keputusan berdasarkan data real-time.",
      objective: "Mengembangkan platform e-commerce yang user-friendly dan scalable untuk mendukung pertumbuhan bisnis online klien. Platform ini dirancang untuk meningkatkan konversi penjualan dan memberikan pengalaman berbelanja yang seamless bagi end users.",
      medium: "Web Application",
      gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "Company Profile Website",
      client: "PT. Digital Solutions",
      category: "Corporate Website / Company Profile",
      description: "Website company profile profesional dengan CMS yang mudah digunakan dan SEO-optimized untuk meningkatkan visibility online.",
      image: "/placeholder.svg",
      overview: "Website company profile yang professional dan modern untuk PT. Digital Solutions. Dilengkapi dengan Content Management System (CMS) yang user-friendly, memungkinkan klien untuk mengelola konten secara mandiri. Website ini juga dioptimasi untuk SEO guna meningkatkan visibility di search engine.",
      objective: "Membangun online presence yang kuat untuk PT. Digital Solutions melalui website yang professional, informatif, dan mudah ditemukan di search engine. Website ini bertujuan untuk meningkatkan kredibilitas perusahaan dan menarik lebih banyak prospek bisnis.",
      medium: "Responsive Website",
      gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    },
    {
      title: "Mobile App Development",
      client: "Startup Innovation",
      category: "Mobile Application / Cross-platform",
      description: "Aplikasi mobile cross-platform dengan fitur real-time notification dan integrasi API yang seamless.",
      image: "/placeholder.svg",
      overview: "Aplikasi mobile cross-platform yang inovatif untuk Startup Innovation. Aplikasi ini dikembangkan menggunakan teknologi React Native untuk memastikan performa optimal di iOS dan Android. Dilengkapi dengan sistem notifikasi real-time dan integrasi API yang robust untuk mendukung berbagai fitur bisnis.",
      objective: "Menciptakan aplikasi mobile yang dapat menjangkau audiens yang lebih luas melalui platform iOS dan Android secara bersamaan. Aplikasi ini dirancang untuk meningkatkan engagement user melalui fitur notifikasi real-time dan memberikan pengalaman yang konsisten di berbagai perangkat.",
      medium: "Mobile Application",
      gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    }
  ];

  const handleLearnMore = (index: number) => {
    setCurrentProjectIndex(index);
    setIsModalOpen(true);
  };

  return (
    <section id="showcase" className="py-24 px-4 bg-background">
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
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary"
                    onClick={() => handleLearnMore(index)}
                  >
                    Learn More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projects={projects}
        currentProjectIndex={currentProjectIndex}
        onProjectChange={setCurrentProjectIndex}
      />
    </section>
  );
};

export default ShowcaseSection;