# InsightFlow - AI-Powered Document Intelligence Platform

A modern Next.js application that transforms static documents into actionable intelligence through AI-powered analysis.

## Project Structure

```
insightflow/
├── app/
│   ├── layout.tsx                 # Root layout with fonts and metadata
│   ├── globals.css               # Global styles and design tokens
│   ├── page.tsx                  # Landing page
│   ├── login/page.tsx            # Login page
│   ├── signup/page.tsx           # Sign up page
│   ├── forgot-password/page.tsx  # Password reset page
│   ├── verify/page.tsx           # 2FA verification page
│   └── dashboard/
│       ├── page.tsx              # Dashboard welcome/home
│       ├── upload/page.tsx       # Document upload page
│       ├── search/page.tsx       # AI search/ask page
│       └── documents/page.tsx    # Document detail view
├── components/
│   ├── ui/                       # Reusable UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── icon.tsx
│   │   ├── glass-panel.tsx
│   │   ├── loader.tsx
│   │   └── dialog.tsx
│   ├── auth-layout.tsx           # Layout for auth pages
│   └── dashboard-layout.tsx      # Layout for dashboard pages
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js               # Next.js configuration
└── postcss.config.js            # PostCSS configuration
```

## Design System

### Colors
- **Primary**: Teal/Cyan (`#14b8a6`) - Main brand color
- **Accent**: Blue (`#0ea5e9`), Orange (`#f97316`), Purple (`#a855f7`)
- **Neutrals**: Comprehensive gray scale from white to black
- **Background**: Dark theme (`#ffffff` for light sections, `#0b1326` for dark)

### Typography
- **Fonts**: 
  - Inter (body text)
  - Space Grotesk (headings, technical text)
  - Material Symbols Rounded (icons)
- **Sizes**: xs (12px) → 5xl (48px)
- **Spacing**: Consistent 4px base unit with scales (xs → 4xl)

### Components
- **Button**: Primary, secondary, outline, ghost variants with loading states
- **Input**: Text inputs with labels, errors, helper text, and icons
- **Card**: Flexible cards with header, content, and footer sections
- **Badge**: Status indicators with multiple color variants
- **Icon**: Material Symbols integration for consistent iconography
- **Dialog**: Modal overlay components
- **GlassPanel**: Glassmorphic design elements

## Pages Overview

### Public Pages
1. **Landing Page** (`/`)
   - Hero section with feature highlights
   - Core features showcase
   - Process explanation
   - Performance metrics
   - CTA sections

2. **Authentication Pages**
   - **Login** (`/login`) - Secure login with 2FA option
   - **Signup** (`/signup`) - Account creation with profile setup
   - **Forgot Password** (`/forgot-password`) - Password recovery flow
   - **2FA Verify** (`/verify`) - Two-factor authentication verification

### Dashboard Pages
Protected pages with sidebar navigation and top bar:

1. **Dashboard Home** (`/dashboard`)
   - Welcome message with user stats
   - Getting started checklist
   - Daily insight card
   - Recent documents list

2. **Upload** (`/dashboard/upload`)
   - Drag-and-drop file upload zone
   - File processing progress
   - Recently read documents
   - How-it-works guide
   - Pro tips section

3. **Search/Ask** (`/dashboard/search`)
   - AI-powered question interface
   - Answer results with source citations
   - Suggested follow-up questions
   - Full search interface

4. **Documents** (`/dashboard/documents`)
   - Detailed document view
   - Quick summary section
   - Top findings cards
   - Key people sidebar
   - Timeline and dates
   - Semantic relationship map

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Building for Production

```bash
npm run build
npm start
```

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Icons**: Material Symbols Rounded
- **Fonts**: Google Fonts (Inter, Space Grotesk)
- **Package Manager**: npm/yarn/pnpm

## Key Features

- **Responsive Design**: Mobile-first approach with full responsiveness
- **Dark Theme**: Complete dark mode implementation with glassmorphic elements
- **Type Safety**: Full TypeScript support throughout
- **Component Library**: Reusable, composable UI components
- **Modern UX**: Smooth animations, transitions, and interactive states
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## Component API Examples

### Button
```tsx
import { Button } from '@/components/ui/button'

<Button variant="primary" size="lg" isLoading={false}>
  Click Me
</Button>
```

### Input
```tsx
import { Input } from '@/components/ui/input'

<Input 
  label="Email" 
  type="email" 
  placeholder="user@example.com"
  error="Invalid email"
/>
```

### Card
```tsx
import { Card, CardHeader, CardContent } from '@/components/ui/card'

<Card variant="glass">
  <CardHeader>Title</CardHeader>
  <CardContent>Content goes here</CardContent>
</Card>
```

## Customization

### Theme Colors
Edit `tailwind.config.ts` to customize the color palette:
```ts
colors: {
  primary: { /* teal scale */ },
  accent: { /* accent colors */ },
  // ...
}
```

### Typography
Fonts are configured in:
- `app/layout.tsx` - Font imports and CSS variables
- `tailwind.config.ts` - Font family mappings
- `app/globals.css` - Typography styles

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - InsightFlow 2024

## Support

For issues, questions, or feedback, please contact the development team.
