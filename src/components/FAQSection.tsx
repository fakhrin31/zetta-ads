import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Zetta?",
      answer: "Zetta is a technology company specializing in digital transformation solutions. We help businesses leverage technology to improve efficiency, reach more customers, and stay competitive in the digital landscape."
    },
    {
      question: "What services does Zetta offer?",
      answer: "We offer a comprehensive range of services including web development, mobile app development, data scraping, API development, digital marketing, and complete digital transformation consulting to help your business thrive online."
    },
    {
      question: "How much does it cost to work with Zetta?", 
      answer: "Our pricing varies based on your specific needs and project scope. We offer flexible packages starting from IDR 2,000,000 for basic web presence. Contact us for a free consultation to get a customized quote."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines depend on complexity and scope. Simple landing pages can be completed in 3-5 business days, while more complex applications may take several weeks to months. We'll provide a detailed timeline during consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we provide comprehensive post-launch support. All our packages include initial support period, and we offer extended maintenance and support plans to ensure your digital solutions continue to perform optimally."
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