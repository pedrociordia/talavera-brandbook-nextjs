# Hotel Talavera - Brand Book

**Interactive Brand Book built with Next.js 15 + React 19 + TypeScript**

## 📖 Overview

This is a fully interactive, full-screen Brand Book showcasing Hotel Talavera's Visual Identity & Brand System. Built from scratch with Next.js and optimized for Vercel deployment.

## ✨ Features

- **10 Interactive Slides**: Cover, Philosophy, Brand Positioning, Logo System, Typography (2 slides), Color System, Photography, Digital Experience, Closing
- **Multiple Navigation Systems**:
  - Fixed Header Navigation Menu (6 quick-access items)
  - Navigation Dots (10 slides)
  - Keyboard (Arrow keys, PageUp/Down, Home/End)
  - Mouse Wheel
  - Touch/Swipe gestures
- **Floating Scroll Indicator**: Animated mouse icon, fades after first scroll
- **Fast Apple-like Transitions**: 600ms slide transitions with cubic-bezier easing
- **Premium Design**: Neomorphic + Liquid Glass effects, editorial typography
- **Fully Responsive**: Desktop-first with mobile adaptation
- **Downloadable Assets**: Logo SVG/PNG files, Google Fonts download links

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript
- **Styling**: CSS Modules + Global CSS
- **Fonts**: Google Fonts (Montserrat, Red Hat Text)
- **Deployment**: Vercel (Production-ready)

## 📂 Project Structure

```
webapp-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles (1380+ lines)
├── components/
│   ├── Header.tsx          # Fixed glass header
│   ├── HeaderNav.tsx       # Navigation menu
│   ├── ScrollIndicator.tsx # Floating scroll indicator
│   ├── Slide.tsx           # Individual slide component
│   └── SlidesContainer.tsx # Main navigation logic
├── lib/
│   └── slideData.tsx       # All slide content & data
├── public/                 # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
http://localhost:3001
```

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server locally
npm start

# Deploy to Vercel (one-click)
vercel deploy --prod
```

## 🎨 Design System

### Brand Colors
- **Eerie Black**: #1C1C1C (Primary dark)
- **Dim Gray**: #656B71 (Secondary)
- **Imperial Red**: #FF2436 (Accent - max 5%)
- **White**: #FFFFFF (Primary light)

### Typography
- **Headings**: Montserrat (300, 400, 500, 600, 700)
- **Body Text**: Red Hat Text (300, 400, 500, 600)

### Interactions
- **Slide Transition**: 600ms cubic-bezier(0.4, 0, 0.2, 1)
- **CSS Transitions**: 400ms cubic-bezier(0.4, 0, 0.2, 1)
- **Scroll Behavior**: Custom JS (no CSS scroll-behavior)

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px (All features active)
- **Tablet**: 768px - 1024px (Header nav hidden)
- **Mobile**: < 768px (Header nav + scroll indicator hidden)

## 🌐 URLs

- **Local**: http://localhost:3001
- **Production**: [Deploy to Vercel]
- **Hotel Website**: https://hoteltalavera.com

## 🔑 Navigation Shortcuts

- **Arrow Down / Page Down**: Next slide
- **Arrow Up / Page Up**: Previous slide
- **Home**: First slide
- **End**: Last slide
- **Mouse Wheel**: Navigate slides
- **Touch/Swipe**: Mobile navigation

## 📊 Performance Metrics

- **First Load**: < 2s
- **Slide Transition**: 600ms
- **Bundle Size**: ~60KB (optimized)
- **Lighthouse Score**: 95+ (expected)

## 🚢 Deployment to Vercel

### Method 1: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Method 2: GitHub Integration
1. Push code to GitHub
2. Import repository in Vercel Dashboard
3. Click "Deploy"

### Method 3: Drag & Drop
1. Run `npm run build`
2. Go to https://vercel.com/new
3. Drag `.next` folder

## 📄 License

All brand assets and content © Hotel Talavera 2025

## 📧 Contact

**Hotel Talavera**  
Website: https://hoteltalavera.com  
Brand Book Version: 1.0 — 2025
