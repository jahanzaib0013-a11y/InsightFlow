'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

export function TopNav() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [showSignoutModal, setShowSignoutModal] = useState(false)
  const router = useRouter()
  const profileRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  return (
    <>
      <header className="sticky top-0 w-full z-40 flex justify-between items-center px-6 h-16 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-slate-50 tracking-tighter font-inter">InsightFlow</span>
        </div>
                <div className="flex items-center gap-4">
          <button className="text-slate-400 hover:text-blue-400 transition-all duration-200 active:scale-95">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => {
                console.log('Profile button clicked, isProfileOpen:', isProfileOpen);
                setIsProfileOpen(!isProfileOpen);
              }}
              className="w-8 h-8 rounded-full overflow-hidden border border-slate-700 hover:border-blue-500 transition-colors cursor-pointer"
            >
              <img 
                alt="User profile" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQm_s9zimv9HpZZBFDkH6DU2xSFzWvXoEM6tmtFIBFR9hCMV2sEVamEbL_SSrp24V6AGnYYQWU3sQJw-LFk-IyXNZLUsDY229bdvDR1CriIVLdJ7MLHNCmgUs2HBG2XXhSiNtPBjVP4dj8PSisCBwxvrau8bnSop11DUsrnDp3BhAZHmGaQedSfGDm82wi2J1rCOfMjcRa88thlPNepS9flgEFmsqf4DnujpHrNOanvjTVrdgzPVscxJPxCAqQmJvJPQgCeL1yxOY"
              />
            </button>
            
            {isProfileOpen && (
              <>
                {/* Backdrop */}
                <div 
                  className="fixed inset-0 bg-black/20 z-[50]" 
                  onClick={() => setIsProfileOpen(false)}
                />
                {/* Dropdown */}
                <div className="absolute right-0 top-14 w-64 bg-slate-950 border border-slate-800 rounded-lg shadow-2xl z-[60] min-w-[256px] overflow-hidden">
                  <div className="p-4 border-b border-slate-800">
                    <p className="font-semibold text-slate-50">John Doe</p>
                    <p className="text-sm text-slate-400">john.doe@example.com</p>
                  </div>
                  <div className="py-2">
                    <Link
                      href="/dashboard/profile"
                      className="flex items-center gap-3 px-4 py-2 text-slate-300 hover:bg-slate-900 hover:text-slate-50 transition-colors"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <span className="material-symbols-outlined">person</span>
                      Profile Settings
                    </Link>
                    <button 
                      onClick={() => {
                        setShowSignoutModal(true)
                        setIsProfileOpen(false)
                      }}
                      className="flex items-center gap-3 px-4 py-2 text-slate-300 hover:bg-slate-900 hover:text-slate-50 transition-colors w-full text-left"
                    >
                      <span className="material-symbols-outlined">logout</span>
                      Sign Out
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Signout Confirmation Modal */}
      {showSignoutModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-slate-950 border border-slate-800 rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-red-500">logout</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-50">Sign Out</h3>
                <p className="text-sm text-slate-400">Are you sure you want to sign out?</p>
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowSignoutModal(false)}
                className="flex-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Clear any auth tokens/session here
                  localStorage.removeItem('authToken')
                  sessionStorage.removeItem('userSession')
                  // Redirect to login page
                  router.push('/login')
                }}
                className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
