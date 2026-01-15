# Layout Component Architecture

## Visual Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                          HEADER (Sticky)                        │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  [K] Kaycore    │  Home  About  Services  Case Studies   │  │
│  │     Technologies │  Blog  Contact            [≡]         │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                        (≡ = Mobile hamburger menu)

┌─────────────────────────────────────────────────────────────────┐
│                         MAIN CONTENT                            │
│                                                                 │
│                    (flex-grow - fills space)                   │
│                                                                 │
│                     Page content goes here                      │
│                                                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                         FOOTER                                  │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  Company Info  │  Quick Links  │  Legal  │  Contact Info  │ │
│  │  • About       │  • About Us   │ • Privacy              │ │
│  │  • Services    │  • Services   │ • Terms   Email: ...   │ │
│  │  • Case Studies│  • Blog       │ • Cookies Phone: ...   │ │
│  │                │               │           Address: ... │ │
│  └───────────────────────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │ © 2025 Kaycore Technologies LLP          [Social Icons]   │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
RootLayout (app/layout.tsx)
├── Header
│   ├── Logo & Branding
│   │   └── Kaycore Technologies LLP
│   └── Navigation
│       ├── Desktop Nav (md+)
│       │   ├── Home
│       │   ├── About
│       │   ├── Services
│       │   ├── Case Studies
│       │   ├── Blog
│       │   └── Contact
│       └── Mobile Nav (< md)
│           ├── Hamburger Button
│           └── Dropdown Menu
│               ├── Home
│               ├── About
│               ├── Services
│               ├── Case Studies
│               ├── Blog
│               └── Contact
├── Main Content
│   └── {children} - Page-specific content
└── Footer
    ├── Company Info Section
    ├── Quick Links Section
    ├── Legal Links Section
    ├── Contact Info Section
    └── Footer Bottom
        ├── Copyright Info
        └── Social Links
            ├── Twitter
            ├── LinkedIn
            ├── GitHub
            └── Instagram
```

## Component Files

### Header (`components/Header.tsx`) - 47 lines
```
Sticky Header
├── Logo Icon (K)
├── Company Name: Kaycore
└── Company Subtitle: Technologies LLP
└── Navigation Component
```

**Styling:**
- `sticky top-0 z-50` - Stays at top
- `bg-white dark:bg-gray-950` - Theme support
- `border-b border-gray-200 dark:border-gray-800` - Subtle divider
- `h-16 md:h-20` - Responsive height

---

### Navigation (`components/Navigation.tsx`) - 78 lines
```
Navigation Controller
├── Mobile Menu Button (md: hidden)
│   ├── SVG Hamburger Icon
│   └── Icon rotation animation
├── Desktop Navigation (hidden < md)
│   ├── Home Link
│   ├── About Link
│   ├── Services Link
│   ├── Case Studies Link
│   ├── Blog Link
│   └── Contact Link
└── Mobile Menu (hidden unless open)
    ├── Home Link
    ├── About Link
    ├── Services Link
    ├── Case Studies Link
    ├── Blog Link
    └── Contact Link
```

**State Management:**
- Uses `useState` for mobile menu toggle
- Auto-closes menu on link click

---

### Footer (`components/Footer.tsx`) - 248 lines
```
Footer (Dark Background)
├── Main Content Grid
│   ├── Company Info
│   │   ├── Logo Icon
│   │   ├── Company Name
│   │   └── Tagline
│   ├── Company Links
│   │   ├── About Us
│   │   ├── Services
│   │   ├── Case Studies
│   │   └── Blog
│   ├── Legal Links
│   │   ├── Privacy Policy
│   │   ├── Terms of Service
│   │   └── Cookie Policy
│   └── Contact Info
│       ├── Address (3 lines)
│       ├── Email (mailto)
│       └── Phone (tel)
├── Divider
└── Footer Bottom
    ├── Copyright & LLP Info
    └── Social Media Links (4 icons)
        ├── Twitter
        ├── LinkedIn
        ├── GitHub
        └── Instagram
```

**Responsive:**
- Desktop: `grid-cols-4` (4 columns)
- Mobile: `grid-cols-1` (1 column)
- Bottom section: `flex-col md:flex-row`

---

### Root Layout (`app/layout.tsx`) - 36 lines
```
HTML Document
└── Body (flex flex-col min-h-screen)
    ├── Header (sticky)
    ├── Main (flex-grow)
    │   └── {children}
    └── Footer
```

**Layout Benefits:**
- Footer always at bottom (even with little content)
- Flex layout ensures proper spacing
- `min-h-screen` ensures full viewport height

---

## Responsive Breakpoints

### Mobile (< 768px / < md)
```
┌─────────────┐
│ [K] Kaycore │ ≡
├─────────────┤
│  Home       │
│  About      │
│  Services   │
├─────────────┤
│  Content    │
├─────────────┤
│ Company     │
│ Links       │
│ Legal       │
│ Contact     │
│ © 2025      │
│ [Icons]     │
└─────────────┘
```

### Tablet (768px - 1024px / md)
```
┌────────────────────────────────────┐
│ [K] Kaycore  | Home About Services │
│  Technologies│ Blog Contact        │
├────────────────────────────────────┤
│            Content                 │
├────────────────────────────────────┤
│ Company | Links | Legal | Contact  │
│ ────────────────────────────────── │
│ © 2025                [Icons]      │
└────────────────────────────────────┘
```

### Desktop (> 1024px)
```
┌──────────────────────────────────────────────┐
│ [K] Kaycore  | Home  About  Services  Blog   │
│  Technologies| Case Studies  Contact        │
├──────────────────────────────────────────────┤
│                  Content                     │
├──────────────────────────────────────────────┤
│ Company | Quick Links | Legal | Get in Touch │
│ ────────────────────────────────────────────  │
│ © 2025 Kaycore Technologies LLP [Icons]     │
└──────────────────────────────────────────────┘
```

---

## Data Flow

### Navigation Routes
```
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];
```

### Footer Links Structure
```
Quick Links
├── /about
├── /services
├── /case-studies
└── /blog

Legal
├── /privacy
├── /terms
└── /cookies

Social Media
├── https://twitter.com/kaycore
├── https://linkedin.com/company/kaycore
├── https://github.com/kaycore
└── https://instagram.com/kaycore
```

---

## Accessibility Features

### Semantic Elements
- `<header>` - Page header
- `<nav>` - Navigation regions with `aria-label`
- `<main>` - Main content
- `<footer>` - Page footer
- `<address>` - Contact information
- `<a>` - Links

### ARIA Attributes
- Menu button: `aria-label`, `aria-expanded`, `aria-controls`
- Navigations: `aria-label="Main navigation"`, `aria-label="Mobile navigation"`
- Links: Descriptive text or `aria-label`

### Keyboard Navigation
- Tab through all interactive elements
- Enter/Space to activate buttons
- Automatic focus management

### Screen Reader Support
- Descriptive link text
- Proper heading hierarchy
- Image alt text and aria-labels
- Phone and email links use proper protocols (tel:, mailto:)

---

## Styling Patterns

### Hover Effects
```
Text Links: text-gray-400 hover:text-blue-400
Buttons: hover:bg-gray-50 dark:hover:bg-gray-900
Transitions: transition-colors, transition-transform
```

### Dark Mode
```
Light: bg-white, text-gray-900, border-gray-200
Dark: bg-gray-950, text-white, border-gray-800
Transitions: All colors smoothly transition
```

### Responsive Spacing
```
Mobile: px-4 py-6
Desktop: px-8 py-8 lg:px-16
Footer Grid: gap-8 grid-cols-1 md:grid-cols-4
```

---

## File Sizes

| File | Size | Lines |
|------|------|-------|
| Header.tsx | 1.6 KB | 47 |
| Navigation.tsx | 2.6 KB | 78 |
| Footer.tsx | 9.9 KB | 248 |
| **Total** | **14.1 KB** | **373** |

---

## Integration Checklist

- ✅ Header component created with logo and branding
- ✅ Navigation component with mobile menu support
- ✅ Footer component with company info and social links
- ✅ Root layout wraps all pages
- ✅ Responsive design (mobile-first)
- ✅ Semantic HTML structure
- ✅ Accessibility (ARIA labels, keyboard nav)
- ✅ Dark mode support
- ✅ Tailwind CSS styling
- ✅ Production build successful

---

Created: December 11, 2025
Next.js 16.0.8 | TypeScript 5 | Tailwind CSS 4
