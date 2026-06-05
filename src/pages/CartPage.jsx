import { Link } from 'react-router-dom'
import { Minus, Plus, X, ArrowRight, ShoppingBag, Tag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'
import { useState } from 'react'

export default function CartPage() {
  const { items, removeItem, updateQty, subtotal, itemCount } = useCart()
  const [coupon, setCoupon] = useState('')
  const [discount, setDiscount] = useState(0)
  const [couponMsg, setCouponMsg] = useState('')

  const applyCoupon = (e) => {
    e.preventDefault()
    if (coupon.trim().toUpperCase() === 'WELCOME10') {
      setDiscount(Math.round(subtotal * 0.1))
      setCouponMsg('✓ WELCOME10 applied — 10% off!')
    } else {
      setDiscount(0)
      setCouponMsg('Invalid coupon code.')
    }
  }

  const total = subtotal - discount

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-cream-200 border-b border-cream-300 py-12 text-center">
        <p className="font-body text-xs tracking-widest uppercase text-terra-500 mb-2">Review Your Order</p>
        <h1 className="font-heading text-4xl md:text-5xl font-light text-espresso-500">Your Bag</h1>
        {itemCount > 0 && (
          <p className="font-body text-sm text-espresso-200 mt-2">{itemCount} item{itemCount !== 1 ? 's' : ''}</p>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {items.length === 0 ? (
          <div className="text-center py-24">
            <ShoppingBag size={48} className="text-cream-400 mx-auto mb-6" />
            <p className="font-heading text-3xl font-light text-espresso-300 mb-3">Your bag is empty</p>
            <p className="font-body text-sm text-espresso-200 mb-8">Looks like you haven't added anything yet.</p>
            <Link to="/shop" className="btn-primary">Continue Shopping</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="divide-y divide-cream-300">
                {items.map(item => (
                  <div key={item.key} className="py-6 flex gap-5">
                    <Link to={`/products/${item.slug}`} className="flex-shrink-0 w-24 h-32 bg-cream-300 overflow-hidden">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link to={`/products/${item.slug}`} className="font-body font-medium text-espresso-500 hover:text-terra-500 transition-colors">
                            {item.name}
                          </Link>
                          <p className="font-body text-sm text-espresso-200 mt-0.5">{item.subtitle}</p>
                          <div className="flex items-center gap-3 mt-1.5">
                            {item.size && (
                              <span className="text-xs font-body text-espresso-300 border border-cream-400 px-2 py-0.5">{item.size}</span>
                            )}
                            {item.color && (
                              <span className="text-xs font-body text-espresso-300">{item.color}</span>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-espresso-200 hover:text-terra-500 transition-colors flex-shrink-0 p-1"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-cream-400">
                          <button onClick={() => updateQty(item.key, item.qty - 1)} className="px-3 py-2 text-espresso-400 hover:bg-cream-200 transition-colors">
                            <Minus size={12} />
                          </button>
                          <span className="px-4 text-sm font-body text-espresso-500 min-w-[2.5rem] text-center">{item.qty}</span>
                          <button onClick={() => updateQty(item.key, item.qty + 1)} className="px-3 py-2 text-espresso-400 hover:bg-cream-200 transition-colors">
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="font-body font-semibold text-espresso-500">{formatPrice(item.price * item.qty)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-cream-200 p-6 sticky top-24">
                <h2 className="font-heading text-2xl font-light text-espresso-500 mb-6">Order Summary</h2>

                {/* Coupon */}
                <form onSubmit={applyCoupon} className="mb-6">
                  <p className="font-body text-xs tracking-wider uppercase text-espresso-300 mb-2">Discount Code</p>
                  <div className="flex">
                    <input
                      type="text"
                      value={coupon}
                      onChange={e => setCoupon(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 border border-cream-400 bg-cream-50 px-4 py-2.5 text-sm font-body text-espresso-500 placeholder-espresso-100 focus:outline-none focus:border-terra-400 transition-colors"
                    />
                    <button type="submit" className="bg-espresso-500 hover:bg-espresso-400 text-cream-100 px-4 py-2.5 text-sm font-body transition-colors flex-shrink-0">
                      Apply
                    </button>
                  </div>
                  {couponMsg && (
                    <p className={`text-xs font-body mt-2 ${couponMsg.startsWith('✓') ? 'text-grove-500' : 'text-terra-500'}`}>
                      {couponMsg}
                    </p>
                  )}
                </form>

                <div className="space-y-3 py-4 border-t border-cream-300">
                  <div className="flex justify-between font-body text-sm text-espresso-400">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between font-body text-sm text-grove-500">
                      <span className="flex items-center gap-1"><Tag size={12} /> Discount (WELCOME10)</span>
                      <span>− {formatPrice(discount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-body text-sm text-espresso-400">
                    <span>Shipping</span>
                    <span className="text-grove-500">Free</span>
                  </div>
                  <div className="flex justify-between font-body text-sm text-espresso-300 text-xs pt-1">
                    <span>Taxes</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="flex justify-between font-body font-semibold text-espresso-500 py-4 border-t border-cream-300 text-base">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>

                <Link
                  to="/checkout"
                  className="flex items-center justify-center gap-2 w-full bg-terra-500 hover:bg-terra-600 text-cream-50 py-4 font-body font-medium tracking-wider text-sm uppercase transition-colors mt-4"
                >
                  Proceed to Checkout <ArrowRight size={16} />
                </Link>

                <div className="mt-4 text-center">
                  <Link to="/shop" className="font-body text-xs text-espresso-200 hover:text-terra-500 transition-colors underline underline-offset-2">
                    ← Continue Shopping
                  </Link>
                </div>

                <div className="mt-6 pt-4 border-t border-cream-300">
                  <p className="font-body text-xs text-espresso-200 text-center">
                    🔒 Secure checkout · Free shipping across India
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
