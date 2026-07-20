'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background text-on-background font-body-main antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-slate-50 font-sans antialiased tracking-tight">InsightFlow</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-slate-400 hover:text-blue-400 transition-colors duration-200 active:opacity-80 active:scale-95">
            <span className="material-symbols-outlined">dark_mode</span>
          </button>
        </div>
      </header>

      {/* Left Side: Obsidian-style Background */}
      <section className="hidden md:flex md:w-1/2 relative overflow-hidden bg-surface-container-lowest border-r border-outline-variant/20 pt-[72px]">
        {/* Background Image with data-alt */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-background to-primary-container/10"></div>
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{
            backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDuooCoa1PBmJxQ07rf4D5tdaexiOYF0S4RJp5_LxVHLpmeg9RXVn0pvEw2wkIqoi29RrMm5UUhb5eZEgBon09wydGq49ZZRL6oN8GK9Zm9nwc7dcCem3PtcISAVt2oCL1qkWQZrI18DmRPt7y44koGMq0naYuCfvblhFpwoojkvGr3VFFXY84WzTxndnNDU21mVcsBHDQemhAAEXcX4UXn7lxIFeOj98s_wa7x9oLgii5vU1qWaakNso8AF_MPnsVI_qujipoEOoE\')',
            backgroundSize: 'cover'
          }}></div>
          {/* Glassmorphism Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tertiary/5 rounded-full blur-[120px]"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-4 sm:px-6 lg:px-xl w-full max-w-2xl mx-auto">
          <div className="mb-md">
            <span className="font-mono-label text-mono-label text-tertiary px-sm py-xs bg-tertiary/10 rounded-lg inline-block border border-tertiary/20">SYSTEM ACCESS</span>
          </div>
          <h1 className="font-h1 text-h1 sm:text-h1 text-on-surface mb-md max-w-lg leading-tight">
            Architect Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Intelligence</span>
          </h1>
          <p className="font-body-main text-body-main text-on-surface-variant max-w-md opacity-80 text-sm sm:text-base">
            Deploy sophisticated neural networks and orchestrate high-stakes data analysis within a unified, high-performance workspace.
          </p>
          <div className="mt-lg sm:mt-xl grid grid-cols-1 sm:grid-cols-2 gap-md">
            <div className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
              <span className="material-symbols-outlined text-primary mb-sm">database</span>
              <h4 className="font-h3 text-body-main font-semibold text-on-surface">Data Integrity</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant opacity-70">End-to-end encryption for sensitive analysis.</p>
            </div>
            <div className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
              <span className="material-symbols-outlined text-tertiary mb-sm">speed</span>
              <h4 className="font-h3 text-body-main font-semibold text-on-surface">Low Latency</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant opacity-70">Real-time processing across global nodes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Right Side: Create Account Form */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-lg py-8 sm:py-xl bg-background pt-[72px] min-h-screen">
        <div className="w-full max-w-md space-y-lg sm:space-y-xl">
          {/* Header */}
          <div className="text-center md:text-left">
            <h2 className="font-h2 text-h2 sm:text-h2 text-on-surface mb-xs">Create Account</h2>
            <p className="font-body-main text-body-main text-on-surface-variant text-sm sm:text-base">Initialize your professional profile.</p>
          </div>

          {/* Form */}
          <form className="space-y-md">
            <div className="space-y-xs">
              <label className="font-mono-label text-mono-label text-on-surface-variant uppercase tracking-wider">Full Name</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline text-[20px]">person</span>
                <input 
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-12 sm:pl-xl pr-3 sm:pr-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all placeholder:text-outline/50 text-sm sm:text-base" 
                  placeholder="Janus van den Bergen" 
                  type="text"
                />
              </div>
            </div>

            <div className="space-y-xs">
              <label className="font-mono-label text-mono-label text-on-surface-variant uppercase tracking-wider">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline text-[20px]">alternate_email</span>
                <input 
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-12 sm:pl-xl pr-3 sm:pr-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all placeholder:text-outline/50 text-sm sm:text-base" 
                  placeholder="architect@insightflow.io" 
                  type="email"
                />
              </div>
            </div>

            <div className="space-y-xs">
              <label className="font-mono-label text-mono-label text-on-surface-variant uppercase tracking-wider">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline text-[20px]">lock</span>
                <input 
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-12 sm:pl-xl pr-3 sm:pr-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all placeholder:text-outline/50 text-sm sm:text-base" 
                  placeholder="••••••••••••" 
                  type={showPassword ? 'text' : 'password'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-on-surface-variant hover:text-on-surface transition"
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
              <p className="text-[10px] sm:text-[11px] text-on-surface-variant opacity-60 px-xs">Minimum 12 characters with multi-factor entropy.</p>
            </div>

            <button className="w-full bg-primary-container text-on-primary-container font-semibold py-3 rounded-lg shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-sm text-sm sm:text-base" type="button">
              Create Account
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>

          {/* Divider */}
          <div className="relative py-md">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/30"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-md text-on-surface-variant font-mono-label">Or continue with</span>
            </div>
          </div>

          {/* Social Signups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            <button className="flex items-center justify-center gap-sm bg-surface-container border border-outline-variant rounded-lg py-3 hover:bg-surface-container-high transition-colors text-on-surface font-body-sm text-sm sm:text-base">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"></path>
                <path d="M5.84 14.11c-.22-.67-.35-1.39-.35-2.11s.13-1.44.35-2.11V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.83z" fill="currentColor"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.83c.87-2.6 3.3-4.53 12-4.53z" fill="currentColor"></path>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-sm bg-surface-container border border-outline-variant rounded-lg py-3 hover:bg-surface-container-high transition-colors text-on-surface font-body-sm text-sm sm:text-base">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"></path>
              </svg>
              GitHub
            </button>
          </div>

          {/* Footer */}
          <footer className="pt-lg border-t border-outline-variant/30 text-center md:text-left">
            <p className="font-body-sm text-body-sm text-on-surface-variant/60 text-sm sm:text-base">
              Already have a secure session? <Link className="text-primary hover:underline transition-all" href="/login">Sign In</Link>
            </p>
            <p className="mt-md font-body-sm text-[11px] sm:text-[12px] text-on-surface-variant/40 leading-relaxed">
              By proceeding, you acknowledge the <a className="underline hover:text-on-surface-variant/60" href="#">Security Protocols</a> and agree to our <a className="underline hover:text-on-surface-variant/60" href="#">Analytical Terms of Service</a>.
            </p>
          </footer>
        </div>
      </section>
    </div>
  )
}
