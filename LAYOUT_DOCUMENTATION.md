# Layout & Navigation Components Documentation

## Overview

The layout system consists of semantic, accessible, and responsive components that wrap all pages in your Next.js application.

## Components

### 1. **Header** (`components/Header.tsx`)

The main header component featuring the Kaycore Technologies branding and navigation.

**Features:**
- Sticky positioning (stays at top while scrolling)
- Responsive logo with gradient styling
- Company branding (Kaycore Technologies LLP)
- Integrated Navigation component
- Dark mode support
- Accessible with proper ARIA labels

**Usage:**
```tsx
import { Header } from '@/components/Header';

<Header />
```

**Styling:**
- Desktop: Full navigation visible
- Mobile: Hamburger menu button (Navigation handles mobile menu)
- Dark mode: Automatic theme switching based on system preference

### 2. **Navigation** (`components/Navigation.tsx`)

Client-side navigation component with mobile menu support.

**Features:**
- Desktop: Horizontal navigation bar
- Mobile: Hamburger menu with toggle state
- Responsive breakpoint at `md` (768px)
- Menu items:
  - Home (`/`)
  - About (`/about`)
  - Services (`/services`)
  - Case Studies (`/case-studies`)
  - Blog (`/blog`)
  - Contact (`/contact`)
- Smooth transitions and hover effects
- Accessibility features:
  - `aria-label` for menu button
  - `aria-expanded` for menu state
  - `aria-controls` for menu targeting

**Usage:**
```tsx
import { Navigation } from '@/components/Navigation';

<Navigation />
```

**Mobile Menu:**
- Appears below header when toggled
- Closes automatically when a link is clicked
- Uses smooth animations (SVG icon rotation)

### 3. **Footer** (`components/Footer.tsx`)

Comprehensive footer with company information, links, and social media.

**Features:**
- Company information and tagline
- Quick links (About, Services, Case Studies, Blog)
- Legal links (Privacy, Terms, Cookies)
- Contact information:
  - Physical address
  - Email (mailto link)
  - Phone (tel link)
- Social media links:
  - Twitter
  - LinkedIn
  - GitHub
  - Instagram
- Copyright information
- LLP registration number
- Responsive grid layout

**Usage:**
```tsx
import { Footer } from '@/components/Footer';

<Footer />
```

**Layout:**
- Desktop: 4-column grid with contact info, links, and social
- Mobile: Single column with stacked sections
- Footer divider for visual separation

## Root Layout (`app/layout.tsx`)

The root layout component wraps all pages and provides:

```tsx
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

**Key Features:**
- Flex layout ensures footer sticks to bottom
- `flex-grow` on main ensures it fills available space
- Header is sticky (top: 0, z-50)
- Footer always at bottom
- Responsive design with Tailwind CSS
- Dark mode support throughout

## Semantic HTML

All components use semantic HTML:

- `<header>` - Main page header with navigation
- `<nav>` - Navigation sections with `aria-label`
- `<main>` - Main page content
- `<footer>` - Page footer with contact info
- `<address>` - Contact information (with `not-italic` class)
- `<a>` - Links with proper href and accessibility attributes

## Accessibility Features

### ARIA Labels
- Navigation has `aria-label="Main navigation"` and `aria-label="Mobile navigation"`
- Mobile menu button has:
  - `aria-label="Toggle menu"`
  - `aria-expanded={isOpen}`
  - `aria-controls="mobile-menu"`
- Links have descriptive text or `aria-label` attributes

### Semantic Structure
- Proper heading hierarchy
- Form elements with associated labels
- List elements for navigation and social links

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Tab order follows visual layout
- Hamburger menu responds to keyboard input

### Screen Readers
- Link text is descriptive
- Icons have `aria-label` attributes
- Phone numbers use `tel:` links
- Emails use `mailto:` links
- Social links have `rel="noopener noreferrer"` for security

## Responsive Design

### Breakpoints
- **Mobile**: < 768px (md breakpoint)
- **Tablet/Desktop**: ≥ 768px

### Header
- Mobile: Logo icon only, hamburger menu
- Desktop: Full logo with company name, horizontal navigation

### Footer
- Mobile: Single column layout
- Tablet+: 4-column grid layout
- Social links stay horizontal on all sizes

### Navigation
- **Mobile**: Dropdown menu below header
- **Desktop**: Horizontal navigation bar

## Styling with Tailwind CSS

### Color Scheme
- Light mode: White background, gray text
- Dark mode: Gray-950 background, light text
- Primary color: Blue (from theme)
- Hover states: Color transitions
- Social links: Blue-400 on hover

### Transitions
- All interactive elements use `transition-colors`
- Smooth scaling and shadow effects on hover
- Icon rotation animation in menu button

### Responsive Classes
- `hidden md:flex` - Hide on mobile, show on desktop
- `md:flex-row` - Column on mobile, row on desktop
- `md:h-20` - Different heights for mobile/desktop
- `md:grid-cols-4` - Responsive grid

## Configuration

### Colors
Edit `tailwind.config.ts` to customize:
```typescript
colors: {
  primary: '#3B82F6',    // Blue
  secondary: '#10B981'   // Green
}
```

### Navigation Items
Edit `components/Navigation.tsx` `navItems` array to add/remove routes:
```typescript
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  // Add more items
];
```

### Footer Content
Edit `components/Footer.tsx` to update:
- Company address
- Contact email and phone
- Social media URLs
- Quick links
- Legal links

## Dark Mode

All components support dark mode via Tailwind CSS `dark:` prefix:
- Dark mode colors are automatically applied based on system preference
- Override with `[data-theme="light/dark"]` if needed

## Performance

- Header uses sticky positioning (GPU-accelerated)
- Navigation is a client component (`'use client'`) for state management
- Footer is a server component (default)
- No external dependencies required
- SVG icons for social links (lightweight)

## SEO

- Semantic HTML structure
- Proper heading hierarchy
- Descriptive link text
- Schema-ready address markup
- Metadata in root layout

## Customization Guide

### Change Logo
In `Header.tsx`:
```tsx
{/* Replace K icon with your logo image */}
<Image src="/logo.png" alt="Kaycore" width={40} height={40} />
```

### Add More Navigation Items
In `Navigation.tsx`:
```typescript
const navItems = [
  // ... existing items
  { label: 'Resources', href: '/resources' },
];
```

### Update Company Info
In `Footer.tsx`:
```tsx
// Update address
<span className="block">Your Address Here</span>

// Update email
<a href="mailto:your@email.com">your@email.com</a>

// Update phone
<a href="tel:+1234567890">+1 (234) 567-8900</a>
```

### Customize Colors
In `Header.tsx` and `Footer.tsx`:
- Change `from-blue-400 to-blue-600` gradient
- Update hover states like `hover:text-blue-400`

---

## Testing

To test the layout components:

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Check responsive design:**
   - Use browser DevTools to test mobile/tablet/desktop views
   - Test at 375px (mobile), 768px (tablet), 1024px (desktop)

3. **Test navigation:**
   - Click hamburger menu on mobile
   - Verify menu closes when clicking a link
   - Test all navigation links work

4. **Test accessibility:**
   - Use keyboard Tab to navigate
   - Test with screen reader (NVDA, JAWS, VoiceOver)
   - Verify all links have proper descriptions

5. **Test dark mode:**
   - Use system dark mode preference
   - Verify all colors are visible and readable

---

Created: December 11, 2025
