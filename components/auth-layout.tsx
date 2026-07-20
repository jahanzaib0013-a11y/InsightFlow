import Link from 'next/link'
import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
  leftTitle: string
  leftSubtitle: string
  leftBadge: string
  leftFeatures?: { icon: string; title: string; description: string }[]
}

export function AuthLayout({
  children,
  leftTitle,
  leftSubtitle,
  leftBadge,
  leftFeatures,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-blue-900/20 to-neutral-900">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-neutral-900/60 backdrop-blur-xl border-b border-neutral-700/20">
        <Link href="/" className="flex items-center gap-3 text-white font-grotesk font-bold">
          <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center text-white font-bold">
            I
          </div>
          InsightFlow
        </Link>
        <button className="text-neutral-400 hover:text-white transition-colors">
          <span className="material-symbols-rounded">dark_mode</span>
        </button>
      </div>

      <div className="pt-16 min-h-screen flex">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-blue/10 opacity-50" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl -mr-48 opacity-50" />

          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-primary-500/50 bg-primary-500/10 text-primary-300">
              <span className="text-xs font-medium">{leftBadge}</span>
            </div>

            <div>
              <h1 className="text-5xl lg:text-6xl font-grotesk font-bold leading-tight mb-4">
                {leftTitle}
              </h1>
              <p className="text-lg text-neutral-400 max-w-md">{leftSubtitle}</p>
            </div>
          </div>

          {/* Features at bottom */}
          {leftFeatures && leftFeatures.length > 0 && (
            <div className="relative z-10 grid grid-cols-2 gap-6 pt-12 border-t border-neutral-700/50">
              {leftFeatures.map((feature, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-rounded text-primary-400">
                      {feature.icon}
                    </span>
                    <h3 className="font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-neutral-400">{feature.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Metrics at bottom */}
          <div className="relative z-10 flex gap-6 text-xs text-neutral-400 pt-8 border-t border-neutral-700/50">
            <div>
              <p className="font-bold text-white">99.99%</p>
              <p>Uptime</p>
            </div>
            <div>
              <p className="font-bold text-white">AES-256</p>
              <p>Encryption</p>
            </div>
            <div>
              <p className="font-bold text-white">ISO 27001</p>
              <p>Compliant</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    </div>
  )
}
