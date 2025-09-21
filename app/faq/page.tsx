import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FadeIn } from '@/components/animations/FadeIn';

const faqs = [
  {
    question: "What is SaaSPro?",
    answer: "SaaSPro is a highly customizable, responsive landing page template designed specifically for SaaS products, startups, and tech companies. It features modern design, smooth animations, and easy customization options.",
  },
  {
    question: "Do I need coding knowledge to use this template?",
    answer: "While some customization requires basic HTML/CSS knowledge, the template comes with pre-built components and clear documentation. Most customizations can be done through props and configuration files without touching code.",
  },
  {
    question: "Is the template mobile-responsive?",
    answer: "Yes! SaaSPro is built with a mobile-first approach and looks great on all devices, from smartphones to desktop computers.",
  },
  {
    question: "Can I use this template for multiple projects?",
    answer: "Yes, you can use SaaSPro for unlimited personal and commercial projects. Each license allows for multiple deployments.",
  },
  {
    question: "What technologies does SaaSPro use?",
    answer: "SaaSPro is built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It follows modern web development best practices and is optimized for performance.",
  },
  {
    question: "Do you provide support?",
    answer: "Yes, we provide comprehensive documentation and community support. For premium support, we offer dedicated assistance for customization and implementation.",
  },
  {
    question: "Can I export this to static files?",
    answer: "Absolutely! SaaSPro supports static export, making it easy to deploy on any hosting platform including Netlify, Vercel, or traditional web hosts.",
  },
  {
    question: "How do I customize the colors and themes?",
    answer: "You can customize colors through CSS variables in the theme configuration. The template includes multiple pre-built palettes and the ability to create custom ones.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about SaaSPro.
              </p>
            </FadeIn>

            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}