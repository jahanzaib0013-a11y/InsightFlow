'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false)

  return (
    <main className="flex-1 overflow-y-auto">
      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-margin_safe py-6 sm:py-lg lg:py-xl">
        {/* Hero / Header Section */}
        <div className="mb-8 sm:mb-lg lg:mb-xl text-center">
          <h1 className="font-h1 text-h1 sm:text-h1 text-on-surface mb-md text-lg sm:text-xl lg:text-h1">Import Your Knowledge</h1>
          <p className="font-body-main text-body-main text-on-surface-variant max-w-2xl mx-auto text-sm sm:text-base">
                        Turn complex documents into interactive blueprints. Our AI reads every word so you can focus on building what matters.
                </p>
        </div>

        {/* Main Upload Interaction */}
        <div className="grid grid-cols-12 gap-gutter">
          {/* Drop Zone */}
          <div className="col-span-12 lg:col-span-8">
            <div className="relative group cursor-pointer h-[300px] sm:h-[350px] lg:h-[400px] rounded-xl border-2 border-dashed border-outline-variant hover:border-primary transition-all duration-300 bg-surface-container-low flex flex-col items-center justify-center p-4 sm:p-6 lg:p-xl">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="mb-lg relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl sm:text-4xl lg:text-5xl">cloud_upload</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-tertiary rounded-full flex items-center justify-center text-on-tertiary shadow-lg">
                  <span className="material-symbols-outlined text-sm sm:text-lg" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
                </div>
              </div>
              <h2 className="font-h2 text-h2 sm:text-h2 text-on-surface text-center mb-sm text-lg sm:text-xl lg:text-h2">Drop your files here</h2>
              <p className="font-body-main text-body-main text-on-surface-variant text-center mb-lg text-sm sm:text-base">
                            PDF, DOCX, or TXT files up to 50MB
                        </p>
              <button className="bg-primary text-on-primary px-6 sm:px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:brightness-110 transition-all text-sm sm:text-base">
                <span className="material-symbols-outlined text-sm sm:text-base">attach_file</span>
                            Browse Files
                        </button>
            </div>

            {/* Active Upload Feedback (Asymmetric placement) */}
            <div className="mt-lg p-3 sm:p-md glass-panel border border-outline-variant rounded-xl flex flex-col gap-sm">
              <div className="flex justify-between items-center mb-xs">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">description</span>
                  <span className="font-body-main text-body-main text-on-surface-variant font-medium text-sm sm:text-base">Q4_Market_Analysis_Report.pdf</span>
                </div>
                <span className="font-mono-label text-mono-label text-primary text-xs sm:text-sm">READING...</span>
              </div>
              <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[65%] rounded-full shadow-[0_0_10px_rgba(182,196,255,0.5)]"></div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-base animate-pulse">auto_awesome</span>
                Reading your document... Identifying key architects and structures.
              </p>
            </div>
          </div>

          {/* How it Works Side Panel */}
          <div className="col-span-12 lg:col-span-4 space-y-4 lg:space-y-gutter">
            <div className="p-4 sm:p-6 lg:p-lg bg-surface-container rounded-xl border border-outline-variant">
              <h3 className="font-h3 text-h3 sm:text-h3 text-on-surface mb-lg flex items-center gap-2 text-lg sm:text-xl lg:text-h3">
                <span className="material-symbols-outlined text-tertiary">info</span>
                            How it works
                        </h3>
              <div className="space-y-4 sm:space-y-lg">
                {/* Step 1 */}
                <div className="flex gap-md">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-primary flex items-center justify-center font-mono-label text-primary">1</div>
                  <div>
                    <h4 className="font-body-main font-bold text-on-surface text-sm sm:text-base">Upload</h4>
                    <p className="font-body-sm text-on-surface-variant text-xs sm:text-sm">Drag documents into workspace to begin processing.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-md">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-primary flex items-center justify-center font-mono-label text-primary">2</div>
                  <div>
                    <h4 className="font-body-main font-bold text-on-surface text-sm sm:text-base">AI Reads</h4>
                    <p className="font-body-sm text-on-surface-variant text-xs sm:text-sm">Our engine parses text, tables, and relationships automatically.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-md">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-primary flex items-center justify-center font-mono-label text-primary">3</div>
                  <div>
                    <h4 className="font-body-main font-bold text-on-surface text-sm sm:text-base">Ask Questions</h4>
                    <p className="font-body-sm text-on-surface-variant text-xs sm:text-sm">Chat with your document to extract insights and summaries.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Pro Tip Card */}
            <div className="p-4 sm:p-6 lg:p-lg bg-secondary-container/20 border border-secondary/30 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-secondary">lightbulb</span>
              </div>
              <span className="inline-block px-2 py-0.5 rounded bg-secondary/10 text-secondary font-mono-label text-[9px] sm:text-[10px] mb-2 border border-secondary/20">PRO TIP</span>
              <h4 className="font-body-main font-bold text-on-secondary-container mb-1 text-sm sm:text-base">Bulk Processing</h4>
              <p className="font-body-sm text-on-secondary-container/80 text-xs sm:text-sm">You can upload up to 20 files at once to build a unified library.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Recent Activity Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-margin_safe mt-lg sm:mt-xl">
        <div className="flex justify-between items-end mb-lg">
          <div>
            <h3 className="font-h3 text-h3 sm:text-h3 text-on-surface text-lg sm:text-xl lg:text-h3">Recently Read</h3>
            <p className="font-body-sm text-on-surface-variant text-sm sm:text-base">Ready for analysis</p>
          </div>
          <button className="text-primary font-mono-label flex items-center gap-1 hover:underline text-xs sm:text-sm">
            VIEW LIBRARY <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
          {/* Recent File 1 */}
          <div className="bg-surface-container-low border border-outline-variant p-md rounded-xl hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-md">
              <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">article</span>
              </div>
              <span className="px-2 py-1 bg-tertiary/10 text-tertiary font-mono-label rounded border border-tertiary/20">READY</span>
            </div>
            <h5 className="font-body-main font-bold text-on-surface truncate text-sm sm:text-base">Engineering_Specs_v2.pdf</h5>
            <p className="font-body-sm text-on-surface-variant mt-1 text-xs sm:text-sm">Uploaded 2 hours ago</p>
          </div>
          {/* Recent File 2 */}
          <div className="bg-surface-container-low border border-outline-variant p-md rounded-xl hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-md">
              <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">description</span>
              </div>
              <span className="px-2 py-1 bg-tertiary/10 text-tertiary font-mono-label rounded border border-tertiary/20">READY</span>
            </div>
            <h5 className="font-body-main font-bold text-on-surface truncate text-sm sm:text-base">Client_Feedback_Summary.docx</h5>
            <p className="font-body-sm text-on-surface-variant mt-1 text-xs sm:text-sm">Uploaded Yesterday</p>
          </div>
          {/* Recent File 3 */}
          <div className="bg-surface-container-low border border-outline-variant p-md rounded-xl hover:border-primary/50 transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-md">
              <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">dataset</span>
              </div>
              <span className="px-2 py-1 bg-tertiary/10 text-tertiary font-mono-label rounded border border-tertiary/20">READY</span>
            </div>
            <h5 className="font-body-main font-bold text-on-surface truncate text-sm sm:text-base">Financial_Projections_2025.txt</h5>
            <p className="font-body-sm text-on-surface-variant mt-1 text-xs sm:text-sm">Uploaded 2 days ago</p>
          </div>
        </div>
      </div>
    </main>
  )
}
