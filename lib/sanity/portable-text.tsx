import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import Image from 'next/image';
import type { BlockContent } from '@/lib/types';

interface PortableTextBlockProps {
  content: BlockContent;
}

const components: Partial<PortableTextReactComponents> = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 py-2 italic text-lg bg-slate-100 dark:bg-slate-800 rounded p-4 my-6 text-slate-700 dark:text-slate-300">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 ml-4 text-slate-700 dark:text-slate-300 mb-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 ml-4 text-slate-700 dark:text-slate-300 mb-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-900 dark:text-white">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-slate-700 dark:text-slate-300">{children}</em>
    ),
    code: ({ children }) => (
      <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm font-mono text-slate-900 dark:text-white">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const href = (value as { href?: string })?.href;
      return href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {children}
        </a>
      ) : (
        <>{children}</>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const imageValue = value as { asset?: { url: string }; alt?: string };
      if (!imageValue?.asset?.url) return null;
      return (
        <div className="relative w-full h-96 my-8 rounded-lg overflow-hidden">
          <Image
            src={imageValue.asset.url}
            alt={imageValue.alt || 'Content image'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
          />
        </div>
      );
    },
  },
};

export function PortableTextBlock({ content }: PortableTextBlockProps) {
  if (!content || !Array.isArray(content)) {
    return null;
  }

  return (
    <div className="space-y-4">
      <PortableText value={content} components={components} />
    </div>
  );
}
