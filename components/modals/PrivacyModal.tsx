'use client'

export function PrivacyModalContent() {
  return (
    <div className="space-y-lg md:space-y-xl lg:space-y-2xl">
      {/* Header Section */}
      <div className="mb-lg md:mb-xl lg:mb-2xl">
        <div className="inline-flex items-center gap-2 px-md py-xs glass-panel rounded-full border-primary/20 mb-sm md:mb-md lg:mb-lg">
          <span className="material-symbols-outlined text-tertiary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>privacy_tip</span>
          <span className="font-mono-label text-mono-label text-tertiary uppercase tracking-widest">Privacy Protocol</span>
        </div>
        <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed max-w-3xl text-sm md:text-base lg:text-lg">
          Your privacy is fundamental to our mission. This policy outlines how InsightFlow collects, uses, and protects your data across our intelligence platform.
        </p>
        <div className="mt-sm text-sm text-on-surface-variant">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-lg md:space-y-xl lg:space-y-2xl">
        {/* Data Collection */}
        <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
          <div className="flex items-start gap-md mb-md md:mb-lg lg:mb-2xl">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
              <span className="material-symbols-outlined text-primary">data_object</span>
            </div>
            <div className="flex-1">
              <h3 className="font-h2 text-h2 text-on-surface mb-sm md:mb-md lg:mb-lg text-lg md:text-xl lg:text-2xl">Data Collection</h3>
              <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm md:text-base lg:text-lg">
                We collect only the data necessary to provide our semantic intelligence services. This includes document uploads, analysis queries, and usage patterns that help us improve our algorithms.
              </p>
              <ul className="space-y-sm md:space-y-md lg:space-y-lg">
                <li className="flex items-start gap-sm md:gap-md lg:gap-lg">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-xs">check_circle</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Document content and metadata for analysis</span>
                </li>
                <li className="flex items-start gap-sm md:gap-md lg:gap-lg">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-xs">check_circle</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Query patterns and interaction data</span>
                </li>
                <li className="flex items-start gap-sm md:gap-md lg:gap-lg">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-xs">check_circle</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Account authentication and preferences</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Usage */}
        <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
          <div className="flex items-start gap-md mb-md md:mb-lg lg:mb-2xl">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20 flex-shrink-0">
              <span className="material-symbols-outlined text-secondary">analytics</span>
            </div>
            <div className="flex-1">
              <h3 className="font-h2 text-h2 text-on-surface mb-sm md:mb-md lg:mb-lg text-lg md:text-xl lg:text-2xl">Data Usage</h3>
              <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm md:text-base lg:text-lg">
                Your data is used exclusively to power our semantic analysis engine and improve your experience. We never sell your data to third parties or use it for advertising purposes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg lg:gap-2xl">
                <div className="p-md bg-surface-container/50 border border-outline-variant rounded-lg">
                  <span className="material-symbols-outlined text-primary mb-sm">psychology</span>
                  <h4 className="font-mono-label text-mono-label text-on-surface mb-xs text-sm md:text-base lg:text-lg">Semantic Analysis</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Processing documents to extract meaning and relationships</p>
                </div>
                <div className="p-md bg-surface-container/50 border border-outline-variant rounded-lg">
                  <span className="material-symbols-outlined text-tertiary mb-sm">search</span>
                  <h4 className="font-mono-label text-mono-label text-on-surface mb-xs text-sm md:text-base lg:text-lg">Query Processing</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Answering questions based on your knowledge base</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
          <div className="flex items-start gap-md mb-md md:mb-lg lg:mb-2xl">
            <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center border border-tertiary/20 flex-shrink-0">
              <span className="material-symbols-outlined text-tertiary">security</span>
            </div>
            <div className="flex-1">
              <h3 className="font-h2 text-h2 text-on-surface mb-sm md:mb-md lg:mb-lg text-lg md:text-xl lg:text-2xl">Data Protection</h3>
              <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm md:text-base lg:text-lg">
                We implement industry-leading security measures to protect your data, including end-to-end encryption, secure storage, and regular security audits.
              </p>
              <div className="space-y-sm md:space-y-md lg:space-y-lg">
                <div className="flex items-center gap-sm md:gap-md lg:gap-lg">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  <span className="font-mono-label text-mono-label text-on-surface text-sm md:text-base lg:text-lg">AES-256 Encryption</span>
                </div>
                <div className="flex items-center gap-sm md:gap-md lg:gap-lg">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="font-mono-label text-mono-label text-on-surface text-sm md:text-base lg:text-lg">Secure Data Centers</span>
                </div>
                <div className="flex items-center gap-sm md:gap-md lg:gap-lg">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="font-mono-label text-mono-label text-on-surface text-sm md:text-base lg:text-lg">Regular Security Audits</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
          <div className="flex items-start gap-md mb-md md:mb-lg lg:mb-2xl">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
              <span className="material-symbols-outlined text-primary">gavel</span>
            </div>
            <div className="flex-1">
              <h3 className="font-h2 text-h2 text-on-surface mb-sm md:mb-md lg:mb-lg text-lg md:text-xl lg:text-2xl">Your Rights</h3>
              <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm md:text-base lg:text-lg">
                You maintain full control over your data with rights to access, modify, export, or delete your information at any time.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg lg:gap-2xl">
                <div className="space-y-sm md:space-y-md lg:space-y-lg">
                  <h4 className="font-mono-label text-mono-label text-on-surface mb-xs text-sm md:text-base lg:text-lg">Access & Portability</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Download your data in standard formats</p>
                </div>
                <div className="space-y-sm md:space-y-md lg:space-y-lg">
                  <h4 className="font-mono-label text-mono-label text-on-surface">Deletion & Retention</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Request deletion of your data anytime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
          <div className="flex items-start gap-md md:gap-lg lg:gap-2xl">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20 flex-shrink-0">
              <span className="material-symbols-outlined text-secondary">contact_support</span>
            </div>
            <div className="flex-1">
              <h3 className="font-h2 text-h2 text-on-surface mb-sm md:mb-md lg:mb-lg text-lg md:text-xl lg:text-2xl">Contact Us</h3>
              <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm md:text-base lg:text-lg">
                Questions about this privacy policy or your data? Our privacy team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-md md:gap-lg lg:gap-2xl">
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
      <div className="mt-lg pt-md border-t border-outline-variant/30">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-md md:gap-lg lg:gap-2xl">
          <p className="font-body-sm text-body-sm text-on-surface-variant text-sm md:text-base lg:text-lg">
            &copy; 2024 InsightFlow AI. All rights reserved.
          </p>
          <div className="flex items-center gap-lg md:gap-2xl lg:gap-3xl">
            <span className="font-body-sm text-body-sm text-primary text-sm md:text-base lg:text-lg">Terms of Service</span>
            <span className="font-body-sm text-body-sm text-primary text-sm md:text-base lg:text-lg">Back to Login</span>
          </div>
        </div>
      </div>
    </div>
  )
}
