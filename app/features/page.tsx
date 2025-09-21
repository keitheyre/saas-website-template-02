import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Features } from '@/components/sections/Features';
import { featuresData } from '@/lib/data';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Features {...featuresData} />
      </main>
      <Footer />
    </div>
  );
}