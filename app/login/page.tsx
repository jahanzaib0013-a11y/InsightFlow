'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
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

      {/* Left Side: High-tech Branding */}
      <section className="hidden md:flex md:w-1/2 relative items-center justify-center p-xl overflow-hidden bg-gradient-to-br from-background via-surface-container to-background">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(41, 98, 255, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(82, 3, 213, 0.1) 0%, transparent 40%)'
        }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 max-w-lg space-y-lg">
          <div className="inline-flex items-center gap-2 px-md py-xs rounded-full bg-surface-container-high border border-outline-variant/30">
            <span className="material-symbols-outlined text-tertiary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
            <span className="font-mono-label text-mono-label text-tertiary">ENCRYPTION ACTIVE</span>
          </div>
          
          <h1 className="font-h1 text-h1 text-on-background leading-tight">
            Secure <br/>
            <span className="text-primary">Intelligence</span> <br/>
            Access
          </h1>
          
          <p className="font-body-main text-body-main text-on-surface-variant max-w-sm">
            Access the most advanced knowledge graph and semantic mapping infrastructure in the intelligence sector.
          </p>
          
          {/* Data Visualizer Placeholder */}
          <div className="pt-xl">
            <div className="grid grid-cols-6 gap-2 opacity-40">
              <div className="h-1 bg-primary-container rounded-full w-full"></div>
              <div className="h-1 bg-primary rounded-full w-full"></div>
              <div className="h-1 bg-tertiary rounded-full w-full"></div>
              <div className="h-1 bg-outline-variant rounded-full w-full"></div>
              <div className="h-1 bg-primary-container rounded-full w-full"></div>
              <div className="h-1 bg-secondary rounded-full w-full"></div>
            </div>
          </div>
        </div>
        
        {/* Abstract Graphic */}
        <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 opacity-20">
          <img 
            alt="" 
            className="w-full h-full object-cover rounded-full grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6O3hhj6cIRijfXIFZ6RfpAceUEFBAF_wlrlI5DOEx1fI5BgYQS5sPBtA2EVv9T19VAF9bLOn1QXRLHXf2XWXAWS6Wr9Y99tTqOBjoRZtrbPXs1U1ucrnggnEYHCvhgo0SDOL7OaWlccqjvj8XOR-_noq_cTs9cCc7Mo224Aseum5V8gXr4QCopav3DmexrDOO5zWezCQk79H7-ASQ3QOTGMjyN1otZL79LyYqahu4tvzaJf2BQRYBMydMI80hAZay1js8QZIAP9Q"
          />
        </div>
      </section>

      {/* Right Side: Login Form */}
      <section className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-lg py-8 sm:py-xl bg-surface-container-lowest min-h-screen">
        <div className="w-full max-w-md space-y-lg sm:space-y-xl">
          <div className="space-y-sm">
            <h2 className="font-h2 text-h2 sm:text-h2 text-on-background">Welcome Back</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-sm sm:text-base">Enter your credentials to access your analytics dashboard.</p>
          </div>

          <form className="space-y-md">
            {/* Email Field */}
            <div className="space-y-xs">
              <label className="font-mono-label text-mono-label text-on-surface-variant" htmlFor="email">EMAIL ADDRESS</label>
              <div className="relative">
                <input 
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 sm:px-md py-3 font-body-main text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all text-sm sm:text-base" 
                  id="email" 
                  name="email" 
                  placeholder="analyst@insightflow.io" 
                  type="email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-xs">
              <div className="flex justify-between items-center">
                <label className="font-mono-label text-mono-label text-on-surface-variant" htmlFor="password">PASSWORD</label>
                <Link href="/forgot-password" className="font-body-sm text-body-sm text-primary hover:text-primary-fixed transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input 
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-3 sm:px-md py-3 font-body-main text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all text-sm sm:text-base" 
                  id="password" 
                  name="password" 
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
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2 py-xs">
              <input 
                className="w-4 h-4 rounded-sm bg-surface-container border-outline-variant text-primary-container focus:ring-primary" 
                id="remember" 
                type="checkbox"
              />
              <label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer text-sm sm:text-base" htmlFor="remember">
                Remember this session for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <Link href="/dashboard">
              <button className="w-full bg-primary-container text-on-primary-container font-h3 text-body-main py-3 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-primary-container/20 text-sm sm:text-base" type="button">
                Sign In
              </button>
            </Link>
          </form>

          {/* Divider */}
          <div className="relative py-md">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/20"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-surface-container-lowest px-md font-mono-label text-mono-label text-outline">OR CONTINUE WITH</span>
            </div>
          </div>

          {/* OAuth Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            <button className="flex items-center justify-center gap-3 bg-surface-container-low border border-outline-variant/30 py-3 rounded-lg hover:bg-surface-container-high transition-colors active:scale-[0.98]">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              <span className="font-body-sm text-body-sm text-on-surface">Google</span>
            </button>
            
            <button className="flex items-center justify-center gap-3 bg-surface-container-low border border-outline-variant/30 py-3 rounded-lg hover:bg-surface-container-high transition-colors active:scale-[0.98]">
              <svg className="w-5 h-5 fill-on-surface" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
              </svg>
              <span className="font-body-sm text-body-sm text-on-surface">GitHub</span>
            </button>
          </div>

          <p className="text-center font-body-sm text-body-sm text-on-surface-variant pt-lg text-sm sm:text-base">
            New to InsightFlow? <Link className="text-primary hover:underline" href="/signup">Request observer access</Link>
          </p>
        </div>

        {/* Footer Stats / Trust Bar */}
        <div className="mt-lg sm:mt-xl flex gap-4 sm:gap-xl opacity-50 flex-wrap justify-center">
          <div className="text-center">
            <p className="font-mono-label text-mono-label text-primary text-sm sm:text-base">99.99%</p>
            <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-outline">Uptime</p>
          </div>
          <div className="text-center">
            <p className="font-mono-label text-mono-label text-tertiary text-sm sm:text-base">AES-256</p>
            <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-outline">Standard</p>
          </div>
          <div className="text-center">
            <p className="font-mono-label text-mono-label text-secondary text-sm sm:text-base">ISO 27001</p>
            <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-outline">Compliant</p>
          </div>
        </div>
      </section>
    </div>
  )
}
