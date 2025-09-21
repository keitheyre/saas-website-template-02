import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FadeIn } from '@/components/animations/FadeIn';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About SaaSPro</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're on a mission to empower SaaS companies with beautiful, high-converting landing pages
                that drive growth and success.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className="text-muted-foreground mb-4">
                    Founded in 2020, SaaSPro was born from the frustration of developers and entrepreneurs
                    struggling to create professional landing pages without spending weeks on design and development.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We believe that every great product deserves a great landing page. That&apos;s why we&apos;ve built
                    a template that&apos;s not just beautiful, but also incredibly flexible and easy to customize.
                  </p>
                  <p className="text-muted-foreground">
                    Today, thousands of SaaS companies trust SaaSPro to power their online presence and drive
                    customer acquisition.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="right">
                <div className="bg-muted/30 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Our Values</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold">Quality First</h4>
                        <p className="text-muted-foreground text-sm">Every line of code is crafted with care and attention to detail.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold">Customer Success</h4>
                        <p className="text-muted-foreground text-sm">Your success is our success. We&apos;re here to support you every step of the way.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold">Innovation</h4>
                        <p className="text-muted-foreground text-sm">We stay ahead of web trends to ensure your landing page is always modern.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}