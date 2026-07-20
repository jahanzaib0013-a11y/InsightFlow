'use client'

import { useState } from 'react'

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-margin_safe py-6 sm:py-lg lg:py-xl flex flex-col">
            
      {/* Hero Search Input */}
      <div className="relative group mb-6 sm:mb-lg lg:mb-xl">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-tertiary rounded-xl blur opacity-20 group-focus-within:opacity-40 transition duration-1000"></div>
        <div className="relative bg-surface-container-low border border-outline-variant rounded-xl flex items-center p-3 sm:p-md">
          <span className="material-symbols-outlined text-outline ml-sm">search</span>
          <input 
            className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline font-body-main px-3 sm:px-md h-12 text-sm sm:text-base" 
            placeholder="Ask a question about your documents..." 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <kbd className="hidden md:flex items-center gap-1 px-2 py-1 bg-surface-variant text-on-surface-variant rounded text-[10px] font-bold border border-outline-variant/30">
            <span>⌘</span>K
          </kbd>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-lg">
        <h3 className="font-h3 text-h3 sm:text-h3 text-on-surface flex items-center gap-2 text-lg sm:text-xl lg:text-h3">
          <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
          Answers
        </h3>

        {/* Result Card 1 */}
        <article className="glass-panel rounded-xl p-lg hover:border-primary/40 transition-all duration-300">
          <div className="flex flex-col gap-md">
            <p className="text-on-surface font-body-main leading-relaxed text-sm sm:text-base">
              Based on the structural analysis, the load-bearing capacity of the primary truss system is rated for up to 450kN per node. This exceeds the initial project requirements by approximately 15%, allowing for the proposed rooftop garden installation without additional reinforcement.
            </p>
            <div className="flex items-center justify-between border-t border-outline-variant/30 pt-md">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-sm">description</span>
                <span className="text-mono-label font-mono-label text-on-surface-variant text-xs sm:text-sm">Source:</span>
                <span className="text-mono-label font-mono-label text-tertiary text-xs sm:text-sm">Structural_Specs_V4.pdf</span>
              </div>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">open_in_new</span>
              </button>
            </div>
          </div>
        </article>

        {/* Result Card 2 */}
        <article className="glass-panel rounded-xl p-lg hover:border-primary/40 transition-all duration-300">
          <div className="flex flex-col gap-md">
            <p className="text-on-surface font-body-main leading-relaxed text-sm sm:text-base">
              The ventilation strategy for the West Atrium utilizes passive stacks integrated into the glass facade. Computational fluid dynamics modeling suggests that during summer peak hours, the interior temperature will remain at a stable 22°C with minimal mechanical cooling.
            </p>
            <div className="flex items-center justify-between border-t border-outline-variant/30 pt-md">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-sm">description</span>
                <span className="text-mono-label font-mono-label text-on-surface-variant text-xs sm:text-sm">Source:</span>
                <span className="text-mono-label font-mono-label text-tertiary text-xs sm:text-sm">Environmental_Control_Report.docx</span>
              </div>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">open_in_new</span>
              </button>
            </div>
          </div>
        </article>
      </div>

      {/* Suggested Questions (Chips) */}
      <div className="mt-auto pt-xl pb-lg">
        <p className="text-mono-label font-mono-label text-outline mb-md uppercase tracking-widest text-xs sm:text-sm">Suggested Questions</p>
        <div className="flex flex-wrap gap-sm">
          <button className="px-3 sm:px-md py-2 sm:py-sm rounded-full bg-[rgba(124,77,255,0.1)] text-secondary border border-secondary/20 hover:bg-secondary/20 transition-all text-mono-label font-mono-label active:scale-95 text-xs sm:text-sm">
            Summarize recent architectural changes
          </button>
          <button className="px-3 sm:px-md py-2 sm:py-sm rounded-full bg-[rgba(124,77,255,0.1)] text-secondary border border-secondary/20 hover:bg-secondary/20 transition-all text-mono-label font-mono-label active:scale-95 text-xs sm:text-sm">
            What are the budget constraints?
          </button>
          <button className="px-3 sm:px-md py-2 sm:py-sm rounded-full bg-[rgba(124,77,255,0.1)] text-secondary border border-secondary/20 hover:bg-secondary/20 transition-all text-mono-label font-mono-label active:scale-95 text-xs sm:text-sm">
            Timeline for Phase 2 completion
          </button>
          <button className="px-3 sm:px-md py-2 sm:py-sm rounded-full bg-[rgba(124,77,255,0.1)] text-secondary border border-secondary/20 hover:bg-secondary/20 transition-all text-mono-label font-mono-label active:scale-95 text-xs sm:text-sm">
            Compare vendor proposals
          </button>
        </div>
      </div>
    </main>
  )
}
