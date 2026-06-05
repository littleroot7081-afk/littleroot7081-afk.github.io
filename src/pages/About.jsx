import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Leaf, Heart, Star } from 'lucide-react'

const values = [
  { icon: Leaf, title: 'Sustainably Sourced', desc: 'Organic cotton and bamboo viscose, certified and tested. Better for small skin and the planet.' },
  { icon: Shield, title: 'Rigorously Certified', desc: 'Every fabric is GOTS, OEKO-TEX, or BIS/ISI certified before it touches your child.' },
  { icon: Heart, title: 'Designed for Real Life', desc: 'Pieces that work for airports, parks, bedtime, and everything in between.' },
  { icon: Star, title: 'Fewer, Better Things', desc: 'We don\'t make seasonal throwaway fashion. We make pieces that last, wash beautifully, and grow with your child.' },
]

const team = [
  { name: 'Anika Sharma', role: 'Founder & Creative Director', image: 'https://images.pexels.com/photos/20582732/pexels-photo-20582732.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
  { name: 'Rohan Mehta', role: 'Head of Product & Sourcing', image: 'https://images.pexels.com/photos/20509003/pexels-photo-20509003.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
  { name: 'Priya Nair', role: 'Brand & Community', image: 'https://images.pexels.com/photos/7328426/pexels-photo-7328426.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-80 md:h-[480px] overflow-hidden">
        <img src="https://images.pexels.com/photos/32069221/pexels-photo-32069221.jpeg?auto=compress&cs=tinysrgb&w=1400&h=600&fit=crop" alt="About Littleroot" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-espresso-500/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-terra-300 mb-4">Our Story</p>
            <h1 className="font-heading text-5xl md:text-7xl font-light text-cream-100">For Little Originals</h1>
          </div>
        </div>
      </div>

      {/* Brand Story */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-subtitle mb-4">Who We Are</p>
        <h2 className="section-title mb-8">Born from a Parent's Frustration</h2>
        <div className="space-y-5 text-left md:text-center">
          <p className="font-body text-base text-espresso-400 leading-relaxed">
            Littleroot began with a simple question: why is it so hard to find kidswear that's both beautifully designed <em>and</em> safe for little skin?
          </p>
          <p className="font-body text-base text-espresso-400 leading-relaxed">
            We were design-conscious parents who kept compromising — either on quality, safety, or style. So we built the brand we wished existed. One that takes certified, sustainable materials as seriously as it takes aesthetics.
          </p>
          <p className="font-body text-base text-espresso-400 leading-relaxed">
            Every Littleroot piece is crafted with a relaxed, considered silhouette inspired by global streetwear — but adapted for the realities of little bodies in motion. Soft waistbands. Durable stitching. Colours that don't fade. Fabrics that get softer with every wash.
          </p>
          <p className="font-body text-base text-espresso-400 leading-relaxed">
            We believe children deserve to be dressed well — not in loud logos and scratchy polyester, but in quiet, considered pieces that let their personalities shine through.
          </p>
        </div>
      </section>

      {/* Divider Image */}
      <div className="h-72 md:h-96 overflow-hidden">
        <img src="https://images.pexels.com/photos/13627298/pexels-photo-13627298.jpeg?auto=compress&cs=tinysrgb&w=1400&h=500&fit=crop" alt="Littleroot collection" className="w-full h-full object-cover" />
      </div>

      {/* Values */}
      <section className="py-20 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle mb-3">What We Stand For</p>
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(v => (
              <div key={v.title} className="bg-cream-50 p-8 text-center border border-cream-300">
                <div className="w-12 h-12 rounded-full bg-grove-100 flex items-center justify-center mx-auto mb-5">
                  <v.icon size={22} className="text-grove-500" />
                </div>
                <h3 className="font-heading text-xl font-medium text-espresso-500 mb-3">{v.title}</h3>
                <p className="font-body text-sm text-espresso-300 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-subtitle mb-4">Our Promise</p>
            <h2 className="section-title mb-6">Certified from Thread to Tag</h2>
            <p className="font-body text-sm text-espresso-400 leading-relaxed mb-8">
              We don't just claim our materials are safe — we prove it. Every fabric used in a Littleroot product carries at least one internationally recognised certification. This isn't a marketing exercise; it's the baseline we set for ourselves before we put anything on a child.
            </p>
            <div className="space-y-4">
              {[
                { cert: 'GOTS Certified', desc: 'Our organic cotton fabrics are certified by the Global Organic Textile Standard — the world\'s leading certification for organic fibres.' },
                { cert: 'OEKO-TEX® Standard 100', desc: 'All bamboo sleepwear is independently tested for over 100 harmful substances under OEKO-TEX Standard 100.' },
                { cert: 'AZO Dye Free', desc: 'Our dyes are rigorously tested to ensure they are free from harmful azo compounds.' },
                { cert: 'BIS/ISI Certified', desc: 'All plush toys meet the Bureau of Indian Standards safety requirements for children\'s toys.' },
              ].map(c => (
                <div key={c.cert} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-terra-400 flex-shrink-0 mt-2" />
                  <div>
                    <p className="font-body text-sm font-semibold text-espresso-500">{c.cert}</p>
                    <p className="font-body text-sm text-espresso-300 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square overflow-hidden bg-cream-300">
            <img src="https://images.pexels.com/photos/7282448/pexels-photo-7282448.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" alt="Certifications" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-grove-600 py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-4xl font-light text-cream-100 mb-4">Ready to Meet the Collection?</h2>
          <p className="font-body text-sm text-grove-200 mb-8">Every piece is made with the love and care you'd put into it yourself — just without the late nights.</p>
          <Link to="/shop" className="inline-flex items-center gap-2 bg-terra-500 hover:bg-terra-600 text-cream-50 px-8 py-4 font-body font-medium tracking-widest text-sm uppercase transition-colors">
            Shop the Collection <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
