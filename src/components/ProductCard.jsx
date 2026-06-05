import { Link } from 'react-router-dom'
import { Heart, ShoppingBag, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'

export default function ProductCard({ product, className = '' }) {
  const { wishlist, toggleWishlist, addItem } = useCart()
  const isWishlisted = wishlist.includes(product.id)

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const size = product.sizes?.[0] || null
    const color = product.colors?.[0]?.name || null
    addItem(product, size, color)
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleWishlist(product.id)
  }

  return (
    <Link
      to={`/products/${product.slug}`}
      className={`group block bg-cream-50 ${className}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-300">
        <img
          src={product.images[0]}
          alt={`${product.name} ${product.subtitle}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Second image on hover */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} ${product.subtitle} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            loading="lazy"
          />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.bestseller && (
            <span className="bg-terra-500 text-cream-50 text-[10px] font-body font-semibold tracking-widest uppercase px-2.5 py-1">
              Bestseller
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 p-2 bg-cream-50/90 hover:bg-cream-50 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Add to wishlist"
        >
          <Heart
            size={14}
            className={isWishlisted ? 'fill-terra-500 text-terra-500' : 'text-espresso-400'}
          />
        </button>

        {/* Quick Add */}
        {(product.sizes?.length > 0 || product.colors?.length === 0) && (
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleQuickAdd}
              className="w-full bg-espresso-500 hover:bg-grove-500 text-cream-50 py-3 text-xs font-body font-medium tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag size={13} />
              Quick Add
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="pt-3 pb-1 px-1">
        {/* Color dots */}
        {product.colors?.length > 0 && (
          <div className="flex gap-1.5 mb-2">
            {product.colors.slice(0, 4).map(color => (
              <span
                key={color.slug}
                className="w-3.5 h-3.5 rounded-full border border-cream-400 flex-shrink-0"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-[10px] text-espresso-200 font-body self-center">+{product.colors.length - 4}</span>
            )}
          </div>
        )}

        <h3 className="font-body text-sm font-medium text-espresso-500 leading-snug">
          {product.name}
        </h3>
        <p className="font-body text-xs text-espresso-200 mt-0.5">{product.subtitle}</p>

        <div className="flex items-center justify-between mt-2">
          <p className="font-body text-sm font-semibold text-espresso-400">{formatPrice(product.price)}</p>
          {product.reviewCount > 0 && (
            <div className="flex items-center gap-1">
              <Star size={10} className="fill-terra-400 text-terra-400" />
              <span className="text-[10px] text-espresso-200 font-body">{product.rating} ({product.reviewCount})</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
