# Quick Start Guide

## Installation

### 1. Install Dependencies
```bash
pnpm install
# or
npm install
# or
yarn install
```

### 2. Start Development Server
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## Available Routes

### Public Pages
| Route | Description |
|-------|-------------|
| `/` | Landing page with features and CTA |
| `/login` | User login with credentials |
| `/signup` | Account creation form |
| `/forgot-password` | Password recovery flow |
| `/verify` | 2FA code verification |

### Dashboard Pages (Protected)
| Route | Description |
|-------|-------------|
| `/dashboard` | Welcome screen & overview |
| `/dashboard/upload` | Document upload interface |
| `/dashboard/search` | AI search & question asking |
| `/dashboard/documents` | Document detail view |

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── page.tsx           # Landing page
│   ├── login/             # Auth pages
│   ├── signup/
│   ├── forgot-password/
│   ├── verify/
│   └── dashboard/         # Dashboard pages
├── components/            # Reusable components
│   ├── ui/               # UI component library
│   ├── auth-layout.tsx   # Auth pages layout
│   └── dashboard-layout.tsx # Dashboard layout
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies
```

## Key Components

### Button
```tsx
import { Button } from '@/components/ui/button'

<Button variant="primary">Click Me</Button>
```

**Variants**: primary, secondary, outline, ghost
**Sizes**: sm, md, lg

### Input
```tsx
import { Input } from '@/components/ui/input'

<Input 
  label="Email"
  type="email"
  placeholder="user@example.com"
  error={errorMessage}
/>
```

### Card
```tsx
import { Card, CardHeader, CardContent } from '@/components/ui/card'

<Card variant="glass">
  <CardHeader>Title</CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

**Variants**: default, glass, elevated

### Badge
```tsx
import { Badge } from '@/components/ui/badge'

<Badge variant="primary">Label</Badge>
```

**Variants**: primary, secondary, success, warning, error, info

### Icon
```tsx
import { Icon } from '@/components/ui/icon'

<Icon name="settings" size="lg" />
```

## Styling

### Colors
Access colors via Tailwind classes:
```tsx
{/* Primary brand colors */}
className="bg-primary-500 text-primary-400"

{/* Neutrals */}
className="bg-neutral-900 text-neutral-400"

{/* Accents */}
className="text-accent-blue"
```

### Spacing
Uses base 4px scale:
```tsx
className="p-6 gap-4 mb-8"
// Maps to: padding: 24px, gap: 16px, margin-bottom: 32px
```

### Typography
```tsx
{/* Headings */}
className="font-grotesk font-bold text-5xl"

{/* Body text */}
className="font-sans text-base leading-relaxed"
```

## Responsive Design

Use Tailwind breakpoints:
```tsx
className="w-full md:w-1/2 lg:w-1/3"
className="hidden md:flex lg:grid-cols-3"
```

## Customization

### Change Primary Color
Edit `tailwind.config.ts`:
```ts
primary: {
  50: '#f0fdfa',
  // ... change these values
  600: '#0d9488',
}
```

### Change Fonts
Edit `app/layout.tsx` and `tailwind.config.ts`:
```tsx
// In layout.tsx
import { YourFont } from 'next/font/google'

// In tailwind.config.ts
fontFamily: {
  sans: ['var(--font-your-font)'],
}
```

## Building for Production

```bash
pnpm build
pnpm start
```

## Troubleshooting

### Port Already in Use
```bash
pnpm dev -p 3001  # Use different port
```

### Clear Cache
```bash
rm -rf .next
pnpm dev
```

### TypeScript Errors
```bash
pnpm exec tsc --noEmit  # Check types
```

## Project Features

- ✅ Full TypeScript support
- ✅ Tailwind CSS for styling
- ✅ Responsive design (mobile-first)
- ✅ Dark theme optimized
- ✅ Material Symbols icons
- ✅ Glassmorphic UI elements
- ✅ Smooth animations
- ✅ Loading states
- ✅ Form validation patterns
- ✅ SEO optimized

## Common Tasks

### Add New Page
```bash
# Create new route
mkdir -p app/newpage
# Create page component
touch app/newpage/page.tsx
```

### Create New Component
```bash
# Create component file
touch components/my-component.tsx

# Add exports
export function MyComponent() {
  return <div>Component</div>
}
```

### Style with Tailwind
```tsx
<div className="bg-primary-500 hover:bg-primary-600 rounded-lg p-4 transition-colors">
  Styled Element
</div>
```

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

## Support

Refer to `README.md` and `IMPLEMENTATION_SUMMARY.md` for detailed documentation.

---

**Ready to build?** Start modifying files and enjoy hot module replacement!
