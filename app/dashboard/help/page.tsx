'use client'

export default function HelpPage() {
  return (
    <main className="flex-1 overflow-y-auto">
      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-margin_safe py-xl">
        {/* Hero / Header Section */}
        <div className="mb-xl">
          <h1 className="font-h1 text-h1 text-on-surface mb-md">Help Center</h1>
          <p className="font-body-main text-body-main text-on-surface-variant max-w-2xl">
            Find answers to common questions and learn how to get the most out of InsightFlow.
          </p>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg mb-xl">
          {/* Getting Started */}
          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-md group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">rocket_launch</span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface mb-sm">Getting Started</h3>
            <p className="font-body-sm text-on-surface-variant mb-md">
              Learn the basics of InsightFlow and how to upload your first document.
            </p>
            <button className="text-primary font-mono-label flex items-center gap-1 hover:underline">
              View Articles <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          {/* Document Upload */}
          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-md group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">upload_file</span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface mb-sm">Document Upload</h3>
            <p className="font-body-sm text-on-surface-variant mb-md">
              Supported file formats, size limits, and best practices for document processing.
            </p>
            <button className="text-primary font-mono-label flex items-center gap-1 hover:underline">
              View Articles <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          {/* Search & Analysis */}
          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-md group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">search</span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface mb-sm">Search & Analysis</h3>
            <p className="font-body-sm text-on-surface-variant mb-md">
              How to search your documents and extract insights using AI-powered queries.
            </p>
            <button className="text-primary font-mono-label flex items-center gap-1 hover:underline">
              View Articles <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          {/* Troubleshooting */}
          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-md group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">build</span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface mb-sm">Troubleshooting</h3>
            <p className="font-body-sm text-on-surface-variant mb-md">
              Common issues and solutions for upload errors and processing problems.
            </p>
            <button className="text-primary font-mono-label flex items-center gap-1 hover:underline">
              View Articles <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          {/* Account & Settings */}
          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-md group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">manage_accounts</span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface mb-sm">Account & Settings</h3>
            <p className="font-body-sm text-on-surface-variant mb-md">
              Manage your profile, preferences, and subscription settings.
            </p>
            <button className="text-primary font-mono-label flex items-center gap-1 hover:underline">
              View Articles <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          {/* API & Integration */}
          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-md group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">code</span>
            </div>
            <h3 className="font-h3 text-h3 text-on-surface mb-sm">API & Integration</h3>
            <p className="font-body-sm text-on-surface-variant mb-md">
              Developer documentation and integration guides for advanced users.
            </p>
            <button className="text-primary font-mono-label flex items-center gap-1 hover:underline">
              View Articles <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-xl">
          <h2 className="font-h2 text-h2 text-on-surface mb-lg">Popular Articles</h2>
          <div className="space-y-md">
            <div className="bg-surface-container border border-outline-variant rounded-xl p-md hover:border-primary/50 transition-colors cursor-pointer">
              <div className="flex items-start gap-md">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-sm">article</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-body-main font-bold text-on-surface mb-sm">How to upload multiple documents at once</h4>
                  <p className="font-body-sm text-on-surface-variant">Learn how to use the bulk upload feature to process up to 20 files simultaneously.</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant rounded-xl p-md hover:border-primary/50 transition-colors cursor-pointer">
              <div className="flex items-start gap-md">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-sm">article</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-body-main font-bold text-on-surface mb-sm">Understanding AI search queries</h4>
                  <p className="font-body-sm text-on-surface-variant">Tips for writing effective natural language queries to get the best results from your documents.</p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container border border-outline-variant rounded-xl p-md hover:border-primary/50 transition-colors cursor-pointer">
              <div className="flex items-start gap-md">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-sm">article</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-body-main font-bold text-on-surface mb-sm">Supported file formats and size limits</h4>
                  <p className="font-body-sm text-on-surface-variant">Complete list of supported file types and maximum file sizes for optimal performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-secondary-container/20 border border-secondary/30 rounded-xl p-lg">
          <div className="flex items-center gap-3 mb-md">
            <span className="material-symbols-outlined text-secondary text-2xl">support_agent</span>
            <h3 className="font-h3 text-h3 text-on-surface">Still need help?</h3>
          </div>
          <p className="font-body-sm text-on-surface-variant mb-lg">
            Can't find what you're looking for? Our support team is here to help you.
          </p>
          <div className="flex flex-wrap gap-md">
            <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:brightness-110 transition-all">
              <span className="material-symbols-outlined">chat</span>
              Live Chat
            </button>
            <button className="bg-surface-container border border-outline-variant text-on-surface px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined">email</span>
              Email Support
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
