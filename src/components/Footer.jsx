import { Link } from 'react-router-dom'
import { Instagram, Mail, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-espresso-500 text-cream-200">
      {/* Newsletter Band */}
      <div className="border-b border-espresso-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-terra-300 mb-1">Stay in the loop</p>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-cream-100">New arrivals, early access & stories for parents.</h3>
          </div>
          {subscribed ? (
            <div className="text-sm font-body text-grove-300 flex-shrink-0">✓ You're subscribed!</div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex items-stretch gap-0 w-full md:w-auto md:min-w-[340px] flex-shrink-0">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-espresso-400 border border-espresso-300 px-4 py-3 text-sm text-cream-200 placeholder-espresso-100 focus:outline-none focus:border-terra-400 font-body transition-colors"
              />
              <button
                type="submit"
                className="bg-terra-500 hover:bg-terra-600 px-5 py-3 text-cream-50 transition-colors flex items-center gap-2"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="font-heading text-2xl font-light tracking-widest text-cream-100 hover:text-terra-300 transition-colors block mb-4">
              Littleroot
            </Link>
            <p className="text-sm text-espresso-100 font-body leading-relaxed mb-6">
              Premium minimalist kidswear. Crafted for little originals and the big people raising them.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-espresso-100 hover:text-terra-300 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="mailto:hi@littleroot.in" className="text-espresso-100 hover:text-terra-300 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-cream-100 font-semibold mb-5">Shop</h4>
            <ul className="space-y-3">
              {[
                { label: 'All Products', href: '/shop' },
                { label: 'Bestsellers', href: '/shop/bestsellers' },
                { label: 'Fashion Wear', href: '/shop/fashion-wear' },
                { label: 'Sleepwear', href: '/shop/sleepwear' },
                { label: 'Outdoor Wear', href: '/shop/outdoor-wear' },
                { label: 'Books', href: '/shop/books' },
                { label: 'Plush Toys', href: '/shop/plush-toys' },
                { label: 'Gift Boxes', href: '/shop/gift-boxes' },
              ].map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-espresso-100 hover:text-cream-200 transition-colors font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-cream-100 font-semibold mb-5">Information</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Shipping & Returns', href: '/shipping' },
                { label: 'Size Guide', href: '/size-guide' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms-of-service' },
              ].map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-espresso-100 hover:text-cream-200 transition-colors font-body">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-cream-100 font-semibold mb-5">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="text-sm text-espresso-100 font-body">hi@littleroot.in</li>
              <li className="text-sm text-espresso-100 font-body">Mon–Sat, 10am–6pm IST</li>
              <li className="text-sm text-espresso-100 font-body">We reply within 24 hours</li>
            </ul>
            <div className="mt-8">
              <p className="text-xs text-espresso-200 font-body mb-3 tracking-wide">CERTIFIED & SAFE</p>
              <div className="flex flex-wrap gap-2">
                {['GOTS', 'OEKO-TEX', 'BIS/ISI', 'AZO Free'].map(cert => (
                  <span key={cert} className="text-[10px] font-body border border-espresso-300 text-espresso-100 px-2 py-1 tracking-wider">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-espresso-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-espresso-200 font-body">
            © {new Date().getFullYear()} Littleroot. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-xs text-espresso-200 hover:text-cream-300 transition-colors font-body">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-xs text-espresso-200 hover:text-cream-300 transition-colors font-body">Terms</Link>
          </div>
          <p className="text-xs text-espresso-200 font-body">Designed with ♥ in India</p>
        </div>
      </div>
    </footer>
  )
}
