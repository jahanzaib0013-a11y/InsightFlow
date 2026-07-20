'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AnalysisConfigModal } from '@/components/modals/AnalysisConfigModal'

export default function DashboardPage() {
  const [isAnalysisConfigOpen, setIsAnalysisConfigOpen] = useState(false)
  return (
    <>
      <main className="flex-1 px-4 sm:px-6 lg:px-margin_safe py-4 sm:py-6 lg:py-8 max-w-7xl mx-auto">
      {/* Greeting Header */}
      <section className="mb-6 sm:mb-lg lg:mb-xl">
        <h1 className="font-h1 text-h1 sm:text-h1 text-on-surface mb-2">Welcome back, Architect.</h1>
        <p className="text-on-surface-variant font-body-main max-w-2xl text-sm sm:text-base">InsightFlow has processed 3 new sources since your last login. Here's a quick look at your current workspace state.</p>
      </section>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-2 sm:gap-4 lg:gap-gutter">
        {/* Getting Started Card */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-low border border-outline-variant p-4 sm:p-6 lg:p-lg rounded-xl relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-primary via-transparent to-tertiary"></div>
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-md">
              <div>
                <h3 className="font-h3 text-h3 sm:text-h3 text-primary mb-1">Getting Started</h3>
                <p className="text-on-surface-variant text-body-sm text-sm sm:text-base">Complete these steps to optimize your current workspace.</p>
              </div>
              <span className="material-symbols-outlined text-primary text-4xl">rocket_launch</span>
            </div>
            <div className="space-y-md">
              <Link href="/dashboard/upload" className="flex items-center gap-md p-3 sm:p-md bg-surface-container rounded-lg border border-outline-variant hover:border-primary/50 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">cloud_upload</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-on-surface text-sm sm:text-base">Upload your first data source</p>
                  <p className="text-xs sm:text-sm text-on-surface-variant">PDFs, JSON, or CSV files supported</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </Link>
              <div className="flex items-center gap-md p-md bg-surface-container rounded-lg border border-outline-variant hover:border-primary/50 transition-colors cursor-pointer" onClick={() => setIsAnalysisConfigOpen(true)}>
                <div className="w-10 h-10 rounded bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-on-surface text-sm sm:text-base">Configure Analysis Parameters</p>
                  <p className="text-xs sm:text-sm text-on-surface-variant">Define what insights you're looking for</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Insight Card */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-high border border-outline-variant p-4 sm:p-6 lg:p-lg rounded-xl flex flex-col">
          <div className="flex items-center gap-2 mb-md">
            <span className="material-symbols-outlined text-tertiary text-xl" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
            <span className="font-mono-label text-mono-label text-tertiary">DAILY INSIGHT</span>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <p className="font-h3 text-h3 sm:text-h3 leading-relaxed text-on-surface text-sm sm:text-base">
              &quot;The correlation between urban green space and citizen engagement has increased by <span className="text-tertiary">14.2%</span> over the last fiscal quarter.&quot;
            </p>
          </div>
          <div className="mt-md pt-md border-t border-outline-variant flex items-center justify-between">
            <span className="text-body-sm text-on-surface-variant italic text-xs sm:text-sm">From: Urban Planning Report v2</span>
            <button className="text-tertiary hover:underline text-body-sm font-medium text-xs sm:text-sm">Explore Map</button>
          </div>
        </div>

        {/* Recent Documents Section */}
        <div className="col-span-12 bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-lg py-3 sm:py-md border-b border-outline-variant flex items-center justify-between">
            <h2 className="font-h2 text-h2 text-lg text-sm sm:text-base lg:text-lg">Recent Documents</h2>
            <button className="text-primary hover:text-blue-400 text-body-sm font-medium flex items-center gap-1 text-xs sm:text-sm">
              View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="divide-y divide-outline-variant">
            {/* Row 1 */}
            <div className="px-4 sm:px-6 lg:px-lg py-3 sm:py-md flex items-center gap-lg hover:bg-slate-900/40 transition-colors">
              <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-400">description</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-on-surface text-sm sm:text-base">Q3 Competitive Analysis.pdf</p>
                <p className="text-xs sm:text-sm text-on-surface-variant">Last updated 2h ago · 4.2 MB</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-mono-label rounded-full border border-tertiary/20">Ready</span>
                <button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface">more_vert</button>
              </div>
            </div>
            {/* Row 2 */}
            <div className="px-4 sm:px-6 lg:px-lg py-3 sm:py-md flex items-center gap-lg hover:bg-slate-900/40 transition-colors">
              <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-400">table_chart</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-on-surface text-sm sm:text-base">Global_Supply_Chain_Raw_Data.csv</p>
                <p className="text-xs sm:text-sm text-on-surface-variant">Last updated 5h ago · 12.8 MB</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="px-2 sm:px-3 py-1 bg-secondary-container/20 text-secondary text-mono-label rounded-full border border-secondary-container/30 flex items-center gap-1 text-xs sm:text-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  Learning
                </span>
                <button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface">more_vert</button>
              </div>
            </div>
            {/* Row 3 */}
            <div className="px-4 sm:px-6 lg:px-lg py-3 sm:py-md flex items-center gap-lg hover:bg-slate-900/40 transition-colors">
              <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-400">folder</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-on-surface text-sm sm:text-base">Market_Research_Batch_04</p>
                <p className="text-xs sm:text-sm text-on-surface-variant">Last updated 1d ago · 22 files</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-mono-label rounded-full border border-tertiary/20">Ready</span>
                <button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface">more_vert</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <footer className="mt-lg sm:mt-xl pt-lg border-t border-outline-variant flex flex-col sm:flex-row justify-between items-center text-body-sm text-on-surface-variant gap-4">
        <p className="text-xs sm:text-sm">© 2024 InsightFlow Analytics Platform</p>
        <div className="flex gap-md">
          <a className="hover:text-primary transition-colors text-xs sm:text-sm" href="#">Terms</a>
          <a className="hover:text-primary transition-colors text-xs sm:text-sm" href="#">Privacy</a>
          <a className="hover:text-primary transition-colors text-xs sm:text-sm" href="#">System Status</a>
        </div>
      </footer>

      {/* Floating Action Button - Only on relevant screens */}
      <button className="fixed bottom-24 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-50">
        <span className="material-symbols-outlined">add</span>
      </button>
    </main>

    {/* Analysis Configuration Modal */}
    <AnalysisConfigModal 
      isOpen={isAnalysisConfigOpen} 
      onClose={() => setIsAnalysisConfigOpen(false)} 
    />
  </>
  )
}
