import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Pricing } from '@/components/sections/Pricing';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { heroData, featuresData, pricingData, testimonialsData, contactData } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero {...heroData} />
        <Features {...featuresData} />
        <Pricing {...pricingData} />
        <Testimonials {...testimonialsData} />
        <Contact {...contactData} />
      </main>
      <Footer />
    </div>
  );
}
