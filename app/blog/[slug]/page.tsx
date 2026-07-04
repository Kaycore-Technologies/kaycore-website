import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { getArticle, articles } from '@/content/articles';
import { FAQ } from '@/components/FAQ';
import { LeadFormCTA } from '@/components/LeadFormCTA';

const baseUrl = 'https://www.kaycore.com';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: 'Article Not Found | Kaycore Technologies' };

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      url: `${baseUrl}/blog/${article.slug}`,
      images: [{ url: article.image, width: 1600, height: 900, alt: article.title }],
      publishedTime: article.date,
      modifiedTime: article.updated || article.date,
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const { Body } = article;
  const url = `${baseUrl}/blog/${article.slug}`;
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    dateModified: article.updated || article.date,
    author: {
      '@type': 'Person',
      name: article.author,
      jobTitle: article.authorTitle,
      url: 'https://www.linkedin.com/in/kulish-kulshrestha/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kaycore Technologies',
      logo: { '@type': 'ImageObject', url: `${baseUrl}/assets/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: article.keywords.join(', '),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: article.title, item: url },
    ],
  };

  const published = new Date(article.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const updated = article.updated
    ? new Date(article.updated).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  return (
    <div className="min-h-screen bg-[#030712] text-gray-50 font-sans overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <article>
        <header className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 inset-x-0 h-[420px] bg-grid opacity-20 pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-gray-500">
                <li><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/blog" className="hover:text-brand-accent transition-colors">Blog</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-300 truncate max-w-[45%]">{article.category}</li>
              </ol>
            </nav>

            <p className="text-sm font-mono text-brand-accent tracking-[0.2em] uppercase mb-5">{article.category}</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight tracking-tight mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400">
              <span className="text-gray-200 font-medium">{article.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-brand-accent" />{published}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-brand-accent" />{article.readTime}</span>
              {updated && <span className="text-gray-500">Updated {updated}</span>}
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10">
            <Image src={article.image} alt={article.title} fill sizes="(max-width: 896px) 100vw, 896px" className="object-cover" priority />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="article-prose">
            <Body />
          </div>
        </div>
      </article>

      {article.faqs.length > 0 && (
        <FAQ items={article.faqs} eyebrow="Questions" title="Frequently asked questions" />
      )}

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <h2 className="text-2xl font-display font-bold text-white mb-8">Keep reading</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {related.map((r) => (
            <Link key={r.slug} href={`/blog/${r.slug}`} className="group block rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-brand-accent/30 hover:bg-white/[0.07] transition-all">
              <p className="text-xs font-mono text-brand-accent uppercase tracking-wider mb-3">{r.category}</p>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">{r.title}</h3>
              <span className="inline-flex items-center gap-1.5 text-sm text-brand-accent font-semibold">
                Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>
        </div>
      </section>

      <LeadFormCTA
        title="Ship AI you can trust in production"
        description="Talk to our lead quality engineers about validating your AI systems. You keep the test suites, datasets, and results."
      />
    </div>
  );
}
