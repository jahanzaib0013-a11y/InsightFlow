import React from 'react'

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700
  filled?: boolean
}

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  (
    { name, size = 'md', weight = 400, filled = false, className = '', style, ...props },
    ref,
  ) => {
    const sizes = {
      sm: '16px',
      md: '24px',
      lg: '32px',
      xl: '40px',
    }

    return (
      <span
        ref={ref}
        className={`material-symbols-rounded ${className}`}
        style={{
          fontSize: sizes[size],
          fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`,
          ...style,
        }}
        {...props}
      >
        {name}
      </span>
    )
  },
)

Icon.displayName = 'Icon'
