import { useState } from 'react'
import { Ruler, Sparkles, AlertCircle } from 'lucide-react'

export default function SizeGuide() {
  const [activeTab, setActiveTab] = useState('infants')

  const infantSizes = [
    { size: 'Newborn (0M)', height: 'Up to 52 cm', weight: 'Up to 3.5 kg', chest: '14 in' },
    { size: '0–3 Months', height: '52–62 cm', weight: '3.5–5.5 kg', chest: '15.5 in' },
    { size: '3–6 Months', height: '62–68 cm', weight: '5.5–7.5 kg', chest: '17 in' },
    { size: '6–12 Months', height: '68–80 cm', weight: '7.5–10 kg', chest: '18 in' },
    { size: '12–18 Months', height: '80–86 cm', weight: '10–12 kg', chest: '19.5 in' },
    { size: '18–24 Months', height: '86–92 cm', weight: '12–14 kg', chest: '20.5 in' },
  ]

  const kidSizes = [
    { size: '2 Years (2T)', height: '92–98 cm', weight: '14–16 kg', chest: '21 in' },
    { size: '3 Years (3T)', height: '98–104 cm', weight: '16–18 kg', chest: '22 in' },
    { size: '4 Years (4T)', height: '104–110 cm', weight: '18–20 kg', chest: '23 in' },
    { size: '5 Years (5T)', height: '110–116 cm', weight: '20–22 kg', chest: '24 in' },
    { size: '6 Years (6T)', height: '116–122 cm', weight: '22–25 kg', chest: '25 in' },
  ]

  return (
    <div>
      {/* Header Band */}
      <div className="bg-cream-200 border-b border-cream-300 py-14 text-center">
        <p className="font-body text-xs tracking-widest uppercase text-terra-500 mb-3">Fit & Sizing</p>
        <h1 className="font-heading text-4xl md:text-5xl font-light text-espresso-500">Size Guide</h1>
        <p className="font-body text-sm text-espresso-200 mt-3">Find the perfect fit for your little root.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-body text-sm text-espresso-300 leading-relaxed">
            Children grow quickly! Our clothing is designed with standard Indian and global sizing frameworks, featuring a slightly relaxed silhouette to allow comfort, ease of movement, and room to grow.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center border-b border-cream-300 mb-8">
          <button
            onClick={() => setActiveTab('infants')}
            className={`px-6 py-3 font-heading text-lg transition-colors border-b-2 font-medium ${activeTab === 'infants' ? 'border-terra-500 text-espresso-500' : 'border-transparent text-espresso-200 hover:text-espresso-400'}`}
          >
            Infants (0–24 Months)
          </button>
          <button
            onClick={() => setActiveTab('kids')}
            className={`px-6 py-3 font-heading text-lg transition-colors border-b-2 font-medium ${activeTab === 'kids' ? 'border-terra-500 text-espresso-500' : 'border-transparent text-espresso-200 hover:text-espresso-400'}`}
          >
            Toddlers & Kids (2–6 Years)
          </button>
        </div>

        {/* Table Container */}
        <div className="bg-cream-50 border border-cream-300 rounded-lg p-6 mb-12 overflow-x-auto shadow-sm">
          <table className="w-full text-left font-body text-sm text-espresso-400 min-w-[500px]">
            <thead>
              <tr className="border-b border-cream-300 text-espresso-200 text-xs tracking-wider uppercase font-semibold">
                <th className="py-3 px-4">Size / Recommended Age</th>
                <th className="py-3 px-4">Child Height</th>
                <th className="py-3 px-4">Child Weight</th>
                <th className="py-3 px-4">Chest Circumference</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cream-200">
              {activeTab === 'infants' ? (
                infantSizes.map((row, idx) => (
                  <tr key={idx} className="hover:bg-cream-100/40 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-espresso-500">{row.size}</td>
                    <td className="py-3.5 px-4">{row.height}</td>
                    <td className="py-3.5 px-4">{row.weight}</td>
                    <td className="py-3.5 px-4">{row.chest}</td>
                  </tr>
                ))
              ) : (
                kidSizes.map((row, idx) => (
                  <tr key={idx} className="hover:bg-cream-100/40 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-espresso-500">{row.size}</td>
                    <td className="py-3.5 px-4">{row.height}</td>
                    <td className="py-3.5 px-4">{row.weight}</td>
                    <td className="py-3.5 px-4">{row.chest}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Measuring Guide Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-cream-50 border border-cream-300 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Ruler className="text-terra-500" size={20} />
              <h2 className="font-heading text-xl font-medium text-espresso-500">How to Measure</h2>
            </div>
            <ul className="space-y-4 font-body text-sm text-espresso-400">
              <li>
                <strong className="text-espresso-500 block mb-0.5">1. Height</strong>
                Measure your child standing straight against a wall without shoes. For infants under 2 years, lay them flat on a secure, flat surface and measure from head to toe.
              </li>
              <li>
                <strong className="text-espresso-500 block mb-0.5">2. Chest</strong>
                Wrap a soft measuring tape under your child's armpits around the fullest part of their chest. Keep the tape parallel to the floor.
              </li>
              <li>
                <strong className="text-espresso-500 block mb-0.5">3. Weight</strong>
                Weigh your child in lightweight clothing or diaper. Weight is often the most accurate predictor of a good fit for baby apparel.
              </li>
            </ul>
          </div>

          <div className="bg-cream-50 border border-cream-300 p-8 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-terra-500" size={20} />
                <h2 className="font-heading text-xl font-medium text-espresso-500">Sizing Tips</h2>
              </div>
              <ul className="space-y-3 font-body text-sm text-espresso-400 list-disc pl-5">
                <li>If your child's measurements fall between sizes, we recommend sizing up to ensure they get more wear out of the garment.</li>
                <li>Cotton fabrics are prone to minimal natural shrinkage upon first wash. Our styles account for this, but washing on cold and hang-drying is recommended.</li>
                <li>For sleepwear and lounge sets, a slightly looser fit is generally preferred for safety and airflow.</li>
              </ul>
            </div>
            <div className="flex items-start gap-3 bg-cream-200 border border-cream-300 p-4 rounded mt-4">
              <AlertCircle className="text-terra-500 flex-shrink-0 mt-0.5" size={18} />
              <p className="font-body text-xs text-espresso-300 leading-normal">
                Still unsure? We are happy to help you select the ideal size. Email us at <a href="mailto:support@littleroot.online" className="text-terra-500 hover:underline"><strong>support@littleroot.online</strong></a> with height and weight details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
