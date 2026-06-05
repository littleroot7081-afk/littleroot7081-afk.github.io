import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <p className="font-heading text-8xl font-light text-cream-400 mb-4">404</p>
      <h1 className="font-heading text-4xl font-light text-espresso-400 mb-4">Page Not Found</h1>
      <p className="font-body text-sm text-espresso-200 mb-8 max-w-sm">
        Looks like this page has wandered off on an adventure. Let's get you back on track.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          Go Home <ArrowRight size={16} />
        </Link>
        <Link to="/shop" className="btn-secondary inline-flex items-center gap-2">
          Browse Shop <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
