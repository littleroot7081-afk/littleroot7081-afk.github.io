import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingBag, Search, Menu, X, ChevronDown, Heart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { categories } from '../data/products'

const shopCategories = categories.filter(c => c.id !== 'all').map(c => ({
  ...c,
  href: `/shop/${c.id}`,
}))

export default function Header() {
  const { itemCount, setDrawerOpen } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const shopRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handler = (e) => {
      if (shopRef.current && !shopRef.current.contains(e.target)) setShopOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-grove-500 text-cream-100 text-xs font-body tracking-widest text-center py-2.5 overflow-hidden">
        <div className="flex items-center justify-center gap-8 flex-wrap px-4">
          <span>✦ FREE SHIPPING ACROSS INDIA</span>
          <span>✦ USE CODE <strong className="text-cream-300">WELCOME10</strong> FOR 10% OFF YOUR FIRST ORDER</span>
          <span>✦ 14-DAY RETURNS</span>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-40 bg-cream-100 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'border-b border-cream-400'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-espresso-400 hover:text-terra-500 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 font-heading text-2xl md:text-3xl font-light tracking-widest text-espresso-500 hover:text-terra-500 transition-colors"
            >
              Littleroot
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {/* Shop Dropdown */}
              <div className="relative" ref={shopRef}>
                <button
                  className="flex items-center gap-1 font-body text-sm font-medium tracking-wider uppercase text-espresso-400 hover:text-terra-500 transition-colors"
                  onClick={() => setShopOpen(v => !v)}
                >
                  Shop
                  <ChevronDown size={14} className={`transition-transform ${shopOpen ? 'rotate-180' : ''}`} />
                </button>
                {shopOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-cream-50 shadow-xl border border-cream-300 py-2 z-50">
                    <Link
                      to="/shop"
                      className="block px-5 py-2.5 text-sm text-espresso-400 hover:bg-cream-200 hover:text-terra-500 transition-colors font-body"
                      onClick={() => setShopOpen(false)}
                    >
                      All Products
                    </Link>
                    <div className="border-t border-cream-300 my-1" />
                    {shopCategories.map(cat => (
                      <Link
                        key={cat.id}
                        to={cat.href}
                        className="block px-5 py-2.5 text-sm text-espresso-400 hover:bg-cream-200 hover:text-terra-500 transition-colors font-body"
                        onClick={() => setShopOpen(false)}
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/about"
                className="font-body text-sm font-medium tracking-wider uppercase text-espresso-400 hover:text-terra-500 transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="font-body text-sm font-medium tracking-wider uppercase text-espresso-400 hover:text-terra-500 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Search */}
              <button
                className="p-1.5 text-espresso-400 hover:text-terra-500 transition-colors"
                onClick={() => setSearchOpen(v => !v)}
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              {/* Cart */}
              <button
                className="relative p-1.5 text-espresso-400 hover:text-terra-500 transition-colors"
                onClick={() => setDrawerOpen(true)}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-terra-500 text-cream-50 text-[10px] font-bold w-4.5 h-4.5 min-w-[18px] min-h-[18px] rounded-full flex items-center justify-center leading-none px-1">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="border-t border-cream-300 py-3">
              <form onSubmit={handleSearch} className="flex items-center gap-3 max-w-lg mx-auto">
                <Search size={16} className="text-espresso-200 flex-shrink-0" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-b border-cream-400 pb-1 text-sm text-espresso-500 placeholder-espresso-100 focus:outline-none focus:border-terra-400 transition-colors font-body"
                />
                <button
                  type="button"
                  onClick={() => { setSearchOpen(false); setSearchQuery('') }}
                  className="text-espresso-200 hover:text-espresso-400"
                >
                  <X size={16} />
                </button>
              </form>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-espresso-500/40" onClick={() => setMobileOpen(false)} />
          <div className="w-72 bg-cream-100 h-full flex flex-col shadow-2xl slide-in-right">
            <div className="flex items-center justify-between px-6 h-16 border-b border-cream-300">
              <span className="font-heading text-xl font-light tracking-widest text-espresso-500">Littleroot</span>
              <button onClick={() => setMobileOpen(false)} className="text-espresso-300 hover:text-terra-500">
                <X size={22} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-4">
              <Link to="/shop" className="block px-6 py-3 text-espresso-400 font-body font-medium tracking-wider uppercase text-sm hover:text-terra-500 hover:bg-cream-200 transition-colors" onClick={() => setMobileOpen(false)}>
                All Products
              </Link>
              <div className="px-6 py-2 text-[11px] tracking-widest uppercase text-espresso-100 font-body mt-2">Categories</div>
              {shopCategories.map(cat => (
                <Link
                  key={cat.id}
                  to={cat.href}
                  className="block px-6 py-3 text-espresso-400 font-body text-sm hover:text-terra-500 hover:bg-cream-200 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {cat.label}
                </Link>
              ))}
              <div className="border-t border-cream-300 mt-4 pt-4">
                <Link to="/about" className="block px-6 py-3 text-espresso-400 font-body font-medium tracking-wider uppercase text-sm hover:text-terra-500 hover:bg-cream-200 transition-colors" onClick={() => setMobileOpen(false)}>
                  About Us
                </Link>
                <Link to="/contact" className="block px-6 py-3 text-espresso-400 font-body font-medium tracking-wider uppercase text-sm hover:text-terra-500 hover:bg-cream-200 transition-colors" onClick={() => setMobileOpen(false)}>
                  Contact
                </Link>
              </div>
            </nav>
            <div className="p-6 border-t border-cream-300">
              <p className="text-xs text-espresso-200 font-body">support@littleroot.online</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
