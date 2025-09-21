# SaaSPro Landing - SaaS Landing Page Template

A modern, customizable SaaS landing page template built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd saaspro-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 📦 Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui + Radix UI
- **Forms**: React Hook Form
- **Fonts**: Geist Sans & Geist Mono

## 🎨 Customization Guide

### Content Customization

Edit `lib/data.ts` to change:
- Hero section text and CTAs
- Features list and descriptions
- Pricing plans and features
- Testimonials and reviews
- Contact form details

### Theme Customization

#### Change Colors
Edit `lib/theme.ts` to modify color palettes:
- `default` - Neutral gray theme
- `vibrant` - Blue/pink accent theme
- `minimal` - Clean minimal theme
- `ai-focused` - Purple/blue AI theme
- `neon` - Bright neon theme

#### Switch Themes
Users can toggle between light/dark mode and select color palettes using the controls in the navbar.

### Component Customization

#### Hero Section
Modify `components/sections/Hero.tsx` for:
- Layout changes
- Animation adjustments
- Button behavior

#### Features Section
Edit `components/sections/Features.tsx` for:
- Feature icons and descriptions
- Grid layout modifications

#### Pricing Section
Update `components/sections/Pricing.tsx` for:
- Plan structures
- Pricing display
- CTA buttons

### Styling Changes

#### Global Styles
Edit `app/globals.css` for:
- Custom CSS variables
- Global font settings
- Base component styles

#### Tailwind Config
Modify `tailwind.config.ts` for:
- Custom color schemes
- Font family additions
- Animation keyframes

## 📁 Key Files to Modify

```
lib/
├── data.ts          # Main content (text, features, pricing)
└── theme.ts         # Color palettes and themes

components/sections/
├── Hero.tsx         # Hero section layout
├── Features.tsx     # Features section
├── Pricing.tsx      # Pricing plans
├── Testimonials.tsx # Customer testimonials
└── Contact.tsx      # Contact form

app/
├── layout.tsx       # Global layout and metadata
├── page.tsx         # Homepage assembly
└── globals.css      # Global styles
```

## 🚀 Deployment

### Firebase Deployment

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```

4. **Build and deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### Other Platforms

The template supports deployment to:
- **Vercel**: `vercel --prod`
- **Netlify**: Connect repository and set build command to `npm run build`
- **Static hosts**: Use `npm run export` for static export

## 🛠️ Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run test     # Run tests (if configured)
```

## 📱 Features

- ✅ Responsive design (mobile-first)
- ✅ Dark/Light mode toggle
- ✅ 5 color palettes
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized
- ✅ Accessibility compliant (WCAG 2.1 AA)
- ✅ TypeScript for type safety
- ✅ Component-based architecture

## 🤝 Support

**Keith Eyre**
- Email: keith.eyre91@gmail.com
- Live Demo: Coming soon (deploying to Firebase)

## 📄 License

MIT License - feel free to use this template for personal or commercial projects.
