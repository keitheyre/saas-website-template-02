import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SaaSPro Landing - Modern SaaS Landing Page Template",
    template: "%s | SaaSPro Landing",
  },
  description:
    "A highly customizable, responsive landing page template for SaaS products, startups, and tech companies. Built with Next.js, TypeScript, and Tailwind CSS.",
  keywords: ["SaaS", "landing page", "template", "Next.js", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "SaaSPro Team" }],
  creator: "SaaSPro",
  publisher: "SaaSPro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://saaspro-landing.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saaspro-landing.com",
    title: "SaaSPro Landing - Modern SaaS Landing Page Template",
    description:
      "A highly customizable, responsive landing page template for SaaS products, startups, and tech companies.",
    siteName: "SaaSPro Landing",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaSPro Landing - Modern SaaS Landing Page Template",
    description:
      "A highly customizable, responsive landing page template for SaaS products, startups, and tech companies.",
    creator: "@saaspro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
