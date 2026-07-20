'use client'

export function DocumentationModalContent() {
  return (
    <div className="space-y-lg">
      {/* Header Section */}
      <div className="mb-lg">
        <div className="inline-flex items-center gap-2 px-md py-xs glass-panel rounded-full border-primary/20 mb-sm">
          <span className="material-symbols-outlined text-tertiary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>menu_book</span>
          <span className="font-mono-label text-mono-label text-tertiary uppercase tracking-widest text-xs sm:text-sm">Developer Resources</span>
        </div>
        <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed max-w-3xl text-sm sm:text-base">
          Complete documentation for integrating InsightFlow's semantic intelligence capabilities into your applications.
        </p>
        <div className="mt-sm text-sm text-on-surface-variant">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      {/* Quick Start */}
      <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
        <div className="flex items-start gap-md mb-md">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
            <span className="material-symbols-outlined text-primary">rocket_launch</span>
          </div>
          <div className="flex-1">
            <h3 className="font-h2 text-h2 text-on-surface mb-sm">Quick Start</h3>
            <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm sm:text-base">
              Get up and running with InsightFlow in minutes using our comprehensive guides and examples.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              <div className="space-y-sm">
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-xs">looks_one</span>
                  <div>
                    <h4 className="font-mono-label text-mono-label text-on-surface mb-xs text-sm sm:text-base">API Keys</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">Generate and manage your API credentials</p>
                  </div>
                </div>
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-xs">looks_two</span>
                  <div>
                    <h4 className="font-mono-label text-mono-label text-on-surface mb-xs text-sm sm:text-base">SDK Installation</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">Install our SDK for Python, JavaScript, or more</p>
                  </div>
                </div>
                <div className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-tertiary text-sm mt-xs">looks_3</span>
                  <div>
                    <h4 className="font-mono-label text-mono-label text-on-surface mb-xs text-sm sm:text-base">First Request</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">Make your first semantic analysis call</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
        <div className="flex items-start gap-md mb-md">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20 flex-shrink-0">
            <span className="material-symbols-outlined text-secondary">api</span>
          </div>
          <div className="flex-1">
            <h3 className="font-h2 text-h2 text-on-surface mb-sm">API Reference</h3>
            <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm sm:text-base">
              Complete API documentation with examples for all endpoints and parameters.
            </p>
            <div className="space-y-sm">
              <div className="flex items-center justify-between p-md bg-surface-container/30 border border-outline-variant/50 rounded-lg">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary text-sm">post_add</span>
                  <span className="font-mono-label text-mono-label text-on-surface">POST /analyze</span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Semantic analysis</span>
              </div>
              <div className="flex items-center justify-between p-md bg-surface-container/30 border border-outline-variant/50 rounded-lg">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-tertiary text-sm">search</span>
                  <span className="font-mono-label text-mono-label text-on-surface">GET /search</span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Query knowledge base</span>
              </div>
              <div className="flex items-center justify-between p-md bg-surface-container/30 border border-outline-variant/50 rounded-lg">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-secondary text-sm">upload_file</span>
                  <span className="font-mono-label text-mono-label text-on-surface">POST /upload</span>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">Document ingestion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDK Documentation */}
      <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
        <div className="flex items-start gap-md mb-md">
          <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center border border-tertiary/20 flex-shrink-0">
            <span className="material-symbols-outlined text-tertiary">code_blocks</span>
          </div>
          <div className="flex-1">
            <h3 className="font-h2 text-h2 text-on-surface mb-sm">SDK Documentation</h3>
            <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm sm:text-base">
              Official SDKs for popular programming languages with full documentation and examples.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
              <div className="text-center p-md bg-surface-container/50 border border-outline-variant rounded-lg">
                <span className="material-symbols-outlined text-primary text-2xl mb-xs">python</span>
                <h4 className="font-mono-label text-mono-label text-on-surface text-sm sm:text-base">Python</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">v2.1.0</p>
              </div>
              <div className="text-center p-md bg-surface-container/50 border border-outline-variant rounded-lg">
                <span className="material-symbols-outlined text-tertiary text-2xl mb-xs">javascript</span>
                <h4 className="font-mono-label text-mono-label text-on-surface text-sm sm:text-base">JavaScript</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">v2.0.3</p>
              </div>
              <div className="text-center p-md bg-surface-container/50 border border-outline-variant rounded-lg">
                <span className="material-symbols-outlined text-secondary text-2xl mb-xs">terminal</span>
                <h4 className="font-mono-label text-mono-label text-on-surface text-sm sm:text-base">Node.js</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">v2.0.3</p>
              </div>
              <div className="text-center p-md bg-surface-container/50 border border-outline-variant rounded-lg">
                <span className="material-symbols-outlined text-primary text-2xl mb-xs">data_object</span>
                <h4 className="font-mono-label text-mono-label text-on-surface text-sm sm:text-base">Go</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">v1.5.2</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
        <div className="flex items-start gap-md mb-md">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
            <span className="material-symbols-outlined text-primary">integration_instructions</span>
          </div>
          <div className="flex-1">
            <h3 className="font-h2 text-h2 text-on-surface mb-sm">Code Examples</h3>
            <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm sm:text-base">
              Ready-to-use code snippets for common use cases and integrations.
            </p>
            <div className="space-y-sm">
              <div className="p-md bg-surface-container/50 border border-outline-variant rounded-lg">
                <h4 className="font-mono-label text-mono-label text-on-surface mb-xs text-sm sm:text-base">Document Analysis</h4>
                <div className="font-mono-label text-mono-label text-on-surface-variant text-xs bg-surface-container-low p-sm rounded mt-xs mb-xs">
                  <div>insightflow.analyze(document_text)</div>
                  <div>.then(result {'=>'} console.log(result))</div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">Extract semantic meaning from any document</p>
              </div>
              <div className="p-md bg-surface-container/50 border border-outline-variant rounded-lg">
                <h4 className="font-mono-label text-mono-label text-on-surface mb-xs text-sm sm:text-base">Knowledge Search</h4>
                <div className="font-mono-label text-mono-label text-on-surface-variant text-xs bg-surface-container-low p-sm rounded mt-xs mb-xs">
                  <div>insightflow.search("What are the key findings?")</div>
                  <div>.then(results {'=>'} display_results(results))</div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">Query your knowledge base with natural language</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
        <div className="flex items-start gap-md">
          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20 flex-shrink-0">
            <span className="material-symbols-outlined text-secondary">help</span>
          </div>
          <div className="flex-1">
            <h3 className="font-h2 text-h2 text-on-surface mb-sm">Additional Resources</h3>
            <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm sm:text-base">
              Everything you need to succeed with InsightFlow.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="space-y-sm">
                <h4 className="font-mono-label text-mono-label text-on-surface text-sm sm:text-base">Learning</h4>
                <ul className="space-y-xs">
                  <li className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-tertiary text-sm">school</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">Video tutorials and guides</span>
                  </li>
                  <li className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-tertiary text-sm">article</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">Blog posts and best practices</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-sm">
                <h4 className="font-mono-label text-mono-label text-on-surface text-sm sm:text-base">Community</h4>
                <ul className="space-y-xs">
                  <li className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-primary text-sm">forum</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">Developer forum</span>
                  </li>
                  <li className="flex items-center gap-sm">
                    <span className="material-symbols-outlined text-primary text-sm">groups</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">Discord community</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-lg pt-md border-t border-outline-variant/30">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-md">
          <p className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">
            Need help? <a href="#" className="text-primary hover:text-primary-fixed transition-colors">Contact our support team</a>
          </p>
          <div className="flex items-center gap-lg">
            <a href="#" className="inline-flex items-center gap-sm text-primary hover:text-primary-fixed transition-colors text-xs sm:text-sm">
              <span className="material-symbols-outlined text-sm">description</span>
              Download PDF Guide
            </a>
            <a href="#" className="inline-flex items-center gap-sm text-primary hover:text-primary-fixed transition-colors text-xs sm:text-sm">
              <span className="material-symbols-outlined text-sm">play_arrow</span>
              Video Tutorials
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
