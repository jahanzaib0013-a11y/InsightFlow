import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-primary-100 text-primary-700 border border-primary-200',
      secondary: 'bg-neutral-100 text-neutral-700 border border-neutral-200',
      success: 'bg-green-100 text-green-700 border border-green-200',
      warning: 'bg-yellow-100 text-yellow-700 border border-yellow-200',
      error: 'bg-red-100 text-red-700 border border-red-200',
      info: 'bg-blue-100 text-blue-700 border border-blue-200',
    }

    const sizes = {
      sm: 'px-2 py-1 text-xs font-medium rounded',
      md: 'px-3 py-1.5 text-sm font-medium rounded-md',
      lg: 'px-4 py-2 text-base font-medium rounded-lg',
    }

    return (
      <div ref={ref} className={`${variants[variant]} ${sizes[size]} ${className}`} {...props}>
        {children}
      </div>
    )
  },
)

Badge.displayName = 'Badge'
