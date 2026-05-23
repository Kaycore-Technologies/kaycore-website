# Kaycore Technologies – Corporate Website

This repository contains the source code for the Kaycore Technologies corporate website, an enterprise-grade digital experience built with Next.js (App Router), Tailwind CSS, and Sanity CMS.

## 🏗 Folder Architecture

The repository follows a clean, standardized Next.js App Router structure:

```
├── app/                  # Next.js App Router (pages, layouts, and routing logic)
├── components/           # Reusable UI components and page sections
│   ├── animations/       # Framer Motion animation wrappers
│   ├── sections/         # Complex, page-level block components
│   └── ui/               # Core UI primitives (buttons, inputs, etc.)
├── public/               # Static assets (images, videos, fonts, icons)
├── sanity/               # Sanity CMS configuration, schemas, and structure
├── styles/               # Global CSS and Tailwind definitions
└── lib/                  # Shared utilities and helper functions
```

## ⚙️ Environment Variables

To run the project locally, you must provide environment variables for the Sanity CMS integration. Do not commit your `.env.local` file. 

Create a `.env.local` file in the root directory based on the `.env.local.example` file:

```env
# Sanity CMS Configuration (Required)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production

# Sanity API Token (Optional, required only for write access/previews)
# SANITY_API_TOKEN=your_api_token_here
```

## 🚀 Setup & Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```
   *The local server will start at `http://localhost:2025`.*

3. **Format & Linting**
   Keep the codebase clean before committing:
   ```bash
   npm run lint        # Run ESLint
   npm run format      # Auto-format with Prettier
   ```

## 📦 Build & Deployment

This project is optimized for deployment on Vercel or any standard Node.js hosting platform.

1. **Production Build**
   To compile an optimized production bundle locally:
   ```bash
   npm run build
   ```

2. **Start Production Server**
   ```bash
   npm start
   ```

### Deployment Steps (Vercel)
1. Push your code to a Git repository (GitHub, GitLab, etc.).
2. Import the project into Vercel.
3. Ensure the Build Command is set to `npm run build` and the Output Directory is `.next`.
4. Add the required Environment Variables (`NEXT_PUBLIC_SANITY_PROJECT_ID` & `NEXT_PUBLIC_SANITY_DATASET`) in the Vercel project settings.
5. Deploy.

---
*Maintained by the Kaycore Technologies Engineering Team.*
