import React from 'react'

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  blur?: 'sm' | 'md' | 'lg'
}

export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ children, blur = 'md', className = '', ...props }, ref) => {
    const blurs = {
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur-md',
      lg: 'backdrop-blur-lg',
    }

    return (
      <div
        ref={ref}
        className={`${blurs[blur]} bg-white/70 border border-white/20 rounded-lg p-6 shadow-lg ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  },
)

GlassPanel.displayName = 'GlassPanel'
