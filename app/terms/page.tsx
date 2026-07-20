'use client'

import Link from 'next/link'

export default function TermsPage() {
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
              <span className="material-symbols-outlined text-tertiary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>gavel</span>
              <span className="font-mono-label text-mono-label text-tertiary uppercase tracking-widest">Legal Agreement</span>
            </div>
            <h1 className="font-h1 text-h1 text-on-surface mb-md">Terms of Service</h1>
            <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed max-w-3xl">
              These terms govern your use of InsightFlow's semantic intelligence platform. By accessing our services, you agree to these conditions.
            </p>
            <div className="mt-md text-sm text-on-surface-variant">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-xl">
            {/* Acceptance of Terms */}
            <section className="p-lg bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
              <div className="flex items-start gap-md mb-md">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-h2 text-h2 text-on-surface mb-sm">Acceptance of Terms</h2>
                  <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed">
                    By creating an account and using InsightFlow, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
                  </p>
                </div>
              </div>
            </section>

            {/* Service Description */}
            <section className="p-lg bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
              <div className="flex items-start gap-md mb-md">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20 flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary">psychology</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-h2 text-h2 text-on-surface mb-sm">Service Description</h2>
                  <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md">
                    InsightFlow provides semantic analysis and knowledge management services including:
                  </p>
                  <ul className="space-y-sm">
                    <li className="flex items-start gap-sm">
                      <span className="material-symbols-outlined text-tertiary text-sm mt-xs">arrow_right</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Document semantic processing and analysis</span>
                    </li>
                    <li className="flex items-start gap-sm">
                      <span className="material-symbols-outlined text-tertiary text-sm mt-xs">arrow_right</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Knowledge graph creation and management</span>
                    </li>
                    <li className="flex items-start gap-sm">
                      <span className="material-symbols-outlined text-tertiary text-sm mt-xs">arrow_right</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Natural language query and search capabilities</span>
                    </li>
                    <li className="flex items-start gap-sm">
                      <span className="material-symbols-outlined text-tertiary text-sm mt-xs">arrow_right</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Collaborative intelligence workspaces</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="p-lg bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
              <div className="flex items-start gap-md mb-md">
                <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center border border-tertiary/20 flex-shrink-0">
                  <span className="material-symbols-outlined text-tertiary">assignment_ind</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-h2 text-h2 text-on-surface mb-sm">User Responsibilities</h2>
                  <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md">
                    As a user of InsightFlow, you agree to:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div className="space-y-sm">
                      <h3 className="font-mono-label text-mono-label text-on-surface">Content Compliance</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Ensure all uploaded content complies with applicable laws</p>
                    </div>
                    <div className="space-y-sm">
                      <h3 className="font-mono-label text-mono-label text-on-surface">Account Security</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Maintain the security of your account credentials</p>
                    </div>
                    <div className="space-y-sm">
                      <h3 className="font-mono-label text-mono-label text-on-surface">Proper Usage</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Use services for intended business purposes only</p>
                    </div>
                    <div className="space-y-sm">
                      <h3 className="font-mono-label text-mono-label text-on-surface">Data Accuracy</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Provide accurate information when required</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="p-lg bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
              <div className="flex items-start gap-md mb-md">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">copyright</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-h2 text-h2 text-on-surface mb-sm">Intellectual Property</h2>
                  <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md">
                    You retain ownership of all content you upload to InsightFlow. We grant you a license to use our software and services, while you grant us the right to process your content to provide our services.
                  </p>
                  <div className="space-y-sm">
                    <div className="flex items-center gap-sm">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span className="font-mono-label text-mono-label text-on-surface">Your Content</span>
                    </div>
                    <div className="flex items-center gap-sm">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      <span className="font-mono-label text-mono-label text-on-surface">Our Technology</span>
                    </div>
                    <div className="flex items-center gap-sm">
                      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                      <span className="font-mono-label text-mono-label text-on-surface">Service Marks</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Availability */}
            <section className="p-lg bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
              <div className="flex items-start gap-md mb-md">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20 flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary">schedule</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-h2 text-h2 text-on-surface mb-sm">Service Availability</h2>
                  <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md">
                    We strive to maintain high service availability but cannot guarantee uninterrupted access. We may temporarily suspend services for maintenance, updates, or other operational requirements.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                    <div className="p-md bg-surface-container/50 border border-outline-variant rounded-lg text-center">
                      <div className="font-mono-label text-mono-label text-primary mb-xs">99.99%</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">Uptime Target</div>
                    </div>
                    <div className="p-md bg-surface-container/50 border border-outline-variant rounded-lg text-center">
                      <div className="font-mono-label text-mono-label text-tertiary mb-xs">24/7</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">Support</div>
                    </div>
                    <div className="p-md bg-surface-container/50 border border-outline-variant rounded-lg text-center">
                      <div className="font-mono-label text-mono-label text-secondary mb-xs">Global</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">Infrastructure</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="p-lg bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
              <div className="flex items-start gap-md mb-md">
                <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center border border-tertiary/20 flex-shrink-0">
                  <span className="material-symbols-outlined text-tertiary">warning</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-h2 text-h2 text-on-surface mb-sm">Limitation of Liability</h2>
                  <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md">
                    InsightFlow is provided "as is" without warranties of any kind. Our liability is limited to the maximum extent permitted by applicable law.
                  </p>
                  <div className="space-y-sm">
                    <div className="flex items-start gap-sm">
                      <span className="material-symbols-outlined text-tertiary text-sm mt-xs">info</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Service availability not guaranteed</span>
                    </div>
                    <div className="flex items-start gap-sm">
                      <span className="material-symbols-outlined text-tertiary text-sm mt-xs">info</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Results may vary based on input quality</span>
                    </div>
                    <div className="flex items-start gap-sm">
                      <span className="material-symbols-outlined text-tertiary text-sm mt-xs">info</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Users responsible for content verification</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section className="p-lg bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
              <div className="flex items-start gap-md mb-md">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">logout</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-h2 text-h2 text-on-surface mb-sm">Termination</h2>
                  <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed">
                    You may terminate your account at any time. We reserve the right to suspend or terminate accounts that violate these terms or applicable laws.
                  </p>
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
                  <h2 className="font-h2 text-h2 text-on-surface mb-sm">Legal Questions</h2>
                  <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md">
                    For questions about these terms or legal matters, please contact our legal team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-md">
                    <a href="mailto:legal@insightflow.io" className="inline-flex items-center gap-sm text-primary hover:text-primary-fixed transition-colors">
                      <span className="material-symbols-outlined text-sm">email</span>
                      legal@insightflow.io
                    </a>
                    <a href="#" className="inline-flex items-center gap-sm text-primary hover:text-primary-fixed transition-colors">
                      <span className="material-symbols-outlined text-sm">description</span>
                      Request Legal Review
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
                <Link href="/privacy" className="font-body-sm text-body-sm text-primary hover:text-primary-fixed transition-colors">
                  Privacy Policy
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
