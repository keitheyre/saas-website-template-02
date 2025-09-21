'use client';

import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { ParallaxScroll } from '@/components/animations/ParallaxScroll';
import { HeroProps } from '@/lib/types';

export function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  variant = 'default',
}: HeroProps) {
  const variantClasses = {
    default: 'bg-gradient-to-br from-primary/10 via-background to-secondary/10',
    minimal: 'bg-background',
    vibrant: 'bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20',
    'ai-focused': 'bg-gradient-to-br from-primary/5 via-background to-accent/5',
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${variantClasses[variant]}`}>
      {/* Background gradient */}
      <div className="absolute inset-0" />

      {/* Parallax background elements */}
      <ParallaxScroll speed={0.3} className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
      <ParallaxScroll speed={0.5} className="absolute bottom-20 right-10 w-24 h-24 bg-accent/20 rounded-full blur-xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-4 ${
              variant === 'minimal' ? 'text-foreground' : 'bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'
            }`}>
              {title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              {subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={ctaLink} className="inline-block">
              <Button size="lg" className="text-lg px-8 py-3">
                {ctaText}
              </Button>
            </a>
            {secondaryCtaText && secondaryCtaLink && (
              <a href={secondaryCtaLink} className="inline-block">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  {secondaryCtaText}
                </Button>
              </a>
            )}
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <FadeIn delay={0.6} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </FadeIn>
    </section>
  );
}