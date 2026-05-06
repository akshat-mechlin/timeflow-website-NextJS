import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from './blogData';

export default function Blogs() {
  return (
    <section className="min-h-screen border-t border-flow-border bg-flow-bg px-6 pb-24 pt-32">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-flow-purple">Blog</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">Insights from the Timeflow team</h1>
          <p className="text-lg leading-relaxed text-white">
            Practical guidance on attendance policy, desktop rollout, and reporting workflows for modern teams.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex h-full flex-col rounded-2xl border border-flow-border bg-flow-card/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-flow-blue/40 hover:shadow-lg hover:shadow-flow-blue/10"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-flow-gradient-soft px-3 py-1 text-xs font-semibold text-white ring-1 ring-flow-border">
                  {post.category}
                </span>
                <span className="text-xs text-white">{post.readTime}</span>
              </div>

              <h2 className="mb-3 text-xl font-semibold leading-tight text-white">{post.title}</h2>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-white">{post.summary}</p>

              <div className="mb-5 border-t border-flow-border pt-4 text-xs text-white">
                <p>{post.author}</p>
                <p className="mt-1">{post.publishedAt}</p>
              </div>

              <Link
                to={`/blogs/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white transition-all hover:gap-2.5"
              >
                Read article
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
