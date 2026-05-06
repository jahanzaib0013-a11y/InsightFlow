'use client'

export function ApiStatusModalContent() {
  return (
    <div className="space-y-lg">
      {/* Header Section */}
      <div className="mb-lg">
        <div className="inline-flex items-center gap-2 px-md py-xs glass-panel rounded-full border-primary/20 mb-sm">
          <span className="material-symbols-outlined text-tertiary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>monitoring</span>
          <span className="font-mono-label text-mono-label text-tertiary uppercase tracking-widest text-xs sm:text-sm">API Status</span>
        </div>
        <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed max-w-3xl text-sm sm:text-base">
          Real-time status and performance metrics for InsightFlow's semantic intelligence API. Monitor system health, response times, and service availability.
        </p>
        <div className="mt-sm text-sm text-on-surface-variant">
          Last updated: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </div>
      </div>

      {/* Overall Status */}
      <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
        <div className="flex items-start gap-md mb-md">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
            <span className="material-symbols-outlined text-primary">check_circle</span>
          </div>
          <div className="flex-1">
            <h3 className="font-h2 text-h2 text-on-surface mb-sm text-lg sm:text-xl lg:text-h2">System Status</h3>
            <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm sm:text-base">
              All systems operational and performing within expected parameters.
            </p>
          </div>
        </div>
      </section>

      {/* Service Status Grid */}
      <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
        <h3 className="font-h2 text-h2 text-on-surface mb-md">Service Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="p-md bg-surface-container/50 border border-outline-variant rounded-lg">
            <div className="flex items-center justify-between mb-sm">
              <div className="flex items-center gap-sm">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                <span className="font-mono-label text-mono-label text-on-surface text-sm sm:text-base">API Gateway</span>
              </div>
              <span className="font-body-sm text-body-sm text-tertiary text-xs sm:text-sm">Operational</span>
            </div>
            <div className="space-y-xs">
              <div className="flex justify-between text-xs">
                <span className="text-on-surface-variant">Response Time</span>
                <span className="text-tertiary">45ms</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-on-surface-variant">Success Rate</span>
                <span className="text-tertiary">99.98%</span>
              </div>
            </div>
          </div>

          <div className="p-md bg-surface-container/50 border border-outline-variant rounded-lg">
            <div className="flex items-center justify-between mb-sm">
              <div className="flex items-center gap-sm">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                <span className="font-mono-label text-mono-label text-on-surface text-sm sm:text-base">Semantic Engine</span>
              </div>
              <span className="font-body-sm text-body-sm text-tertiary text-xs sm:text-sm">Operational</span>
            </div>
            <div className="space-y-xs">
              <div className="flex justify-between text-xs">
                <span className="text-on-surface-variant">Processing Time</span>
                <span className="text-tertiary">120ms</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-on-surface-variant">Queue Length</span>
                <span className="text-tertiary">12</span>
              </div>
            </div>
          </div>

          <div className="p-md bg-surface-container/50 border border-outline-variant rounded-lg">
            <div className="flex items-center justify-between mb-sm">
              <div className="flex items-center gap-sm">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                <span className="font-mono-label text-mono-label text-on-surface text-sm sm:text-base">Database</span>
              </div>
              <span className="font-body-sm text-body-sm text-tertiary text-xs sm:text-sm">Operational</span>
            </div>
            <div className="space-y-xs">
              <div className="flex justify-between text-xs">
                <span className="text-on-surface-variant">Query Time</span>
                <span className="text-tertiary">8ms</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-on-surface-variant">Connections</span>
                <span className="text-tertiary">89/100</span>
              </div>
            </div>
          </div>

          <div className="p-md bg-surface-container/50 border border-outline-variant rounded-lg">
            <div className="flex items-center justify-between mb-sm">
              <div className="flex items-center gap-sm">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                <span className="font-mono-label text-mono-label text-on-surface text-sm sm:text-base">CDN</span>
              </div>
              <span className="font-body-sm text-body-sm text-tertiary text-xs sm:text-sm">Operational</span>
            </div>
            <div className="space-y-xs">
              <div className="flex justify-between text-xs">
                <span className="text-on-surface-variant">Cache Hit Rate</span>
                <span className="text-tertiary">94.2%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-on-surface-variant">Bandwidth</span>
                <span className="text-tertiary">1.2 GB/s</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
        <h3 className="font-h2 text-h2 text-on-surface mb-md">Recent Incidents</h3>
        <div className="space-y-sm">
          <div className="p-md bg-surface-container/30 border border-outline-variant/50 rounded-lg">
            <div className="flex items-start gap-sm">
              <span className="w-2 h-2 rounded-full bg-tertiary mt-xs"></span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-xs">
                  <span className="font-mono-label text-mono-label text-on-surface text-sm sm:text-base">Scheduled Maintenance</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">30 days ago</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">Database optimization completed successfully</p>
              </div>
            </div>
          </div>
          
          <div className="p-md bg-surface-container/30 border border-outline-variant/50 rounded-lg">
            <div className="flex items-start gap-sm">
              <span className="w-2 h-2 rounded-full bg-secondary mt-xs"></span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-xs">
                  <span className="font-mono-label text-mono-label text-on-surface text-sm sm:text-base">Minor Performance Degradation</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">Yesterday</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">Brief slowdown in semantic processing. Resolved within 15 minutes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
        <h3 className="font-h2 text-h2 text-on-surface mb-md">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <div className="p-md bg-surface-container/50 border border-outline-variant rounded-lg text-center">
            <div className="font-mono-label text-mono-label text-primary mb-xs text-sm sm:text-base">99.99%</div>
            <div className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">Uptime (30d)</div>
          </div>
          <div className="p-md bg-surface-container/50 border border-outline-variant rounded-lg text-center">
            <div className="font-mono-label text-mono-label text-tertiary mb-xs text-sm sm:text-base">142ms</div>
            <div className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">Avg Response</div>
          </div>
          <div className="p-md bg-surface-container/50 border border-outline-variant rounded-lg text-center">
            <div className="font-mono-label text-mono-label text-secondary mb-xs text-sm sm:text-base">1.2M</div>
            <div className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">Daily Requests</div>
          </div>
        </div>
      </section>

      {/* Regional Status */}
      <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
        <h3 className="font-h2 text-h2 text-on-surface mb-md">Regional Status</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          <div className="text-center p-md bg-surface-container/50 border border-outline-variant rounded-lg">
            <div className="flex items-center justify-center gap-xs mb-xs">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="font-mono-label text-mono-label text-on-surface text-sm sm:text-base">US East</span>
            </div>
            <span className="font-body-sm text-body-sm text-tertiary text-xs sm:text-sm">Operational</span>
          </div>
          <div className="text-center p-md bg-surface-container/50 border border-outline-variant rounded-lg">
            <div className="flex items-center justify-center gap-xs mb-xs">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="font-mono-label text-mono-label text-on-surface text-sm sm:text-base">US West</span>
            </div>
            <span className="font-body-sm text-body-sm text-tertiary text-xs sm:text-sm">Operational</span>
          </div>
          <div className="text-center p-md bg-surface-container/50 border border-outline-variant rounded-lg">
            <div className="flex items-center justify-center gap-xs mb-xs">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="font-mono-label text-mono-label text-on-surface text-sm sm:text-base">EU Central</span>
            </div>
            <span className="font-body-sm text-body-sm text-tertiary text-xs sm:text-sm">Operational</span>
          </div>
          <div className="text-center p-md bg-surface-container/50 border border-outline-variant rounded-lg">
            <div className="flex items-center justify-center gap-xs mb-xs">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="font-mono-label text-mono-label text-on-surface text-sm sm:text-base">Asia Pacific</span>
            </div>
            <span className="font-body-sm text-body-sm text-tertiary text-xs sm:text-sm">Operational</span>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="p-md bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 rounded-xl">
        <div className="flex items-start gap-md">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
            <span className="material-symbols-outlined text-primary">notifications</span>
          </div>
          <div className="flex-1">
            <h3 className="font-h2 text-h2 text-on-surface mb-sm text-lg sm:text-xl lg:text-h2">Status Notifications</h3>
            <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-md text-sm sm:text-base">
              Get notified about service status and incidents via email, Slack, or webhook.
            </p>
            <div className="flex flex-col sm:flex-row gap-md">
              <button className="inline-flex items-center gap-sm bg-primary-container text-on-primary-container font-mono-label text-mono-label px-md py-sm rounded-lg hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-sm">email</span>
                Subscribe to Updates
              </button>
              <a href="#" className="inline-flex items-center gap-sm text-primary hover:text-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-sm">rss_feed</span>
                RSS Feed
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-lg pt-md border-t border-outline-variant/30">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-md">
          <p className="font-body-sm text-body-sm text-on-surface-variant text-xs sm:text-sm">
            Status page updates automatically every 30 seconds
          </p>
          <div className="flex items-center gap-lg">
            <a href="#" className="inline-flex items-center gap-sm text-primary hover:text-primary-fixed transition-colors">
              <span className="material-symbols-outlined text-sm">history</span>
              Incident History
            </a>
            <a href="#" className="inline-flex items-center gap-sm text-primary hover:text-primary-fixed transition-colors">
              <span className="material-symbols-outlined text-sm">contact_support</span>
              Report Issue
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
