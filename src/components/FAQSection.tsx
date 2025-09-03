import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Apa itu digitalisasi bisnis?",
      answer: "Digitalisasi bisnis adalah proses mengintegrasikan teknologi digital untuk mengubah model bisnis tradisional. Hal ini mencakup penggunaan website, media sosial, dan alat digital lainnya untuk meningkatkan efisiensi, produktivitas, dan jangkauan pasar."
    },
    {
      question: "Mengapa bisnis saya perlu digitalisasi?", 
      answer: "Di era digital saat ini, digitalisasi membantu bisnis menjangkau lebih banyak pelanggan, meningkatkan efisiensi operasional, dan tetap kompetitif di pasar. Tanpa digitalisasi, bisnis berisiko tertinggal dari kompetitor."
    },
    {
      question: "Berapa lama proses digitalisasi?",
      answer: "Waktu proses digitalisasi bervariasi tergantung kompleksitas kebutuhan bisnis Anda. Untuk paket Starter, biasanya 2-4 minggu. Untuk paket yang lebih kompleks, bisa memakan waktu 1-3 bulan."
    }
  ];

  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Pertanyaan Umum (FAQ)
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:shadow-elegant transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;