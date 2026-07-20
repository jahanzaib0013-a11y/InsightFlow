# Project Structure

## Overview

InsightFlow is a Next.js 15 application with a clean, scalable folder structure. All design references are organized in a dedicated `designs/` folder to keep the main codebase clean.

```
project-root/
├── app/                          # Next.js App Router
│   ├── dashboard/               # Dashboard routes
│   │   ├── page.tsx            # Welcome dashboard
│   │   ├── upload/page.tsx      # Document upload
│   │   ├── search/page.tsx      # AI search/ask
│   │   └── documents/page.tsx   # Documents management
│   ├── login/page.tsx           # Login page
│   ├── signup/page.tsx          # Signup page
│   ├── forgot-password/page.tsx # Password recovery
│   ├── verify/page.tsx          # 2FA verification
│   ├── page.tsx                 # Landing page
│   ├── layout.tsx               # Root layout
│   ├── global-error.tsx         # Error boundary
│   └── globals.css              # Global styles
│
├── components/                   # Reusable React components
│   ├── ui/                      # Atomic UI components
│   │   ├── button.tsx           # Button component (4 variants)
│   │   ├── input.tsx            # Input field
│   │   ├── card.tsx             # Card container
│   │   ├── badge.tsx            # Badge component
│   │   ├── icon.tsx             # Icon wrapper
│   │   ├── glass-panel.tsx      # Glassmorphic panel
│   │   ├── loader.tsx           # Loading spinner
│   │   └── dialog.tsx           # Modal dialog
│   │
│   ├── auth-layout.tsx          # Authentication page wrapper
│   └── dashboard-layout.tsx     # Dashboard layout wrapper
│
├── lib/                         # Utility functions and shared logic
│   ├── utils.ts                 # Helper functions (cn, formatters)
│   ├── constants.ts             # App constants and config
│   └── types.ts                 # TypeScript type definitions
│
├── public/                      # Static assets
│   └── (favicon, images, etc.)
│
├── designs/                     # Design references (organized by use)
│   ├── insightflow_landing_page_performance_redesign/
│   ├── login_simplified_v2/
│   ├── sign_up_simplified_v2/
│   ├── forgot_password_simplified_v2/
│   ├── 2fa_simplified_v2/
│   ├── welcome_dashboard/
│   ├── upload_learn/
│   ├── ask_anything/
│   ├── document_highlights/
│   ├── (and mobile variants)
│   └── future_professional/     # Design specifications
│
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies and scripts
├── .npmrc                        # NPM configuration
├── .gitignore                   # Git ignore rules
│
├── README.md                    # Project overview
├── QUICKSTART.md                # Quick start guide
├── IMPLEMENTATION_SUMMARY.md    # Implementation details
└── PROJECT_STRUCTURE.md         # This file
```

## Key Directories

### `/app` - Next.js App Router
Contains all routes and page layouts. Follows Next.js 15 conventions:
- File-based routing (e.g., `app/login/page.tsx` → `/login`)
- Automatic layouts and error boundaries
- Server-side rendering by default

### `/components`
- **`/ui`** - Reusable atomic components (Button, Input, Card, etc.)
- **`auth-layout.tsx`** - Wrapper for authentication pages (centered form layout)
- **`dashboard-layout.tsx`** - Wrapper for dashboard pages (sidebar + main content)

### `/lib`
- **`utils.ts`** - Utility functions like `cn()` for className merging, formatters
- **`constants.ts`** - Navigation, features, metrics, and other constants
- **`types.ts`** - TypeScript interfaces for Document, Message, SearchResult, User

### `/designs`
All design reference files are organized here:
- Original design HTML and screenshots
- One folder per page/feature
- Mobile and desktop variants included
- Design specifications (DESIGN.md)

## Component Variants

### Button
- `primary` - Main action button (teal background)
- `secondary` - Secondary action (light background)
- `outline` - Outline style (border only)
- `ghost` - Text button (no background)

### Badge
- Six color variants: teal, blue, purple, orange, red, gray

### Card
- Container with header, content, and footer sections
- Support for icons, descriptions, and footers

## Design System

### Colors
- **Primary**: Teal (#14b8a6)
- **Secondary**: Blue (#0ea5e9)
- **Accent**: Purple (#a855f7), Orange (#f97316), Red (#ef4444)
- **Neutral**: Gray scale from white to dark

### Typography
- **Headings**: Space Grotesk (Bold)
- **Body**: Inter (Regular)
- **Icons**: Material Symbols

### Spacing
- Base unit: 4px (0.25rem)
- Common sizes: 4, 8, 12, 16, 20, 24, 32, 40, 48px

## Getting Started

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Run development server**
   ```bash
   pnpm dev
   ```

3. **Build for production**
   ```bash
   pnpm build
   pnpm start
   ```

4. **Check linting**
   ```bash
   pnpm lint
   ```

## Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `app/page.tsx` | Landing page with hero, features, process, metrics |
| `/login` | `app/login/page.tsx` | User login with email/password |
| `/signup` | `app/signup/page.tsx` | User registration |
| `/forgot-password` | `app/forgot-password/page.tsx` | Password recovery flow |
| `/verify` | `app/verify/page.tsx` | 2FA verification code entry |
| `/dashboard` | `app/dashboard/page.tsx` | Welcome dashboard with getting started |
| `/dashboard/upload` | `app/dashboard/upload/page.tsx` | Document upload and processing |
| `/dashboard/search` | `app/dashboard/search/page.tsx` | AI-powered search and chat |
| `/dashboard/documents` | `app/dashboard/documents/page.tsx` | Document list with details |

## Configuration Files

- **next.config.js** - Next.js build and runtime settings
- **tailwind.config.ts** - Tailwind CSS customization
- **tsconfig.json** - TypeScript compiler options
- **postcss.config.js** - CSS processing pipeline
- **package.json** - Dependencies and scripts

## Environment Variables

Currently none required. When adding backend integration, add `.env.local` with:
```
NEXT_PUBLIC_API_URL=
DATABASE_URL=
```

## Development Notes

- All pages use Tailwind CSS for styling
- Components are TypeScript for type safety
- Responsive design with mobile-first approach
- Material Symbols for icons (loaded from Google Fonts)
- Glassmorphic effects with backdrop blur and rgba backgrounds

## Future Enhancements

- Backend API integration
- Authentication system
- Document processing pipeline
- AI chat functionality
- User profile and settings
