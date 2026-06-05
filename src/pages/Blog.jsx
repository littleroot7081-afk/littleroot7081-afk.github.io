import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react'
import { blogPosts } from '../data/products'

export default function Blog() {
  return (
    <div>
      {/* Header Band */}
      <div className="bg-cream-200 border-b border-cream-300 py-14 text-center">
        <p className="font-body text-xs tracking-widest uppercase text-terra-500 mb-3">Littleroot Journal</p>
        <h1 className="font-heading text-4xl md:text-5xl font-light text-espresso-500">Stories & Guides</h1>
        <p className="font-body text-sm text-espresso-200 mt-3">Nurturing advice, style tips, and updates for the conscious parent.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post (First post in list) */}
        {blogPosts.length > 0 && (
          <div className="mb-16 bg-cream-50 border border-cream-300 rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-sm">
            <div className="lg:col-span-7 aspect-[16/10] overflow-hidden img-zoom-container bg-cream-300">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <span className="font-body text-xs tracking-widest uppercase text-terra-500 block mb-3 font-semibold">
                  Featured · {blogPosts[0].category}
                </span>
                <h2 className="font-heading text-3xl font-light text-espresso-500 leading-tight mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="font-body text-sm text-espresso-300 leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-body text-espresso-100">
                  <span className="flex items-center gap-1"><Clock size={12} /> {blogPosts[0].readTime}</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> 
                    {new Date(blogPosts[0].date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <Link
                  to={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-espresso-400 hover:text-terra-500 transition-colors font-semibold mt-2"
                >
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-cream-50 border border-cream-300 rounded-lg overflow-hidden flex flex-col shadow-sm">
              <Link to={`/blog/${post.slug}`} className="aspect-[16/10] overflow-hidden img-zoom-container bg-cream-300 block">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-body text-xs tracking-widest uppercase text-terra-500 block mb-2 font-semibold">
                    {post.category}
                  </span>
                  <h3 className="font-heading text-xl font-medium text-espresso-500 mb-3 hover:text-terra-500 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="font-body text-xs text-espresso-300 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-cream-200">
                  <div className="flex items-center justify-between text-[11px] font-body text-espresso-100 mb-4">
                    <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={10} /> 
                      {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 font-body text-xs tracking-widest uppercase text-espresso-400 hover:text-terra-500 transition-colors font-semibold"
                  >
                    Read More <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
