import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="glass rounded-2xl p-12 border border-neutral-700/50 max-w-md w-full text-center">
        <h1 className="text-4xl font-grotesk font-bold text-neutral-100 mb-4">404</h1>
        <p className="text-neutral-300 mb-2">Page not found</p>
        <p className="text-neutral-400 text-sm mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="w-full">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}
