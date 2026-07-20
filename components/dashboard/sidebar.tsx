'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarProps {
  onClose: () => void
}

export function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname()
  
  const navItems = [
    { id: 'welcome', label: 'Welcome', icon: 'home', iconFilled: 'home', href: '/dashboard' },
    { id: 'upload', label: 'Upload', icon: 'cloud_upload', iconFilled: 'cloud_upload', href: '/dashboard/upload' },
    { id: 'ask', label: 'Ask', icon: 'search', iconFilled: 'search', href: '/dashboard/search' },
    { id: 'documents', label: 'Documents', icon: 'description', iconFilled: 'description', href: '/dashboard/documents' },
  ]
  
  const bottomNavItems = [
    { id: 'help', label: 'Help', icon: 'help_outline', iconFilled: 'help', href: '/dashboard/help' },
    { id: 'feedback', label: 'Feedback', icon: 'chat_bubble_outline', iconFilled: 'chat_bubble', href: '/dashboard/feedback' },
  ]
  
  return (
    <div className="flex flex-col h-full bg-surface-container border-r border-outline-variant/30">
      {/* Logo/Brand Section */}
      <div className="flex items-center justify-between p-4 border-b border-outline-variant/20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-on-primary text-lg" style={{fontVariationSettings: "'FILL' 1"}}>architecture</span>
          </div>
          <div>
            <span className="font-inter font-bold text-on-surface text-base">Workspace</span>
            <p className="text-xs text-on-surface-variant font-medium">InsightFlow</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="lg:hidden p-2 rounded-xl hover:bg-surface-container-high transition-all duration-200"
        >
          <span className="material-symbols-outlined text-on-surface-variant text-lg">close</span>
        </button>
      </div>
      
            
      {/* Main Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        <div className="px-3 py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 relative ${
                  isActive 
                    ? 'bg-primary-container text-on-primary-container shadow-sm' 
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
              >
                <span 
                  className={`material-symbols-outlined text-lg transition-all duration-200 ${
                    isActive ? 'text-on-primary-container' : 'text-on-surface-variant group-hover:text-on-surface'
                  }`}
                  style={{fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0"}}
                >
                  {isActive ? item.iconFilled : item.icon}
                </span>
                <span className="font-inter">{item.label}</span>
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
                )}
              </Link>
            )
          })}
        </div>
      </nav>
      
      {/* Bottom Navigation */}
      <div className="px-3 py-4 border-t border-outline-variant/20">
        <div className="px-3 py-2">
          {bottomNavItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary-container text-on-primary-container shadow-sm' 
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
              >
                <span 
                  className={`material-symbols-outlined text-lg transition-all duration-200 ${
                    isActive ? 'text-on-primary-container' : 'text-on-surface-variant group-hover:text-on-surface'
                  }`}
                  style={{fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0"}}
                >
                  {isActive ? item.iconFilled : item.icon}
                </span>
                <span className="font-inter">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
