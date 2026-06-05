import { useState, useMemo } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, categories, getProductsByCategory } from '../data/products'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'best-selling', label: 'Best Selling' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Alphabetically, A–Z' },
]

const priceRanges = [
  { label: 'Under Rs. 1,000', min: 0, max: 999 },
  { label: 'Rs. 1,000 – Rs. 2,000', min: 1000, max: 2000 },
  { label: 'Rs. 2,000 – Rs. 3,000', min: 2000, max: 3000 },
  { label: 'Above Rs. 3,000', min: 3000, max: Infinity },
]

export default function Shop() {
  const { category = 'all' } = useParams()
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const [sort, setSort] = useState('featured')
  const [priceFilter, setPriceFilter] = useState(null)
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)

  const categoryLabel = categories.find(c => c.id === category)?.label || 'All Products'

  const filtered = useMemo(() => {
    let list = getProductsByCategory(category)

    if (query) {
      const q = query.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags?.some(t => t.toLowerCase().includes(q))
      )
    }

    if (priceFilter) {
      list = list.filter(p => p.price >= priceFilter.min && p.price <= priceFilter.max)
    }

    switch (sort) {
      case 'best-selling': return [...list].sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0))
      case 'price-asc': return [...list].sort((a, b) => a.price - b.price)
      case 'price-desc': return [...list].sort((a, b) => b.price - a.price)
      case 'name-asc': return [...list].sort((a, b) => a.name.localeCompare(b.name))
      default: return list
    }
  }, [category, sort, priceFilter, query])

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-cream-200 border-b border-cream-300 py-12 text-center">
        <p className="font-body text-xs tracking-widest uppercase text-terra-500 mb-2">
          {query ? 'Search Results' : 'Our Collection'}
        </p>
        <h1 className="font-heading text-4xl md:text-5xl font-light text-espresso-500">
          {query ? `"${query}"` : categoryLabel}
        </h1>
        {filtered.length > 0 && (
          <p className="font-body text-sm text-espresso-200 mt-2">{filtered.length} product{filtered.length !== 1 ? 's' : ''}</p>
        )}
      </div>

      {/* Category Pills */}
      <div className="border-b border-cream-300 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-4">
            {categories.map(cat => (
              <Link
                key={cat.id}
                to={cat.id === 'all' ? '/shop' : `/shop/${cat.id}`}
                className={`flex-shrink-0 px-5 py-2 text-xs font-body font-medium tracking-wider uppercase transition-colors ${
                  category === cat.id
                    ? 'bg-espresso-500 text-cream-100'
                    : 'bg-cream-200 text-espresso-300 hover:bg-cream-300'
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Filters */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="flex items-center gap-2 font-body text-sm text-espresso-400 hover:text-terra-500 transition-colors border border-cream-400 px-4 py-2"
          >
            <SlidersHorizontal size={14} />
            Filters
            {priceFilter && <span className="bg-terra-500 text-cream-50 text-[10px] w-4 h-4 rounded-full flex items-center justify-center">1</span>}
          </button>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(v => !v)}
              className="flex items-center gap-2 font-body text-sm text-espresso-400 hover:text-terra-500 transition-colors border border-cream-400 px-4 py-2"
            >
              Sort: {sortOptions.find(s => s.value === sort)?.label}
              <ChevronDown size={14} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 w-52 bg-cream-50 shadow-xl border border-cream-300 py-1 z-30">
                {sortOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => { setSort(opt.value); setSortOpen(false) }}
                    className={`w-full text-left px-5 py-2.5 font-body text-sm transition-colors ${
                      sort === opt.value ? 'text-terra-500 bg-cream-200' : 'text-espresso-400 hover:bg-cream-200'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Filter Panel */}
        {filterOpen && (
          <div className="bg-cream-200 border border-cream-300 p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-body text-sm font-semibold text-espresso-500 tracking-wider uppercase">Filter by Price</h3>
              {priceFilter && (
                <button onClick={() => setPriceFilter(null)} className="text-xs text-terra-500 font-body underline underline-offset-2">
                  Clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              {priceRanges.map(range => (
                <button
                  key={range.label}
                  onClick={() => setPriceFilter(priceFilter?.label === range.label ? null : range)}
                  className={`px-4 py-2 text-xs font-body border transition-colors ${
                    priceFilter?.label === range.label
                      ? 'bg-espresso-500 text-cream-100 border-espresso-500'
                      : 'border-cream-400 text-espresso-300 hover:border-espresso-400'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-heading text-3xl font-light text-espresso-300 mb-4">No products found</p>
            <p className="font-body text-sm text-espresso-200 mb-8">Try adjusting your filters or browse all products.</p>
            <Link to="/shop" className="btn-primary">Browse All Products</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </div>
  )
}
