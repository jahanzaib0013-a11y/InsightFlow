'use client'

import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="bg-background text-on-background font-body-main selection:bg-primary-container selection:text-on-primary-container">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-blue-600 dark:text-blue-500">insights</span>
          <span className="text-xl font-bold tracking-tighter text-slate-50 dark:text-slate-50 font-sans antialiased tracking-tight">InsightFlow</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-slate-400 hover:text-blue-400 transition-colors duration-200 Active:opacity-80 scale-95 transition-all">
            <span className="material-symbols-outlined">dark_mode</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-lg py-xl">
          {/* Header Section */}
          <div className="mb-xl">
            <div className="inline-flex items-center gap-2 px-md py-xs glass-panel rounded-full border-primary/20 mb-md">
              <span className="material-symbols-outlined text-tertiary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>privacy_tip</span>
              <span className="font-mono-label text-mono-label text-tertiary uppercase tracking-widest">Privacy Protocol</span>
            </div>
            <h1 className="font-h1 text-h1 text-on-surface mb-md">Privacy Policy</h1>
            <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed max-w-3xl">
              Your privacy is fundamental to our mission. This policy outlines how InsightFlow collects, uses, and protects your data across our intelligence platform.
            </p>
            <div className="mt-md text-sm text-on-surface-variant">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-xl">
            {/* Data Collection */}
            <section className="p-lg bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
              <div className="flex items-start gap-md mb-md">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">data_object</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-h2 text-h2 text-on-surface mb-sm">Data Collection</h2>
                  <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md">
                    We collect only the data necessary to provide our semantic intelligence services. This includes document uploads, analysis queries, and usage patterns that help us improve our algorithms.
                  </p>
                  <ul className="space-y-sm">
                    <li className="flex items-start gap-sm">
                      <span className="material-symbols-outlined text-tertiary text-sm mt-xs">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Document content and metadata for analysis</span>
                    </li>
                    <li className="flex items-start gap-sm">
                      <span className="material-symbols-outlined text-tertiary text-sm mt-xs">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Query patterns and interaction data</span>
                    </li>
                    <li className="flex items-start gap-sm">
                      <span className="material-symbols-outlined text-tertiary text-sm mt-xs">check_circle</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Account authentication and preferences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Usage */}
            <section className="p-lg bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
              <div className="flex items-start gap-md mb-md">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20 flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary">analytics</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-h2 text-h2 text-on-surface mb-sm">Data Usage</h2>
                  <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md">
                    Your data is used exclusively to power our semantic analysis engine and improve your experience. We never sell your data to third parties or use it for advertising purposes.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div className="p-md bg-surface-container/50 border border-outline-variant rounded-lg">
                      <span className="material-symbols-outlined text-primary mb-sm">psychology</span>
                      <h3 className="font-mono-label text-mono-label text-on-surface mb-xs">Semantic Analysis</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Processing documents to extract meaning and relationships</p>
                    </div>
                    <div className="p-md bg-surface-container/50 border border-outline-variant rounded-lg">
                      <span className="material-symbols-outlined text-tertiary mb-sm">search</span>
                      <h3 className="font-mono-label text-mono-label text-on-surface mb-xs">Query Processing</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Answering questions based on your knowledge base</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Protection */}
            <section className="p-lg bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
              <div className="flex items-start gap-md mb-md">
                <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center border border-tertiary/20 flex-shrink-0">
                  <span className="material-symbols-outlined text-tertiary">security</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-h2 text-h2 text-on-surface mb-sm">Data Protection</h2>
                  <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md">
                    We implement industry-leading security measures to protect your data, including end-to-end encryption, secure storage, and regular security audits.
                  </p>
                  <div className="space-y-sm">
                    <div className="flex items-center gap-sm">
                      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                      <span className="font-mono-label text-mono-label text-on-surface">AES-256 Encryption</span>
                    </div>
                    <div className="flex items-center gap-sm">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span className="font-mono-label text-mono-label text-on-surface">Secure Data Centers</span>
                    </div>
                    <div className="flex items-center gap-sm">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      <span className="font-mono-label text-mono-label text-on-surface">Regular Security Audits</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="p-lg bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
              <div className="flex items-start gap-md mb-md">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">gavel</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-h2 text-h2 text-on-surface mb-sm">Your Rights</h2>
                  <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md">
                    You maintain full control over your data with rights to access, modify, export, or delete your information at any time.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div className="space-y-sm">
                      <h3 className="font-mono-label text-mono-label text-on-surface">Access & Portability</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Download your data in standard formats</p>
                    </div>
                    <div className="space-y-sm">
                      <h3 className="font-mono-label text-mono-label text-on-surface">Deletion & Retention</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Request deletion of your data anytime</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="p-lg bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
              <div className="flex items-start gap-md">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20 flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary">contact_support</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-h2 text-h2 text-on-surface mb-sm">Contact Us</h2>
                  <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md">
                    Questions about this privacy policy or your data? Our privacy team is here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-md">
                    <a href="mailto:privacy@insightflow.io" className="inline-flex items-center gap-sm text-primary hover:text-primary-fixed transition-colors">
                      <span className="material-symbols-outlined text-sm">email</span>
                      privacy@insightflow.io
                    </a>
                    <a href="#" className="inline-flex items-center gap-sm text-primary hover:text-primary-fixed transition-colors">
                      <span className="material-symbols-outlined text-sm">help</span>
                      Privacy Help Center
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-xl pt-lg border-t border-outline-variant/30">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-md">
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                © 2024 InsightFlow AI. All rights reserved.
              </p>
              <div className="flex items-center gap-lg">
                <Link href="/terms" className="font-body-sm text-body-sm text-primary hover:text-primary-fixed transition-colors">
                  Terms of Service
                </Link>
                <Link href="/login" className="font-body-sm text-body-sm text-primary hover:text-primary-fixed transition-colors">
                  Back to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Visual Polish */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none z-[-1]"></div>
      <div className="fixed bottom-0 left-0 w-64 h-64 bg-tertiary/5 blur-[100px] pointer-events-none z-[-1]"></div>
    </div>
  )
}
