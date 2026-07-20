'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ForgotPasswordPage() {
  return (
    <div className="bg-background text-on-background font-body-main selection:bg-primary-container selection:text-on-primary-container">
      {/* TopAppBar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-blue-600 dark:text-blue-500">insights</span>
          <span className="text-xl font-bold tracking-tighter text-slate-50 dark:text-slate-50 font-sans antialiased tracking-tight">InsightFlow</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-slate-400 hover:text-blue-400 transition-colors duration-200 Active:opacity-80 scale-95 transition-all">
            <span className="material-symbols-outlined">dark_mode</span>
          </button>
        </div>
      </nav>
      
      {/* Main Content Container */}
      <main className="min-h-screen flex flex-col md:flex-row pt-16">
        {/* Left Side: Hero Graphic Area */}
        <section className="hidden md:flex flex-1 relative overflow-hidden bg-surface-container-lowest items-center justify-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              alt="Secure Data" 
              className="w-full h-full object-cover opacity-30 grayscale" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOcwxU8PUDw9gPPNtw3Vets9sE7bQ-zkCvaDFtAm7L4BmxGNzUiqwD022vn_Oz1Ll-c31MtobvvR32v0n-0MkE5QXCpnXs_JzondELggbZATBnZiraldpXENxtqp_c3pyiiTTwtDpfu0pVEt_j-PUHrCLNvJew1QqMgbVjfvKNz1yyosO0phnVLEfmw6-7C0ESIDsOiD-P5Fjt9uC9XsRPlD0LPoK3F1c_0CWASifb6VzntgK3TwqAX2lx5UpvENqy9JFDQ9YKXII"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-primary-container/10"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-margin_safe max-w-lg">
            <div className="mb-md">
              <span className="font-mono-label text-mono-label text-primary px-sm py-xs border border-primary/30 bg-primary/5 rounded-lg">SYSTEM PROTOCOL 04-R</span>
            </div>
            <h2 className="font-h1 text-h1 sm:text-h1 text-on-surface mb-md">Secure Recovery</h2>
            <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed text-sm sm:text-base">
              Access high-fidelity intelligence through our encrypted restoration gateway. Protecting your data identity is our primary operational directive.
            </p>
            <div className="mt-lg sm:mt-xl grid grid-cols-1 sm:grid-cols-2 gap-md">
              <div className="p-md bg-surface-container/50 border border-outline-variant rounded-xl">
                <span className="material-symbols-outlined text-tertiary mb-sm">enhanced_encryption</span>
                <p className="font-mono-label text-mono-label text-on-surface">End-to-End Encryption</p>
              </div>
              <div className="p-md bg-surface-container/50 border border-outline-variant rounded-xl">
                <span className="material-symbols-outlined text-tertiary mb-sm">verified_user</span>
                <p className="font-mono-label text-mono-label text-on-surface">Identity Verification</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Nodes */}
          <div className="absolute top-1/4 right-10 w-24 h-24 border border-primary/20 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 border border-primary/40 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(182,196,255,0.6)]"></div>
            </div>
          </div>
        </section>

        {/* Right Side: Form Area */}
        <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-margin_safe py-8 sm:py-xl bg-background">
          <div className="w-full max-w-md">
            <div className="mb-lg sm:mb-xl">
              <h1 className="font-h2 text-h2 sm:text-h2 text-on-surface mb-sm">Reset Password</h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant text-sm sm:text-base">
                Lost your credentials? Enter your authorized email address and we'll transmit a secure recovery link to your inbox.
              </p>
            </div>
            
            <form className="space-y-lg sm:space-y-xl">
              {/* Email Input */}
              <div className="space-y-xs">
                <label className="font-mono-label text-mono-label text-on-surface-variant" htmlFor="email">OPERATIONAL EMAIL</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline group-focus-within:text-primary transition-colors">alternate_email</span>
                  </div>
                  <input 
                    className="block w-full pl-12 sm:pl-xl pr-3 sm:pr-md py-3 sm:py-md bg-surface-container-low border border-outline-variant rounded-xl text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm sm:text-base" 
                    id="email" 
                    name="email" 
                    placeholder="name@intelligence.flow" 
                    type="email"
                  />
                </div>
              </div>
              
              {/* CTA Button */}
              <button className="w-full flex items-center justify-center gap-sm bg-primary-container text-on-primary-container font-h3 text-body-main py-3 sm:py-md rounded-xl hover:bg-primary transition-all active:scale-95 shadow-lg shadow-primary-container/10 text-sm sm:text-base" type="submit">
                <span>Send Reset Link</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              
              {/* Back to Login */}
              <div className="text-center pt-md">
                <a className="inline-flex items-center gap-xs font-body-sm text-body-sm text-primary hover:text-primary-fixed transition-colors group text-sm sm:text-base" href="/login">
                  <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">chevron_left</span>
                  <span>Back to Login</span>
                </a>
              </div>
            </form>
            
            {/* Footer Status */}
            <div className="mt-lg sm:mt-xl pt-lg border-t border-outline-variant/30">
              <div className="flex items-center gap-md text-outline">
                <div className="flex items-center gap-sm">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  <span className="font-mono-label text-mono-label text-sm sm:text-base">Server Status: Online</span>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-sm">help</span>
                  <span className="font-mono-label text-mono-label cursor-pointer hover:text-on-surface text-sm sm:text-base">Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Visual Polish: Decorative Gradients */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none z-[-1]"></div>
      <div className="fixed bottom-0 left-0 w-64 h-64 bg-tertiary/5 blur-[100px] pointer-events-none z-[-1]"></div>
    </div>
  )
}
