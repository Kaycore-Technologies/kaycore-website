import type { Metadata } from 'next';
import ProductsContent from './ProductsContent';

export const metadata: Metadata = {
  title: 'Products | Eval Harness and KayHealth',
  description:
    'Kaycore builds its own quality engineering tooling, funded by its services. The Eval Harness tests non-deterministic AI systems, and KayHealth applies it to regulated medical software. Both are in development.',
  alternates: { canonical: '/products' },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
