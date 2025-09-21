import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Pricing } from '@/components/sections/Pricing';
import { pricingData } from '@/lib/data';

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Pricing {...pricingData} />
      </main>
      <Footer />
    </div>
  );
}