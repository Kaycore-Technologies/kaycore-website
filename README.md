# Kaycore Technologies LLP Website

A modern, production-ready website for Kaycore Technologies built with Next.js 16, TypeScript, Tailwind CSS, and Sanity CMS. The site features responsive design, SEO optimization, and dynamic content management.

## Tech Stack

- **Framework:** Next.js 16.0.8 with App Router
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 4.x with dark mode support
- **CMS:** Sanity.io for content management
- **Runtime:** Node.js 18+
- **Package Manager:** npm 9+

## Features

✨ **Responsive Design**
- Mobile-first approach with Tailwind breakpoints (sm, md, lg)
- Touch-friendly interface (44px+ tap targets)
- Dark mode support across all pages

📱 **Pages**
- Home (hero, features, testimonials)
- About (company mission, team, values)
- Services (service offerings with details)
- Blog (dynamic blog posts from Sanity CMS)
- Case Studies (client success stories)
- Contact (form with validation)

🔍 **SEO Optimized**
- Dynamic metadata and open graph tags
- XML sitemap generation
- Robots.txt configuration
- Structured data support

📝 **Content Management**
- Dynamic content from Sanity CMS
- Blog posts, case studies, and services managed centrally
- Real-time preview and publishing

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Sanity.io account (for CMS)

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd nextjs-app
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
Create a `.env.local` file in the root directory:
```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# API Configuration (Optional)
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET_KEY=your_secret_key
```

### Running Locally

**Start the development server:**
```bash
npm run dev
```

The application will be available at `http://localhost:2025`

**Build for production:**
```bash
npm run build
```

**Start production server:**
```bash
npm start
```

**Run linting:**
```bash
npm run lint
```

### Project Structure

```
nextjs-app/
├── app/                          # Next.js app directory
│   ├── page.tsx                 # Home page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx        # Blog post detail
│   ├── case-studies/
│   │   ├── page.tsx            # Case studies listing
│   │   └── [slug]/
│   │       └── page.tsx        # Case study detail
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── api/
│   │   ├── contact/            # Contact form endpoint
│   │   └── sanity/             # Sanity webhook handler
│   ├── layout.tsx              # Root layout with metadata
│   └── globals.css             # Global styles
├── components/                   # Reusable React components
│   ├── Navbar.tsx              # Navigation component
│   ├── Footer.tsx              # Footer component
│   └── ClientContactForm.tsx   # Contact form (client-side)
├── lib/
│   ├── sanity.ts              # Sanity client setup
│   ├── queries.ts             # GROQ queries for Sanity
│   └── utils.ts               # Utility functions
├── public/                      # Static assets
├── docs/
│   └── CMS_INTEGRATION.md      # CMS setup guide
├── .env.local                   # Environment variables (gitignored)
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
└── package.json                 # Dependencies and scripts
```

## Deployment

### Environment Variables

Before deploying, ensure these variables are set in your hosting platform:

**Required:**
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Sanity dataset name (usually "production")

**Optional:**
- `NEXT_PUBLIC_API_URL` - External API base URL
- `API_SECRET_KEY` - API authentication token
- `SANITY_API_TOKEN` - Sanity API token for webhooks (if needed)

### Supported Platforms

**Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Configure environment variables in project settings
3. Deploy automatically on push to main branch
4. Preview deployments for all pull requests

**Other Platforms (Docker/Traditional Hosting)**
```bash
# Build the application
npm run build

# Start the production server
npm start
```

Production build output is in `.next/` directory.

### CI/CD Workflow

The project includes automatic deployment capabilities:
- **Development:** Commits to feature branches deploy to preview URLs
- **Staging:** Merges to develop branch deploy to staging environment
- **Production:** Merges to main branch deploy to production

All static pages are pre-rendered at build time for optimal performance.

## Content Management

### Adding Blog Posts

1. **Via Sanity Studio:**
   - Go to your Sanity Studio dashboard
   - Navigate to the "Blog" section
   - Click "Create new document"
   - Fill in:
     - Title (required)
     - Slug (auto-generated or custom)
     - Description
     - Content (rich text editor)
     - Featured image
     - Author
     - Publish date
   - Click "Publish"

2. **In Code:**
   Blog posts query is in `lib/queries.ts`:
   ```typescript
   export const BLOG_POSTS_QUERY = `
     *[_type == "blog" && published == true] | order(publishedAt desc) {
       _id,
       title,
       slug,
       description,
       content,
       image,
       author,
       publishedAt
     }
   `
   ```

### Adding Case Studies

1. **Via Sanity Studio:**
   - Go to the "Case Studies" section
   - Create new document with:
     - Title
     - Slug
     - Industry
     - Emoji/Icon
     - Description
     - Challenge
     - Solution
     - Results (metrics)
     - Technologies used
   - Publish

2. **Query Location:** `lib/queries.ts` - `CASE_STUDIES_QUERY`

### Adding Services

1. **Via Sanity Studio:**
   - Go to the "Services" section
   - Create new document with:
     - Title
     - Icon/Emoji
     - Description
     - Benefits (array)
     - Price tier (optional)
   - Publish

2. **Query Location:** `lib/queries.ts` - `SERVICES_QUERY`

### Updating Homepage Content

1. **Via Sanity Studio:**
   - Go to the "Home" document (singleton)
   - Edit sections:
     - Hero headline and CTA
     - Features/Why Us section
     - Featured case study
     - Testimonials
   - Publish

2. **In Code:**
   - Edit `app/page.tsx` for layout changes
   - Hero data from `HOMEPAGE_QUERY` in `lib/queries.ts`

### Publishing Content

After editing in Sanity Studio:
1. Click the "Publish" button
2. Changes appear on the website within seconds
3. No redeploy necessary (content is fetched on-demand)

## Extending the Project

### Adding a New Page

1. **Create page file:**
```bash
mkdir -p app/new-page
touch app/new-page/page.tsx
```

2. **Add content:**
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | Kaycore Technologies',
  description: 'Page description for SEO',
};

export default function NewPage() {
  return (
    <div className="bg-white dark:bg-slate-900">
      {/* Your content here */}
    </div>
  );
}
```

3. **Update navigation:** Add link to `components/Navbar.tsx`

### Adding a New Component

1. **Create component file:**
```bash
touch components/NewComponent.tsx
```

2. **Structure:**
```typescript
interface NewComponentProps {
  title: string;
  description?: string;
}

export default function NewComponent({ title, description }: NewComponentProps) {
  return (
    <div className="...">
      {/* Component JSX */}
    </div>
  );
}
```

3. **Import and use in pages:**
```typescript
import NewComponent from '@/components/NewComponent';
```

### Adding API Routes

1. **Create route handler:**
```bash
touch app/api/new-endpoint/route.ts
```

2. **Example handler:**
```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Your logic here
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    // Your logic here
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
```

### Customizing Styling

The project uses Tailwind CSS. Customize in `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Blue
        secondary: '#10B981', // Green
      },
      screens: {
        sm: '640px',  // Mobile
        md: '768px',  // Tablet
        lg: '1024px', // Desktop
      },
    },
  },
};
```

### Adding Dark Mode

All components support dark mode via `dark:` prefix in Tailwind:

```typescript
<div className="bg-white dark:bg-slate-900">
  <h1 className="text-slate-900 dark:text-white">Content</h1>
</div>
```

## Performance Optimization

- ✅ **Static Generation:** Most pages pre-rendered at build time
- ✅ **Image Optimization:** Next.js Image component with lazy loading
- ✅ **Code Splitting:** Automatic per-route code splitting
- ✅ **SEO:** Metadata, sitemaps, structured data
- ✅ **Dark Mode:** CSS-in-JS for instant theme switching
- ✅ **Responsive:** Mobile-first design with minimal CSS

## Testing

Run the development server and test manually:
```bash
npm run dev
# Visit http://localhost:2025 and test all pages
```

For automated testing (if configured):
```bash
npm test
```

## Troubleshooting

### "Missing Sanity environment variables" Warning
- Ensure `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are set
- Check `.env.local` file exists in project root
- Restart dev server after setting environment variables

### Build Fails
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### CMS Content Not Updating
- Verify Sanity API token is correct
- Check that content is published in Sanity Studio
- Try rebuilding: `npm run build`

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Copyright © 2024 Kaycore Technologies LLP. All rights reserved.

## Support

For questions or issues:
1. Check `docs/CMS_INTEGRATION.md` for CMS-specific questions
2. Review Next.js documentation: https://nextjs.org/docs
3. Sanity CMS docs: https://www.sanity.io/docs
4. Contact: contact@kaycore.com

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity GROQ Query Language](https://www.sanity.io/docs/groq)
