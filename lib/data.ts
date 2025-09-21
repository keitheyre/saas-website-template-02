import { HeroProps, FeaturesProps, PricingProps, TestimonialsProps, ContactProps } from './types';

export const heroData: HeroProps = {
  title: "Transform Your Business with SaaSPro",
  subtitle: "The ultimate SaaS landing page template",
  description: "Create stunning, high-converting landing pages with our customizable template. Built with modern technologies and designed for performance.",
  ctaText: "Get Started Free",
  ctaLink: "#pricing",
  secondaryCtaText: "Learn More",
  secondaryCtaLink: "#features",
  variant: 'default',
};

export const featuresData: FeaturesProps = {
  title: "Powerful Features",
  subtitle: "Everything you need to build amazing SaaS products",
  features: [
    {
      title: "Responsive Design",
      description: "Looks perfect on all devices with mobile-first design principles.",
      icon: "📱",
    },
    {
      title: "Customizable Themes",
      description: "Multiple color palettes and themes to match your brand.",
      icon: "🎨",
    },
    {
      title: "Fast Performance",
      description: "Optimized for speed with lazy loading and modern web standards.",
      icon: "⚡",
    },
    {
      title: "SEO Ready",
      description: "Built-in SEO optimization with meta tags and structured data.",
      icon: "🔍",
    },
    {
      title: "Accessibility",
      description: "WCAG 2.1 compliant with keyboard navigation and screen reader support.",
      icon: "♿",
    },
    {
      title: "Modern Animations",
      description: "Smooth animations and micro-interactions powered by Framer Motion.",
      icon: "✨",
    },
  ],
};

export const pricingData: PricingProps = {
  title: "Simple, Transparent Pricing",
  subtitle: "Choose the plan that fits your needs",
  plans: [
    {
      name: "Starter",
      price: "$9",
      period: "month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 users",
        "10GB storage",
        "Basic support",
        "Core features",
      ],
      ctaText: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "$29",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 20 users",
        "100GB storage",
        "Priority support",
        "Advanced features",
        "API access",
      ],
      ctaText: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Unlimited storage",
        "24/7 support",
        "All features",
        "Custom integrations",
        "Dedicated account manager",
      ],
      ctaText: "Contact Sales",
    },
  ],
};

export const testimonialsData: TestimonialsProps = {
  title: "What Our Customers Say",
  subtitle: "Join thousands of satisfied customers",
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      content: "SaaSPro helped us launch our product 3x faster. The template is incredibly flexible and the support is outstanding.",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateLab",
      content: "The customization options are amazing. We were able to match our brand perfectly without any coding knowledge.",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "GrowthCo",
      content: "Performance is top-notch. Our conversion rates improved significantly after switching to SaaSPro.",
    },
  ],
};

export const contactData: ContactProps = {
  title: "Get in Touch",
  subtitle: "We'd love to hear from you",
  email: "hello@saaspro.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Street, Tech City, TC 12345",
};