/**
 * Unit tests for HeroSection component
 *
 * To run tests: npm test
 */

// Note: This is a test skeleton. To enable testing, install:
// npm install -D vitest @vitest/ui @testing-library/react @testing-library/jest-dom

// Uncomment when testing dependencies are installed:
/*
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HeroSection } from './HeroSection';

describe('HeroSection Component', () => {
  it('should render with title', () => {
    render(
      <HeroSection
        title="Welcome"
        backgroundVariant="blue"
      />
    );
    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });

  it('should render description if provided', () => {
    render(
      <HeroSection
        title="Welcome"
        description="Test description"
        backgroundVariant="blue"
      />
    );
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('should render CTA button if ctaText and ctaHref provided', () => {
    render(
      <HeroSection
        title="Welcome"
        ctaText="Click me"
        ctaHref="/test"
        backgroundVariant="blue"
      />
    );
    const button = screen.getByText('Click me');
    expect(button).toHaveAttribute('href', '/test');
  });

  it('should not render CTA button without ctaText', () => {
    render(
      <HeroSection
        title="Welcome"
        backgroundVariant="blue"
      />
    );
    expect(screen.queryByText('Click me')).not.toBeInTheDocument();
  });

  it('should apply correct background variant', () => {
    const { container: blueContainer } = render(
      <HeroSection
        title="Test"
        backgroundVariant="blue"
      />
    );
    expect(blueContainer.querySelector('section')).toHaveClass(
      'bg-gradient-to-r from-blue-50'
    );

    const { container: gradientContainer } = render(
      <HeroSection
        title="Test"
        backgroundVariant="gradient"
      />
    );
    expect(gradientContainer.querySelector('section')).toHaveClass(
      'from-blue-600'
    );
  });

  it('should render with responsive text sizes', () => {
    const { container } = render(
      <HeroSection
        title="Test"
        backgroundVariant="blue"
      />
    );
    const title = screen.getByText('Test');
    expect(title).toHaveClass('text-3xl');
    expect(title).toHaveClass('sm:text-4xl');
    expect(title).toHaveClass('md:text-5xl');
  });
});
*/
