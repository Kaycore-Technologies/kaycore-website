# Code Standards & Conventions

This document establishes consistent coding standards across the Kaycore Technologies codebase.

## TypeScript & Types

### Type Definitions Location

- **CMS Types**: `lib/types/index.ts` - All Sanity CMS interfaces
- **API Types**: Same file - All API request/response types
- **Component Props**: Defined above the component or in types file
- **Utility Types**: `lib/types/index.ts`

### Type Naming

```typescript
// ✅ Good
interface SanityPost {
  _id: string;
  title: string;
}

type BlogPostPreview = Pick<SanityPost, 'title' | 'slug'>;

// ❌ Avoid
interface Post { }
type BlogType = any;
interface IPost { } // Hungarian notation
```

### Props Types

```typescript
// ✅ Good - Explicit, exportable
export interface BadgeProps {
  label: string;
  variant?: 'blue' | 'green' | 'purple';
  size?: 'sm' | 'md';
}

export function Badge(props: BadgeProps) {
  // ...
}

// ❌ Avoid
function Badge(props: any) { }
function Badge({ label, variant = 'blue' }: unknown) { }
```

## Component Structure

### File Organization

```
components/
├── ui/                    # Reusable UI components
│   ├── Badge.tsx
│   ├── Card.tsx
│   ├── StatCard.tsx
│   └── Button.tsx
├── sections/              # Page sections (hero, features, etc.)
│   ├── HeroSection.tsx
│   ├── FeatureSection.tsx
│   └── CTASection.tsx
├── layout/                # Layout components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
└── forms/                 # Form components
    └── ClientContactForm.tsx
```

### Component Template

```typescript
/**
 * Brief description of what component does
 * 
 * @example
 * <ComponentName prop="value" />
 */
import { ComponentNameProps } from '@/lib/types';

export interface ComponentNameProps {
  title: string;
  description?: string;
  onAction?: () => void;
}

export function ComponentName({
  title,
  description,
  onAction,
}: ComponentNameProps) {
  return (
    <div className="...">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}
```

## Naming Conventions

### Files & Folders

```
// ✅ Good
components/ui/Badge.tsx
lib/sanity/queries.ts
lib/validation/index.ts
app/blog/[slug]/page.tsx

// ❌ Avoid
components/ui/badge.tsx          // Use PascalCase for components
lib/sanity/Queries.ts            // Use camelCase for utilities
lib/validation/validation.ts      // Redundant naming
pages/blog/post-detail/page.tsx   // Use [slug] for dynamic routes
```

### Variables & Functions

```typescript
// ✅ Good - camelCase, descriptive
const isLoading = true;
const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateEmail(email: string): boolean {}
function handleFormSubmit(e: React.FormEvent) {}

// ❌ Avoid
const loading = true;            // Ambiguous
const email_validation_regex = '';  // snake_case
function validate() {}           // Too generic
function on_submit() {}          // snake_case
```

### React Components

```typescript
// ✅ Good - PascalCase, descriptive
function UserCard() {}
function ContactForm() {}
function BlogPostPreview() {}

// ❌ Avoid
function userCard() {}           // camelCase
function Form() {}               // Too generic
function BP() {}                 // Abbreviations
```

### Boolean Variables

```typescript
// ✅ Good - is*, has*, should*, can*
const isLoading = false;
const isVisible = true;
const hasError = false;
const shouldValidate = true;
const canSubmit = false;

// ❌ Avoid
const loading = false;           // Ambiguous type
const show = true;               // Unclear
const error = false;             // Implies error object
```

### Constants

```typescript
// ✅ Good - UPPER_SNAKE_CASE for module constants
const MAX_FORM_LENGTH = 1000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const API_TIMEOUT_MS = 5000;

// ❌ Avoid
const maxFormLength = 1000;     // Should be CONSTANT_CASE
const Email_Regex = /^.../;     // Mixed case
const apiTimeout = 5000;        // Missing unit in name
```

## CSS & Tailwind Classes

### Class Organization

```typescript
// ✅ Good - Organized, readable
<div className="flex items-center justify-between bg-white dark:bg-slate-900 rounded-lg shadow-md p-4 sm:p-6">

// Better with line breaks for complex elements
<section
  className={`
    px-4 py-12 sm:px-6 sm:py-16
    md:py-20 lg:px-8 lg:py-24
    bg-white dark:bg-slate-900
  `}
>

// ❌ Avoid
<div className="flex items-center justify-between bg-white dark:bg-slate-900 rounded-lg shadow-md p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 ...">
```

### Responsive Design Pattern

```typescript
// ✅ Good - Mobile-first, clear progression
className="text-sm sm:text-base md:text-lg lg:text-xl"
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
className="px-4 sm:px-6 md:px-8 lg:px-10"

// ❌ Avoid
className="text-xl lg:text-lg sm:text-base"  // Wrong order
className="grid md:grid-cols-2 grid-cols-1"  // Inconsistent order
```

### Dark Mode Pattern

```typescript
// ✅ Good - Consistent dark: prefixes
className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white"

// ❌ Avoid
className="bg-white dark:bg-gray-900"    // Inconsistent color naming
className="dark:bg-slate-900 bg-white"   // Wrong order
```

## Tailwind Color System

Use consistent color palette across the project:

- **Primary**: Blue (`from-blue-*`, `to-blue-*`)
- **Secondary**: Green (`from-green-*`, `to-green-*`)
- **Accent**: Purple, Orange
- **Neutral**: Slate for text and backgrounds

```typescript
// ✅ Good - Consistent palette
className="bg-blue-600 dark:bg-blue-900 text-blue-100"
className="border border-slate-200 dark:border-slate-700"

// ❌ Avoid
className="bg-cyan-500"      // Not in standard palette
className="text-gray-700"    // Use slate, not gray
```

## Comments & Documentation

### JSDoc for Functions

```typescript
/**
 * Fetch all blog posts from Sanity CMS
 * 
 * @returns Promise<SanityPost[]> Array of all published posts
 * @throws Logs error to console if fetch fails, returns empty array
 * 
 * @example
 * const posts = await getAllPosts();
 * posts.forEach(post => console.log(post.title));
 */
export async function getAllPosts(): Promise<SanityPost[]> {
  // ...
}
```

### Block Comments for Complex Logic

```typescript
// ❌ Avoid - Unnecessary comments
const email = 'user@example.com'; // Set email
const isValid = validateEmail(email); // Validate email

// ✅ Good - Explain WHY, not WHAT
// Validate against RFC 5322 simplified pattern
// Full RFC compliance not needed for UX validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

### Section Dividers

```typescript
// ==================== BLOG POST QUERIES ====================
// For major sections in large files

// Section Comment
// For subsections
```

## Import Organization

```typescript
// ✅ Good - Organized, clear
// External packages
import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

// Internal types
import type { SanityPost } from '@/lib/types';

// Internal utilities
import { validateEmail } from '@/lib/validation';

// Internal components
import { Badge } from '@/components/ui/Badge';
import { HeroSection } from '@/components/sections/HeroSection';

// ❌ Avoid
import Link from 'next/link'; // Mixed order
import { Badge } from '@/components/ui/Badge';
import { useState } from 'react';
import type { SanityPost } from '@/lib/types';
```

## Error Handling

### API Routes

```typescript
// ✅ Good - Clear error messages, proper status codes
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate
    if (!data.email) {
      return apiError('Email is required', 400);
    }
    
    if (!isValidEmail(data.email)) {
      return apiError('Invalid email format', 400);
    }
    
    // Process
    const result = await processData(data);
    
    return apiSuccess(result, 201);
  } catch (error) {
    console.error('Failed to process request:', error);
    return apiError('Internal server error', 500);
  }
}
```

### Async Data Fetching

```typescript
// ✅ Good - Proper error handling
export async function getAllPosts(): Promise<SanityPost[]> {
  try {
    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return []; // Return empty array as fallback
  }
}

// ❌ Avoid
export async function getAllPosts(): Promise<SanityPost[]> {
  return await client.fetch(query); // No error handling
}
```

## Testing Naming

```typescript
// ✅ Good - Clear, behavior-focused
describe('Badge Component', () => {
  it('should render with label', () => {});
  it('should apply correct variant styles', () => {});
  it('should reject invalid email format', () => {});
});

// ❌ Avoid
describe('Badge', () => {
  it('renders', () => {});
  it('variant test', () => {});
  it('email', () => {});
});
```

## Accessibility

### Semantic HTML

```typescript
// ✅ Good
<button onClick={handleClick}>Submit</button>
<nav>Navigation</nav>
<main>Content</main>
<article>Blog Post</article>

// ❌ Avoid
<div onClick={handleClick} role="button">Submit</div>
<div className="nav">Navigation</div>
<div className="main">Content</div>
```

### ARIA Labels

```typescript
// ✅ Good
<button aria-label="Close modal">×</button>
<img alt="Product image" src="..." />
<a href="/" aria-label="Kaycore Technologies - Home">Logo</a>

// ❌ Avoid
<button>×</button>
<img src="..." />
<a href="/">Logo</a>
```

## Performance Optimization

### Image Optimization

```typescript
// ✅ Good - Use Next.js Image
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={true}
/>

// ❌ Avoid
<img src="/image.jpg" />
```

### Code Splitting

```typescript
// ✅ Good - Dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <p>Loading...</p>,
});

// ✅ Good - Lazy load below-fold content
<Suspense fallback={<Skeleton />}>
  <BelowFoldComponent />
</Suspense>
```

## Checklist for Code Review

- [ ] Types are properly defined in `lib/types/index.ts`
- [ ] Component props exported as interfaces
- [ ] File names use PascalCase (components) or camelCase (utilities)
- [ ] Imports organized: external → types → utilities → components
- [ ] JSDoc comments on public functions
- [ ] Responsive classes follow mobile-first pattern
- [ ] Dark mode supported with `dark:` prefix
- [ ] Error handling included in async functions
- [ ] Semantic HTML used where appropriate
- [ ] No `any` types without explicit `@ts-ignore`
- [ ] Constants in UPPER_SNAKE_CASE
- [ ] Boolean variables use is*/has*/should* prefixes
- [ ] Tests added for critical logic
- [ ] Console logs removed from production code (except errors)
