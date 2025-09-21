'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import { Palette } from '@/lib/theme';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, palette, setPalette } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const palettes = ['default', 'vibrant', 'minimal', 'ai-focused', 'neon'] as const;

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            SaaSPro
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>

            {/* Theme Controls */}
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={toggleTheme}>
                {theme === 'light' ? '🌙' : '☀️'}
              </Button>
              <select
                value={palette}
                onChange={(e) => setPalette(e.target.value as Palette)}
                className="px-2 py-1 text-sm border rounded"
              >
                {palettes.map((p) => (
                  <option key={p} value={p}>
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <Button asChild>
              <a href="#pricing">Get Started</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="#features" className="hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="#about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>

              <div className="flex items-center space-x-2 pt-4">
                <Button variant="outline" size="sm" onClick={toggleTheme}>
                  {theme === 'light' ? '🌙' : '☀️'}
                </Button>
                <select
                  value={palette}
                  onChange={(e) => setPalette(e.target.value as Palette)}
                  className="px-2 py-1 text-sm border rounded"
                >
                  {palettes.map((p) => (
                    <option key={p} value={p}>
                      {p.charAt(0).toUpperCase() + p.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <Button className="w-full" asChild>
                <a href="#pricing">Get Started</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}