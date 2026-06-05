import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'

export default function CartDrawer() {
  const { items, drawerOpen, setDrawerOpen, removeItem, updateQty, subtotal, itemCount } = useCart()

  if (!drawerOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-espresso-500/40 backdrop-blur-sm"
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream-100 flex flex-col shadow-2xl slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-300">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} className="text-terra-500" />
            <span className="font-heading text-xl font-light text-espresso-500 tracking-wide">
              Your Bag {itemCount > 0 && <span className="font-body text-sm text-espresso-200">({itemCount})</span>}
            </span>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 text-espresso-300 hover:text-terra-500 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-5 px-8 text-center">
              <ShoppingBag size={40} className="text-cream-400" />
              <div>
                <p className="font-heading text-xl font-light text-espresso-400 mb-1">Your bag is empty</p>
                <p className="text-sm text-espresso-200 font-body">Add something beautiful for your little one.</p>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="btn-primary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="divide-y divide-cream-300">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 px-6 py-5">
                  <Link
                    to={`/products/${item.slug}`}
                    onClick={() => setDrawerOpen(false)}
                    className="flex-shrink-0 w-20 h-24 bg-cream-300 overflow-hidden"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/products/${item.slug}`}
                      onClick={() => setDrawerOpen(false)}
                      className="font-body text-sm font-medium text-espresso-500 hover:text-terra-500 transition-colors line-clamp-1"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-espresso-200 font-body mt-0.5">{item.subtitle}</p>
                    <div className="flex items-center gap-3 mt-1">
                      {item.size && (
                        <span className="text-xs text-espresso-200 font-body border border-cream-400 px-1.5 py-0.5">{item.size}</span>
                      )}
                      {item.color && (
                        <span className="text-xs text-espresso-200 font-body">{item.color}</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      {/* Qty Control */}
                      <div className="flex items-center border border-cream-400">
                        <button
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          className="px-2.5 py-1.5 text-espresso-400 hover:text-terra-500 hover:bg-cream-200 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-sm font-body text-espresso-500 min-w-[2rem] text-center">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          className="px-2.5 py-1.5 text-espresso-400 hover:text-terra-500 hover:bg-cream-200 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="font-body text-sm font-semibold text-espresso-500">{formatPrice(item.price * item.qty)}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.key)}
                      className="text-xs text-espresso-200 hover:text-terra-500 transition-colors mt-2 font-body underline underline-offset-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-cream-300 px-6 py-5 space-y-4">
            {/* Free shipping note */}
            <div className="bg-grove-50 border border-grove-100 rounded px-4 py-3">
              <p className="text-xs text-grove-500 font-body text-center">
                ✓ Free shipping on all orders across India
              </p>
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="font-body text-sm text-espresso-300">Subtotal</span>
              <span className="font-body font-semibold text-espresso-500">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-espresso-200 font-body -mt-2">Shipping & taxes calculated at checkout</p>

            {/* Checkout button */}
            <Link
              to="/checkout"
              onClick={() => setDrawerOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-terra-500 hover:bg-terra-600 text-cream-50 py-4 font-body font-medium tracking-wider text-sm uppercase transition-colors"
            >
              Checkout <ArrowRight size={16} />
            </Link>

            {/* View full cart */}
            <Link
              to="/cart"
              onClick={() => setDrawerOpen(false)}
              className="block text-center text-sm text-espresso-300 hover:text-terra-500 transition-colors font-body underline underline-offset-2"
            >
              View full cart
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
