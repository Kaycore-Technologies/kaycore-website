import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/components/company-data';
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | Kaycore Technologies',
    };
  }

  return {
    title: `${post.title} | Kaycore Technologies`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image || ''],
    },
  };
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#020617] min-h-screen pb-20">
      {/* Hero Header */}
      <header className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image || ''}
            alt={post.title}
            fill
            className="object-cover opacity-40 blur-sm scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/60 via-[#020617]/80 to-[#020617]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8 mt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-sky-400 text-sm font-medium tracking-wide uppercase">{post.category}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-purple-600 p-[1px]">
                <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <span className="font-medium text-white">
                {post.author}
                {post.designation && <span className="text-gray-400 font-normal ml-1">| {post.designation}</span>}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-sky-400" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content Container */}
      <main className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 -mt-20">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">

          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-sky-400 transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            {/* Render Content Blocks */}
            {post.content && Array.isArray(post.content) ? (
              post.content.map((block: any, index: number) => {
                switch (block.type) {
                  case 'paragraph':
                    return <p key={index} className="text-gray-300 leading-relaxed mb-6">{block.text}</p>;
                  case 'heading':
                    return <h2 key={index} className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-6">{block.text}</h2>;
                  case 'subheading':
                    return <h3 key={index} className="text-xl sm:text-2xl font-bold text-white mt-8 mb-4">{block.text}</h3>;
                  case 'list':
                    return (
                      <ul key={index} className="space-y-3 mb-8 my-6 bg-white/5 rounded-xl p-6 border border-white/5">
                        {block.items.map((item: string, i: number) => (
                          <li key={i} className="flex items-start text-gray-300">
                            <span className="mr-3 mt-2 w-1.5 h-1.5 bg-sky-400 rounded-full flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  case 'quote':
                    return (
                      <blockquote key={index} className="border-l-4 border-sky-500 pl-6 py-2 my-8 italic bg-sky-500/5 rounded-r-lg">
                        <p className="text-xl text-white font-medium mb-2">"{block.text}"</p>
                        {block.citation && <footer className="text-sky-400 not-italic text-sm uppercase tracking-wider">— {block.citation}</footer>}
                      </blockquote>
                    );
                  case 'image':
                    return (
                      <div key={index} className="my-8 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                        <Image
                          src={block.url}
                          alt={block.alt || 'Blog image'}
                          width={800}
                          height={500}
                          className="w-full h-auto object-cover"
                        />
                        {block.caption && <p className="text-center text-sm text-gray-500 mt-2 italic">{block.caption}</p>}
                      </div>
                    );
                  default:
                    return null;
                }
              })
            ) : (
              <p className="text-gray-400 italic">Content not available.</p>
            )}
          </div>

          {/* Share Footer */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-gray-400 font-medium">Share this article</div>
            <div className="flex gap-4">
              <button className="p-3 rounded-full bg-white/5 hover:bg-[#0077b5] hover:text-white text-gray-400 transition-all duration-300 ring-1 ring-white/10 hover:ring-0">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-full bg-white/5 hover:bg-[#1DA1F2] hover:text-white text-gray-400 transition-all duration-300 ring-1 ring-white/10 hover:ring-0">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-full bg-white/5 hover:bg-[#4267B2] hover:text-white text-gray-400 transition-all duration-300 ring-1 ring-white/10 hover:ring-0">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-full bg-white/5 hover:bg-gray-700 hover:text-white text-gray-400 transition-all duration-300 ring-1 ring-white/10 hover:ring-0">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Newsletter CTA Mini */}
        <div className="mt-12 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-md">
          <h3 className="text-2xl font-bold text-white mb-3">Found this useful?</h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">Join the Kaycore engineering newsletter for weekly deep dives into cloud architecture and AI.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Engineering email"
              className="flex-1 px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white focus:border-sky-500 focus:outline-none"
            />
            <button className="px-6 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}
