export default function PrivacyPolicy() {
  return (
    <div>
      <div className="bg-cream-200 border-b border-cream-300 py-14 text-center">
        <p className="font-body text-xs tracking-widest uppercase text-terra-500 mb-3">Legal</p>
        <h1 className="font-heading text-4xl md:text-5xl font-light text-espresso-500">Privacy Policy</h1>
        <p className="font-body text-sm text-espresso-200 mt-3">Last updated: January 2025</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose-custom space-y-10">

          <section>
            <p className="font-body text-sm text-espresso-400 leading-relaxed">
              At Littleroot ("we", "us", "our"), your privacy matters deeply to us. This Privacy Policy explains how we collect, use, store, and share your personal information when you visit our website or make a purchase. Please read this carefully.
            </p>
          </section>

          <PolicySection title="1. Information We Collect">
            <p>We collect information in the following ways:</p>
            <SubHead>1.1 Information You Provide Directly</SubHead>
            <ul>
              <li><strong>Account Information:</strong> Name, email address, password when you create an account.</li>
              <li><strong>Order Information:</strong> Billing address, shipping address, phone number, payment details.</li>
              <li><strong>Communications:</strong> Messages you send us via our contact form or email.</li>
              <li><strong>Newsletter:</strong> Email address if you subscribe to our mailing list.</li>
            </ul>
            <SubHead>1.2 Information Collected Automatically</SubHead>
            <ul>
              <li><strong>Device & Browser Data:</strong> IP address, browser type, operating system, referring URLs.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent, clicks, and browsing behaviour on our site.</li>
              <li><strong>Cookies:</strong> Small text files stored on your device. See our Cookie Policy below.</li>
            </ul>
          </PolicySection>

          <PolicySection title="2. How We Use Your Information">
            <p>We use the information collected to:</p>
            <ul>
              <li>Process and fulfil your orders, including sending confirmation and shipping updates.</li>
              <li>Manage your account and provide customer support.</li>
              <li>Send you promotional emails and offers — only with your consent, and you may opt out at any time.</li>
              <li>Improve our website, products, and services.</li>
              <li>Detect and prevent fraud and unauthorised access.</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p>We do not sell your personal data to third parties.</p>
          </PolicySection>

          <PolicySection title="3. Sharing Your Information">
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Logistics & Delivery Partners:</strong> To ship your orders (e.g., Delhivery, Shiprocket). Only the information necessary for delivery is shared.</li>
              <li><strong>Payment Processors:</strong> Secure third-party payment gateways (e.g., Razorpay, Stripe). We do not store your full card details on our servers.</li>
              <li><strong>Email Marketing Platforms:</strong> To send newsletters — only if you have opted in.</li>
              <li><strong>Analytics Providers:</strong> Anonymised usage data to understand how our site is used (e.g., Google Analytics).</li>
              <li><strong>Legal Compliance:</strong> Where required by law or to protect our rights.</li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Cookies">
            <p>We use cookies to:</p>
            <ul>
              <li>Keep your shopping cart active between sessions.</li>
              <li>Remember your preferences (currency, language).</li>
              <li>Analyse site traffic and usage patterns.</li>
              <li>Show you relevant ads (if applicable).</li>
            </ul>
            <p>You can control cookies through your browser settings. Disabling cookies may affect certain features of our website.</p>
          </PolicySection>

          <PolicySection title="5. Data Retention">
            <p>We retain your personal data for as long as necessary to provide our services and comply with legal obligations:</p>
            <ul>
              <li>Order data is retained for 7 years for tax and accounting purposes.</li>
              <li>Account data is retained until you request deletion.</li>
              <li>Marketing data is retained until you unsubscribe.</li>
            </ul>
          </PolicySection>

          <PolicySection title="6. Your Rights">
            <p>Under applicable data protection laws, you have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations).</li>
              <li><strong>Portability:</strong> Request your data in a portable format.</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent for marketing communications at any time by clicking "Unsubscribe" in our emails.</li>
              <li><strong>Objection:</strong> Object to the processing of your data in certain circumstances.</li>
            </ul>
            <p>To exercise any of these rights, contact us at <strong>support@littleroot.online</strong>.</p>
          </PolicySection>

          <PolicySection title="7. Security">
            <p>We use industry-standard security measures to protect your personal information, including:</p>
            <ul>
              <li>SSL/TLS encryption for all data transmitted to and from our site.</li>
              <li>PCI-DSS compliant payment processing.</li>
              <li>Restricted access to personal data on a need-to-know basis.</li>
            </ul>
            <p>While we take all reasonable precautions, no method of transmission over the internet is 100% secure.</p>
          </PolicySection>

          <PolicySection title="8. Children's Privacy">
            <p>
              Our website is intended for adults purchasing products for children. We do not knowingly collect personal information from individuals under the age of 18. If you believe we have inadvertently collected data from a minor, please contact us and we will promptly delete it.
            </p>
          </PolicySection>

          <PolicySection title="9. Third-Party Links">
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We encourage you to read their privacy policies before providing any personal information.
            </p>
          </PolicySection>

          <PolicySection title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. We encourage you to review this page periodically.
            </p>
          </PolicySection>

          <PolicySection title="11. Contact Us">
            <p>
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="bg-cream-200 border border-cream-300 p-5 mt-4 font-body text-sm text-espresso-400 space-y-1">
              <p><strong>Littleroot</strong></p>
              <p>Owner: AADIL</p>
              <p>Email: support@littleroot.online</p>
              <p>Phone: +91 70821 69124</p>
              <p>General: support@littleroot.online</p>
              <p>Hours: Monday–Saturday, 10am–6pm IST</p>
            </div>
          </PolicySection>

        </div>
      </div>
    </div>
  )
}

function PolicySection({ title, children }) {
  return (
    <section>
      <h2 className="font-heading text-2xl font-medium text-espresso-500 mb-4 pb-2 border-b border-cream-300">{title}</h2>
      <div className="font-body text-sm text-espresso-400 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  )
}

function SubHead({ children }) {
  return <p className="font-body text-sm font-semibold text-espresso-500 mt-4 mb-1">{children}</p>
}
