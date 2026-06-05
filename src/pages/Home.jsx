import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, Star, Shield, Truck, RotateCcw, Leaf } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, blogPosts, testimonials, formatPrice } from '../data/products'

// Pexels CDN — all IDs verified 200 OK, free for commercial use (Pexels License)
const px = (id, w, h) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`

const heroSlides = [
  {
    id: 1,
    tagline: 'The Summer Edit',
    headline: 'Dressed for the\nMoments That Matter',
    sub: 'Easy, breathable pieces for the warmest days.',
    cta: 'Shop Fashion Wear',
    href: '/shop/fashion-wear',
    bg: 'from-grove-700 to-grove-500',
    image: px(15443075, 1200, 700),
  },
  {
    id: 2,
    tagline: 'Sleep Well Collection',
    headline: 'Softer Nights,\nBrighter Mornings',
    sub: 'Bamboo sleepwear that keeps little ones comfortable all night.',
    cta: 'Shop Sleepwear',
    href: '/shop/sleepwear',
    bg: 'from-espresso-500 to-espresso-400',
    image: px(5791338, 1200, 700),
  },
  {
    id: 3,
    tagline: 'Gift Something Beautiful',
    headline: "The Gift They'll\nNever Forget",
    sub: 'Curated gift boxes for every little one.',
    cta: 'Shop Gift Boxes',
    href: '/shop/gift-boxes',
    bg: 'from-terra-700 to-terra-500',
    image: px(9214966, 1200, 700),
  },
]

const collections = [
  {
    title: 'Effortless Style',
    sub: 'Fashion Wear',
    href: '/shop/fashion-wear',
    image: px(2083325, 600, 700),
    desc: 'Oversized tees, flow pants & mesh onesies for the fashion-forward little original.',
  },
  {
    title: 'Dream. Sleep. Repeat.',
    sub: 'Sleepwear',
    href: '/shop/sleepwear',
    image: px(18649618, 600, 700),
    desc: 'Buttery-soft bamboo sleepsuits and sleeping bags for peaceful nights.',
  },
  {
    title: 'The Perfect Gift',
    sub: 'Gift Boxes',
    href: '/shop/gift-boxes',
    image: px(7802442, 600, 700),
    desc: 'Thoughtfully curated boxes for newborns, birthdays, and every milestone in between.',
  },
]

const features = [
  { icon: Truck, title: 'Free Shipping', desc: 'Complimentary shipping on all orders across India.' },
  { icon: Shield, title: 'Certified Safe', desc: 'GOTS, OEKO-TEX & BIS/ISI certified materials.' },
  { icon: RotateCcw, title: '14-Day Returns', desc: 'Easy returns within 14 days, no questions asked.' },
  { icon: Leaf, title: 'Sustainably Made', desc: 'Organic cotton and bamboo, better for tiny skin and the planet.' },
]

const pressLogos = ['Vogue India', 'The Hindu', 'Femina', 'Mint Lounge', 'India Today']

export default function Home() {
  const [slide, setSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const t = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5000)
    return () => clearInterval(t)
  }, [autoPlay])

  const prevSlide = () => { setSlide(s => (s - 1 + heroSlides.length) % heroSlides.length); setAutoPlay(false) }
  const nextSlide = () => { setSlide(s => (s + 1) % heroSlides.length); setAutoPlay(false) }

  const bestsellers = products.filter(p => p.bestseller).slice(0, 4)
  const sleepwear = products.filter(p => p.category === 'sleepwear').slice(0, 4)
  const giftBoxes = products.filter(p => p.category === 'gift-boxes').slice(0, 4)
  const plushToys = products.filter(p => p.category === 'plush-toys').slice(0, 4)

  return (
    <div>
      {/* ── Hero Carousel ── */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ${i === slide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img src={s.image} alt={s.headline} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-espresso-500/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6 max-w-2xl">
                <p className="font-body text-xs tracking-widest uppercase text-terra-300 mb-4">{s.tagline}</p>
                <h1 className="font-heading text-5xl md:text-7xl font-light text-cream-100 leading-tight mb-6 whitespace-pre-line">{s.headline}</h1>
                <p className="font-body text-base md:text-lg text-cream-300 mb-8">{s.sub}</p>
                <Link to={s.href} className="inline-flex items-center gap-2 bg-terra-500 hover:bg-terra-600 text-cream-50 px-8 py-4 font-body font-medium tracking-widest text-sm uppercase transition-colors">
                  {s.cta} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-cream-50/20 hover:bg-cream-50/40 text-cream-100 transition-colors backdrop-blur-sm">
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-cream-50/20 hover:bg-cream-50/40 text-cream-100 transition-colors backdrop-blur-sm">
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => { setSlide(i); setAutoPlay(false) }}
              className={`w-6 h-0.5 transition-all duration-300 ${i === slide ? 'bg-cream-100 w-10' : 'bg-cream-100/40'}`}
            />
          ))}
        </div>
      </section>

      {/* ── Features Band ── */}
      <section className="bg-cream-200 border-y border-cream-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {features.map(f => (
              <div key={f.title} className="flex flex-col items-center text-center gap-3">
                <div className="w-10 h-10 rounded-full bg-grove-100 flex items-center justify-center">
                  <f.icon size={18} className="text-grove-500" />
                </div>
                <div>
                  <p className="font-body font-semibold text-sm text-espresso-500">{f.title}</p>
                  <p className="font-body text-xs text-espresso-200 mt-0.5 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collections Grid ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle mb-3">Explore the Range</p>
          <h2 className="section-title">Shop by Collection</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map(col => (
            <Link key={col.title} to={col.href} className="group relative overflow-hidden block">
              <div className="aspect-[4/5] img-zoom-container">
                <img src={col.image} alt={col.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-500/80 via-espresso-500/20 to-transparent flex flex-col justify-end p-6">
                <p className="font-body text-xs tracking-widest uppercase text-terra-300 mb-1">{col.sub}</p>
                <h3 className="font-heading text-2xl font-light text-cream-100 mb-2">{col.title}</h3>
                <p className="font-body text-xs text-cream-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{col.desc}</p>
                <span className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-cream-100 group-hover:text-terra-300 transition-colors">
                  Shop Now <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Bestsellers ── */}
      <section className="py-16 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-subtitle mb-2">Most Loved</p>
              <h2 className="section-title">Bestsellers</h2>
            </div>
            <Link to="/shop/bestsellers" className="hidden sm:flex items-center gap-2 font-body text-sm text-espresso-300 hover:text-terra-500 transition-colors underline underline-offset-4">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {bestsellers.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/shop/bestsellers" className="btn-outline-terra">View All Bestsellers</Link>
          </div>
        </div>
      </section>

      {/* ── Full-Width Banner ── */}
      <section className="relative h-96 md:h-[480px] overflow-hidden">
        <img src={px(11906475, 1400, 600)} alt="Sleep collection" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-grove-700/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-terra-300 mb-4">New Arrivals</p>
            <h2 className="font-heading text-4xl md:text-6xl font-light text-cream-100 mb-6">Sleep-Ready Essentials</h2>
            <p className="font-body text-base text-cream-300 mb-8 max-w-md mx-auto">Temperature-regulating bamboo sleepwear, designed for peaceful nights from the very first wear.</p>
            <Link to="/shop/sleepwear" className="btn-primary inline-flex items-center gap-2">
              Explore Sleepwear <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sleepwear Products ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="section-subtitle mb-2">Dream Collection</p>
            <h2 className="section-title">Bamboo Sleepwear</h2>
          </div>
          <Link to="/shop/sleepwear" className="hidden sm:flex items-center gap-2 font-body text-sm text-espresso-300 hover:text-terra-500 transition-colors underline underline-offset-4">
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {sleepwear.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="bg-grove-600 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-xs tracking-widest uppercase text-grove-200 mb-3">Quality Promise</p>
          <h2 className="font-heading text-4xl font-light text-cream-100 mb-4">Certified Safe for Little Skin</h2>
          <p className="font-body text-sm text-grove-200 mb-10 max-w-lg mx-auto leading-relaxed">Every material we use is rigorously tested and certified. Because what touches your child's skin matters more than anything.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { cert: 'GOTS Certified', desc: 'Global Organic Textile Standard for certified organic fibres.' },
              { cert: 'OEKO-TEX®', desc: 'Tested for harmful substances — safe for baby skin.' },
              { cert: 'AZO Dye Free', desc: 'No harmful azo dyes in any of our dyed products.' },
              { cert: 'BIS/ISI', desc: 'Indian safety standard for all plush toys.' },
            ].map(c => (
              <div key={c.cert} className="bg-grove-700/50 border border-grove-500 p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-grove-500 flex items-center justify-center mx-auto mb-3">
                  <Shield size={18} className="text-cream-200" />
                </div>
                <p className="font-body font-semibold text-sm text-cream-100 mb-2">{c.cert}</p>
                <p className="font-body text-xs text-grove-200 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gift Boxes ── */}
      <section className="py-16 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-subtitle mb-2">For Every Occasion</p>
              <h2 className="section-title">Gift Boxes</h2>
            </div>
            <Link to="/shop/gift-boxes" className="hidden sm:flex items-center gap-2 font-body text-sm text-espresso-300 hover:text-terra-500 transition-colors underline underline-offset-4">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {giftBoxes.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── Plush Toys ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="section-subtitle mb-2">Meet the Family</p>
            <h2 className="section-title">Picture Books & Plush Toys</h2>
          </div>
          <Link to="/shop/plush-toys" className="hidden sm:flex items-center gap-2 font-body text-sm text-espresso-300 hover:text-terra-500 transition-colors underline underline-offset-4">
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {plushToys.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-cream-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">What Parents Say</p>
            <h2 className="section-title">Loved by Families Across India</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map(t => (
              <div key={t.id} className="bg-cream-50 p-6 border border-cream-400">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-terra-400 text-terra-400" />
                  ))}
                </div>
                <p className="font-body text-sm text-espresso-400 leading-relaxed mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-body text-sm font-semibold text-espresso-500">{t.name}</p>
                  <p className="font-body text-xs text-espresso-200">{t.handle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Press / As Seen In ── */}
      <section className="py-14 border-y border-cream-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-body text-xs tracking-widest uppercase text-espresso-200 mb-8">As Featured In</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {pressLogos.map(logo => (
              <span key={logo} className="font-heading text-xl md:text-2xl font-light text-espresso-200 hover:text-terra-400 transition-colors cursor-default">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Posts ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="section-subtitle mb-2">Stories & Guides</p>
            <h2 className="section-title">From the Journal</h2>
          </div>
          <Link to="/blog" className="hidden sm:flex items-center gap-2 font-body text-sm text-espresso-300 hover:text-terra-500 transition-colors underline underline-offset-4">
            All Posts <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="group">
              <div className="aspect-[16/9] overflow-hidden bg-cream-300 mb-4 img-zoom-container">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <p className="font-body text-xs tracking-widest uppercase text-terra-500 mb-2">{post.category}</p>
              <h3 className="font-heading text-xl font-medium text-espresso-500 group-hover:text-terra-500 transition-colors mb-2">{post.title}</h3>
              <p className="font-body text-sm text-espresso-200 leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="font-body text-xs text-espresso-100">{post.readTime}</span>
                <span className="font-body text-xs text-espresso-100">{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-terra-500 py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-body text-xs tracking-widest uppercase text-terra-200 mb-4">First Order?</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-cream-100 mb-4">Get 10% Off</h2>
          <p className="font-body text-base text-terra-200 mb-8">Use code <strong className="text-cream-100 tracking-widest">WELCOME10</strong> at checkout.</p>
          <Link to="/shop" className="inline-flex items-center gap-2 bg-cream-100 hover:bg-cream-50 text-terra-600 px-8 py-4 font-body font-medium tracking-widest text-sm uppercase transition-colors">
            Shop Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
