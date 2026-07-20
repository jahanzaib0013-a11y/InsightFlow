'use client'

import { TopNav } from '@/components/dashboard/top-nav'
import { Sidebar } from '@/components/dashboard/sidebar'
import { BottomNav } from '@/components/dashboard/bottom-nav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="font-body-main text-on-background bg-background min-h-screen">
      <TopNav />
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Hide sidebar on mobile, show on desktop */}
        <div className="hidden lg:block w-72">
          <Sidebar onClose={() => {}} />
        </div>
        {/* Main content with bottom padding for mobile nav */}
        <main className="flex-1 pb-16 lg:pb-0 overflow-y-auto">
          {children}
        </main>
      </div>
      {/* Bottom navigation for mobile */}
      <BottomNav />
    </div>
  )
}
