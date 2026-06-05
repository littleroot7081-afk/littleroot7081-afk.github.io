import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, Shield, Share2 } from 'lucide-react'
import { blogPosts } from '../data/products'

const articleContents = {
  'how-to-build-a-capsule-wardrobe-for-toddlers': {
    title: 'How to Build a Capsule Wardrobe for Toddlers',
    subtitle: 'Simplifying your mornings and maximizing comfort with a minimalist closet.',
    paragraphs: [
      'Toddlers are force multipliers of chaos. Between breakfast spills, playground mud, and sudden growth spurts, their wardrobe needs to work hard. However, many parents find themselves drowning in piles of laundry and clothes that were worn only once. The solution? A curated toddler capsule wardrobe.',
      'A capsule wardrobe is a small selection of high-quality, versatile items that can be mixed and matched effortlessly. For toddlers, we recommend a capsule of 15 to 20 key pieces (excluding underwear and socks). Not only does this simplify your morning routine, but it also ensures you invest in fabrics that are durable, organic, and safe for sensitive skin.',
      'Here is our step-by-step formula to build the perfect toddler capsule wardrobe:',
      '1. Start with a neutral palette: Choose base colors like oatmilk, cocoa, charcoal, and warm olive. These colors hide dirt better and pair perfectly with any other shade.',
      '2. Focus on layering: Rather than buying heavy winter wear, select breathable cotton or bamboo tees and pair them with lightweight cardigans and windbreakers.',
      '3. Prioritize relaxed fits: Look for wide-leg pants and drop-shoulder tees that allow your toddler to run, climb, and crawl without restriction.',
      '4. Invest in certified fabrics: When you limit the number of items, you can focus on quality. Look for GOTS-certified organic cotton and OEKO-TEX certified bamboo viscose to ensure no harsh chemicals touch your child\'s skin.'
    ]
  },
  'why-bamboo-is-the-gold-standard-for-baby-sleepwear': {
    title: 'Why Bamboo is the Gold Standard for Baby Sleepwear',
    subtitle: 'The science of sleep: how fabric choice impacts your baby\'s sleep cycle.',
    paragraphs: [
      'Every parent knows the value of a good night\'s sleep. While we obsess over white noise machines, crib mattresses, and bedtime routines, we often overlook the single most important factor that is in direct contact with our baby\'s skin all night: their pajamas.',
      'In recent years, bamboo viscose has emerged as the absolute gold standard for baby sleepwear, outperforming traditional cotton in several key scientific areas:',
      '1. Thermal Regulation: Babies cannot regulate their body temperature as efficiently as adults. Bamboo fiber is filled with micro-gaps that provide natural ventilation, keeping your baby warm in the winter and cool in the summer. This prevents night sweats and cooling-induced waking.',
      '2. Unrivaled Softness: Bamboo viscose has a smooth, round fiber structure that feels buttery-soft and slick, comparable to silk. For infants with eczema or sensitive skin, it minimizes friction and prevents flare-ups.',
      '3. Moisture Wicking: Bamboo absorbs moisture up to four times faster than cotton, pulling sweat away from the skin and keeping your baby dry and cozy throughout the night.',
      '4. Eco-Friendly & Sustainable: Bamboo is one of the fastest-growing plants on earth, requiring no pesticides and very little water. Choosing bamboo is a vote for a healthier planet for your child to grow up in.'
    ]
  },
  'the-art-of-gifting-for-little-ones': {
    title: 'The Art of Gifting for Little Ones',
    subtitle: 'A guide to selecting memorable, practical, and safe gifts that parents will actually appreciate.',
    paragraphs: [
      'Whether it\'s a baby shower, a first birthday, or a festive celebration, buying gifts for young children is always a delight. However, walk down any toy aisle and you will find an overwhelming amount of cheap, noisy plastic toys and scratchy synthetic clothes.',
      'The best children\'s gifts are those that combine beauty, utility, and absolute safety. At Littleroot, we believe in "fewer, better things" — gifts that become treasured family keepsakes or provide immense daily convenience to parents.',
      'Here are our golden rules for mindful gifting:',
      '1. Think Practicality: Parents appreciate items that solve daily challenges. A premium bamboo sleepsuit or a soft organic swaddle blanket is always appreciated because they are used every single day.',
      '2. Encourage Development: Instead of flashing plastic toys, opt for beautifully illustrated picture books or soft, safety-tested plush toys that encourage language development and imaginative play.',
      '3. Demand Safety Certifications: Never gift anything to a baby that hasn\'t been rigorously tested. Ensure toys have BIS/ISI certifications, and fabrics carry GOTS or OEKO-TEX labels.',
      '4. Gift a Complete Experience: A thoughtfully curated gift box with a handwritten card and signature packaging creates a memorable opening ritual that feels incredibly special.'
    ]
  }
}

export default function BlogDetail() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)
  const content = articleContents[slug]

  if (!post || !content) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="font-heading text-4xl font-light text-espresso-300 mb-4">Article Not Found</p>
        <Link to="/blog" className="btn-primary mt-4">Back to Journal</Link>
      </div>
    )
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <div className="bg-cream-100 min-h-screen">
      {/* Breadcrumbs / Back */}
      <div className="border-b border-cream-300 bg-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/blog" className="inline-flex items-center gap-2 font-body text-xs text-espresso-300 hover:text-terra-500 transition-colors uppercase tracking-wider font-semibold">
            <ArrowLeft size={14} /> Back to Journal
          </Link>
          <div className="flex items-center gap-3 text-espresso-200 hover:text-terra-500 transition-colors cursor-pointer">
            <Share2 size={16} />
            <span className="font-body text-xs font-semibold uppercase tracking-wider">Share</span>
          </div>
        </div>
      </div>

      <article className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category & Date */}
        <div className="text-center mb-8">
          <span className="font-body text-xs tracking-widest uppercase text-terra-500 font-semibold block mb-3">
            {post.category}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-espresso-500 leading-tight mb-4 text-balance">
            {content.title}
          </h1>
          <p className="font-body text-base text-espresso-200 leading-relaxed italic max-w-xl mx-auto">
            {content.subtitle}
          </p>
          <div className="flex items-center justify-center gap-6 text-xs font-body text-espresso-100 mt-6">
            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
            <span className="flex items-center gap-1">
              <Calendar size={12} /> 
              {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="aspect-[16/9] overflow-hidden rounded-lg bg-cream-300 mb-12 shadow-md">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover animate-fade-in" />
        </div>

        {/* Article Content */}
        <div className="space-y-6 font-body text-sm md:text-base text-espresso-400 leading-relaxed">
          {content.paragraphs.map((para, idx) => (
            <p key={idx} className={para.match(/^\d\./) ? "font-semibold text-espresso-500 pl-4 border-l-2 border-terra-400" : ""}>
              {para}
            </p>
          ))}
        </div>

        {/* Premium Promise Callout */}
        <div className="bg-cream-200 border border-cream-300 p-8 rounded-lg mt-14 flex items-start gap-4">
          <Shield size={24} className="text-grove-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-heading text-lg font-medium text-espresso-500 mb-1">Our Quality Promise</h4>
            <p className="font-body text-xs text-espresso-300 leading-relaxed">
              Every garment and toy featured in our journal is designed and tested under certified standards. We use GOTS organic cotton, OEKO-TEX bamboo viscose, and BIS/ISI compliant toys because your child's safety is our absolute baseline.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-cream-200 border-t border-cream-300 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading text-2xl font-light text-espresso-500 mb-8 text-center">Continue Reading</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedPosts.map((related) => (
              <div key={related.id} className="bg-cream-50 border border-cream-300 rounded-lg overflow-hidden flex flex-col shadow-sm">
                <Link to={`/blog/${related.slug}`} className="aspect-[16/10] overflow-hidden bg-cream-300 block img-zoom-container">
                  <img src={related.image} alt={related.title} className="w-full h-full object-cover" />
                </Link>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-body text-[10px] tracking-widest uppercase text-terra-500 block mb-1 font-semibold">
                      {related.category}
                    </span>
                    <h4 className="font-heading text-lg font-medium text-espresso-500 mb-2 hover:text-terra-500 transition-colors">
                      <Link to={`/blog/${related.slug}`}>{related.title}</Link>
                    </h4>
                  </div>
                  <Link to={`/blog/${related.slug}`} className="inline-flex items-center gap-1.5 font-body text-xs text-espresso-400 hover:text-terra-500 transition-colors mt-3 font-semibold">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
