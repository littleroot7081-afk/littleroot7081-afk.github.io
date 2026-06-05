import { Truck, RotateCcw, Ban, HelpCircle } from 'lucide-react'

export default function ShippingAndReturns() {
  return (
    <div>
      {/* Header Band */}
      <div className="bg-cream-200 border-b border-cream-300 py-14 text-center">
        <p className="font-body text-xs tracking-widest uppercase text-terra-500 mb-3">Customer Service</p>
        <h1 className="font-heading text-4xl md:text-5xl font-light text-espresso-500">Shipping & Returns</h1>
        <p className="font-body text-sm text-espresso-200 mt-3">Last updated: January 2025</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-cream-200 border border-cream-300 p-6 rounded-lg text-center">
            <Truck className="text-terra-500 mx-auto mb-4" size={28} />
            <h3 className="font-heading text-lg font-medium text-espresso-500 mb-2">Free Delivery</h3>
            <p className="font-body text-sm text-espresso-300">Free shipping across India on all orders, with zero minimums.</p>
          </div>
          <div className="bg-cream-200 border border-cream-300 p-6 rounded-lg text-center">
            <RotateCcw className="text-terra-500 mx-auto mb-4" size={28} />
            <h3 className="font-heading text-lg font-medium text-espresso-500 mb-2">14-Day Returns</h3>
            <p className="font-body text-sm text-espresso-300">Hassle-free return request option within 14 days of delivery.</p>
          </div>
          <div className="bg-cream-200 border border-cream-300 p-6 rounded-lg text-center">
            <Ban className="text-terra-500 mx-auto mb-4" size={28} />
            <h3 className="font-heading text-lg font-medium text-espresso-500 mb-2">Easy Cancellations</h3>
            <p className="font-body text-sm text-espresso-300">Cancel orders within 2 hours of placement before dispatch.</p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12">
          <Section title="1. Shipping & Delivery Policy" icon={Truck}>
            <p>We want to ensure your package arrives safely and promptly. Here is how we handle shipping:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Shipping Charges:</strong> Free shipping is available for all orders within India. No hidden fees or surprise costs.</li>
              <li><strong>Dispatch Timeline:</strong> Most orders are processed and handed over to our shipping partners within 1–2 business days. We do not dispatch orders on Sundays or National Holidays.</li>
              <li><strong>Delivery Timeline:</strong> Once dispatched, shipments generally take <strong>5–7 business days</strong> to reach most addresses in India. Remote locations may require additional time.</li>
              <li><strong>Courier Partners:</strong> We partner with trusted premium logistics providers including Delhivery, Blue Dart, and Shiprocket to deliver your packages securely.</li>
              <li><strong>Tracking:</strong> A tracking link will be sent to you via email and SMS as soon as your order has been dispatched. You can track your shipment live.</li>
            </ul>
          </Section>

          <Section title="2. Order Cancellations" icon={Ban}>
            <p>We understand that minds can change. Here is how we handle cancellation requests:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Orders can be cancelled within <strong>2 hours</strong> of placement.</li>
              <li>To request a cancellation, please email us immediately at <a href="mailto:support@littleroot.online" className="text-terra-500 hover:underline"><strong>support@littleroot.online</strong></a> with your order number.</li>
              <li>If the order has already been processed and handed over to the courier partner, we will not be able to cancel it. In such cases, the return process must be followed after delivery.</li>
              <li>Upon successful cancellation, the entire transaction amount will be refunded back to your original payment mode within 5–7 business days.</li>
            </ul>
          </Section>

          <Section title="3. Returns & Replacements" icon={RotateCcw}>
            <p>Our goal is to ensure you and your little one are completely satisfied with your purchase:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>We accept return and replacement requests within <strong>14 days</strong> from the date of delivery.</li>
              <li><strong>Eligible Items:</strong> Items must be completely unworn, unwashed, and undamaged, with all original tags, labels, and packaging intact.</li>
              <li><strong>Non-Returnable Items:</strong> Custom-made outfits, items on final clearance sale, and opened baby care items are not eligible for return unless received damaged or defective.</li>
              <li><strong>How to Initiate:</strong> Email us at <a href="mailto:support@littleroot.online" className="text-terra-500 hover:underline"><strong>support@littleroot.online</strong></a> with your Order ID and photos of the product.</li>
              <li><strong>Reverse Pickup:</strong> We will arrange a reverse pickup from your delivery address free of charge. If reverse pickup is unavailable for your pincode, we will ask you to self-ship it, and we will reimburse the shipping cost.</li>
            </ul>
          </Section>

          <Section title="4. Refund Processing" icon={HelpCircle}>
            <p>Once we receive and inspect your returned items, we process your refunds as follows:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Inspection Window:</strong> Returns are inspected within 2 business days of arriving at our warehouse.</li>
              <li><strong>Prepaid Orders:</strong> For credit/debit card, UPI, or net banking payments, the refund is credited directly to the original payment source.</li>
              <li><strong>Cash on Delivery (COD) Orders:</strong> For COD payments, you will need to provide your bank account details (Account Holder Name, Account Number, and IFSC Code) via email. We will process a direct bank transfer (NEFT) to that account.</li>
              <li><strong>Refund Timeline:</strong> Once approved, the refund will reflect in your account within <strong>7–10 business days</strong>, depending on your bank's processing cycle.</li>
            </ul>
          </Section>
        </div>

        {/* Contact Info Footer */}
        <div className="bg-cream-200 border border-cream-300 p-8 rounded-lg mt-16 text-center">
          <h3 className="font-heading text-xl font-medium text-espresso-500 mb-2">Have Questions About Your Shipment?</h3>
          <p className="font-body text-sm text-espresso-300 mb-6">
            We are always here to help. Reach out to our customer support team for quick assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm font-body">
            <div>
              <span className="text-espresso-200 uppercase tracking-wider text-xs block mb-1">Email Support</span>
              <a href="mailto:support@littleroot.online" className="text-terra-500 font-semibold hover:underline">support@littleroot.online</a>
            </div>
            <div className="hidden sm:block border-r border-cream-400"></div>
            <div>
              <span className="text-espresso-200 uppercase tracking-wider text-xs block mb-1">Support Hours</span>
              <span className="text-espresso-500 font-semibold">Mon – Sat, 10am – 6pm IST</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Section({ title, icon: Icon, children }) {
  return (
    <section className="bg-cream-50 border border-cream-300 p-8 rounded-lg">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-cream-300">
        <Icon className="text-terra-500" size={22} />
        <h2 className="font-heading text-2xl font-medium text-espresso-500">{title}</h2>
      </div>
      <div className="font-body text-sm text-espresso-400 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  )
}
