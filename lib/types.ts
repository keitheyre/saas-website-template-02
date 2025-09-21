export interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  variant?: 'default' | 'minimal' | 'vibrant' | 'ai-focused';
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface FeaturesProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

export interface PricingProps {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface TestimonialsProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export interface ContactProps {
  title: string;
  subtitle: string;
  email: string;
  phone?: string;
  address?: string;
}