'use client'

import { ReactNode, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@/components/ui/icon'
import { Button } from '@/components/ui/button'

interface DashboardLayoutProps {
  children: ReactNode
  activeTab?: 'library' | 'upload' | 'ask' | 'search'
}

const navItems = [
  { id: 'library', label: 'My Library', icon: 'folder_open', href: '/dashboard' },
  { id: 'search', label: 'Search', icon: 'search', href: '/dashboard/search' },
  { id: 'upload', label: 'Upload', icon: 'upload_file', href: '/dashboard/upload' },
]

export function DashboardLayout({ children, activeTab = 'library' }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-blue-900/20 to-neutral-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-700/20 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hidden lg:flex p-2 hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <Icon name={sidebarOpen ? 'menu_open' : 'menu'} size="lg" />
          </button>
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <span className="hidden sm:inline font-grotesk font-bold text-white">InsightFlow</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/dashboard" className="text-sm text-neutral-400 hover:text-white">
            My Library
          </Link>
          <Link href="/dashboard/search" className="text-sm text-neutral-400 hover:text-white">
            Search
          </Link>
          <Link href="/dashboard/upload" className="text-sm text-neutral-400 hover:text-white">
            Upload
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-neutral-800 rounded-lg transition-colors text-neutral-400 hover:text-white">
            <Icon name="notifications" size="lg" />
          </button>
          <button className="p-2 hover:bg-neutral-800 rounded-lg transition-colors text-neutral-400 hover:text-white">
            <Icon name="settings" size="lg" />
          </button>
          <Link href="/dashboard/upload">
            <Button variant="primary" size="md" className="hidden sm:inline-flex">
              New Analysis
            </Button>
          </Link>
          <button className="w-10 h-10 rounded-full bg-accent-blue/20 border border-accent-blue/50 flex items-center justify-center">
            <Icon name="person" size="md" className="text-accent-blue" />
          </button>
        </div>
      </header>

      <div className="flex h-screen bg-background">
        {/* Sidebar */}
        <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 sm:w-72 bg-surface-container border-r border-outline-variant/30 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <nav className="h-full flex flex-col p-6 space-y-2 overflow-y-auto">
            {/* Workspace Section */}
            <div className="mb-6">
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
                Workspace
              </p>
              <p className="text-xs text-neutral-400 mb-4">BEGINNER MODE</p>

              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === item.id
                      ? 'bg-primary-500/20 border border-primary-500/50 text-primary-400'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                  }`}
                >
                  <Icon name={item.icon} size="md" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-auto space-y-2 pt-6 border-t border-neutral-700/50">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/50 transition-all text-sm">
                <Icon name="help" size="md" />
                Help
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/50 transition-all text-sm">
                <Icon name="rate_review" size="md" />
                Feedback
              </button>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? 'lg:ml-64' : ''
          } overflow-auto`}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
