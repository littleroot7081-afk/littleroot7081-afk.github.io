import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Lock, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'

const steps = ['Contact', 'Shipping', 'Payment']

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [summaryOpen, setSummaryOpen] = useState(false)

  const [form, setForm] = useState({
    email: '', phone: '',
    firstName: '', lastName: '', address: '', apartment: '',
    city: '', state: '', pincode: '',
    cardName: '', cardNumber: '', expiry: '', cvv: '',
  })
  const [errors, setErrors] = useState({})

  const update = (field, value) => {
    setForm(f => ({ ...f, [field]: value }))
    setErrors(e => ({ ...e, [field]: '' }))
  }

  const validateStep = () => {
    const errs = {}
    if (step === 0) {
      if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Enter a valid email'
      if (!form.phone.match(/^\d{10}$/)) errs.phone = 'Enter a valid 10-digit mobile number'
    }
    if (step === 1) {
      if (!form.firstName.trim()) errs.firstName = 'Required'
      if (!form.lastName.trim()) errs.lastName = 'Required'
      if (!form.address.trim()) errs.address = 'Required'
      if (!form.city.trim()) errs.city = 'Required'
      if (!form.state.trim()) errs.state = 'Required'
      if (!form.pincode.match(/^\d{6}$/)) errs.pincode = 'Enter a valid 6-digit PIN'
    }
    if (step === 2) {
      if (!form.cardName.trim()) errs.cardName = 'Required'
      if (!form.cardNumber.match(/^\d{16}$/)) errs.cardNumber = 'Enter a valid 16-digit card number'
      if (!form.expiry.match(/^\d{2}\/\d{2}$/)) errs.expiry = 'Format: MM/YY'
      if (!form.cvv.match(/^\d{3,4}$/)) errs.cvv = 'Invalid CVV'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleNext = () => {
    if (validateStep()) setStep(s => s + 1)
  }

  const handlePlaceOrder = () => {
    if (validateStep()) {
      clearCart()
      setOrderPlaced(true)
    }
  }

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="font-heading text-3xl font-light text-espresso-300 mb-4">Nothing to checkout</p>
        <Link to="/shop" className="btn-primary mt-4">Start Shopping</Link>
      </div>
    )
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="max-w-md mx-auto">
          <CheckCircle size={56} className="text-grove-500 mx-auto mb-6" />
          <h1 className="font-heading text-4xl font-light text-espresso-500 mb-4">Order Confirmed!</h1>
          <p className="font-body text-base text-espresso-300 mb-2">
            Thank you, <strong>{form.firstName}</strong>! Your order is on its way.
          </p>
          <p className="font-body text-sm text-espresso-200 mb-2">
            A confirmation will be sent to <strong>{form.email}</strong>.
          </p>
          <p className="font-body text-sm text-espresso-200 mb-8">
            Estimated delivery: 5–7 business days.
          </p>
          <Link to="/shop" className="btn-primary inline-block">Continue Shopping</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Header */}
      <div className="border-b border-cream-300 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <Link to="/" className="font-heading text-2xl font-light tracking-widest text-espresso-500">Littleroot</Link>
          <div className="flex items-center gap-2 text-xs font-body text-espresso-200">
            <Lock size={12} />
            Secure Checkout
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="border-b border-cream-300 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-0">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center">
                <div className={`flex items-center gap-2 text-xs font-body font-medium ${i <= step ? 'text-terra-500' : 'text-espresso-200'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    i < step ? 'bg-grove-500 text-cream-50' : i === step ? 'bg-terra-500 text-cream-50' : 'bg-cream-300 text-espresso-200'
                  }`}>
                    {i < step ? '✓' : i + 1}
                  </span>
                  {s}
                </div>
                {i < steps.length - 1 && <div className={`mx-3 h-px w-8 md:w-16 ${i < step ? 'bg-grove-400' : 'bg-cream-300'}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            {/* Mobile Summary Toggle */}
            <button
              className="lg:hidden w-full flex items-center justify-between bg-cream-200 border border-cream-300 px-5 py-4 mb-6"
              onClick={() => setSummaryOpen(v => !v)}
            >
              <span className="font-body text-sm text-espresso-400">Order Summary ({items.length} items)</span>
              <span className="flex items-center gap-2 font-body font-semibold text-espresso-500">
                {formatPrice(subtotal)}
                {summaryOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </button>

            {/* Mobile Summary */}
            {summaryOpen && (
              <div className="lg:hidden bg-cream-200 border border-cream-300 p-5 mb-6 space-y-3">
                {items.map(item => (
                  <div key={item.key} className="flex items-center gap-3">
                    <div className="w-12 h-14 bg-cream-300 overflow-hidden flex-shrink-0 relative">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                      <span className="absolute -top-1 -right-1 bg-espresso-400 text-cream-50 text-[9px] w-4 h-4 rounded-full flex items-center justify-center">{item.qty}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-xs text-espresso-500 truncate">{item.name} — {item.subtitle}</p>
                      {item.size && <p className="font-body text-[11px] text-espresso-200">{item.size}</p>}
                    </div>
                    <p className="font-body text-xs font-semibold text-espresso-500 flex-shrink-0">{formatPrice(item.price * item.qty)}</p>
                  </div>
                ))}
                <div className="border-t border-cream-300 pt-3 flex justify-between font-body text-sm font-semibold text-espresso-500">
                  <span>Total</span><span>{formatPrice(subtotal)}</span>
                </div>
              </div>
            )}

            {/* Step 0: Contact */}
            {step === 0 && (
              <div>
                <h2 className="font-heading text-2xl font-light text-espresso-500 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <Field label="Email Address" field="email" type="email" placeholder="your@email.com" form={form} update={update} errors={errors} />
                  <Field label="Mobile Number" field="phone" type="tel" placeholder="10-digit number" form={form} update={update} errors={errors} />
                </div>
                <p className="font-body text-xs text-espresso-200 mt-3">We'll use this to send your order confirmation and shipping updates.</p>
              </div>
            )}

            {/* Step 1: Shipping */}
            {step === 1 && (
              <div>
                <h2 className="font-heading text-2xl font-light text-espresso-500 mb-6">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Field label="First Name" field="firstName" half form={form} update={update} errors={errors} />
                    <Field label="Last Name" field="lastName" half form={form} update={update} errors={errors} />
                  </div>
                  <Field label="Address" field="address" placeholder="Street address, flat number" form={form} update={update} errors={errors} />
                  <Field label="Apartment / Floor (Optional)" field="apartment" placeholder="Apt, suite, unit, etc." form={form} update={update} errors={errors} />
                  <div className="flex gap-4">
                    <Field label="City" field="city" half form={form} update={update} errors={errors} />
                    <Field label="State" field="state" half form={form} update={update} errors={errors} />
                  </div>
                  <Field label="PIN Code" field="pincode" placeholder="6-digit PIN" form={form} update={update} errors={errors} />
                  <div className="bg-grove-50 border border-grove-200 px-4 py-3">
                    <p className="font-body text-xs text-grove-600">🚚 Free shipping across India. Expected delivery in 5–7 business days.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div>
                <h2 className="font-heading text-2xl font-light text-espresso-500 mb-6">Payment Details</h2>
                <div className="bg-cream-200 border border-cream-300 px-4 py-3 mb-5 flex items-center gap-2">
                  <Lock size={12} className="text-grove-500" />
                  <p className="font-body text-xs text-espresso-300">Your payment info is encrypted and secure.</p>
                </div>
                <div className="space-y-4">
                  <Field label="Name on Card" field="cardName" placeholder="As it appears on the card" form={form} update={update} errors={errors} />
                  <Field label="Card Number" field="cardNumber" placeholder="1234 5678 9012 3456" form={form} update={update} errors={errors} />
                  <div className="flex gap-4">
                    <Field label="Expiry Date" field="expiry" placeholder="MM/YY" half form={form} update={update} errors={errors} />
                    <Field label="CVV" field="cvv" placeholder="3–4 digits" half form={form} update={update} errors={errors} />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  {['VISA', 'Mastercard', 'Rupay', 'UPI', 'Net Banking'].map(m => (
                    <span key={m} className="border border-cream-400 px-3 py-1 text-[11px] font-body text-espresso-300">{m}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-cream-300">
              {step > 0 && (
                <button onClick={() => setStep(s => s - 1)} className="btn-secondary">
                  ← Back
                </button>
              )}
              {step < steps.length - 1 ? (
                <button onClick={handleNext} className="btn-primary flex-1">
                  Continue to {steps[step + 1]} →
                </button>
              ) : (
                <button onClick={handlePlaceOrder} className="btn-primary flex-1 flex items-center justify-center gap-2">
                  <Lock size={14} /> Place Order — {formatPrice(subtotal)}
                </button>
              )}
            </div>
          </div>

          {/* Desktop Order Summary */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="bg-cream-200 border border-cream-300 p-6 sticky top-24">
              <h3 className="font-heading text-xl font-light text-espresso-500 mb-5">Order Summary</h3>
              <div className="space-y-4 max-h-64 overflow-y-auto pr-1">
                {items.map(item => (
                  <div key={item.key} className="flex items-center gap-3">
                    <div className="w-14 h-18 bg-cream-300 overflow-hidden flex-shrink-0 relative">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                      <span className="absolute -top-1 -right-1 bg-espresso-400 text-cream-50 text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{item.qty}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-xs font-medium text-espresso-500 truncate">{item.name}</p>
                      <p className="font-body text-[11px] text-espresso-200">{item.subtitle}</p>
                      {item.size && <p className="font-body text-[11px] text-espresso-200 border border-cream-400 inline-block px-1.5 mt-0.5">{item.size}</p>}
                    </div>
                    <p className="font-body text-xs font-semibold text-espresso-500 flex-shrink-0">{formatPrice(item.price * item.qty)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-cream-300 mt-5 pt-5 space-y-2.5">
                <div className="flex justify-between font-body text-sm text-espresso-400">
                  <span>Subtotal</span><span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between font-body text-sm text-espresso-400">
                  <span>Shipping</span><span className="text-grove-500">Free</span>
                </div>
                <div className="flex justify-between font-body text-sm text-espresso-300 text-xs">
                  <span>Taxes</span><span>Included</span>
                </div>
                <div className="flex justify-between font-body text-xs text-espresso-200">
                  <span>GSTIN</span><span>06FEKPA5878H1Z6</span>
                </div>
              </div>
              <div className="border-t border-cream-300 mt-4 pt-4 flex justify-between font-body font-bold text-espresso-500">
                <span>Total</span><span>{formatPrice(subtotal)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, field, type = 'text', placeholder, half = false, form, update, errors }) {
  return (
    <div className={half ? 'flex-1' : 'w-full'}>
      <label className="block font-body text-xs tracking-wider uppercase text-espresso-300 mb-1.5">{label}</label>
      <input
        type={type}
        value={form[field]}
        onChange={e => update(field, e.target.value)}
        placeholder={placeholder}
        className={`w-full border bg-cream-50 px-4 py-3 font-body text-sm text-espresso-500 placeholder-espresso-100 focus:outline-none transition-colors ${errors[field] ? 'border-terra-400' : 'border-cream-400 focus:border-terra-400'}`}
      />
      {errors[field] && <p className="text-xs text-terra-500 font-body mt-1">{errors[field]}</p>}
    </div>
  )
}
