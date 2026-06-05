import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShoppingBag, Heart, Star, ChevronDown, ChevronLeft, Shield, Truck, RotateCcw, Share2 } from 'lucide-react'
import { getProductBySlug, products, formatPrice, reviews as allReviews } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem, wishlist, toggleWishlist } = useCart()

  const [activeImage, setActiveImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [qty, setQty] = useState(1)
  const [addedMsg, setAddedMsg] = useState(false)
  const [openTab, setOpenTab] = useState('details')
  const [sizeError, setSizeError] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="font-heading text-4xl font-light text-espresso-300 mb-4">Product Not Found</p>
        <Link to="/shop" className="btn-primary mt-4">Back to Shop</Link>
      </div>
    )
  }

  const isWishlisted = wishlist.includes(product.id)
  const productReviews = allReviews[product.id] || []
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    if (product.sizes?.length > 0 && !selectedSize) { setSizeError(true); return }
    const color = selectedColor || product.colors?.[0]?.name || null
    addItem(product, selectedSize, color, qty)
    setAddedMsg(true)
    setTimeout(() => setAddedMsg(false), 2500)
  }

  const sizeGuide = [
    { size: '1-2Y', chest: '52 cm', length: '42 cm', age: '12-24 months' },
    { size: '2-3Y', chest: '56 cm', length: '46 cm', age: '24-36 months' },
    { size: '3-4Y', chest: '60 cm', length: '50 cm', age: '36-48 months' },
  ]

  return (
    <div>
      {/* Breadcrumb */}
      <div className="border-b border-cream-300 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs font-body text-espresso-200">
            <Link to="/" className="hover:text-terra-500 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-terra-500 transition-colors">Shop</Link>
            <span>/</span>
            <Link to={`/shop/${product.category}`} className="hover:text-terra-500 transition-colors capitalize">
              {product.category.replace('-', ' ')}
            </Link>
            <span>/</span>
            <span className="text-espresso-400 truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="hidden md:flex flex-col gap-2 w-16 flex-shrink-0">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-16 h-20 overflow-hidden border-2 transition-colors ${
                      activeImage === i ? 'border-terra-500' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Main Image */}
            <div className="flex-1">
              <div className="aspect-[3/4] overflow-hidden bg-cream-300 relative">
                <img
                  src={product.images[activeImage]}
                  alt={`${product.name} ${product.subtitle}`}
                  className="w-full h-full object-cover"
                />
                {product.bestseller && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-terra-500 text-cream-50 text-xs font-body font-semibold tracking-widest uppercase px-3 py-1.5">
                      Bestseller
                    </span>
                  </div>
                )}
              </div>
              {/* Mobile dots */}
              {product.images.length > 1 && (
                <div className="md:hidden flex gap-1.5 justify-center mt-3">
                  {product.images.map((_, i) => (
                    <button key={i} onClick={() => setActiveImage(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${i === activeImage ? 'bg-terra-500' : 'bg-cream-400'}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-body text-xs tracking-widest uppercase text-terra-500 mb-2 capitalize">
              {product.category.replace('-', ' ')}
            </p>

            {/* Title & Price */}
            <h1 className="font-heading text-3xl md:text-4xl font-light text-espresso-500 leading-tight">
              {product.name}
            </h1>
            <p className="font-body text-base text-espresso-200 mt-1">{product.subtitle}</p>

            <div className="flex items-center gap-4 mt-4">
              <p className="font-body text-2xl font-semibold text-espresso-500">{formatPrice(product.price)}</p>
              {product.reviewCount > 0 && (
                <div className="flex items-center gap-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className={i < Math.round(product.rating) ? 'fill-terra-400 text-terra-400' : 'text-cream-400'} />
                    ))}
                  </div>
                  <span className="font-body text-xs text-espresso-200">{product.rating} ({product.reviewCount} reviews)</span>
                </div>
              )}
            </div>

            <div className="border-t border-cream-300 mt-6 pt-6 space-y-6">
              {/* Color Selector */}
              {product.colors?.length > 0 && (
                <div>
                  <p className="font-body text-xs tracking-wider uppercase text-espresso-300 mb-3">
                    Colour: <span className="text-espresso-500 normal-case tracking-normal font-medium">
                      {selectedColor || product.colors[0].name}
                    </span>
                  </p>
                  <div className="flex gap-2.5">
                    {product.colors.map(color => (
                      <button
                        key={color.slug}
                        onClick={() => setSelectedColor(color.name)}
                        title={color.name}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          (selectedColor || product.colors[0].name) === color.name
                            ? 'border-terra-500 scale-110'
                            : 'border-cream-400 hover:border-espresso-300'
                        }`}
                        style={{ backgroundColor: color.hex }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              {product.sizes?.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-body text-xs tracking-wider uppercase text-espresso-300">Size</p>
                    <button
                      onClick={() => setOpenTab('size-guide')}
                      className="font-body text-xs text-terra-500 hover:text-terra-600 underline underline-offset-2"
                    >
                      Size Guide
                    </button>
                  </div>
                  <div className="flex gap-2">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => { setSelectedSize(size); setSizeError(false) }}
                        className={`px-4 py-2.5 text-xs font-body border transition-colors ${
                          selectedSize === size
                            ? 'bg-espresso-500 text-cream-100 border-espresso-500'
                            : sizeError
                            ? 'border-terra-400 text-espresso-300 hover:border-espresso-400'
                            : 'border-cream-400 text-espresso-300 hover:border-espresso-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  {sizeError && (
                    <p className="text-xs text-terra-500 font-body mt-2">Please select a size</p>
                  )}
                </div>
              )}

              {/* Qty */}
              <div>
                <p className="font-body text-xs tracking-wider uppercase text-espresso-300 mb-3">Quantity</p>
                <div className="flex items-center border border-cream-400 w-fit">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-4 py-3 text-espresso-400 hover:bg-cream-200 transition-colors">
                    −
                  </button>
                  <span className="px-5 font-body text-sm text-espresso-500">{qty}</span>
                  <button onClick={() => setQty(q => q + 1)} className="px-4 py-3 text-espresso-400 hover:bg-cream-200 transition-colors">
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart & Wishlist */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-4 font-body font-medium tracking-wider text-sm uppercase transition-all ${
                  addedMsg
                    ? 'bg-grove-500 text-cream-50'
                    : 'bg-terra-500 hover:bg-terra-600 text-cream-50'
                }`}
              >
                <ShoppingBag size={16} />
                {addedMsg ? '✓ Added to Bag!' : 'Add to Bag'}
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-4 border transition-colors ${
                  isWishlisted
                    ? 'bg-terra-50 border-terra-400 text-terra-500'
                    : 'border-cream-400 text-espresso-300 hover:border-espresso-400'
                }`}
              >
                <Heart size={18} className={isWishlisted ? 'fill-terra-500' : ''} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mt-6 py-5 border-t border-cream-300">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '14-Day Returns' },
                { icon: Shield, label: 'Certified Safe' },
              ].map(b => (
                <div key={b.label} className="flex flex-col items-center gap-1.5 text-center">
                  <b.icon size={16} className="text-grove-400" />
                  <span className="font-body text-[11px] text-espresso-200">{b.label}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            {product.certifications?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {product.certifications.map(c => (
                  <span key={c} className="text-[10px] font-body border border-grove-300 text-grove-500 px-2.5 py-1 tracking-wider">
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 border-t border-cream-300">
          <div className="flex gap-0 border-b border-cream-300">
            {[
              { id: 'details', label: 'Description & Details' },
              { id: 'size-guide', label: 'Size Guide' },
              { id: 'care', label: 'Care Instructions' },
              { id: 'reviews', label: `Reviews (${productReviews.length || product.reviewCount})` },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setOpenTab(tab.id)}
                className={`px-6 py-4 font-body text-xs tracking-wider uppercase transition-colors border-b-2 -mb-px ${
                  openTab === tab.id
                    ? 'border-terra-500 text-terra-500'
                    : 'border-transparent text-espresso-200 hover:text-espresso-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="py-8 max-w-3xl">
            {openTab === 'details' && (
              <div>
                <p className="font-body text-sm text-espresso-400 leading-relaxed mb-6">{product.description}</p>
                <div className="mb-4">
                  <p className="font-body text-xs tracking-widest uppercase text-espresso-300 mb-2">Fabric</p>
                  <p className="font-body text-sm text-espresso-400">{product.fabric}</p>
                </div>
                {product.features?.length > 0 && (
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-espresso-300 mb-2">Key Features</p>
                    <ul className="space-y-1">
                      {product.features.map(f => (
                        <li key={f} className="font-body text-sm text-espresso-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-terra-400 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {openTab === 'size-guide' && (
              <div>
                <p className="font-body text-sm text-espresso-300 mb-6">Measurements are approximate. If between sizes, size up.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-body border-collapse">
                    <thead>
                      <tr className="bg-cream-200">
                        <th className="text-left px-4 py-3 text-xs tracking-wider uppercase text-espresso-300 border border-cream-300">Size</th>
                        <th className="text-left px-4 py-3 text-xs tracking-wider uppercase text-espresso-300 border border-cream-300">Age</th>
                        <th className="text-left px-4 py-3 text-xs tracking-wider uppercase text-espresso-300 border border-cream-300">Chest</th>
                        <th className="text-left px-4 py-3 text-xs tracking-wider uppercase text-espresso-300 border border-cream-300">Length</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeGuide.map((row, i) => (
                        <tr key={row.size} className={i % 2 === 0 ? 'bg-cream-50' : 'bg-cream-100'}>
                          <td className="px-4 py-3 border border-cream-300 font-semibold text-espresso-500">{row.size}</td>
                          <td className="px-4 py-3 border border-cream-300 text-espresso-400">{row.age}</td>
                          <td className="px-4 py-3 border border-cream-300 text-espresso-400">{row.chest}</td>
                          <td className="px-4 py-3 border border-cream-300 text-espresso-400">{row.length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {openTab === 'care' && (
              <div className="space-y-4">
                {[
                  { label: 'Machine Wash', detail: 'Cold wash at 30°C or below. Gentle cycle.' },
                  { label: 'Do Not Tumble Dry', detail: 'Lay flat to dry or hang in shade.' },
                  { label: 'Cool Iron if Needed', detail: 'Iron on low heat. Do not iron prints.' },
                  { label: 'Do Not Bleach', detail: 'Avoid bleach or harsh detergents.' },
                  { label: 'Wash Separately', detail: 'Wash dark colours separately for the first few washes.' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-grove-400 flex-shrink-0 mt-1.5" />
                    <div>
                      <p className="font-body text-sm font-medium text-espresso-500">{item.label}</p>
                      <p className="font-body text-sm text-espresso-300">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {openTab === 'reviews' && (
              <div>
                {productReviews.length === 0 ? (
                  <div>
                    <p className="font-body text-sm text-espresso-300 mb-6">Based on {product.reviewCount} reviews — {product.rating}/5 stars</p>
                    <div className="flex items-center gap-2 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className={i < Math.round(product.rating) ? 'fill-terra-400 text-terra-400' : 'text-cream-400'} />
                      ))}
                      <span className="font-body text-2xl font-light text-espresso-500 ml-2">{product.rating}</span>
                    </div>
                    <p className="font-body text-sm text-espresso-200">Detailed reviews coming soon.</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-3 mb-8 pb-6 border-b border-cream-300">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} className={i < Math.round(product.rating) ? 'fill-terra-400 text-terra-400' : 'text-cream-400'} />
                          ))}
                        </div>
                        <p className="font-body text-sm text-espresso-300">{product.reviewCount} reviews · {product.rating} out of 5</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {productReviews.map(r => (
                        <div key={r.id} className="border-b border-cream-300 pb-6 last:border-0">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-body text-sm font-semibold text-espresso-500">{r.name}</p>
                            <p className="font-body text-xs text-espresso-200">{new Date(r.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                          </div>
                          <div className="flex gap-0.5 mb-3">
                            {[...Array(r.rating)].map((_, i) => (
                              <Star key={i} size={12} className="fill-terra-400 text-terra-400" />
                            ))}
                          </div>
                          <p className="font-body text-sm text-espresso-400 leading-relaxed">{r.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* You May Also Like */}
        {related.length > 0 && (
          <section className="mt-16 border-t border-cream-300 pt-16">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-terra-500 mb-2">Complete the Look</p>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-espresso-500">You May Also Like</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
