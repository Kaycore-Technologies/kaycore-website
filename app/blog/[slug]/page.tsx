import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata() {
  return {
    title: 'Blog Post | Kaycore Technologies',
  };
}

export default async function BlogPost() {
  notFound();
}
