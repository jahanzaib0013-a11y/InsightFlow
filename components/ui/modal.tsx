'use client'

import { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  badge?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Modal({ isOpen, onClose, title, badge, children, size = 'md' }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-surface-container-low/80 backdrop-blur-xl border-b border-outline-variant/20 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-md">
              {badge && (
                <span className="font-mono-label text-mono-label text-tertiary px-sm py-xs glass-panel rounded-full border-tertiary/20">
                  {badge}
                </span>
              )}
              <h2 className="font-h2 text-h2 text-on-surface text-lg sm:text-xl lg:text-h2">{title}</h2>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container/50 border border-outline-variant/30 hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-on-surface p-2 sm:p-3"
            >
              <span className="material-symbols-outlined text-sm sm:text-lg">close</span>
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
