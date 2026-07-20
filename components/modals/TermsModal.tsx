'use client'

export function TermsModalContent() {
  return (
    <div className="space-y-lg">
      {/* Header Section */}
      <div className="mb-lg">
        <div className="inline-flex items-center gap-2 px-md py-xs glass-panel rounded-full border-primary/20 mb-sm">
          <span className="material-symbols-outlined text-tertiary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>gavel</span>
          <span className="font-mono-label text-mono-label text-tertiary uppercase tracking-widest text-xs sm:text-sm">Terms of Service</span>
        </div>
        <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed max-w-3xl text-sm sm:text-base">
          These terms govern your use of InsightFlow's AI-powered knowledge architecture platform. By accessing our services, you agree to these terms.
        </p>
        <div className="mt-sm text-sm text-on-surface-variant">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-lg">
        {/* Acceptance of Terms */}
        <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
          <div className="flex items-start gap-md mb-md">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
              <span className="material-symbols-outlined text-primary">check_circle</span>
            </div>
            <div className="flex-1">
              {/* Section 1: Acceptance of Terms */}
              <div className="mb-lg">
                <h3 className="font-h3 text-h3 sm:text-h3 text-on-surface mb-md text-lg sm:text-xl lg:text-h3">1. Acceptance of Terms</h3>
                <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm sm:text-base">
                  By accessing and using InsightFlow, you accept and agree to be bound by the terms and conditions outlined in this agreement. If you do not agree to these terms, you may not use our services.
                </p>
                <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed text-sm sm:text-base">
                  These terms apply to all users of our platform, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Description */}
        <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
          <div className="flex items-start gap-md mb-md">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20 flex-shrink-0">
              <span className="material-symbols-outlined text-secondary">psychology</span>
            </div>
            <div className="flex-1">
              <h3 className="font-h2 text-h2 text-on-surface mb-sm">Service Description</h3>
              <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm sm:text-base">
                InsightFlow provides AI-powered knowledge architecture services including:
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
        <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
          <div className="flex items-start gap-md mb-md">
            <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center border border-tertiary/20 flex-shrink-0">
              <span className="material-symbols-outlined text-tertiary">assignment_ind</span>
            </div>
            <div className="flex-1">
              {/* Section 2: User Responsibilities */}
              <div className="mb-lg">
                <h3 className="font-h3 text-h3 sm:text-h3 text-on-surface mb-md text-lg sm:text-xl lg:text-h3">2. User Responsibilities</h3>
                <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm sm:text-base">
                  As a user of InsightFlow, you agree to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="space-y-sm">
                    <h4 className="font-mono-label text-mono-label text-on-surface">Content Compliance</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Ensure all uploaded content complies with applicable laws</p>
                  </div>
                  <div className="space-y-sm">
                    <h4 className="font-mono-label text-mono-label text-on-surface">Account Security</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Maintain the security of your account credentials</p>
                  </div>
                  <div className="space-y-sm">
                    <h4 className="font-mono-label text-mono-label text-on-surface">Proper Usage</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Use services for intended business purposes only</p>
                  </div>
                  <div className="space-y-sm">
                    <h4 className="font-mono-label text-mono-label text-on-surface">Data Accuracy</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Provide accurate information when required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
          <div className="flex items-start gap-md mb-md">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
              <span className="material-symbols-outlined text-primary">copyright</span>
            </div>
            <div className="flex-1">
              {/* Section 4: Intellectual Property */}
              <div className="mb-lg">
                <h3 className="font-h3 text-h3 sm:text-h3 text-on-surface mb-md text-lg sm:text-xl lg:text-h3">4. Intellectual Property</h3>
                <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm sm:text-base">
                  The service and its original content, features, and functionality are and will remain the exclusive property of InsightFlow and its licensors. The service is protected by copyright, trademark, and other laws.
                </p>
                <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed text-sm sm:text-base">
                  You retain ownership of any content you upload to our platform. By uploading content, you grant us a license to use, process, and analyze your content solely to provide our services to you.
                </p>
              </div>
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
        <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
          <div className="flex items-start gap-md mb-md">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20 flex-shrink-0">
              <span className="material-symbols-outlined text-secondary">schedule</span>
            </div>
            <div className="flex-1">
              <h3 className="font-h2 text-h2 text-on-surface mb-sm">Service Availability</h3>
              <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm sm:text-base">
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
        <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
          <div className="flex items-start gap-md mb-md">
            <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center border border-tertiary/20 flex-shrink-0">
              <span className="material-symbols-outlined text-tertiary">warning</span>
            </div>
            <div className="flex-1">
              {/* Section 5: Limitation of Liability */}
              <div className="mb-lg">
                <h3 className="font-h3 text-h3 sm:text-h3 text-on-surface mb-md text-lg sm:text-xl lg:text-h3">5. Limitation of Liability</h3>
                <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm sm:text-base">
                  In no event shall InsightFlow, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
                <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed text-sm sm:text-base">
                  Our total liability to you for any cause of action whatsoever, and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to us for the service during the term of use.
                </p>
              </div>
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

        {/* Contact */}
        <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
          <div className="flex items-start gap-md">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20 flex-shrink-0">
              <span className="material-symbols-outlined text-secondary">contact_support</span>
            </div>
            <div className="flex-1">
              <h3 className="font-h2 text-h2 text-on-surface mb-sm">Legal Questions</h3>
              <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm sm:text-base">
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
      <div className="mt-lg pt-md border-t border-outline-variant/30">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-md">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            &copy; 2024 InsightFlow AI. All rights reserved.
          </p>
          <div className="flex items-center gap-lg">
            <span className="font-body-sm text-body-sm text-primary">Privacy Policy</span>
            <span className="font-body-sm text-body-sm text-primary">Back to Login</span>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-xl pt-lg border-t border-outline-variant/30">
        <p className="font-body-main text-body-main text-on-surface-variant mb-sm text-sm sm:text-base">
          For questions about these Terms of Service, please contact us:
        </p>
        <div className="space-y-xs">
          <p className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">Email: legal@insightflow.io</p>
          <p className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">Address: 123 InsightFlow Lane, Tech City, CA 94025</p>
        </div>
      </div>
    </div>
  )
}
