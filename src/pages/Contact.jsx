import { useState } from 'react'
import { Mail, Clock, Instagram, MessageCircle, CheckCircle, MapPin } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field, value) => {
    setForm(f => ({ ...f, [field]: value }))
    setErrors(e => ({ ...e, [field]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Enter a valid email'
    if (!form.subject.trim()) errs.subject = 'Required'
    if (!form.message.trim() || form.message.trim().length < 10) errs.message = 'Please write at least 10 characters'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) setSent(true)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email Us', value: 'hi@littleroot.in', detail: 'We respond within 24 hours' },
    { icon: Clock, label: 'Support Hours', value: 'Mon – Sat', detail: '10:00 AM – 6:00 PM IST' },
    { icon: MapPin, label: 'Our Address', value: '238, Hodal Punhana Road', detail: 'Punahana, Nuh, Haryana – 122508' },
    { icon: CheckCircle, label: 'GSTIN', value: '06FEKPA5878H1Z6', detail: 'GST Registered Business' },
    { icon: Instagram, label: 'Instagram', value: '@littleroot.in', detail: 'DMs welcome' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+91 98765 43210', detail: 'Quick queries welcome' },
  ]

  const faqs = [
    { q: 'How long does delivery take?', a: 'All orders are shipped within 2 business days. Delivery takes 5–7 business days across India.' },
    { q: 'What is your return policy?', a: 'We offer a 14-day return window from the date of delivery. Items must be unworn, unwashed, and in original packaging.' },
    { q: 'Do you offer gift wrapping?', a: 'Yes! Select the gift wrap option at checkout. Our signature Littleroot gift wrap is available for Rs. 150.' },
    { q: 'How do I know which size to order?', a: 'Refer to the size guide on each product page. If you\'re between sizes, we recommend sizing up for a more relaxed fit.' },
    { q: 'Are the fabrics safe for sensitive skin?', a: 'Absolutely. All fabrics are certified under GOTS, OEKO-TEX, or AZO Dye Free standards — independently tested and verified safe for baby skin.' },
    { q: 'Can I track my order?', a: 'Yes. Once your order ships, you\'ll receive a tracking link via email and SMS.' },
  ]

  return (
    <div>
      {/* Header */}
      <div className="bg-cream-200 border-b border-cream-300 py-14 text-center">
        <p className="section-subtitle mb-3">We'd Love to Hear From You</p>
        <h1 className="section-title">Get in Touch</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Contact Form */}
          <div>
            <h2 className="font-heading text-2xl font-light text-espresso-500 mb-6">Send Us a Message</h2>
            {sent ? (
              <div className="text-center py-12 bg-cream-200 border border-cream-300 px-8">
                <CheckCircle size={40} className="text-grove-500 mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-light text-espresso-500 mb-2">Message Sent!</h3>
                <p className="font-body text-sm text-espresso-300">Thank you, {form.name}. We'll be in touch within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }} className="mt-6 btn-outline-terra text-sm">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block font-body text-xs tracking-wider uppercase text-espresso-300 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => update('name', e.target.value)}
                      placeholder="Full name"
                      className={`w-full border bg-cream-50 px-4 py-3 font-body text-sm text-espresso-500 placeholder-espresso-100 focus:outline-none transition-colors ${errors.name ? 'border-terra-400' : 'border-cream-400 focus:border-terra-400'}`}
                    />
                    {errors.name && <p className="text-xs text-terra-500 font-body mt-1">{errors.name}</p>}
                  </div>
                  <div className="flex-1">
                    <label className="block font-body text-xs tracking-wider uppercase text-espresso-300 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => update('email', e.target.value)}
                      placeholder="your@email.com"
                      className={`w-full border bg-cream-50 px-4 py-3 font-body text-sm text-espresso-500 placeholder-espresso-100 focus:outline-none transition-colors ${errors.email ? 'border-terra-400' : 'border-cream-400 focus:border-terra-400'}`}
                    />
                    {errors.email && <p className="text-xs text-terra-500 font-body mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs tracking-wider uppercase text-espresso-300 mb-1.5">Subject</label>
                  <select
                    value={form.subject}
                    onChange={e => update('subject', e.target.value)}
                    className={`w-full border bg-cream-50 px-4 py-3 font-body text-sm text-espresso-500 focus:outline-none transition-colors appearance-none ${errors.subject ? 'border-terra-400' : 'border-cream-400 focus:border-terra-400'}`}
                  >
                    <option value="">Select a subject</option>
                    <option>Order Enquiry</option>
                    <option>Shipping & Returns</option>
                    <option>Product Information</option>
                    <option>Collaboration / Press</option>
                    <option>Wholesale / B2B</option>
                    <option>Other</option>
                  </select>
                  {errors.subject && <p className="text-xs text-terra-500 font-body mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block font-body text-xs tracking-wider uppercase text-espresso-300 mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={e => update('message', e.target.value)}
                    placeholder="Tell us what's on your mind..."
                    className={`w-full border bg-cream-50 px-4 py-3 font-body text-sm text-espresso-500 placeholder-espresso-100 focus:outline-none transition-colors resize-none ${errors.message ? 'border-terra-400' : 'border-cream-400 focus:border-terra-400'}`}
                  />
                  {errors.message && <p className="text-xs text-terra-500 font-body mt-1">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-2xl font-light text-espresso-500 mb-6">Other Ways to Reach Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {contactInfo.map(item => (
                <div key={item.label} className="bg-cream-200 border border-cream-300 p-5">
                  <item.icon size={18} className="text-terra-500 mb-3" />
                  <p className="font-body text-xs tracking-wider uppercase text-espresso-200 mb-1">{item.label}</p>
                  <p className="font-body text-sm font-semibold text-espresso-500">{item.value}</p>
                  <p className="font-body text-xs text-espresso-200 mt-0.5">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div>
              <h3 className="font-heading text-xl font-light text-espresso-500 mb-5">Frequently Asked Questions</h3>
              <div className="space-y-0 divide-y divide-cream-300 border-t border-cream-300">
                {faqs.map(faq => (
                  <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-cream-300">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className="font-body text-sm font-medium text-espresso-500">{question}</span>
        <span className={`text-espresso-300 flex-shrink-0 transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <div className="pb-4">
          <p className="font-body text-sm text-espresso-300 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}
