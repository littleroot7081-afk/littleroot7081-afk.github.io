export default function TermsOfService() {
  return (
    <div>
      <div className="bg-cream-200 border-b border-cream-300 py-14 text-center">
        <p className="font-body text-xs tracking-widest uppercase text-terra-500 mb-3">Legal</p>
        <h1 className="font-heading text-4xl md:text-5xl font-light text-espresso-500">Terms of Service</h1>
        <p className="font-body text-sm text-espresso-200 mt-3">Last updated: January 2025</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10">

          <section>
            <p className="font-body text-sm text-espresso-400 leading-relaxed">
              Welcome to Littleroot. By accessing or using our website (littleroot.in) or placing an order, you agree to be bound by these Terms of Service. Please read them carefully. If you do not agree, please do not use our website.
            </p>
          </section>

          <TosSection title="1. General">
            <p>These Terms of Service govern your use of the Littleroot website and the purchase of products listed thereon. We reserve the right to update these Terms at any time by posting revised terms on this page. Continued use of the website constitutes acceptance of revised terms.</p>
            <p>Littleroot is a sole proprietorship firm registered in India under GSTIN 06FEKPA5878H1Z6.</p>
          </TosSection>

          <TosSection title="2. Eligibility">
            <p>By using our website, you represent that you are at least 18 years of age and have the legal capacity to enter into a binding contract. If you are purchasing on behalf of a minor (for example, buying children's products), you confirm that you are a parent or legal guardian.</p>
          </TosSection>

          <TosSection title="3. Products">
            <p>We make every effort to display product colours, fabrics, and details as accurately as possible. However, actual colours may vary slightly depending on your device's display settings.</p>
            <p>We reserve the right to discontinue any product, modify descriptions, and change pricing at any time without prior notice.</p>
            <p>All products are subject to availability. If a product is out of stock after your order is placed, we will notify you and provide a full refund.</p>
          </TosSection>

          <TosSection title="4. Pricing & Payment">
            <p>All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise.</p>
            <p>We accept major debit and credit cards, UPI, net banking, and other payment methods as listed at checkout. Payment is processed securely through our third-party payment gateway.</p>
            <p>We reserve the right to cancel any order placed at an incorrectly listed price and will issue a full refund in such cases.</p>
          </TosSection>

          <TosSection title="5. Orders & Confirmation">
            <p>Placing an order constitutes an offer to purchase. An order is confirmed only when you receive an order confirmation email from us. We reserve the right to refuse or cancel any order at our discretion.</p>
            <p>Please review your order carefully before placing it. We are unable to modify orders once they are confirmed and dispatched.</p>
          </TosSection>

          <TosSection title="6. Shipping">
            <ul>
              <li>We offer free shipping on all orders across India.</li>
              <li>Orders are dispatched within 2 business days of confirmation.</li>
              <li>Estimated delivery time is 5–7 business days, depending on location.</li>
              <li>A tracking number will be provided once your order is shipped.</li>
              <li>We are not responsible for delays caused by courier partners or circumstances beyond our control (natural disasters, strikes, etc.).</li>
            </ul>
          </TosSection>

          <TosSection title="7. Returns & Refunds">
            <ul>
              <li>We accept returns within <strong>14 days</strong> of delivery.</li>
              <li>Items must be unworn, unwashed, and in original packaging with all tags intact.</li>
              <li>To initiate a return, email us at <strong>support@littleroot.online</strong> with your order number.</li>
              <li>Refunds are processed within 7–10 business days after we receive and inspect the returned item.</li>
              <li>Sale items and gift boxes are non-returnable unless defective.</li>
              <li>If you receive a defective or incorrect item, please contact us within 48 hours of delivery with a photo. We will arrange a replacement or full refund at no additional cost.</li>
            </ul>
          </TosSection>

          <TosSection title="8. Discount Codes & Promotions">
            <p>Discount codes are valid for one use per customer unless otherwise stated. Codes cannot be combined with other offers. We reserve the right to withdraw or modify promotions at any time.</p>
          </TosSection>

          <TosSection title="9. Intellectual Property">
            <p>All content on this website — including images, text, product descriptions, logos, and design — is the property of Littleroot or its licensors and is protected by copyright and intellectual property laws.</p>
            <p>You may not reproduce, copy, distribute, or use any content from this site for commercial purposes without our written consent.</p>
          </TosSection>

          <TosSection title="10. User Conduct">
            <p>You agree not to:</p>
            <ul>
              <li>Use the site for any unlawful or fraudulent purpose.</li>
              <li>Attempt to gain unauthorised access to our systems.</li>
              <li>Scrape, harvest, or extract data from our website without permission.</li>
              <li>Post reviews or content that is false, defamatory, or harmful.</li>
            </ul>
          </TosSection>

          <TosSection title="11. Limitation of Liability">
            <p>To the fullest extent permitted by law, Littleroot is not liable for:</p>
            <ul>
              <li>Indirect, incidental, or consequential damages arising from your use of our website or products.</li>
              <li>Loss of data, revenue, or profits.</li>
              <li>Delays or failures beyond our reasonable control.</li>
            </ul>
            <p>Our total liability in any matter is limited to the amount you paid for the relevant order.</p>
          </TosSection>

          <TosSection title="12. Governing Law">
            <p>These Terms are governed by the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.</p>
          </TosSection>

          <TosSection title="13. Contact">
            <p>For questions regarding these Terms, contact us at:</p>
            <div className="bg-cream-200 border border-cream-300 p-5 mt-4 font-body text-sm text-espresso-400 space-y-1">
              <p><strong>Littleroot</strong></p>
              <p>Email: support@littleroot.online</p>
              <p>Phone: +91 70821 69124</p>
              <p>Hours: Monday–Saturday, 10am–6pm IST</p>
            </div>
          </TosSection>

        </div>
      </div>
    </div>
  )
}

function TosSection({ title, children }) {
  return (
    <section>
      <h2 className="font-heading text-2xl font-medium text-espresso-500 mb-4 pb-2 border-b border-cream-300">{title}</h2>
      <div className="font-body text-sm text-espresso-400 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  )
}
