# Layout Components - Quick Reference

## Files Created

| File | Purpose | Size |
|------|---------|------|
| `components/Header.tsx` | Main header with logo and navigation | 1.6 KB |
| `components/Navigation.tsx` | Responsive navigation with mobile menu | 2.6 KB |
| `components/Footer.tsx` | Footer with company info and social links | 9.9 KB |
| `app/layout.tsx` | Root layout wrapping all pages | Updated |

## Components Overview

### Header
- **Location:** `components/Header.tsx`
- **Features:** Sticky header, logo, company branding, navigation integration
- **Responsive:** Desktop nav visible, mobile hamburger menu
- **Dark Mode:** ✓ Supported

```tsx
import { Header } from '@/components/Header';
<Header />
```

### Navigation
- **Location:** `components/Navigation.tsx`
- **Type:** Client component (`'use client'`)
- **Features:** Mobile menu with toggle, desktop nav bar
- **Routes:**
  - Home `/`
  - About `/about`
  - Services `/services`
  - Case Studies `/case-studies`
  - Blog `/blog`
  - Contact `/contact`

```tsx
import { Navigation } from '@/components/Navigation';
<Navigation />
```

### Footer
- **Location:** `components/Footer.tsx`
- **Type:** Server component
- **Features:** Company info, quick links, legal links, contact info, social media
- **Dark Mode:** ✓ Supported
- **Responsive:** 1 column (mobile) → 4 columns (desktop)

```tsx
import { Footer } from '@/components/Footer';
<Footer />
```

## Root Layout Structure

```tsx
// app/layout.tsx
<html>
  <body className="flex flex-col min-h-screen">
    <Header />           {/* Sticky */}
    <main className="flex-grow">
      {children}         {/* Page content - grows to fill space */}
    </main>
    <Footer />           {/* Stays at bottom */}
  </body>
</html>
```

## Responsive Behavior

### Header
| Screen | Layout |
|--------|--------|
| Mobile | Logo icon + hamburger menu |
| Desktop | Full logo + horizontal nav |

### Navigation
| Screen | Display |
|--------|---------|
| Mobile | Hamburger button + dropdown menu (when open) |
| Desktop | Horizontal nav bar |

### Footer
| Screen | Columns |
|--------|---------|
| Mobile | 1 column (stacked) |
| Tablet | 2-4 columns |
| Desktop | 4 columns |

## Customization Examples

### Add a Navigation Item

**File:** `components/Navigation.tsx`

```typescript
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  // Add new item:
  { label: 'Resources', href: '/resources' },
];
```

### Update Company Contact Info

**File:** `components/Footer.tsx`

```tsx
// Update address
<span className="block">123 Tech Street</span>
<span className="block">San Francisco, CA 94105</span>
<span className="block">United States</span>

// Update email
<a href="mailto:hello@kaycore.tech">
  hello@kaycore.tech
</a>

// Update phone
<a href="tel:+14155551234">
  +1 (415) 555-1234
</a>
```

### Update Social Media Links

**File:** `components/Footer.tsx`

```tsx
{/* Twitter */}
<a href="https://twitter.com/your-handle">
  {/* Icon SVG */}
</a>

{/* LinkedIn */}
<a href="https://linkedin.com/company/your-company">
  {/* Icon SVG */}
</a>

{/* Add more social links following the same pattern */}
```

### Change Logo

**File:** `components/Header.tsx`

```tsx
{/* Replace the K icon with an image */}
import Image from 'next/image';

<Image 
  src="/logo.png" 
  alt="Kaycore Technologies" 
  width={40} 
  height={40}
  className="rounded-lg shadow-md"
/>
```

### Customize Colors

Edit these sections to change the color scheme:

**Header Logo:**
```tsx
<div className="bg-gradient-to-br from-blue-400 to-blue-600">
  {/* Change blue-400 and blue-600 to your colors */}
</div>
```

**Links Hover:**
```tsx
className="hover:text-blue-400"  {/* Change blue-400 to your color */}
```

## Accessibility Features

### Keyboard Navigation
- Tab through all interactive elements
- Enter/Space to activate menu button
- Arrow keys work with proper ARIA roles

### Screen Readers
- Semantic HTML (header, nav, main, footer)
- ARIA labels for menu controls
- Descriptive link text
- Proper use of phone (tel:) and email (mailto:) links

### Color Contrast
- All text meets WCAG AA standards
- Dark mode provides good contrast
- Hover states are clearly visible

## Mobile Menu Behavior

### Opens/Closes When:
- Hamburger button clicked
- A navigation link clicked
- Window resized above `md` breakpoint

### Visual Feedback:
- Hamburger icon rotates when open
- Menu slides in below header
- Links change color on hover

## Dark Mode Support

Components automatically detect and support dark mode via:
- System preference (`prefers-color-scheme`)
- Manual toggle (implement your own toggle for manual control)

**Dark mode colors:**
```
Background: dark:bg-gray-950, dark:bg-black
Text: dark:text-gray-50, dark:text-gray-400
Borders: dark:border-gray-800
Hover: dark:hover:text-blue-400
```

## Semantic HTML Usage

- `<header>` - Page header with branding
- `<nav>` - Navigation regions with `aria-label`
- `<main>` - Main page content
- `<footer>` - Page footer
- `<address>` - Contact information
- `<a>` - All navigation links
- `<button>` - Mobile menu toggle
- `<svg>` - Icon graphics

## Performance

- No external dependencies (besides Next.js)
- Client component only for Navigation (manages state)
- Footer is server-rendered
- SVG icons are lightweight
- CSS uses Tailwind utility classes
- Sticky header uses GPU-accelerated positioning

## Testing Checklist

- [ ] View on mobile (< 768px) - hamburger menu appears
- [ ] View on desktop (≥ 768px) - full navigation appears
- [ ] Toggle mobile menu - opens/closes smoothly
- [ ] Click navigation links - page navigates correctly
- [ ] Test with keyboard Tab - all elements reachable
- [ ] Test with screen reader - all text is read correctly
- [ ] Toggle dark mode - all colors update
- [ ] Click footer links - navigates to correct pages
- [ ] Click social links - opens in new tab
- [ ] Test on different devices - responsive on all sizes
- [ ] Build succeeds - `npm run build` completes without errors

## Documentation Files

- **LAYOUT_DOCUMENTATION.md** - Detailed component documentation
- **LAYOUT_ARCHITECTURE.md** - Visual structure and hierarchy
- **This file** - Quick reference and examples

## Next Steps

1. **Customize branding:**
   - Update company name and address in Header and Footer
   - Replace K icon with actual logo
   - Update social media URLs

2. **Create page routes:**
   - `app/about/page.tsx`
   - `app/services/page.tsx`
   - `app/case-studies/page.tsx`
   - `app/blog/page.tsx`
   - `app/contact/page.tsx`

3. **Test responsive design:**
   - Use browser DevTools
   - Test on real devices
   - Verify all links work

4. **Add more features:**
   - Implement mobile menu icon animation
   - Add breadcrumb navigation
   - Add search functionality
   - Implement theme switcher

## Common Issues & Solutions

### Mobile menu doesn't close after link click
**Fix:** Check that the `setIsOpen(false)` is in the Link click handler in Navigation.tsx

### Header not staying sticky
**Fix:** Verify `sticky top-0 z-50` classes are in header element

### Footer links not working
**Fix:** Ensure page routes exist (e.g., `/about/page.tsx`)

### Dark mode colors not changing
**Fix:** Check browser dark mode setting or add manual toggle

### Social icons not showing
**Fix:** Verify SVG viewBox and className attributes are correct

---

**Version:** 1.0  
**Created:** December 11, 2025  
**Compatible with:** Next.js 16+, TypeScript 5+, Tailwind CSS 4+
