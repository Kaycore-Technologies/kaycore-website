# Sanity CMS Integration Guide

This project integrates Sanity CMS for managing Blog Posts, Case Studies, and Services content.

## 📋 Quick Start

### 1. Set Up Sanity Project

1. Create a Sanity account at https://www.sanity.io
2. Create a new Sanity project via CLI or dashboard
3. Get your **Project ID** and **Dataset** name
4. Note: Free tier includes up to 3 projects and 500,000 documents

### 2. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

Replace with your actual Sanity credentials.

### 3. Sanity Studio (Optional)

To manage content via Sanity Studio:

```bash
# Install Sanity CLI
npm install -g @sanity/cli

# Login to your Sanity account
sanity login

# Start Sanity Studio locally (from next-app directory)
sanity start
```

Studio will be available at `http://localhost:3333`

## 📚 Content Types & Schemas

### Blog Post (`post`)
- **title** (string, required) - Post title (5-100 chars)
- **slug** (slug, required) - URL-friendly identifier (auto-generated from title)
- **excerpt** (text, required) - Short description (20-300 chars)
- **author** (string, required) - Author name
- **category** (string) - One of: Cloud Technology, Cybersecurity, AI & ML, DevOps, Compliance, Architecture, Infrastructure, Development, Operations
- **coverImage** (image) - Featured image with hotspot support
- **content** (block content) - Rich text content with formatting, lists, quotes, links
- **publishedAt** (datetime, required) - Publication date
- **readTime** (number, required) - Estimated read time in minutes

### Case Study (`caseStudy`)
- **title** (string, required) - Case study title (5-150 chars)
- **slug** (slug, required) - URL-friendly identifier
- **client** (string, required) - Client company name
- **industry** (string) - Industry: Retail, Financial Services, Healthcare, Banking, Manufacturing, Media & Entertainment, Technology, Other
- **overview** (text, required) - Project overview (50+ chars)
- **problem** (block content) - The Challenge section (rich text)
- **solution** (block content) - Our Solution section (rich text)
- **results** (object)
  - **metrics** (array) - Key metrics with label and value
  - **achievements** (array) - Key achievements list
- **coverImage** (image) - Featured image
- **duration** (string) - Project duration (e.g., "8 months")
- **technologies** (array) - Technologies used
- **publishedAt** (datetime, required) - Publication date

### Service (`service`)
- **title** (string, required) - Service name (5-100 chars)
- **slug** (slug, required) - URL-friendly identifier
- **description** (text, required) - Short description (20-500 chars)
- **icon** (string, required) - Single emoji icon (1-2 chars)
- **fullDescription** (block content) - Detailed description (rich text)
- **features** (array) - List of key features (min 3)
- **coverImage** (image) - Featured image

## 🔧 API Helpers

Located in `lib/sanity/queries.ts`:

### Blog Post Functions
```typescript
getAllPosts()              // Fetch all published blog posts
getPostBySlug(slug)        // Fetch a single post by slug
getPostSlugs()             // Get all post slugs (for static generation)
getRecentPosts(limit)      // Get recent posts (default: 3)
```

### Case Study Functions
```typescript
getAllCaseStudies()        // Fetch all case studies
getCaseStudyBySlug(slug)   // Fetch a single case study by slug
getCaseStudySlugs()        // Get all case study slugs
```

### Service Functions
```typescript
getAllServices()           // Fetch all services
getServiceBySlug(slug)     // Fetch a single service by slug
getServiceSlugs()          // Get all service slugs
```

## 🎨 Portable Text Rendering

Rich text content (block content) is rendered using the `PortableTextBlock` component:

```tsx
import { PortableTextBlock } from '@/lib/sanity/portable-text';

export function BlogPost({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>
      <PortableTextBlock content={post.content} />
    </article>
  );
}
```

Supports:
- Headings (H2, H3)
- Paragraphs
- Lists (bullet, numbered)
- Block quotes
- Text formatting (bold, italic, code)
- Links
- Images
- Code blocks

## 📄 Pages Using CMS

### Blog Pages
- `/app/blog/page.tsx` - Blog listing (fetches from CMS)
- `/app/blog/[slug]/page.tsx` - Individual blog post (server component, fetches by slug)

### Case Studies Pages
- `/app/case-studies/page.tsx` - Case studies listing (fetches from CMS)
- `/app/case-studies/[slug]/page.tsx` - Individual case study (server component, fetches by slug)

### Services Page
- `/app/services/page.tsx` - Services listing (fetches from CMS)

## 🚀 Migration from Mock Data

To use CMS data instead of mock data:

1. **Replace imports** - Comment out mock data imports
2. **Use server components** - Make pages async to fetch from CMS
3. **Update fetch calls** - Replace mock data with `getAllPosts()`, `getPostBySlug()`, etc.

Example:
```tsx
// Before (mock data)
import { blogPosts } from '@/data/mock';

export default function Blog() {
  return <BlogGrid posts={blogPosts} />;
}

// After (CMS data)
import { getAllPosts } from '@/lib/sanity/queries';

export default async function Blog() {
  const posts = await getAllPosts();
  return <BlogGrid posts={posts} />;
}
```

## 🔄 Revalidation & ISR

For static generation with incremental static regeneration (ISR):

```tsx
// app/blog/page.tsx
export const revalidate = 3600; // Revalidate every hour

export default async function Blog() {
  const posts = await getAllPosts();
  return <BlogGrid posts={posts} />;
}
```

## 📝 Content Management Best Practices

1. **Slugs** - Keep slugs lowercase, use hyphens (auto-generated from title)
2. **Dates** - Use ISO format (2024-12-10)
3. **Images** - Optimize before uploading, use hotspot for featured images
4. **Rich Text** - Use block styles for semantic content structure
5. **Categories** - Use consistent category names
6. **Tags** - Keep tag vocabulary limited and consistent

## 🔐 Authentication & Tokens

For authenticated requests (if needed):

1. Create a token in Sanity dashboard (Settings > API > Add Token)
2. Add to `.env.local`:
   ```env
   SANITY_API_TOKEN=your_token_here
   ```
3. Update client configuration to use token for private queries

## 🐛 Debugging

Enable debug logging:

```typescript
// lib/sanity/client.ts
const client = createClient({
  // ... other config
  apiVersion: '2024-01-01',
  useCdn: false, // Disable CDN for fresh data during development
});
```

## 📊 Useful Resources

- [Sanity Docs](https://www.sanity.io/docs)
- [Sanity Schema Reference](https://www.sanity.io/docs/schema-types)
- [Portable Text Guide](https://www.portabletext.org/)
- [Next.js ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)

## ✅ Checklist

- [ ] Create Sanity project and get credentials
- [ ] Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in `.env.local`
- [ ] Create first blog post in Sanity
- [ ] Test `/api/sanity` endpoints
- [ ] Update pages to fetch from CMS
- [ ] Test blog listing and detail pages
- [ ] Set up Sanity Studio (optional but recommended)
- [ ] Configure revalidation for ISR
