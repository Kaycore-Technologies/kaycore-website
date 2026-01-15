/**
 * Unit tests for Badge component
 *
 * To run tests: npm test
 * Individual test: npm test -- Badge.test.tsx
 */

// Note: This is a test skeleton. To enable testing, install:
// npm install -D vitest @vitest/ui @testing-library/react @testing-library/jest-dom

// Uncomment when testing dependencies are installed:
/*
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from './Badge';

describe('Badge Component', () => {
  it('should render with label', () => {
    render(<Badge label="Featured" />);
    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('should apply correct variant styles', () => {
    const { container } = render(<Badge label="Test" variant="blue" />);
    const badge = container.querySelector('span');
    expect(badge).toHaveClass('text-blue-600');
  });

  it('should support all variants', () => {
    const variants = ['blue', 'green', 'purple', 'orange'] as const;
    variants.forEach((variant) => {
      const { container } = render(<Badge label="Test" variant={variant} />);
      const badge = container.querySelector('span');
      expect(badge).toHaveClass(`text-${variant}-600`);
    });
  });

  it('should apply correct size styles', () => {
    const { container } = render(<Badge label="Test" size="md" />);
    const badge = container.querySelector('span');
    expect(badge).toHaveClass('px-3');
  });

  it('should default to blue variant and sm size', () => {
    const { container } = render(<Badge label="Test" />);
    const badge = container.querySelector('span');
    expect(badge).toHaveClass('text-blue-600');
    expect(badge).toHaveClass('px-2');
  });
});
*/
