import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Contact } from '@/components/sections/Contact';
import { contactData } from '@/lib/data';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Contact {...contactData} />
      </main>
      <Footer />
    </div>
  );
}