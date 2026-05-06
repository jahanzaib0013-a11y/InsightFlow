'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function VerifyPage() {
  const [codes, setCodes] = useState(['', '', '', '', '', ''])

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return
    const newCodes = [...codes]
    newCodes[index] = value
    setCodes(newCodes)
    
    if (value && index < 5) {
      const nextInput = document.querySelector(`input[data-index="${index + 1}"]`) as HTMLInputElement
      nextInput?.focus()
    }
  }

  return (
    <div className="min-h-screen bg-background text-on-background font-body-main selection:bg-primary-container selection:text-on-primary-container">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <span className="text-blue-600 dark:text-blue-500 material-symbols-outlined text-2xl">insights</span>
          <span className="text-xl font-bold tracking-tighter text-slate-50 font-h2">InsightFlow</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-slate-400 hover:text-blue-400 transition-colors duration-200 active:opacity-80 active:scale-95">
            <span className="material-symbols-outlined">dark_mode</span>
          </button>
        </div>
      </header>

      <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-16">
        {/* Left Side: Identity Verification Visuals */}
        <section className="hidden md:flex flex-col justify-center items-center relative overflow-hidden bg-surface-container-lowest border-r border-outline-variant/30">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Identity Verification" 
              className="w-full h-full object-cover opacity-20 mix-blend-overlay" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQxtfyyKTVgqxCIqCT7KYKnNQxFAMeGJeb30ojWonW2TGhkbYP1EkUEalhYQizd4AcVP0jdrx8ZEfT3VEsd1DvbZ6w5NHSEGkhkEWZ7s49YyqkGOaszA4bmUi_nNX22WvIHUlEqQPUC-EX-8NaoV0_5dIkDduOWS558SEm07x7Y4awFqYZdqSyphT1KOH9ljrRKp_v21eOYNz0qW-ocHK4eYylRYzxiPdONbi1iQnGSjcwvpYDOZpp-tIryDGC2cQ1P1nKR0IvHy4"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-primary-container/10"></div>
          </div>
          
          <div className="relative z-10 px-4 sm:px-6 lg:px-xl max-w-lg">
            <div className="mb-lg inline-flex items-center gap-2 px-md py-xs glass-panel rounded-full border-primary/20">
              <span className="material-symbols-outlined text-tertiary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
              <span className="font-mono-label text-mono-label text-tertiary uppercase tracking-widest">Secure Protocol Lvl 4</span>
            </div>
            <h1 className="font-h1 text-h1 sm:text-h1 text-on-surface mb-md leading-tight">Identity <br/><span className="text-primary">Verification</span></h1>
            <p className="font-body-main text-body-main text-on-surface-variant mb-lg sm:mb-xl text-sm sm:text-base">
              InsightFlow uses advanced multi-layer encryption and semantic analysis to ensure your data remains accessible only to you.
            </p>
            
            {/* Status Cards */}
            <div className="grid grid-cols-1 gap-md">
              <div className="glass-panel p-md rounded-xl flex items-center gap-md">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined text-primary">security</span>
                </div>
                <div>
                  <p className="font-mono-label text-mono-label text-on-surface">ENCRYPTION</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">AES-256 GCM Active</p>
                </div>
              </div>
              <div className="glass-panel p-md rounded-xl flex items-center gap-md">
                <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
                  <span className="material-symbols-outlined text-tertiary">fingerprint</span>
                </div>
                <div>
                  <p className="font-mono-label text-mono-label text-on-surface">AUTHENTICATION</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">2-Factor Handshake Required</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom tech footer decoration */}
          <div className="absolute bottom-md left-md right-md flex justify-between items-end opacity-40">
            <div className="h-24 w-[1px] bg-gradient-to-t from-primary to-transparent"></div>
            <div className="font-mono-label text-[10px] text-outline text-right">
              NODE_ID: 882-QX-4<br/>
              SYSTEM_CLOCK: SYNCED
            </div>
          </div>
        </section>

        {/* Right Side: Verification Form */}
        <section className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-margin_safe py-8 sm:py-xl bg-background">
          <div className="w-full max-w-md">
            <div className="text-center md:text-left mb-lg sm:mb-xl">
              <h2 className="font-h2 text-h2 sm:text-h2 text-on-surface mb-sm">Verification Required</h2>
              <p className="font-body-main text-body-main text-on-surface-variant text-sm sm:text-base">
                To continue to your workspace, please enter the 6-digit code sent to your linked authentication device.
              </p>
            </div>
            
            <form className="space-y-lg sm:space-y-xl">
              {/* Code Inputs */}
              <div className="flex justify-between gap-2 sm:gap-md flex-wrap sm:flex-nowrap">
                {codes.map((code, index) => (
                  <input
                    key={index}
                    data-index={index}
                    type="text"
                    maxLength={1}
                    value={code}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-10 h-14 sm:w-12 sm:h-16 text-center text-h3 font-h3 bg-surface-container-low border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container rounded-lg transition-all outline-none text-on-surface text-lg sm:text-h3"
                    placeholder="·"
                  />
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-md">
                <Link href="/dashboard">
                  <button className="w-full py-3 sm:py-md px-lg bg-primary-container text-on-primary-container font-h3 text-h3 rounded-xl hover:bg-inverse-primary transition-all duration-300 flex items-center justify-center gap-md group text-sm sm:text-base" type="button">
                    <span>Verify Account</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </Link>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-md pt-sm">
                  <button className="text-secondary font-mono-label text-mono-label hover:text-primary transition-colors flex items-center gap-sm text-sm sm:text-base" type="button">
                    <span className="material-symbols-outlined text-sm">refresh</span>
                    Resend Code
                  </button>
                  <button className="text-on-surface-variant font-mono-label text-mono-label hover:text-on-surface transition-colors flex items-center gap-sm text-sm sm:text-base" type="button">
                    <span className="material-symbols-outlined text-sm">contact_support</span>
                    Help Center
                  </button>
                </div>
              </div>
            </form>
            
            {/* Security Trust Note */}
            <div className="mt-lg sm:mt-xl pt-lg border-t border-outline-variant/30 text-center">
              <p className="font-body-sm text-body-sm text-outline flex items-center justify-center gap-sm text-sm sm:text-base">
                <span className="material-symbols-outlined text-base">lock</span>
                Encrypted end-to-end verification
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
