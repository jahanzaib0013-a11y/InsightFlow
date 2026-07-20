import React from 'react'

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'spinner' | 'pulse'
}

export const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ size = 'md', variant = 'spinner', className = '', ...props }, ref) => {
    const sizes = {
      sm: 'w-4 h-4 border-2',
      md: 'w-8 h-8 border-3',
      lg: 'w-12 h-12 border-4',
    }

    if (variant === 'pulse') {
      return (
        <div
          ref={ref}
          className={`${sizes[size]} rounded-full bg-primary-200 animate-pulse-subtle ${className}`}
          {...props}
        />
      )
    }

    return (
      <div
        ref={ref}
        className={`${sizes[size]} border-primary-300 border-t-primary-600 rounded-full animate-spin ${className}`}
        {...props}
      />
    )
  },
)

Loader.displayName = 'Loader'
