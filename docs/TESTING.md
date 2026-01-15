# Testing Guide

This guide covers unit testing setup and best practices for the Kaycore Technologies website.

## Setup

### Installation

To enable testing with Vitest and React Testing Library:

```bash
npm install -D vitest @vitest/ui @testing-library/react @testing-library/jest-dom jsdom
```

### Configuration

Create `vitest.config.ts` in the root directory:

```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'lib/sanity/',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
```

Create `vitest.setup.ts`:

```typescript
import '@testing-library/jest-dom';
```

Update `package.json` scripts:

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

## Test Examples

### Validation Utilities Test

Test files are located in `lib/validation/index.test.ts`

```bash
npm test -- lib/validation
```

### Component Tests

Test files follow naming convention: `ComponentName.test.tsx`

Example locations:
- `components/ui/Badge.test.tsx`
- `components/sections/HeroSection.test.tsx`

```bash
npm test -- components/ui/Badge
```

### API Route Tests

API route tests verify request handling and responses:

```typescript
import { POST } from '@/app/api/contact/route';
import { NextRequest } from 'next/server';

describe('Contact API Route', () => {
  it('should validate required fields', async () => {
    const request = new NextRequest('http://localhost:2025/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name: 'John' }), // Missing email, subject, message
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it('should validate email format', async () => {
    const request = new NextRequest('http://localhost:2025/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John',
        email: 'invalid-email',
        subject: 'Test',
        message: 'Test message',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });

  it('should accept valid form data', async () => {
    const request = new NextRequest('http://localhost:2025/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Inquiry',
        message: 'I would like to learn more about your services',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);
  });
});
```

## Testing Best Practices

### 1. Test File Organization
- Keep test files next to source files
- Use `.test.ts` or `.test.tsx` extension
- Group related tests with `describe` blocks

### 2. Test Structure
Follow the AAA pattern:
```typescript
describe('Feature', () => {
  it('should do something', () => {
    // Arrange - set up test data
    const input = 'test';

    // Act - execute the code
    const result = functionUnderTest(input);

    // Assert - verify the result
    expect(result).toBe('expected');
  });
});
```

### 3. What to Test

**Priority 1 (Test these):**
- Validation functions (lib/validation/*)
- API routes (app/api/*/route.ts)
- Critical business logic
- User interactions (forms, buttons)

**Priority 2 (Test if time permits):**
- Components with conditional rendering
- Data transformations
- Error handling
- Complex state management

**Low Priority (Optional):**
- Pure presentation components
- Library functions (Next.js, React)
- Styling/layout (harder to test, lower value)

### 4. Naming Conventions

Test names should describe behavior:

```typescript
// ❌ Avoid
it('works', () => {});
it('test button', () => {});

// ✅ Good
it('should submit form with valid data', () => {});
it('should display error message when email is invalid', () => {});
it('should disable button while submitting', () => {});
```

### 5. Mocking

Mock external dependencies:

```typescript
import { vi } from 'vitest';

// Mock API calls
vi.mock('@/lib/sanity/client', () => ({
  client: {
    fetch: vi.fn().mockResolvedValue([
      { _id: '1', title: 'Test Post', slug: { current: 'test' } },
    ]),
  },
}));

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    pathname: '/',
  }),
}));
```

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm test -- --watch
```

### Run Specific Test File
```bash
npm test -- lib/validation
```

### Run Tests with UI
```bash
npm test:ui
```

### Generate Coverage Report
```bash
npm test:coverage
```

## Coverage Goals

Target coverage percentages:
- Statements: 70%
- Branches: 65%
- Functions: 70%
- Lines: 70%

View coverage report:
```bash
npm test:coverage
open coverage/index.html
```

## Troubleshooting

### Issue: "Cannot find module 'vitest'"
**Solution:** Install testing dependencies
```bash
npm install -D vitest @vitest/ui
```

### Issue: "Cannot find module '@testing-library/react'"
**Solution:** Install testing library
```bash
npm install -D @testing-library/react @testing-library/jest-dom
```

### Issue: Tests timeout or hang
**Solution:** Increase timeout in vitest.config.ts
```typescript
export default defineConfig({
  test: {
    testTimeout: 10000, // 10 seconds
  },
});
```

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Next Steps

1. Install testing dependencies
2. Uncomment test code in component files
3. Run `npm test` to verify setup
4. Add tests for new features as they're developed
5. Aim for 70%+ code coverage on critical paths
