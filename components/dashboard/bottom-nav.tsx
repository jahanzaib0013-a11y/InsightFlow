'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { id: 'library', label: 'Library', icon: 'book_2', href: '/dashboard' },
    { id: 'search', label: 'Search', icon: 'search', href: '/dashboard/search' },
    { id: 'upload', label: 'Upload', icon: 'upload_file', href: '/dashboard/upload' },
    { id: 'help', label: 'Help', icon: 'help_outline', href: '/dashboard/help' },
  ]

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface-container border-t border-outline-variant/30 z-40">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                isActive 
                  ? 'text-primary' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span 
                className={`material-symbols-outlined text-xl ${
                  isActive ? 'text-primary' : ''
                }`}
              >
                {item.icon}
              </span>
              <span className="text-xs font-medium">
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
