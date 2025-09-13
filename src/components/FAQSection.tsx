import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Apa saja layanan yang ditawarkan Zetta?",
      answer: "Zetta menawarkan berbagai layanan teknologi termasuk pengembangan website, aplikasi mobile, UI/UX design, digital marketing, SEO optimization, cloud solutions, dan dukungan teknis 24/7."
    },
    {
      question: "Berapa lama waktu pengerjaan proyek website?",
      answer: "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Website sederhana 1-2 minggu, website kompleks 1-3 bulan. Tim kami akan memberikan estimasi waktu yang akurat setelah analisis kebutuhan."
    },
    {
      question: "Bagaimana proses pembayaran untuk proyek?", 
      answer: "Pembayaran dilakukan dalam beberapa tahap: 50% di awal, 30% saat progress 70%, dan 20% setelah proyek selesai. Kami menerima transfer bank dan pembayaran online."
    },
    {
      question: "Apakah ada garansi untuk website yang dibuat?",
      answer: "Ya, kami memberikan garansi 3 bulan untuk bug dan error. Setelah itu, kami tetap memberikan dukungan teknis dengan biaya maintenance bulanan yang terjangkau."
    },
    {
      question: "Bisakah website diintegrasikan dengan sistem yang sudah ada?",
      answer: "Tentu! Tim kami memiliki pengalaman dalam integrasi berbagai sistem seperti CRM, ERP, payment gateway, dan API pihak ketiga. Kami akan menganalisis kebutuhan integrasi Anda."
    },
    {
      question: "Apakah website yang dibuat responsive untuk mobile?",
      answer: "Ya, semua website yang kami buat menggunakan desain responsive yang akan terlihat sempurna di desktop, tablet, dan smartphone."
    },
    {
      question: "Bagaimana jika ada perubahan desain di tengah proyek?",
      answer: "Perubahan minor tidak dikenakan biaya tambahan. Untuk perubahan besar, akan ada biaya tambahan yang disepakati bersama. Kami selalu berkomunikasi dengan klien untuk memastikan kepuasan."
    },
    {
      question: "Apakah ada layanan maintenance setelah website selesai?",
      answer: "Ya, kami menawarkan paket maintenance bulanan yang mencakup update keamanan, backup data, monitoring performa, dan dukungan teknis 24/7."
    },
    {
      question: "Bisakah website dioptimasi untuk SEO?",
      answer: "Tentu! Kami menerapkan best practices SEO dalam setiap website yang dibuat, termasuk optimasi meta tags, struktur URL, kecepatan loading, dan mobile-friendly design."
    },
    {
      question: "Apakah ada demo atau portfolio yang bisa dilihat?",
      answer: "Ya, Anda bisa melihat portfolio kami di halaman showcase. Kami juga bisa memberikan demo website yang sudah kami buat untuk referensi."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our services and how we can help transform your business digitally.
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