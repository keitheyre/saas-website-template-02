import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/animations/FadeIn';

const blogPosts = [
  {
    title: "10 SaaS Landing Page Best Practices for 2025",
    excerpt: "Learn the latest trends and techniques for creating high-converting SaaS landing pages.",
    date: "2025-01-15",
    category: "Design",
    slug: "saas-landing-page-best-practices-2025",
  },
  {
    title: "How to Choose the Right Color Palette for Your Brand",
    excerpt: "A comprehensive guide to selecting colors that resonate with your target audience.",
    date: "2025-01-10",
    category: "Branding",
    slug: "choosing-color-palette-brand",
  },
  {
    title: "The Impact of Page Load Speed on Conversion Rates",
    excerpt: "Why performance matters and how to optimize your landing pages for speed.",
    date: "2025-01-05",
    category: "Performance",
    slug: "page-load-speed-conversion-rates",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Insights, tips, and trends in SaaS design and development.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                      </div>
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        {post.excerpt}
                      </CardDescription>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary hover:underline font-medium"
                      >
                        Read More →
                      </Link>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}