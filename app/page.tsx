'use client'

import Link from 'next/link'
import { useState } from 'react'
import { metadata } from './metadata'
import { Modal } from '@/components/ui/modal'
import { PrivacyModalContent } from '@/components/modals/PrivacyModal'
import { TermsModalContent } from '@/components/modals/TermsModal'
import { DocumentationModalContent } from '@/components/modals/DocumentationModal'
import { ApiStatusModalContent } from '@/components/modals/ApiStatusModal'

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (modal: string) => setActiveModal(modal)
  const closeModal = () => setActiveModal(null)
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap px-6 py-4 sticky top-0 bg-background/60 backdrop-blur-2xl z-50">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-blue-500 text-2xl">architecture</span>
            <span className="text-xl font-bold text-slate-50 tracking-tighter">InsightFlow</span>
          </div>
          <div className="flex flex-1 justify-end gap-12">
            <nav className="hidden md:flex items-center gap-10" role="navigation" aria-label="Main navigation">
              <a className="text-on-surface-variant/70 hover:text-primary text-[10px] uppercase tracking-[0.3em] font-bold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2" href="#features">Features</a>
              <a className="text-on-surface-variant/70 hover:text-primary text-[10px] uppercase tracking-[0.3em] font-bold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2" href="#works">Process</a>
              <a className="text-on-surface-variant/70 hover:text-primary text-[10px] uppercase tracking-[0.3em] font-bold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2" href="#performance">Engineering</a>
              <a className="text-on-surface-variant/70 hover:text-primary text-[10px] uppercase tracking-[0.3em] font-bold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2" href="#">Pricing</a>
            </nav>
            <Link href="/login">
              <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary-container text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-inverse-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2" aria-label="Get started with InsightFlow">
                <span className="truncate">Get Started</span>
              </button>
            </Link>
          </div>
        </header>
        <main className="flex-1">
          <section className="relative px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-28 overflow-hidden border-b border-outline-variant/10">
            <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-primary/5 rounded-full blur-[100px] sm:blur-[120px] lg:blur-[150px] -mr-48 sm:-mr-72 lg:-mr-96 -mt-48 sm:-mt-72 lg:-mt-96"></div>
            <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
              <div className="flex flex-col gap-8 sm:gap-12 z-10">
                <div className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-2 rounded-full border border-outline-variant/20 bg-surface-container-low/30 w-fit">
                  <span className="text-mono-label uppercase text-[8px] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.4em] text-secondary font-bold">New v2.0 Release</span>
                  <div className="w-1 h-1 rounded-full bg-secondary"></div>
                  <span className="material-symbols-outlined text-[12px] sm:text-[14px]">auto_awesome</span>
                </div>
                <h1 className="text-white text-4xl lg:text-[60px] font-heading font-bold leading-[0.9] tracking-tighter">
                  Transform static documents into <span className="italic font-normal text-primary/70">intelligence</span>
                </h1>
                <p className="text-on-surface-variant text-lg lg:text-xl max-w-[600px] leading-relaxed font-light opacity-80">
                  The InsightFlow for modern teams. Build your organization's memory in seconds.
                </p>
                <div className="flex flex-col sm:flex-wrap sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6">
                  <Link href="/login">
                    <button className="flex min-w-[140px] sm:min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 sm:h-14 px-6 sm:px-8 bg-primary-container text-white text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold shadow-2xl shadow-primary-container/20 hover:translate-y-[-4px] transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2" aria-label="Start analysis with InsightFlow">
                      <span className="truncate">Start analysis</span>
                    </button>
                  </Link>
                  <button className="flex min-w-[140px] sm:min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 sm:h-14 px-6 sm:px-8 bg-transparent border border-outline-variant/30 text-white text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold hover:bg-surface-container-highest/20 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2" aria-label="Watch demo video">
                    <span className="truncate">Watch Demo</span>
                  </button>
                </div>
              </div>
              <div className="relative z-10 lg:pl-4 sm:lg:pl-8">
                <div className="p-1 rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-outline-variant/30 to-transparent">
                  <div className="glass-panel p-1.5 sm:p-2 rounded-[1.4rem] sm:rounded-[1.8rem] overflow-hidden shadow-2xl bg-black">
                    <img 
  alt="Abstract semantic memory visualization showing interconnected data points and neural network patterns" 
  className="rounded-[1.2rem] sm:rounded-[1.6rem] w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover image-glass-render" 
  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9_kpehUFFSTcW7n9jtwdVmIxCqc7kM08bVbMh3qJP5-eafiT_zRtMidZsDDT7OM-1gKNmtzvcJD9wphGn6vN5Kya2vRk32DNmV4_zuGNG_CKnMUJnCtjfoeavSTZwJt1LH5whkXCb0120B7yKYwgQVAe86eJO1D8YDUUuD7P0Cv5C0D8ReLxFCcU1xJYp6fg2jj_s3s-yZicGNgCkhz-7tcSZsdb5Hz-HqndJovIMlNt9xZDMWXi3iSKTDch-hFpn88lM4B3iNPw"
  loading="lazy"
/>
                  </div>
                </div>
                <div className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 -left-6 sm:-left-8 lg:-left-10 glass-panel p-4 sm:p-6 rounded-[1.2rem] sm:rounded-[1.5rem] border border-primary/20 shadow-3xl backdrop-blur-3xl max-w-xs">
                  <p className="text-mono-label text-primary mb-3 sm:mb-4 text-[8px] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.4em] uppercase font-bold">Semantic Match</p>
                  <p className="text-white font-medium text-base sm:text-lg italic leading-snug">"Corporate Strategy 2024.pdf" relates to "Q3 Growth Targets"</p>
                </div>
              </div>
            </div>
          </section>
          <section className="section-spacing px-4 sm:px-6 lg:px-20 bg-surface-container-lowest/20 relative">
            <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center gap-8 sm:gap-10">
              <div className="p-4 sm:p-6 bg-primary/5 rounded-full text-primary/40 mb-3 sm:mb-4 border border-primary/10">
                <span className="material-symbols-outlined text-3xl sm:text-4xl" aria-hidden="true">hub</span>
              </div>
              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-heading font-bold leading-[0.95] tracking-tight max-w-4xl">Turn Dark Data into Actionable Insights</h2>
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mt-8 sm:mt-12 lg:mt-16 text-left">
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-heading italic border-b border-outline-variant/10 pb-4 sm:pb-6 lg:pb-8 flex items-center gap-3 sm:gap-4">
                    <span className="material-symbols-outlined text-secondary text-3xl sm:text-4xl" aria-hidden="true">psychology</span>
                    Semantic Memory
                  </h3>
                  <p className="text-on-surface-variant text-base sm:text-lg lg:text-xl leading-relaxed font-light opacity-80">
                    Unlike traditional folders, InsightFlow understands the conceptual meaning of your text. It links related ideas across different files, creating a brain-like network of your company's proprietary knowledge.
                  </p>
                </div>
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
                  <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-heading italic border-b border-outline-variant/10 pb-4 sm:pb-6 lg:pb-8 flex items-center gap-3 sm:gap-4">
                    <span className="material-symbols-outlined text-tertiary text-3xl sm:text-4xl" aria-hidden="true">search</span>
                    Vector Search
                  </h3>
                  <p className="text-on-surface-variant text-base sm:text-lg lg:text-xl leading-relaxed font-light opacity-80">
                    Forget exact keyword matching. We convert your data into mathematical "vectors." When you ask a question, we find answers based on context and intent, even if words don't match exactly.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="section-spacing px-4 sm:px-6 lg:px-20" id="features">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex flex-col gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20 items-center text-center">
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-heading font-bold tracking-tight">Core Features</h2>
                <p className="text-on-surface-variant max-w-[800px] text-base sm:text-lg font-light opacity-70">Designed for depth, built for speed. Every tool you need to master your unstructured data silos.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                <div className="flex flex-col gap-6 sm:gap-8 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-outline-variant/10 bg-surface-container-low/20 hover:bg-surface-container-low/40 transition-all group cursor-default">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-surface-container-high/40 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-all border border-outline-variant/10">
                    <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl" aria-hidden="true">upload_file</span>
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <h3 className="text-white text-lg sm:text-xl font-heading italic">Intelligent Ingestion</h3>
                    <p className="text-on-surface-variant leading-relaxed text-xs sm:text-sm font-light opacity-70">Drop PDFs, notes, or CSVs. Our system handles heavy lifting of parsing, OCR, and cleaning data for analysis.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 sm:gap-8 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-outline-variant/10 bg-surface-container-low/20 hover:bg-surface-container-low/40 transition-all group cursor-default">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-surface-container-high/40 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-secondary/10 transition-all border border-outline-variant/10">
                    <span className="material-symbols-outlined text-secondary text-2xl sm:text-3xl" aria-hidden="true">data_object</span>
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <h3 className="text-white text-lg sm:text-xl font-heading italic">Semantic Processing</h3>
                    <p className="text-on-surface-variant leading-relaxed text-xs sm:text-sm font-light opacity-70">Automated summaries and metadata tagging powered by state-of-the-art language models and proprietary embeddings.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 sm:gap-8 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-outline-variant/10 bg-surface-container-low/20 hover:bg-surface-container-low/40 transition-all group cursor-default">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-surface-container-high/40 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-tertiary/10 transition-all border border-outline-variant/10">
                    <span className="material-symbols-outlined text-tertiary text-2xl sm:text-3xl" aria-hidden="true">query_stats</span>
                  </div>
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <h3 className="text-white text-lg sm:text-xl font-heading italic">Vector Search</h3>
                    <p className="text-on-surface-variant leading-relaxed text-xs sm:text-sm font-light opacity-70">Stop searching for keywords. Ask complex questions to your documents and get precise, cited answers in milliseconds.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-spacing px-4 sm:px-6 lg:px-20 bg-surface-container-lowest relative overflow-hidden" id="works">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-16 sm:mb-20 lg:mb-24">
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-heading font-bold mb-4 sm:mb-6 tracking-tight">How InsightFlow Works</h2>
                <p className="text-on-surface-variant text-base sm:text-lg font-light opacity-70">Three simple steps to unlock hidden value in your documents.</p>
              </div>
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-outline-variant/20 to-tertiary/40 -translate-x-1/2 hidden md:block"></div>
                <div className="space-y-16 sm:space-y-24 lg:space-y-32">
                  <div className="relative flex flex-col md:flex-row items-center justify-between group">
                    <div className="md:w-[45%] flex justify-center md:justify-end">
                      <div className="glass-panel p-6 sm:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] border-l-4 sm:border-l-8 border-primary shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                        <span className="material-symbols-outlined text-primary mb-4 sm:mb-6 text-3xl sm:text-4xl" aria-hidden="true">cloud_upload</span>
                        <h4 className="text-white font-heading text-xl sm:text-2xl mb-3 sm:mb-4 italic">Upload</h4>
                        <p className="text-on-surface-variant font-light text-xs sm:text-sm leading-relaxed opacity-80">Securely ingest your unstructured files via API or Drag-and-Drop.</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-container-highest border-4 border-background flex items-center justify-center font-heading text-base sm:text-lg font-bold text-primary shadow-2xl z-10 hidden md:flex">1</div>
                    <div className="md:w-[45%]"></div>
                  </div>
                  <div className="relative flex flex-col md:flex-row items-center justify-between group">
                    <div className="md:w-[45%] order-2 md:order-1"></div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-surface-container-highest border-4 border-background flex items-center justify-center font-heading text-lg font-bold text-secondary shadow-2xl z-10 hidden md:flex">2</div>
                    <div className="md:w-[45%] flex justify-center md:justify-start order-1 md:order-2">
                      <div className="glass-panel p-6 sm:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] border-r-4 sm:border-r-8 border-secondary shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                        <span className="material-symbols-outlined text-secondary mb-4 sm:mb-6 text-3xl sm:text-4xl" aria-hidden="true">model_training</span>
                        <h4 className="text-white font-heading text-xl sm:text-2xl mb-3 sm:mb-4 italic">Analyze</h4>
                        <p className="text-on-surface-variant font-light text-xs sm:text-sm leading-relaxed opacity-80">Our vector engine creates high-dimensional maps of your content.</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-container-highest border-4 border-background flex items-center justify-center font-heading text-base sm:text-lg font-bold text-secondary shadow-2xl z-10 hidden md:flex">2</div>
                  </div>
                  <div className="relative flex flex-col md:flex-row items-center justify-between group">
                    <div className="md:w-[45%] flex justify-center md:justify-end">
                      <div className="glass-panel p-6 sm:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] border-l-4 sm:border-l-8 border-tertiary shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                        <span className="material-symbols-outlined text-tertiary mb-4 sm:mb-6 text-3xl sm:text-4xl" aria-hidden="true">chat_bubble</span>
                        <h4 className="text-white font-heading text-xl sm:text-2xl mb-3 sm:mb-4 italic">Query</h4>
                        <p className="text-on-surface-variant font-light text-xs sm:text-sm leading-relaxed opacity-80">Interact with your data through natural language conversations.</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-container-highest border-4 border-background flex items-center justify-center font-heading text-base sm:text-lg font-bold text-tertiary shadow-2xl z-10 hidden md:flex">3</div>
                    <div className="md:w-[45%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-spacing px-4 sm:px-6 lg:px-20" id="performance">
            <div className="max-w-[1400px] mx-auto relative">
              <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
                <div className="w-full lg:w-1/2 flex flex-col">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="h-[1px] w-8 sm:w-12 bg-primary/40"></div>
                    <span className="text-mono-label text-primary uppercase text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] font-bold">Core Architecture</span>
                  </div>
                  <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-heading font-bold mb-6 sm:mb-8 leading-[0.9] tracking-tighter">
                    Engineered for <br/>
                    <span className="italic font-normal bg-gradient-to-r from-primary/80 to-tertiary-fixed-dim bg-clip-text text-transparent">Performance</span>
                  </h2>
                  <div className="grid gap-4 sm:gap-6 mt-4 sm:mt-6">
                    <div className="metric-card p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] group hover:border-primary/40 transition-all duration-700 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-3 sm:p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-symbols-outlined text-3xl sm:text-5xl" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden="true">bolt</span>
                      </div>
                      <div className="flex items-center gap-4 sm:gap-6">
                        <div className="size-10 sm:size-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                          <span className="material-symbols-outlined text-primary text-xl sm:text-2xl" aria-hidden="true">speed</span>
                        </div>
                        <div>
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-white text-2xl sm:text-3xl font-mono-label font-bold tracking-tighter">142</span>
                            <span className="text-primary/60 text-sm sm:text-base font-medium">ms</span>
                          </div>
                          <h4 className="text-white/90 text-sm sm:text-base font-heading italic mb-1">Sub-Second Latency</h4>
                          <p className="text-on-surface-variant/70 text-xs sm:text-sm font-light leading-relaxed max-w-sm">Proprietary HNSW indexing optimized for RAG operations at massive petabyte scale.</p>
                        </div>
                      </div>
                    </div>
                    <div className="metric-card p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] group hover:border-secondary/40 transition-all duration-700 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-3 sm:p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="material-symbols-outlined text-3xl sm:text-5xl" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden="true">public</span>
                      </div>
                      <div className="flex items-center gap-4 sm:gap-6">
                        <div className="size-10 sm:size-14 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20 shrink-0">
                          <span className="material-symbols-outlined text-secondary text-xl sm:text-2xl" aria-hidden="true">language</span>
                        </div>
                        <div>
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-white text-2xl sm:text-3xl font-mono-label font-bold tracking-tighter">120+</span>
                            <span className="text-secondary/60 text-sm sm:text-base font-medium">Nodes</span>
                          </div>
                          <h4 className="text-white/90 text-sm sm:text-base font-heading italic mb-1">Global Edge Fabric</h4>
                          <p className="text-on-surface-variant/70 text-xs sm:text-sm font-light leading-relaxed max-w-sm">Decentralized vector compute nodes ensuring regional data sovereignty and zero-hop inference.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 relative perspective-1000">
                  <div className="relative z-10 p-6 sm:p-8 rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-3xl shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]">
                    <div className="flex items-center justify-between mb-6 sm:mb-10">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/20"></div>
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/20"></div>
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/20"></div>
                      </div>
                      <div className="px-2 sm:px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                        <span className="text-[8px] sm:text-[9px] text-green-400 font-mono-label uppercase tracking-widest font-bold">Active Stream — Live</span>
                      </div>
                    </div>
                    <div className="relative h-[250px] sm:h-[300px] lg:h-[350px] w-full overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] glow-pulse"></div>
                      <svg className="w-full h-full opacity-40" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <defs>
                          <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
                            <stop offset="0%" stopColor="#b6c4ff" stopOpacity="0.2"></stop>
                            <stop offset="100%" stopColor="#00daf3" stopOpacity="0.8"></stop>
                          </linearGradient>
                        </defs>
                        <circle cx="200" cy="200" fill="none" r="180" stroke="#ffffff" strokeDasharray="2 10" strokeOpacity="0.1" strokeWidth="1"></circle>
                        <circle cx="200" cy="200" fill="none" r="140" stroke="#ffffff" strokeDasharray="1 15" strokeOpacity="0.1" strokeWidth="1"></circle>
                        <circle cx="200" cy="200" fill="none" r="100" stroke="#ffffff" strokeDasharray="4 8" strokeOpacity="0.1" strokeWidth="1"></circle>
                        <g className="animate-spin" style={{animation: 'spin 60s linear infinite', transformOrigin: 'center'}}>
                          <path d="M200 20 L200 60 M200 340 L200 380 M20 200 L60 200 M340 200 L380 200" stroke="#b6c4ff" strokeOpacity="0.2" strokeWidth="2"></path>
                        </g>
                        <g className="animate-pulse" style={{animation: 'pulse 4s ease-in-out infinite', transformOrigin: 'center'}}>
                          <circle cx="200" cy="200" fill="url(#grad1)" r="4"></circle>
                          <circle cx="200" cy="200" fill="none" r="6" stroke="#00daf3" strokeOpacity="0.5" strokeWidth="1"></circle>
                        </g>
                        <path d="M120 120 Q200 50 280 120" fill="none" stroke="#00daf3" strokeDasharray="1000" strokeOpacity="0.3" strokeWidth="1">
                          <animate attributeName="stroke-dashoffset" dur="3s" from="1000" repeatCount="indefinite" to="0"></animate>
                        </path>
                        <path d="M50 200 Q200 150 350 200" fill="none" stroke="#b6c4ff" strokeDasharray="1000" strokeOpacity="0.3" strokeWidth="1">
                          <animate attributeName="stroke-dashoffset" dur="4s" from="1000" repeatCount="indefinite" to="0"></animate>
                        </path>
                        <path d="M120 280 Q200 350 280 280" fill="none" stroke="#cdbdff" strokeDasharray="1000" strokeOpacity="0.3" strokeWidth="1">
                          <animate attributeName="stroke-dashoffset" dur="5s" from="1000" repeatCount="indefinite" to="0"></animate>
                        </path>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="glass-panel px-8 py-6 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl" style={{transform: 'translateY(-20%)'}}>
                          <div className="flex items-center gap-4 mb-4">
                            <span className="material-symbols-outlined text-primary text-sm" aria-hidden="true">database</span>
                            <span className="text-[9px] text-white/40 uppercase tracking-[0.3em] font-bold font-mono-label">Vector Ingestion</span>
                          </div>
                          <div className="font-code-snippet text-sm space-y-1">
                            <div className="flex justify-between gap-8"><span className="text-white/40">Tokens</span> <span className="text-primary">12.4k/s</span></div>
                            <div className="flex justify-between gap-8"><span className="text-white/40">Embedding</span> <span className="text-secondary">E5-Large-v2</span></div>
                            <div className="flex justify-between gap-8"><span className="text-white/40">Memory</span> <span className="text-tertiary-fixed-dim">Optimized</span></div>
                          </div>
                        </div>
                        <div className="glass-panel px-6 py-4 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl absolute bottom-12 right-0" style={{transform: 'translateX(25%)'}}>
                          <div className="flex items-center gap-3">
                            <div className="size-2 rounded-full bg-green-400 animate-pulse"></div>
                            <span className="text-[10px] text-white font-mono-label uppercase tracking-widest">Query Resolved</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 flex justify-between items-end">
                      <div className="space-y-2">
                        <span className="text-[9px] text-white/30 uppercase tracking-[0.4em] font-bold block">Engine State</span>
                        <span className="text-white text-xl font-heading italic">Stable Inference Pipeline</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] text-white/30 uppercase tracking-[0.4em] font-bold block">Uptime</span>
                        <span className="text-white font-mono-label">99.998%</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
                  <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-tertiary/10 rounded-full blur-[80px] -z-10"></div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-spacing px-4 sm:px-6 lg:px-20 text-center bg-gradient-to-b from-background via-surface-container-low/10 to-background">
            <div className="max-w-[1100px] mx-auto flex flex-col items-center gap-6 sm:gap-8 lg:gap-10">
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-heading font-bold tracking-tighter leading-[0.95]">Ready to build your <span className="italic font-normal text-primary/70">knowledge base?</span></h2>
              <p className="text-on-surface-variant text-base sm:text-lg lg:text-xl leading-relaxed font-light opacity-80 max-w-3xl">
                Join over 500+ enterprises who have turned their static documentation into an active competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-3 sm:mt-4 w-full justify-center">
                <button className="flex min-w-[140px] sm:min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 sm:h-14 px-6 sm:px-8 bg-primary-container text-white text-[9px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold hover:scale-105 transition-all shadow-[0_0_80px_-10px_rgba(41,98,255,0.3)]">
                  <span className="truncate">Start Free Trial</span>
                </button>
                <button className="flex min-w-[140px] sm:min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 sm:h-14 px-6 sm:px-8 bg-transparent border border-outline-variant/40 text-white text-[9px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold hover:bg-surface-container-highest/20 transition-all">
                  <span className="truncate">Talk to Sales</span>
                </button>
              </div>
              <p className="text-mono-label text-on-surface-variant/50 mt-4 sm:mt-6 text-[9px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase font-bold">No credit card required • SOC2 Certified</p>
            </div>
          </section>
        </main>
        <footer className="px-4 sm:px-6 lg:px-20 py-6 sm:py-8 lg:py-10 border-t border-outline-variant/10 bg-surface-container-lowest">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 lg:gap-10">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="material-symbols-outlined text-blue-500 text-xl sm:text-2xl">architecture</span>
              <span className="text-white font-heading font-bold text-base sm:text-lg tracking-wider uppercase">InsightFlow</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-on-surface-variant/60 text-[8px] sm:text-[9px] tracking-[0.25em] sm:tracking-[0.3em] font-bold uppercase">
              <button 
                className="hover:text-white transition-colors cursor-pointer" 
                onClick={() => openModal('privacy')}
              >
                Privacy
              </button>
              <button 
                className="hover:text-white transition-colors cursor-pointer" 
                onClick={() => openModal('terms')}
              >
                Terms
              </button>
              <button 
                className="hover:text-white transition-colors cursor-pointer" 
                onClick={() => openModal('documentation')}
              >
                Documentation
              </button>
              <button 
                className="hover:text-white transition-colors cursor-pointer" 
                onClick={() => openModal('api-status')}
              >
                API Status
              </button>
            </div>
            <p className="text-on-surface-variant/30 text-[9px] tracking-[0.5em] font-mono-label uppercase">© 2024 INSIGHTFLOW AI.</p>
          </div>
        </footer>
      </div>
      
      {/* Modals */}
      <Modal 
        isOpen={activeModal === 'privacy'} 
        onClose={closeModal} 
        title="Privacy Policy" 
        badge="Privacy Protocol"
        size="lg"
      >
        <PrivacyModalContent />
      </Modal>
      
      <Modal 
        isOpen={activeModal === 'terms'} 
        onClose={closeModal} 
        title="Terms of Service" 
        badge="Legal Agreement"
        size="lg"
      >
        <TermsModalContent />
      </Modal>
      
      <Modal 
        isOpen={activeModal === 'documentation'} 
        onClose={closeModal} 
        title="Documentation" 
        badge="Developer Resources"
        size="xl"
      >
        <DocumentationModalContent />
      </Modal>
      
      <Modal 
        isOpen={activeModal === 'api-status'} 
        onClose={closeModal} 
        title="API Status" 
        badge="System Status"
        size="md"
      >
        <ApiStatusModalContent />
      </Modal>
    </div>
  )
}
