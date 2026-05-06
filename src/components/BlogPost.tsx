import { Navigate, Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from './blogData';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <section className="min-h-screen border-t border-flow-border bg-flow-bg px-6 pb-24 pt-32">
      <div className="mx-auto max-w-4xl">
        <Link to="/blogs" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-opacity hover:opacity-85">
          <ArrowLeft className="h-4 w-4" strokeWidth={2} />
          Back to blogs
        </Link>

        <article className="rounded-2xl border border-flow-border bg-flow-card/80 p-7 md:p-10">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-white">
            <span className="rounded-full bg-flow-gradient-soft px-3 py-1 text-xs font-semibold ring-1 ring-flow-border">{post.category}</span>
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            className="mb-7 h-auto w-full rounded-2xl border border-flow-border object-cover"
          />

          <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">{post.title}</h1>
          <p className="mb-8 text-base text-white">By {post.author}</p>

          <div className="space-y-5 text-lg leading-relaxed text-white">
            {post.content.map((paragraph, index) => (
              <p key={`${post.slug}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
