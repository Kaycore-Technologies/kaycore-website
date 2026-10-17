import ProductsContent from './ProductsContent';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Products | Eval Harness and KayHealth',
  description:
    'Kaycore builds its own quality tooling, funded by its services: Eval Harness for non-deterministic AI and KayHealth for healthcare AI, both in development.',
  path: '/products',
});

export default function ProductsPage() {
  return <ProductsContent />;
}
