# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Start the Development Server
```bash
cd /Users/kulish/Desktop/KC/nextjs-app
npm run dev
```
Open http://localhost:2025 in your browser.

### 2. Make Your First Change
Edit `app/page.tsx` to see changes instantly.

### 3. Format & Lint (Optional)
```bash
npm run format    # Format code with Prettier
npm run lint:fix  # Fix linting issues
```

---

## 📁 Project Structure Overview

| Folder | Purpose |
|--------|---------|
| `app/` | Next.js App Router pages & layouts |
| `components/` | Reusable React components |
| `lib/` | Utility functions & helpers |
| `cms/` | Content models & schemas |
| `styles/` | Global CSS & Tailwind config |
| `public/` | Static assets |

---

## ⚙️ Available Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server (localhost:2025) |
| `npm run build` | Create production build |
| `npm start` | Run production server |
| `npm run lint` | Check code quality |
| `npm run lint:fix` | Auto-fix code issues |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting |

---

## 🎨 Key Technologies

- **Next.js 16** - React framework with App Router
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS
- **ESLint 9** - Code quality
- **Prettier 3** - Code formatter

---

## 💡 Example: Create a New Component

```typescript
// components/Button.tsx
export function Button({ children, ...props }) {
  return (
    <button
      className="bg-primary hover:opacity-90 px-4 py-2 rounded text-white"
      {...props}
    >
      {children}
    </button>
  );
}
```

Use it in your pages:
```typescript
import { Button } from '@/components/Button';

export default function Page() {
  return <Button onClick={() => alert('Clicked!')}>Click me</Button>;
}
```

---

## 📚 Useful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [ESLint Rules](https://eslint.org/docs/rules/)

---

## 🔧 Environment Variables

Create `.env.local` in project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:2025/api
SECRET_KEY=your-secret-key
```

Access in your code:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

---

Happy coding! 🎉
